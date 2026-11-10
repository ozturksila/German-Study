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
        {
          icon: '🎯', title: 'Degrees of commitment', note: 'From dürfte to zweifellos',
          explanation:
            '<p>At C2 the question is no longer “Is my sentence correct?” but “<em>How much</em> am I claiming?” German gives you a finely graded scale, and the <strong>Konjunktiv II of the modal verbs</strong> sits in the middle of it. It is the grammar of scholarly caution.</p>' +
            '<p><strong>könnte</strong> marks a live possibility (<span class="de">Das könnte stimmen.</span>). <strong>dürfte</strong> says “probably” — the speaker has reasons (<span class="de">Das dürfte stimmen.</span>). <strong>müsste</strong> expresses a well-founded expectation or inference (<span class="de">Er müsste längst da sein.</span>) — weaker than <span class="de">muss</span>, which would be certainty. Compare these with adverbs at the ends of the scale: <span class="de">vielleicht, womöglich</span> (weak) · <span class="de">vermutlich, wahrscheinlich</span> · <span class="de">sicherlich, zweifellos</span> (strong).</p>' +
            '<p>Scholarly and professional writing adds impersonal Konjunktiv II constructions that avoid <em>ich</em> and keep the claim detached: <span class="de">Das ließe sich belegen. · Es wäre zu prüfen, ob … · Man könnte argumentieren, dass … · Man dürfte davon ausgehen, dass …</span> The hedge is the point: it is how a careful writer says “I believe this, but I am not going to overreach”.</p>',
          vocab: formTable('The commitment scale', ['Weak', '', '', 'Strong'], [
            ['vielleicht<br>womöglich', 'Das <strong>könnte</strong> stimmen.', 'Das <strong>dürfte</strong> stimmen.', 'Das stimmt <strong>zweifellos</strong>.'],
            ['Es ist denkbar, dass …', 'Man <strong>könnte</strong> argumentieren, dass …', 'Man <strong>dürfte</strong> davon ausgehen, dass …', 'Es steht außer Frage, dass …']
          ]) +
          vocabTable([
            ['Das ließe sich belegen.', 'That could be substantiated.'],
            ['Es wäre zu prüfen, ob …', 'It would need to be checked whether …'],
            ['Er müsste längst da sein.', 'He ought to have arrived long ago.'],
            ['Man dürfte davon ausgehen, dass …', 'One may probably assume that …'],
            ['Das wäre nicht schlecht.', 'That would not be bad. (understatement)'],
            ['abschwächen', 'to tone down'],
            ['sich festlegen', 'to commit oneself'],
            ['unter Vorbehalt', 'with reservation'],
            ['die Vorsicht', 'caution'],
            ['überinterpretieren', 'to over-interpret']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Reading the scale:</strong></p>' +
            '<div class="example-box">' +
            'Die Studie <strong>könnte</strong> auf einen Zusammenhang hindeuten. <span class="note">(possible)</span><br>' +
            'Die Studie <strong>dürfte</strong> auf einen Zusammenhang hindeuten. <span class="note">(probable)</span><br>' +
            'Die Studie <strong>deutet</strong> auf einen Zusammenhang hin. <span class="note">(asserted)</span><br>' +
            'Die Studie belegt <strong>zweifellos</strong> einen Zusammenhang. <span class="note">(emphatic)</span>' +
            '</div>' +
            '<p><strong>Do not confuse dürfte with the past.</strong> <span class="de">Er dürfte krank sein</span> is a present-tense guess (“he is probably ill”). To guess about the past, add the perfect infinitive: <span class="de">Er dürfte krank gewesen sein.</span></p>' +
            '<p class="note">Litotes and understatement also use Konjunktiv II: <span class="de">Das wäre nicht schlecht</span> can mean “that would be excellent”. Tone decides — which is exactly the C2 skill.</p>' +
            '</div>',
          dialogs: dialogBox('Gutachten — eine Formulierung abschwächen', [
            ['Gutachterin', 'In Ihrem Entwurf steht: „Die Maßnahme senkt die Kosten.“ Das ist zu apodiktisch.'],
            ['Autor', 'Aber die Daten sprechen doch klar dafür.'],
            ['Gutachterin', 'Sie sprechen dafür, ja. „Die Maßnahme dürfte die Kosten senken“ wäre ehrlicher.'],
            ['Autor', 'Oder: „Es ließe sich zeigen, dass …“?'],
            ['Gutachterin', 'Besser. Und der Abschnitt zu den Ausnahmen müsste ohnehin überarbeitet werden. Es wäre zu prüfen, ob die Stichprobe ausreicht.']
          ]),
          exercises: exerciseList([
            exInput('Probably: Das ___________ stimmen. (dürfen, Konjunktiv II)', 'dürfte'),
            exInput('Possible: Das ___________ stimmen. (können, Konjunktiv II)', 'könnte'),
            exInput('Expectation: Er ___________ längst da sein. (müssen, Konjunktiv II)', 'müsste'),
            exInput('Cautious: Das ___________ sich belegen. (lassen, Konjunktiv II)', 'ließe'),
            exInput('Es ___________ zu prüfen, ob die Daten ausreichen. (sein)', 'wäre'),
            exInput('Man ___________ argumentieren, dass … (können, cautious)', 'könnte'),
            exSelect('Which sentence commits the writer the most?', 'Die Studie belegt zweifellos einen Zusammenhang.', ['Die Studie könnte auf einen Zusammenhang hindeuten.', 'Die Studie dürfte auf einen Zusammenhang hindeuten.', 'Die Studie belegt zweifellos einen Zusammenhang.']),
            exSelect('„Er dürfte krank gewesen sein“ expresses:', 'a probable guess about the past', ['a certain fact about the past', 'a probable guess about the past', 'a guess about the future'])
          ])
        },
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
