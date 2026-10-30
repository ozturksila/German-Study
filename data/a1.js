/* A1 — Breakthrough.
   Units 1–2 are written out in full; Units 3–18 are still outline only
   (topics carry a title + a planned note until their content is written). */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus, culture: null, recap: null, sentences: [] };
  }

  window.LEVELS.a1 = {
    code: 'a1', label: 'A1', name: 'Anfänger — Breakthrough',
    goal: 'Understand and use everyday expressions, introduce yourself, and handle simple, concrete situations.',
    units: [
      { // ===== UNIT 1 — written out in full =====
        title: '👋 Unit 1 — Greetings and First Words',
        subject: 'Begrüßung und erste Wörter',
        canDo: ['Greet people and say goodbye appropriately for the time of day and the person', 'Thank, apologise and ask someone to repeat or slow down'],
        grammarFocus: ['Personal pronouns ich / du / Sie', 'Why it is guten Morgen but gute Nacht', 'Statement vs. question word order'],
        topics: [
          {
            icon: '🌅', title: 'Greeting by time of day',
            explanation:
              '<p>German greetings are tied to the clock, and swapping them sounds as odd as "good night" at breakfast does in English. ' +
              '<strong>Guten Morgen</strong> runs from waking up until roughly 10 or 11. <strong>Guten Tag</strong> covers late morning through the afternoon ' +
              'and is the safe, neutral greeting for any stranger, shop or office. <strong>Guten Abend</strong> starts around six, once the working day is over.</p>' +
              '<p><strong>Gute Nacht</strong> is <em>not</em> an evening greeting — it is said only when someone is going to bed. If you say it when leaving a bar at eleven, ' +
              'you have told everyone you are off to sleep.</p>' +
              '<p><strong>Hallo</strong> works at any hour and with almost anyone except in strictly formal settings. Regions add their own: ' +
              '<strong>Moin</strong> in the north (all day, despite the sound of it), <strong>Grüß Gott</strong> in Bavaria and Austria, ' +
              '<strong>Servus</strong> in Bavaria and Austria for both hello and goodbye.</p>',
            vocab: vocabTable([
              ['Guten Morgen', 'Good morning', 'until about 10–11'],
              ['Guten Tag', 'Hello / Good day', 'late morning to early evening'],
              ['Guten Abend', 'Good evening', 'from about 18:00'],
              ['Gute Nacht', 'Good night', 'only when going to bed'],
              ['Hallo', 'Hello', 'any time, neutral'],
              ['Hi', 'Hi', 'informal, young'],
              ['Moin', 'Hi', 'northern Germany, any time'],
              ['Grüß Gott', 'Hello', 'Bavaria, Austria'],
              ['Servus', 'Hi / Bye', 'Bavaria, Austria'],
              ['Herzlich willkommen', 'Welcome', 'greeting a guest']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '🕐 When']),
            grammar:
              '<div class="grammar-point">' +
              '<p>Why <span class="de">guten</span> Morgen but <span class="de">gute</span> Nacht? Each greeting is the leftover of a full sentence: ' +
              '<em>Ich wünsche Ihnen einen guten Tag</em> — "I wish you a good day". The adjective keeps the accusative ending from that dropped sentence.</p>' +
              '<ul class="goals">' +
              '<li><strong>der</strong> Morgen, <strong>der</strong> Tag, <strong>der</strong> Abend → masculine → <strong>guten</strong></li>' +
              '<li><strong>die</strong> Nacht → feminine → <strong>gute</strong></li>' +
              '</ul>' +
              '<p class="note">You do not need to understand the accusative yet. Learn the four greetings as fixed blocks — but notice now that the gender of the noun changes the word in front of it. That pattern runs through all of German.</p>' +
              '<div class="example-box">Guten Morgen! — Good morning!<br>Guten Tag, Frau Weber! — Hello, Mrs Weber!<br>Gute Nacht, schlaf gut! — Good night, sleep well!</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — Monday morning at the office', [
              ['A', 'Guten Morgen, Frau Weber!'],
              ['B', 'Guten Morgen, Herr Klein. Wie geht es Ihnen?'],
              ['A', 'Danke, gut. Und Ihnen?'],
              ['B', 'Auch gut, danke.']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('It is 8:00 and you walk into the office: <em>___________</em>', 'Guten Morgen|Guten Morgen!') +
              exInput('It is 19:30 and you enter a restaurant: <em>___________</em>', 'Guten Abend|Guten Abend!') +
              exInput('What does <span class="de">Gute Nacht</span> mean in English?', 'good night') +
              exSelect('You meet a stranger in a shop at 15:00:', 'Guten Tag', ['Guten Morgen', 'Guten Tag', 'Gute Nacht']) +
              exSelect('Which one is used in Bavaria and Austria?', 'Grüß Gott', ['Moin', 'Grüß Gott', 'Guten Tag']) +
              exInput('Fill in the ending: <span class="de">Gut__ Nacht</span> (die Nacht)', 'gute|e') +
              exInput('Fill in the ending: <span class="de">Gut__ Abend</span> (der Abend)', 'guten|en') +
              '</ol></div>'
          },
          {
            icon: '👋', title: 'Saying goodbye',
            explanation:
              '<p><strong>Auf Wiedersehen</strong> literally means "until we see each other again", so it belongs to face-to-face situations. On the phone, where you cannot see anyone, ' +
              'Germans switch to <strong>Auf Wiederhören</strong> — "until we hear each other again". Getting this right in a phone call is a small thing that natives notice immediately.</p>' +
              '<p><strong>Tschüss</strong> is informal but extremely widespread — you will hear it at supermarket tills, in bakeries and between colleagues. With a boss you have just met, ' +
              'a civil servant or an older stranger, <strong>Auf Wiedersehen</strong> is still the safer choice.</p>' +
              '<p><strong>Bis</strong> + a time word covers everything in between: <strong>bis morgen</strong>, <strong>bis später</strong>, <strong>bis bald</strong>, <strong>bis dann</strong>. ' +
              'And the friendly extra that shop staff use all day: <strong>Schönen Tag noch!</strong> — "have a nice rest of your day".</p>',
            vocab: vocabTable([
              ['Auf Wiedersehen', 'Goodbye', 'formal, face to face'],
              ['Auf Wiederhören', 'Goodbye', 'formal, on the phone'],
              ['Tschüss', 'Bye', 'informal, very common'],
              ['Tschau / Ciao', 'Bye', 'informal'],
              ['Bis morgen', 'See you tomorrow', 'you will meet tomorrow'],
              ['Bis später', 'See you later', 'same day'],
              ['Bis bald', 'See you soon', 'no fixed date'],
              ['Bis dann', 'See you then', 'after agreeing a time'],
              ['Schönen Tag noch', 'Have a nice day', 'leaving a shop or office'],
              ['Schönes Wochenende', 'Have a nice weekend', 'on a Friday'],
              ['Mach es gut', 'Take care', 'informal, warm']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '🕐 When']),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>bis</strong> means "until", and it takes a bare time word — no article, no verb:</p>' +
              '<ul class="goals"><li>bis morgen · bis später · bis bald · bis dann · bis Montag · bis nächste Woche</li></ul>' +
              '<p><strong>Schönen Tag noch</strong> is the same shortened wish as the greetings: <em>Ich wünsche Ihnen einen schönen Tag</em>. ' +
              'Masculine <span class="de">der Tag</span> gives <strong>schönen</strong>; neuter <span class="de">das Wochenende</span> gives <strong>schönes</strong>.</p>' +
              '<div class="example-box">Auf Wiedersehen, Frau Weber! — Goodbye, Mrs Weber!<br>Tschüss, bis morgen! — Bye, see you tomorrow!<br>Schönes Wochenende! — Have a nice weekend!</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — leaving the bakery on a Friday', [
              ['Verkäuferin', 'Das macht 3,40 Euro, bitte.'],
              ['Kunde', 'Hier, bitte. Danke schön!'],
              ['Verkäuferin', 'Danke. Schönes Wochenende!'],
              ['Kunde', 'Danke, gleichfalls. Tschüss!']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('You are ending a phone call with your doctor: <em>___________</em>', 'Auf Wiederhören|Auf Wiederhören!') +
              exInput('You leave a colleague on Friday evening: <span class="de">Schönes ___________</span>', 'Wochenende') +
              exInput('What does <span class="de">Bis bald</span> mean?', 'see you soon') +
              exSelect('You say goodbye to a friend you will see tomorrow:', 'Bis morgen', ['Bis morgen', 'Gute Nacht', 'Auf Wiederhören']) +
              exSelect('Which is the most formal?', 'Auf Wiedersehen', ['Tschüss', 'Ciao', 'Auf Wiedersehen']) +
              exInput('A shop assistant hands you your change and says <span class="de">Schönen Tag noch!</span> You answer: <em>Danke, ___________!</em>', 'gleichfalls|ebenfalls') +
              '</ol></div>'
          },
          {
            icon: '🙏', title: 'Please, thank you, sorry',
            explanation:
              '<p><strong>bitte</strong> is the hardest-working word in German. It has four separate jobs: <em>please</em> when you ask for something, ' +
              '<em>here you are</em> when you hand something over, <em>you are welcome</em> when someone thanks you, and <em>pardon?</em> when you did not catch something ' +
              '(said with a rising tone: <strong>Wie bitte?</strong>).</p>' +
              '<p>For thanks, the ladder runs <strong>Danke</strong> → <strong>Danke schön</strong> → <strong>Vielen Dank</strong> → <strong>Herzlichen Dank</strong>. ' +
              'One warning: a bare <strong>Danke</strong> in answer to an offer is usually read as <em>no thank you</em>. If you want the cake, say <strong>Ja, bitte</strong>; ' +
              'if you do not, say <strong>Nein, danke</strong>.</p>' +
              '<p>Apologies split in two. <strong>Entschuldigung</strong> is the small, practical one: getting attention, squeezing past, a minor bump. ' +
              '<strong>Es tut mir leid</strong> is real regret — for a mistake that mattered, or sympathy for bad news. Saying <em>Es tut mir leid</em> to a waiter you want to call over ' +
              'sounds oddly dramatic; <em>Entschuldigung</em> is what you want.</p>',
            vocab: vocabTable([
              ['bitte', 'please / here you are / you are welcome', 'four jobs in one word'],
              ['Wie bitte?', 'Pardon? / Sorry, what?', 'you did not hear'],
              ['Danke', 'Thanks', 'neutral'],
              ['Danke schön', 'Thank you', 'warmer'],
              ['Vielen Dank', 'Many thanks', 'stronger'],
              ['Gern geschehen', 'You are welcome', 'answer to thanks'],
              ['Kein Problem', 'No problem', 'informal'],
              ['Entschuldigung', 'Excuse me / Sorry', 'attention or small apology'],
              ['Entschuldigen Sie bitte', 'Excuse me, please', 'formal, to a stranger'],
              ['Es tut mir leid', 'I am sorry', 'genuine regret'],
              ['Verzeihung', 'Pardon / I beg your pardon', 'formal, slightly old-fashioned'],
              ['Ja, bitte', 'Yes, please', 'accepting an offer'],
              ['Nein, danke', 'No, thank you', 'refusing an offer']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '🕐 When']),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Es tut mir leid</strong> is built like "it does me sorrow": <em>es</em> (it) + <em>tut</em> (does) + <em>mir</em> (to me) + <em>leid</em>. ' +
              'The person who is sorry appears as <strong>mir</strong>, not as <em>ich</em>. Swap that one word and you can say it about someone else:</p>' +
              '<ul class="goals">' +
              '<li>Es tut <strong>mir</strong> leid. — I am sorry.</li>' +
              '<li>Es tut <strong>ihm</strong> leid. — He is sorry.</li>' +
              '<li>Es tut <strong>uns</strong> leid. — We are sorry.</li>' +
              '</ul>' +
              '<p class="note">This is your first sight of the dative case. Learn the phrase whole for now; Unit 2 of A2 takes it apart properly.</p>' +
              '<div class="example-box">Entschuldigung, wo ist der Bahnhof? — Excuse me, where is the station?<br>Vielen Dank für Ihre Hilfe! — Many thanks for your help!<br>Das tut mir wirklich leid. — I am really sorry about that.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — in a crowded train', [
              ['A', 'Entschuldigung, ist der Platz frei?'],
              ['B', 'Ja, bitte.'],
              ['A', 'Danke schön.'],
              ['B', 'Gern geschehen.']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('You want to get a waiter to come over: <em>___________</em>', 'Entschuldigung|Entschuldigung!|Entschuldigen Sie bitte') +
              exInput('You step on someone and really want to apologise: <span class="de">Es tut ___ leid.</span>', 'mir') +
              exInput('Someone thanks you. Answer with two words: <em>___________</em>', 'Gern geschehen|Bitte schön|Kein Problem') +
              exSelect('You did not hear what someone said:', 'Wie bitte?', ['Wie bitte?', 'Bitte schön', 'Vielen Dank']) +
              exSelect('You are offered cake and you want some:', 'Ja, bitte', ['Ja, bitte', 'Danke', 'Nein, danke']) +
              exInput('What does <span class="de">Vielen Dank</span> mean?', 'many thanks|thank you very much|thanks a lot') +
              exInput('Hand someone a pen: <em>___________</em>', 'bitte|Bitte|Bitte schön') +
              '</ol></div>'
          },
          {
            icon: '🤝', title: 'Du or Sie — which one?',
            explanation:
              '<p>German forces a choice in every sentence you say to someone: the familiar <strong>du</strong> or the formal <strong>Sie</strong>. ' +
              'This is not optional politeness — it is grammar, and getting it wrong is a real social misstep.</p>' +
              '<p>Use <strong>Sie</strong> with: strangers, anyone in a shop, office or authority, older people, and new colleagues in most companies. ' +
              'Use <strong>du</strong> with: family, friends, children and teenagers, fellow students, people in sports clubs, most startups, and almost everywhere online.</p>' +
              '<p>You do not switch on your own. The older person, or the one higher in the hierarchy, offers it: <strong>Wollen wir uns duzen?</strong> or simply ' +
              '<strong>Ich bin der Thomas.</strong> Once offered, it is permanent — going back to Sie afterwards is a visible cooling-off. ' +
              'If you are unsure, start with <strong>Sie</strong>: it is never offensive, while an unwanted <em>du</em> can be.</p>',
            vocab: vocabTable([
              ['du', 'you', 'one person, familiar'],
              ['Sie', 'you', 'formal — always capital S'],
              ['ihr', 'you', 'several people, familiar'],
              ['duzen', 'to say du to someone', ''],
              ['siezen', 'to say Sie to someone', ''],
              ['Wollen wir uns duzen?', 'Shall we say du to each other?', 'offering the switch'],
              ['Sagen wir doch du.', 'Let us just say du.', 'offering the switch'],
              ['Wie heißt du?', 'What is your name?', 'informal'],
              ['Wie heißen Sie?', 'What is your name?', 'formal'],
              ['Wie geht es dir?', 'How are you?', 'informal'],
              ['Wie geht es Ihnen?', 'How are you?', 'formal']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '🕐 When']),
            grammar:
              '<div class="grammar-point">' +
              '<p>The pronoun changes the verb ending with it. <strong>Sie</strong> always takes the same form as the plural, which is why it looks like the infinitive:</p>' +
              formTable('', ['', 'du (informal)', 'Sie (formal)'], [
                ['heißen — to be called', 'du heiß<strong>t</strong>', 'Sie heiß<strong>en</strong>'],
                ['kommen — to come', 'du komm<strong>st</strong>', 'Sie komm<strong>en</strong>'],
                ['wohnen — to live', 'du wohn<strong>st</strong>', 'Sie wohn<strong>en</strong>'],
                ['sein — to be', 'du <strong>bist</strong>', 'Sie <strong>sind</strong>'],
                ['haben — to have', 'du <strong>hast</strong>', 'Sie <strong>haben</strong>']
              ]) +
              '<p class="note">Written <strong>Sie</strong> for the formal "you" always has a capital S, in the middle of a sentence too. ' +
              'A lower-case <em>sie</em> means "she" or "they" — the capital letter is the only thing telling them apart.</p>' +
              '<div class="example-box">Wie heißen Sie? — Woher kommen Sie?<br>Wie heißt du? — Woher kommst du?</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — a colleague offers the switch', [
              ['Frau Weber', 'Wir arbeiten jetzt schon drei Monate zusammen. Wollen wir uns duzen?'],
              ['Herr Klein', 'Gern! Ich bin der Thomas.'],
              ['Frau Weber', 'Und ich bin die Sabine. Freut mich!'],
              ['Herr Klein', 'Freut mich auch, Sabine.']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('Ask a stranger their name: <span class="de">Wie ___________ Sie?</span>', 'heißen|heissen') +
              exInput('Ask a child their name: <span class="de">Wie ___________ du?</span>', 'heißt|heisst') +
              exInput('Formal: <span class="de">Woher ___________ Sie?</span> (kommen)', 'kommen') +
              exInput('Informal: <span class="de">Woher ___________ du?</span> (kommen)', 'kommst') +
              exSelect('You are buying bread in a bakery. You use:', 'Sie', ['du', 'Sie', 'ihr']) +
              exSelect('You are talking to your sister. You use:', 'du', ['du', 'Sie', 'ihr']) +
              exInput('A new colleague says <span class="de">Wollen wir uns duzen?</span> — what are they offering?', 'to say du|to use du|the informal form|first names') +
              '</ol></div>'
          },
          {
            icon: '❓', title: 'Asking for help in class',
            explanation:
              '<p>These are the sentences that keep a conversation alive when you lose the thread — and they are worth memorising before any vocabulary at all, ' +
              'because they let you stay in German instead of switching to English.</p>' +
              '<p><strong>Wie bitte?</strong> is the polite "sorry, what?". A bare <strong>Was?</strong> is blunt to the point of rudeness with strangers — avoid it. ' +
              'If the problem is speed rather than volume, say <strong>Langsamer, bitte</strong> or <strong>Können Sie bitte langsamer sprechen?</strong></p>' +
              '<p>Two useful distinctions: <strong>Ich verstehe nicht</strong> means "I do not understand" right now, while <strong>Ich weiß nicht</strong> means ' +
              '"I do not know" the answer — different problems, different sentence. And <strong>Wie sagt man … auf Deutsch?</strong> gets you a word you are missing, ' +
              'while <strong>Was bedeutet …?</strong> gets you the meaning of a word you just heard.</p>',
            vocab: vocabTable([
              ['Wie bitte?', 'Pardon?', 'you did not catch it'],
              ['Noch einmal, bitte.', 'Once more, please.', ''],
              ['Können Sie das bitte wiederholen?', 'Could you repeat that, please?', 'formal'],
              ['Langsamer, bitte.', 'Slower, please.', ''],
              ['Ich verstehe nicht.', 'I do not understand.', ''],
              ['Ich verstehe das nicht.', 'I do not understand that.', ''],
              ['Ich weiß nicht.', 'I do not know.', ''],
              ['Ich habe eine Frage.', 'I have a question.', ''],
              ['Wie sagt man das auf Deutsch?', 'How do you say that in German?', 'you need a word'],
              ['Was bedeutet das?', 'What does that mean?', 'you heard a word'],
              ['Wie schreibt man das?', 'How do you spell that?', ''],
              ['Können Sie das bitte buchstabieren?', 'Could you spell that, please?', ''],
              ['Entschuldigung, ich spreche nur wenig Deutsch.', 'Sorry, I only speak a little German.', '']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '🕐 When']),
            grammar:
              '<div class="grammar-point">' +
              '<p>Look at where the verbs sit in <em>Können Sie das bitte wiederholen?</em> The conjugated verb <strong>Können</strong> is first ' +
              '(because it is a question), and the second verb <strong>wiederholen</strong> is pushed right to the end. Everything else is squeezed between them.</p>' +
              '<ul class="goals">' +
              '<li><strong>Können</strong> Sie das bitte <strong>wiederholen</strong>?</li>' +
              '<li><strong>Können</strong> Sie bitte langsamer <strong>sprechen</strong>?</li>' +
              '<li><strong>Können</strong> Sie das bitte <strong>buchstabieren</strong>?</li>' +
              '</ul>' +
              '<p class="note">This frame is called the <em>Satzklammer</em> — the sentence bracket — and it is the single most important shape in German word order. ' +
              'You will meet it properly in Unit 10 with the modal verbs.</p>' +
              '<p>Also note the question pattern: a W-word first (<strong>Wie</strong>, <strong>Was</strong>), then the verb, then the rest — ' +
              '<em>Wie sagt man das?</em> · <em>Was bedeutet das?</em></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — in class', [
              ['Lehrerin', 'Die Hausaufgabe ist auf Seite siebenundvierzig.'],
              ['Sıla', 'Entschuldigung, wie bitte?'],
              ['Lehrerin', 'Seite 47.'],
              ['Sıla', 'Können Sie das bitte wiederholen? Langsamer, bitte.'],
              ['Lehrerin', 'Natürlich. Sie-ben-und-vier-zig.'],
              ['Sıla', 'Danke schön!']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('You did not hear what the teacher said: <em>___________</em>', 'Wie bitte?|Wie bitte') +
              exInput('Ask politely for it again: <span class="de">Noch ___________, bitte.</span>', 'einmal') +
              exInput('The speaker is too fast: <span class="de">___________, bitte.</span>', 'Langsamer') +
              exSelect('You need a German word you do not know:', 'Wie sagt man das auf Deutsch?', ['Wie sagt man das auf Deutsch?', 'Was bedeutet das?', 'Ich weiß nicht.']) +
              exSelect('Someone asks you a question and you have no idea:', 'Ich weiß nicht.', ['Ich verstehe nicht.', 'Ich weiß nicht.', 'Wie bitte?']) +
              exInput('Put the words in order: <em>wiederholen / Sie / das / Können / bitte</em>', 'Können Sie das bitte wiederholen|Können Sie das bitte wiederholen?') +
              exInput('What does <span class="de">Was bedeutet das?</span> mean?', 'what does that mean') +
              '</ol></div>'
          }
        ],
        drillIntro: '<p>Mixed practice over the whole unit: greetings, goodbyes, politeness, du and Sie, and classroom phrases together.</p>',
        exercises: exerciseList([
          exSelect('It is 7:30 in the morning and you walk into the office:', 'Guten Morgen', ['Guten Morgen', 'Guten Abend', 'Gute Nacht']),
          exSelect('Which one do you say only when going to bed?', 'Gute Nacht', ['Guten Tag', 'Gute Nacht', 'Guten Abend']),
          exInput('You end a phone call with your doctor: Auf ___________', 'Wiederhören'),
          exSelect('Someone says <span class="de">Danke schön</span>. You answer:', 'Gern geschehen', ['Gern geschehen', 'Es tut mir leid', 'Gute Nacht']),
          exSelect('You want to get the waiter\'s attention:', 'Entschuldigung', ['Entschuldigung', 'Es tut mir leid', 'Auf Wiedersehen']),
          exInput('Complete: Es tut ___________ leid.', 'mir'),
          exInput('Ask a child: Wie ___________ du? (heißen)', 'heißt'),
          exInput('Ask a stranger: Woher ___________ Sie? (kommen)', 'kommen'),
          exSelect('You are talking to your teacher at the language school. You use:', 'Sie', ['du', 'Sie', 'ihr']),
          exInput('You did not hear it. Say politely: <em>Wie ___________?</em>', 'bitte'),
          exInput('Complete: Noch ___________, bitte.', 'einmal'),
          exSelect('You do not know the German word:', 'Wie sagt man das auf Deutsch?', ['Wie sagt man das auf Deutsch?', 'Was bedeutet das?', 'Ich weiß nicht.']),
          exTF('<span class="de">Tschüss</span> is the formal way to say goodbye.', false)
        ]),

        reading: {
          intro: 'A short postcard. Read it two or three times — you do not need every word. The glossary helps with the new ones.',
          words: 60, minutes: 5,
          text: readingText('Eine Karte aus München', [
            'Liebe Anna,',
            'viele Grüße aus München! Ich bin im Café Sonne. Die Kellnerin sagt: „Guten Tag!“ Ich sage: „Guten Tag! Einen Kaffee, bitte.“ Sie sagt: „Hier, bitte.“ Ich sage: „Danke schön!“ Sie sagt: „Gern geschehen.“',
            'Das Café ist sehr schön. Morgen bin ich wieder zu Hause. Bis bald!',
            'Tschüss, deine Lena'
          ], 'Postkarte, fiktiv'),
          glossary: vocabTable([
            ['viele Grüße', 'best wishes (in a card)'],
            ['die Kellnerin', 'the waitress'],
            ['der Kaffee', 'the coffee'],
            ['schön', 'nice, beautiful'],
            ['zu Hause', 'at home'],
            ['deine Lena', 'yours, Lena']
          ]),
          questions: exerciseList([
            exSelect('Wo ist Lena?', 'In einem Café in München', ['Zu Hause in Köln', 'In einem Café in München', 'Im Hotel in Berlin']),
            exTF('Lena sagt „Guten Abend“.', false),
            exSelect('Was bestellt Lena?', 'einen Kaffee', ['einen Tee', 'einen Kaffee', 'ein Wasser']),
            exInput('Was sagt die Kellnerin nach „Danke schön“? (zwei Wörter)', 'gern geschehen'),
            exTF('Lena ist morgen noch im Café.', false)
          ])
        },

        listening: {
          title: 'In der Bäckerei',
          intro: 'A short exchange in a bakery. At A1 you may listen more than once — try the slower button too.',
          lines: [
            ['Verkäuferin', 'Guten Morgen!'],
            ['Kunde', 'Guten Morgen! Ein Brötchen, bitte.'],
            ['Verkäuferin', 'Hier, bitte. Das macht eins fünfzig.'],
            ['Kunde', 'Entschuldigung, wie bitte?'],
            ['Verkäuferin', 'Eins fünfzig. Ein Euro fünfzig.'],
            ['Kunde', 'Danke schön. Hier, bitte.'],
            ['Verkäuferin', 'Danke. Schönen Tag noch!'],
            ['Kunde', 'Danke, gleichfalls. Auf Wiedersehen!']
          ],
          questions: exerciseList([
            exSelect('Welche Tageszeit ist es?', 'Morgen', ['Morgen', 'Abend', 'Nacht']),
            exInput('Was kauft der Kunde? (ein Wort)', 'Brötchen|ein Brötchen'),
            exSelect('Warum fragt der Kunde „Wie bitte?“', 'Er hat den Preis nicht verstanden.', ['Er hat den Preis nicht verstanden.', 'Er möchte noch ein Brötchen.', 'Er kennt die Verkäuferin nicht.']),
            exInput('Wie viel kostet es? (in Zahlen)', '1,50|1,50 euro|1,50 €|eins fünfzig|ein euro fünfzig|1.50'),
            exSelect('Was sagt der Kunde zum Schluss?', 'Auf Wiedersehen', ['Auf Wiedersehen', 'Gute Nacht', 'Auf Wiederhören'])
          ])
        },

        writing: {
          title: 'Eine kurze Nachricht an die Nachbarin',
          textType: 'Kurze Nachricht (Sie-Form)',
          minWords: 25, maxWords: 50, minutes: 15,
          expect: ['greeting', 'self-intro', 'thanks', 'farewell'],
          task: '<p>Sie sind neu im Haus. Ihre Nachbarin, Frau Weber, hat Ihnen einen Kuchen gebracht.</p>' +
            '<p>Schreiben Sie ihr eine kurze Nachricht.</p>' +
            '<p class="note">You are new in the building and your neighbour Frau Weber has brought you a cake. Write her a short note.</p>',
          plainTask: 'Write a short note in German (25-50 words) to a neighbour, Frau Weber, who has brought a cake to a new resident. The note must: greet her with a time-of-day greeting; introduce the writer by name; thank her for the cake; say goodbye. Register: formal Sie-form, simple present-tense sentences. This is a beginner (A1) text.',
          bullets: [
            'Sagen Sie „Guten Tag“ und nennen Sie <strong>Frau Weber</strong>.',
            'Stellen Sie sich vor: Wie <strong>heißen</strong> Sie?',
            '<strong>Bedanken</strong> Sie sich für den Kuchen.',
            '<strong>Verabschieden</strong> Sie sich.',
            'Benutzen Sie die <strong>Sie</strong>-Form.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Grüßen', 'Guten Tag, Frau Weber! · Guten Morgen, Frau Weber!'],
            ['Sich vorstellen', 'Ich heiße … · Mein Name ist …'],
            ['Danken', 'Vielen Dank für den Kuchen! · Danke schön!'],
            ['Verabschieden', 'Auf Wiedersehen! · Bis bald! · Schönen Tag noch!']
          ]),
          criteria: [
            'Ich beginne mit einem Gruß: „Guten Tag, Frau Weber!“',
            'Ich nenne meinen Namen.',
            'Ich bedanke mich für den Kuchen.',
            'Ich verabschiede mich am Ende.',
            'Ich benutze „Sie“ (mit großem S), nicht „du“.',
            'Alle Nomen sind großgeschrieben (Kuchen, Haus, Name).',
            'Ich liege zwischen 25 und 50 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Greeting is not optional.</strong> Walking into a small shop, a bakery, a doctor\'s waiting room or a lift without saying ' +
          '<span class="de">Guten Tag</span> reads as rude in Germany, not as discreet. In a waiting room people greet the whole room on entering and say ' +
          '<span class="de">Auf Wiedersehen</span> on leaving — to strangers they will never meet again.</p>' +
          '<p><strong>The handshake.</strong> Firm, brief, with eye contact, and one hand only. It is standard when meeting someone for the first time in a professional context. ' +
          'Among friends it has largely given way to a hug or nothing at all.</p>' +
          '<p><strong>Regional greetings.</strong> <span class="de">Moin</span> in Hamburg and the north is used all day long, not only in the morning. ' +
          '<span class="de">Grüß Gott</span> dominates Bavaria and Austria — the religious origin is no longer felt. ' +
          '<span class="de">Servus</span> does double duty as hello and goodbye in the south. In Switzerland you will hear <span class="de">Grüezi</span>.</p>' +
          '<p><strong>Mahlzeit!</strong> In many German offices and canteens, people greet each other with this around lunchtime. It literally means "mealtime" and functions as ' +
          '"hello" between about 11:30 and 14:00. It sounds strange, everyone agrees, and everyone says it anyway.</p>' +
          '<p><strong>Titles.</strong> <span class="de">Herr</span> and <span class="de">Frau</span> + surname is the norm with Sie. ' +
          '<span class="de">Fräulein</span> for an unmarried woman is long obsolete — never use it. In Austria, academic titles ' +
          '(<span class="de">Herr Doktor</span>, <span class="de">Frau Magister</span>) are still used far more than in Germany.</p>',
        recap: [
          { group: '🌅 Begrüßung — greetings', rows: [
            ['Guten Morgen', 'Good morning'],
            ['Guten Tag', 'Hello / Good day'],
            ['Guten Abend', 'Good evening'],
            ['Gute Nacht', 'Good night (going to bed)'],
            ['Hallo', 'Hello'],
            ['Moin', 'Hi (northern Germany)'],
            ['Grüß Gott', 'Hello (Bavaria, Austria)'],
            ['Servus', 'Hi / Bye (Bavaria, Austria)'],
            ['Herzlich willkommen', 'Welcome']
          ] },
          { group: '👋 Verabschiedung — goodbyes', rows: [
            ['Auf Wiedersehen', 'Goodbye (face to face)'],
            ['Auf Wiederhören', 'Goodbye (on the phone)'],
            ['Tschüss', 'Bye'],
            ['Bis morgen', 'See you tomorrow'],
            ['Bis später', 'See you later'],
            ['Bis bald', 'See you soon'],
            ['Bis dann', 'See you then'],
            ['Schönen Tag noch', 'Have a nice day'],
            ['Schönes Wochenende', 'Have a nice weekend'],
            ['Mach es gut', 'Take care']
          ] },
          { group: '🙏 Höflichkeit — politeness', rows: [
            ['bitte', 'please / here you are / you are welcome'],
            ['Wie bitte?', 'Pardon?'],
            ['Danke', 'Thanks'],
            ['Danke schön', 'Thank you'],
            ['Vielen Dank', 'Many thanks'],
            ['Gern geschehen', 'You are welcome'],
            ['Kein Problem', 'No problem'],
            ['Entschuldigung', 'Excuse me / Sorry'],
            ['Es tut mir leid', 'I am sorry'],
            ['Verzeihung', 'I beg your pardon'],
            ['Ja, bitte', 'Yes, please'],
            ['Nein, danke', 'No, thank you'],
            ['gleichfalls', 'likewise / you too']
          ] },
          { group: '🤝 Du oder Sie', rows: [
            ['du', 'you (familiar, one person)'],
            ['Sie', 'you (formal)'],
            ['ihr', 'you (familiar, several people)'],
            ['duzen', 'to say du to someone'],
            ['siezen', 'to say Sie to someone'],
            ['Wie heißen Sie?', 'What is your name? (formal)'],
            ['Wie heißt du?', 'What is your name? (informal)'],
            ['Wie geht es Ihnen?', 'How are you? (formal)'],
            ['Wie geht es dir?', 'How are you? (informal)'],
            ['Freut mich', 'Pleased to meet you']
          ] },
          { group: '❓ Im Unterricht — in class', rows: [
            ['Noch einmal, bitte.', 'Once more, please.'],
            ['Langsamer, bitte.', 'Slower, please.'],
            ['Ich verstehe nicht.', 'I do not understand.'],
            ['Ich weiß nicht.', 'I do not know.'],
            ['Ich habe eine Frage.', 'I have a question.'],
            ['Wie sagt man das auf Deutsch?', 'How do you say that in German?'],
            ['Was bedeutet das?', 'What does that mean?'],
            ['Wie schreibt man das?', 'How do you spell that?'],
            ['Können Sie das bitte wiederholen?', 'Could you repeat that, please?'],
            ['Können Sie das bitte buchstabieren?', 'Could you spell that, please?']
          ] },
          { group: '🧑 Anrede — addressing people', rows: [
            ['der Herr', 'Mr / gentleman'],
            ['die Frau', 'Mrs / woman'],
            ['der Mann', 'man'],
            ['das Kind', 'child'],
            ['der Morgen', 'morning'],
            ['der Tag', 'day'],
            ['der Abend', 'evening'],
            ['die Nacht', 'night'],
            ['das Wochenende', 'weekend'],
            ['die Frage', 'question']
          ] }
        ],
        sentences: [
          { de: 'Wie heißen Sie?', en: 'What is your name? (formal)' },
          { de: 'Wie sagt man das auf Deutsch?', en: 'How do you say that in German?' },
          { de: 'Können Sie das bitte wiederholen?', en: 'Could you repeat that, please?' },
          { de: 'Es tut mir leid', en: 'I am sorry' },
          { de: 'Wie schreibt man das?', en: 'How do you spell that?' },
          { de: 'Ich habe eine Frage', en: 'I have a question' }
        ]
      },

      { // ===== UNIT 2 — written out in full =====
        title: '🔤 Unit 2 — Alphabet, Sounds and Spelling',
        subject: 'Alphabet und Aussprache',
        canDo: ['Spell your name, address and e-mail out loud on the phone', 'Read an unfamiliar German word aloud with the right sounds and stress'],
        grammarFocus: ['Letter names and the spelling alphabet', 'ß after long vowels, ss after short ones', 'Capitalisation of all nouns'],
        topics: [
          {
            icon: '🅰️', title: 'The German alphabet',
            explanation:
              '<p>German uses the same 26 letters as English plus <strong>ä ö ü</strong> and <strong>ß</strong>. The letters look familiar — their <em>names</em> do not, ' +
              'and that is what trips people up the moment someone asks them to spell a surname on the phone.</p>' +
              '<p>The dangerous ones are the letters that exist in English with a completely different name: <strong>e</strong> is "eh" while <strong>i</strong> is "ee", ' +
              '<strong>j</strong> is "jott", <strong>v</strong> is "fau", <strong>w</strong> is "weh" and <strong>z</strong> is "tsett". ' +
              'Say an English "i" and a German hears <strong>ai</strong>; say an English "e" and they hear <strong>i</strong>. Half of all spelling mix-ups come from these five letters.</p>' +
              '<p>Doubled letters are read as <strong>Doppel-</strong>: Müller is "M, U-Umlaut, Doppel-L, E, R". And when the line is bad, Germans fall back on the ' +
              'spelling alphabet — <strong>A wie Anton, B wie Berta, C wie Cäsar</strong> — exactly like "A for Alpha" in English.</p>',
            vocab: formTable('', ['Letter', 'Name', 'Letter', 'Name'], [
              ['a', 'ah', 'n', 'enn'],
              ['b', 'beh', 'o', 'oh'],
              ['c', 'tseh', 'p', 'peh'],
              ['d', 'deh', 'q', 'kuh'],
              ['e', '<strong>eh</strong>', 'r', 'err'],
              ['f', 'eff', 's', 'ess'],
              ['g', 'geh', 't', 'teh'],
              ['h', 'hah', 'u', 'uh'],
              ['i', '<strong>ih</strong> (like English "ee")', 'v', '<strong>fau</strong>'],
              ['j', '<strong>jott</strong>', 'w', '<strong>weh</strong>'],
              ['k', 'kah', 'x', 'iks'],
              ['l', 'ell', 'y', 'üpsilon'],
              ['m', 'emm', 'z', '<strong>tsett</strong>']
            ]) +
            vocabTable([
              ['das Alphabet', 'the alphabet'],
              ['der Buchstabe', 'the letter (of the alphabet)'],
              ['buchstabieren', 'to spell'],
              ['Doppel-L', 'double L'],
              ['groß geschrieben', 'written with a capital'],
              ['klein geschrieben', 'written in lower case'],
              ['der Bindestrich', 'the hyphen'],
              ['das Leerzeichen', 'the space'],
              ['der Punkt', 'the dot (in an e-mail address)'],
              ['das At-Zeichen', 'the at sign']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>Three sentences do all the work when you spell something out loud:</p>' +
              '<ul class="goals">' +
              '<li><strong>Wie schreibt man das?</strong> — How do you spell that?</li>' +
              '<li><strong>Können Sie das bitte buchstabieren?</strong> — Could you spell that, please?</li>' +
              '<li><strong>Mit Doppel-M.</strong> — With a double M.</li>' +
              '</ul>' +
              '<p class="note">For an e-mail address: <strong>at</strong> is <em>At-Zeichen</em> (or just "ät"), a full stop is <em>Punkt</em>, ' +
              'and a hyphen is <em>Bindestrich</em>. So sila.k@mail.de is "S-I-L-A Punkt K At-Zeichen mail Punkt D-E".</p>' +
              '<div class="example-box">Wie heißen Sie? — Ich heiße Özdemir.<br>Wie schreibt man das? — O-Umlaut, Z, D, E, M, I, R.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — booking an appointment by phone', [
              ['Praxis', 'Praxis Dr. Weber, guten Tag.'],
              ['Sıla', 'Guten Tag, ich möchte einen Termin. Mein Name ist Öztürk.'],
              ['Praxis', 'Wie schreibt man das, bitte?'],
              ['Sıla', 'O-Umlaut, Z, T, U-Umlaut, R, K.'],
              ['Praxis', 'Danke. Und Ihre Telefonnummer?']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exSelect('The letter <span class="de">w</span> is called:', 'weh', ['weh', 'doppel-weh', 'wai']) +
              exSelect('The letter <span class="de">v</span> is called:', 'fau', ['weh', 'fau', 'feh']) +
              exSelect('The letter <span class="de">z</span> is called:', 'tsett', ['sett', 'tsett', 'tsed']) +
              exSelect('The letter <span class="de">j</span> is called:', 'jott', ['dschei', 'jott', 'jeh']) +
              exInput('How do you say "to spell" in German?', 'buchstabieren') +
              exInput('<span class="de">Müller</span> has two L. You say: <em>Mit ___________-L.</em>', 'Doppel') +
              exInput('Ask someone to spell their name, formally: <span class="de">Können Sie das bitte ___________?</span>', 'buchstabieren') +
              '</ol></div>'
          },
          {
            icon: '🎵', title: 'Umlauts ä ö ü and ß',
            explanation:
              '<p>The two dots are not decoration — they change the word. <span class="de">Mutter</span> is one mother, <span class="de">Mütter</span> is several; ' +
              '<span class="de">schon</span> means "already", <span class="de">schön</span> means "beautiful". Dropping the dots does not make you sound foreign, it makes you say a different word.</p>' +
              '<p>How to produce them: <strong>ä</strong> is the "e" of English <em>bed</em>. For <strong>ö</strong>, say "eh" and round your lips without moving your tongue. ' +
              'For <strong>ü</strong>, say "ee" and round your lips the same way. The tongue stays where it was — only the lips move. That one trick gives you both.</p>' +
              '<p>On a keyboard without them, write <strong>ae oe ue</strong> and <strong>ss</strong>. Germans read that without blinking, and this course accepts it in every exercise. ' +
              'The letter <strong>ß</strong> (called <em>Eszett</em> or <em>scharfes S</em>) is never at the start of a word, and Switzerland has abolished it entirely — ' +
              'Swiss texts write <span class="de">Strasse</span>.</p>',
            vocab: vocabTable([
              ['die Mutter', 'the mother', 'die Mütter — the mothers'],
              ['der Bruder', 'the brother', 'die Brüder — the brothers'],
              ['schon', 'already', 'schön — beautiful'],
              ['zahlen', 'to pay', 'zählen — to count'],
              ['die Straße', 'the street', 'long vowel, so ß'],
              ['der Fluss', 'the river', 'short vowel, so ss'],
              ['heiß', 'hot', 'diphthong, so ß'],
              ['der Kuss', 'the kiss', 'short vowel, so ss'],
              ['groß', 'big', 'long vowel, so ß'],
              ['das Eszett', 'the letter ß', 'also scharfes S'],
              ['der Umlaut', 'the umlaut', '']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '📝 Note']),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>ß or ss?</strong> Listen to the vowel in front of it. There is one rule and it is reliable:</p>' +
              '<ul class="goals">' +
              '<li><strong>ß</strong> after a <strong>long</strong> vowel or a diphthong: Stra<strong>ß</strong>e, gro<strong>ß</strong>, hei<strong>ß</strong>, drau<strong>ß</strong>en, Fu<strong>ß</strong></li>' +
              '<li><strong>ss</strong> after a <strong>short</strong> vowel: Flu<strong>ss</strong>, Ku<strong>ss</strong>, mu<strong>ss</strong>, wi<strong>ss</strong>en, bi<strong>ss</strong>chen</li>' +
              '</ul>' +
              '<p>And the typing substitutes, in case you are on a foreign keyboard:</p>' +
              formTable('', ['Letter', 'Type instead', 'Example'], [
                ['ä', 'ae', 'Mädchen → Maedchen'],
                ['ö', 'oe', 'schön → schoen'],
                ['ü', 'ue', 'Tür → Tuer'],
                ['ß', 'ss', 'Straße → Strasse']
              ]) +
              '<p class="note">Never write a plain <em>u</em> for <em>ü</em> or a plain <em>a</em> for <em>ä</em> — that is a different word. The two-letter substitute is the correct fallback.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the Bürgeramt counter', [
              ['Beamter', 'Ihr Nachname, bitte?'],
              ['Sıla', 'Özdemir — mit Umlaut.'],
              ['Beamter', 'O-Umlaut, Z, D, E, M, I, R. Und die Straße?'],
              ['Sıla', 'Kastanienallee 12. Allee mit Doppel-L und Doppel-E.'],
              ['Beamter', 'Danke schön.']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exInput('What does <span class="de">schön</span> mean?', 'beautiful|nice|lovely') +
              exInput('What does <span class="de">schon</span> mean?', 'already') +
              exSelect('<span class="de">Stra__e</span> — long vowel, so you write:', 'Eszett ß', ['Eszett ß', 'Doppel-S ss']) +
              exSelect('<span class="de">Flu__</span> — short vowel, so you write:', 'Doppel-S ss', ['Eszett ß', 'Doppel-S ss']) +
              exSelect('<span class="de">hei__</span> — diphthong, so you write:', 'Eszett ß', ['Eszett ß', 'Doppel-S ss']) +
              exInput('Write <span class="de">Tür</span> without an umlaut key:', 'Tuer') +
              exInput('One mother is <span class="de">die Mutter</span>. Several are: <em>die ___________</em>', 'Mütter|Muetter') +
              exInput('What is the letter <span class="de">ß</span> called?', 'Eszett|scharfes S') +
              '</ol></div>'
          },
          {
            icon: '🗣️', title: 'Tricky sounds',
            explanation:
              '<p>A handful of spellings do not say what an English reader expects. Learn these nine and you can read almost any German word aloud correctly, ' +
              'even one you have never seen.</p>' +
              '<p>The biggest one is <strong>ei</strong> versus <strong>ie</strong>. The rule is simple: <em>the second letter says its English name</em>. ' +
              'So <span class="de">ei</span> sounds like English "eye" (<span class="de">Wein</span> = vine) and <span class="de">ie</span> sounds like English "ee" ' +
              '(<span class="de">Wien</span> = veen). Wein and Wien are wine and Vienna — a mistake you can hear from across the room.</p>' +
              '<p>Then there is <strong>ch</strong>, which has two sounds: a soft one after e, i, ä, ö, ü, ei and eu (<span class="de">ich</span>, <span class="de">Milch</span>), ' +
              'and a harsh throat one after a, o, u and au (<span class="de">Bach</span>, <span class="de">Buch</span>). Nobody expects a beginner to get the soft one perfect — ' +
              'but putting the harsh sound in <span class="de">ich</span> is what makes a strong foreign accent.</p>',
            vocab: formTable('', ['Spelling', 'Sounds like', 'Example'], [
              ['<strong>ei</strong>', 'English "eye"', 'Wein, nein, heißen, klein'],
              ['<strong>ie</strong>', 'English "ee"', 'Wien, vier, Liebe, sieben'],
              ['<strong>eu / äu</strong>', 'English "oy"', 'heute, Leute, Häuser'],
              ['<strong>ch</strong> (soft)', 'hissing, after e i ä ö ü ei eu', 'ich, nicht, Milch, Mädchen'],
              ['<strong>ch</strong> (hard)', 'in the throat, after a o u au', 'Bach, Koch, Buch, auch'],
              ['<strong>chs</strong>', 'ks', 'sechs, Fuchs, wachsen'],
              ['<strong>sch</strong>', 'English "sh"', 'Schule, schön, Tisch'],
              ['<strong>sp-, st-</strong> at the start', 'shp-, sht-', 'Sport, Straße, Stadt, sprechen'],
              ['<strong>z</strong>', 'ts', 'Zeit, zehn, Zimmer, tanzen'],
              ['<strong>v</strong>', 'f (German words)', 'Vater, viel, von, vier'],
              ['<strong>v</strong>', 'v (foreign words)', 'Vase, Klavier, Universität'],
              ['<strong>w</strong>', 'English "v"', 'Wasser, wohnen, wir'],
              ['<strong>s</strong> before a vowel', 'English "z"', 'Sonne, sagen, sieben'],
              ['final <strong>-er</strong>', 'a short "a"', 'Vater, Mutter, besser, Lehrer'],
              ['<strong>-ig</strong> at the end', 'ich', 'richtig, wichtig, zwanzig']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>Two of these change meaning, so they are worth drilling until they are automatic:</p>' +
              '<div class="example-box">' +
              '<strong>ei</strong> — W<strong>ei</strong>n (wine) · h<strong>ei</strong>ßen (to be called) · n<strong>ei</strong>n (no) · dr<strong>ei</strong> (three)<br>' +
              '<strong>ie</strong> — W<strong>ie</strong>n (Vienna) · v<strong>ie</strong>r (four) · L<strong>ie</strong>be (love) · s<strong>ie</strong>ben (seven)' +
              '</div>' +
              '<p>And the one that makes the biggest difference to how German you sound: the <strong>final -er</strong>. ' +
              'It is not an English "er" — it is a short, relaxed "a". <span class="de">Vater</span> comes out as "Fah-ta", ' +
              '<span class="de">Mutter</span> as "Moo-ta", <span class="de">Lehrer</span> as "Lay-ra".</p>' +
              '<p class="note">The German <strong>r</strong> itself is made at the back of the throat, close to a French r — but only at the start of a syllable ' +
              '(<em>rot</em>, <em>Frau</em>). At the end it melts into that "a" sound instead.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — the classic mix-up', [
              ['A', 'Ich fahre nächste Woche nach Wien.'],
              ['B', 'Nach Wein?'],
              ['A', 'Nein — W-I-E-N, die Stadt in Österreich.'],
              ['B', 'Ach so, Wien! Schöne Stadt.']
            ]),
            exercises: '<div class="exercise"><ol>' +
              exSelect('Which word sounds like English "vine"?', 'Wein', ['Wein', 'Wien']) +
              exSelect('Which word sounds like English "veen"?', 'Wien', ['Wein', 'Wien']) +
              exSelect('<span class="de">Zeit</span> starts with the sound:', 'ts', ['ts', 's', 'z']) +
              exSelect('<span class="de">Vater</span> starts with the sound:', 'f', ['f', 'v', 'w']) +
              exSelect('<span class="de">Wasser</span> starts with the sound:', 'v', ['f', 'v', 'w']) +
              exSelect('<span class="de">Straße</span> starts with the sound:', 'sht', ['st', 'sht', 'shp']) +
              exSelect('<span class="de">sechs</span> — the chs is pronounced:', 'ks', ['ks', 'sh', 'ch']) +
              exInput('<span class="de">Lehrer</span> ends with a sound like the letter:', 'a') +
              exInput('How many is <span class="de">vier</span>?', '4|four') +
              exInput('How many is <span class="de">drei</span>?', '3|three') +
              '</ol></div>'
          },
          {
            icon: '📣', title: 'Word stress and rhythm',
            explanation:
              '<p>German words are stressed on the <strong>stem</strong>, which for ordinary words means the first syllable: <span class="de">AR-beit</span>, ' +
              '<span class="de">STRA-ße</span>, <span class="de">MOR-gen</span>. Put the stress elsewhere and natives often simply do not recognise the word, ' +
              'even when every sound is correct.</p>' +
              '<p>Prefixes split into two camps, and the difference is audible. <strong>Inseparable</strong> prefixes — be-, ge-, er-, ver-, zer-, ent-, emp- — are never stressed: ' +
              '<span class="de">ver-STE-hen</span>, <span class="de">be-ZAH-len</span>. <strong>Separable</strong> prefixes take the stress themselves: ' +
              '<span class="de">AUF-stehen</span>, <span class="de">AN-rufen</span>, <span class="de">EIN-kaufen</span>. That is a useful early clue: if you hear the stress on the prefix, ' +
              'that prefix will jump to the end of the sentence.</p>' +
              '<p>Two exceptions worth knowing. Compound nouns stress the <em>first</em> part — <span class="de">HAUS-tür</span>, <span class="de">AP-felsaft</span> — ' +
              'which is how Germans parse those famously long words. And borrowed words usually stress the <em>end</em>: ' +
              '<span class="de">Stu-DENT</span>, <span class="de">Te-le-FON</span>, <span class="de">U-ni-ver-si-TÄT</span>, <span class="de">Res-tau-RANT</span>.</p>',
            vocab: formTable('', ['Word', 'Stress', 'Why'], [
              ['ARbeiten', 'first syllable', 'ordinary verb'],
              ['verSTEhen', 'second syllable', 'inseparable prefix ver-'],
              ['beZAHlen', 'second syllable', 'inseparable prefix be-'],
              ['AUFstehen', 'the prefix', 'separable prefix auf-'],
              ['ANrufen', 'the prefix', 'separable prefix an-'],
              ['EINkaufen', 'the prefix', 'separable prefix ein-'],
              ['HAUStür', 'first part', 'compound noun'],
              ['APfelsaft', 'first part', 'compound noun'],
              ['StuDENT', 'last syllable', 'foreign word'],
              ['TeleFON', 'last syllable', 'foreign word'],
              ['UniversiTÄT', 'last syllable', 'foreign word']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>Vowel length is written into the spelling, and it is a reliable signal once you know what to look for:</p>' +
              formTable('', ['Signal', 'Length', 'Examples'], [
                ['vowel + h', '<strong>long</strong>', 'Bahn, gehen, ihm, Uhr'],
                ['doubled vowel', '<strong>long</strong>', 'Boot, Tee, Saal'],
                ['ie', '<strong>long</strong>', 'vier, Liebe, sieben'],
                ['vowel + single consonant', '<strong>long</strong>', 'Tag, gut, Name'],
                ['vowel + double consonant', '<strong>short</strong>', 'Mutter, kommen, Fluss'],
                ['vowel + two consonants', '<strong>short</strong>', 'Herbst, Kind, Nacht']
              ]) +
              '<p class="note">The <em>h</em> in Bahn, gehen and Uhr is silent — it is there only to tell you the vowel is long. It is called a <em>Dehnungs-h</em>, a "stretching h".</p>' +
              '</div>',
            dialogs: '',
            exercises: '<div class="exercise"><ol>' +
              exSelect('<span class="de">verstehen</span> — the stress is on:', 'ste', ['ver', 'ste', 'hen']) +
              exSelect('<span class="de">aufstehen</span> — the stress is on:', 'auf', ['auf', 'ste', 'hen']) +
              exSelect('<span class="de">Universität</span> — the stress is on:', 'tät', ['u', 'ver', 'tät']) +
              exSelect('<span class="de">Apfelsaft</span> — the stress is on:', 'Ap', ['Ap', 'fel', 'saft']) +
              exSelect('The vowel in <span class="de">Bahn</span> is:', 'long', ['long', 'short']) +
              exSelect('The vowel in <span class="de">Mutter</span> is:', 'short', ['long', 'short']) +
              exInput('The silent h in <span class="de">Uhr</span> tells you the vowel is ___________.', 'long|lang') +
              exInput('Is the prefix in <span class="de">bezahlen</span> stressed? Answer yes or no.', 'no|nein') +
              '</ol></div>'
          },
          {
            icon: '✍️', title: 'Capital letters for nouns',
            explanation:
              '<p>German capitalises <strong>every noun</strong>, anywhere in the sentence: <span class="de">Ich trinke einen Kaffee mit meiner Schwester im Garten.</span> ' +
              'Four nouns, four capitals. This is not a style choice you can skip — it is spelling, and it is marked wrong in exams.</p>' +
              '<p>Two more capitals: the formal <strong>Sie</strong> (and <em>Ihnen</em>, <em>Ihr</em>) always, and the first word of a sentence. ' +
              'What does <em>not</em> get a capital is anything English speakers expect to: not <strong>ich</strong> (unlike English "I"), not adjectives of nationality ' +
              '(<span class="de">ein deutsches Auto</span>), not days or months inside a word like <em>montags</em>, not languages used as adverbs ' +
              '(<span class="de">Ich spreche gut deutsch</span> — though <span class="de">Ich lerne Deutsch</span> as a noun does take one).</p>' +
              '<p>Anything turned into a noun takes a capital too: <span class="de">das Essen</span> (the food, from <em>essen</em>), ' +
              '<span class="de">beim Laufen</span>, <span class="de">etwas Neues</span>, <span class="de">nichts Gutes</span>. ' +
              'The test is simple — if you can put <span class="de">der</span>, <span class="de">die</span> or <span class="de">das</span> in front of it, capitalise it.</p>',
            vocab: vocabTable([
              ['das Nomen', 'the noun'],
              ['das Substantiv', 'the noun (other term)'],
              ['das Verb', 'the verb'],
              ['das Adjektiv', 'the adjective'],
              ['die Rechtschreibung', 'spelling, orthography'],
              ['der Satz', 'the sentence'],
              ['das Wort', 'the word'],
              ['die Großschreibung', 'capitalisation'],
              ['die Kleinschreibung', 'lower-case writing'],
              ['der Fehler', 'the mistake']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Capital:</strong></p>' +
              '<ul class="goals">' +
              '<li>every noun — der <strong>M</strong>ann, die <strong>F</strong>rau, das <strong>K</strong>ind</li>' +
              '<li>the formal <strong>S</strong>ie, <strong>I</strong>hnen, <strong>I</strong>hr</li>' +
              '<li>nominalised words — das <strong>E</strong>ssen, etwas <strong>N</strong>eues, beim <strong>L</strong>aufen</li>' +
              '</ul>' +
              '<p><strong>Lower case:</strong></p>' +
              '<ul class="goals">' +
              '<li><strong>ich</strong>, <strong>du</strong>, <strong>wir</strong> — only formal Sie is capitalised</li>' +
              '<li>adjectives — ein <strong>d</strong>eutsches Auto, ein <strong>g</strong>utes Buch</li>' +
              '<li>verbs in their normal use — ich <strong>e</strong>sse, wir <strong>l</strong>aufen</li>' +
              '</ul>' +
              '<p>The capital letter is not decoration — it carries meaning. These two sentences contain the same letters and mean completely different things:</p>' +
              '<div class="example-box">Der <strong>g</strong>efangene <strong>F</strong>loh. — The captured flea.<br>Der <strong>G</strong>efangene <strong>f</strong>loh. — The prisoner fled.</div>' +
              '<div class="example-box">Er hat <strong>l</strong>iebe <strong>G</strong>enossen. — He has dear comrades.<br>Er hat <strong>L</strong>iebe <strong>g</strong>enossen. — He enjoyed love.</div>' +
              '</div>',
            dialogs: '',
            exercises: '<div class="exercise"><ol>' +
              exInput('Capitalise correctly: <em>ich trinke kaffee</em> → <span class="de">Ich trinke ___________</span>', 'Kaffee', null, 'de', true) +
              exInput('Capitalise correctly: <em>die frau und das kind</em> → <span class="de">die ___________ und das Kind</span>', 'Frau', null, 'de', true) +
              exSelect('Which is written correctly?', 'Ich lerne Deutsch.', ['ich lerne Deutsch.', 'Ich lerne Deutsch.', 'Ich Lerne Deutsch.'], true) +
              exSelect('Which is written correctly?', 'ein deutsches Auto', ['ein Deutsches Auto', 'ein deutsches Auto', 'Ein deutsches auto'], true) +
              exSelect('The formal "you" is written:', 'Sie', ['sie', 'Sie'], true) +
              exInput('Does German capitalise <span class="de">ich</span> in the middle of a sentence? Answer yes or no.', 'no|nein') +
              exInput('<span class="de">Der Gefangene floh.</span> — who or what ran away?', 'the prisoner|prisoner|a prisoner') +
              exInput('What is the German word for "the noun"?', 'das Nomen|Nomen|das Substantiv|Substantiv') +
              '</ol></div>'
          }
        ],
        drillIntro: '<p>Mixed practice over the whole unit: letter names, umlauts and ß, tricky sounds, stress and capital letters together.</p>',
        exercises: exerciseList([
          exSelect('The letter <span class="de">w</span> is called:', 'weh', ['weh', 'fau', 'wai']),
          exSelect('Which letter is called <span class="de">fau</span>?', 'v', ['v', 'w', 'f']),
          exInput('How do you say "to spell" in German?', 'buchstabieren'),
          exInput('One mother is <span class="de">die Mutter</span>. Several are: <em>die ___________</em>', 'Mütter|Muetter'),
          exSelect('<span class="de">Stra__e</span> — long vowel, so you write:', 'Eszett ß', ['Eszett ß', 'Doppel-S ss']),
          exSelect('Which word sounds like English "vine"?', 'Wein', ['Wein', 'Wien']),
          exSelect('<span class="de">verstehen</span> — the stress is on:', 'ste', ['ver', 'ste', 'hen']),
          exSelect('Which sentence is written correctly?', 'Ich trinke Kaffee.', ['ich trinke Kaffee.', 'Ich trinke Kaffee.', 'Ich Trinke Kaffee.'], true),
          exInput('Capital letters: <em>ich habe einen hund</em> → Ich habe einen ___________', 'Hund', null, 'de', true),
          exSelect('The formal "you" is written:', 'Sie', ['sie', 'Sie'], true),
          exInput('Write <span class="de">Tür</span> without an umlaut key:', 'Tuer'),
          exInput('Ask politely: Können Sie das bitte ___________?', 'buchstabieren'),
          exSelect('The vowel in <span class="de">Bahn</span> is:', 'long', ['long', 'short']),
          exInput('<span class="de">Müller</span> has two L. You say: <em>Mit Doppel-___________</em>', 'L')
        ]),

        reading: {
          intro: 'A registration form with a spelled name. Forms like this are the real-life use of this unit.',
          words: 55, minutes: 5,
          text: readingText('Sprachschule Lingua — Anmeldung', [
            '<strong>Vorname:</strong> Maria',
            '<strong>Nachname:</strong> Schmidt (buchstabiert: S-C-H-M-I-D-T)',
            '<strong>Straße:</strong> Bahnhofstraße 12 · <strong>Stadt:</strong> Bonn',
            '<strong>E-Mail:</strong> maria.schmidt@mail.de (gesprochen: „maria Punkt schmidt At-Zeichen mail Punkt D-E“)',
            '<strong>Telefon:</strong> 0228 123456',
            '<strong>Kurs:</strong> Deutsch A1, Montag und Mittwoch, 18 Uhr'
          ], 'Formular, fiktiv'),
          glossary: vocabTable([
            ['die Anmeldung', 'the registration'],
            ['der Vorname', 'the first name'],
            ['der Nachname', 'the surname'],
            ['die Straße', 'the street'],
            ['die Stadt', 'the city'],
            ['der Kurs', 'the course']
          ]),
          questions: exerciseList([
            exInput('Wie ist der Nachname?', 'Schmidt'),
            exSelect('Wie viele Buchstaben hat der Nachname?', '7', ['6', '7', '8']),
            exInput('In welcher Stadt wohnt Maria?', 'Bonn'),
            exInput('Wie spricht man das Zeichen „@“? (ein Wort mit Bindestrich)', 'At-Zeichen|At Zeichen|Atzeichen'),
            exTF('Der Kurs ist am Dienstag.', false)
          ])
        },

        listening: {
          title: 'Am Telefon — den Namen buchstabieren',
          intro: 'A phone call where someone spells their name — the situation this unit prepares you for. Listen for the letters.',
          lines: [
            ['Mitarbeiterin', 'Sprachschule Lingua, guten Tag.'],
            ['Anrufer', 'Guten Tag. Ich möchte einen Kurs. Mein Name ist Krüger.'],
            ['Mitarbeiterin', 'Wie schreibt man das, bitte?'],
            ['Anrufer', 'K, R, Ü, G, E, R. Das Ü hat zwei Punkte.'],
            ['Mitarbeiterin', 'Also K-R-Ü-G-E-R. Und die Telefonnummer?'],
            ['Anrufer', 'Null, zwei, zwei, acht, eins, zwei, drei, vier, fünf, sechs.'],
            ['Mitarbeiterin', 'Danke. Und die E-Mail-Adresse?'],
            ['Anrufer', 'krueger Punkt jan At-Zeichen web Punkt de.'],
            ['Mitarbeiterin', 'Vielen Dank, Herr Krüger. Auf Wiederhören!'],
            ['Anrufer', 'Auf Wiederhören!']
          ],
          questions: exerciseList([
            exInput('Wie heißt der Anrufer? (Nachname)', 'Krüger|Krueger'),
            exInput('Welcher Buchstabe im Namen hat zwei Punkte?', 'ü|ue|u-umlaut|u umlaut'),
            exSelect('Wie beginnt die Telefonnummer?', '0228', ['0221', '0228', '0288']),
            exInput('Wie spricht man „@“ in der E-Mail-Adresse?', 'At-Zeichen|At Zeichen|Atzeichen'),
            exSelect('Wie verabschieden sich die beiden am Telefon?', 'Auf Wiederhören', ['Auf Wiedersehen', 'Auf Wiederhören', 'Tschüss'])
          ])
        },

        writing: {
          title: 'Anmeldung per E-Mail',
          textType: 'Kurze E-Mail an die Sprachschule',
          minWords: 20, maxWords: 50, minutes: 15,
          expect: ['greeting', 'self-intro', 'spelling', 'farewell'],
          task: '<p>Sie möchten einen Deutschkurs machen. Schreiben Sie eine kurze E-Mail an die Sprachschule Lingua.</p>' +
            '<p class="note">You want to take a German course. Write a short e-mail to the language school Lingua.</p>',
          plainTask: 'Write a short e-mail in German (20-50 words) to a language school to sign up for a German course. The e-mail must: greet the school; give the writer\'s name; spell out the surname letter by letter (for example S-C-H-M-I-D-T); say which city the writer lives in; say goodbye. Register: polite, simple present-tense sentences, correct capitalisation of nouns. This is a beginner (A1) text.',
          bullets: [
            'Beginnen Sie mit einem <strong>Gruß</strong>.',
            'Sagen Sie Ihren <strong>Namen</strong>.',
            '<strong>Buchstabieren</strong> Sie Ihren Nachnamen: zum Beispiel S-C-H-M-I-D-T.',
            'Sagen Sie, <strong>wo Sie wohnen</strong>.',
            '<strong>Verabschieden</strong> Sie sich.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Grüßen', 'Guten Tag! · Sehr geehrte Damen und Herren,'],
            ['Wunsch', 'Ich möchte einen Deutschkurs machen.'],
            ['Name', 'Ich heiße … · Mein Nachname ist … · Das schreibt man: …'],
            ['Ort', 'Ich wohne in … · Ich komme aus …'],
            ['Verabschieden', 'Vielen Dank! · Auf Wiedersehen! · Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit einem Gruß.',
            'Ich nenne meinen Namen.',
            'Ich buchstabiere meinen Nachnamen mit Bindestrichen (S-C-H-M-I-D-T).',
            'Ich sage, wo ich wohne.',
            'Ich verabschiede mich.',
            'Alle Nomen sind großgeschrieben.',
            'Ich liege zwischen 20 und 50 Wörtern.'
          ]
        },

        culture:
          '<p><strong>The spelling alphabet is everyday equipment.</strong> German customer-service calls, deliveries and official appointments routinely involve spelling a name, ' +
          'and people reach for the <em>Buchstabiertafel</em> without thinking: <span class="de">A wie Anton, B wie Berta, M wie Martha, Z wie Zeppelin</span>. ' +
          'You are not expected to know the list — but you will hear it, and answering with your own "wie" examples is perfectly normal.</p>' +
          '<p><strong>Umlauts and alphabetical order.</strong> In a phone book or a list of names, ä ö ü are filed as if they were a, o, u — so Müller sits with Mu, not at the end. ' +
          'In a dictionary, though, ä is sometimes filed as ae. If you cannot find a word, try both.</p>' +
          '<p><strong>The ß is not used in Switzerland.</strong> Swiss German texts, newspapers and official forms write ss everywhere: <span class="de">Strasse</span>, ' +
          '<span class="de">heiss</span>, <span class="de">gross</span>. It is not a mistake, it is a national convention. Germany and Austria keep the ß.</p>' +
          '<p><strong>The 1996 spelling reform</strong> changed exactly the ß rule you just learned, and older Germans still argue about it. ' +
          'If you see <span class="de">daß</span> or <span class="de">muß</span> in an old book, that is the pre-1996 spelling — today it is <span class="de">dass</span> and <span class="de">muss</span>.</p>' +
          '<p><strong>Long words are not one word to a German.</strong> <span class="de">Handschuhschneeballwerfer</span> is read as Hand-schuh-schnee-ball-werfer, ' +
          'and the stress on the first part tells the listener where the chain starts. Compounds look terrifying and are in fact the easiest vocabulary in the language: ' +
          'you only need the pieces.</p>',
        recap: [
          { group: '🅰️ Alphabet und Buchstabieren', rows: [
            ['das Alphabet', 'the alphabet'],
            ['der Buchstabe', 'the letter'],
            ['buchstabieren', 'to spell'],
            ['Wie schreibt man das?', 'How do you spell that?'],
            ['Mit Doppel-L.', 'With a double L.'],
            ['mit Umlaut', 'with an umlaut'],
            ['groß geschrieben', 'written with a capital'],
            ['klein geschrieben', 'written in lower case'],
            ['der Bindestrich', 'the hyphen'],
            ['das Leerzeichen', 'the space'],
            ['der Punkt', 'the dot'],
            ['das At-Zeichen', 'the at sign']
          ] },
          { group: '🎵 Umlaute und Eszett', rows: [
            ['der Umlaut', 'the umlaut'],
            ['das Eszett', 'the letter ß'],
            ['die Mutter', 'the mother'],
            ['die Mütter', 'the mothers'],
            ['der Bruder', 'the brother'],
            ['die Brüder', 'the brothers'],
            ['schon', 'already'],
            ['schön', 'beautiful'],
            ['zahlen', 'to pay'],
            ['zählen', 'to count'],
            ['die Straße', 'the street'],
            ['der Fluss', 'the river'],
            ['der Kuss', 'the kiss'],
            ['heiß', 'hot'],
            ['groß', 'big']
          ] },
          { group: '🗣️ Aussprache — sounds', rows: [
            ['der Wein', 'the wine'],
            ['die Stadt', 'the city'],
            ['die Zeit', 'the time'],
            ['das Zimmer', 'the room'],
            ['der Vater', 'the father'],
            ['das Wasser', 'the water'],
            ['die Sonne', 'the sun'],
            ['die Schule', 'the school'],
            ['die Milch', 'the milk'],
            ['das Buch', 'the book'],
            ['sechs', 'six'],
            ['sieben', 'seven'],
            ['vier', 'four'],
            ['drei', 'three'],
            ['heute', 'today'],
            ['die Leute', 'the people']
          ] },
          { group: '📣 Betonung — stress', rows: [
            ['arbeiten', 'to work'],
            ['verstehen', 'to understand'],
            ['bezahlen', 'to pay'],
            ['aufstehen', 'to get up'],
            ['anrufen', 'to call (on the phone)'],
            ['einkaufen', 'to shop'],
            ['die Haustür', 'the front door'],
            ['der Apfelsaft', 'the apple juice'],
            ['der Student', 'the student'],
            ['das Telefon', 'the telephone'],
            ['die Universität', 'the university']
          ] },
          { group: '✍️ Rechtschreibung — spelling', rows: [
            ['das Nomen', 'the noun'],
            ['das Verb', 'the verb'],
            ['das Adjektiv', 'the adjective'],
            ['die Rechtschreibung', 'spelling'],
            ['die Großschreibung', 'capitalisation'],
            ['der Satz', 'the sentence'],
            ['das Wort', 'the word'],
            ['der Fehler', 'the mistake'],
            ['richtig', 'correct'],
            ['falsch', 'wrong']
          ] }
        ],
        sentences: [
          { de: 'Mein Name ist Schmidt', en: 'My name is Schmidt' },
          { de: 'Ich buchstabiere meinen Namen', en: 'I spell my name' },
          { de: 'Das schreibt man mit Doppel-S', en: 'You write that with a double s' },
          { de: 'Alle Nomen schreibt man groß', en: 'All nouns are written with a capital letter' },
          { de: 'Der Vokal ist lang', en: 'The vowel is long' },
          { de: 'Ich komme aus der Türkei', en: 'I come from Turkey' }
        ]
      },

      U('🙋 Unit 3 — Introducing Yourself', 'Sich vorstellen', [
        t('📛', 'Name and age', 'Ich heiße … / Ich bin … / Ich bin 25 Jahre alt'),
        t('🌍', 'Country, city and nationality', 'Ich komme aus … / Ich wohne in …'),
        t('🗣️', 'Languages you speak', 'Ich spreche … / Ich lerne Deutsch'),
        t('💼', 'Job and studies', 'Ich bin Studentin / Ich arbeite als …'),
        t('❓', 'Asking the same questions back', 'Wie heißen Sie? Woher kommst du?')
      ], ['Introduce yourself with name, origin, job and languages', 'Ask another person for the same information'],
         ['sein and haben in the present tense', 'W-questions: wie, wer, woher, wo', 'Regular verb endings -e, -st, -t']),

      U('🔢 Unit 4 — Numbers, Time and Dates', 'Zahlen, Uhrzeit und Datum', [
        t('1️⃣', 'Numbers 0–100 and beyond', 'The reversed teens-and-tens pattern: einundzwanzig'),
        t('🕐', 'Telling the time', 'Formal vs. everyday: 14:30 / halb drei / Viertel nach'),
        t('📅', 'Days, months, seasons', 'am Montag, im Juli, im Sommer'),
        t('🎂', 'Dates and birthdays', 'Ordinals: der erste Mai, am 3. März'),
        t('📞', 'Phone numbers, prices, addresses', 'Reading long numbers out loud')
      ], ['Give and understand times, dates and prices', 'Exchange phone numbers and addresses'],
         ['Cardinal and ordinal numbers', 'Time prepositions am / im / um']),

      U('👨‍👩‍👧 Unit 5 — Family and People', 'Familie und Menschen', [
        t('🏡', 'Family members', 'die Mutter, der Vater, die Geschwister, die Eltern'),
        t('🧬', 'Talking about relatives', 'Ich habe einen Bruder / keine Schwester'),
        t('💞', 'Marital status and children', 'ledig, verheiratet, geschieden, Kinder haben'),
        t('🙂', 'Describing a person', 'Appearance and simple character adjectives'),
        t('🐕', 'Pets', 'der Hund, die Katze — and how to talk about them')
      ], ['Describe your family and who you live with', 'Say how old people are and what they do'],
         ['Possessive articles mein / dein / sein / ihr', 'Accusative with haben', 'Negation with kein / keine']),

      U('🍞 Unit 6 — Food, Drink and Meals', 'Essen und Trinken', [
        t('🥐', 'Breakfast, lunch and dinner', 'Frühstück, Mittagessen, Abendessen'),
        t('🥗', 'Food and drink vocabulary', 'Grouped by shelf: Obst, Gemüse, Getränke'),
        t('😋', 'Likes and dislikes', 'Ich mag … / Ich esse gern … / Ich trinke lieber …'),
        t('🍽️', 'In a café or restaurant', 'Ordering, asking for the bill, paying'),
        t('🧾', 'Quantities and containers', 'eine Flasche, ein Stück, 200 Gramm')
      ], ['Order food and drink and pay', 'Say what you like, dislike and prefer'],
         ['möchten and the verb mögen', 'gern / lieber / am liebsten', 'Accusative of the definite and indefinite article']),

      U('🛒 Unit 7 — Shopping and Prices', 'Einkaufen und Preise', [
        t('🏬', 'Shops and departments', 'Bäckerei, Apotheke, Supermarkt, Drogerie'),
        t('💶', 'Asking the price', 'Was kostet …? Wie viel kostet …?'),
        t('🧺', 'Doing the weekly shop', 'Shopping list, weights, packaging'),
        t('💳', 'Paying and receipts', 'Bar oder mit Karte? Brauchen Sie einen Kassenbon?'),
        t('🔁', 'Returns and problems', 'Das passt nicht. Kann ich das umtauschen?')
      ], ['Buy everyday goods and ask about prices', 'Handle a simple exchange or complaint'],
         ['Accusative case in full', 'Question words welcher / wie viel', 'Imperative for polite requests']),

      U('🏠 Unit 8 — Home and Living', 'Wohnen', [
        t('🚪', 'Rooms of a home', 'die Küche, das Bad, das Schlafzimmer'),
        t('🛋️', 'Furniture and objects', 'Describing what is in each room'),
        t('📍', 'Where things are', 'in, auf, unter, neben, zwischen, hinter, vor'),
        t('🏘️', 'Flats, houses and rent', 'Wohnung, Haus, Miete, Nebenkosten'),
        t('📰', 'Reading a flat advert', 'Abbreviations: 2 ZKB, qm, NK, WG')
      ], ['Describe your home room by room', 'Say where objects and people are'],
         ['Dative case with location prepositions', 'es gibt + accusative', 'Two-way prepositions (static use)']),

      U('⏰ Unit 9 — Daily Routine', 'Tagesablauf', [
        t('🌞', 'A normal weekday', 'aufstehen, duschen, frühstücken, zur Arbeit fahren'),
        t('🔀', 'Separable verbs', 'Why the prefix jumps to the end of the sentence'),
        t('🔁', 'How often?', 'immer, oft, manchmal, selten, nie; jeden Tag'),
        t('🪞', 'Reflexive routine verbs', 'sich waschen, sich anziehen, sich fühlen'),
        t('🌙', 'Evening and weekend', 'Talking about free evenings and Sundays')
      ], ['Describe your day in order with times', 'Say how often you do something'],
         ['Separable verbs', 'Reflexive verbs (introduction)', 'Time adverbs and position in the sentence']),

      U('🎨 Unit 10 — Free Time and Hobbies', 'Freizeit und Hobbys', [
        t('⚽', 'Sports and activities', 'Fußball spielen, schwimmen, wandern, Rad fahren'),
        t('🎬', 'Music, films and books', 'Talking about what you watch, read and listen to'),
        t('👍', 'Can, want, must', 'können, wollen, müssen in free-time plans'),
        t('🗓️', 'Making an arrangement', 'Hast du am Samstag Zeit? Wollen wir …?'),
        t('🙅', 'Accepting and refusing politely', 'Gern! / Leider kann ich nicht, weil …')
      ], ['Talk about your hobbies and interests', 'Suggest an activity and accept or refuse an invitation'],
         ['Modal verbs können / wollen / müssen', 'Sentence bracket (Satzklammer)', 'Word order with time expressions']),

      U('🧭 Unit 11 — Getting Around Town', 'Wege und Orte', [
        t('🏛️', 'Places in a town', 'Bahnhof, Rathaus, Museum, Krankenhaus'),
        t('➡️', 'Asking the way', 'Wie komme ich zum / zur …? Entschuldigung, wo ist …?'),
        t('🧱', 'Giving directions', 'geradeaus, links, rechts, an der Ecke, gegenüber'),
        t('🚌', 'Public transport', 'Bus, Bahn, Ticket, umsteigen, Fahrplan'),
        t('🎫', 'Buying a ticket', 'Einfach oder hin und zurück?')
      ], ['Ask for and understand simple directions', 'Buy a ticket and ask about connections'],
         ['Dative prepositions zu / mit / bei / nach', 'Imperative forms', 'zum / zur contractions']),

      U('💊 Unit 12 — Body and Health', 'Körper und Gesundheit', [
        t('🦵', 'Parts of the body', 'With articles — the part learners most often get wrong'),
        t('🤒', 'Saying what hurts', 'Ich habe Kopfschmerzen. Mein Hals tut weh.'),
        t('🩺', 'At the doctor', 'Making an appointment, describing symptoms'),
        t('💉', 'Advice and instructions', 'Sie sollten … / Nehmen Sie …'),
        t('🏥', 'Pharmacy and emergencies', 'Rezept, Apotheke, Notaufnahme, 112')
      ], ['Describe symptoms and make a doctor’s appointment', 'Understand simple health advice'],
         ['Modal verb sollen', 'Dative of the person: mir tut … weh', 'Imperative with Sie']),

      U('👕 Unit 13 — Clothes and Colours', 'Kleidung und Farben', [
        t('🧥', 'Clothing vocabulary', 'With gender grouped by colour code'),
        t('🌈', 'Colours and patterns', 'hell-, dunkel-, gestreift, gepunktet'),
        t('📏', 'Sizes and fit', 'Größe, zu klein, zu eng, passt gut'),
        t('🛍️', 'In a clothes shop', 'Kann ich das anprobieren? Haben Sie das in …?'),
        t('🪞', 'Saying how something looks', 'Das steht dir. Das sieht gut aus.')
      ], ['Buy clothes and ask about size and colour', 'Say what you are wearing and why you like it'],
         ['Adjectives after the verb (no ending)', 'Demonstratives dieser / diese / dieses', 'Comparative gut / besser (introduction)']),

      U('🌦️ Unit 14 — Weather and Seasons', 'Wetter und Jahreszeiten', [
        t('☀️', 'Describing the weather', 'Es ist sonnig / Es regnet / Es sind 18 Grad'),
        t('🍂', 'Seasons and months', 'im Frühling, im Herbst — and typical weather'),
        t('🌡️', 'Temperature and forecasts', 'Reading a short weather report'),
        t('🧣', 'Weather and plans', 'Wenn es regnet, bleiben wir zu Hause.'),
        t('🗺️', 'Climate in German-speaking countries', 'North vs. Alps')
      ], ['Talk about today’s weather and the forecast', 'Link weather to what you will do'],
         ['Impersonal es', 'wenn-clauses (introduction)', 'Subordinate clause word order']),

      U('💼 Unit 15 — Work and Jobs', 'Arbeit und Beruf', [
        t('🧑‍🏫', 'Jobs and workplaces', 'Masculine and feminine job titles: Lehrer / Lehrerin'),
        t('🕘', 'Working hours and tasks', 'Was machen Sie beruflich? Ich arbeite von … bis …'),
        t('📄', 'A simple CV', 'Reading and filling in a Lebenslauf'),
        t('📞', 'On the phone at work', 'Can I speak to…? Taking a message'),
        t('🤝', 'Small talk with colleagues', 'Safe topics and how to keep it short')
      ], ['Say what you do for a living and describe your tasks', 'Understand a simple job advert'],
         ['als + job with no article', 'Prepositions of time von … bis, seit', 'Word order in longer statements']),

      U('📨 Unit 16 — Appointments and Short Messages', 'Termine und kurze Nachrichten', [
        t('🗓️', 'Making an appointment', 'Ich möchte einen Termin vereinbaren.'),
        t('🔄', 'Changing or cancelling', 'Kann ich den Termin verschieben? Ich muss absagen.'),
        t('✉️', 'Writing a short e-mail', 'Formal vs. informal opening and closing'),
        t('💬', 'Texting a friend', 'Common abbreviations and tone'),
        t('📝', 'Filling in forms', 'Vorname, Nachname, Geburtsdatum, Straße, PLZ')
      ], ['Arrange, change and cancel an appointment', 'Write a short message or fill in a form'],
         ['möchten for polite requests', 'Formal vs. informal register', 'Dates and times in writing']),

      U('✈️ Unit 17 — Travel and Holidays', 'Reisen und Urlaub', [
        t('🧳', 'Planning a trip', 'Where, when, how long, with whom'),
        t('🏨', 'Booking a room', 'Haben Sie ein Zimmer frei? Ein Einzelzimmer, bitte.'),
        t('🚆', 'At the station and airport', 'Gleis, Verspätung, Abflug, Gepäck'),
        t('🗺️', 'Holiday activities', 'Sightseeing, beach, hiking, museums'),
        t('🆘', 'When something goes wrong', 'Lost luggage, missed train, complaints')
      ], ['Book travel and accommodation', 'Deal with a simple travel problem'],
         ['Prepositions of direction nach / in / zu', 'Modal verb dürfen', 'Future with the present tense + time word']),

      U('⏮️ Unit 18 — Talking About the Past', 'Über die Vergangenheit sprechen', [
        t('✅', 'Perfekt with haben', 'Ich habe gearbeitet / gegessen / gemacht'),
        t('🚶', 'Perfekt with sein', 'Which verbs take sein, and why'),
        t('🧩', 'Regular and irregular participles', '-t vs. -en, and the ge- rule'),
        t('🕰️', 'war and hatte', 'The two past forms you need even at A1'),
        t('📔', 'Telling a weekend story', 'Putting several past sentences in order')
      ], ['Talk about what you did yesterday and last weekend', 'Write a short past-tense diary entry'],
         ['Perfekt with haben and sein', 'Past participle formation', 'Präteritum of sein and haben']),
    ]
  };
})();
