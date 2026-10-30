/* =========================================================
   Exam preparation — the certificates that exist at each level,
   what each one is made of, and how to train for it.

   Formats change: always check the current Modellsatz on the
   provider's own site before an exam. Dates and fees are not
   listed here for that reason.
   ========================================================= */
(function () {
  function P(part, mins, what) { return [part, mins, what]; }

  window.EXAMS = {
    a1: {
      intro: 'A1 certificates prove you can handle very simple, concrete exchanges. For Germany they matter mainly for the <strong>spouse visa</strong> (Ehegattennachzug), where A1 is the legal minimum.',
      exams: [
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat A1: Start Deutsch 1',
          sub: 'Goethe-Institut · recognised worldwide · ~65 min + speaking',
          parts: [P('Hören', '20 min', 'Short announcements and conversations, played twice'),
                  P('Lesen', '25 min', 'Notes, signs, small adverts'),
                  P('Schreiben', '20 min', 'Fill in a form, write a short message'),
                  P('Sprechen', '15 min', 'Introduce yourself, ask and answer, make a request')],
          pass: '60 % overall', note: 'Fit in Deutsch 1 is the same exam for 10–16 year-olds.' },
        { id: 'telc', cls: 'telc', name: 'telc Deutsch A1',
          sub: 'telc gGmbH · widely used in integration courses',
          parts: [P('Hören', '20 min', 'Everyday situations'),
                  P('Lesen', '20 min', 'Short everyday texts'),
                  P('Schreiben', '20 min', 'A short personal message'),
                  P('Sprechen', '15 min', 'In a group of up to three candidates')],
          pass: '60 %', note: 'telc Deutsch A1 Junior exists for children.' },
        { id: 'oesd', cls: 'oesd', name: 'ÖSD Zertifikat A1',
          sub: 'Austria · accepted in Germany too',
          parts: [P('Lesen', '25 min', 'Everyday texts'), P('Hören', '20 min', 'Short dialogues'),
                  P('Schreiben', '20 min', 'Form plus short message'), P('Sprechen', '10 min', 'Three short tasks')],
          pass: '60 %', note: 'Austrian vocabulary appears (Jänner, Erdäpfel).' }
      ],
      tips: ['The writing task is a <em>form</em> plus a few sentences — practise filling in Vorname, Nachname, Geburtsdatum, Straße, PLZ under time.',
             'Listening is played <strong>twice</strong> at A1. Use the first pass for the gist, the second for the detail.',
             'In the speaking part you draw cards with a word and must form a question. Drill W-questions until they are automatic.']
    },

    a2: {
      intro: 'A2 is the level required for <strong>permanent residence</strong> in some cases and for several family-reunion routes. It is also the natural checkpoint before B1.',
      exams: [
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat A2',
          sub: 'Goethe-Institut · ~90 min + 15 min speaking',
          parts: [P('Hören', '30 min', 'Four parts: announcements, conversations, radio'),
                  P('Lesen', '30 min', 'Four parts: adverts, e-mails, short articles'),
                  P('Schreiben', '30 min', 'Two short texts — a message and a reply'),
                  P('Sprechen', '15 min', 'Questions about yourself, planning something together')],
          pass: '60 %', note: 'Goethe-Zertifikat A2 Fit in Deutsch is the youth version.' },
        { id: 'telc', cls: 'telc', name: 'telc Deutsch A2',
          sub: 'telc gGmbH · also as "A2 Schule" and "A2+ Beruf"',
          parts: [P('Lesen + Sprachbausteine', '50 min', 'Reading plus a grammar/vocabulary gap-fill'),
                  P('Hören', '20 min', 'Three parts'),
                  P('Schreiben', '30 min', 'One guided text'),
                  P('Sprechen', '15 min', 'In pairs')],
          pass: '60 %', note: 'The <em>Sprachbausteine</em> section is telc-specific — pure grammar in context.' },
        { id: 'oesd', cls: 'oesd', name: 'ÖSD Zertifikat A2',
          sub: 'Austria',
          parts: [P('Lesen', '30 min', ''), P('Hören', '25 min', ''), P('Schreiben', '30 min', ''), P('Sprechen', '10 min', '')],
          pass: '60 %', note: '' }
      ],
      tips: ['telc adds <strong>Sprachbausteine</strong> — a gap-fill that tests grammar directly. If you take telc, drill it separately; Goethe has no such part.',
             'At A2 the listening is still played twice in most parts, but not all. Check the Modellsatz.',
             'The speaking exam is usually <strong>in pairs</strong>. Practise reacting to a partner, not just delivering a monologue.']
    },

    b1: {
      intro: 'B1 is the big one for life in Germany: it is the level for <strong>naturalisation</strong> (Einbürgerung), for many apprenticeships, and the exit level of the integration course.',
      exams: [
        { id: 'dtz', cls: 'telc', name: 'DTZ — Deutsch-Test für Zuwanderer (A2–B1)',
          sub: 'telc/g.a.s.t. · the integration-course exam · result given as A2 or B1',
          parts: [P('Hören', '~25 min', 'Four parts'),
                  P('Lesen', '~45 min', 'Five parts'),
                  P('Schreiben', '30 min', 'One letter, with four given bullet points'),
                  P('Sprechen', '~16 min', 'Three parts: about yourself, picture description, planning together')],
          pass: 'Graded per skill; B1 in all parts gives a B1 certificate',
          note: 'This is the exam that counts for Einbürgerung. Each skill is certified separately.' },
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat B1',
          sub: 'Goethe-Institut · modular — each of the four parts can be taken and passed separately',
          parts: [P('Hören', '40 min', 'Four parts'),
                  P('Lesen', '65 min', 'Five parts'),
                  P('Schreiben', '60 min', 'Three tasks: informal mail, forum post, formal mail'),
                  P('Sprechen', '15 min', 'Planning together, presentation, feedback')],
          pass: '60 % per module',
          note: 'Modular: you can retake only the module you failed. This is a real advantage.' },
        { id: 'oesd', cls: 'oesd', name: 'ÖSD Zertifikat B1',
          sub: 'Austria · also as "ÖSD Zertifikat B1 Jugendliche"',
          parts: [P('Lesen', '65 min', ''), P('Hören', '40 min', ''), P('Schreiben', '60 min', ''), P('Sprechen', '15 min', '')],
          pass: '60 % per module', note: 'Also modular.' }
      ],
      tips: ['Goethe B1 and ÖSD B1 are <strong>modular</strong>: pass three parts, retake only the fourth. Plan for that rather than treating it as one exam.',
             'The B1 writing has <strong>three</strong> tasks in 60 minutes. Time yourself: roughly 20 minutes each, and do the one you find easiest first.',
             'In Sprechen Teil 1 you plan something <em>with</em> your partner. Examiners mark interaction — asking, agreeing, suggesting — not fluent monologue.']
    },

    b2: {
      intro: 'B2 is the professional threshold: required for <strong>recognition of many qualifications</strong> (nursing, medicine at B2–C1), for most German-taught degree entry alongside other proof, and for skilled-worker routes. It is where exams stop testing survival and start testing argument.',
      exams: [
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat B2',
          sub: 'Goethe-Institut · modular since 2019 · recognised worldwide',
          parts: [P('Lesen', '65 min', 'Five parts: blog, press, comments, opinion, instructions'),
                  P('Hören', '40 min', 'Four parts: conversation, radio, lecture, discussion'),
                  P('Schreiben', '75 min', 'Two tasks: a forum/opinion text (~150 w) and a formal message (~100 w)'),
                  P('Sprechen', '15 min', 'A ~4-minute presentation plus a discussion with your partner')],
          pass: '60 % per module',
          note: 'Each module is certified separately and can be retaken alone.' },
        { id: 'telc', cls: 'telc', name: 'telc Deutsch B2',
          sub: 'telc gGmbH · also telc Deutsch B2 Beruf and B2·C1 Medizin',
          parts: [P('Lesen + Sprachbausteine', '90 min', 'Reading plus the grammar gap-fill'),
                  P('Hören', '~20 min', 'Three parts, mostly played once'),
                  P('Schreiben', '30 min', 'One letter — formal or semi-formal'),
                  P('Sprechen', '~15 min', 'In pairs: presentation, discussion, joint task')],
          pass: '60 %',
          note: 'telc B2·C1 Medizin is the one required for doctors in most Bundesländer.' },
        { id: 'oesd', cls: 'oesd', name: 'ÖSD Zertifikat B2',
          sub: 'Austria · modular',
          parts: [P('Lesen', '90 min', ''), P('Hören', '~30 min', ''),
                  P('Schreiben', '~60 min', ''), P('Sprechen', '~15 min', 'Picture-based discussion')],
          pass: '60 % per module', note: '' },
        { id: 'testdaf', cls: 'testdaf', name: 'TestDaF (B2–C1)',
          sub: 'g.a.s.t. · the university-entrance exam · graded TDN 3, 4 or 5',
          parts: [P('Leseverstehen', '60 min', 'Three academic texts'),
                  P('Hörverstehen', '40 min', 'Campus dialogue, interview, lecture'),
                  P('Schriftlicher Ausdruck', '60 min', 'Describe a chart, then argue a position'),
                  P('Mündlicher Ausdruck', '35 min', 'Seven recorded tasks, no examiner present')],
          pass: 'TDN 4 in all four parts is the usual university requirement',
          note: 'Not pass/fail — you get a level per skill. TDN 4 ≈ B2+, TDN 5 ≈ C1.' }
      ],
      tips: ['B2 listening is often played <strong>only once</strong>. This is the single biggest step up from B1 — train with one listen from the start.',
             'The Goethe B2 <em>Schreiben</em> asks for a reasoned opinion with a counter-argument. A list of personal opinions scores badly; <em>These → Argument → Gegenargument → Fazit</em> scores well.',
             'In the speaking presentation you must structure, not chat: greet, announce your structure, give two or three points with examples, conclude, hand over to your partner.',
             'For TestDaF, the chart description is a fixed genre. Learn the phrases once (<em>Die Grafik zeigt…, Auffällig ist…, Im Vergleich dazu…</em>) and they are free marks.',
             'If you need B2 for a profession, check <em>which</em> certificate your Behörde accepts before booking — nursing and medicine often require telc specifically.']
    },

    c1: {
      intro: 'C1 opens German-taught university study without further proof and is the requirement for several regulated professions. Texts are authentic and unsimplified.',
      exams: [
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat C1',
          sub: 'Goethe-Institut · ~190 min + 15 min speaking',
          parts: [P('Lesen', '70 min', 'Authentic articles and literary excerpts'),
                  P('Hören', '40 min', 'Interview and lecture, mostly once'),
                  P('Schreiben', '80 min', 'A structured text plus a rewriting task'),
                  P('Sprechen', '15 min', 'Presentation and discussion')],
          pass: '60 %', note: '' },
        { id: 'telc', cls: 'telc', name: 'telc Deutsch C1 / C1 Hochschule',
          sub: 'telc gGmbH · C1 Hochschule is accepted for university entrance',
          parts: [P('Lesen + Sprachbausteine', '90 min', ''), P('Hören', '40 min', ''),
                  P('Schreiben', '70 min', 'A summary and an argumentative text'),
                  P('Sprechen', '~16 min', 'Presentation and discussion in pairs')],
          pass: '60 %', note: 'telc C1 Hochschule is the version universities recognise.' },
        { id: 'dsh', cls: 'testdaf', name: 'DSH (DSH-1 / 2 / 3)',
          sub: 'Set by each university itself · B2–C2 range',
          parts: [P('Hörverstehen', '~60 min', 'A lecture, with notes taken'),
                  P('Leseverstehen + Wissenschaftssprache', '~90 min', 'Academic text plus language work'),
                  P('Textproduktion', '~60 min', 'Argumentative or chart-based'),
                  P('Mündliche Prüfung', '~20 min', 'On an academic topic')],
          pass: 'DSH-2 is the usual entry requirement', note: 'Format varies by university — get that university\'s own Musterprüfung.' }
      ],
      tips: ['C1 listening is a <strong>lecture you take notes on</strong>. Practise note-taking in German with abbreviations, not full sentences.',
             'The Goethe C1 writing includes a <em>rewriting</em> task: the same content in a different register. Practise verbal ↔ nominal style conversion.',
             'DSH is set by the individual university — always work from that university\'s own past paper, not a generic book.']
    },

    c2: {
      intro: 'C2 is the ceiling: full command, including irony, register and specialised text. It is rarely a formal requirement, but it is proof of mastery for teaching and translation work.',
      exams: [
        { id: 'goethe', cls: 'goethe', name: 'Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom',
          sub: 'Goethe-Institut · modular · the highest German certificate',
          parts: [P('Lesen', '80 min', 'Four demanding texts, including literary'),
                  P('Hören', '35 min', 'Authentic, unsimplified, once'),
                  P('Schreiben', '80 min', 'A reasoned text and a summary/transfer task'),
                  P('Sprechen', '15 min', 'A presentation and a discussion at native pace')],
          pass: '60 % per module', note: 'Modular — one module at a time is realistic.' },
        { id: 'telc', cls: 'telc', name: 'telc Deutsch C2',
          sub: 'telc gGmbH',
          parts: [P('Lesen', '~90 min', ''), P('Hören', '~40 min', ''),
                  P('Schreiben', '~90 min', ''), P('Sprechen', '~20 min', '')],
          pass: '60 %', note: '' },
        { id: 'oesd', cls: 'oesd', name: 'ÖSD Zertifikat C2 / Wirtschaftssprache Deutsch',
          sub: 'Austria · a business-German variant exists',
          parts: [P('Lesen', '', ''), P('Hören', '', ''), P('Schreiben', '', ''), P('Sprechen', '', '')],
          pass: '60 %', note: 'The C2 Wirtschaftssprache version is aimed at professional use.' }
      ],
      tips: ['At C2 the summary/transfer task is the discriminator: compress a long source faithfully, in your own words, without losing nuance.',
             'Listening is authentic speech — overlapping turns, dialect colouring, fast delivery. Train on unedited podcasts, not course audio.',
             'Idiom and register are actively assessed. A grammatically perfect but tonally flat text does not reach C2.']
    }
  };

  // Advice that is the same whichever certificate you take
  window.EXAM_GENERAL = {
    choosing: [
      '<strong>Check what your Behörde, university or employer accepts</strong> before booking. Goethe, telc and ÖSD are all widely recognised, but specific routes name specific exams — nursing and medicine often require telc, universities often require TestDaF or DSH.',
      '<strong>Prefer a modular exam</strong> where one exists (Goethe and ÖSD from B1 up). If you fail one skill you retake only that one.',
      '<strong>telc has Sprachbausteine</strong>, a grammar gap-fill no other provider uses. Goethe does not. That alone can decide which suits you.',
      '<strong>ÖSD uses Austrian standard German</strong> — Jänner for Januar, Matura for Abitur. Harmless, but do not meet it for the first time in the exam.'
    ],
    preparing: [
      'Work from the provider\'s own <strong>Modellsatz</strong> (free on their site). Course books approximate the format; the Modellsatz is the format.',
      'Do at least two <strong>full papers under exam time</strong>, in one sitting, before the real thing. Time pressure is most of the difficulty.',
      'From B2 up, assume listening is played <strong>once</strong>. Practise that way or the exam will feel twice as fast as your preparation.',
      'Learn the <strong>marking criteria</strong> for the writing and speaking parts. They are published, and they tell you exactly what the examiner ticks.',
      'The speaking exam is usually <strong>with a partner</strong>. Interaction is marked — practise with another person, not alone.'
    ]
  };
})();
