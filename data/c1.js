/* C1 — Effective Operational Proficiency. Outline only. */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus, culture: null, recap: null, sentences: [] };
  }

  window.LEVELS.c1 = {
    code: 'c1', label: 'C1', name: 'Fortgeschritten — Effective Proficiency',
    goal: 'Understand demanding texts, express yourself fluently and spontaneously, and use German flexibly for academic and professional purposes.',
    units: [
      U('🏗️ Unit 1 — Style and Register', 'Stil und Register', [
        t('🎚️', 'Five registers of German', 'Umgangssprache → gehobene Schriftsprache'),
        t('🔁', 'Verbal vs. nominal style', 'Converting in both directions on demand'),
        t('✂️', 'Economy and precision', 'Cutting filler without losing nuance'),
        t('🎭', 'Tone and distance', 'Sounding formal without sounding stiff'),
        t('🪞', 'Diagnosing your own style', 'Recurring markers of non-native writing')
      ], ['Shift register deliberately for audience and purpose', 'Rewrite a text in a different style'],
         ['Nominalisation and its reversal', 'Funktionsverbgefüge, extended inventory', 'Stylistic word order']),

      U('🧩 Unit 2 — Complex Syntax', 'Komplexe Syntax', [
        t('🏛️', 'Extended participial attributes', 'Reading and producing the long pre-noun phrase'),
        t('🔗', 'Multiple embedding', 'Keeping a three-clause sentence readable'),
        t('↩️', 'Ellipsis and coordination', 'What German leaves out'),
        t('🎯', 'Focus and emphasis', 'Cleft-like structures, position of elements'),
        t('⚙️', 'Error-prone structures', 'Where C1 writers still slip')
      ], ['Produce and parse highly complex sentences', 'Control emphasis through structure'],
         ['Partizipialattribute and their clause equivalents', 'Ellipsis', 'Marked word order']),

      U('🔬 Unit 3 — Academic Discourse', 'Wissenschaftlicher Diskurs', [
        t('📚', 'Reading a scholarly article', 'Argument structure and signalling'),
        t('🗣️', 'Hedging and commitment', 'Calibrating how strongly you claim'),
        t('🧾', 'Abstracts and summaries', 'Dense, accurate compression'),
        t('🎤', 'A conference-style talk', 'Fifteen minutes with discussion'),
        t('✍️', 'A seminar paper in outline', 'Structure, sources, argument')
      ], ['Follow and contribute to academic discussion', 'Write an abstract and a structured paper'],
         ['Academic connector inventory', 'Impersonal and passive academic forms', 'Citation conventions']),

      U('🏛️ Unit 4 — Politics, Power and Rhetoric', 'Politik und Rhetorik', [
        t('🎙️', 'Analysing a political speech', 'Devices, framing, appeals'),
        t('🪄', 'Rhetorical figures in German', 'Trikolon, Anapher, rhetorische Frage'),
        t('📰', 'Framing in the media', 'How word choice carries a position'),
        t('⚔️', 'Counter-argument technique', 'Steelmanning and refuting'),
        t('🗣️', 'A formal debate', 'Timed, with rebuttal')
      ], ['Analyse rhetoric critically', 'Hold your own in a formal debate'],
         ['Rhetorical structures', 'Modal particles for argumentative nuance', 'Konjunktiv in argument']),

      U('🧠 Unit 5 — Philosophy and Ethics', 'Philosophie und Ethik', [
        t('🤔', 'Reading a philosophical text', 'Dense abstraction without panic'),
        t('🧩', 'Defining abstract concepts', 'Freiheit, Gerechtigkeit, Verantwortung'),
        t('⚖️', 'Constructing a rigorous argument', 'Premise, inference, objection'),
        t('🔁', 'Thought experiments', 'Hypothetical language at full range'),
        t('✍️', 'A philosophical essay', 'Argument-led, 400+ words')
      ], ['Discuss abstract concepts precisely', 'Write a rigorous argumentative essay'],
         ['Irrealis, all forms', 'Concessive and conditional combinations', 'Abstract noun formation']),

      U('📖 Unit 6 — Literature and Interpretation', 'Literatur und Interpretation', [
        t('🕰️', 'A short tour of German literature', 'From Goethe to the present, in outline'),
        t('🔍', 'Close reading', 'Form, voice, ambiguity'),
        t('🎭', 'Drama and dialogue', 'Reading a scene aloud and interpreting it'),
        t('🪶', 'Poetry', 'Metre, image, translation problems'),
        t('✍️', 'An interpretive essay', 'Claim supported by textual evidence')
      ], ['Interpret a literary text with textual evidence', 'Discuss form as well as content'],
         ['Literary tenses and style', 'Figurative and archaic forms', 'Genitive and elevated register']),

      U('🌐 Unit 7 — Language Variation', 'Varietäten des Deutschen', [
        t('🇦🇹', 'Austrian and Swiss German', 'What actually differs, and when it matters'),
        t('🗺️', 'Major dialect regions', 'Recognising, not producing'),
        t('🏙️', 'Youth language and slang', 'Understanding without overusing'),
        t('🕰️', 'A brief history of German', 'Why the grammar looks like this'),
        t('🔤', 'Anglicisms and language change', 'The debate about Denglisch')
      ], ['Understand regional and social varieties', 'Discuss language change informedly'],
         ['Variant forms and vocabulary', 'Historical explanations of irregularities']),

      U('💼 Unit 8 — Professional Communication at a High Level', 'Berufliche Kommunikation', [
        t('📊', 'Reports and documentation', 'Bericht, Protokoll, Dokumentation'),
        t('🤝', 'High-stakes negotiation', 'Interests, leverage, face-saving'),
        t('🧭', 'Leading a meeting', 'Agenda, moderation, decisions'),
        t('✉️', 'Difficult correspondence', 'Bad news, refusal, escalation'),
        t('🎤', 'Pitching an idea', 'Persuasion under time pressure')
      ], ['Lead meetings and negotiations in German', 'Write demanding professional documents'],
         ['Formal correspondence conventions', 'Diplomatic and mitigating language', 'Precision in commitment']),

      U('🧾 Unit 9 — Idiom and Phraseology', 'Idiomatik und Phraseologie', [
        t('🧩', 'Fixed expressions', 'Redewendungen and when they are appropriate'),
        t('🤲', 'Collocations', 'The combinations natives never get wrong'),
        t('🎭', 'Proverbs and allusions', 'Recognising cultural references'),
        t('😏', 'Irony and understatement', 'Hearing it and doing it'),
        t('⚠️', 'Overuse traps', 'Idioms that mark you as a learner')
      ], ['Use idiomatic German appropriately', 'Catch irony and allusion'],
         ['Collocation patterns', 'Phraseological units', 'Pragmatic markers']),

      U('🌍 Unit 10 — Global Issues in Depth', 'Globale Themen', [
        t('🌡️', 'Climate: science, policy, conflict', 'A full dossier topic'),
        t('🤖', 'Technology and society', 'Long-horizon consequences'),
        t('⚖️', 'Inequality and justice', 'Data, theory, position'),
        t('🕊️', 'Conflict and diplomacy', 'Careful language for contested facts'),
        t('🗣️', 'A dossier presentation', 'Multiple sources, one argument')
      ], ['Synthesise several sources into one argument', 'Present a complex dossier topic'],
         ['Synthesis and attribution language', 'Complex comparison and concession']),

      U('🎧 Unit 11 — Listening and Speaking at Speed', 'Hören und Sprechen in Echtzeit', [
        t('🎙️', 'Lectures and podcasts', 'Note-taking from fast, unscripted speech'),
        t('📻', 'Fast colloquial speech', 'Reductions, fillers, overlapping talk'),
        t('🔁', 'Paraphrasing on the fly', 'Repair strategies when words fail'),
        t('🗣️', 'Spontaneous argument', 'Thinking and speaking at once'),
        t('🎯', 'Fluency drills', 'Timed, repeated, measured')
      ], ['Follow fast unscripted German', 'Speak spontaneously without long pauses'],
         ['Spoken-German reductions', 'Discourse markers', 'Repair and rephrasing strategies']),

      U('🧾 Unit 12 — C1 Review and Exam Practice', 'Wiederholung und Prüfungstraining', [
        t('👂', 'Listening — lecture and interview', 'Full exam format'),
        t('📖', 'Reading — four demanding texts', 'With language-awareness tasks'),
        t('✍️', 'Writing — essay and formal letter', 'Timed, with marking criteria'),
        t('🗣️', 'Speaking — presentation and discussion', 'Against C1 descriptors'),
        t('🧩', 'Grammar and style checklist', 'Everything C1 in one page')
      ], ['Complete a full C1 exam under time', 'Self-assess against the C1 descriptors'],
         ['Full C1 grammar and style review']),
    ]
  };
})();
