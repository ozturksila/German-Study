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
        {
          icon: '💬', title: 'Being polite but firm', note: 'Könnten Sie …? Ich hätte gern …',
          explanation:
            '<p>In a shop or at a service desk you sometimes have to ask for something you have a right to: a refund, an exchange, a receipt. If you say it too directly (<span class="de">Geben Sie mir mein Geld!</span>) it sounds aggressive. If you say it too softly, nobody takes it seriously. German solves this with the <strong>Konjunktiv II</strong>: it makes the request polite, while the words stay clear.</p>' +
            '<p>You already know <span class="de">Ich hätte gern …</span> and <span class="de">Ich möchte …</span> from A1. Now you change the verb in a question in the same way: <span class="de">Können Sie …?</span> becomes <strong>Könnten Sie …?</strong>, <span class="de">Haben Sie …?</span> becomes <strong>Hätten Sie …?</strong>, <span class="de">Ist das möglich?</span> becomes <strong>Wäre das möglich?</strong>, and for every other verb you use <strong>Würden Sie … + Infinitiv?</strong></p>' +
            '<p>Polite does not mean weak. Say clearly what you want — <span class="de">Ich hätte gern mein Geld zurück.</span> — and add <span class="de">bitte</span> or <span class="de">leider</span>. Stay calm and friendly, but keep the request in the sentence.</p>',
          vocab: formTable('The four polite forms', ['', 'können', 'haben', 'sein', 'werden'], [
            ['ich', 'könnte', 'hätte', 'wäre', 'würde'],
            ['du', 'könntest', 'hättest', 'wärst', 'würdest'],
            ['er / sie / es', 'könnte', 'hätte', 'wäre', 'würde'],
            ['wir', 'könnten', 'hätten', 'wären', 'würden'],
            ['ihr', 'könntet', 'hättet', 'wärt', 'würdet'],
            ['sie / Sie', 'könnten', 'hätten', 'wären', 'würden']
          ]) +
          vocabTable([
            ['Könnten Sie mir bitte helfen?', 'Could you help me, please?'],
            ['Hätten Sie das auch in Größe M?', 'Would you have that in size M too?'],
            ['Wäre das möglich?', 'Would that be possible?'],
            ['Würden Sie mir bitte eine Quittung geben?', 'Would you give me a receipt, please?'],
            ['Ich hätte gern mein Geld zurück.', 'I would like my money back.'],
            ['Ich würde die Jacke gern umtauschen.', 'I would like to exchange the jacket.'],
            ['umtauschen', 'to exchange (goods)'],
            ['die Quittung / der Kassenbon', 'the receipt'],
            ['reklamieren', 'to make a complaint about goods'],
            ['der Geschäftsführer / die Geschäftsführerin', 'the manager']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>From normal to polite</strong> — only the verb changes:</p>' +
            '<div class="example-box">' +
            '<strong>Können</strong> Sie mir helfen? → <strong>Könnten</strong> Sie mir bitte helfen?<br>' +
            '<strong>Haben</strong> Sie eine Tüte? → <strong>Hätten</strong> Sie eine Tüte?<br>' +
            '<strong>Ist</strong> das möglich? → <strong>Wäre</strong> das möglich?<br>' +
            '<strong>Geben</strong> Sie mir eine Quittung? → <strong>Würden</strong> Sie mir eine Quittung <strong>geben</strong>?' +
            '</div>' +
            '<p><strong>Word order.</strong> In a question the polite verb comes <strong>first</strong>; the second verb (the infinitive) goes to the <strong>end</strong>: <span class="de"><strong>Könnten</strong> Sie mir bitte <strong>helfen</strong>?</span> In a statement the polite verb is in position 2: <span class="de">Ich <strong>würde</strong> die Jacke gern <strong>umtauschen</strong>.</span></p>' +
            '<p class="note">Polite but firm: <span class="de">Das ist leider kaputt. Ich hätte gern mein Geld zurück.</span> — friendly tone, clear request.</p>' +
            '</div>',
          dialogs: dialogBox('Dialog — returning a jacket', [
            ['Kundin', 'Guten Tag. Ich habe diese Jacke letzte Woche gekauft. Leider ist der Reißverschluss kaputt.'],
            ['Verkäufer', 'Oh, das tut mir leid. Haben Sie den Kassenbon?'],
            ['Kundin', 'Ja, hier. Ich würde die Jacke gern umtauschen. Hätten Sie die noch in Größe M?'],
            ['Verkäufer', 'Leider nicht mehr. Ich könnte Ihnen einen Gutschein geben.'],
            ['Kundin', 'Ein Gutschein hilft mir leider nicht. Ich hätte lieber mein Geld zurück. Wäre das möglich?'],
            ['Verkäufer', 'Natürlich. Würden Sie hier bitte unterschreiben?']
          ]),
          exercises: exerciseList([
            exInput('___________ Sie mir bitte helfen? (können)', 'könnten'),
            exInput('___________ Sie den Pullover auch in Größe M? (haben)', 'hätten'),
            exInput('Ich möchte die Jacke umtauschen. ___________ das möglich? (sein)', 'wäre'),
            exInput('___________ Sie mir bitte eine Quittung geben? (werden)', 'würden'),
            exInput('Ich ___________ gern mein Geld zurück. (haben)', 'hätte'),
            exInput('Ich würde die Jacke gern ___________. (umtauschen)', 'umtauschen'),
            exSelect('Which request is polite but still clear?', 'Ich hätte gern mein Geld zurück.', ['Geben Sie mir mein Geld!', 'Ich hätte gern mein Geld zurück.', 'Vielleicht, wenn es geht, eventuell Geld …?']),
            exSelect('In „Könnten Sie mir bitte helfen?“ the word „helfen“ stands:', 'at the end', ['at the end', 'in second position', 'first'])
          ])
        }
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
        {
          icon: '🧘', title: 'Giving advice', note: 'Du solltest … / An deiner Stelle würde ich …',
          explanation:
            '<p>A friend is stressed, sleeps badly or has back pain. You want to help, but you are not the boss. A direct order (<span class="de">Schlaf mehr!</span>) or <span class="de">Du musst …</span> sounds too strong. German gives advice with the <strong>Konjunktiv II</strong>.</p>' +
            '<p>The most common form is <strong>sollte</strong> (from <span class="de">sollen</span>): <span class="de">Du solltest mehr schlafen.</span> — “You should sleep more.” It is a recommendation, not a rule. A second, very friendly way is to put yourself in the other person’s place: <span class="de">An deiner Stelle würde ich zum Arzt gehen.</span> — “In your place I would go to the doctor.”</p>' +
            '<p>For a suggestion, use <strong>Wie wäre es mit …?</strong> + dative: <span class="de">Wie wäre es mit einem Spaziergang?</span> — “How about a walk?”</p>',
          vocab: formTable('sollen → sollte (advice)', ['', 'sollte'], [
            ['ich', 'sollte'],
            ['du', 'solltest'],
            ['er / sie / es', 'sollte'],
            ['wir', 'sollten'],
            ['ihr', 'solltet'],
            ['sie / Sie', 'sollten']
          ]) +
          vocabTable([
            ['Du solltest mehr schlafen.', 'You should sleep more.'],
            ['Sie sollten zum Arzt gehen.', 'You should go to the doctor. (formal)'],
            ['An deiner Stelle würde ich …', 'In your place I would …'],
            ['Ich würde weniger Kaffee trinken.', 'I would drink less coffee.'],
            ['Wie wäre es mit einem Spaziergang?', 'How about a walk?'],
            ['Es wäre gut, wenn du Pausen machst.', 'It would be good if you took breaks.'],
            ['der Rat / der Tipp', 'the advice / the tip'],
            ['sich ausruhen', 'to rest'],
            ['sich entspannen', 'to relax'],
            ['die Rückenschmerzen (Pl.)', 'back pain']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Three ways to give advice:</strong></p>' +
            '<div class="example-box">' +
            'Du <strong>solltest</strong> mehr Wasser <strong>trinken</strong>.<br>' +
            'An deiner Stelle <strong>würde</strong> ich mehr Wasser <strong>trinken</strong>.<br>' +
            'Wie <strong>wäre</strong> es mit mehr Wasser?' +
            '</div>' +
            '<p><strong>Word order.</strong> <span class="de">sollte / würde</span> is the verb in position 2; the infinitive goes to the <strong>end</strong>. After <span class="de">An deiner Stelle</span> the verb comes straight next, then the subject: <span class="de">An deiner Stelle <strong>würde ich</strong> …</span> — not <span class="de">An deiner Stelle ich würde</span>.</p>' +
            '<p><strong>müssen or sollte?</strong> <span class="de">Du musst zum Arzt.</span> = it is necessary (strong). <span class="de">Du solltest zum Arzt gehen.</span> = it is a good idea (advice).</p>' +
            '</div>',
          dialogs: dialogBox('Dialog — a friend with back pain', [
            ['Lena', 'Mein Rücken tut schon seit einer Woche weh.'],
            ['Tom', 'Oh nein. Du solltest zum Arzt gehen.'],
            ['Lena', 'Ich habe keine Zeit. Ich arbeite den ganzen Tag am Computer.'],
            ['Tom', 'An deiner Stelle würde ich jede Stunde eine kurze Pause machen.'],
            ['Lena', 'Das ist eine gute Idee. Und am Abend?'],
            ['Tom', 'Wie wäre es mit Yoga? Das hilft mir sehr.']
          ]),
          exercises: exerciseList([
            exInput('Du ___________ mehr schlafen. (sollen)', 'solltest'),
            exInput('Sie ___________ zum Arzt gehen. (sollen)', 'sollten'),
            exInput('Ihr ___________ mehr Sport machen. (sollen)', 'solltet'),
            exInput('An deiner Stelle ___________ ich weniger Kaffee trinken. (werden)', 'würde'),
            exInput('Wie ___________ es mit einem Spaziergang? (sein)', 'wäre'),
            exInput('Du solltest mehr Wasser ___________. (trinken)', 'trinken'),
            exSelect('Which sentence is advice, not an obligation?', 'Du solltest zum Arzt gehen.', ['Du musst zum Arzt.', 'Du solltest zum Arzt gehen.', 'Geh zum Arzt!']),
            exSelect('Which word order is correct?', 'An deiner Stelle würde ich früher ins Bett gehen.', ['An deiner Stelle würde ich früher ins Bett gehen.', 'An deiner Stelle ich würde früher ins Bett gehen.', 'An deiner Stelle ich früher ins Bett gehen würde.'])
          ])
        },
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
        {
          icon: '🌈', title: 'Unreal conditions', note: 'Wenn ich reich wäre, würde ich …',
          explanation:
            '<p>Some “ifs” are real: <span class="de">Wenn ich Zeit habe, komme ich mit.</span> — maybe I will have time. Others are <strong>imaginary</strong>: <span class="de">Wenn ich reich wäre, würde ich um die Welt reisen.</span> — I am not rich; I am dreaming. For imaginary situations German uses the <strong>Konjunktiv II</strong>.</p>' +
            '<p>You do not need the whole system yet. Three verb forms do almost all the work: <strong>wäre</strong> (from <span class="de">sein</span>), <strong>hätte</strong> (from <span class="de">haben</span>) and <strong>würde + Infinitiv</strong> for everything else. For <span class="de">können</span> you can also use <strong>könnte</strong>.</p>' +
            '<p>Both parts of the sentence are “unreal”, so both use Konjunktiv II: <span class="de">Wenn ich <strong>hätte</strong> …, <strong>würde</strong> ich …</span>. Do not put <span class="de">würde</span> before <span class="de">wäre</span> or <span class="de">hätte</span> — say <span class="de">ich wäre</span>, never <span class="de">ich würde sein</span>.</p>',
          vocab: formTable('Konjunktiv II — the key forms', ['', 'sein', 'haben', 'werden → würde', 'können'], [
            ['ich', 'wäre', 'hätte', 'würde', 'könnte'],
            ['du', 'wärst', 'hättest', 'würdest', 'könntest'],
            ['er / sie / es', 'wäre', 'hätte', 'würde', 'könnte'],
            ['wir', 'wären', 'hätten', 'würden', 'könnten'],
            ['ihr', 'wärt', 'hättet', 'würdet', 'könntet'],
            ['sie / Sie', 'wären', 'hätten', 'würden', 'könnten']
          ]) +
          vocabTable([
            ['Wenn ich reich wäre, …', 'If I were rich, …'],
            ['Wenn ich Zeit hätte, …', 'If I had time, …'],
            ['Ich würde gern …', 'I would like to …'],
            ['An deiner Stelle würde ich …', 'In your place I would …'],
            ['Was würdest du machen, wenn …?', 'What would you do if …?'],
            ['vielleicht', 'perhaps'],
            ['träumen', 'to dream'],
            ['unmöglich', 'impossible']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Real or unreal?</strong> Compare the verb in the wenn-clause:</p>' +
            '<div class="example-box">' +
            '<strong>Real:</strong> Wenn ich Zeit <strong>habe</strong>, <strong>komme</strong> ich mit.<br>' +
            '<strong>Unreal:</strong> Wenn ich Zeit <strong>hätte</strong>, <strong>würde</strong> ich mitkommen.' +
            '</div>' +
            '<p><strong>Word order.</strong> The wenn-clause sends its verb to the <strong>end</strong>. If it comes first, the main clause then starts with its verb: <span class="de">Wenn ich reich <strong>wäre</strong>, <strong>würde</strong> ich ein Haus kaufen.</span> You can also start with the main clause: <span class="de">Ich <strong>würde</strong> ein Haus kaufen, wenn ich reich <strong>wäre</strong>.</span></p>' +
            '<p class="note">Questions with <span class="de">würdest du</span> are a favourite game: <span class="de">Was würdest du machen, wenn du im Lotto gewinnen würdest?</span></p>' +
            '</div>',
          dialogs: dialogBox('Dialog — daydreaming at lunch', [
            ['Mia', 'Was würdest du machen, wenn du ein Jahr frei hättest?'],
            ['Jonas', 'Ich würde nach Japan reisen. Und du?'],
            ['Mia', 'Wenn ich mehr Geld hätte, würde ich ein Café eröffnen.'],
            ['Jonas', 'Das wäre toll! Ich würde jeden Tag kommen.'],
            ['Mia', 'Aber leider habe ich kein Geld und keine Zeit.'],
            ['Jonas', 'Dann bleibt es ein Traum.']
          ]),
          exercises: exerciseList([
            exInput('Wenn ich reich ___________, würde ich ein Haus kaufen. (sein)', 'wäre'),
            exInput('Wenn ich mehr Zeit ___________, würde ich öfter kochen. (haben)', 'hätte'),
            exInput('Wenn wir mehr Geld hätten, ___________ wir ein Auto kaufen. (würden)', 'würden'),
            exInput('Du ___________ glücklicher, wenn du mehr schlafen würdest. (sein)', 'wärst'),
            exInput('Ich ___________ gern in Berlin wohnen, wenn die Mieten niedriger wären. (würde)', 'würde'),
            exSelect('Which sentence is correct?', 'Wenn ich Zeit hätte, würde ich kommen.', ['Wenn ich Zeit habe, würde ich kommen.', 'Wenn ich Zeit hätte, würde ich kommen.', 'Wenn ich Zeit hätte, ich würde kommen.']),
            exSelect('„Wenn es morgen regnet, bleibe ich zu Hause.“ is:', 'real — it may well happen', ['real — it may well happen', 'unreal — only imagined'])
          ])
        },
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
