/* A2 — Waystage. Outline only. */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus, culture: null, recap: null, sentences: [] };
  }

  window.LEVELS.a2 = {
    code: 'a2', label: 'A2', name: 'Grundstufe — Waystage',
    goal: 'Handle routine tasks, describe your background and surroundings, and explain plans and opinions in simple terms.',
    units: [
      U('🧠 Unit 1 — Refresher and the Dative Case', 'Wiederholung und Dativ', [
        t('🔄', 'A1 in one page', 'Present tense, articles, accusative, Perfekt — fast review'),
        t('🎯', 'What the dative is for', 'Indirect object: Ich gebe dem Kind das Buch.'),
        t('📦', 'Dative articles and pronouns', 'dem / der / dem / den + -n plural'),
        t('🔗', 'Verbs that take the dative', 'helfen, danken, gefallen, gehören, passen'),
        t('⚖️', 'Accusative or dative?', 'A decision routine that actually works')
      ], ['Use the dative for people affected by an action', 'Choose between accusative and dative reliably'],
         ['Dative case endings', 'Dative personal pronouns', 'Dative-only verbs']),

      U('🗣️ Unit 2 — Giving Reasons and Opinions', 'Meinung und Begründung', [
        t('💭', 'Saying what you think', 'Ich finde / Ich glaube / Meiner Meinung nach'),
        t('🔗', 'weil and denn', 'Same meaning, different word order'),
        t('🙂', 'Agreeing and disagreeing', 'Das stimmt. / Da bin ich anderer Meinung.'),
        t('📣', 'Softening an opinion', 'eigentlich, vielleicht, ziemlich, eher'),
        t('💬', 'A short discussion', 'Holding your turn in a simple exchange')
      ], ['State and justify an opinion', 'Agree or politely disagree'],
         ['Subordinate clauses with weil / dass', 'Main-clause connector denn', 'Verb-final word order']),

      U('🏘️ Unit 3 — Where You Live and Why', 'Wohnort und Umgebung', [
        t('🌆', 'City, town, village', 'Comparing where you live now and before'),
        t('🚏', 'The neighbourhood', 'Infrastructure, noise, green spaces'),
        t('📈', 'Comparing things', 'größer als, so teuer wie, am schönsten'),
        t('🏡', 'Looking for a flat', 'Viewing, applying, moving in'),
        t('🤝', 'Living with others', 'WG life, house rules, neighbours')
      ], ['Compare two places and say which you prefer', 'Describe your neighbourhood and its advantages'],
         ['Comparative and superlative', 'als / wie in comparisons', 'Adjective endings after der/die/das (introduction)']),

      U('🛠️ Unit 4 — Things and Their Qualities', 'Gegenstände beschreiben', [
        t('📐', 'Shape, size, material', 'rund, eckig, aus Holz, aus Plastik'),
        t('🏷️', 'Adjective endings — definite article', 'der neue Tisch, die neue Lampe'),
        t('🏷️', 'Adjective endings — indefinite article', 'ein neuer Tisch, eine neue Lampe'),
        t('🚫', 'Endings after kein and possessives', 'mein neuer Tisch, keine neue Lampe'),
        t('🔍', 'Describing a lost object', 'At the Fundbüro — a practical use case')
      ], ['Describe an object precisely enough for someone to find it', 'Use adjective endings in all three genders'],
         ['Adjective declension, nominative and accusative', 'kein- and possessive declension']),

      U('👗 Unit 5 — Shopping, Returns and Services', 'Einkaufen und Dienstleistungen', [
        t('🛍️', 'Comparing offers', 'Angebot, Rabatt, im Sonderangebot'),
        t('🧾', 'Complaints and returns', 'Die Rechnung stimmt nicht. Ich möchte reklamieren.'),
        t('🔧', 'Repairs and services', 'Werkstatt, Reinigung, Handwerker'),
        t('📦', 'Online orders and delivery', 'Lieferung, Paket, Rücksendung'),
        t('💬', 'Being polite but firm', 'Könnten Sie …? Ich hätte gern …')
      ], ['Return goods and make a complaint', 'Arrange a service or repair'],
         ['Konjunktiv II for politeness: hätte, wäre, könnte, würde', 'Verbs with prepositions (introduction)']),

      U('🍲 Unit 6 — Cooking and Eating Habits', 'Kochen und Ernährung', [
        t('📖', 'Following a recipe', 'Imperative and sequencing words'),
        t('🥦', 'Diet and habits', 'vegetarisch, vegan, Allergien, Zutaten'),
        t('🍽️', 'Eating out in detail', 'Reservations, special requests, splitting the bill'),
        t('🌍', 'Food from home', 'Explaining a dish from your own culture'),
        t('⚖️', 'Quantities and measures', 'EL, TL, Prise, eine Handvoll')
      ], ['Explain a recipe step by step', 'Talk about diet, allergies and preferences'],
         ['Imperative, all three forms', 'Sequencing adverbs: zuerst, dann, danach, zum Schluss', 'man as a general subject']),

      U('🕰️ Unit 7 — Telling Stories in the Past', 'Erzählen in der Vergangenheit', [
        t('✅', 'Perfekt, consolidated', 'Common irregular participles worth memorising'),
        t('📘', 'Präteritum of frequent verbs', 'war, hatte, gab, konnte, wollte, musste'),
        t('🔀', 'Which past do Germans use when?', 'Spoken Perfekt vs. written Präteritum'),
        t('📅', 'Sequencing a story', 'als, dann, plötzlich, am Ende'),
        t('✍️', 'Writing a short narrative', 'A holiday or an incident, 80–100 words')
      ], ['Tell a connected story about the past', 'Recognise Präteritum in written texts'],
         ['Präteritum of modal verbs and sein/haben', 'als vs. wenn', 'Narrative connectors']),

      U('🧑‍🤝‍🧑 Unit 8 — People and Relationships', 'Menschen und Beziehungen', [
        t('🙂', 'Character in detail', 'zuverlässig, ehrgeizig, gelassen, sturköpfig'),
        t('💞', 'Friends, partners, family roles', 'Talking about who matters to you'),
        t('💗', 'Feelings', 'sich freuen über, sich ärgern über, Angst haben vor'),
        t('🗣️', 'Conflicts and apologies', 'Das war nicht so gemeint.'),
        t('🎁', 'Invitations and celebrations', 'Geburtstag, Hochzeit, Einweihungsparty')
      ], ['Describe people’s character and your relationship to them', 'Talk about feelings and small conflicts'],
         ['Reflexive verbs with prepositions', 'Prepositional objects: sich freuen über + Akk.', 'Pronoun order in the sentence']),

      U('🏢 Unit 9 — Work, Applications and Training', 'Arbeit und Bewerbung', [
        t('📰', 'Reading a job advert', 'Requirements, Vollzeit/Teilzeit, Bewerbungsfrist'),
        t('📄', 'CV and cover letter', 'Structure and standard phrases'),
        t('🎤', 'A job interview', 'Strengths, weaknesses, expectations'),
        t('🎓', 'Training and further education', 'Ausbildung, Weiterbildung, Praktikum'),
        t('⚖️', 'Rights at work', 'Urlaub, Krankmeldung, Arbeitsvertrag basics')
      ], ['Write a simple application and answer interview questions', 'Understand the key facts in a job advert'],
         ['Infinitive with zu', 'Nebensätze with dass / ob', 'Future I with werden']),

      U('🧳 Unit 10 — Travel, Movement and Place', 'Reisen und Orientierung', [
        t('↔️', 'Two-way prepositions', 'in die Stadt vs. in der Stadt — movement or position'),
        t('🚗', 'Transport in detail', 'mit dem Auto, zu Fuß, per Bahn'),
        t('🗺️', 'Describing a route', 'Giving longer, multi-step directions'),
        t('🏕️', 'Types of holiday', 'Pauschalreise, Rundreise, Städtetrip'),
        t('📸', 'Reporting back on a trip', 'What was good, what went wrong')
      ], ['Choose correctly between accusative and dative after prepositions', 'Describe a journey and report on it afterwards'],
         ['Wechselpräpositionen', 'Directional vs. locative meaning', 'wo? wohin? woher?']),

      U('📱 Unit 11 — Media and Technology', 'Medien und Technik', [
        t('📲', 'Devices and apps', 'Everyday tech vocabulary'),
        t('🌐', 'Internet and social media', 'posten, teilen, löschen, Datenschutz'),
        t('📺', 'News, series and podcasts', 'Talking about what you follow'),
        t('🛠️', 'When tech fails', 'Es funktioniert nicht. Ich habe mein Passwort vergessen.'),
        t('⚠️', 'Screen time and habits', 'A simple pros-and-cons discussion')
      ], ['Describe how you use media and technology', 'Report and solve a simple technical problem'],
         ['Passive voice (introduction): wird … gebeten', 'Separable verbs in the Perfekt', 'Connectors trotzdem / deshalb']),

      U('🌱 Unit 12 — Environment and Everyday Choices', 'Umwelt und Alltag', [
        t('♻️', 'Recycling and waste', 'German bin colours — a real survival skill'),
        t('🚲', 'Getting around sustainably', 'Rad, ÖPNV, Carsharing'),
        t('💡', 'Saving energy at home', 'Heizen, Strom, Nebenkosten'),
        t('🌍', 'Climate in everyday talk', 'Simple cause and effect'),
        t('🙋', 'What I do myself', 'Expressing willingness and limits')
      ], ['Talk about environmentally friendly habits', 'Explain simple causes and consequences'],
         ['Connectors deshalb / darum / sonst', 'um … zu for purpose', 'Impersonal passive']),

      U('💰 Unit 13 — Money and Bureaucracy', 'Geld und Behörden', [
        t('🏦', 'Bank and accounts', 'Konto eröffnen, überweisen, Dauerauftrag'),
        t('📝', 'At the Amt', 'Anmeldung, Termin, Formular, Bescheid'),
        t('🏥', 'Insurance basics', 'Krankenversicherung, Haftpflicht'),
        t('📞', 'Contracts and cancellation', 'Vertrag, Kündigung, Frist'),
        t('🧾', 'Understanding official letters', 'Decoding bureaucratic phrasing')
      ], ['Handle a bank or office appointment', 'Understand the main point of an official letter'],
         ['Passive with werden', 'Nominal style in official German', 'Genitive (introduction): des Vertrags']),

      U('🏃 Unit 14 — Health, Sport and Wellbeing', 'Gesundheit und Sport', [
        t('🏋️', 'Sport and fitness', 'Gym, clubs, training routines'),
        t('🥗', 'Healthy living', 'Schlaf, Stress, Bewegung, Ernährung'),
        t('🧘', 'Giving advice', 'Du solltest … / An deiner Stelle würde ich …'),
        t('🤕', 'Accidents and injuries', 'Ich habe mir den Arm gebrochen.'),
        t('🩺', 'A longer doctor’s visit', 'Explaining history and asking questions')
      ], ['Give advice and recommendations', 'Describe an injury or longer illness'],
         ['Konjunktiv II for advice: würde, sollte', 'Reflexive with dative: sich die Hand waschen', 'Relative clauses (introduction)']),

      U('🎭 Unit 15 — Culture, Festivals and Traditions', 'Kultur und Feste', [
        t('🎄', 'Festivals in DACH countries', 'Weihnachten, Ostern, Karneval, Oktoberfest'),
        t('🎟️', 'Going out', 'Kino, Theater, Konzert — booking and reviewing'),
        t('📚', 'Books, art and museums', 'Simple descriptions and reactions'),
        t('🎁', 'Gift and invitation etiquette', 'What is expected, and when'),
        t('🌍', 'Comparing with your own culture', 'Bei uns … / Hier dagegen …')
      ], ['Describe a festival or cultural event', 'Compare customs in two countries'],
         ['Relative clauses in nominative and accusative', 'Adjective endings in the dative', 'Connectors dagegen / während']),

      U('🏫 Unit 16 — School, Learning and Language', 'Lernen und Sprache', [
        t('🎒', 'School systems', 'Grundschule, Gymnasium, Abitur — and your own'),
        t('🧠', 'How you learn', 'Strategies, mistakes, motivation'),
        t('📖', 'Talking about language learning', 'Was fällt dir schwer? Was hilft dir?'),
        t('📝', 'Exams and certificates', 'Goethe, telc, ÖSD — what the parts look like'),
        t('🎯', 'Setting goals', 'Ich will bis Juni B1 schaffen.')
      ], ['Describe your learning history and goals', 'Talk about difficulties and strategies'],
         ['Indirect questions with ob / wie / warum', 'Verbs with prepositions, consolidated', 'je … desto (introduction)']),

      U('🔮 Unit 17 — Plans, Wishes and Conditions', 'Pläne, Wünsche, Bedingungen', [
        t('📅', 'Firm plans', 'Future I with werden and with present + time'),
        t('🌟', 'Wishes', 'Ich würde gern … / Ich hätte Lust auf …'),
        t('🎲', 'Real conditions', 'Wenn ich Zeit habe, komme ich mit.'),
        t('🌈', 'Unreal conditions', 'Wenn ich reich wäre, würde ich …'),
        t('📝', 'Writing about your future', 'A short structured text')
      ], ['Talk about plans, wishes and hypothetical situations', 'Write a short text about the future'],
         ['Future I', 'Konjunktiv II with würde / hätte / wäre', 'wenn-clauses, real and unreal']),

      U('🧾 Unit 18 — A2 Review and Exam Practice', 'Wiederholung und Prüfungstraining', [
        t('👂', 'Listening tasks', 'Announcements, short conversations, radio clips'),
        t('📖', 'Reading tasks', 'Adverts, e-mails, short articles'),
        t('✍️', 'Writing tasks', 'An informal e-mail and a short form'),
        t('🗣️', 'Speaking tasks', 'Introducing yourself, asking questions, planning together'),
        t('🧩', 'Grammar checklist', 'Every A2 structure in one reference page')
      ], ['Complete all four parts of an A2 exam under time', 'Identify your own remaining gaps'],
         ['Full A2 grammar review']),
    ]
  };
})();
