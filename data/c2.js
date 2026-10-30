/* C2 — Mastery. Outline only. */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus, culture: null, recap: null, sentences: [] };
  }

  window.LEVELS.c2 = {
    code: 'c2', label: 'C2', name: 'Meisterstufe — Mastery',
    goal: 'Understand virtually everything you read or hear, summarise and argue at native-like precision, and shade meaning deliberately.',
    units: [
      U('🎚️ Unit 1 — Precision and Nuance', 'Präzision und Nuance', [
        t('🔍', 'Near-synonyms', 'erreichen / erzielen / erlangen — what each implies'),
        t('⚖️', 'Connotation', 'Choosing the word that carries your stance'),
        t('🧩', 'Modal particles, fully', 'doch, ja, eben, halt, wohl, schon — in combination'),
        t('🎯', 'Degrees of commitment', 'From dürfte to zweifellos'),
        t('✂️', 'Removing the last learner markers', 'The patterns that still give you away')
      ], ['Choose between near-synonyms deliberately', 'Shade meaning with particles and adverbs'],
         ['Semantic fields and connotation', 'Full modal particle system', 'Epistemic marking']),

      U('🎭 Unit 2 — Irony, Humour and Subtext', 'Ironie und Subtext', [
        t('😏', 'German humour, honestly', 'Kabarett, Satire, dry understatement'),
        t('🪞', 'Reading between the lines', 'Implicature and what is left unsaid'),
        t('🗯️', 'Sarcasm and its risks', 'Signals that keep it from misfiring'),
        t('📰', 'Satirical texts', 'Glosse and Kolumne as genres'),
        t('✍️', 'Writing with a voice', 'Producing wit, not just understanding it')
      ], ['Catch and produce irony and subtext', 'Write with a recognisable personal voice'],
         ['Implicature and pragmatics', 'Tonal markers', 'Stylistic deviation for effect']),

      U('📚 Unit 3 — Literary and Historical Texts', 'Literarische und historische Texte', [
        t('🕰️', 'Older German', 'Reading 18th- and 19th-century prose comfortably'),
        t('🪶', 'Poetry at depth', 'Form, tradition, intertextuality'),
        t('🎭', 'Theatre and performance', 'Text versus staging'),
        t('🔍', 'Literary criticism', 'Reading and writing it'),
        t('✍️', 'An interpretive essay at C2', 'Original claim, rigorous support')
      ], ['Read demanding literary and historical German', 'Write literary criticism'],
         ['Archaic and literary forms', 'Genitive and elevated syntax', 'Intertextual reference']),

      U('🔬 Unit 4 — Specialised and Technical Language', 'Fachsprachen', [
        t('⚖️', 'Legal German', 'Reading statutes and judgements'),
        t('🏥', 'Medical German', 'Terminology and patient communication'),
        t('💻', 'Technical and IT German', 'Documentation and specification'),
        t('💰', 'Business and finance', 'Reports, balance-sheet language'),
        t('🔁', 'Translating between expert and lay', 'Same content, two registers')
      ], ['Work with at least one specialised register', 'Translate expert content for a lay audience'],
         ['Terminological precision', 'Fachsprachliche Nominalstil', 'Definition and classification language']),

      U('🧠 Unit 5 — Argumentation at Mastery Level', 'Argumentation', [
        t('🏗️', 'Argument architecture', 'Claim, warrant, evidence, qualifier'),
        t('🕳️', 'Fallacies in German', 'Naming and dismantling them'),
        t('⚔️', 'Pre-empting objections', 'Conceding strategically'),
        t('🎙️', 'Spontaneous rebuttal', 'Under pressure, without notes'),
        t('✍️', 'A long analytical essay', '600+ words, publishable register')
      ], ['Construct and dismantle complex arguments', 'Write at publishable standard'],
         ['Argumentative connector inventory', 'Concession and qualification', 'Complex conditional reasoning']),

      U('🗣️ Unit 6 — Interpreting and Mediating', 'Sprachmittlung', [
        t('🔁', 'Summarising a long source', 'Faithful, dense, in your own words'),
        t('🌐', 'Mediating between languages', 'Content transfer, not word-for-word'),
        t('🎧', 'Consecutive note-taking', 'Symbols and structure'),
        t('🤝', 'Mediating a disagreement', 'Reformulating both sides fairly'),
        t('📝', 'Written mediation tasks', 'Exam-style Sprachmittlung')
      ], ['Mediate accurately between languages and parties', 'Summarise a long source faithfully'],
         ['Paraphrase techniques', 'Attribution and distance', 'Compression strategies']),

      U('🎤 Unit 7 — Public Speaking and Performance', 'Rhetorik und Vortrag', [
        t('🏛️', 'Classical rhetoric applied', 'Ethos, pathos, logos in German'),
        t('🎚️', 'Voice and delivery', 'Pace, pause, stress'),
        t('🧩', 'Structuring a keynote', 'Thirty minutes that hold attention'),
        t('❓', 'Handling hostile questions', 'Staying precise under pressure'),
        t('🪞', 'Recorded self-analysis', 'Measuring your own delivery')
      ], ['Deliver a long public talk convincingly', 'Handle hostile questioning'],
         ['Rhetorical construction', 'Prosody and emphasis', 'Formal spoken register']),

      U('🌐 Unit 8 — Culture, Society and Contemporary Debate', 'Gesellschaft und Gegenwartsdebatten', [
        t('📰', 'Following the German debate', 'Feuilleton and its assumptions'),
        t('🕰️', 'History and memory', 'Erinnerungskultur — talking about it with care'),
        t('🎭', 'Identity debates', 'Precise, non-cliché language'),
        t('⚖️', 'Contested facts', 'Attribution and epistemic caution'),
        t('✍️', 'A Feuilleton-style piece', 'Essayistic, personal, rigorous')
      ], ['Participate in contemporary German cultural debate', 'Write an essayistic piece'],
         ['Essayistic register', 'Careful attribution', 'Cultural reference and allusion']),

      U('✍️ Unit 9 — Writing at Native Standard', 'Schreiben auf Muttersprachniveau', [
        t('🧱', 'Genre mastery', 'Essay, review, report, feature, letter'),
        t('🔗', 'Cohesion at text level', 'Thematic progression across paragraphs'),
        t('✂️', 'Self-editing', 'Three passes: structure, sentence, word'),
        t('🪞', 'Error-pattern elimination', 'Your personal residual list'),
        t('📄', 'A portfolio piece', 'One text taken to publishable quality')
      ], ['Write any common genre at native standard', 'Edit your own work systematically'],
         ['Text-level cohesion', 'Editing heuristics', 'Register consistency']),

      U('🧾 Unit 10 — C2 Review and Exam Practice', 'Wiederholung und Prüfungstraining', [
        t('👂', 'Listening — authentic, unsimplified', 'Full C2 format'),
        t('📖', 'Reading — four demanding texts', 'Including literary and specialised'),
        t('✍️', 'Writing — essay and summary', 'Timed, to C2 criteria'),
        t('🗣️', 'Speaking — presentation and discussion', 'Against C2 descriptors'),
        t('🧩', 'Final checklist', 'Everything C2 in one page')
      ], ['Complete a full C2 exam under time', 'Self-assess against the C2 descriptors'],
         ['Full C2 language review']),
    ]
  };
})();
