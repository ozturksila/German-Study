/* =========================================================
   The offline checker.

   Runs entirely in the browser with no key, no account and no
   network. It cannot judge meaning — only a model can do that —
   but it reliably catches the mechanical things a B2 examiner
   deducts for: length, structure, register slips, repetition,
   missing task elements and a handful of frequent learner errors.

   It always runs. AI correction, when available, is added on top.
   ========================================================= */
window.CHECKER = (function () {
  const TUNING = {
    a1: { maxSent: 12, minConn: 1, minPara: 1, variety: 0.40 },
    a2: { maxSent: 15, minConn: 2, minPara: 1, variety: 0.42 },
    b1: { maxSent: 20, minConn: 3, minPara: 2, variety: 0.45 },
    b2: { maxSent: 25, minConn: 4, minPara: 3, variety: 0.48 },
    c1: { maxSent: 30, minConn: 5, minPara: 3, variety: 0.50 },
    c2: { maxSent: 35, minConn: 6, minPara: 3, variety: 0.52 }
  };

  const CONNECTORS = ['weil', 'denn', 'obwohl', 'trotzdem', 'deshalb', 'darum', 'daher', 'deswegen',
    'allerdings', 'jedoch', 'dennoch', 'zwar', 'außerdem', 'zudem', 'ferner', 'darüber hinaus',
    'einerseits', 'andererseits', 'dagegen', 'hingegen', 'während', 'sobald', 'sodass', 'damit',
    'falls', 'sofern', 'indem', 'zunächst', 'schließlich', 'abschließend', 'folglich', 'somit'];

  // At A1 and A2 the plain connectors are exactly what is being learned, so they count.
  const BASIC_CONNECTORS = ['und', 'aber', 'oder', 'dann', 'auch', 'danach'];

  // Spoken-register markers that cost marks in a formal written text
  const SPOKEN = ['halt', 'voll', 'krass', 'mega', 'echt jetzt', 'irgendwie so', 'ne?', 'oder so',
    'ok', 'okay', 'hi ', 'hey ', 'tschüss', 'quatsch', 'blöd', 'cool', 'total super'];

  // Things a task can ask for; each is detected by a pattern
  const EXPECTATIONS = {
    'opinion':        { label: 'a clear personal position', re: /\b(meiner\s+(ansicht|meinung)\s+nach|ich\s+bin\s+der\s+(auffassung|meinung|ansicht)|ich\s+(halte|vertrete|finde|denke|glaube|meine)\b|aus\s+meiner\s+sicht|persönlich)/i },
    'arguments':      { label: 'reasons for your position', re: /\b(weil|denn|dafür\s+spricht|ein\s+(wichtiges|gewichtiges)\s+argument|der\s+grund\s+dafür|begründ)/i },
    'examples':       { label: 'at least one example', re: /\b(zum\s+beispiel|beispielsweise|ein\s+beispiel|etwa\s+|z\.\s?b\.)/i },
    'counter':        { label: 'a counter-argument you address', re: /\b(zwar|allerdings|jedoch|dennoch|andererseits|einwenden|eingewendet|gegenargument|kritiker|befürworter|man\s+könnte\s+einwenden)\b/i },
    'conclusion':     { label: 'a closing conclusion', re: /\b(abschließend|zusammenfassend|insgesamt|alles\s+in\s+allem|fazit|letztlich|zum\s+schluss)\b/i },
    'indirect':       { label: 'indirect speech (Konjunktiv I or II)', re: /\b(sei|seien|seist|habe|habest|hätten|hätte|werde|würde[nst]?|solle|könne|müsse|wolle|möge|zufolge|laut)\b/i },
    'politeness':     { label: 'diplomatic Konjunktiv II', re: /\b(hätte|wäre|könnte|würde|müsste|dürfte|sollte|ließe)\b/i },
    'passive':        { label: 'a passive or a passive alternative', re: /\b(wird|wurde|werden|wurden|worden)\b|\blässt\s+sich\b|\bist\s+zu\s+\w+en\b|\bman\b/i },
    'formal-opening': { label: 'a formal salutation', re: /sehr\s+geehrte/i },
    'formal-closing': { label: 'a formal sign-off', re: /mit\s+freundlichen\s+grüßen|mit\s+freundlichem\s+gruß/i },
    'informal-opening': { label: 'a greeting', re: /\b(liebe[rs]?|hallo|hi)\b/i },
    'greeting':       { label: 'a greeting', re: /\b(guten\s+(morgen|tag|abend)|hallo|liebe[rs]?|sehr\s+geehrte)/i },
    'self-intro':     { label: 'your name', re: /\b(ich\s+(heiße|heisse|bin)|mein\s+(name|nachname)\s+ist|mein\s+nachname)\b/i },
    'thanks':         { label: 'a thank-you', re: /\b(danke|vielen\s+dank|herzlichen\s+dank)/i },
    'farewell':       { label: 'a goodbye', re: /\b(auf\s+wiedersehen|tschüss|tschuess|bis\s+(bald|morgen|später|dann)|viele\s+grüße|liebe\s+grüße|mit\s+freundlichen\s+grüßen|schönen\s+tag)/i },
    'spelling':       { label: 'a name spelled out letter by letter', re: /(?:[A-Za-zÄÖÜäöü]\s*[-,]\s*){3,}[A-Za-zÄÖÜäöü]|buchstabier|schreibt\s+man/i },
    'nominal':        { label: 'nominal style (aufgrund, trotz, bei …)', re: /\b(aufgrund|wegen|trotz|infolge|mittels|hinsichtlich|bezüglich|im\s+hinblick\s+auf|zur\s+\w+ung)\b/i }
  };

  function words(t) { return (t.match(/[\p{L}\p{N}'’-]+/gu) || []); }
  function sentences(t) {
    return t.split(/(?<=[.!?])\s+/).map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function paragraphs(t) {
    return t.split(/\n\s*\n/).map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function run(ctx) {
    const text = String(ctx.text || '');
    const tune = TUNING[ctx.levelCode] || TUNING.b1;
    // beginner levels: short, repetitive sentences are the goal, not a flaw
    const early = ctx.levelCode === 'a1' || ctx.levelCode === 'a2';
    const w = words(text);
    const sents = sentences(text);
    const paras = paragraphs(text);
    const lower = text.toLowerCase();

    const notes = [];   // { type: 'good'|'warn'|'info', msg }
    function good(m) { notes.push({ type: 'good', msg: m }); }
    function warn(m) { notes.push({ type: 'warn', msg: m }); }
    function info(m) { notes.push({ type: 'info', msg: m }); }

    /* ---- length ---- */
    if (w.length < ctx.minWords) warn('Too short: ' + w.length + ' words, the task asks for at least ' + ctx.minWords + '. Short texts lose task marks before anything else is even read.');
    else if (w.length > ctx.maxWords) warn('Too long: ' + w.length + ' words against a limit of ' + ctx.maxWords + '. Over-length texts are penalised in most exams.');
    else good('Length is right: ' + w.length + ' words, inside ' + ctx.minWords + '–' + ctx.maxWords + '.');

    /* ---- structure ---- */
    if (paras.length < tune.minPara) {
      warn('Only ' + paras.length + ' paragraph' + (paras.length === 1 ? '' : 's') + '. At ' + ctx.level +
           ' an examiner expects at least ' + tune.minPara + ' — separate them with a blank line.');
    } else good(paras.length + ' paragraphs — the text is visibly structured.');

    const longest = sents.reduce(function (a, s) { return Math.max(a, words(s).length); }, 0);
    const avg = sents.length ? Math.round(w.length / sents.length) : 0;
    info(sents.length + ' sentences, average ' + avg + ' words, longest ' + longest + '.');
    if (longest > tune.maxSent + 12) warn('One sentence runs to ' + longest + ' words. Long sentences are fine in German, but past about ' + (tune.maxSent + 10) + ' the reader loses the verb — consider splitting it.');
    if (!early && sents.length > 3 && avg < Math.max(6, tune.maxSent / 3)) warn('Sentences average only ' + avg + ' words. At ' + ctx.level + ' examiners look for some complex syntax, not only short main clauses.');

    /* ---- sentence openings ---- */
    const openers = sents.map(function (s) { return (words(s)[0] || '').toLowerCase(); });
    const ichStart = openers.filter(function (o) { return o === 'ich'; }).length;
    // Beginners introduce themselves with "Ich heiße… Ich wohne…": only flag it from A2 up, and gently.
    if (ctx.levelCode !== 'a1' && sents.length >= 4 && ichStart / sents.length > (early ? 0.7 : 0.4)) {
      warn(ichStart + ' of ' + sents.length + ' sentences start with „ich". Vary the opening — put a time, a connector or an object first and let the verb stay in second position.');
    }
    const uniqueOpeners = openers.filter(function (v, i, a) { return v && a.indexOf(v) === i; }).length;
    if (!early && sents.length >= 5 && uniqueOpeners / sents.length < 0.6) {
      warn('Sentence openings repeat a lot (' + uniqueOpeners + ' different openings in ' + sents.length + ' sentences).');
    }

    /* ---- connectors ---- */
    const connList = early ? CONNECTORS.concat(BASIC_CONNECTORS) : CONNECTORS;
    const used = connList.filter(function (c) { return new RegExp('\\b' + c.replace(/\s/g, '\\s+') + '\\b', 'i').test(lower); });
    if (used.length < tune.minConn) {
      warn('Only ' + used.length + ' different connector' + (used.length === 1 ? '' : 's') + ' (' + (used.join(', ') || 'none') +
           '). At ' + ctx.level + ' aim for at least ' + tune.minConn + ' — they are what makes a text read as argued rather than listed.');
    } else good(used.length + ' different connectors: ' + used.slice(0, 8).join(', ') + '.');

    /* ---- repetition ---- */
    const freq = {};
    const FUNCTION_WORDS = ['nicht', 'dieser', 'diese', 'dieses', 'diesen', 'dieser', 'einer', 'einen', 'einem', 'eines',
      'werden', 'wurde', 'wurden', 'wird', 'haben', 'sein', 'sind', 'dass', 'auch', 'noch', 'aber', 'oder', 'sehr',
      'wenn', 'dann', 'denn', 'durch', 'nach', 'über', 'unter', 'zwischen', 'ihrer', 'ihren', 'seine', 'seiner',
      'mehr', 'viele', 'einige', 'jedoch', 'daher', 'ohne', 'sich', 'dazu', 'damit', 'dabei', 'wurde'];
    w.forEach(function (x) {
      const k = x.toLowerCase();
      if (k.length < 5 || FUNCTION_WORDS.indexOf(k) >= 0) return;
      freq[k] = (freq[k] || 0) + 1;
    });
    const repeated = Object.keys(freq).filter(function (k) { return freq[k] >= 4; })
      .sort(function (a, b) { return freq[b] - freq[a]; }).slice(0, 4);
    if (repeated.length) {
      warn('Repeated often: ' + repeated.map(function (k) { return '„' + k + '" ×' + freq[k]; }).join(', ') +
           '. Reach for a synonym at least once — vocabulary range is marked separately.');
    }

    /* ---- register ---- */
    // Whole-word match only: "halt" must not fire inside "festhalten", nor "voll" inside "vollständig".
    const spoken = SPOKEN.filter(function (s) {
      const w = s.trim().replace(/[.?]/g, '\\$&');
      return new RegExp('(?<!\\p{L})' + w + '(?!\\p{L})', 'iu').test(text);
    });
    if (spoken.length) warn('Spoken-register words in a written text: ' + spoken.map(function (s) { return '„' + s.trim() + '"'; }).join(', ') + '.');

    /* ---- frequent mechanical errors ---- */
    const mech = [];
    // subordinating conjunction with no comma before it
    const noComma = text.match(/[\p{L}]\s+(dass|weil|obwohl|damit|wenn|falls|sodass|während|bevor|nachdem|ob)\b/giu) || [];
    noComma.forEach(function (m) {
      if (!/[,;:]/.test(m)) mech.push('„…' + m.trim() + '" — a subordinate clause normally takes a comma in front of it.');
    });
    // English intrusions
    // Letters in a spelled-out name (S-C-H-M-I-D-T, K, R, Ü …) are not the English pronoun.
    const withoutSpelling = text.replace(/(?:[A-Za-zÄÖÜäöü]\s*[-,]\s*){2,}[A-Za-zÄÖÜäöü]/g, ' ');
    if (/\bI\b/.test(withoutSpelling)) mech.push('„I" appears — in German that is „ich", and it is lower case mid-sentence.');
    // sentence not ending in punctuation — but a letter ends with a name, which takes none
    const lines = text.trim().split(/\n/).filter(function (l) { return l.trim(); });
    const lastLine = (lines[lines.length - 1] || '').trim();
    const looksLikeSignature = words(lastLine).length <= 5 && !/[.!?]$/.test(lastLine) &&
      (/mit\s+freundlichen\s+grüßen|viele\s+grüße|beste\s+grüße|liebe\s+grüße/i.test(text) || lines.length > 3);
    if (text.trim() && !/[.!?]$/.test(text.trim()) && !looksLikeSignature) {
      mech.push('The text does not end with a full stop.');
    }
    // article + lower-case word: often a missing capital, sometimes just an adjective
    // Flag only when nothing capitalised follows: "der neuen Regelung" is correct
    // German (adjective, then noun), while "der regelung" is a missing capital.
    // No /i flag: the second group must stay strictly lower-case, or the test
    // would match correctly capitalised nouns and flag them as errors.
    const artRe = /\b([Dd]er|[Dd]ie|[Dd]as|[Dd]en|[Dd]em|[Dd]es|[Ee]in|[Ee]ine|[Ee]inen|[Ee]inem|[Ee]iner|[Ee]ines)\s+([a-zäöüß]{4,})(\s+(\p{L}+))?/gu;
    const maybeNoun = [];
    let am;
    while ((am = artRe.exec(text)) !== null) {
      const word = am[2], next = am[4] || '';
      const adjectiveShaped = /(e|en|er|es|em)$/.test(word);
      const capitalFollows = next && /^\p{Lu}/u.test(next);
      if (adjectiveShaped && capitalFollows) continue;   // article + adjective + noun — fine
      maybeNoun.push(am[1] + ' ' + word);
      if (maybeNoun.length >= 4) break;
    }
    maybeNoun.forEach(function (m) {
      mech.push('„' + m + '" — if „' + m.split(' ')[1] + '" is a noun it needs a capital letter. (If it is an adjective, this is fine.)');
    });
    // das / dass — the most frequent single error in German learner writing
    const dasDass = text.match(/\b(denke|glaube|meine|finde|hoffe|sagte?|weiß|wusste|bedeutet|heißt|verstehe)\s+das\s+\p{L}+/giu) || [];
    dasDass.forEach(function (m) {
      mech.push('„' + m + '" — after a verb like this, the conjunction is „dass" with two s. („das" with one s is the article or a relative pronoun.)');
    });
    // comma before an infinitive clause with um … zu
    if (/\p{L}\s+um\s+\p{L}+\s+zu\s+\p{L}+en\b/iu.test(text) && !/,\s*um\s/i.test(text)) {
      mech.push('„um … zu …" normally takes a comma in front of it.');
    }
    // double blank / stray spaces before punctuation
    if (/\s+[,.;:!?]/.test(text)) mech.push('There is a space before a punctuation mark somewhere.');
    if (mech.length) mech.slice(0, 8).forEach(function (m) { warn(m); });

    /* ---- what the task asked for ---- */
    const expect = (ctx.expect || []).map(function (k) {
      const e = EXPECTATIONS[k];
      if (!e) return null;
      return { key: k, label: e.label, found: e.re.test(text) };
    }).filter(Boolean);

    /* ---- a rough, honest score ---- */
    const warns = notes.filter(function (n) { return n.type === 'warn'; }).length;
    const missing = expect.filter(function (e) { return !e.found; }).length;
    let score = 5 - Math.min(3, Math.floor(warns / 2)) - Math.min(2, missing);
    score = Math.max(1, score);

    return {
      stats: { words: w.length, sentences: sents.length, paragraphs: paras.length, avgSentence: avg, longestSentence: longest, connectors: used.length },
      notes: notes,
      expect: expect,
      score: score
    };
  }

  /* ---------- rendering ---------- */
  function reportHtml(r, ctx) {
    const esc = DK.esc;
    let h = '<div class="local-report">';
    h += '<h5>🔍 Sofort-Check <span class="lr-badge">no AI needed</span></h5>';
    h += '<p class="note">Mechanical checks only — length, structure, register, repetition and the elements the task asked for. ' +
         'It cannot judge whether your argument is any good.</p>';

    h += '<div class="lr-stats">' +
      ['words', 'sentences', 'paragraphs', 'connectors'].map(function (k) {
        return '<span><b>' + r.stats[k] + '</b> ' + k + '</span>';
      }).join('') + '</div>';

    if (r.expect.length) {
      h += '<p><strong>What the task asked for:</strong></p><ul class="lr-expect">' +
        r.expect.map(function (e) {
          return '<li class="' + (e.found ? 'yes' : 'no') + '">' + (e.found ? '✓' : '✗') + ' ' + esc(e.label) + '</li>';
        }).join('') + '</ul>';
      const missing = r.expect.filter(function (e) { return !e.found; });
      if (missing.length) h += '<p class="note">A missing element here is usually a direct loss of task marks. ' +
        'The check looks for typical wording, so if you expressed it another way, trust yourself over the tick.</p>';
    }

    const order = { warn: 0, good: 1, info: 2 };
    const sorted = r.notes.slice().sort(function (a, b) { return order[a.type] - order[b.type]; });
    h += '<ul class="lr-notes">' + sorted.map(function (n) {
      const ic = n.type === 'warn' ? '⚠️' : (n.type === 'good' ? '✓' : 'ℹ️');
      return '<li class="lr-' + n.type + '">' + ic + ' ' + esc(n.msg) + '</li>';
    }).join('') + '</ul>';
    h += '</div>';
    return h;
  }

  return { run: run, reportHtml: reportHtml, EXPECTATIONS: EXPECTATIONS };
})();
