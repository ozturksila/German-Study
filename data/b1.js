/* B1 — Threshold. Outline only. */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus, culture: null, recap: null, sentences: [] };
  }

  window.LEVELS.b1 = {
    code: 'b1', label: 'B1', name: 'Mittelstufe — Threshold',
    goal: 'Cope with most everyday situations, describe experiences and opinions, and give reasons at some length.',
    units: [
      U('🧩 Unit 1 — Sentence Architecture', 'Satzbau und Konnektoren', [
        t('🏗️', 'The three positions of the verb', 'Main clause, question, subordinate clause'),
        t('🔗', 'Coordinating connectors', 'und, aber, denn, sondern, oder — position 0'),
        t('🔀', 'Subordinating connectors', 'weil, obwohl, damit, während, bevor, nachdem'),
        t('↩️', 'Adverbial connectors', 'deshalb, trotzdem, allerdings — they take position 1'),
        t('🎚️', 'Information order', 'What goes first, and why Germans move it there')
      ], ['Build long, correctly ordered sentences', 'Link ideas with the right connector type'],
         ['Connector classes and their effect on word order', 'Tekamolo order of adverbials']),

      U('💬 Unit 2 — Describing and Defining', 'Beschreiben und Definieren', [
        t('🔍', 'Relative clauses, all cases', 'der, den, dem, dessen, deren'),
        t('📍', 'Relative clauses with prepositions', 'das Haus, in dem ich wohne'),
        t('🌐', 'wo, was, wer as relatives', 'der Ort, wo … / alles, was …'),
        t('🏷️', 'Participles as adjectives', 'das lachende Kind, die gekochte Suppe'),
        t('📖', 'Defining a word in German', 'Paraphrasing when you lack the exact term')
      ], ['Define and describe things precisely without the exact word', 'Use relative clauses in all cases'],
         ['Relative pronouns in all cases', 'Participle I and II as attributes']),

      U('🏢 Unit 3 — Working Life', 'Berufsleben', [
        t('📈', 'Career paths', 'Talking about development, change, ambition'),
        t('🤝', 'Meetings and teamwork', 'Making proposals, interrupting politely'),
        t('📧', 'Formal written German', 'E-mails, requests, follow-ups'),
        t('⚖️', 'Work–life balance', 'Homeoffice, Überstunden, Elternzeit'),
        t('🎤', 'Presenting something', 'Structuring a three-minute talk')
      ], ['Take part in a work discussion', 'Write a clear formal e-mail'],
         ['Infinitive constructions with zu / um … zu / ohne … zu / statt … zu', 'Nouns from verbs (Nominalisierung)']),

      U('🏥 Unit 4 — Health and the System', 'Gesundheitssystem', [
        t('🏛️', 'How healthcare works in DACH', 'Kasse, Zuzahlung, Facharzt, Überweisung'),
        t('🧠', 'Mental health', 'Stress, Burnout, talking about it appropriately'),
        t('🥗', 'Prevention and lifestyle', 'Arguing for and against habits'),
        t('🩻', 'A longer medical conversation', 'History, diagnosis, follow-up questions'),
        t('📰', 'Reading a health article', 'Finding the claim and the evidence')
      ], ['Navigate a healthcare appointment in detail', 'Summarise a popular-science health article'],
         ['Passive in all tenses', 'Passive alternatives: man, sich lassen, sein + zu']),

      U('🌍 Unit 5 — Environment and Sustainability', 'Umwelt und Nachhaltigkeit', [
        t('🌡️', 'Climate vocabulary', 'Emissionen, Erneuerbare, Verbrauch'),
        t('⚖️', 'Weighing arguments', 'einerseits … andererseits, zwar … aber'),
        t('🚉', 'Mobility debate', 'Car, train, flight — building a position'),
        t('🛒', 'Consumption and waste', 'Verpackung, Lebensmittelverschwendung'),
        t('🗣️', 'A structured discussion', 'Pro-and-contra with a conclusion')
      ], ['Argue a position with several supporting reasons', 'Weigh two sides and conclude'],
         ['Concessive clauses obwohl / trotz', 'zwar … aber, einerseits … andererseits', 'Genitive prepositions']),

      U('📺 Unit 6 — Media and Information', 'Medien und Information', [
        t('📰', 'News genres', 'Nachricht, Kommentar, Reportage, Glosse'),
        t('🔍', 'Reading critically', 'Fact, opinion, source, bias'),
        t('🗣️', 'Reporting what others said', 'Indirect speech with dass and Konjunktiv (intro)'),
        t('📱', 'Social media and privacy', 'Rights, risks, regulation'),
        t('✍️', 'Writing a comment', 'A short opinion piece with a clear line')
      ], ['Summarise a news item and react to it', 'Report another person’s statements'],
         ['Indirect speech (introduction)', 'Reported questions', 'Verbs of saying + dass']),

      U('🏘️ Unit 7 — Housing and City Life', 'Wohnen und Stadtleben', [
        t('📄', 'Rental contracts', 'Kaution, Kündigungsfrist, Hausordnung'),
        t('🔧', 'Problems with the flat', 'Mängel melden, Mietminderung'),
        t('🏗️', 'Urban development', 'Gentrifizierung, Wohnungsnot, Mietpreise'),
        {
          icon: '🤝', title: 'Neighbours and conflict', note: 'Complaining and negotiating politely',
          explanation:
            '<p>In a conflict with a neighbour or landlord, <em>how</em> you say something matters as much as <em>what</em> you say. A direct command (<span class="de">Seien Sie leiser!</span>) starts a fight. German softens requests and complaints with the <strong>Konjunktiv II</strong>: <span class="de">Könnten Sie bitte etwas leiser sein?</span></p>' +
            '<p>There are three jobs for it at B1. <strong>1. Polite requests</strong> with <span class="de">könnten / würden</span>. <strong>2. Soft complaints and wishes</strong> with <span class="de">Es wäre schön, wenn …</span> and <span class="de">Ich wäre Ihnen dankbar, wenn …</span>. <strong>3. Criticism about the past</strong> with <span class="de">hätte … sollen</span>: what someone should have done.</p>' +
            '<p>The modal verbs have their own Konjunktiv II forms: <span class="de">sollen → sollte</span>, <span class="de">müssen → müsste</span>, <span class="de">dürfen → dürfte</span>, <span class="de">können → könnte</span>. As advice, <span class="de">Sie sollten …</span> is firmer than <span class="de">Sie könnten …</span>.</p>',
          vocab: vocabTable([
            ['Könnten Sie bitte … ?', 'Could you please … ?'],
            ['Würden Sie bitte … ?', 'Would you please … ?'],
            ['Es wäre schön, wenn …', 'It would be nice if …'],
            ['Ich wäre Ihnen dankbar, wenn …', 'I would be grateful if …'],
            ['Sie hätten mir Bescheid sagen sollen.', 'You should have told me.'],
            ['Ich hätte erwartet, dass …', 'I would have expected that …'],
            ['die Ruhezeit', 'quiet hours'],
            ['der Lärm', 'noise'],
            ['sich beschweren', 'to complain'],
            ['die Hausordnung', 'house rules'],
            ['eine Lösung finden', 'to find a solution'],
            ['entgegenkommen', 'to meet someone halfway']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Tone ladder</strong> — the same request, from blunt to polite:</p>' +
            '<ul class="goals">' +
            '<li>Seien Sie leiser! <span class="note">(order — avoid)</span></li>' +
            '<li>Können Sie leiser sein? <span class="note">(neutral)</span></li>' +
            '<li><strong>Könnten</strong> Sie bitte leiser sein? <span class="note">(polite)</span></li>' +
            '<li>Es <strong>wäre</strong> schön, wenn Sie nach 22 Uhr leiser <strong>wären</strong>. <span class="note">(very polite, still clear)</span></li>' +
            '</ul>' +
            '<p><strong>Past criticism</strong> uses <strong>hätte + Infinitiv + sollen</strong>:</p>' +
            '<div class="example-box">' +
            'Sie <strong>hätten</strong> mir vorher Bescheid sagen <strong>sollen</strong>.<br>' +
            'Wir <strong>hätten</strong> früher darüber sprechen <strong>können</strong>.<br>' +
            'Wenn ich das gewusst <strong>hätte</strong>, <strong>wäre</strong> ich nicht eingezogen.' +
            '</div>' +
            '<p class="note">For the past, use <strong>hätte</strong> + Partizip II for most verbs and <strong>wäre</strong> + Partizip II for verbs of movement or change (<span class="de">gegangen, gekommen, eingezogen</span>). With a modal verb, two infinitives stand at the end.</p>' +
            '</div>',
          dialogs: dialogBox('Dialog — a conversation about noise', [
            ['Frau Berger', 'Guten Abend, Herr Yilmaz. Hätten Sie kurz Zeit? Es geht um die Musik gestern.'],
            ['Herr Yilmaz', 'Natürlich. Hat sie gestört?'],
            ['Frau Berger', 'Ja, leider bis nach Mitternacht. Sie hätten mir vorher Bescheid sagen sollen.'],
            ['Herr Yilmaz', 'Sie haben recht. Das tut mir leid. Ich hätte nicht so laut feiern dürfen.'],
            ['Frau Berger', 'Es wäre schön, wenn Sie nach 22 Uhr die Lautstärke reduzieren könnten.'],
            ['Herr Yilmaz', 'Kein Problem. Und Sie könnten klopfen, wenn es zu laut wird.'],
            ['Frau Berger', 'Gut, so machen wir es.']
          ]),
          exercises: exerciseList([
            exInput('Politely: ___________ Sie bitte die Musik leiser machen? (können)', 'könnten'),
            exInput('Es ___________ schön, wenn Sie nach 22 Uhr leiser wären. (sein)', 'wäre'),
            exInput('Ich ___________ Ihnen dankbar, wenn Sie das ändern könnten. (sein)', 'wäre'),
            exInput('Sie ___________ mir vorher Bescheid sagen sollen. (haben, Konjunktiv II)', 'hätten'),
            exInput('Wenn ich das gewusst ___________, wäre ich nicht eingezogen. (haben)', 'hätte'),
            exInput('Du ___________ mit ihm reden. (sollen — advice, Konjunktiv II)', 'solltest'),
            exSelect('Which sentence is the most polite?', 'Es wäre schön, wenn Sie leiser wären.', ['Seien Sie leiser!', 'Können Sie leiser sein?', 'Es wäre schön, wenn Sie leiser wären.']),
            exSelect('„Er hätte anrufen sollen“ means:', 'He should have called.', ['He called.', 'He should have called.', 'He will call.'])
          ])
        },
        t('🏡', 'City versus countryside', 'Comparing quality of life')
      ], ['Deal with a rental problem in writing and speech', 'Discuss housing policy in simple terms'],
         ['Konjunktiv II for complaints and requests', 'Nominal constructions with prepositions']),

      U('🎓 Unit 8 — Education and Learning', 'Bildung und Lernen', [
        t('🏫', 'Education systems compared', 'DACH vs. your country'),
        t('🎯', 'Studying and exams', 'Semester, Prüfung, Hausarbeit, Note'),
        t('🧠', 'Learning theories in plain German', 'Reading a short didactic text'),
        t('💼', 'Qualifications and recognition', 'Anerkennung ausländischer Abschlüsse'),
        t('🗣️', 'Debating school reform', 'Taking and defending a position')
      ], ['Discuss education systems and your own path', 'Read a short factual text and summarise it'],
         ['je … desto / umso', 'Comparative clauses with als / wie', 'n-Deklination']),

      U('🧑‍🤝‍🧑 Unit 9 — Society and Living Together', 'Gesellschaft und Zusammenleben', [
        t('🌐', 'Migration and integration', 'Talking about your own experience'),
        t('⚖️', 'Equality and fairness', 'Vocabulary for social debate'),
        t('🤲', 'Volunteering and community', 'Ehrenamt, Verein, Nachbarschaftshilfe'),
        t('🗳️', 'How politics works locally', 'Wahl, Gemeinde, Bürgerinitiative'),
        t('💬', 'Disagreeing respectfully', 'Phrases that keep a debate civil')
      ], ['Discuss social topics with examples', 'Express disagreement without giving offence'],
         ['Impersonal constructions', 'es as a placeholder subject', 'Modal particles: doch, ja, mal, eben']),

      U('💶 Unit 10 — Money, Consumption and Contracts', 'Geld und Konsum', [
        t('📊', 'Budgeting and costs', 'Einnahmen, Ausgaben, Rücklagen'),
        t('📝', 'Reading a contract', 'Kleingedrucktes, Klausel, Haftung'),
        t('🛡️', 'Consumer rights', 'Widerruf, Garantie, Gewährleistung'),
        t('📉', 'Debt and saving', 'Talking about financial decisions'),
        t('🧾', 'Formal complaint letter', 'Structure, tone and standard phrases')
      ], ['Understand the key clauses of a contract', 'Write a formal complaint with a clear demand'],
         ['Futur II (recognition)', 'Passive with modal verbs', 'Prepositional phrases in formal style']),

      U('🧳 Unit 11 — Travel, Culture and Experience', 'Reisen und Erfahrungen', [
        t('🗺️', 'Describing a journey in detail', 'Narrative with mixed tenses'),
        t('🎭', 'Cultural differences', 'Observing without judging'),
        t('😬', 'Misunderstandings', 'Explaining and repairing them'),
        t('📷', 'Reviewing a place', 'Writing a useful review'),
        t('🌐', 'Tourism: good or bad?', 'Overtourism as a discussion topic')
      ], ['Tell an extended story with background and evaluation', 'Write a review with reasons'],
         ['Plusquamperfekt with nachdem', 'Tense sequencing in narration', 'als / wenn / wann distinguished']),

      U('🧠 Unit 12 — Feelings, Character and Psychology', 'Gefühle und Persönlichkeit', [
        t('💭', 'Nuanced feelings', 'enttäuscht, erleichtert, überwältigt, gelassen'),
        t('🔗', 'Verbs with fixed prepositions', 'sich kümmern um, bestehen auf, zweifeln an'),
        t('📌', 'da- and wo- compounds', 'darauf, damit, worauf, womit'),
        t('🪞', 'Describing a personality', 'A longer characterisation'),
        t('💬', 'Talking about conflict', 'Mediating between two positions')
      ], ['Express feelings and reactions precisely', 'Use prepositional objects and da-/wo- compounds'],
         ['Verbs with prepositions', 'da- and wo- compounds', 'Correlative pairs']),

      U('🔬 Unit 13 — Science and Technology in Daily Life', 'Wissenschaft und Technik', [
        t('🧪', 'Popular science texts', 'Reading strategies for unknown vocabulary'),
        t('🤖', 'AI and automation', 'Talking about change at work'),
        t('📈', 'Describing data and trends', 'steigen, sinken, sich verdoppeln, Anteil'),
        t('⚙️', 'Explaining how something works', 'Process description with the passive'),
        t('🗣️', 'Technology: risks and benefits', 'Structured pro-and-contra')
      ], ['Explain a process or a chart in German', 'Discuss technological change'],
         ['Passive for processes', 'Describing graphs and statistics', 'Participial constructions (recognition)']),

      U('⚖️ Unit 14 — Rules, Rights and Obligations', 'Regeln und Rechte', [
        t('📜', 'Expressing obligation and permission', 'müssen, dürfen, sollen vs. nicht brauchen'),
        t('🚫', 'Prohibitions in official German', 'Rauchen verboten / ist nicht erlaubt'),
        t('🧾', 'Official notices', 'Decoding signs, letters and regulations'),
        t('🤔', 'Subjective modal verbs', 'Er muss krank sein. Sie dürfte recht haben.'),
        t('🗣️', 'Arguing about a rule', 'Justifying an exception')
      ], ['Understand and explain rules and obligations', 'Express degrees of certainty'],
         ['Modal verbs, objective vs. subjective', 'Passive alternatives for rules', 'Negation scope']),

      U('🎯 Unit 15 — Expressing Yourself at Length', 'Zusammenhängend sprechen und schreiben', [
        t('🧱', 'Structuring a monologue', 'Einleitung, Hauptteil, Schluss'),
        t('🔗', 'Textual cohesion', 'Pronouns, synonyms, reference words'),
        t('✍️', 'A 150-word opinion text', 'Planning before writing'),
        t('🎤', 'A five-minute presentation', 'Visuals, signposting, handling questions'),
        t('🪞', 'Self-correction', 'The five mistakes B1 learners repeat most')
      ], ['Speak for several minutes on a prepared topic', 'Write a structured 150-word text'],
         ['Cohesion devices', 'Signposting language', 'Review of word order rules']),

      U('🧾 Unit 16 — B1 Review and Exam Practice', 'Wiederholung und Prüfungstraining', [
        t('👂', 'Listening — all four parts', 'Interviews, discussions, announcements'),
        t('📖', 'Reading — all five parts', 'Matching, gap-fill, detailed comprehension'),
        t('✍️', 'Writing — three tasks', 'Informal, semi-formal and formal'),
        t('🗣️', 'Speaking — joint planning and presentation', 'With a partner and alone'),
        t('🧩', 'Grammar checklist', 'Everything B1 in one page')
      ], ['Complete a full B1 exam under time', 'Know exactly which structures still need work'],
         ['Full B1 grammar review']),
    ]
  };
})();
