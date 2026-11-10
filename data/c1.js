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
        {
          icon: '🔁', title: 'Thought experiments', note: 'Hypothetical language at full range',
          explanation:
            '<p>A thought experiment asks the reader to <em>imagine</em> a world and follow its consequences: <span class="de">Man stelle sich vor, alle Menschen handelten nur im eigenen Interesse …</span> At C1 you are expected to run the whole machinery of unreality fluently and to choose the register on purpose.</p>' +
            '<p><strong>Synthetic forms.</strong> Where learners say <span class="de">würde kommen</span>, careful writers use the short Konjunktiv II of common strong verbs: <span class="de">käme, ginge, gäbe, wüsste, nähme, ließe, bliebe, fände</span>. They read cleaner and sound more literary; <span class="de">würde</span> remains fine for rare or regular verbs, and in speech.</p>' +
            '<p><strong>Range beyond “wenn”.</strong> <em>Wishes:</em> <span class="de">Wäre ich doch früher gegangen!</span> <em>Concession:</em> <span class="de">Selbst wenn er recht hätte, wäre sein Ton unangemessen.</span> <em>Condition by absence:</em> <span class="de">Ohne die Verfassung wäre der Staat handlungsunfähig.</span> <em>Near-miss:</em> <span class="de">Er hätte beinahe verloren.</span> <em>Stipulation:</em> <span class="de">Angenommen, … / gesetzt den Fall, … / es sei denn, …</span></p>',
          vocab: formTable('Short Konjunktiv II of common strong verbs', ['Infinitiv', 'Konjunktiv II', 'Beispiel'], [
            ['kommen', 'käme', 'Wenn sie Zeit hätte, <strong>käme</strong> sie öfter.'],
            ['gehen', 'ginge', 'Es <strong>ginge</strong> auch anders.'],
            ['geben', 'gäbe', 'Wenn es keine Regeln <strong>gäbe</strong>, …'],
            ['wissen', 'wüsste', 'Wenn ich es <strong>wüsste</strong>, würde ich es sagen.'],
            ['nehmen', 'nähme', 'Was <strong>nähme</strong> man in Kauf?'],
            ['lassen', 'ließe', 'Das <strong>ließe</strong> sich begründen.'],
            ['bleiben', 'bliebe', 'Dann <strong>bliebe</strong> nur eine Lösung.'],
            ['finden', 'fände', 'Man <strong>fände</strong> kaum Gegenargumente.']
          ]) +
          vocabTable([
            ['Man stelle sich vor, …', 'Imagine that …'],
            ['Angenommen, …', 'Suppose …'],
            ['gesetzt den Fall, dass …', 'in the event that …'],
            ['es sei denn, …', 'unless …'],
            ['Selbst wenn …', 'Even if …'],
            ['Ohne … wäre …', 'Without … there would be …'],
            ['das Gedankenexperiment', 'the thought experiment'],
            ['die Prämisse', 'the premise'],
            ['die Konsequenz', 'the consequence'],
            ['der Schleier des Nichtwissens', 'the veil of ignorance (Rawls)']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Register choice — same content, three levels:</strong></p>' +
            '<div class="example-box">' +
            'Wenn es keine Regeln geben <strong>würde</strong>, <strong>würde</strong> das Chaos ausbrechen. <span class="note">(learner-safe, spoken)</span><br>' +
            'Wenn es keine Regeln <strong>gäbe</strong>, <strong>bräche</strong> das Chaos aus. <span class="note">(written, polished)</span><br>' +
            '<strong>Gäbe</strong> es keine Regeln, <strong>bräche</strong> das Chaos aus. <span class="note">(without wenn — essayistic)</span>' +
            '</div>' +
            '<p><strong>Avoid ugly doubles.</strong> Do not stack two <span class="de">würde</span> in one sentence if one short form is available: <span class="de">Wenn ich es wüsste, würde ich es sagen.</span> is better than <span class="de">Wenn ich es wissen würde, würde ich es sagen.</span></p>' +
            '<p class="note">The <span class="de">es sei denn, dass …</span> clause uses Konjunktiv I of sein — a fixed expression, not a hypothetical.</p>' +
            '</div>',
          dialogs: dialogBox('Aus einem Seminar — der Schleier des Nichtwissens', [
            ['Prof. Lang', 'Angenommen, Sie wüssten nicht, welche Stellung Sie in der Gesellschaft einnähmen. Wie würden Sie die Regeln gestalten?'],
            ['Studentin', 'Ich würde auf Chancengleichheit bestehen. Ginge es mir schlecht, wäre ich auf sie angewiesen.'],
            ['Prof. Lang', 'Das ist Rawls’ Gedanke. Selbst wenn alle sich uneigennützig verhielten, bliebe die Frage der Verteilung offen.'],
            ['Student', 'Gäbe es keine Ungleichheit, bräuchte man das Experiment gar nicht.'],
            ['Prof. Lang', 'Es sei denn, jemand fände eine bessere Prämisse.']
          ]),
          exercises: exerciseList([
            exInput('Wenn sie mehr Zeit hätte, ___________ sie öfter. (kommen — short Konjunktiv II)', 'käme'),
            exInput('Wenn es keine Regeln ___________, würde das Chaos ausbrechen. (geben)', 'gäbe'),
            exInput('Wenn ich es ___________, würde ich es dir sagen. (wissen)', 'wüsste'),
            exInput('___________ ich doch früher gegangen! (haben/sein — wish, Konjunktiv II)', 'wäre'),
            exInput('Ohne die Verfassung ___________ der Staat handlungsunfähig. (sein)', 'wäre'),
            exInput('Er ___________ beinahe das Spiel verloren. (haben, Konjunktiv II der Vergangenheit)', 'hätte'),
            exSelect('„Selbst wenn er recht hätte, wäre sein Ton unangemessen“ means:', 'Even if he were right, his tone would still be inappropriate.', ['Because he is right, his tone is inappropriate.', 'Even if he were right, his tone would still be inappropriate.', 'He is wrong, so his tone is fine.']),
            exSelect('Which means “unless”?', 'es sei denn', ['es sei denn', 'zumal', 'wohingegen'])
          ])
        },
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
