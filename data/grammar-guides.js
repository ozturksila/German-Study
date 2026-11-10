/* =========================================================
   Study guides for the Grammar-by-Topic page.

   A section in grammar-map.js with `guide: '<key>'` shows the guide
   below instead of lessons split by level. A guide is one complete
   reference on the subject, written to be studied on its own:
     intro     — short HTML paragraph
     chapters  — [{ id, title, html }]
     quiz      — list of exercise items (exInput / exSelect)
   Loaded after builders.js, so the table helpers are available.
   ========================================================= */
(function () {
  function T(headers, rows) { return formTable(null, headers, rows); }
  function cmp(title, html) { return '<div class="g-compare"><h5>⚖️ ' + title + '</h5>' + html + '</div>'; }
  function rule(html) { return '<div class="grammar-point">' + html + '</div>'; }
  function ex(html) { return '<div class="example-box">' + html + '</div>'; }
  function warn(html) { return '<div class="g-warn">⚠️ ' + html + '</div>'; }
  var V = function (s) { return '<b class="g-v">' + s + '</b>'; };   // highlighted verb
  var K = function (s) { return '<b class="g-k">' + s + '</b>'; };   // highlighted connector

  var G = window.GRAMMAR_GUIDES = {};

  /* =======================================================
     KONNEKTOREN
     ======================================================= */
  G.konnektoren = {
    intro: '<p>Connectors (<i>Konnektoren</i>) join two ideas and say how they relate: <b>and</b>, <b>but</b>, <b>because</b>, <b>so</b>, <b>although</b>, <b>if</b>, <b>when</b>… ' +
      'In German every connector belongs to a <b>grammar class</b>, and the class decides <b>where the verb goes</b>. ' +
      'So for each connector you have to learn two things: <b>what it means</b> and <b>what it does to word order</b>. ' +
      'This guide first explains the classes, then goes through the connectors by meaning, comparing the ones that look alike and showing how the meaning of a sentence changes when you swap one for another.</p>',
    chapters: [
      { id: 'klassen', title: '1. The four grammar classes and word order', html:
        '<p>German sentences are built around the position of the conjugated verb. A connector either leaves that position alone, takes a position itself, or sends the verb to the end.</p>' +
        T(['Class', 'Position of the connector', 'Effect on the verb', 'Members (selection)'], [
          ['<b>A. Coordinating</b><br><span class="note">Konjunktionen</span>', 'Position 0 — outside the clause, before it', 'none: verb stays in position 2', 'und, oder, aber, denn, sondern, doch'],
          ['<b>B. Subordinating</b><br><span class="note">Subjunktionen</span>', 'opens a subordinate clause', 'verb goes to the <b>end</b>', 'weil, da, dass, ob, wenn, als, obwohl, damit, sodass, während, bevor, nachdem, seit, bis, falls, indem …'],
          ['<b>C. Adverbial</b><br><span class="note">Konjunktionaladverbien</span>', 'Position 1 — it is a part of the clause', 'verb comes right after it (position 2), subject moves behind the verb', 'deshalb, deswegen, darum, daher, trotzdem, dennoch, also, sonst, allerdings, jedoch, außerdem, dann, danach, infolgedessen …'],
          ['<b>D. Two-part</b><br><span class="note">Korrelate</span>', 'one part in each half', 'depends on the parts (mostly like A or C)', 'zwar … aber, entweder … oder, weder … noch, sowohl … als auch, nicht nur … sondern auch, je … desto, einerseits … andererseits']
        ]) +
        '<h3 class="sub">One idea, four constructions</h3>' +
        '<p>"I stay at home — I am ill." The <b>meaning</b> (cause) is the same in every line; only the <b>grammar</b> changes:</p>' +
        ex(
          '<p>A. Ich bleibe zu Hause, ' + K('denn') + ' ich ' + V('bin') + ' krank. <span class="note">— verb in position 2</span></p>' +
          '<p>B. Ich bleibe zu Hause, ' + K('weil') + ' ich krank ' + V('bin') + '. <span class="note">— verb at the end</span></p>' +
          '<p>C. Ich bin krank. ' + K('Deshalb') + ' ' + V('bleibe') + ' ich zu Hause. <span class="note">— connector in position 1, verb directly after</span></p>' +
          '<p>Preposition: ' + K('Wegen') + ' meiner Krankheit ' + V('bleibe') + ' ich zu Hause. <span class="note">— no second verb at all, just a noun</span></p>') +
        '<h3 class="sub">Fields of the clause</h3>' +
        T(['Pos. 0', 'Pos. 1', 'Pos. 2 (verb)', 'Middle field', 'End'], [
          ['und / aber / denn …', 'ich', V('bin'), 'heute krank', ''],
          ['', K('deshalb'), V('bleibe'), 'ich zu Hause', ''],
          ['', '<i>(Subordinate clause)</i> ' + K('weil'), '', 'ich heute krank', V('bin')]
        ]) +
        rule('<p><b>Test trick:</b> Put the connector at the front and read on. If the next word must be the verb, it is an adverbial (C). If the verb flies to the end, it is subordinating (B). If nothing changes, it is coordinating (A).</p>') +
        '<h3 class="sub">Subordinate clause first</h3>' +
        '<p>A subordinate clause can stand in front. Then the whole clause counts as position 1, and the main-clause verb follows immediately — "verb, comma, verb":</p>' +
        ex('<p>' + K('Weil') + ' ich krank ' + V('bin') + ', ' + V('bleibe') + ' ich zu Hause.</p><p>' + K('Obwohl') + ' es regnet, ' + V('gehen') + ' wir spazieren.</p>') +
        '<h3 class="sub">Commas</h3>' +
        '<ul class="goals"><li>Always a comma before a subordinate clause and after it if the sentence continues.</li>' +
        '<li>Comma before <b>aber, sondern, doch, denn</b> (they contrast or explain).</li>' +
        '<li><b>No</b> comma before <b>und / oder</b> joining two main clauses (optional, only for clarity).</li>' +
        '<li>Adverbial connectors start a new main clause: full stop, semicolon, or a comma + und: <i>Ich bin krank, und deshalb bleibe ich zu Hause.</i></li></ul>' },

      { id: 'add', title: '2. Adding: und, außerdem, sowohl … als auch, nicht nur … sondern auch', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['und', 'A', 'Ich koche, ' + K('und') + ' du deckst den Tisch.', 'neutral "and"'],
          ['außerdem', 'C', 'Die Wohnung ist hell. ' + K('Außerdem') + ' ' + V('ist') + ' sie billig.', '"besides / what is more" — adds an extra argument'],
          ['zudem, ferner, darüber hinaus', 'C', 'Das Projekt ist teuer. ' + K('Zudem') + ' ' + V('fehlt') + ' Personal.', 'formal, written versions of außerdem'],
          ['sowohl … als auch', 'D', 'Sie spricht ' + K('sowohl') + ' Spanisch ' + K('als auch') + ' Arabisch.', '"both … and" — both parts equally'],
          ['nicht nur … sondern auch', 'D', 'Er ist ' + K('nicht nur') + ' klug, ' + K('sondern auch') + ' fleißig.', 'the second part is the surprise / the stronger point'],
          ['auch, ebenso, genauso', 'adverb', 'Ich komme mit. Meine Schwester kommt ' + K('auch') + '.', 'the same thing is true of someone else']
        ]) +
        cmp('und vs. außerdem vs. nicht nur … sondern auch',
          '<p><i>Die Wohnung ist hell <b>und</b> billig.</i> — two facts, equal weight.</p>' +
          '<p><i>Die Wohnung ist hell. <b>Außerdem</b> ist sie billig.</i> — you are collecting arguments; the second is "one more reason".</p>' +
          '<p><i>Die Wohnung ist <b>nicht nur</b> hell, <b>sondern auch</b> billig.</i> — the second point is presented as remarkable: you expected only one advantage.</p>') },

      { id: 'alt', title: '3. Alternatives: oder, entweder … oder, weder … noch, sonst', html:
        T(['Connector', 'Class', 'Example', 'Meaning'], [
          ['oder', 'A', 'Trinkst du Tee ' + K('oder') + ' möchtest du Kaffee?', '"or"'],
          ['entweder … oder', 'D', K('Entweder') + ' du kommst mit, ' + K('oder') + ' du bleibst hier.', '"either … or" — only one is possible'],
          ['weder … noch', 'D', 'Ich habe ' + K('weder') + ' Zeit ' + K('noch') + ' Geld.', '"neither … nor" — both are negated (no extra nicht!)'],
          ['sonst / andernfalls', 'C', 'Beeil dich, ' + K('sonst') + ' ' + V('verpassen') + ' wir den Zug.', '"otherwise / or else" — the negative consequence'],
          ['stattdessen', 'C', 'Er hat nicht gelernt. ' + K('Stattdessen') + ' ' + V('hat') + ' er gespielt.', '"instead"'],
          ['(an)statt … zu / (an)statt dass', 'B', K('Statt') + ' zu lernen, hat er gespielt.', '"instead of doing"']
        ]) +
        cmp('oder vs. entweder … oder vs. sonst',
          '<p><i>Wir fahren mit dem Bus <b>oder</b> mit dem Rad.</i> — open choice, maybe either is fine.</p>' +
          '<p><i><b>Entweder</b> wir fahren mit dem Bus <b>oder</b> mit dem Rad.</i> — strict: one or the other, nothing else.</p>' +
          '<p><i>Wir müssen den Bus nehmen, <b>sonst</b> kommen wir zu spät.</i> — not a choice but a warning: if not A, then something bad.</p>') +
        warn('<b>entweder</b> can stand in position 0 or position 1: <i>Entweder du kommst</i> / <i>Entweder kommst du</i> — both correct. <b>weder … noch</b> already contains the negation: <s>Ich habe weder keine Zeit</s>.') },

      { id: 'kontrast', title: '4. Contrast: aber, sondern, doch, jedoch, allerdings, dagegen, während', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['aber', 'A (also floats in the clause)', 'Das Hotel ist schön, ' + K('aber') + ' es ist teuer.', 'general "but"'],
          ['sondern', 'A', 'Das ist nicht billig, ' + K('sondern') + ' teuer.', 'correction after a <b>negation</b>: "not X but Y"'],
          ['doch', 'A / C', 'Ich wollte kommen, ' + K('doch') + ' ich war krank.', 'like aber, slightly literary, stresses the opposite outcome'],
          ['jedoch', 'A or C', 'Das Angebot ist gut, ' + K('jedoch') + ' ' + V('fehlt') + ' die Zeit.', 'formal "however"'],
          ['allerdings', 'C', 'Das Hotel ist schön. ' + K('Allerdings') + ' ' + V('ist') + ' es teuer.', '"admittedly / mind you" — a limiting remark, often polite'],
          ['dagegen / hingegen', 'C', 'Berlin ist laut. München ' + K('dagegen') + ' ist ruhiger.', 'contrast between <b>two subjects</b> being compared'],
          ['während', 'B', K('Während') + ' Tom gern kocht, isst Lena lieber auswärts.', '"whereas" (contrast) — also "while" (time)'],
          ['wohingegen', 'B', 'Er ist sparsam, ' + K('wohingegen') + ' sie gern Geld ausgibt.', 'formal "whereas"'],
          ['einerseits … andererseits', 'D (C + C)', K('Einerseits') + ' ' + V('ist') + ' die Stelle gut bezahlt, ' + K('andererseits') + ' ' + V('muss') + ' ich umziehen.', 'weighing two sides'],
          ['zwar … aber', 'D', 'Das Auto ist ' + K('zwar') + ' alt, ' + K('aber') + ' es fährt gut.', '"granted …, but" — concedes, then counters (see chapter 7)']
        ]) +
        cmp('aber vs. sondern — how the meaning changes',
          '<p><i>Er ist nicht reich, <b>aber</b> glücklich.</i> — he is not rich; despite that, he is happy (two facts, one contrasts the other).</p>' +
          '<p><i>Er ist nicht reich, <b>sondern</b> glücklich.</i> — "rich" was the wrong word; the correct word is "happy" (a replacement).</p>' +
          '<p>Rule: <b>sondern</b> only after <b>nicht / kein / nie</b>, and the second part replaces the negated one. Otherwise use <b>aber</b>.</p>') +
        cmp('aber vs. allerdings vs. jedoch vs. dagegen',
          '<p><i>Das Hotel ist schön, <b>aber</b> teuer.</i> — plain contrast.</p>' +
          '<p><i>Das Hotel ist schön. <b>Allerdings</b> ist es teuer.</i> — you add a limitation to what you just said, softly; often used to be polite or fair.</p>' +
          '<p><i>Das Hotel ist schön, <b>jedoch</b> teuer.</i> — the same as aber, but written/formal.</p>' +
          '<p><i>Das erste Hotel ist teuer, das zweite <b>dagegen</b> billig.</i> — not a limitation of one thing but a comparison of two things.</p>') +
        cmp('während: time or contrast?',
          '<p><i><b>Während</b> ich koche, höre ich Musik.</i> — at the same time (time: "while").</p>' +
          '<p><i><b>Während</b> mein Bruder Fleisch isst, lebe ich vegan.</i> — opposition (contrast: "whereas"). If you can replace it with <b>wohingegen</b>, it means contrast.</p>') +
        warn('<b>aber</b> does not have to stand at the beginning: <i>Ich wollte kommen. Ich war <b>aber</b> krank.</i> — in the middle it sounds softer and is very common in speech.') },

      { id: 'grund', title: '5. Cause: weil, da, denn, nämlich, zumal, wegen', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['weil', 'B', 'Ich komme nicht, ' + K('weil') + ' ich arbeiten ' + V('muss') + '.', 'the standard "because"; answers <i>Warum?</i> — can stand alone: <i>Warum? — Weil ich muss.</i>'],
          ['da', 'B', K('Da') + ' der Zug ausfällt, ' + V('nehmen') + ' wir den Bus.', 'reason that is already known or obvious; usually at the start; more formal'],
          ['denn', 'A', 'Ich komme nicht, ' + K('denn') + ' ich ' + V('muss') + ' arbeiten.', 'adds an explanation afterwards; never at the start of the sentence, never as a one-word answer'],
          ['nämlich', 'adverb in the middle field', 'Ich komme nicht. Ich ' + V('muss') + ' ' + K('nämlich') + ' arbeiten.', '"you see / namely" — explanation in a new main clause; never in position 1'],
          ['zumal', 'B', 'Ich bleibe zu Hause, ' + K('zumal') + ' es regnet.', '"especially since" — an extra reason on top'],
          ['wegen / aufgrund + Gen.', 'preposition', K('Wegen') + ' des Regens bleiben wir zu Hause.', 'cause as a noun; aufgrund is formal'],
          ['dank + Gen./Dat.', 'preposition', K('Dank') + ' deiner Hilfe hat es geklappt.', 'positive cause: "thanks to"']
        ]) +
        cmp('weil vs. da vs. denn vs. nämlich',
          '<p>All four give a reason. The difference is <b>grammar</b> and <b>focus</b>:</p>' +
          '<p><i>Ich bleibe zu Hause, <b>weil</b> ich krank bin.</i> — the reason is the new, important information.</p>' +
          '<p><i><b>Da</b> ich krank bin, bleibe ich zu Hause.</i> — the reason is background; the focus is on what you do.</p>' +
          '<p><i>Ich bleibe zu Hause, <b>denn</b> ich bin krank.</i> — first the statement, then a short explanation added; normal word order.</p>' +
          '<p><i>Ich bleibe zu Hause. Ich bin <b>nämlich</b> krank.</i> — conversational; explains something the listener may not know.</p>') +
        warn('In casual speech you will hear <i>weil ich bin krank</i> (verb second). It is common but counts as a mistake in exams and writing — always put the verb at the end after <b>weil</b>.') },

      { id: 'folge', title: '6. Consequence: deshalb, also, daher, sodass, so … dass, folglich', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['deshalb / deswegen / darum', 'C', 'Ich bin krank. ' + K('Deshalb') + ' ' + V('bleibe') + ' ich zu Hause.', '"that\'s why" — the three are interchangeable; darum is a bit more spoken'],
          ['daher', 'C', 'Der Zug fiel aus. ' + K('Daher') + ' ' + V('kamen') + ' wir zu spät.', 'like deshalb, slightly more formal'],
          ['also', 'C', 'Es regnet. ' + K('Also') + ' ' + V('nehmen') + ' wir den Schirm.', '"so / therefore" — logical conclusion (never "also"!)'],
          ['folglich / somit / infolgedessen', 'C', 'Die Kosten stiegen. ' + K('Infolgedessen') + ' ' + V('wurden') + ' Stellen gestrichen.', 'formal, written: "consequently / as a result"'],
          ['sodass (so dass)', 'B', 'Es regnete stark, ' + K('sodass') + ' das Spiel ausfallen ' + V('musste') + '.', 'result clause: "so that (as a result)"'],
          ['so … dass', 'B', 'Es regnete ' + K('so') + ' stark, ' + K('dass') + ' das Spiel ausfiel.', 'emphasises the degree: "so much that"'],
          ['zu … , als dass', 'B + Konj. II', 'Er ist ' + K('zu') + ' müde, ' + K('als dass') + ' er arbeiten ' + V('könnte') + '.', '"too … for it to happen" — the result does not happen']
        ]) +
        cmp('Cause or consequence? weil vs. deshalb',
          '<p>The facts are the same, the direction is reversed:</p>' +
          '<p><i>Ich bleibe zu Hause, <b>weil</b> ich krank bin.</i> — <b>weil</b> introduces the <b>cause</b>.</p>' +
          '<p><i>Ich bin krank, <b>deshalb</b> bleibe ich zu Hause.</i> — <b>deshalb</b> introduces the <b>result</b>.</p>' +
          '<p>Mixing them up reverses the logic: <i>Ich bin krank, weil ich zu Hause bleibe</i> = staying at home made you ill!</p>') +
        cmp('sodass vs. damit — result or purpose?',
          '<p><i>Er sprach laut, <b>sodass</b> alle ihn hörten.</i> — a result that happened (maybe not intended).</p>' +
          '<p><i>Er sprach laut, <b>damit</b> alle ihn hörten.</i> — his intention; we don\'t know if it worked.</p>') +
        cmp('sodass vs. so … dass',
          '<p><i>Es war kalt, <b>sodass</b> wir drinnen blieben.</i> — simple consequence.</p>' +
          '<p><i>Es war <b>so</b> kalt, <b>dass</b> wir drinnen blieben.</i> — the intensity (so cold) is the point.</p>') },

      { id: 'konzession', title: '7. Concession: obwohl, trotzdem, trotz, zwar … aber, auch wenn', html:
        '<p>Concession means: something happens <b>although</b> you would expect the opposite. It is the "surprising" version of cause.</p>' +
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['obwohl', 'B', 'Wir gehen spazieren, ' + K('obwohl') + ' es ' + V('regnet') + '.', '"although" — standard'],
          ['obgleich / obschon', 'B', K('Obgleich') + ' er müde war, arbeitete er weiter.', 'formal / literary versions of obwohl'],
          ['trotzdem', 'C', 'Es regnet. ' + K('Trotzdem') + ' ' + V('gehen') + ' wir spazieren.', '"nevertheless / anyway"'],
          ['dennoch', 'C', 'Es regnet. ' + K('Dennoch') + ' ' + V('gehen') + ' wir spazieren.', 'formal trotzdem'],
          ['trotz + Gen.', 'preposition', K('Trotz') + ' des Regens gehen wir spazieren.', 'concession as a noun'],
          ['zwar … aber', 'D', 'Es regnet ' + K('zwar') + ', ' + K('aber') + ' wir gehen spazieren.', 'first admit one point, then counter it — typical in argumentation'],
          ['auch wenn / selbst wenn', 'B', K('Auch wenn') + ' es regnet, gehen wir spazieren.', '"even if" — may be real or only hypothetical'],
          ['wenn … auch', 'B', 'Wenn es ' + K('auch') + ' teuer ist, es lohnt sich.', 'literary; main clause often keeps normal order']
        ]) +
        cmp('weil vs. obwohl — expected vs. unexpected',
          '<p><i>Ich gehe nicht raus, <b>weil</b> es regnet.</i> — normal consequence.</p>' +
          '<p><i>Ich gehe raus, <b>obwohl</b> es regnet.</i> — the opposite of what you would expect.</p>' +
          '<p>Same pair with adverbs: <b>deshalb</b> (expected result) ↔ <b>trotzdem</b> (unexpected result).</p>') +
        T(['', 'Cause → expected result', 'Cause → unexpected result'], [
          ['Subordinating (B)', 'weil, da', 'obwohl, obgleich'],
          ['Adverbial (C)', 'deshalb, deswegen, darum, daher', 'trotzdem, dennoch'],
          ['Preposition', 'wegen, aufgrund', 'trotz'],
          ['Coordinating (A)', 'denn', '(aber / doch)']
        ]) +
        cmp('obwohl vs. auch wenn vs. selbst wenn',
          '<p><i><b>Obwohl</b> es regnet, gehen wir.</i> — it <b>is</b> raining (fact).</p>' +
          '<p><i><b>Auch wenn</b> es regnet, gehen wir.</i> — whether or not it rains, we go (possibility, not certain).</p>' +
          '<p><i><b>Selbst wenn</b> es regnen <b>würde</b>, würden wir gehen.</i> — hypothetical and emphatic: "even if it rained".</p>') +
        cmp('obwohl vs. zwar … aber',
          '<p><i><b>Obwohl</b> das Auto alt ist, fährt es gut.</i> — one sentence, the concession is background.</p>' +
          '<p><i>Das Auto ist <b>zwar</b> alt, <b>aber</b> es fährt gut.</i> — you openly grant the other side its point first, then give yours. This is the classic structure for a balanced argument.</p>') },

      { id: 'bedingung', title: '8. Condition: wenn, falls, sofern, es sei denn, je nachdem', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['wenn', 'B', K('Wenn') + ' du Zeit ' + V('hast') + ', ' + V('komm') + ' vorbei!', '"if" — also "whenever" (see chapter 10)'],
          ['falls', 'B', K('Falls') + ' es regnet, ' + V('bleiben') + ' wir drinnen.', '"in case" — the condition is less likely / only a possibility'],
          ['sofern / soweit', 'B', 'Ich helfe dir, ' + K('sofern') + ' ich Zeit ' + V('habe') + '.', '"provided that / as far as" — a limiting condition, formal'],
          ['es sei denn', 'A (+ main clause)', 'Wir gehen, ' + K('es sei denn') + ', es regnet.', '"unless" — the only case in which not'],
          ['außer wenn', 'B', 'Ich jogge jeden Tag, ' + K('außer wenn') + ' es regnet.', '"except when"'],
          ['je nachdem, ob / wie / wann', 'B', K('Je nachdem, wie') + ' das Wetter ist, fahren wir.', '"depending on"'],
          ['vorausgesetzt, (dass)', 'B', K('Vorausgesetzt') + ', dass alle zustimmen, beginnen wir.', '"provided (that)"'],
          ['verb first (no connector)', '—', V('Hast') + ' du Zeit, (dann) komm vorbei.', 'conditional clause without wenn; verb in position 1']
        ]) +
        cmp('wenn vs. falls vs. sofern vs. es sei denn',
          '<p><i><b>Wenn</b> es morgen regnet, bleiben wir zu Hause.</i> — neutral condition (could be likely).</p>' +
          '<p><i><b>Falls</b> es morgen regnet, bleiben wir zu Hause.</i> — "should it rain" — you think it is not very likely.</p>' +
          '<p><i>Wir fahren, <b>sofern</b> es nicht regnet.</i> — the trip is guaranteed only on this condition.</p>' +
          '<p><i>Wir fahren, <b>es sei denn</b>, es regnet.</i> — we will go; rain is the one exception.</p>') +
        cmp('Real vs. unreal condition (indicative vs. Konjunktiv II)',
          '<p><i>Wenn ich Zeit <b>habe</b>, komme ich.</i> — possible, maybe I will.</p>' +
          '<p><i>Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich kommen.</i> — I don\'t have time, so I won\'t come (unreal).</p>' +
          '<p><i>Wenn ich Zeit <b>gehabt hätte</b>, <b>wäre</b> ich <b>gekommen</b>.</i> — past, and it didn\'t happen.</p>') +
        cmp('wenn vs. ob — "if" has two German translations',
          '<p><i>Ich komme, <b>wenn</b> ich Zeit habe.</i> — condition.</p>' +
          '<p><i>Ich weiß nicht, <b>ob</b> ich Zeit habe.</i> — "whether": an open yes/no question. Rule: if you can say "whether" in English, it must be <b>ob</b>.</p>') },

      { id: 'zweck', title: '9. Purpose and manner: damit, um … zu, indem, dadurch dass, ohne … zu', html:
        T(['Connector', 'Class', 'Example', 'Nuance'], [
          ['damit', 'B', 'Ich spare, ' + K('damit') + ' meine Kinder studieren ' + V('können') + '.', '"so that" — purpose; any subject'],
          ['um … zu', 'infinitive clause', 'Ich spare, ' + K('um') + ' ein Auto ' + K('zu') + ' kaufen.', '"in order to" — <b>same subject</b> in both parts'],
          ['indem', 'B', 'Man lernt, ' + K('indem') + ' man viel ' + V('übt') + '.', '"by doing" — the method'],
          ['dadurch, dass', 'B', 'Er verbesserte sich ' + K('dadurch, dass') + ' er täglich übte.', 'the same as indem, stresses the means'],
          ['ohne … zu / ohne dass', 'infinitive / B', 'Er ging, ' + K('ohne') + ' sich ' + K('zu') + ' verabschieden.', '"without doing" — the expected action does not happen'],
          ['(an)statt … zu / (an)statt dass', 'infinitive / B', K('Anstatt') + ' zu helfen, schaute er zu.', '"instead of doing"'],
          ['so', 'adverb', 'Mach es ' + K('so') + ', dann klappt es.', 'manner, informal']
        ]) +
        cmp('damit vs. um … zu',
          '<p><i>Ich lerne Deutsch, <b>um</b> in Berlin <b>zu</b> arbeiten.</i> — I learn, I work: same subject → um … zu (preferred).</p>' +
          '<p><i>Ich erkläre es dir, <b>damit</b> du es verstehst.</i> — I explain, you understand: different subjects → only damit.</p>' +
          '<p><i>Ich lerne Deutsch, <b>damit</b> ich in Berlin arbeiten kann.</i> — correct but heavier; with the same subject use um … zu.</p>') +
        cmp('damit (purpose) vs. indem (method) vs. sodass (result)',
          '<p><i>Er trainiert, <b>damit</b> er fit wird.</i> — what for?</p>' +
          '<p><i>Er wird fit, <b>indem</b> er trainiert.</i> — how?</p>' +
          '<p><i>Er trainierte viel, <b>sodass</b> er fit wurde.</i> — with what result?</p>') +
        warn('<b>damit</b> also exists as a pronominal adverb "with it": <i>Was machst du <b>damit</b>?</i> (= with that). As a connector it sends the verb to the end; as an adverb it does not.') },

      { id: 'zeit', title: '10. Time: als, wenn, wann, während, bevor, nachdem, seit, bis, sobald', html:
        T(['Connector', 'Class', 'Example', 'Meaning'], [
          ['als', 'B', K('Als') + ' ich ein Kind ' + V('war') + ', wohnten wir in Köln.', '<b>one</b> event or period in the <b>past</b>'],
          ['wenn', 'B', K('Wenn') + ' ich nach Hause komme, koche ich.', 'present/future, or <b>repeated</b> past events ("whenever")'],
          ['während', 'B', K('Während') + ' ich ' + V('koche') + ', höre ich Radio.', '"while" — at the same time'],
          ['bevor / ehe', 'B', K('Bevor') + ' du gehst, schließ das Fenster.', '"before"'],
          ['nachdem', 'B', K('Nachdem') + ' ich gegessen ' + V('hatte') + ', ging ich los.', '"after" — tense shift (see below)'],
          ['seit / seitdem', 'B', K('Seit') + ' ich in Wien ' + V('wohne') + ', fahre ich Rad.', '"since" — still true now'],
          ['bis', 'B', 'Warte, ' + K('bis') + ' ich ' + V('komme') + '.', '"until"'],
          ['sobald', 'B', K('Sobald') + ' ich Zeit habe, rufe ich an.', '"as soon as"'],
          ['solange', 'B', K('Solange') + ' du Fieber hast, bleibst du im Bett.', '"as long as"'],
          ['kaum dass / kaum', 'B / C', K('Kaum') + ' ' + V('war') + ' er da, ging der Streit los.', '"hardly / no sooner … than"'],
          ['dann, danach, anschließend', 'C', 'Ich dusche. ' + K('Danach') + ' ' + V('frühstücke') + ' ich.', '"then / afterwards" — sequencing'],
          ['vorher, zuvor', 'C', 'Wir essen um acht. ' + K('Vorher') + ' ' + V('gehen') + ' wir spazieren.', '"before that"'],
          ['inzwischen, währenddessen', 'C', 'Ich koche. ' + K('Inzwischen') + ' ' + V('deckst') + ' du den Tisch.', '"meanwhile"'],
          ['zuerst … dann … schließlich', 'C', K('Zuerst') + ' ' + V('lese') + ' ich, ' + K('dann') + ' ' + V('schreibe') + ' ich.', 'steps of a story or process']
        ]) +
        cmp('als vs. wenn vs. wann',
          '<p><i><b>Als</b> ich in Rom war, habe ich Pizza gegessen.</i> — one time in the past.</p>' +
          '<p><i>(Immer) <b>wenn</b> ich in Rom war, habe ich Pizza gegessen.</i> — every time in the past.</p>' +
          '<p><i><b>Wenn</b> ich in Rom bin, esse ich Pizza.</i> — present/future.</p>' +
          '<p><i>Ich weiß nicht, <b>wann</b> ich in Rom bin.</i> — question word "at what time?" (in questions and indirect questions only).</p>') +
        cmp('nachdem — the tense rule',
          '<p>The <b>nachdem</b> clause happened first, so it is one step further in the past:</p>' +
          T(['Main clause', 'nachdem clause'], [
            ['Präsens / Futur: ich gehe los', 'Perfekt: nachdem ich gegessen habe'],
            ['Präteritum / Perfekt: ich ging los', 'Plusquamperfekt: nachdem ich gegessen hatte']
          ])) +
        cmp('bevor vs. vorher vs. vor',
          '<p><i><b>Bevor</b> wir essen, waschen wir die Hände.</i> — connector (B), verb at the end.</p>' +
          '<p><i>Wir essen. <b>Vorher</b> waschen wir die Hände.</i> — adverb (C), verb second.</p>' +
          '<p><i><b>Vor</b> dem Essen waschen wir die Hände.</i> — preposition + noun.</p>' +
          '<p>The same pattern: <b>nachdem / danach / nach</b> and <b>während / währenddessen / während + Gen.</b></p>') +
        cmp('seit vs. seitdem',
          '<p>As connectors they mean the same: <i>Seit(dem) ich hier wohne …</i>. But <b>seitdem</b> can also be an adverb: <i>Ich bin 2020 umgezogen. <b>Seitdem</b> wohne ich hier.</i> (verb second). Use present tense for things still going on: <s>Ich habe seit drei Jahren hier gewohnt</s> → <i>Ich wohne seit drei Jahren hier.</i></p>') },

      { id: 'inhalt', title: '11. Content and questions: dass, ob, question words', html:
        T(['Connector', 'Example', 'Use'], [
          ['dass', 'Ich glaube, ' + K('dass') + ' er recht ' + V('hat') + '.', 'reported fact, opinion, feeling (after glauben, wissen, hoffen, sagen, froh sein …)'],
          ['ob', 'Sie fragt, ' + K('ob') + ' du ' + V('kommst') + '.', 'indirect yes/no question ("whether")'],
          ['w-word', 'Weißt du, ' + K('wo') + ' er ' + V('wohnt') + '?', 'indirect w-question; the w-word works like a connector'],
          ['als ob / als wenn + Konj. II', 'Er tut so, ' + K('als ob') + ' er krank ' + V('wäre') + '.', 'unreal comparison "as if"'],
          ['wie / als (comparison)', 'Es ist schöner, ' + K('als') + ' ich ' + V('dachte') + '.', 'comparative clause'],
          ['je … desto / umso', K('Je') + ' mehr ich lerne, ' + K('desto') + ' besser ' + V('spreche') + ' ich.', '"the more … the more": je-clause verb last, desto-clause verb second']
        ]) +
        cmp('dass vs. das',
          '<p><i>Ich weiß, <b>dass</b> das Buch gut ist.</i> — connector (ss). Test: it cannot be replaced with <i>dieses / welches</i>.</p>' +
          '<p><i>Das Buch, <b>das</b> ich lese, ist gut.</i> — relative pronoun (s). Test: replace with <i>welches</i> — works.</p>') +
        cmp('dass vs. ob vs. wenn',
          '<p><i>Ich weiß, <b>dass</b> er kommt.</i> — I know it\'s true.</p>' +
          '<p><i>Ich weiß nicht, <b>ob</b> er kommt.</i> — open question.</p>' +
          '<p><i>Ich freue mich, <b>wenn</b> er kommt.</i> — condition / each time he comes.</p>') +
        cmp('je … desto — word order in both halves',
          '<p><i><b>Je</b> älter man <b>wird</b>, <b>desto</b> ruhiger <b>wird</b> man.</i> — <b>je</b> + comparative … verb last; <b>desto/umso</b> + comparative + verb second.</p>') },

      { id: 'einschraenkung', title: '12. Restriction and comment: insofern, soweit, wobei, zumal', html:
        T(['Connector', 'Class', 'Example', 'Meaning'], [
          ['insofern (als)', 'B / C', 'Er hat recht, ' + K('insofern als') + ' die Zahlen stimmen.', '"in so far as" — limits how far a statement is true'],
          ['soweit', 'B', K('Soweit') + ' ich weiß, ist er im Urlaub.', '"as far as" (I know)'],
          ['wobei', 'B', 'Das Hotel war gut, ' + K('wobei') + ' das Frühstück schwach ' + V('war') + '.', '"although, mind you" — adds a small reservation (spoken and written)'],
          ['zumal', 'B', 'Wir nehmen das Taxi, ' + K('zumal') + ' es spät ist.', '"particularly since" — strengthens a reason'],
          ['immerhin', 'adverb', 'Er hat verloren, ' + K('immerhin') + ' ' + V('hat') + ' er gekämpft.', '"at least" — a positive side'],
          ['schließlich', 'adverb', 'Hilf ihm! Er ist ' + K('schließlich') + ' dein Bruder.', '"after all" (reason) — also "finally" (time)']
        ]) +
        cmp('allerdings vs. wobei vs. insofern',
          '<p><i>Der Film war gut. <b>Allerdings</b> war er zu lang.</i> — a limitation as a new sentence.</p>' +
          '<p><i>Der Film war gut, <b>wobei</b> er etwas zu lang war.</i> — the reservation is attached as an afterthought.</p>' +
          '<p><i>Der Film war <b>insofern</b> gut, <b>als</b> die Musik stark war.</i> — it was good only in one respect.</p>') },

      { id: 'register', title: '13. Everyday vs. formal: choosing the right register', html:
        '<p>Many connectors come in pairs: one for speaking, one for writing (essays, letters, B2–C2 exams). Using the formal one in writing makes your text sound more mature.</p>' +
        T(['Meaning', 'Everyday', 'Neutral', 'Formal / written'], [
          ['adding', 'und, auch', 'außerdem', 'zudem, ferner, darüber hinaus, überdies'],
          ['contrast', 'aber', 'allerdings', 'jedoch, hingegen, wohingegen'],
          ['cause', 'weil, denn', 'da', 'aufgrund, zumal, infolge'],
          ['result', 'deshalb, darum, also', 'daher, deswegen', 'folglich, somit, infolgedessen, demnach'],
          ['concession', 'obwohl, trotzdem', 'zwar … aber', 'obgleich, dennoch, nichtsdestotrotz, gleichwohl'],
          ['condition', 'wenn', 'falls', 'sofern, vorausgesetzt dass, im Falle, dass'],
          ['summing up', 'also', 'insgesamt', 'zusammenfassend lässt sich sagen, alles in allem']
        ]) +
        '<h3 class="sub">Connector chain for an argument</h3>' +
        ex('<p><b>Einerseits</b> ist das Homeoffice praktisch, <b>denn</b> man spart Zeit. <b>Außerdem</b> kann man flexibler arbeiten. ' +
          '<b>Andererseits</b> fehlt der Kontakt zu Kollegen. <b>Zwar</b> gibt es Videokonferenzen, <b>aber</b> sie ersetzen kein Gespräch in der Kaffeeküche. ' +
          '<b>Daher</b> halte ich eine Mischung für sinnvoll, <b>sofern</b> der Arbeitgeber das erlaubt.</p>') },

      { id: 'fehler', title: '14. Most common mistakes', html:
        T(['Wrong', 'Right', 'Why'], [
          ['<s>Deshalb ich bleibe zu Hause.</s>', 'Deshalb <b>bleibe</b> ich zu Hause.', 'adverbial connector = position 1, verb comes next'],
          ['<s>…, weil ich bin krank.</s>', '…, weil ich krank <b>bin</b>.', 'weil sends the verb to the end'],
          ['<s>…, denn ich krank bin.</s>', '…, denn ich <b>bin</b> krank.', 'denn does not change word order'],
          ['<s>Weil ich krank bin, ich bleibe zu Hause.</s>', 'Weil ich krank bin, <b>bleibe</b> ich zu Hause.', 'after a front subordinate clause: verb, comma, verb'],
          ['<s>Er ist nicht dumm, aber faul.</s> (meaning a correction)', 'Er ist nicht dumm, <b>sondern</b> faul.', 'correction after a negation = sondern'],
          ['<s>Wenn ich ein Kind war, …</s>', '<b>Als</b> ich ein Kind war, …', 'one period in the past = als'],
          ['<s>Ich weiß nicht, wenn er kommt.</s>', 'Ich weiß nicht, <b>ob</b> er kommt.', '"whether" = ob'],
          ['<s>Ich lerne, damit ich bestehe.</s> (ok but heavy)', 'Ich lerne, <b>um</b> zu bestehen.', 'same subject → um … zu'],
          ['<s>Trotzdem des Regens …</s>', '<b>Trotz</b> des Regens …', 'trotz = preposition, trotzdem = adverb'],
          ['<s>Also</s> = "also, too"', 'auch = "also"; also = "so / therefore"', 'false friend']
        ]) }
    ],
    quiz: [
      exSelect('Ich bleibe zu Hause, ___ ich bin krank.', 'denn', ['weil', 'denn', 'deshalb']),
      exSelect('Ich bin krank. ___ bleibe ich zu Hause.', 'Deshalb', ['Weil', 'Denn', 'Deshalb']),
      exInput('Put in order: <i>weil / ich / habe / keine Zeit</i> → Ich komme nicht, …', 'weil ich keine Zeit habe'),
      exInput('Rewrite with <b>deshalb</b>: <i>Es regnet. Wir bleiben drinnen.</i> → Es regnet. …', 'Deshalb bleiben wir drinnen.|Deshalb bleiben wir drinnen'),
      exSelect('Das ist nicht mein Handy, ___ deins.', 'sondern', ['aber', 'sondern', 'oder']),
      exSelect('Wir gehen spazieren, ___ es regnet.', 'obwohl', ['weil', 'obwohl', 'trotzdem']),
      exSelect('Es regnet. ___ gehen wir spazieren.', 'Trotzdem', ['Obwohl', 'Trotz', 'Trotzdem']),
      exSelect('___ ich zehn war, bekam ich ein Fahrrad.', 'Als', ['Wenn', 'Als', 'Wann']),
      exSelect('Ich weiß nicht, ___ er heute kommt.', 'ob', ['ob', 'wenn', 'dass']),
      exSelect('Ich lerne viel, ___ die Prüfung zu bestehen.', 'um', ['damit', 'um', 'sodass']),
      exSelect('Ich erkläre es noch einmal, ___ alle es verstehen.', 'damit', ['um', 'damit', 'indem']),
      exSelect('Man lernt eine Sprache am besten, ___ man viel spricht.', 'indem', ['damit', 'indem', 'sodass']),
      exSelect('Nachdem er gegessen ___, ging er schlafen.', 'hatte', ['hat', 'hatte', 'habe']),
      exSelect('Berlin ist hektisch. Wien ___ ist gemütlicher.', 'dagegen', ['deshalb', 'dagegen', 'sondern']),
      exSelect('Es war ___ kalt, dass der See zufror.', 'so', ['so', 'sodass', 'zu']),
      exInput('Complete: <i>Je mehr ich übe, desto besser ___ ich.</i> (spielen)', 'spiele'),
      exSelect('Das Auto ist ___ alt, aber es fährt noch gut.', 'zwar', ['zwar', 'obwohl', 'trotz']),
      exSelect('Wir fahren morgen, es sei denn, es ___.', 'regnet', ['regnet', 'regne', 'würde regnen']),
      exSelect('Formal register: "Die Kosten stiegen. ___ wurden Stellen gestrichen."', 'Infolgedessen', ['Also', 'Infolgedessen', 'Darum']),
      exInput('Join with <b>obwohl</b>, subordinate clause first: <i>Er ist müde. Er arbeitet weiter.</i>', 'Obwohl er müde ist, arbeitet er weiter.|Obwohl er müde ist, arbeitet er weiter')
    ]
  };

  /* =======================================================
     KONJUNKTIV II
     ======================================================= */
  G.konj2 = {
    intro: '<p>The <b>Konjunktiv II</b> is the German mood of the <b>not real</b>: wishes, dreams, hypotheses, things that did not happen — and, by extension, of <b>distance</b> and <b>politeness</b>. ' +
      'English uses <i>would, could, were, had done</i>; German uses forms such as <i>würde, könnte, wäre, hätte</i>. ' +
      'This guide collects everything in one place: how to build the forms, every situation where you use them, and how a Konjunktiv II sentence compares with the other ways of saying the same thing.</p>',
    chapters: [
      { id: 'idee', title: '1. The idea: three moods of the German verb', html:
        T(['Mood', 'What it says', 'Example'], [
          ['<b>Indikativ</b>', 'reality — facts, real possibilities', 'Ich <b>habe</b> Zeit. Wenn ich Zeit <b>habe</b>, komme ich.'],
          ['<b>Konjunktiv II</b>', 'unreality, hypothesis, wish, politeness, distance', 'Ich <b>hätte</b> gern Zeit. Wenn ich Zeit <b>hätte</b>, <b>käme</b> ich.'],
          ['<b>Konjunktiv I</b>', 'reported speech (mainly written news)', 'Sie sagt, sie <b>habe</b> keine Zeit.']
        ]) +
        rule('<p>Think of the Konjunktiv II as a <b>step away from reality</b>. The step can be about <b>facts</b> (it is not so), about <b>wishes</b> (I want it to be so), or about <b>social distance</b> (I don\'t push — I only ask). One form, three effects.</p>') +
        '<p>The name comes from the fact that its forms are built from the <b>second</b> verb stem, the Präteritum: <i>ich hatte → ich hätte, ich kam → ich käme</i>. That is why it looks like a past form but talks about the present or future.</p>' },

      { id: 'gegenwart', title: '2. Forms — present (Gegenwart)', html:
        '<p>There are two ways to build the present Konjunktiv II.</p>' +
        '<h3 class="sub">a) würde + infinitive — works for every verb</h3>' +
        T(['Person', 'werden → würde', '+ infinitive at the end'], [
          ['ich', 'würde', 'Ich würde gern reisen.'],
          ['du', 'würdest', 'Du würdest das verstehen.'],
          ['er / sie / es', 'würde', 'Sie würde sofort kommen.'],
          ['wir', 'würden', 'Wir würden helfen.'],
          ['ihr', 'würdet', 'Ihr würdet staunen.'],
          ['sie / Sie', 'würden', 'Würden Sie bitte warten?']
        ]) +
        '<h3 class="sub">b) The short form (synthetic form): Präteritum stem + Umlaut + ending</h3>' +
        '<p>Take the Präteritum, add an Umlaut on a / o / u, and use the endings <b>-e, -est, -e, -en, -et, -en</b>.</p>' +
        T(['Person', 'sein', 'haben', 'werden', 'können', 'kommen', 'wissen'], [
          ['ich', 'wäre', 'hätte', 'würde', 'könnte', 'käme', 'wüsste'],
          ['du', 'wärst', 'hättest', 'würdest', 'könntest', 'kämst', 'wüsstest'],
          ['er/sie/es', 'wäre', 'hätte', 'würde', 'könnte', 'käme', 'wüsste'],
          ['wir', 'wären', 'hätten', 'würden', 'könnten', 'kämen', 'wüssten'],
          ['ihr', 'wärt', 'hättet', 'würdet', 'könntet', 'kämt', 'wüsstet'],
          ['sie/Sie', 'wären', 'hätten', 'würden', 'könnten', 'kämen', 'wüssten']
        ]) +
        '<h3 class="sub">Short forms of common verbs</h3>' +
        T(['Infinitive', 'Präteritum', 'Konjunktiv II', 'In real use'], [
          ['sein', 'war', '<b>wäre</b>', 'always short'],
          ['haben', 'hatte', '<b>hätte</b>', 'always short'],
          ['werden', 'wurde', '<b>würde</b>', 'always short'],
          ['können', 'konnte', '<b>könnte</b>', 'always short'],
          ['müssen', 'musste', '<b>müsste</b>', 'always short'],
          ['dürfen', 'durfte', '<b>dürfte</b>', 'always short'],
          ['mögen', 'mochte', '<b>möchte</b>', 'always short (= would like)'],
          ['sollen', 'sollte', '<b>sollte</b>', 'always short — no Umlaut'],
          ['wollen', 'wollte', '<b>wollte</b>', 'always short — no Umlaut'],
          ['wissen', 'wusste', '<b>wüsste</b>', 'short (Ich wüsste gern …)'],
          ['geben', 'gab', '<b>gäbe</b>', 'short is common: es gäbe'],
          ['kommen', 'kam', '<b>käme</b>', 'both common'],
          ['gehen', 'ging', '<b>ginge</b>', 'both; ginge es? = would it work?'],
          ['finden', 'fand', '<b>fände</b>', 'short common: Ich fände es gut'],
          ['bleiben', 'blieb', '<b>bliebe</b>', 'both'],
          ['lassen', 'ließ', '<b>ließe</b>', 'mostly written'],
          ['tun', 'tat', '<b>täte</b>', 'mostly written; spoken: würde … tun'],
          ['brauchen', 'brauchte', '<b>bräuchte</b>', 'common in speech'],
          ['stehen', 'stand', '<b>stünde / stände</b>', 'written'],
          ['helfen', 'half', '<b>hülfe / hälfe</b>', 'old — use würde helfen'],
          ['machen, kaufen, arbeiten …', 'machte, kaufte …', 'machte, kaufte = Präteritum!', 'always <b>würde</b> + infinitive']
        ]) +
        rule('<p><b>Why würde exists:</b> regular (weak) verbs have a Konjunktiv II identical to the Präteritum: <i>wenn ich arbeitete</i> could be past or unreal. To avoid confusion, German uses <b>würde + infinitive</b> for almost all verbs except the ones above.</p>') },

      { id: 'vergangenheit', title: '3. Forms — past (Vergangenheit)', html:
        '<p>There is only <b>one</b> past form: <b>hätte / wäre + Partizip II</b>. The choice between hätte and wäre follows the Perfekt (haben or sein).</p>' +
        T(['Perfekt (fact)', 'Konjunktiv II Vergangenheit (unreal)'], [
          ['Ich habe es gewusst.', 'Ich <b>hätte</b> es <b>gewusst</b>. <span class="note">— I would have known</span>'],
          ['Wir sind gekommen.', 'Wir <b>wären</b> <b>gekommen</b>. <span class="note">— we would have come</span>'],
          ['Sie hat geholfen.', 'Sie <b>hätte</b> <b>geholfen</b>.'],
          ['Er ist geblieben.', 'Er <b>wäre</b> <b>geblieben</b>.']
        ]) +
        warn('There is <b>no</b> past tense with würde in good German: <s>Ich würde es gewusst haben</s> → <i>Ich hätte es gewusst</i>.') +
        '<h3 class="sub">With modal verbs: the double infinitive</h3>' +
        '<p>Modal + another verb in the past: <b>hätte + infinitive + modal infinitive</b> — the modal does <b>not</b> become a participle.</p>' +
        ex('<p>Du <b>hättest</b> früher <b>kommen sollen</b>. <span class="note">— you should have come earlier</span></p>' +
          '<p>Wir <b>hätten</b> das <b>machen können</b>. <span class="note">— we could have done that</span></p>' +
          '<p>Sie <b>hätte</b> nicht <b>gehen müssen</b>. <span class="note">— she would not have had to go</span></p>') +
        rule('<p>In a subordinate clause, <b>hätte</b> does not go to the very end but stands <b>before</b> the double infinitive: ' +
          '<i>Ich weiß, dass ich früher <b>hätte</b> kommen sollen.</i></p>') +
        '<h3 class="sub">Passive</h3>' +
        T(['', 'Present', 'Past'], [
          ['Vorgangspassiv', 'Das Haus <b>würde gebaut</b> (werden).', 'Das Haus <b>wäre gebaut worden</b>.'],
          ['with modal', 'Das <b>müsste gemacht werden</b>.', 'Das <b>hätte gemacht werden müssen</b>.']
        ]) },

      { id: 'wahl', title: '4. würde or the short form? — the decision rules', html:
        T(['Situation', 'Use', 'Example'], [
          ['sein, haben, modals, werden', 'always short form', 'Ich <b>wäre</b> froh. Ich <b>könnte</b> helfen.'],
          ['wissen, geben, finden, brauchen, kommen, gehen', 'short form is common, würde is also fine', 'Ich <b>fände</b> es gut. / Ich <b>würde</b> es gut <b>finden</b>.'],
          ['all other verbs, esp. regular ones', 'würde + infinitive', 'Ich <b>würde</b> ein Auto <b>kaufen</b>.'],
          ['wenn-clause in formal writing', 'short form, avoid würde in both halves', 'Wenn er Zeit <b>hätte</b>, würde er kommen.'],
          ['speech', 'würde is normal even in the wenn-clause', 'Wenn er kommen würde, wäre ich froh. (spoken: OK)'],
          ['old / literary texts', 'many short forms', 'Wenn ich ein Vöglein <b>wär</b>, <b>flög</b> ich zu dir.']
        ]) +
        cmp('Style comparison',
          '<p><i>Wenn ich mehr Geld <b>verdienen würde</b>, <b>würde</b> ich eine größere Wohnung <b>mieten</b>.</i> — correct, but two würde sound heavy.</p>' +
          '<p><i>Wenn ich mehr Geld <b>verdiente</b>, <b>würde</b> ich eine größere Wohnung <b>mieten</b>.</i> — written style, but <i>verdiente</i> looks like past.</p>' +
          '<p><i>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine größere Wohnung <b>mieten</b>.</i> — best: one short form, one würde.</p>') },

      { id: 'wunsch', title: '5. Use 1 — wishes', html:
        T(['Pattern', 'Example', 'Meaning'], [
          ['Ich hätte gern / Ich möchte', 'Ich <b>hätte gern</b> einen Kaffee.', 'polite wish / order'],
          ['gern + Konj. II', 'Ich <b>würde gern</b> in Italien leben.', 'a wish for something not real now'],
          ['Wenn … doch / nur (verb last)', '<b>Wenn</b> ich <b>doch</b> mehr Zeit <b>hätte</b>!', 'wish about the present — "if only"'],
          ['verb first + doch / nur', '<b>Hätte</b> ich <b>nur</b> mehr Zeit!', 'the same, without wenn'],
          ['past wish', '<b>Wäre</b> ich <b>doch</b> früher <b>gegangen</b>!', 'regret about the past'],
          ['Ich wünschte / wünsche mir, …', 'Ich <b>wünschte</b>, du <b>wärst</b> hier.', '"I wish you were here"'],
          ['Es wäre schön, wenn …', '<b>Es wäre schön, wenn</b> du anrufen würdest.', 'a wish phrased softly']
        ]) +
        cmp('Wish compared with other forms',
          '<p><i>Ich <b>will</b> einen Kaffee.</i> — direct, can sound rude.</p>' +
          '<p><i>Ich <b>möchte</b> einen Kaffee.</i> — normal and polite.</p>' +
          '<p><i>Ich <b>hätte gern</b> einen Kaffee.</i> — very polite, typical in shops and cafés.</p>' +
          '<p><i>Ich <b>habe</b> mehr Zeit. → Ich <b>hätte</b> gern mehr Zeit.</i> — fact vs. wish: the second implies you don\'t have it.</p>') +
        warn('In wish sentences <b>doch</b> and <b>nur</b> are needed — without them <i>Hätte ich mehr Zeit</i> sounds like the start of a condition (… dann würde ich …).') },

      { id: 'hoeflich', title: '6. Use 2 — politeness and requests', html:
        '<p>The Konjunktiv II takes the pressure out of a request: you speak as if it were only a hypothesis, so the other person can say no.</p>' +
        T(['Politeness level', 'Example'], [
          ['1. Imperative — order', '<b>Mach</b> das Fenster zu!'],
          ['2. Imperative + bitte', '<b>Mach</b> bitte das Fenster zu.'],
          ['3. Question, indicative', '<b>Kannst</b> du das Fenster zumachen?'],
          ['4. Question, Konjunktiv II', '<b>Könntest</b> du das Fenster zumachen?'],
          ['5. + bitte / vielleicht', '<b>Könntest</b> du <b>vielleicht</b> das Fenster zumachen?'],
          ['6. very formal', '<b>Wären</b> Sie so freundlich, das Fenster zu schließen?'],
          ['7. indirect', '<b>Es wäre nett, wenn</b> Sie das Fenster schließen <b>könnten</b>.']
        ]) +
        T(['Phrase', 'Use'], [
          ['Könnten Sie …?', 'the all-purpose polite request'],
          ['Würden Sie (bitte) …?', 'request for an action: Würden Sie mir helfen?'],
          ['Hätten Sie …?', 'asking for something: Hätten Sie einen Moment Zeit?'],
          ['Wäre es möglich, …?', 'formal, asks for permission or a favour'],
          ['Dürfte ich …?', 'asking permission very politely: Dürfte ich kurz stören?'],
          ['Ich hätte eine Frage / Bitte.', 'opening a request'],
          ['Ich würde vorschlagen, …', 'a suggestion without pushing'],
          ['Wie wäre es mit …?', 'suggestion: Wie wäre es mit Freitag?']
        ]) +
        cmp('Firm but polite (complaints)',
          '<p><i>Ich <b>will</b> mein Geld zurück!</i> — aggressive.</p>' +
          '<p><i>Ich <b>hätte</b> gern mein Geld zurück.</i> — polite but clear.</p>' +
          '<p><i>Ich <b>würde</b> Sie <b>bitten</b>, das bis Freitag zu klären.</i> — formal and firm: the Konjunktiv II softens the tone, not the demand.</p>') },

      { id: 'rat', title: '7. Use 3 — advice and suggestions', html:
        T(['Pattern', 'Example'], [
          ['sollte + infinitive', 'Du <b>solltest</b> mehr schlafen.'],
          ['An deiner Stelle würde ich …', '<b>An deiner Stelle würde ich</b> den Arzt anrufen.'],
          ['Ich würde …', '<b>Ich würde</b> das nicht kaufen.'],
          ['Es wäre besser, …', '<b>Es wäre besser</b>, früher loszufahren.'],
          ['Wie wäre es mit …? / Wie wäre es, wenn …?', '<b>Wie wäre es mit</b> einem Spaziergang?'],
          ['Du könntest …', 'Du <b>könntest</b> sie einfach fragen.'],
          ['Past: hättest … sollen', 'Du <b>hättest</b> früher zum Arzt <b>gehen sollen</b>. (criticism/regret)']
        ]) +
        cmp('musst vs. sollst vs. solltest vs. könntest',
          '<p><i>Du <b>musst</b> zum Arzt gehen.</i> — necessity, no choice.</p>' +
          '<p><i>Du <b>sollst</b> zum Arzt gehen.</i> — someone else (the doctor, your mother) says so.</p>' +
          '<p><i>Du <b>solltest</b> zum Arzt gehen.</i> — my advice; you decide.</p>' +
          '<p><i>Du <b>könntest</b> zum Arzt gehen.</i> — just an option, the softest.</p>') },

      { id: 'irreal', title: '8. Use 4 — unreal conditions (irreale Bedingungen)', html:
        T(['Type', 'Example', 'Reality'], [
          ['real (indicative)', 'Wenn ich Zeit <b>habe</b>, <b>komme</b> ich.', 'maybe I have time'],
          ['unreal present', 'Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich <b>kommen</b>.', 'I have no time → I don\'t come'],
          ['unreal past', 'Wenn ich Zeit <b>gehabt hätte</b>, <b>wäre</b> ich <b>gekommen</b>.', 'I had no time → I didn\'t come'],
          ['mixed: past condition, present result', 'Wenn ich Medizin <b>studiert hätte</b>, <b>wäre</b> ich jetzt Ärztin.', 'I didn\'t study it → I am not a doctor now'],
          ['mixed: present condition, past result', 'Wenn ich nicht so schüchtern <b>wäre</b>, <b>hätte</b> ich sie <b>angesprochen</b>.', 'I am shy (always) → I didn\'t speak to her']
        ]) +
        '<h3 class="sub">Word order</h3>' +
        ex('<p><b>Wenn</b> ich Zeit <b>hätte</b>, <b>würde</b> ich <b>kommen</b>. <span class="note">— wenn-clause first: verb, comma, verb</span></p>' +
          '<p>Ich <b>würde kommen</b>, <b>wenn</b> ich Zeit <b>hätte</b>. <span class="note">— main clause first</span></p>' +
          '<p><b>Hätte</b> ich Zeit, (<b>dann/so</b>) <b>würde</b> ich <b>kommen</b>. <span class="note">— without wenn: verb in position 1</span></p>') +
        cmp('The same situation, three ways',
          '<p><i>Ich habe keine Zeit, <b>deshalb</b> komme ich nicht.</i> — fact + consequence (indicative).</p>' +
          '<p><i>Ich komme nicht, <b>weil</b> ich keine Zeit habe.</i> — fact + cause (indicative).</p>' +
          '<p><i><b>Wenn</b> ich Zeit <b>hätte</b>, <b>käme</b> ich.</i> — the same facts, seen as the "other world": it shows what would happen and so also tells you, indirectly, the real situation.</p>') +
        T(['Other ways to start a hypothesis', 'Example'], [
          ['Angenommen, …', '<b>Angenommen</b>, du <b>gewännest</b> im Lotto — was <b>würdest</b> du tun?'],
          ['Stell dir vor, …', '<b>Stell dir vor</b>, wir <b>könnten</b> fliegen.'],
          ['Gesetzt den Fall, …', '<b>Gesetzt den Fall</b>, das Projekt <b>scheiterte</b> …'],
          ['an deiner Stelle / ohne + noun', '<b>Ohne</b> dich <b>wäre</b> ich verloren. (= wenn du nicht da wärst)'],
          ['sonst', 'Gut, dass du da bist, <b>sonst hätte</b> ich es nicht geschafft.']
        ]) },

      { id: 'vergleich', title: '9. Use 5 — unreal comparison: als ob, als wenn, als', html:
        T(['Pattern', 'Example', 'Word order'], [
          ['als ob + verb last', 'Er tut so, <b>als ob</b> er krank <b>wäre</b>.', 'subordinate clause'],
          ['als wenn + verb last', 'Sie sieht aus, <b>als wenn</b> sie nicht geschlafen <b>hätte</b>.', 'subordinate clause'],
          ['als + verb second', 'Er tut so, <b>als wäre</b> er krank.', 'verb directly after als'],
          ['past', 'Er redete, <b>als ob</b> er alles <b>gewusst hätte</b>.', 'hätte/wäre + Partizip II']
        ]) +
        cmp('als ob vs. wie',
          '<p><i>Er spricht <b>wie</b> ein Muttersprachler.</i> — real comparison: he really sounds like one.</p>' +
          '<p><i>Er spricht, <b>als ob</b> er Muttersprachler <b>wäre</b>.</i> — he is not one, but it seems so.</p>') +
        warn('In everyday speech you will also hear the indicative or Konjunktiv I after als ob: <i>als ob er krank ist / sei</i>. In writing, Konjunktiv II is the safe choice.') },

      { id: 'vorsicht', title: '10. Use 6 — caution, opinions and hedging', html:
        '<p>The Konjunktiv II makes a statement less absolute — very common in discussions, academic texts and business.</p>' +
        T(['Phrase', 'Effect'], [
          ['Ich würde sagen, …', 'gives an opinion softly'],
          ['Ich würde meinen / denken, …', 'the same, more reflective'],
          ['Das wäre eine Möglichkeit.', 'proposes without insisting'],
          ['Es wäre denkbar, dass …', 'formal hypothesis'],
          ['Man könnte einwenden, dass …', 'introduces a counter-argument'],
          ['Das dürfte stimmen.', 'probability ≈ 75 %: "that is probably true"'],
          ['Er müsste gleich kommen.', 'logical expectation: "he should be here soon"'],
          ['Das könnte schwierig werden.', 'possibility, cautious warning'],
          ['Ich hätte gedacht, dass …', 'polite surprise or disagreement'],
          ['Da wäre noch ein Punkt.', 'brings in a new point politely']
        ]) +
        cmp('Degrees of certainty',
          '<p><i>Er <b>ist</b> zu Hause.</i> — fact.</p>' +
          '<p><i>Er <b>müsste</b> zu Hause sein.</i> — I conclude it from what I know.</p>' +
          '<p><i>Er <b>dürfte</b> zu Hause sein.</i> — probably.</p>' +
          '<p><i>Er <b>könnte</b> zu Hause sein.</i> — possible.</p>' +
          '<p><i>Er <b>wäre</b> zu Hause, wenn …</i> — not real, depends on a condition.</p>') +
        cmp('Directness compared',
          '<p><i>Das ist falsch.</i> — blunt.</p>' +
          '<p><i>Ich glaube, das ist nicht ganz richtig.</i> — softened with indicative.</p>' +
          '<p><i>Ich <b>würde</b> das etwas anders <b>sehen</b>.</i> — disagreement with maximum politeness.</p>') },

      { id: 'weitere', title: '11. Further uses', html:
        T(['Use', 'Example', 'Meaning'], [
          ['almost happened (fast / beinahe)', '<b>Fast wäre</b> ich <b>gefallen</b>.', 'I nearly fell — but didn\'t'],
          ['something achieved', 'So, das <b>hätten</b> wir! / Das <b>wäre</b> geschafft.', '"there we are" — done (colloquial)'],
          ['too … to', 'Er ist <b>zu</b> jung, <b>als dass</b> er das verstehen <b>könnte</b>.', 'the result is impossible'],
          ['without', 'Er ging, <b>ohne dass</b> es jemand <b>bemerkt hätte</b>.', 'stresses that it did not happen'],
          ['indirect speech (replacement)', 'Sie sagen, sie <b>hätten</b> keine Zeit.', 'when Konjunktiv I = indicative (sie haben), Konjunktiv II takes over'],
          ['relative clause, unreal', 'Ich kenne niemanden, der das <b>könnte</b>.', 'there is no such person'],
          ['questions of doubt', '<b>Wäre</b> das wirklich so einfach?', 'skeptical question'],
          ['nicht dass …', '<b>Nicht dass</b> ich etwas dagegen <b>hätte</b>, aber …', '"not that I mind, but …"']
        ]) },

      { id: 'abgrenzung', title: '12. Konjunktiv II compared with other ways of saying it', html:
        cmp('Konjunktiv II vs. Indikativ',
          '<p><i>Wenn es regnet, bleiben wir zu Hause.</i> — a real possibility.</p>' +
          '<p><i>Wenn es regnen würde, würden wir zu Hause bleiben.</i> — it is not raining (or you think it won\'t).</p>') +
        cmp('Konjunktiv II vs. Konjunktiv I (indirect speech)',
          '<p><i>Er sagt, er <b>sei</b> krank.</i> — neutral report (Konj. I), typical of the news.</p>' +
          '<p><i>Er sagt, er <b>wäre</b> krank.</i> — also correct; in speech common, and in writing it can suggest you doubt it.</p>' +
          '<p><i>Sie sagen, sie <b>hätten</b> Hunger.</i> — Konj. II is required because Konj. I <i>sie haben</i> = indicative.</p>') +
        cmp('würde (Konjunktiv II) vs. wird (Futur)',
          '<p><i>Ich <b>werde</b> dich anrufen.</i> — I will call you (promise, real).</p>' +
          '<p><i>Ich <b>würde</b> dich anrufen, (wenn …)</i> — I would call you — there is a condition/obstacle.</p>') +
        cmp('Konjunktiv II vs. Präteritum — same-looking forms',
          '<p><i>Wir <b>gingen</b> ins Kino.</i> — past: we went.</p>' +
          '<p><i>Wenn wir ins Kino <b>gingen</b>, …</i> — could be "when we went" (past) or "if we went" (unreal). Context decides — or use <i>würden … gehen</i> to make it clear.</p>' +
          '<p><i>sollte, wollte</i> look exactly like the Präteritum: <i>Ich sollte gehen</i> = "I was supposed to go" or "I ought to go".</p>') +
        cmp('Modal verbs: indicative vs. Konjunktiv II',
          T(['Indicative', 'Konjunktiv II', 'Difference'], [
            ['Ich kann helfen.', 'Ich könnte helfen.', 'ability → offer / possibility'],
            ['Du musst gehen.', 'Du müsstest gehen.', 'necessity → necessity under a condition / logical assumption'],
            ['Darf ich?', 'Dürfte ich?', 'permission → very polite permission / probability'],
            ['Du sollst lernen.', 'Du solltest lernen.', 'someone demands → advice'],
            ['Ich will das.', 'Ich möchte das.', 'blunt will → polite wish'],
            ['Ich konnte kommen.', 'Ich hätte kommen können.', 'I was able to (and did) → I could have (but didn\'t)']
          ])) +
        cmp('Conditions without Konjunktiv',
          '<p><i>Bei Regen bleiben wir zu Hause.</i> — preposition (real condition).</p>' +
          '<p><i>Ohne deine Hilfe hätte ich es nicht geschafft.</i> — preposition + Konj. II (unreal: you did help).</p>') },

      { id: 'satzbau', title: '13. Word order cheat sheet', html:
        T(['Sentence type', 'Example'], [
          ['Main clause, würde', 'Ich <b>würde</b> morgen gern ans Meer <b>fahren</b>.'],
          ['Main clause, past', 'Ich <b>wäre</b> gestern gern ans Meer <b>gefahren</b>.'],
          ['Question', '<b>Könnten</b> Sie mir <b>helfen</b>?'],
          ['wenn-clause', '…, wenn ich mehr Zeit <b>hätte</b>.'],
          ['wenn-clause with würde (spoken)', '…, wenn du mir <b>helfen würdest</b>.'],
          ['wenn-clause past', '…, wenn ich das <b>gewusst hätte</b>.'],
          ['subordinate clause + modal past', '…, dass er es <b>hätte machen sollen</b>.'],
          ['no wenn', '<b>Hätte</b> ich mehr Zeit, <b>würde</b> ich mehr lesen.'],
          ['als ob / als', '…, als ob er krank <b>wäre</b>. / …, als <b>wäre</b> er krank.']
        ]) },

      { id: 'fehler', title: '14. Most common mistakes', html:
        T(['Wrong', 'Right', 'Why'], [
          ['<s>Wenn ich Zeit habe, würde ich kommen.</s>', 'Wenn ich Zeit <b>hätte</b>, würde ich kommen.', 'both halves must be unreal'],
          ['<s>Ich würde es gewusst haben.</s>', 'Ich <b>hätte</b> es <b>gewusst</b>.', 'past = hätte/wäre + Partizip II'],
          ['<s>Ich würde sein froh.</s>', 'Ich <b>wäre</b> froh.', 'sein → always short form; infinitive goes to the end anyway'],
          ['<s>Du hättest kommen gesollt.</s>', 'Du hättest kommen <b>sollen</b>.', 'double infinitive with modals'],
          ['<s>Ich hätte gekommen.</s>', 'Ich <b>wäre</b> gekommen.', 'kommen takes sein'],
          ['<s>Ich wünsche, du bist hier.</s>', 'Ich <b>wünschte</b>, du <b>wärst</b> hier.', 'unreal wish'],
          ['<s>Hätte ich mehr Zeit!</s> (wish)', 'Hätte ich <b>doch / nur</b> mehr Zeit!', 'wish needs doch/nur'],
          ['<s>Er tut, als ob er ist krank.</s>', 'Er tut so, als ob er krank <b>wäre</b>.', 'als ob = verb last + Konj. II'],
          ['<s>Ich hatte gern einen Kaffee.</s>', 'Ich <b>hätte</b> gern einen Kaffee.', 'Umlaut! hatte = past, hätte = Konj. II']
        ]) }
    ],
    quiz: [
      exSelect('Wenn ich mehr Geld ___, würde ich reisen.', 'hätte', ['habe', 'hätte', 'hatte']),
      exSelect('___ Sie mir bitte helfen?', 'Könnten', ['Können', 'Könnten', 'Konnten']),
      exInput('Konjunktiv II of <i>sein</i>: ich ___', 'wäre'),
      exInput('Konjunktiv II of <i>kommen</i>: er ___', 'käme|würde kommen'),
      exInput('Konjunktiv II of <i>wissen</i>: ich ___', 'wüsste'),
      exSelect('Past: Wenn ich das gewusst hätte, ___ ich nicht gekommen.', 'wäre', ['hätte', 'wäre', 'würde']),
      exInput('Make it unreal past: <i>Ich habe es gemacht.</i> → Ich ___ es gemacht.', 'hätte'),
      exInput('Double infinitive: Du hättest früher ___ (gehen + sollen).', 'gehen sollen'),
      exSelect('Advice: Du ___ mehr Wasser trinken.', 'solltest', ['sollst', 'solltest', 'musst']),
      exSelect('Wish: ___ ich doch mehr Zeit!', 'Hätte', ['Habe', 'Hätte', 'Hatte']),
      exSelect('Er tut so, als ob er krank ___.', 'wäre', ['ist', 'wäre', 'war']),
      exSelect('Er tut so, als ___ er krank.', 'wäre', ['ob', 'wäre', 'ist']),
      exInput('Without wenn: <i>Wenn ich Zeit hätte, käme ich.</i> → ___ ich Zeit, käme ich.', 'Hätte'),
      exSelect('Which is real (not Konjunktiv II)?', 'Wenn es regnet, bleiben wir hier.', ['Wenn es regnet, bleiben wir hier.', 'Wenn es regnete, blieben wir hier.', 'Wenn es regnen würde, würden wir hier bleiben.']),
      exSelect('Fast ___ ich den Zug verpasst.', 'hätte', ['habe', 'hätte', 'wäre']),
      exSelect('Very polite permission: ___ ich kurz stören?', 'Dürfte', ['Darf', 'Dürfte', 'Durfte']),
      exInput('Mixed: Wenn ich Medizin studiert hätte, ___ ich jetzt Ärztin. (sein)', 'wäre'),
      exSelect('Indirect speech: Sie sagen, sie ___ keine Zeit.', 'hätten', ['haben', 'hätten', 'hatten'])
    ]
  };
})();
