/* A1 — Breakthrough.
   All 18 units are written out in full: five topics each, plus the mixed
   drill, reading, listening, writing task, culture notes, recap and
   sentence practice. */
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

      { // ===== UNIT 3 — written out in full =====
        title: '🙋 Unit 3 — Introducing Yourself',
        subject: 'Sich vorstellen',
        canDo: ['Introduce yourself with name, age, origin, job and languages',
                'Ask another person the same questions and understand simple answers'],
        grammarFocus: ['sein and haben in the present tense', 'W-questions: wie, wer, woher, wo', 'Regular verb endings -e, -st, -t'],
        topics: [
          {
            icon: '📛', title: 'Name and age',
            explanation:
              '<p>Two verbs carry almost every introduction. <span class="de">heißen</span> (to be called) gives your name, and <span class="de">sein</span> (to be) gives your age and your job. ' +
              'Learn them as whole sentences first: <span class="de">Ich heiße Sıla.</span> and <span class="de">Ich bin 25 Jahre alt.</span></p>' +
              '<p><span class="de">sein</span> is the most irregular verb in German, so it is worth learning by heart. <span class="de">heißen</span> follows the normal pattern, with one spelling detail: the <em>ß</em> stays before the <em>-t</em> in the du-form.</p>',
            vocab: vocabTable([
              ['heißen', 'to be called'],
              ['sein', 'to be'],
              ['der Name', 'the name'],
              ['das Alter', 'the age'],
              ['Jahre alt', 'years old'],
              ['Ich heiße …', 'My name is …'],
              ['Wie heißen Sie?', 'What is your name? (formal)'],
              ['Wie heißt du?', 'What is your name? (informal)']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'sein (to be)', 'heißen (to be called)'], [
                ['ich', '<strong>bin</strong>', '<strong>heiße</strong>'],
                ['du', '<strong>bist</strong>', '<strong>heißt</strong>'],
                ['er / sie / es', '<strong>ist</strong>', '<strong>heißt</strong>'],
                ['wir', '<strong>sind</strong>', '<strong>heißen</strong>'],
                ['ihr', '<strong>seid</strong>', '<strong>heißt</strong>'],
                ['sie / Sie', '<strong>sind</strong>', '<strong>heißen</strong>']
              ]) +
              '<div class="example-box">Ich <strong>bin</strong> 25 Jahre alt. · Wie alt <strong>bist</strong> du? · Er <strong>ist</strong> Lehrer.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — first meeting', [
              ['Lukas', 'Hallo! Ich heiße Lukas. Und wie heißt du?'],
              ['Sıla', 'Ich heiße Sıla. Ich bin 25 Jahre alt.'],
              ['Lukas', 'Wie alt bist du?'],
              ['Sıla', 'Ich bin 25.']
            ]),
            exercises: exerciseList([
              exInput('Ich ___________ Sıla. (heißen)', 'heiße'),
              exSelect('Ich ___ 25 Jahre alt.', 'bin', ['bin', 'bist', 'ist']),
              exSelect('Er ___ 30 Jahre alt.', 'ist', ['bin', 'ist', 'sind']),
              exInput('Wie ___________ du? (heißen)', 'heißt'),
              exSelect('Wir ___ Studenten.', 'sind', ['sind', 'bin', 'seid']),
              exSelect('Wie alt ___ du?', 'bist', ['bin', 'bist', 'ist']),
              exSelect('Welche Form passt zu „ihr"?', 'seid', ['seid', 'sind', 'bist'])
            ])
          },
          {
            icon: '🌍', title: 'Country, city and nationality',
            explanation:
              '<p>To say where you come from, use <span class="de">kommen aus</span>. To say where you live, use <span class="de">wohnen in</span>. ' +
              'Both prepositions take a case you will meet properly later, so for now learn the phrases whole: <span class="de">aus der Türkei</span>, <span class="de">in Berlin</span>.</p>' +
              '<p>Nationalities have two forms: the masculine and the feminine. A man from Turkey is <span class="de">Türke</span>, a woman is <span class="de">Türkin</span>. ' +
              'The feminine adds <em>-in</em>, and the country name is always written with a capital.</p>',
            vocab: vocabTable([
              ['kommen aus', 'to come from'],
              ['wohnen in', 'to live in'],
              ['die Stadt', 'the city'],
              ['das Land', 'the country'],
              ['die Türkei', 'Turkey'],
              ['Deutschland', 'Germany'],
              ['der Türke / die Türkin', 'the Turkish man / woman'],
              ['der Deutsche / die Deutsche', 'the German man / woman']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'kommen', 'wohnen'], [
                ['ich', '<strong>komme</strong> aus …', '<strong>wohne</strong> in …'],
                ['du', '<strong>kommst</strong> aus …', '<strong>wohnst</strong> in …'],
                ['er / sie', '<strong>kommt</strong> aus …', '<strong>wohnt</strong> in …'],
                ['wir', '<strong>kommen</strong> aus …', '<strong>wohnen</strong> in …']
              ]) +
              '<p class="note">Notice the <em>-t</em> in <em>wohnt</em>, and the <em>-st</em> in <em>kommst</em>, <em>wohnst</em>. These endings come back in every verb you learn.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — where are you from?', [
              ['Anna', 'Woher kommst du?'],
              ['Sıla', 'Ich komme aus der Türkei. Und du?'],
              ['Anna', 'Ich komme aus Deutschland, aber ich wohne in Bonn.'],
              ['Sıla', 'Ich wohne in Köln.']
            ]),
            exercises: exerciseList([
              exInput('Ich komme ___________ der Türkei.', 'aus'),
              exSelect('Ich wohne ___ Berlin.', 'in', ['in', 'aus', 'bei']),
              exInput('Woher ___________ du? (kommen)', 'kommst'),
              exSelect('Ich ___ in Köln. (wohnen)', 'wohne', ['wohne', 'wohnst', 'wohnt']),
              exSelect('Er ___ aus Deutschland. (kommen)', 'kommt', ['komme', 'kommst', 'kommt']),
              exInput('Eine Frau aus der Türkei ist eine ___________.', 'Türkin')
            ])
          },
          {
            icon: '🗣️', title: 'Languages you speak',
            explanation:
              '<p>Languages are a favourite topic in German introductions, and they follow an easy pattern. You speak a language with <span class="de">sprechen</span>, and you learn it with <span class="de">lernen</span>. ' +
              'Language names are written with a capital letter and no article: <span class="de">Ich spreche Deutsch und Englisch.</span></p>' +
              '<p><span class="de">sprechen</span> changes its stem vowel in the du and er forms: <em>du sprichst</em>, <em>er spricht</em>. Learn that change now, because it appears with other verbs later.</p>',
            vocab: vocabTable([
              ['sprechen', 'to speak'],
              ['lernen', 'to learn'],
              ['Deutsch', 'German (language)'],
              ['Englisch', 'English (language)'],
              ['Türkisch', 'Turkish (language)'],
              ['ein bisschen', 'a little'],
              ['gut', 'well, good'],
              ['die Sprache', 'the language']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'sprechen'], [
                ['ich', '<strong>spreche</strong>'],
                ['du', '<strong>sprichst</strong>'],
                ['er / sie', '<strong>spricht</strong>'],
                ['wir', '<strong>sprechen</strong>']
              ]) +
              '<div class="example-box">Ich <strong>spreche</strong> Türkisch und Deutsch. · Du <strong>sprichst</strong> gut Englisch. · Ich <strong>lerne</strong> Deutsch.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — languages', [
              ['Lukas', 'Sprichst du Englisch?'],
              ['Sıla', 'Ja, ich spreche gut Englisch. Und du?'],
              ['Lukas', 'Ich spreche ein bisschen Französisch. Ich lerne Deutsch.']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ Türkisch und Deutsch. (sprechen)', 'spreche', ['spreche', 'sprichst', 'spricht']),
              exSelect('Du ___ gut Englisch. (sprechen)', 'sprichst', ['spreche', 'sprichst', 'spricht']),
              exInput('Ich ___________ Deutsch. (lernen)', 'lerne'),
              exSelect('Er ___ Französisch. (sprechen)', 'spricht', ['spreche', 'sprichst', 'spricht']),
              exSelect('Welche Sprache schreibt man groß?', 'Deutsch', ['Deutsch', 'deutsch'], true)
            ])
          },
          {
            icon: '💼', title: 'Job and studies',
            explanation:
              '<p>When you talk about your job, German uses <span class="de">sein</span> directly: <span class="de">Ich bin Lehrerin.</span> No article is needed for jobs. ' +
              'Use <span class="de">als</span> when you want to say what you work <em>as</em>: <span class="de">Ich arbeite als Krankenpfleger.</span></p>' +
              '<p>For a woman, add <em>-in</em> to the job name. Studying is <span class="de">studieren</span>, and the verb follows the regular pattern: <em>ich studiere</em>, <em>du studierst</em>, <em>er studiert</em>. ' +
              'Note the du-form <em>arbeitest</em>, with an extra <em>-e-</em> because the stem ends in <em>-t</em>.</p>',
            vocab: vocabTable([
              ['der Beruf', 'the job, the profession'],
              ['arbeiten', 'to work'],
              ['studieren', 'to study (at university)'],
              ['die Studentin / der Student', 'the student'],
              ['der Lehrer / die Lehrerin', 'the teacher'],
              ['die Ärztin / der Arzt', 'the doctor'],
              ['als', 'as (a job)'],
              ['die Schule', 'the school'],
              ['die Universität', 'the university']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'arbeiten', 'studieren'], [
                ['ich', '<strong>arbeite</strong>', '<strong>studiere</strong>'],
                ['du', '<strong>arbeitest</strong>', '<strong>studierst</strong>'],
                ['er / sie', '<strong>arbeitet</strong>', '<strong>studiert</strong>'],
                ['wir', '<strong>arbeiten</strong>', '<strong>studieren</strong>']
              ]) +
              '<div class="example-box">Ich <strong>bin</strong> Studentin. · Ich <strong>arbeite</strong> als Lehrerin. · Er <strong>studiert</strong> Medizin.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — what do you do?', [
              ['Anna', 'Was machst du beruflich?'],
              ['Sıla', 'Ich bin Studentin. Ich studiere Informatik.'],
              ['Anna', 'Und arbeitest du auch?'],
              ['Sıla', 'Ja, ich arbeite als Kellnerin.']
            ]),
            exercises: exerciseList([
              exInput('Ich bin Lehrer. Eine Frau sagt: Ich bin ___________.', 'Lehrerin'),
              exSelect('Ich arbeite ___ Lehrerin.', 'als', ['als', 'in', 'aus']),
              exInput('Du ___________ viel. (arbeiten)', 'arbeitest'),
              exSelect('Er ___ Medizin. (studieren)', 'studiert', ['studiere', 'studierst', 'studiert']),
              exSelect('„I study engineering" heißt auf Deutsch:', 'Ich studiere Ingenieurwissenschaften.', ['Ich studiere Ingenieurwissenschaften.', 'Ich arbeite Ingenieurwissenschaften.', 'Ich bin Ingenieurwissenschaften.'])
            ])
          },
          {
            icon: '❓', title: 'Asking the same questions back',
            explanation:
              '<p>A conversation is two-way, and German has a small set of question words that do most of the work. The question word always comes first, and the verb is always second: ' +
              '<span class="de">Wie heißt du?</span>, <span class="de">Woher kommst du?</span>, <span class="de">Wo wohnst du?</span>, <span class="de">Wie alt bist du?</span></p>' +
              '<p>The formal question uses <span class="de">Sie</span>, with the verb form for <em>they</em>: <span class="de">Wie heißen Sie?</span> Use the formal version with adults you do not know, and <em>du</em> with friends and people of your age.</p>',
            vocab: vocabTable([
              ['wie', 'how, what'],
              ['wer', 'who'],
              ['woher', 'where from'],
              ['wo', 'where'],
              ['was', 'what'],
              ['wie alt', 'how old'],
              ['Wie heißen Sie?', 'What is your name? (formal)'],
              ['Und du?', 'And you?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Question word', 'Question', 'Asks about'], [
                ['<strong>wie</strong>', 'Wie heißt du?', 'the name'],
                ['<strong>woher</strong>', 'Woher kommst du?', 'the origin'],
                ['<strong>wo</strong>', 'Wo wohnst du?', 'the place'],
                ['<strong>wie alt</strong>', 'Wie alt bist du?', 'the age'],
                ['<strong>wer</strong>', 'Wer bist du?', 'the person'],
                ['<strong>was</strong>', 'Was machst du beruflich?', 'the job']
              ]) +
              '<p class="note">In a question, the verb stands in position 2 (after the question word). In a statement, the subject is in position 1 and the verb is in position 2: <span class="de">Ich wohne in Köln.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — exchanging information', [
              ['Lukas', 'Wie heißen Sie?'],
              ['Frau Yılmaz', 'Ich heiße Yılmaz. Und Sie?'],
              ['Lukas', 'Ich heiße Lukas. Woher kommen Sie, Frau Yılmaz?'],
              ['Frau Yılmaz', 'Ich komme aus Izmir.']
            ]),
            exercises: exerciseList([
              exSelect('„What is your name?" (formal) heißt:', 'Wie heißen Sie?', ['Wie heißen Sie?', 'Wie heißt Sie?', 'Was heißt du?']),
              exSelect('„Woher kommst du?" fragt nach:', 'the origin', ['the origin', 'the age', 'the time']),
              exInput('Wo ___________ du? (wohnen)', 'wohnst'),
              exSelect('Welches Fragewort fragt nach dem Alter?', 'Wie alt', ['Wie alt', 'Woher', 'Wer']),
              exInput('Was machst du beruflich? — Ich ___________ Lehrer. (sein)', 'bin')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: sein and heißen, where you come from, languages, jobs and the question words to ask the same things back.</p>',
        exercises: exerciseList([
          exInput('Ich ___________ Sıla. (heißen)', 'heiße'),
          exSelect('Ich ___ 25 Jahre alt.', 'bin', ['bin', 'bist', 'ist']),
          exSelect('Wir ___ Studenten.', 'sind', ['sind', 'bin', 'seid']),
          exInput('Ich komme ___________ der Türkei.', 'aus'),
          exSelect('Ich wohne ___ Berlin.', 'in', ['in', 'aus', 'bei']),
          exInput('Eine Frau aus der Türkei ist eine ___________.', 'Türkin'),
          exSelect('Du ___ gut Englisch. (sprechen)', 'sprichst', ['spreche', 'sprichst', 'spricht']),
          exInput('Ich ___________ Deutsch. (lernen)', 'lerne'),
          exSelect('Ich arbeite ___ Lehrerin.', 'als', ['als', 'in', 'aus']),
          exSelect('Er ___ Medizin. (studieren)', 'studiert', ['studiere', 'studierst', 'studiert']),
          exSelect('„What is your name?" (formal) heißt:', 'Wie heißen Sie?', ['Wie heißen Sie?', 'Wie heißt Sie?', 'Was heißt du?']),
          exInput('Wo ___________ du? (wohnen)', 'wohnst')
        ]),

        reading: {
          intro: 'Three short introductions from a language café board. Read for the name, age, origin, city, job and languages of each person.',
          words: 110, minutes: 4,
          text: readingText('Wer ist wer? Drei Vorstellungen am Schwarzen Brett', [
            'Hallo! Ich heiße Anna Weber. Ich bin 24 Jahre alt und komme aus Hamburg. Ich wohne jetzt in Berlin. Ich bin Studentin und spreche Deutsch und Englisch.',
            'Mein Name ist Ben Hofmann. Ich bin Lehrer und arbeite in einer Schule in München. Ich spreche Deutsch, Englisch und ein bisschen Spanisch.',
            'Hallo, ich bin Sofia. Ich komme aus Italien, aber ich wohne in Wien. Ich lerne Deutsch und arbeite als Köchin.'
          ], 'Schwarzes Brett, fiktiv'),
          glossary: vocabTable([
            ['das Schwarze Brett', 'the notice board'],
            ['jetzt', 'now'],
            ['einer / eine / ein', 'a, one (dative form)'],
            ['die Schule', 'the school'],
            ['die Köchin', 'the (female) cook']
          ]),
          questions: exerciseList([
            exInput('Wie alt ist Anna?', '24|24 Jahre|vierundzwanzig'),
            exSelect('Woher kommt Anna?', 'Hamburg', ['Hamburg', 'Berlin', 'Köln']),
            exSelect('Was ist Ben von Beruf?', 'Lehrer', ['Lehrer', 'Student', 'Köchin']),
            exSelect('Welche Sprache spricht Ben nicht?', 'Französisch', ['Englisch', 'Spanisch', 'Französisch']),
            exInput('Wo wohnt Sofia?', 'Wien'),
            exTF('Sofia kommt aus Österreich.', false)
          ])
        },

        listening: {
          title: 'Der erste Kurstag',
          intro: 'The first morning of a language course. Each student introduces themselves. Listen for the name, origin and job of each person.',
          lines: [
            ['Lehrerin', 'Guten Morgen! Ich bin Frau Berger. Und Sie?'],
            ['Miguel', 'Guten Morgen, ich heiße Miguel. Ich komme aus Mexiko.'],
            ['Lehrerin', 'Schön! Und Sie, woher kommen Sie?'],
            ['Aiko', 'Ich heiße Aiko und komme aus Japan. Ich wohne in Bonn und spreche Japanisch und Englisch.'],
            ['Lehrerin', 'Sehr gut. Was machen Sie beruflich, Aiko?'],
            ['Aiko', 'Ich bin Ingenieurin.'],
            ['Lehrerin', 'Und du, Miguel?'],
            ['Miguel', 'Ich bin Koch. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.']
          ],
          questions: exerciseList([
            exSelect('Woher kommt Miguel?', 'Mexiko', ['Mexiko', 'Japan', 'Spanien']),
            exInput('Was ist Aiko von Beruf?', 'Ingenieurin'),
            exSelect('Wo wohnt Aiko?', 'Bonn', ['Bonn', 'Japan', 'Berlin']),
            exTF('Miguel lernt Deutsch, weil er in Deutschland arbeiten möchte.', true),
            exSelect('Welche Sprachen spricht Aiko?', 'Japanisch und Englisch', ['Japanisch und Englisch', 'Deutsch und Französisch', 'Spanisch und Japanisch'])
          ])
        },

        writing: {
          title: 'Eine kurze Vorstellung im Kurs',
          textType: 'Kurze Vorstellung (drei bis fünf Sätze)',
          minWords: 35, maxWords: 60, minutes: 15,
          expect: ['greeting', 'self-intro', 'farewell'],
          task: '<p>Am ersten Kurstag stellen sich alle kurz vor. Schreiben Sie Ihre Vorstellung für die Kursliste.</p>' +
            '<p class="note">On the first day of the course everyone introduces themselves. Write your short introduction for the course list.</p>',
          plainTask: 'Write a short self-introduction in German (35–60 words) for a course list. Include: a greeting; your name; your age; where you come from and where you live; your job or what you study; one language you speak; a closing phrase.',
          bullets: [
            'Beginnen Sie mit einem <strong>Gruß</strong>: Hallo! oder Guten Tag!',
            'Sagen Sie Ihren <strong>Namen</strong> und Ihr <strong>Alter</strong>.',
            'Sagen Sie, <strong>woher</strong> Sie kommen und <strong>wo</strong> Sie wohnen.',
            'Nennen Sie Ihren <strong>Beruf</strong> oder was Sie studieren.',
            'Nennen Sie <strong>eine Sprache</strong>, die Sie sprechen.',
            'Verabschieden Sie sich.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Gruß', 'Guten Tag! · Hallo! · Hallo zusammen!'],
            ['Name und Alter', 'Ich heiße … · Ich bin … Jahre alt.'],
            ['Herkunft', 'Ich komme aus … · Ich wohne in …'],
            ['Beruf', 'Ich bin … · Ich arbeite als … · Ich studiere …'],
            ['Sprache', 'Ich spreche … · Ich lerne Deutsch.'],
            ['Abschied', 'Auf Wiedersehen! · Ich freue mich auf den Kurs!']
          ]),
          criteria: [
            'Ich beginne mit einem Gruß.',
            'Ich nenne meinen Namen und mein Alter.',
            'Ich sage, woher ich komme und wo ich wohne.',
            'Ich nenne meinen Beruf oder was ich studiere.',
            'Ich nenne eine Sprache, die ich spreche.',
            'Ich verabschiede mich.',
            'Ich liege zwischen 35 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Handshakes and eye contact matter.</strong> In a first meeting, Germans shake hands with a firm but short grip, and they look at the person they are greeting. ' +
          'Use <em>Guten Tag</em> in formal settings and <em>Hallo</em> with friends.</p>' +
          '<p><strong>Sie or du?</strong> German has two words for "you". Use <em>Sie</em> with adults you do not know, in offices and at work, until you are invited to switch. ' +
          'Use <em>du</em> with children, friends and people your age in informal settings. When in doubt, use <em>Sie</em>.</p>' +
          '<p><strong>Where are you from?</strong> Germans often ask <em>Woher kommst du?</em> as a friendly opener. It is normal, but a follow-up like <em>Und woher kommen deine Eltern?</em> can feel intrusive. Answer with the city or country you live in if you prefer.</p>' +
          '<p><strong>Regional greetings.</strong> In Bavaria and Austria people often say <em>Grüß Gott</em> or <em>Servus</em> instead of <em>Guten Tag</em> or <em>Hallo</em>. Both are polite, and you will hear them everywhere in the south.</p>',

        recap: [
          { group: '🙋 Sich vorstellen', rows: [
            ['ich heiße', 'my name is'],
            ['ich bin … Jahre alt', 'I am … years old'],
            ['wie heißt du?', 'what is your name?'],
            ['wie heißen Sie?', 'what is your name? (formal)'],
            ['wie alt bist du?', 'how old are you?'],
            ['der Name', 'the name'],
            ['das Alter', 'the age'],
            ['sein', 'to be'],
            ['heißen', 'to be called']
          ] },
          { group: '🌍 Herkunft und Wohnort', rows: [
            ['kommen aus', 'to come from'],
            ['wohnen in', 'to live in'],
            ['woher?', 'where from?'],
            ['wo?', 'where?'],
            ['die Stadt', 'the city'],
            ['das Land', 'the country'],
            ['die Türkei', 'Turkey'],
            ['Deutschland', 'Germany'],
            ['der Türke / die Türkin', 'the Turkish man / woman']
          ] },
          { group: '🗣️ Sprachen', rows: [
            ['sprechen', 'to speak'],
            ['lernen', 'to learn'],
            ['Deutsch', 'German (language)'],
            ['Englisch', 'English (language)'],
            ['Türkisch', 'Turkish (language)'],
            ['ein bisschen', 'a little'],
            ['die Sprache', 'the language']
          ] },
          { group: '💼 Beruf und Studium', rows: [
            ['der Beruf', 'the job'],
            ['arbeiten', 'to work'],
            ['studieren', 'to study'],
            ['die Studentin', 'the (female) student'],
            ['der Lehrer / die Lehrerin', 'the teacher'],
            ['die Ärztin / der Arzt', 'the doctor'],
            ['als', 'as (a job)'],
            ['die Universität', 'the university']
          ] }
        ],

        sentences: [
          { de: 'Ich heiße Sıla und bin 25 Jahre alt', en: 'My name is Sıla and I am 25 years old' },
          { de: 'Ich komme aus der Türkei', en: 'I come from Turkey' },
          { de: 'Ich wohne in Berlin', en: 'I live in Berlin' },
          { de: 'Ich spreche Türkisch und Deutsch', en: 'I speak Turkish and German' },
          { de: 'Ich arbeite als Lehrerin', en: 'I work as a teacher' },
          { de: 'Wie heißt du?', en: 'What is your name? (informal)' }
        ]
      },

      { // ===== UNIT 4 — written out in full =====
        title: '🔢 Unit 4 — Numbers, Time and Dates',
        subject: 'Zahlen, Uhrzeit und Datum',
        canDo: ['Say and understand numbers, times and dates in everyday conversation',
                'Exchange phone numbers, prices and addresses clearly'],
        grammarFocus: ['Cardinal numbers 0–100 and the reversed pattern (einundzwanzig)', 'Ordinal numbers for dates (der erste Mai)',
                       'Time prepositions am, im, um'],
        topics: [
          {
            icon: '1️⃣', title: 'Numbers 0–100 and beyond',
            explanation:
              '<p>Numbers from 0 to 12 each have their own word. From 13 to 19 the pattern is the number plus <span class="de">-zehn</span>. From 20 onwards German does something English speakers find strange: ' +
              'it puts the <em>units</em> first and joins them with <span class="de">und</span>. So <span class="de">einundzwanzig</span> is literally "one-and-twenty", and <span class="de">dreiundvierzig</span> is "three-and-forty".</p>' +
              '<p>Count in tens with <span class="de">-zig</span> (<span class="de">zwanzig, dreißig, vierzig</span>), and note that <em>dreißig</em> (30) is the one ten spelled with ß instead of <em>-zig</em> after a normal <em>z</em>. ' +
              'When you count alone, <em>ein</em> becomes <span class="de">eins</span>. Before a noun it is just <span class="de">ein</span>: <span class="de">eins, zwei, drei</span> — but <span class="de">ein Euro</span>.</p>',
            vocab: vocabTable([
              ['null', '0'],
              ['eins / ein', '1 (alone / before a noun)'],
              ['zwölf', '12'],
              ['dreizehn', '13'],
              ['siebzehn', '17'],
              ['zwanzig', '20'],
              ['einundzwanzig', '21'],
              ['dreißig', '30'],
              ['hundert', '100'],
              ['tausend', '1000'],
              ['plus / minus', 'plus / minus'],
              ['ist', 'is (in sums: equals)']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Number', 'Word', 'Pattern'], [
                ['13–19', 'dreizehn, siebzehn', 'unit + zehn'],
                ['21, 32, 45', 'einundzwanzig, zweiunddreißig, fünfundvierzig', 'unit + und + ten'],
                ['100', 'hundert', 'no "ein" before it in everyday speech'],
                ['1000', 'tausend', '—']
              ]) +
              '<div class="example-box">Zehn plus zwei ist zwölf. · Ich bin <strong>dreiundzwanzig</strong> Jahre alt. · Das kostet <strong>einen</strong> Euro.</div>' +
              '<p class="note">Spell the tens carefully: <em>dreißig</em> (30) has the ß, but <em>dreizehn</em> (13) does not.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — counting', [
              ['Lehrer', 'Zehn plus zwei ist?'],
              ['Sıla', 'Zwölf!'],
              ['Lehrer', 'Und dreißig minus zehn?'],
              ['Sıla', 'Zwanzig.']
            ]),
            exercises: exerciseList([
              exSelect('Wie schreibt man 21 auf Deutsch?', 'einundzwanzig', ['einundzwanzig', 'zwanzigeins', 'einsundzwanzig']),
              exInput('Die Zahl 12 auf Deutsch: ___________', 'zwölf'),
              exSelect('Welche Zahl ist „dreizehn"?', '13', ['3', '13', '30']),
              exInput('Die Zahl 30 auf Deutsch: ___________', 'dreißig'),
              exSelect('„hundert" bedeutet:', '100', ['10', '100', '1000']),
              exSelect('Welche Zahl ist „siebzehn"?', '17', ['7', '17', '70']),
              exInput('Zehn plus zwei ist ___________.', 'zwölf')
            ])
          },
          {
            icon: '🕐', title: 'Telling the time',
            explanation:
              '<p>Ask the time with <span class="de">Wie spät ist es?</span> and answer with <span class="de">Es ist …</span>. In everyday speech German uses <em>halb</em> for the half hour, but it means the half hour <em>before</em> the next full hour: ' +
              '<span class="de">halb drei</span> is 2:30, not 3:30.</p>' +
              '<p>Quarter hours use <span class="de">Viertel</span>: <span class="de">Viertel nach drei</span> is 3:15 and <span class="de">Viertel vor vier</span> is 3:45. Minutes past and to the hour use <span class="de">nach</span> and <span class="de">vor</span>: ' +
              '<span class="de">fünf nach zwei</span> is 2:05. The official 24-hour clock is used on trains, timetables and in writing: 14:30 Uhr.</p>',
            vocab: vocabTable([
              ['die Uhrzeit', 'the time of day'],
              ['die Stunde', 'the hour'],
              ['die Minute', 'the minute'],
              ['halb', 'half (before the next hour)'],
              ['das Viertel', 'the quarter'],
              ['nach', 'past'],
              ['vor', 'to (before the hour)'],
              ['Wie spät ist es?', 'What time is it?'],
              ['Es ist …', 'It is …'],
              ['um … Uhr', 'at … o\'clock']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Time', 'Everyday', 'Official'], [
                ['2:30', 'halb drei', '14:30 Uhr'],
                ['3:15', 'Viertel nach drei', '15:15 Uhr'],
                ['3:45', 'Viertel vor vier', '15:45 Uhr'],
                ['2:05', 'fünf nach zwei', '14:05 Uhr']
              ]) +
              '<p><strong>um</strong> + time answers "at what time": <span class="de">Der Kurs beginnt <strong>um</strong> 18 Uhr.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the train station', [
              ['Lukas', 'Entschuldigung, wie spät ist es?'],
              ['Sıla', 'Es ist halb drei.'],
              ['Lukas', 'Der Zug fährt um Viertel vor vier, oder?'],
              ['Sıla', 'Ja, genau.']
            ]),
            exercises: exerciseList([
              exSelect('„Es ist halb drei" bedeutet:', '2:30', ['2:30', '3:30', '3:00']),
              exSelect('„Viertel nach drei" ist:', '3:15', ['3:15', '3:45', '2:45']),
              exSelect('„Viertel vor vier" ist:', '3:45', ['3:15', '3:45', '4:15']),
              exInput('Es ist 14:30 Uhr. Umgangssprachlich: „Es ist ___________ drei."', 'halb'),
              exSelect('Welches Wort passt? „Der Kurs beginnt ___ 18 Uhr."', 'um', ['um', 'am', 'im']),
              exSelect('„Wie spät ist es?" bedeutet:', 'What time is it?', ['What time is it?', 'How old is it?', 'What day is it?'])
            ])
          },
          {
            icon: '📅', title: 'Days, months, seasons',
            explanation:
              '<p>Days, months and seasons are all masculine in German, and that decides which little word comes before them. ' +
              'For a day of the week, use <span class="de">am</span>: <span class="de">am Montag</span> (on Monday). For a month or a season, use <span class="de">im</span>: <span class="de">im Juli</span> (in July), <span class="de">im Sommer</span> (in summer).</p>' +
              '<p>The week starts on Monday in German, and the weekdays are <span class="de">Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag</span>. ' +
              'Note that Samstag is the usual word in most of Germany, while Sonnabend is common in the north.</p>',
            vocab: vocabTable([
              ['der Montag', 'Monday'],
              ['der Samstag', 'Saturday'],
              ['der Sonntag', 'Sunday'],
              ['das Wochenende', 'the weekend'],
              ['der Januar', 'January'],
              ['der Juli', 'July'],
              ['der Dezember', 'December'],
              ['der Frühling', 'spring'],
              ['der Sommer', 'summer'],
              ['der Herbst', 'autumn'],
              ['der Winter', 'winter']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Word', 'Use', 'Example'], [
                ['<strong>am</strong>', 'days of the week', '<span class="de">am Montag, am Wochenende</span>'],
                ['<strong>im</strong>', 'months and seasons', '<span class="de">im Juli, im Sommer, im Winter</span>']
              ]) +
              '<div class="example-box">Am Sonntag schlafe ich lange. · Im Juli fahren wir ans Meer. · Im Winter ist es kalt.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — planning', [
              ['Anna', 'Wann hast du Zeit?'],
              ['Sıla', 'Am Samstag habe ich Zeit.'],
              ['Anna', 'Und im Juli?'],
              ['Sıla', 'Im Juli fahre ich nach Hause.']
            ]),
            exercises: exerciseList([
              exSelect('„am Montag" heißt auf Englisch:', 'on Monday', ['on Monday', 'in Monday', 'at Monday']),
              exSelect('Welche Präposition passt? „___ Juli fahren wir ans Meer."', 'Im', ['Im', 'Am', 'Um'], true),
              exInput('„Im ___________ ist es warm." (Jahreszeit)', 'Sommer'),
              exSelect('Welches Wort ist ein Monat?', 'März', ['Montag', 'März', 'Sommer']),
              exSelect('„Im Winter" heißt:', 'in winter', ['in winter', 'on winter', 'at winter']),
              exSelect('Der erste Wochentag ist:', 'Montag', ['Montag', 'Sonntag', 'Samstag'])
            ])
          },
          {
            icon: '🎂', title: 'Dates and birthdays',
            explanation:
              '<p>To name a date, German uses ordinal numbers (<em>the first, the second, the third</em>) with the day first and the month second: <span class="de">Heute ist der erste Mai.</span> ' +
              'In writing, a date is <span class="de">3. März</span> — the number is followed by a full stop, which marks it as an ordinal.</p>' +
              '<p>For a birthday, use <span class="de">am</span> with the date: <span class="de">Mein Geburtstag ist am 3. März.</span> Ordinals up to ten are: <span class="de">erste, zweite, dritte, vierte, fünfte, sechste, siebte, achte, neunte, zehnte</span>.</p>',
            vocab: vocabTable([
              ['das Datum', 'the date'],
              ['der Geburtstag', 'the birthday'],
              ['heute', 'today'],
              ['morgen', 'tomorrow'],
              ['gestern', 'yesterday'],
              ['der erste', 'the first'],
              ['der zweite', 'the second'],
              ['der dritte', 'the third'],
              ['der zehnte', 'the tenth']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Date', 'German', 'Note'], [
                ['1 May', 'der <strong>erste</strong> Mai', 'erste — the only irregular ordinal'],
                ['3 March', 'der <strong>dritte</strong> März', 'written 3. März'],
                ['birthday on 3 March', 'Mein Geburtstag ist <strong>am 3. März</strong>.', 'am + date for a fixed day']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — birthday', [
              ['Anna', 'Wann ist dein Geburtstag?'],
              ['Sıla', 'Mein Geburtstag ist am 3. März.'],
              ['Anna', 'Welcher Tag ist heute?'],
              ['Sıla', 'Heute ist der zehnte Oktober.']
            ]),
            exercises: exerciseList([
              exSelect('„Heute ist der erste Mai." Was bedeutet „erste"?', 'first', ['first', 'second', 'fifth']),
              exInput('Der dritte Tag heißt: der ___________ Tag. (Ordinalzahl)', 'dritte'),
              exSelect('Mein Geburtstag ist ___ 3. März.', 'am', ['am', 'im', 'um']),
              exSelect('Welche Schreibweise ist ein Datum?', '3. März', ['3. März', 'march 3', '3/March']),
              exInput('Heute ist der zehnte Oktober. Die Zahl heißt: der ___________.', 'zehnte')
            ])
          },
          {
            icon: '📞', title: 'Phone numbers, prices, addresses',
            explanation:
              '<p>Phone numbers are read out digit by digit, with a short pause between groups. Each digit gets its own word, including <span class="de">null</span> for 0 and <span class="de">eins</span> for 1. ' +
              'Prices use <span class="de">Euro</span> and <span class="de">Cent</span>. In an address, the house number comes <em>after</em> the street name: <span class="de">Hauptstraße 12</span>.</p>' +
              '<p>In a price, the euros come first and the cents after: <span class="de">zehn Euro fünfzig</span> is €10.50. In writing it is written 10,50 €, with a comma as the decimal point.</p>',
            vocab: vocabTable([
              ['die Nummer', 'the number'],
              ['die Telefonnummer', 'the phone number'],
              ['der Preis', 'the price'],
              ['kosten', 'to cost'],
              ['der Euro / der Cent', 'euro / cent'],
              ['die Adresse', 'the address'],
              ['die Hausnummer', 'the house number'],
              ['die Straße', 'the street']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Item', 'German', 'Written'], [
                ['phone', 'null, eins, sieben, eins', '0171 …'],
                ['price', 'zehn Euro fünfzig', '10,50 €'],
                ['address', 'Hauptstraße zwölf', 'Hauptstraße 12']
              ]) +
              '<p class="note">Germans say "Null" for the zero at the start of a phone number. Spoken numbers come slowly, so ask <span class="de">Können Sie die Nummer bitte wiederholen?</span> if you miss one.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — prices', [
              ['Verkäuferin', 'Das kostet 12 Euro 50.'],
              ['Sıla', 'Gut, ich nehme es.'],
              ['Verkäuferin', 'Ihre Telefonnummer, bitte?'],
              ['Sıla', 'Null, eins, fünf, zwei, drei, vier, fünf, sechs.']
            ]),
            exercises: exerciseList([
              exSelect('Wie liest man „0171" am Telefon?', 'null, eins, sieben, eins', ['null, eins, sieben, eins', 'null, hundertsiebzig, eins', 'null, elf, siebzig']),
              exSelect('„Das kostet zehn Euro fünfzig." Das bedeutet:', '10,50 €', ['10,50 €', '10,05 €', '15,00 €']),
              exInput('Zwei Euro zwanzig heißt: zwei Euro ___________.', 'zwanzig'),
              exSelect('Wo steht die Hausnummer in einer Adresse?', 'nach dem Straßennamen', ['nach dem Straßennamen', 'vor dem Namen', 'vor dem Ort']),
              exInput('Das Wort für „price" ist der ___________.', 'Preis')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: numbers, telling the time, days and months, dates, and prices and phone numbers.</p>',
        exercises: exerciseList([
          exSelect('Wie schreibt man 21 auf Deutsch?', 'einundzwanzig', ['einundzwanzig', 'zwanzigeins', 'einsundzwanzig']),
          exInput('Die Zahl 30 auf Deutsch: ___________', 'dreißig'),
          exSelect('„Es ist halb drei" bedeutet:', '2:30', ['2:30', '3:30', '3:00']),
          exSelect('„Viertel vor vier" ist:', '3:45', ['3:15', '3:45', '4:15']),
          exSelect('Welches Wort passt? „Der Kurs beginnt ___ 18 Uhr."', 'um', ['um', 'am', 'im']),
          exSelect('„am Montag" heißt auf Englisch:', 'on Monday', ['on Monday', 'in Monday', 'at Monday']),
          exInput('Wir fahren ___________ Juli ans Meer. (Präposition)', 'im'),
          exInput('Im ___________ ist es kalt. (Jahreszeit)', 'Winter'),
          exSelect('Mein Geburtstag ist ___ 3. März.', 'am', ['am', 'im', 'um']),
          exInput('Heute ist der erste Mai. Das Wort für „first": der ___________.', 'erste'),
          exSelect('„Das kostet zehn Euro fünfzig." Das bedeutet:', '10,50 €', ['10,50 €', '10,05 €', '15,00 €']),
          exInput('Zehn Euro und fünfzig Cent: zehn Euro ___________.', 'fünfzig|fuenfzig'),
        ]),

        reading: {
          intro: 'A short weekly schedule. Read for the days, times, prices and dates.',
          words: 100, minutes: 4,
          text: readingText('Mein Wochenplan im September', [
            'Mein Deutschkurs beginnt am Montag, dem 2. September, um 18 Uhr. Er findet jeden Montag und Mittwoch statt und endet um halb acht.',
            'Der Kurs kostet 180 Euro im Monat. Das Lehrbuch kostet zusätzlich 24 Euro 90.',
            'Am Freitag habe ich um zehn Uhr einen Termin bei der Ärztin. Die Praxis ist in der Hauptstraße 12.',
            'Im Sommer habe ich Urlaub. Im Juli fahre ich nach Italien, im August bleibe ich in Berlin.'
          ], 'Persönlicher Plan, fiktiv'),
          glossary: vocabTable([
            ['der Termin', 'the appointment'],
            ['die Praxis', 'the doctor\'s office'],
            ['zusätzlich', 'in addition'],
            ['der Urlaub', 'the holiday'],
            ['endet', 'ends']
          ]),
          questions: exerciseList([
            exSelect('Wann beginnt der Kurs?', 'am Montag, dem 2. September, um 18 Uhr', ['am Montag, dem 2. September, um 18 Uhr', 'am Freitag, dem 2. September, um 10 Uhr', 'im Juli, um 18 Uhr']),
            exInput('Um wie viel Uhr endet der Kurs? (halb acht = 19:30)', '19:30|halb acht|7:30|sieben uhr dreißig|19 uhr 30'),
            exInput('Wie viel kostet der Kurs im Monat? (in Euro)', '180'),
            exSelect('Wann hat die Person einen Arzttermin?', 'am Freitag um zehn Uhr', ['am Freitag um zehn Uhr', 'am Montag um zehn Uhr', 'im Juli um zehn Uhr']),
            exTF('Im August fährt die Person nach Italien.', false),
            exSelect('In welchem Monat fährt die Person nach Italien?', 'Juli', ['Juli', 'August', 'Juni'])
          ])
        },

        listening: {
          title: 'Anruf bei der Sprachschule',
          intro: 'A phone call to ask about a course. Listen for the start day, the time, the price and the phone number.',
          lines: [
            ['Sekretärin', 'Sprachschule Lingua, guten Tag.'],
            ['Anrufer', 'Guten Tag. Ich möchte mich für einen Kurs anmelden. Wann beginnt er?'],
            ['Sekretärin', 'Der nächste Kurs beginnt am Dienstag, dem 14. Oktober, um 9 Uhr.'],
            ['Anrufer', 'Um neun Uhr? Das ist früh. Gibt es auch einen Abendkurs?'],
            ['Sekretärin', 'Ja, um halb sieben am Abend, montags und donnerstags.'],
            ['Anrufer', 'Was kostet der Kurs?'],
            ['Sekretärin', 'Er kostet 240 Euro. Dazu kommen 35 Euro für das Buch.'],
            ['Anrufer', 'Gut. Meine Nummer ist null, eins, sieben, eins, drei, vier, fünf, sechs, sieben.'],
            ['Sekretärin', 'Danke. Wir rufen Sie am Freitag an.']
          ],
          questions: exerciseList([
            exSelect('Wann beginnt der Kurs am Morgen?', 'am Dienstag, dem 14. Oktober, um 9 Uhr', ['am Dienstag, dem 14. Oktober, um 9 Uhr', 'am Montag, dem 14. Oktober, um 9 Uhr', 'am Dienstag, dem 14. Oktober, um 19 Uhr']),
            exSelect('Wann findet der Abendkurs statt?', 'um halb sieben, montags und donnerstags', ['um halb sieben, montags und donnerstags', 'um neun Uhr, dienstags', 'um halb sieben, am Wochenende']),
            exInput('Was kostet der Kurs? (in Euro)', '240'),
            exSelect('Was kostet das Buch?', '35 Euro', ['35 Euro', '240 Euro', '275 Euro']),
            exInput('An welchem Wochentag ruft die Sekretärin an?', 'Freitag')
          ])
        },

        writing: {
          title: 'Terminbestätigung per E-Mail',
          textType: 'Kurze E-Mail mit Datum und Uhrzeit',
          minWords: 25, maxWords: 45, minutes: 15,
          expect: ['greeting', 'farewell'],
          task: '<p>Sie haben einen Termin bei Frau Berger am Donnerstag, dem 5. Juni, um 10:30 Uhr. Schreiben Sie eine kurze E-Mail und bestätigen Sie den Termin.</p>' +
            '<p class="note">You have an appointment with Frau Berger on Thursday 5 June at 10:30. Write a short e-mail to confirm it.</p>',
          plainTask: 'Write a short e-mail in German (25–45 words) to confirm an appointment with Frau Berger on Thursday, 5 June, at 10:30. Include a greeting, the day, the date and the time, your phone number written out in words or digits, and a closing phrase.',
          bullets: [
            'Beginnen Sie mit einer <strong>Anrede</strong>: Sehr geehrte Frau Berger,',
            'Bestätigen Sie den <strong>Wochentag</strong>, das <strong>Datum</strong> und die <strong>Uhrzeit</strong>.',
            'Nennen Sie eine <strong>Telefonnummer</strong> für Rückfragen.',
            'Verabschieden Sie sich höflich.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Frau Berger, · Guten Tag, Frau Berger,'],
            ['Bestätigung', 'Ich bestätige meinen Termin am … · Ich komme am … um … Uhr.'],
            ['Rückfrage', 'Meine Telefonnummer ist … · Bei Fragen erreichen Sie mich unter …'],
            ['Abschied', 'Vielen Dank! · Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich nenne den Wochentag, das Datum und die Uhrzeit.',
            'Ich verwende die richtige Präposition: am Donnerstag, am 5. Juni, um 10:30 Uhr.',
            'Ich nenne eine Telefonnummer.',
            'Ich verabschiede mich höflich.',
            'Ich liege zwischen 25 und 45 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Dates go day, month, year.</strong> German writes a date as <span class="de">3.3.2026</span> or <span class="de">3. März 2026</span>, with dots after the day and the month. ' +
          'Always write the day first; in Germany a date written as 03/05 means the 3rd of May, not 5 March.</p>' +
          '<p><strong>Two clocks, two registers.</strong> Trains, timetables, radio and official forms use the 24-hour clock (<span class="de">14:30 Uhr</span>). In conversation people use the 12-hour clock with <em>halb</em>, <em>Viertel</em> and <em>nach</em>. Both are correct; match the situation.</p>' +
          '<p><strong>Prices use a comma.</strong> In Germany, 10,50 € means ten euros and fifty cents. The euro sign goes after the number, with a space. A decimal point (10.50) looks wrong to a German reader.</p>' +
          '<p><strong>Shops are often closed on Sundays.</strong> Germany has strict Sunday opening rules, so most shops are closed, and you should plan your shopping for Saturday. Pharmacies and some bakeries have rotating opening times.</p>',

        recap: [
          { group: '1️⃣ Zahlen', rows: [
            ['null', '0'],
            ['eins', '1'],
            ['zwölf', '12'],
            ['dreizehn', '13'],
            ['siebzehn', '17'],
            ['zwanzig', '20'],
            ['einundzwanzig', '21'],
            ['dreißig', '30'],
            ['hundert', '100'],
            ['tausend', '1000']
          ] },
          { group: '🕐 Uhrzeit', rows: [
            ['wie spät ist es?', 'what time is it?'],
            ['es ist …', 'it is …'],
            ['halb drei', '2:30'],
            ['Viertel nach drei', '3:15'],
            ['Viertel vor vier', '3:45'],
            ['fünf nach zwei', '2:05'],
            ['um … Uhr', 'at … o\'clock'],
            ['die Stunde', 'the hour'],
            ['die Minute', 'the minute']
          ] },
          { group: '📅 Tage, Monate, Jahreszeiten', rows: [
            ['der Montag', 'Monday'],
            ['der Samstag', 'Saturday'],
            ['der Sonntag', 'Sunday'],
            ['das Wochenende', 'the weekend'],
            ['der Juli', 'July'],
            ['der Dezember', 'December'],
            ['der Frühling', 'spring'],
            ['der Sommer', 'summer'],
            ['der Herbst', 'autumn'],
            ['der Winter', 'winter'],
            ['am / im', 'on (days) / in (months, seasons)']
          ] },
          { group: '🎂 Datum', rows: [
            ['das Datum', 'the date'],
            ['der Geburtstag', 'the birthday'],
            ['heute', 'today'],
            ['morgen', 'tomorrow'],
            ['gestern', 'yesterday'],
            ['der erste', 'the first'],
            ['der dritte', 'the third'],
            ['der zehnte', 'the tenth']
          ] },
          { group: '📞 Telefon, Preis, Adresse', rows: [
            ['die Telefonnummer', 'the phone number'],
            ['der Preis', 'the price'],
            ['kosten', 'to cost'],
            ['der Euro', 'euro'],
            ['der Cent', 'cent'],
            ['die Adresse', 'the address'],
            ['die Hausnummer', 'the house number'],
            ['die Straße', 'the street']
          ] }
        ],

        sentences: [
          { de: 'Es ist halb drei', en: 'It is half past two' },
          { de: 'Der Kurs beginnt um 18 Uhr', en: 'The course starts at 6 pm' },
          { de: 'Am Montag habe ich Zeit', en: 'I have time on Monday' },
          { de: 'Im Juli fahre ich nach Italien', en: 'In July I am travelling to Italy' },
          { de: 'Mein Geburtstag ist am 3. März', en: 'My birthday is on 3 March' },
          { de: 'Das kostet zehn Euro fünfzig', en: 'That costs ten euros fifty' }
        ]
      },

      { // ===== UNIT 5 — written out in full =====
        title: '👨‍👩‍👧 Unit 5 — Family and People',
        subject: 'Familie und Menschen',
        canDo: ['Describe your family and who you live with',
                'Say how old people are, what they do and what they are like'],
        grammarFocus: ['Possessive articles mein / dein / sein / ihr', 'Accusative with haben (einen / eine / ein)', 'Negation with kein / keine / keinen'],
        topics: [
          {
            icon: '🏡', title: 'Family members',
            explanation:
              '<p>German family words come in matching pairs, with the masculine form for the man and a feminine form for the woman: <span class="de">der Vater / die Mutter</span>, <span class="de">der Bruder / die Schwester</span>, ' +
              '<span class="de">der Sohn / die Tochter</span>. The plural forms are worth learning straight away, because families come in groups: <span class="de">die Eltern</span> (parents), <span class="de">die Geschwister</span> (siblings), <span class="de">die Kinder</span> (children).</p>' +
              '<p>Grandparents are <span class="de">die Großeltern</span>, and in everyday speech people say <span class="de">Oma</span> and <span class="de">Opa</span>. To say <em>my</em> family member, you need the possessive article: ' +
              '<span class="de">mein Bruder</span>, <span class="de">meine Schwester</span>, <span class="de">meine Eltern</span>. It follows the noun, as you will see in the grammar box.</p>',
            vocab: vocabTable([
              ['die Familie', 'the family'],
              ['die Eltern', 'the parents'],
              ['der Vater', 'the father'],
              ['die Mutter', 'the mother'],
              ['die Geschwister', 'the siblings'],
              ['der Bruder', 'the brother'],
              ['die Schwester', 'the sister'],
              ['der Sohn / die Tochter', 'the son / the daughter'],
              ['das Kind / die Kinder', 'the child / the children'],
              ['die Großeltern', 'the grandparents'],
              ['die Oma / der Opa', 'grandma / grandpa'],
              ['der Onkel / die Tante', 'the uncle / the aunt']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Owner', 'masculine / neuter', 'feminine / plural'], [
                ['ich', '<strong>mein</strong> Bruder, mein Kind', '<strong>meine</strong> Schwester, meine Eltern'],
                ['du', '<strong>dein</strong> Bruder, dein Kind', '<strong>deine</strong> Schwester, deine Eltern'],
                ['er', '<strong>sein</strong> Bruder, sein Kind', '<strong>seine</strong> Schwester, seine Eltern'],
                ['sie', '<strong>ihr</strong> Bruder, ihr Kind', '<strong>ihre</strong> Schwester, ihre Eltern']
              ]) +
              '<p class="note">The ending depends on the <em>noun</em>, not on the owner: feminine and plural nouns take <em>-e</em>. Whether you say <em>sein</em> or <em>ihr</em> depends on who the owner is: <span class="de">Das ist Tom. Sein Bruder heißt Max.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — meeting the family', [
              ['Anna', 'Wer ist das?'],
              ['Sıla', 'Das ist meine Schwester Deniz.'],
              ['Anna', 'Und der Mann hier?'],
              ['Sıla', 'Das ist mein Vater. Meine Eltern wohnen in Izmir.']
            ]),
            exercises: exerciseList([
              exSelect('Mutter und Vater sind zusammen die:', 'Eltern', ['Eltern', 'Geschwister', 'Großeltern']),
              exSelect('Bruder und Schwester sind zusammen die:', 'Geschwister', ['Eltern', 'Geschwister', 'Kinder']),
              exInput('Die Mutter meiner Mutter ist meine ___________.', 'Großmutter|Oma'),
              exSelect('„___ Bruder heißt Max."', 'Mein', ['Mein', 'Meine', 'Meinen']),
              exSelect('„___ Schwester heißt Anna."', 'Meine', ['Mein', 'Meine', 'Meinen']),
              exSelect('„___ Eltern wohnen in Bonn."', 'Meine', ['Mein', 'Meine', 'Meinem']),
              exInput('Mein Sohn und meine Tochter sind meine ___________. (Plural)', 'Kinder')
            ])
          },
          {
            icon: '🧬', title: 'Talking about relatives',
            explanation:
              '<p>To say you have a relative, use <span class="de">haben</span> plus the person: <span class="de">Ich habe einen Bruder.</span> The thing you have is in the <strong>accusative</strong>, and the only article that visibly changes is the masculine one: ' +
              '<span class="de">ein Bruder</span> becomes <span class="de">einen Bruder</span>. Feminine and neuter stay the same: <span class="de">eine Schwester</span>, <span class="de">ein Kind</span>.</p>' +
              '<p>To say you do <em>not</em> have someone, replace <span class="de">ein</span> with <span class="de">kein</span>: <span class="de">Ich habe keinen Bruder.</span>, <span class="de">keine Schwester</span>, <span class="de">kein Kind</span>. ' +
              'The endings are identical to ein-, so the whole system is one pattern.</p>',
            vocab: vocabTable([
              ['haben', 'to have'],
              ['ein / kein', 'a / no'],
              ['Ich habe …', 'I have …'],
              ['Ich habe keine Geschwister.', 'I have no siblings.'],
              ['Hast du Geschwister?', 'Do you have siblings?'],
              ['Wir haben …', 'We have …'],
              ['Ich bin Einzelkind.', 'I am an only child.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'haben'], [
                ['ich', '<strong>habe</strong>'],
                ['du', '<strong>hast</strong>'],
                ['er / sie / es', '<strong>hat</strong>'],
                ['wir', '<strong>haben</strong>'],
                ['ihr', '<strong>habt</strong>'],
                ['sie / Sie', '<strong>haben</strong>']
              ]) +
              formTable('', ['', 'masculine', 'feminine', 'neuter', 'plural'], [
                ['a (accusative)', '<strong>einen</strong> Bruder', 'eine Schwester', 'ein Kind', '—'],
                ['no (accusative)', '<strong>keinen</strong> Bruder', 'keine Schwester', 'kein Kind', 'keine Geschwister']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — siblings', [
              ['Anna', 'Hast du Geschwister?'],
              ['Sıla', 'Ja, ich habe einen Bruder und eine Schwester. Und du?'],
              ['Anna', 'Ich habe keine Geschwister. Ich bin Einzelkind.']
            ]),
            exercises: exerciseList([
              exInput('Ich ___________ einen Bruder. (haben)', 'habe'),
              exInput('Du ___________ eine Schwester. (haben)', 'hast'),
              exSelect('Sie hat ___ Bruder.', 'einen', ['ein', 'einen', 'eine']),
              exSelect('Wir haben ___ Kind. (nein)', 'kein', ['keine', 'kein', 'keinen']),
              exSelect('Ich habe ___ Schwester. (nein)', 'keine', ['kein', 'keine', 'keinen']),
              exSelect('Ich habe ___ Bruder. (nein)', 'keinen', ['kein', 'keine', 'keinen']),
              exSelect('Welcher Satz ist richtig?', 'Ich habe keine Geschwister.', ['Ich habe nicht Geschwister.', 'Ich habe keine Geschwister.', 'Ich habe kein Geschwister.'])
            ])
          },
          {
            icon: '💞', title: 'Marital status and children',
            explanation:
              '<p>Official forms and small talk both use a short list of words for marital status: <span class="de">ledig</span> (single, never married), <span class="de">verheiratet</span> (married), ' +
              '<span class="de">geschieden</span> (divorced) and <span class="de">verwitwet</span> (widowed). They are adjectives used after <span class="de">sein</span>, so they have no ending: <span class="de">Ich bin verheiratet.</span></p>' +
              '<p>For children, use <span class="de">haben</span> and a number. <em>Kind</em> has an irregular plural: <span class="de">ein Kind, zwei Kinder</span>. To talk about a partner, say <span class="de">mein Mann</span> (my husband), <span class="de">meine Frau</span> (my wife), or <span class="de">mein Freund / meine Freundin</span> (my boyfriend / girlfriend).</p>',
            vocab: vocabTable([
              ['ledig', 'single'],
              ['verheiratet', 'married'],
              ['geschieden', 'divorced'],
              ['verwitwet', 'widowed'],
              ['der Mann / die Frau', 'the husband / the wife; the man / the woman'],
              ['der Freund / die Freundin', 'the boyfriend / the girlfriend; the friend'],
              ['der Partner / die Partnerin', 'the partner'],
              ['die Kinder', 'the children'],
              ['zwei Kinder', 'two children']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Ich bin <strong>verheiratet</strong>. · Mein Mann heißt Ali. · <strong>Sein</strong> Name ist Ali. · Wir haben <strong>zwei Kinder</strong>.</div>' +
              '<p class="note">Notice <em>Sein Name</em> (his name) and <em>Ihr Name</em> (her name). Choose <em>sein</em> or <em>ihr</em> by the owner: a man owns <em>sein</em>, a woman owns <em>ihr</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — are you married?', [
              ['Anna', 'Bist du verheiratet?'],
              ['Sıla', 'Nein, ich bin ledig. Aber ich habe einen Freund.'],
              ['Anna', 'Habt ihr Kinder?'],
              ['Sıla', 'Nein, wir haben keine Kinder.']
            ]),
            exercises: exerciseList([
              exSelect('Ein Mann ohne Partnerin ist:', 'ledig', ['ledig', 'verheiratet', 'geschieden']),
              exSelect('„verheiratet" bedeutet:', 'married', ['single', 'married', 'divorced']),
              exInput('Ich habe zwei ___________. (Kind, Plural)', 'Kinder'),
              exSelect('„Wir haben keine Kinder" bedeutet:', 'We have no children', ['We have no children', 'We have three children', 'We are married']),
              exSelect('„Das ist meine Frau. ___ heißt Ayşe."', 'Sie', ['Er', 'Sie', 'Es']),
              exInput('Das ist mein Mann. ___________ Name ist Ali. (his)', 'Sein')
            ])
          },
          {
            icon: '🙂', title: 'Describing a person',
            explanation:
              '<p>At A1 you describe people with a short list of adjectives, used after <span class="de">sein</span>. In this position the adjective takes no ending: <span class="de">Er ist groß.</span>, <span class="de">Sie ist freundlich.</span> ' +
              'Add <span class="de">sehr</span> (very) or <span class="de">ein bisschen</span> (a little) to adjust the strength.</p>' +
              '<p>Appearance uses <span class="de">sein</span> or <span class="de">haben</span>: <span class="de">Er ist groß.</span>, but <span class="de">Sie hat lange Haare.</span> and <span class="de">Er hat blaue Augen.</span> Learn the last two as whole phrases for now.</p>',
            vocab: vocabTable([
              ['groß / klein', 'tall, big / small'],
              ['jung / alt', 'young / old'],
              ['schlank', 'slim'],
              ['blond', 'blond'],
              ['lange / kurze Haare', 'long / short hair'],
              ['blaue / braune Augen', 'blue / brown eyes'],
              ['freundlich', 'friendly'],
              ['nett', 'nice, kind'],
              ['lustig', 'funny'],
              ['ruhig', 'calm, quiet'],
              ['fleißig', 'hard-working'],
              ['sympathisch', 'likeable']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Mein Bruder <strong>ist</strong> sehr groß und nett. · Meine Schwester <strong>hat</strong> lange Haare. · Meine Oma <strong>ist</strong> alt, aber lustig.</div>' +
              '<p class="note">After <em>sein</em> the adjective has no ending. You will meet adjective endings (<em>ein netter Mann</em>) in a later unit.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — who is that?', [
              ['Anna', 'Wie ist dein Bruder?'],
              ['Sıla', 'Er ist groß und sehr nett. Er hat kurze Haare.'],
              ['Anna', 'Und deine Schwester?'],
              ['Sıla', 'Sie ist klein und lustig.']
            ]),
            exercises: exerciseList([
              exSelect('Das Gegenteil von „groß" ist:', 'klein', ['jung', 'klein', 'nett']),
              exSelect('Welches Wort beschreibt den Charakter?', 'freundlich', ['blond', 'freundlich', 'groß']),
              exInput('Das Gegenteil von „alt" ist: ___________.', 'jung'),
              exSelect('„Sie hat lange Haare" bedeutet:', 'She has long hair', ['She has long hair', 'She is tall', 'She is tired']),
              exSelect('„nett" bedeutet:', 'nice, kind', ['nice, kind', 'tall', 'tired'])
            ])
          },
          {
            icon: '🐕', title: 'Pets',
            explanation:
              '<p>Talking about pets uses exactly the same pattern as family: <span class="de">Ich habe einen Hund.</span> and <span class="de">Wir haben eine Katze.</span> ' +
              '<span class="de">der Hund</span> is masculine, so the accusative is <span class="de">einen Hund</span>; <span class="de">die Katze</span> is feminine, so it stays <span class="de">eine Katze</span>. The general word for a pet is <span class="de">das Haustier</span>.</p>' +
              '<p>To give the pet\'s name, use <span class="de">heißen</span>: <span class="de">Mein Hund heißt Bello.</span> And to say you have no pet, use <span class="de">kein</span>: <span class="de">Ich habe kein Haustier.</span></p>',
            vocab: vocabTable([
              ['das Haustier', 'the pet'],
              ['der Hund', 'the dog'],
              ['die Katze', 'the cat'],
              ['der Vogel', 'the bird'],
              ['der Fisch', 'the fish'],
              ['das Pferd', 'the horse'],
              ['heißen', 'to be called'],
              ['süß', 'cute'],
              ['groß / klein', 'big / small']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Noun', 'a …', 'no …'], [
                ['der Hund', 'Ich habe <strong>einen</strong> Hund.', 'Ich habe <strong>keinen</strong> Hund.'],
                ['die Katze', 'Wir haben <strong>eine</strong> Katze.', 'Wir haben <strong>keine</strong> Katze.'],
                ['das Pferd', 'Sie hat <strong>ein</strong> Pferd.', 'Sie hat <strong>kein</strong> Pferd.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — pets', [
              ['Anna', 'Hast du ein Haustier?'],
              ['Sıla', 'Ja, ich habe eine Katze. Sie heißt Mimi.'],
              ['Anna', 'Wie süß! Ich habe einen Hund.']
            ]),
            exercises: exerciseList([
              exSelect('Ich habe ___ Hund.', 'einen', ['ein', 'einen', 'eine']),
              exSelect('Wir haben ___ Katze.', 'eine', ['ein', 'einen', 'eine']),
              exSelect('Ich habe ___ Haustier. (nein)', 'kein', ['kein', 'keine', 'keinen']),
              exInput('Mein Hund ___________ Bello. (heißen)', 'heißt'),
              exSelect('„ein Hund" im Akkusativ:', 'einen Hund', ['ein Hund', 'einen Hund', 'eine Hund'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: family words, mein/meine, haben with einen/eine/ein, kein/keine/keinen, marital status, describing people and pets.</p>',
        exercises: exerciseList([
          exSelect('Mutter und Vater sind zusammen die:', 'Eltern', ['Eltern', 'Geschwister', 'Großeltern']),
          exSelect('„___ Schwester heißt Anna."', 'Meine', ['Mein', 'Meine', 'Meinen']),
          exInput('Ich ___________ einen Bruder. (haben)', 'habe'),
          exInput('Du ___________ eine Schwester. (haben)', 'hast'),
          exSelect('Ich habe ___ Bruder. (nein)', 'keinen', ['kein', 'keine', 'keinen']),
          exSelect('Wir haben ___ Kind. (nein)', 'kein', ['keine', 'kein', 'keinen']),
          exSelect('„verheiratet" bedeutet:', 'married', ['single', 'married', 'divorced']),
          exInput('Ich habe zwei ___________. (Kind, Plural)', 'Kinder'),
          exSelect('„Das ist meine Frau. ___ heißt Ayşe."', 'Sie', ['Er', 'Sie', 'Es']),
          exSelect('Das Gegenteil von „groß" ist:', 'klein', ['jung', 'klein', 'nett']),
          exSelect('Ich habe ___ Hund.', 'einen', ['ein', 'einen', 'eine']),
          exInput('Mein Hund ___________ Bello. (heißen)', 'heißt')
        ]),

        reading: {
          intro: 'A short text about a family. Read for the names, ages, jobs and who lives where.',
          words: 90, minutes: 4,
          text: readingText('Meine Familie', [
            'Ich heiße Elif und bin 28 Jahre alt. Ich bin verheiratet. Mein Mann heißt Murat. Er ist 30 und arbeitet als Ingenieur.',
            'Wir haben eine Tochter. Sie heißt Ayla und ist drei Jahre alt. Wir haben auch einen Hund. Er heißt Max.',
            'Meine Eltern wohnen in Izmir. Mein Bruder ist ledig und wohnt in Berlin.'
          ], 'Persönlicher Text, fiktiv'),
          glossary: vocabTable([
            ['die Tochter', 'the daughter'],
            ['der Ingenieur', 'the engineer'],
            ['ledig', 'single'],
            ['auch', 'also']
          ]),
          questions: exerciseList([
            exInput('Wie alt ist Elif?', '28|28 Jahre|achtundzwanzig'),
            exInput('Wie heißt Elifs Mann?', 'Murat'),
            exSelect('Was ist Murat von Beruf?', 'Ingenieur', ['Ingenieur', 'Lehrer', 'Arzt']),
            exTF('Elif und Murat haben einen Sohn.', false),
            exInput('Wie alt ist Ayla?', '3|drei|3 Jahre|drei Jahre'),
            exSelect('Wo wohnen Elifs Eltern?', 'in Izmir', ['in Izmir', 'in Berlin', 'in Bonn']),
            exInput('Wie heißt der Hund?', 'Max')
          ])
        },

        listening: {
          title: 'Familie im Gespräch',
          intro: 'Two colleagues talk about their families. Listen for siblings, relationship status and pets.',
          lines: [
            ['Anna', 'Hast du Geschwister?'],
            ['Sıla', 'Ja, ich habe einen Bruder und eine Schwester. Mein Bruder heißt Can, er ist 30. Meine Schwester heißt Deniz, sie ist 22.'],
            ['Anna', 'Und bist du verheiratet?'],
            ['Sıla', 'Nein, ich bin ledig. Aber ich habe einen Freund. Er heißt Tom.'],
            ['Anna', 'Habt ihr Kinder?'],
            ['Sıla', 'Nein, wir haben keine Kinder. Aber wir haben eine Katze. Sie heißt Mimi.']
          ],
          questions: exerciseList([
            exSelect('Wie viele Geschwister hat Sıla?', 'zwei', ['eins', 'zwei', 'drei']),
            exInput('Wie alt ist Sılas Bruder?', '30|dreißig'),
            exTF('Sıla ist verheiratet.', false),
            exInput('Wie heißt Sılas Freund?', 'Tom'),
            exSelect('Welches Haustier haben sie?', 'eine Katze', ['einen Hund', 'eine Katze', 'einen Vogel']),
            exInput('Wie heißt die Katze?', 'Mimi')
          ])
        },

        writing: {
          title: 'Meine Familie',
          textType: 'Kurzer Text über die Familie',
          minWords: 40, maxWords: 70, minutes: 15,
          expect: ['self-intro'],
          task: '<p>Schreiben Sie einen kurzen Text über Ihre Familie für die Kurszeitung. Nennen Sie Namen, Alter und was die Personen machen.</p>' +
            '<p class="note">Write a short text about your family for the course newsletter. Give names, ages and what the people do.</p>',
          plainTask: 'Write a short text in German (40–70 words) about your family. Say who is in your family, give at least two names and ages, say what one person does for a living, mention one pet or say you have none, and give your own marital status.',
          bullets: [
            'Nennen Sie <strong>Familienmitglieder</strong> mit mein / meine.',
            'Nennen Sie mindestens zwei <strong>Namen</strong> und <strong>Alter</strong>.',
            'Sagen Sie, was eine Person <strong>beruflich</strong> macht.',
            'Sagen Sie, ob Sie ein <strong>Haustier</strong> haben (haben + einen / eine / kein).',
            'Sagen Sie Ihren <strong>Familienstand</strong>.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Familie', 'Ich habe … Geschwister. · Meine Eltern wohnen in …'],
            ['Namen/Alter', 'Mein Bruder heißt … und ist … Jahre alt.'],
            ['Beruf', 'Er arbeitet als … · Sie ist Lehrerin.'],
            ['Haustier', 'Ich habe einen Hund. · Ich habe kein Haustier.'],
            ['Status', 'Ich bin ledig / verheiratet.']
          ]),
          criteria: [
            'Ich nenne mindestens zwei Familienmitglieder mit mein / meine.',
            'Ich nenne mindestens zwei Namen und Altersangaben.',
            'Ich sage, was eine Person beruflich macht.',
            'Ich verwende haben richtig: Ich habe einen / eine / ein / keinen / keine / kein.',
            'Ich sage, ob ich ein Haustier habe.',
            'Alle Nomen sind großgeschrieben.',
            'Ich liege zwischen 40 und 70 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Family units are small.</strong> German households are often small, and many people live alone or with a partner. Having one or two children is the norm, and people usually leave their parents\' home in their early twenties.</p>' +
          '<p><strong>Children go to the Kita.</strong> Day care is called <em>Kita</em> (Kindertagesstätte), and children from age one can attend. Parents are entitled to <em>Elternzeit</em>, paid leave to look after a baby, and both parents can take it.</p>' +
          '<p><strong>Marriage has a legal step.</strong> A wedding that counts legally is the civil ceremony at the <em>Standesamt</em> (registry office). A church wedding is separate and optional.</p>' +
          '<p><strong>Family calls and Sunday visits.</strong> Many families meet on Sundays for a long lunch or coffee and cake (<em>Kaffee und Kuchen</em>). Grandparents are called <em>Oma</em> and <em>Opa</em>, and are often involved in childcare.</p>' +
          '<p><strong>Pets are popular.</strong> Dogs and cats are the most common pets, and dogs are allowed in many shops, trains and restaurants. Dog owners pay a <em>Hundesteuer</em>, a local tax.</p>',

        recap: [
          { group: '🏡 Familie', rows: [
            ['die Familie', 'the family'],
            ['die Eltern', 'the parents'],
            ['der Vater', 'the father'],
            ['die Mutter', 'the mother'],
            ['die Geschwister', 'the siblings'],
            ['der Bruder', 'the brother'],
            ['die Schwester', 'the sister'],
            ['der Sohn', 'the son'],
            ['die Tochter', 'the daughter'],
            ['das Kind', 'the child'],
            ['die Großeltern', 'the grandparents'],
            ['die Oma / der Opa', 'grandma / grandpa']
          ] },
          { group: '🧬 haben und kein', rows: [
            ['haben', 'to have'],
            ['Ich habe einen Bruder.', 'I have a brother.'],
            ['Ich habe eine Schwester.', 'I have a sister.'],
            ['Ich habe ein Kind.', 'I have a child.'],
            ['keinen / keine / kein', 'no (masc. / fem. / neut.)'],
            ['mein / meine', 'my'],
            ['dein / deine', 'your'],
            ['sein / seine', 'his'],
            ['ihr / ihre', 'her']
          ] },
          { group: '💞 Familienstand', rows: [
            ['ledig', 'single'],
            ['verheiratet', 'married'],
            ['geschieden', 'divorced'],
            ['verwitwet', 'widowed'],
            ['der Mann', 'the husband'],
            ['die Frau', 'the wife'],
            ['der Freund', 'the boyfriend, the friend'],
            ['die Freundin', 'the girlfriend, the friend']
          ] },
          { group: '🙂 Beschreibung', rows: [
            ['groß', 'tall'],
            ['klein', 'small'],
            ['jung', 'young'],
            ['alt', 'old'],
            ['freundlich', 'friendly'],
            ['nett', 'nice'],
            ['lustig', 'funny'],
            ['ruhig', 'calm'],
            ['fleißig', 'hard-working'],
            ['sympathisch', 'likeable']
          ] },
          { group: '🐕 Haustiere', rows: [
            ['das Haustier', 'the pet'],
            ['der Hund', 'the dog'],
            ['die Katze', 'the cat'],
            ['der Vogel', 'the bird'],
            ['der Fisch', 'the fish'],
            ['süß', 'cute']
          ] }
        ],

        sentences: [
          { de: 'Ich habe einen Bruder und eine Schwester', en: 'I have a brother and a sister' },
          { de: 'Meine Eltern wohnen in Izmir', en: 'My parents live in Izmir' },
          { de: 'Ich habe keine Kinder', en: 'I have no children' },
          { de: 'Mein Bruder ist groß und nett', en: 'My brother is tall and nice' },
          { de: 'Wir haben eine Katze', en: 'We have a cat' },
          { de: 'Sein Name ist Ali', en: 'His name is Ali' }
        ]
      },

      { // ===== UNIT 6 — written out in full =====
        title: '🍞 Unit 6 — Food, Drink and Meals',
        subject: 'Essen und Trinken',
        canDo: ['Order food and drink and pay', 'Say what you like, dislike and prefer'],
        grammarFocus: ['möchten and the verb mögen', 'gern / lieber / am liebsten', 'Accusative of the definite and indefinite article'],
        topics: [
          {
            icon: '🥐', title: 'Breakfast, lunch and dinner', note: 'Frühstück, Mittagessen, Abendessen',
            explanation:
              '<p>German has three main meals: <span class="de">das Frühstück</span> (breakfast), <span class="de">das Mittagessen</span> (lunch) and <span class="de">das Abendessen</span> (dinner). In many families the warm meal is at lunchtime, and dinner is often <span class="de">Abendbrot</span>: bread, cheese, sausage and salad.</p>' +
              '<p>The verbs are easy to remember because they come from the nouns: <span class="de">frühstücken</span> (to have breakfast), <span class="de">zu Mittag essen</span>, <span class="de">zu Abend essen</span>. For the time of a meal use <span class="de">um</span> + time: <span class="de">Ich frühstücke um sieben Uhr.</span></p>' +
              '<p>The verb <span class="de">essen</span> is irregular: <span class="de">ich esse, du isst, er isst</span>. The same happens with <span class="de">nehmen</span>: <span class="de">ich nehme, du nimmst, er nimmt</span>.</p>',
            vocab: vocabTable([
              ['das Frühstück', 'breakfast'],
              ['frühstücken', 'to have breakfast'],
              ['das Mittagessen', 'lunch'],
              ['das Abendessen', 'dinner'],
              ['das Abendbrot', 'a cold evening meal (bread etc.)'],
              ['essen', 'to eat'],
              ['trinken', 'to drink'],
              ['kochen', 'to cook'],
              ['das Brötchen', 'the bread roll'],
              ['das Müsli', 'the muesli'],
              ['warm / kalt', 'warm / cold'],
              ['Guten Appetit!', 'Enjoy your meal!']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'essen', 'nehmen', 'trinken (regular)'], [
                ['ich', 'esse', 'nehme', 'trinke'],
                ['du', '<strong>isst</strong>', '<strong>nimmst</strong>', 'trinkst'],
                ['er / sie / es', '<strong>isst</strong>', '<strong>nimmt</strong>', 'trinkt'],
                ['wir', 'essen', 'nehmen', 'trinken'],
                ['ihr', 'esst', 'nehmt', 'trinkt'],
                ['sie / Sie', 'essen', 'nehmen', 'trinken']
              ]) +
              '<p class="note">The vowel changes only in <em>du</em> and <em>er/sie/es</em>: e → i. Time comes with <em>um</em>: <span class="de">um acht Uhr</span>; parts of the day with <em>am</em>: <span class="de">am Morgen, am Abend</span>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — what do you eat for breakfast?', [
              ['Lena', 'Was isst du zum Frühstück?'],
              ['Sıla', 'Ich esse ein Brötchen mit Käse und trinke Tee. Und du?'],
              ['Lena', 'Ich esse Müsli. Mittags esse ich in der Kantine.'],
              ['Sıla', 'Und abends?'],
              ['Lena', 'Abends essen wir Abendbrot: Brot, Käse und Salat.']
            ]),
            exercises: exerciseList([
              exSelect('Die erste Mahlzeit am Tag ist das:', 'Frühstück', ['Frühstück', 'Mittagessen', 'Abendessen']),
              exInput('Du ___________ ein Brötchen. (essen)', 'isst'),
              exInput('Er ___________ einen Salat. (nehmen)', 'nimmt'),
              exInput('Wir ___________ Kaffee. (trinken)', 'trinken'),
              exSelect('Ich frühstücke ___ sieben Uhr.', 'um', ['am', 'um', 'im']),
              exSelect('Man sagt vor dem Essen:', 'Guten Appetit!', ['Gute Nacht!', 'Guten Appetit!', 'Gute Besserung!']),
              exSelect('„Abendbrot" ist meistens:', 'kalt', ['warm', 'kalt', 'süß'])
            ])
          },
          {
            icon: '🥗', title: 'Food and drink vocabulary', note: 'Grouped by shelf: Obst, Gemüse, Getränke',
            explanation:
              '<p>Learn food words in groups, the way they are sorted in a supermarket: <span class="de">das Obst</span> (fruit), <span class="de">das Gemüse</span> (vegetables), <span class="de">die Getränke</span> (drinks), <span class="de">die Milchprodukte</span> (dairy), <span class="de">das Fleisch</span> (meat) and <span class="de">die Backwaren</span> (bread and cakes).</p>' +
              '<p>Always learn the article with the noun. Some useful patterns: most fruit ending in <em>-e</em> is feminine (<span class="de">die Banane, die Birne, die Orange</span>), drinks vary (<span class="de">der Kaffee, der Tee, das Wasser, die Milch, der Saft</span>), and the words <span class="de">Obst</span> and <span class="de">Gemüse</span> are singular collective nouns: <span class="de">Ich esse viel Obst.</span></p>',
            vocab: vocabTable([
              ['der Apfel / die Äpfel', 'the apple / apples'],
              ['die Banane', 'the banana'],
              ['die Tomate', 'the tomato'],
              ['die Kartoffel', 'the potato'],
              ['die Zwiebel', 'the onion'],
              ['der Reis', 'the rice'],
              ['die Nudeln', 'the pasta'],
              ['das Brot', 'the bread'],
              ['der Käse', 'the cheese'],
              ['das Ei / die Eier', 'the egg / eggs'],
              ['das Fleisch / der Fisch', 'the meat / the fish'],
              ['das Hähnchen', 'the chicken'],
              ['die Milch', 'the milk'],
              ['der Saft', 'the juice'],
              ['das Wasser', 'the water'],
              ['der Kaffee / der Tee', 'the coffee / the tea']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Group', 'der', 'die', 'das'], [
                ['Obst', 'der Apfel', 'die Banane, die Orange', 'das Obst'],
                ['Gemüse', 'der Salat', 'die Tomate, die Kartoffel', 'das Gemüse'],
                ['Getränke', 'der Kaffee, der Tee, der Saft', 'die Milch', 'das Wasser, das Bier'],
                ['Sonstiges', 'der Käse, der Reis, der Fisch', 'die Wurst, die Butter', 'das Brot, das Ei, das Fleisch']
              ]) +
              '<p class="note">Uncountable food has no article after <em>viel</em> or <em>gern</em>: <span class="de">Ich trinke gern Milch. Ich esse viel Gemüse.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — shopping list', [
              ['Tom', 'Was brauchen wir noch?'],
              ['Lena', 'Wir brauchen Tomaten, Zwiebeln und Kartoffeln.'],
              ['Tom', 'Und Obst?'],
              ['Lena', 'Ja, Äpfel und Bananen. Und Milch für das Frühstück.'],
              ['Tom', 'Gut, ich schreibe alles auf.']
            ]),
            exercises: exerciseList([
              exSelect('Ein Apfel ist:', 'Obst', ['Obst', 'Gemüse', 'ein Getränk']),
              exSelect('Eine Kartoffel ist:', 'Gemüse', ['Obst', 'Gemüse', 'ein Getränk']),
              exSelect('___ Milch', 'die', ['der', 'die', 'das']),
              exSelect('___ Wasser', 'das', ['der', 'die', 'das']),
              exSelect('___ Kaffee', 'der', ['der', 'die', 'das']),
              exInput('Plural: ein Ei, zwei ___________', 'Eier'),
              exInput('Plural: ein Apfel, drei ___________', 'Äpfel'),
              exSelect('Was ist ein Getränk?', 'der Saft', ['der Käse', 'der Saft', 'der Reis'])
            ])
          },
          {
            icon: '😋', title: 'Likes and dislikes', note: 'Ich mag … / Ich esse gern … / Ich trinke lieber …',
            explanation:
              '<p>German has two main ways to say you like food. With a <strong>noun</strong>, use <span class="de">mögen</span>: <span class="de">Ich mag Käse.</span> With an <strong>activity</strong>, put <span class="de">gern</span> after the verb: <span class="de">Ich esse gern Käse.</span> <span class="de">Ich koche gern.</span></p>' +
              '<p><span class="de">gern</span> has a comparison ladder: <span class="de">gern → lieber → am liebsten</span> (like → prefer → like most). <span class="de">Ich trinke gern Tee, aber ich trinke lieber Kaffee. Am liebsten trinke ich Kakao.</span></p>' +
              '<p>For dislikes use <span class="de">nicht</span>: <span class="de">Ich mag keinen Fisch.</span> (with a noun, kein) or <span class="de">Ich esse nicht gern Fisch.</span> Note the difference between <span class="de">mögen</span> (to like) and <span class="de">möchten</span> (would like = want now).</p>',
            vocab: vocabTable([
              ['mögen', 'to like'],
              ['Ich mag Schokolade.', 'I like chocolate.'],
              ['gern', 'gladly (= like doing)'],
              ['lieber', 'rather, prefer'],
              ['am liebsten', 'most of all'],
              ['nicht gern', 'do not like doing'],
              ['lecker', 'tasty'],
              ['süß / salzig / scharf', 'sweet / salty / spicy'],
              ['der Vegetarier / die Vegetarierin', 'the vegetarian'],
              ['das Lieblingsessen', 'the favourite food']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('mögen (irregular)', ['Person', 'mögen'], [
                ['ich', '<strong>mag</strong>'], ['du', '<strong>magst</strong>'], ['er / sie / es', '<strong>mag</strong>'],
                ['wir', 'mögen'], ['ihr', 'mögt'], ['sie / Sie', 'mögen']
              ]) +
              formTable('', ['', 'Example', 'Meaning'], [
                ['mögen + noun', 'Ich <strong>mag</strong> Pizza.', 'I like pizza (in general).'],
                ['verb + gern', 'Ich esse <strong>gern</strong> Pizza.', 'I like eating pizza.'],
                ['lieber', 'Ich esse <strong>lieber</strong> Pasta.', 'I prefer pasta.'],
                ['am liebsten', '<strong>Am liebsten</strong> esse ich Sushi.', 'Most of all I like sushi.'],
                ['möchten', 'Ich <strong>möchte</strong> eine Pizza.', 'I would like a pizza (now).']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — favourite food', [
              ['Tom', 'Was isst du gern?'],
              ['Sıla', 'Ich esse gern Nudeln und Gemüse. Ich mag keinen Fisch.'],
              ['Tom', 'Trinkst du gern Kaffee?'],
              ['Sıla', 'Ja, aber ich trinke lieber Tee. Am liebsten trinke ich türkischen Tee.'],
              ['Tom', 'Und was ist dein Lieblingsessen?'],
              ['Sıla', 'Mein Lieblingsessen ist Lahmacun!']
            ]),
            exercises: exerciseList([
              exInput('Ich ___________ Schokolade. (mögen)', 'mag'),
              exInput('Du ___________ Pizza. (mögen)', 'magst'),
              exSelect('Ich trinke ___ Tee. (I like drinking tea)', 'gern', ['gern', 'mag', 'möchte']),
              exSelect('Ich trinke gern Tee, aber ___ Kaffee.', 'lieber', ['gern', 'lieber', 'am liebsten']),
              exSelect('___ esse ich Eis.', 'Am liebsten', ['Gern', 'Lieber', 'Am liebsten']),
              exSelect('„Ich möchte einen Kaffee" bedeutet:', 'I would like a coffee', ['I like coffee', 'I would like a coffee', 'I prefer coffee']),
              exSelect('Ich mag ___ Fisch. (nein)', 'keinen', ['nicht', 'keinen', 'kein']),
              exSelect('„scharf" bedeutet:', 'spicy', ['sweet', 'salty', 'spicy'])
            ])
          },
          {
          icon: '🍽️', title: 'In a café or restaurant', note: 'Ordering, asking for the bill, paying',
          explanation:
            '<p>In a café you do not say <span class="de">Ich will einen Kaffee.</span> — that sounds like a demand. Germans order with <strong>Ich möchte …</strong> or <strong>Ich hätte gern …</strong>. Both mean “I would like …”.</p>' +
            '<p><span class="de">möchte</span> and <span class="de">hätte</span> are polite “would” forms of <span class="de">mögen</span> and <span class="de">haben</span>. Grammar calls this the <strong>Konjunktiv II</strong>. At A1 you only need these two as ready-made phrases — the full pattern (<span class="de">wäre</span>, <span class="de">würde</span>, <span class="de">könnte</span>) follows in A2.</p>' +
            '<p>The waiter uses the same politeness: <span class="de">Was möchten Sie trinken?</span> And when you want to pay: <span class="de">Ich möchte bitte zahlen.</span></p>',
          vocab: formTable('möchten — “would like”', ['', 'möchten'], [
            ['ich', 'möchte'],
            ['du', 'möchtest'],
            ['er / sie / es', 'möchte'],
            ['wir', 'möchten'],
            ['ihr', 'möchtet'],
            ['sie / Sie', 'möchten']
          ]) +
          vocabTable([
            ['Ich möchte einen Kaffee.', 'I would like a coffee.'],
            ['Ich hätte gern eine Cola.', 'I would like a cola.'],
            ['Was möchten Sie trinken?', 'What would you like to drink?'],
            ['Ich möchte bitte zahlen.', 'I would like to pay, please.'],
            ['Wir möchten zwei Wasser.', 'We would like two waters.'],
            ['die Speisekarte', 'the menu'],
            ['die Rechnung', 'the bill'],
            ['Stimmt so.', 'Keep the change.']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Two ways to order — same meaning:</strong></p>' +
            '<div class="example-box">' +
            'Ich <strong>möchte</strong> einen Kaffee.<br>' +
            'Ich <strong>hätte gern</strong> einen Kaffee.' +
            '</div>' +
            '<p><strong>möchte</strong> is verb no. 1 in position 2. A second verb goes to the <strong>end</strong>: <span class="de">Ich möchte ein Eis <strong>essen</strong>.</span></p>' +
            '<p><strong>hätte gern</strong> always needs the thing you want after it, in the accusative: <span class="de">Ich hätte gern <strong>einen</strong> Tee / <strong>eine</strong> Suppe / <strong>ein</strong> Brötchen.</span></p>' +
            '<p class="note">Avoid <span class="de">Ich will …</span> in a café. It is grammatically fine, but it sounds blunt.</p>' +
            '</div>',
          dialogs: dialogBox('Dialog — ordering at a café', [
            ['Kellner', 'Guten Tag! Was möchten Sie trinken?'],
            ['Gast', 'Ich hätte gern einen Kaffee, bitte.'],
            ['Kellner', 'Und möchten Sie etwas essen?'],
            ['Gast', 'Ja, ich möchte ein Brötchen mit Käse.'],
            ['Kellner', 'Gern. Sonst noch etwas?'],
            ['Gast', 'Nein, danke. Ich möchte später zahlen.']
          ]),
          exercises: exerciseList([
            exInput('Ich ___________ einen Tee, bitte. (möchten)', 'möchte'),
            exInput('Was ___________ Sie trinken? (möchten)', 'möchten'),
            exInput('Du ___________ ein Brötchen? (möchten)', 'möchtest'),
            exInput('Ich hätte ___________ eine Cola, bitte.', 'gern'),
            exInput('Ich hätte gern ___________ Kaffee. (ein)', 'einen'),
            exInput('Ich möchte ein Eis ___________. (essen)', 'essen'),
            exSelect('Which sentence is the most polite way to order?', 'Ich hätte gern einen Kaffee.', ['Ich will einen Kaffee.', 'Ich hätte gern einen Kaffee.', 'Kaffee!']),
            exSelect('What does „Ich möchte bitte zahlen“ mean?', 'I would like to pay, please.', ['I would like to pay, please.', 'I like paying.', 'I do not want to pay.'])
          ])
        },
          {
            icon: '🧾', title: 'Quantities and containers', note: 'eine Flasche, ein Stück, 200 Gramm',
            explanation:
              '<p>Many foods are bought in a container or a measure: <span class="de">eine Flasche Wasser</span> (a bottle of water), <span class="de">ein Stück Kuchen</span> (a piece of cake), <span class="de">ein Kilo Äpfel</span>. German does <strong>not</strong> use a word for “of”: the food simply follows the measure.</p>' +
              '<p>Measures of weight and volume stay singular after a number: <span class="de">zwei Kilo, 500 Gramm, drei Liter</span>. Containers that are feminine take a plural: <span class="de">zwei Flaschen, drei Dosen, zwei Tassen</span>. <span class="de">das Stück</span> usually stays singular: <span class="de">zwei Stück Kuchen</span>.</p>' +
              '<p>To ask about quantity use <span class="de">Wie viel …?</span> for uncountable things (<span class="de">Wie viel Milch?</span>) and <span class="de">Wie viele …?</span> for countable things (<span class="de">Wie viele Eier?</span>).</p>',
            vocab: vocabTable([
              ['die Flasche', 'the bottle'],
              ['das Glas', 'the glass, the jar'],
              ['die Tasse', 'the cup'],
              ['die Dose', 'the tin, the can'],
              ['die Packung', 'the packet'],
              ['der Becher', 'the pot (yoghurt), the mug'],
              ['das Stück', 'the piece'],
              ['die Scheibe', 'the slice'],
              ['das Kilo(gramm)', 'the kilo'],
              ['das Gramm', 'the gram'],
              ['der Liter', 'the litre'],
              ['ein bisschen / viel / wenig', 'a little / a lot / little'],
              ['Wie viel? / Wie viele?', 'How much? / How many?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Measure', 'one', 'more than one'], [
                ['Gramm / Kilo / Liter', 'ein Kilo Äpfel', 'zwei <strong>Kilo</strong> Äpfel (no plural)'],
                ['die Flasche', 'eine Flasche Wasser', 'zwei <strong>Flaschen</strong> Wasser'],
                ['die Tasse', 'eine Tasse Tee', 'drei <strong>Tassen</strong> Tee'],
                ['die Scheibe', 'eine Scheibe Käse', 'vier <strong>Scheiben</strong> Käse'],
                ['das Stück', 'ein Stück Kuchen', 'zwei <strong>Stück</strong> Kuchen']
              ]) +
              '<p class="note">No “of”: <span class="de">eine Flasche Wasser</span>, never <s>eine Flasche von Wasser</s>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the cheese counter', [
              ['Verkäuferin', 'Guten Tag, was darf es sein?'],
              ['Kunde', 'Ich hätte gern 200 Gramm Gouda, bitte.'],
              ['Verkäuferin', 'In Scheiben oder am Stück?'],
              ['Kunde', 'In Scheiben, bitte. Und zwei Becher Joghurt.'],
              ['Verkäuferin', 'Gern. Sonst noch etwas?'],
              ['Kunde', 'Nein, danke. Das ist alles.']
            ]),
            exercises: exerciseList([
              exSelect('eine ___ Wasser', 'Flasche', ['Flasche', 'Scheibe', 'Stück']),
              exSelect('ein ___ Kuchen', 'Stück', ['Liter', 'Stück', 'Dose']),
              exSelect('eine ___ Käse', 'Scheibe', ['Tasse', 'Scheibe', 'Flasche']),
              exInput('zwei ___________ Wasser (die Flasche, Plural)', 'Flaschen'),
              exSelect('Ich kaufe zwei ___ Äpfel.', 'Kilo', ['Kilo', 'Kilos', 'Kiloen']),
              exSelect('___ Eier brauchst du?', 'Wie viele', ['Wie viel', 'Wie viele', 'Wie']),
              exSelect('___ Milch brauchst du?', 'Wie viel', ['Wie viel', 'Wie viele', 'Welche']),
              exSelect('Richtig ist:', 'eine Tasse Tee', ['eine Tasse von Tee', 'eine Tasse Tee', 'eine Tasse mit Tee von'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: meals, food words with their articles, mögen and gern / lieber / am liebsten, ordering politely with möchte and hätte gern, and quantities.</p>',
        exercises: exerciseList([
          exInput('Du ___________ ein Brötchen. (essen)', 'isst'),
          exSelect('Ich frühstücke ___ sieben Uhr.', 'um', ['am', 'um', 'im']),
          exSelect('___ Milch', 'die', ['der', 'die', 'das']),
          exSelect('___ Wasser', 'das', ['der', 'die', 'das']),
          exInput('Ich ___________ Schokolade. (mögen)', 'mag'),
          exSelect('Ich trinke gern Tee, aber ___ Kaffee.', 'lieber', ['gern', 'lieber', 'am liebsten']),
          exSelect('Polite: „___ gern einen Kaffee."', 'Ich hätte', ['Ich will', 'Ich hätte', 'Ich habe']),
          exInput('Ich ___________ bitte zahlen. (möchten)', 'möchte'),
          exSelect('eine ___ Wasser', 'Flasche', ['Flasche', 'Scheibe', 'Stück']),
          exSelect('___ Eier brauchst du?', 'Wie viele', ['Wie viel', 'Wie viele', 'Wie']),
          exSelect('Ich mag ___ Fisch. (nein)', 'keinen', ['nicht', 'keinen', 'kein']),
          exInput('Er ___________ einen Salat. (nehmen)', 'nimmt')
        ]),

        reading: {
          intro: 'A short menu from a café. Read for the dishes, the drinks and the prices.',
          words: 80, minutes: 5,
          text: readingText('Café Sonnenschein — Speisekarte', [
            '<strong>Frühstück (bis 11 Uhr)</strong><br>Kleines Frühstück: zwei Brötchen, Butter, Marmelade, Kaffee oder Tee — 6,50 €<br>Großes Frühstück: Brötchen, Käse, Wurst, ein Ei, Orangensaft, Kaffee — 11,90 €',
            '<strong>Mittagstisch (12 bis 15 Uhr)</strong><br>Tomatensuppe mit Brot — 5,80 €<br>Nudeln mit Gemüse (vegetarisch) — 9,50 €<br>Hähnchen mit Reis und Salat — 12,40 €',
            '<strong>Getränke</strong><br>Kaffee 2,80 € · Tee 2,50 € · Wasser (0,5 l) 3,00 € · Apfelsaft 3,20 €',
            '<strong>Kuchen</strong><br>Ein Stück Apfelkuchen 3,90 € · mit Sahne + 0,80 €'
          ], 'Speisekarte, fiktiv'),
          glossary: vocabTable([
            ['die Speisekarte', 'the menu'],
            ['der Mittagstisch', 'the lunch menu'],
            ['die Marmelade', 'the jam'],
            ['die Sahne', 'the cream'],
            ['vegetarisch', 'vegetarian']
          ]),
          questions: exerciseList([
            exSelect('Bis wann gibt es Frühstück?', 'bis 11 Uhr', ['bis 10 Uhr', 'bis 11 Uhr', 'bis 12 Uhr']),
            exInput('Was kostet das kleine Frühstück? (… €)', '6,50|6,50 €|6.50'),
            exSelect('Welches Gericht ist vegetarisch?', 'Nudeln mit Gemüse', ['Hähnchen mit Reis', 'Nudeln mit Gemüse', 'Großes Frühstück']),
            exTF('Im großen Frühstück gibt es ein Ei.', true),
            exInput('Was kostet ein Tee? (… €)', '2,50|2,50 €|2.50'),
            exTF('Der Mittagstisch ist von 11 bis 15 Uhr.', false),
            exInput('Was kostet Apfelkuchen mit Sahne? (… €)', '4,70|4,70 €|4.70')
          ])
        },

        listening: {
          title: 'Im Restaurant',
          intro: 'Two friends order lunch in a restaurant. Listen for what they eat and drink and how much they pay.',
          lines: [
            ['Kellner', 'Guten Tag! Was möchten Sie trinken?'],
            ['Lena', 'Ich hätte gern ein Wasser, bitte.'],
            ['Tom', 'Und ich nehme einen Apfelsaft.'],
            ['Kellner', 'Und zu essen?'],
            ['Lena', 'Ich möchte die Tomatensuppe. Ich esse kein Fleisch.'],
            ['Tom', 'Ich nehme das Hähnchen mit Reis.'],
            ['Kellner', 'Gern.'],
            ['Tom', 'Entschuldigung, wir möchten zahlen, bitte. Zusammen.'],
            ['Kellner', 'Das macht 23 Euro 80.'],
            ['Tom', '25 Euro, bitte. Stimmt so.']
          ],
          questions: exerciseList([
            exSelect('Was trinkt Lena?', 'ein Wasser', ['einen Apfelsaft', 'ein Wasser', 'einen Kaffee']),
            exSelect('Was isst Lena?', 'die Tomatensuppe', ['das Hähnchen', 'die Tomatensuppe', 'die Nudeln']),
            exTF('Lena isst kein Fleisch.', true),
            exInput('Was isst Tom? (das …)', 'das Hähnchen|Hähnchen|das Hähnchen mit Reis|Hähnchen mit Reis'),
            exSelect('Zahlen sie zusammen oder getrennt?', 'zusammen', ['zusammen', 'getrennt']),
            exInput('Wie viel kostet das Essen? (… Euro)', '23,80|23 Euro 80|23,80 Euro')
          ])
        },

        writing: {
          title: 'Einladung zum Essen',
          textType: 'Kurze Nachricht an eine Freundin',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Sie laden eine Freundin am Samstag zum Essen ein. Schreiben Sie eine kurze Nachricht.</p>' +
            '<p class="note">You invite a friend for a meal on Saturday. Write a short message.</p>',
          plainTask: 'Write a short informal message in German (30–60 words) inviting a friend to dinner on Saturday. Say the time, what you will cook, ask what she likes and does not like to eat, and ask her to bring a drink.',
          bullets: [
            'Sagen Sie, <strong>wann</strong> das Essen ist (Tag und Uhrzeit).',
            'Sagen Sie, <strong>was</strong> Sie kochen.',
            'Fragen Sie, was Ihre Freundin <strong>gern</strong> oder <strong>nicht gern</strong> isst.',
            'Bitten Sie sie, ein <strong>Getränk</strong> mitzubringen.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Liebe Anna, · Hallo Tom,'],
            ['Einladung', 'Ich lade dich am Samstag um 19 Uhr zum Essen ein.'],
            ['Essen', 'Ich koche Nudeln mit Gemüse.'],
            ['Frage', 'Was isst du gern? Isst du Fleisch?'],
            ['Bitte', 'Kannst du eine Flasche Saft mitbringen?'],
            ['Gruß', 'Bis Samstag! · Viele Grüße, …']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede (Liebe / Lieber / Hallo).',
            'Ich nenne Tag und Uhrzeit.',
            'Ich sage, was ich koche.',
            'Ich frage, was meine Freundin gern isst.',
            'Ich bitte um ein Getränk.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Bread is a big deal.</strong> Germany has hundreds of kinds of bread and rolls. A bakery (<em>Bäckerei</em>) opens early, and on Sunday morning many people fetch fresh <em>Brötchen</em> (called <em>Semmeln</em> in Bavaria and Austria, <em>Weggli</em> in Switzerland).</p>' +
          '<p><strong>Kaffee und Kuchen.</strong> Around 3 or 4 pm on weekends, families and friends meet for coffee and cake. It is a social event, not a snack.</p>' +
          '<p><strong>Paying in restaurants.</strong> You ask for the bill (<em>Die Rechnung, bitte</em> or <em>Zahlen, bitte</em>). The waiter often asks <em>Zusammen oder getrennt?</em> — together or separately. A tip of about 5–10 % is normal; you say the total you want to pay, e.g. <em>25 Euro, bitte</em>, or <em>Stimmt so</em>.</p>' +
          '<p><strong>Water is not free.</strong> In restaurants water comes in bottles and is paid for. Ask for <em>Leitungswasser</em> (tap water) if you want it — some places will give it free, some will not.</p>' +
          '<p><strong>Guten Appetit / Mahlzeit.</strong> Before eating people say <em>Guten Appetit!</em> At work, colleagues greet each other around lunchtime with <em>Mahlzeit!</em></p>',

        recap: [
          { group: '🥐 Mahlzeiten', rows: [
            ['das Frühstück', 'breakfast'], ['das Mittagessen', 'lunch'], ['das Abendessen', 'dinner'],
            ['frühstücken', 'to have breakfast'], ['essen (isst)', 'to eat'], ['trinken', 'to drink'],
            ['nehmen (nimmt)', 'to take'], ['kochen', 'to cook'], ['Guten Appetit!', 'Enjoy your meal!']
          ] },
          { group: '🥗 Lebensmittel', rows: [
            ['das Obst', 'fruit'], ['das Gemüse', 'vegetables'], ['der Apfel', 'the apple'], ['die Kartoffel', 'the potato'],
            ['das Brot', 'the bread'], ['der Käse', 'the cheese'], ['das Ei', 'the egg'], ['das Fleisch', 'the meat'],
            ['die Milch', 'the milk'], ['das Wasser', 'the water'], ['der Saft', 'the juice'], ['der Kaffee', 'the coffee']
          ] },
          { group: '😋 Mögen und gern', rows: [
            ['Ich mag …', 'I like …'], ['Ich esse gern …', 'I like eating …'], ['lieber', 'rather'],
            ['am liebsten', 'most of all'], ['Ich möchte …', 'I would like …'], ['Ich hätte gern …', 'I would like …'], ['lecker', 'tasty']
          ] },
          { group: '🍽️ Im Café', rows: [
            ['die Speisekarte', 'the menu'], ['die Rechnung', 'the bill'], ['zahlen', 'to pay'],
            ['zusammen / getrennt', 'together / separately'], ['Stimmt so.', 'Keep the change.']
          ] },
          { group: '🧾 Mengen', rows: [
            ['die Flasche', 'the bottle'], ['das Stück', 'the piece'], ['die Scheibe', 'the slice'],
            ['die Tasse', 'the cup'], ['das Kilo', 'the kilo'], ['das Gramm', 'the gram'], ['Wie viel? / Wie viele?', 'How much? / How many?']
          ] }
        ],

        sentences: [
          { de: 'Ich esse gern Nudeln', en: 'I like eating pasta' },
          { de: 'Ich trinke lieber Tee', en: 'I prefer to drink tea' },
          { de: 'Ich hätte gern einen Kaffee', en: 'I would like a coffee' },
          { de: 'Die Rechnung bitte', en: 'The bill, please' },
          { de: 'Ich mag keinen Fisch', en: 'I do not like fish' },
          { de: 'Eine Flasche Wasser bitte', en: 'A bottle of water, please' }
        ]
      },

      { // ===== UNIT 7 — written out in full =====
        title: '🛒 Unit 7 — Shopping and Prices',
        subject: 'Einkaufen und Preise',
        canDo: ['Buy everyday goods and ask about prices', 'Handle a simple exchange or complaint'],
        grammarFocus: ['Accusative case in full', 'Question words welcher / wie viel', 'Imperative for polite requests'],
        topics: [
          {
            icon: '🏬', title: 'Shops and departments', note: 'Bäckerei, Apotheke, Supermarkt, Drogerie',
            explanation:
              '<p>Germany has many small specialised shops. You buy bread in the <span class="de">Bäckerei</span>, medicine in the <span class="de">Apotheke</span>, and shampoo, toothpaste and cosmetics in the <span class="de">Drogerie</span> (not in the pharmacy!). Food and household goods are in the <span class="de">Supermarkt</span>.</p>' +
              '<p>To say where you go, use <span class="de">in</span> + accusative: <span class="de">Ich gehe in die Bäckerei. Ich gehe in den Supermarkt.</span> To say where you are or buy something, use <span class="de">in</span> + dative: <span class="de">Ich kaufe Brot in der Bäckerei. Im Supermarkt gibt es alles.</span> At A1 it is enough to learn these as fixed phrases.</p>' +
              '<p>Opening hours are important: <span class="de">Der Supermarkt hat von 8 bis 20 Uhr geöffnet.</span> On Sundays almost all shops are <span class="de">geschlossen</span> (closed).</p>',
            vocab: vocabTable([
              ['die Bäckerei', 'the bakery'],
              ['die Metzgerei', 'the butcher’s'],
              ['der Supermarkt', 'the supermarket'],
              ['die Apotheke', 'the pharmacy'],
              ['die Drogerie', 'the drugstore (toiletries)'],
              ['der Kiosk', 'the kiosk'],
              ['der Markt', 'the market'],
              ['das Kaufhaus', 'the department store'],
              ['die Abteilung', 'the department'],
              ['geöffnet / geschlossen', 'open / closed'],
              ['die Öffnungszeiten', 'the opening hours'],
              ['einkaufen', 'to go shopping']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Shop', 'Where to? (in + Akk.)', 'Where? (in + Dat.)'], [
                ['der Supermarkt', 'in <strong>den</strong> Supermarkt', '<strong>im</strong> Supermarkt'],
                ['die Bäckerei', 'in <strong>die</strong> Bäckerei', 'in <strong>der</strong> Bäckerei'],
                ['das Kaufhaus', 'in<strong>s</strong> Kaufhaus', '<strong>im</strong> Kaufhaus']
              ]) +
              '<p class="note"><em>im</em> = in dem, <em>ins</em> = in das. With people and some places Germans also say <span class="de">zum Bäcker, zur Apotheke</span> — you will meet <em>zu</em> in Unit 11.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — where can I buy that?', [
              ['Sıla', 'Entschuldigung, wo kann ich Shampoo kaufen? In der Apotheke?'],
              ['Nachbar', 'Nein, Shampoo gibt es in der Drogerie oder im Supermarkt.'],
              ['Sıla', 'Und wo ist die Drogerie?'],
              ['Nachbar', 'Gleich neben der Bäckerei. Sie hat bis 20 Uhr geöffnet.'],
              ['Sıla', 'Vielen Dank!']
            ]),
            exercises: exerciseList([
              exSelect('Brot kauft man in der:', 'Bäckerei', ['Apotheke', 'Bäckerei', 'Drogerie']),
              exSelect('Medikamente kauft man in der:', 'Apotheke', ['Apotheke', 'Metzgerei', 'Bäckerei']),
              exSelect('Zahnpasta kauft man in der:', 'Drogerie', ['Apotheke', 'Drogerie', 'Metzgerei']),
              exSelect('Fleisch und Wurst kauft man in der:', 'Metzgerei', ['Bäckerei', 'Metzgerei', 'Drogerie']),
              exSelect('Ich gehe in ___ Supermarkt.', 'den', ['der', 'den', 'dem']),
              exSelect('Ich kaufe Brot in ___ Bäckerei.', 'der', ['die', 'der', 'den']),
              exSelect('Das Gegenteil von „geöffnet" ist:', 'geschlossen', ['geschlossen', 'billig', 'teuer'])
            ])
          },
          {
            icon: '💶', title: 'Asking the price', note: 'Was kostet …? Wie viel kostet …?',
            explanation:
              '<p>The basic question is <span class="de">Was kostet das?</span> or <span class="de">Wie viel kostet das?</span> For more than one thing the verb is plural: <span class="de">Was kosten die Äpfel?</span></p>' +
              '<p>Prices are said with <span class="de">Euro</span> and <span class="de">Cent</span>, and the comma is spoken as the word Euro: 3,50 € = <span class="de">drei Euro fünfzig</span>. 0,99 € = <span class="de">neunundneunzig Cent</span>. Euro has no plural: <span class="de">zehn Euro</span>.</p>' +
              '<p>To choose between things use <span class="de">welcher / welche / welches</span> (which). It takes the same endings as <span class="de">der / die / das</span>: <span class="de">Welcher Pullover? Welche Tasche? Welches Handy?</span> To react: <span class="de">Das ist (zu) teuer.</span> or <span class="de">Das ist billig / günstig.</span></p>',
            vocab: vocabTable([
              ['Was kostet …?', 'What does … cost?'],
              ['Wie viel kostet …?', 'How much is …?'],
              ['der Preis', 'the price'],
              ['der Euro / der Cent', 'the euro / the cent'],
              ['teuer', 'expensive'],
              ['billig / günstig', 'cheap / good value'],
              ['das Angebot', 'the special offer'],
              ['im Angebot', 'on offer'],
              ['der Rabatt', 'the discount'],
              ['welcher / welche / welches', 'which'],
              ['dieser / diese / dieses', 'this'],
              ['Das nehme ich.', 'I’ll take it.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('welch- (which?) — like der / die / das', ['', 'masculine', 'feminine', 'neuter', 'plural'], [
                ['Nominativ', '<strong>welcher</strong> Rock', '<strong>welche</strong> Tasche', '<strong>welches</strong> Buch', '<strong>welche</strong> Schuhe'],
                ['Akkusativ', '<strong>welchen</strong> Rock', 'welche Tasche', 'welches Buch', 'welche Schuhe']
              ]) +
              '<p class="note">One thing: <em>Was kostet</em> der Rock? More than one: <em>Was kosten</em> die Schuhe? Euro stays singular: <span class="de">20 Euro</span>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the market', [
              ['Kundin', 'Was kosten die Tomaten?'],
              ['Verkäufer', 'Ein Kilo kostet 2 Euro 90.'],
              ['Kundin', 'Und die Erdbeeren?'],
              ['Verkäufer', 'Die sind heute im Angebot: 3 Euro die Schale.'],
              ['Kundin', 'Das ist günstig. Ich nehme zwei Schalen und ein Kilo Tomaten.'],
              ['Verkäufer', 'Das macht 8 Euro 90, bitte.']
            ]),
            exercises: exerciseList([
              exSelect('Was ___ die Äpfel?', 'kosten', ['kostet', 'kosten', 'kostest']),
              exSelect('Was ___ der Käse?', 'kostet', ['kostet', 'kosten', 'koste']),
              exSelect('4,50 € sagt man:', 'vier Euro fünfzig', ['vier Euros fünfzig', 'vier Euro fünfzig', 'vier Komma fünfzig Euros']),
              exSelect('___ Tasche möchten Sie? Die rote oder die blaue?', 'Welche', ['Welcher', 'Welche', 'Welches']),
              exSelect('___ Pullover kaufst du? (Akk.)', 'Welchen', ['Welcher', 'Welchen', 'Welches']),
              exSelect('Das Gegenteil von „teuer" ist:', 'billig', ['billig', 'groß', 'neu']),
              exInput('„I’ll take it": Das ___________ ich.', 'nehme')
            ])
          },
          {
            icon: '🧺', title: 'Doing the weekly shop', note: 'Shopping list, weights, packaging',
            explanation:
              '<p>When you write a shopping list (<span class="de">der Einkaufszettel</span>) you need the <strong>accusative</strong>, because the things are the object of <span class="de">kaufen</span> or <span class="de">brauchen</span>: <span class="de">Ich brauche einen Käse, eine Gurke und ein Brot.</span></p>' +
              '<p>Only the masculine article changes in the accusative: <span class="de">der → den, ein → einen, kein → keinen</span>. Feminine, neuter and plural look the same as in the nominative. That one rule covers almost every shopping sentence.</p>' +
              '<p>In the supermarket you can also ask: <span class="de">Wo finde ich den Reis?</span> or <span class="de">Haben Sie keine Milch mehr?</span></p>',
            vocab: vocabTable([
              ['der Einkaufszettel', 'the shopping list'],
              ['brauchen', 'to need'],
              ['kaufen', 'to buy'],
              ['der Einkaufswagen', 'the trolley'],
              ['der Korb', 'the basket'],
              ['die Tüte', 'the bag'],
              ['das Regal', 'the shelf'],
              ['die Kasse', 'the checkout'],
              ['Wo finde ich …?', 'Where can I find …?'],
              ['noch', 'still, more'],
              ['nicht mehr', 'no more'],
              ['das Pfand', 'the bottle deposit']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('The accusative — only masculine changes', ['', 'masculine', 'feminine', 'neuter', 'plural'], [
                ['Nominativ', 'der / ein / kein Käse', 'die / eine Gurke', 'das / ein Brot', 'die / keine Eier'],
                ['Akkusativ', '<strong>den / einen / keinen</strong> Käse', 'die / eine Gurke', 'das / ein Brot', 'die / keine Eier']
              ]) +
              '<p class="note">Verbs that take the accusative: <em>kaufen, brauchen, haben, nehmen, suchen, finden, möchten, es gibt</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — the shopping list', [
              ['Tom', 'Was brauchen wir?'],
              ['Lena', 'Wir brauchen einen Salat, eine Gurke und ein Brot.'],
              ['Tom', 'Haben wir noch Eier?'],
              ['Lena', 'Nein, wir haben keine Eier mehr. Und keinen Kaffee.'],
              ['Tom', 'Okay. Ich nehme auch eine Tüte mit.']
            ]),
            exercises: exerciseList([
              exSelect('Ich brauche ___ Salat. (der)', 'einen', ['ein', 'einen', 'eine']),
              exSelect('Wir kaufen ___ Gurke. (die)', 'eine', ['ein', 'einen', 'eine']),
              exSelect('Er nimmt ___ Brot. (das)', 'ein', ['ein', 'einen', 'eine']),
              exSelect('Wir haben ___ Kaffee mehr. (der)', 'keinen', ['kein', 'keine', 'keinen']),
              exSelect('Wo finde ich ___ Reis? (der)', 'den', ['der', 'den', 'dem']),
              exInput('Ich ___________ Milch. (brauchen)', 'brauche'),
              exSelect('Man bezahlt an der:', 'Kasse', ['Kasse', 'Tüte', 'Regal'])
            ])
          },
          {
            icon: '💳', title: 'Paying and receipts', note: 'Bar oder mit Karte? Brauchen Sie einen Kassenbon?',
            explanation:
              '<p>At the checkout you will usually hear three questions: <span class="de">Haben Sie eine Kundenkarte?</span> (loyalty card), <span class="de">Bar oder mit Karte?</span> (cash or card) and <span class="de">Brauchen Sie den Kassenbon?</span> (do you need the receipt).</p>' +
              '<p>Cash is still common in German-speaking countries, so small cafés and market stalls sometimes say <span class="de">Nur Barzahlung</span> (cash only). To pay by card: <span class="de">Kann ich mit Karte zahlen?</span></p>' +
              '<p>Shop assistants often use the polite <strong>imperative</strong> with Sie: <span class="de">Stecken Sie die Karte hier ein. Geben Sie bitte Ihre PIN ein.</span> The verb comes first and <span class="de">Sie</span> follows it.</p>',
            vocab: vocabTable([
              ['bar zahlen', 'to pay cash'],
              ['mit Karte zahlen', 'to pay by card'],
              ['das Bargeld', 'cash'],
              ['die EC-Karte / Girokarte', 'the debit card'],
              ['die Kreditkarte', 'the credit card'],
              ['der Kassenbon / die Quittung', 'the receipt'],
              ['das Wechselgeld', 'the change'],
              ['die PIN', 'the PIN'],
              ['kontaktlos', 'contactless'],
              ['die Tüte', 'the bag'],
              ['Das macht … Euro.', 'That’s … euros.'],
              ['Stimmt so.', 'Keep the change.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Imperative with Sie</strong> — verb first, then <em>Sie</em>:</p>' +
              formTable('', ['Statement', 'Imperative'], [
                ['Sie zahlen hier.', '<strong>Zahlen Sie</strong> bitte hier.'],
                ['Sie geben die PIN ein.', '<strong>Geben Sie</strong> bitte die PIN <strong>ein</strong>.'],
                ['Sie nehmen den Bon.', '<strong>Nehmen Sie</strong> den Bon.'],
                ['Sie sind …', '<strong>Seien Sie</strong> bitte vorsichtig.']
              ]) +
              '<p class="note">It looks like a question, but the voice goes down, and often there is a <em>bitte</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the checkout', [
              ['Kassiererin', 'Das macht 17 Euro 35. Haben Sie eine Kundenkarte?'],
              ['Kunde', 'Nein, leider nicht.'],
              ['Kassiererin', 'Zahlen Sie bar oder mit Karte?'],
              ['Kunde', 'Mit Karte, bitte.'],
              ['Kassiererin', 'Halten Sie die Karte bitte hier an das Gerät. … Danke. Brauchen Sie den Kassenbon?'],
              ['Kunde', 'Nein, danke. Schönen Tag noch!']
            ]),
            exercises: exerciseList([
              exSelect('„Bar oder mit Karte?" fragt nach:', 'der Zahlung', ['der Tüte', 'der Zahlung', 'dem Preis']),
              exSelect('Der Kassenbon ist:', 'the receipt', ['the receipt', 'the bag', 'the change']),
              exSelect('Imperativ: ___ Sie bitte hier.', 'Zahlen', ['Zahlen', 'Zahlt', 'Zahl']),
              exInput('Imperativ (nehmen): ___________ Sie den Bon!', 'Nehmen'),
              exSelect('Kann ich ___ Karte zahlen?', 'mit', ['mit', 'bei', 'von']),
              exSelect('„Nur Barzahlung" bedeutet:', 'cash only', ['cash only', 'card only', 'no receipts']),
              exTF('„Wechselgeld" ist das Geld, das man zurückbekommt.', true)
            ])
          },
          {
            icon: '🔁', title: 'Returns and problems', note: 'Das passt nicht. Kann ich das umtauschen?',
            explanation:
              '<p>If something is wrong with a purchase, explain the problem in one short sentence: <span class="de">Das ist kaputt.</span> (broken), <span class="de">Das funktioniert nicht.</span> (doesn’t work), <span class="de">Die Hose passt nicht.</span> (doesn’t fit).</p>' +
              '<p>Then say what you want: <span class="de">Kann ich das umtauschen?</span> (exchange), <span class="de">Ich möchte das zurückgeben.</span> (return) or <span class="de">Ich möchte mein Geld zurück.</span> Always bring the receipt — shops often ask <span class="de">Haben Sie den Kassenbon?</span></p>' +
              '<p>Note that <span class="de">umtauschen</span> and <span class="de">zurückgeben</span> are <strong>separable verbs</strong>: <span class="de">Ich tausche die Hose um.</span> After <span class="de">kann / möchte</span> they stay together at the end: <span class="de">Ich möchte die Hose umtauschen.</span></p>',
            vocab: vocabTable([
              ['kaputt', 'broken'],
              ['Das funktioniert nicht.', 'It doesn’t work.'],
              ['Das passt nicht.', 'It doesn’t fit.'],
              ['zu klein / zu groß', 'too small / too big'],
              ['umtauschen', 'to exchange'],
              ['zurückgeben', 'to return, give back'],
              ['das Geld zurück', 'the money back'],
              ['die Reklamation', 'the complaint'],
              ['der Gutschein', 'the voucher'],
              ['die Garantie', 'the guarantee'],
              ['Kein Problem.', 'No problem.'],
              ['Das tut mir leid.', 'I’m sorry.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Normal sentence', 'With a modal verb'], [
                ['Ich <strong>tausche</strong> die Hose <strong>um</strong>.', 'Ich möchte die Hose <strong>umtauschen</strong>.'],
                ['Ich <strong>gebe</strong> das Handy <strong>zurück</strong>.', 'Kann ich das Handy <strong>zurückgeben</strong>?']
              ]) +
              '<p class="note">More on separable verbs in Unit 9.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — exchanging a pair of trousers', [
              ['Kundin', 'Guten Tag. Ich habe ein Problem. Die Hose passt nicht. Sie ist zu klein.'],
              ['Verkäufer', 'Haben Sie den Kassenbon?'],
              ['Kundin', 'Ja, hier, bitte. Kann ich die Hose umtauschen?'],
              ['Verkäufer', 'Natürlich. Möchten Sie eine Nummer größer?'],
              ['Kundin', 'Ja, Größe 40, bitte.'],
              ['Verkäufer', 'Hier, bitte. Kein Problem.']
            ]),
            exercises: exerciseList([
              exSelect('Das Handy funktioniert nicht. Es ist:', 'kaputt', ['kaputt', 'billig', 'neu']),
              exSelect('Die Schuhe sind zu klein. Sie ___ nicht.', 'passen', ['passen', 'kosten', 'kaufen']),
              exSelect('Ich möchte die Jacke ___.', 'umtauschen', ['umtauschen', 'tausche um', 'um tauschen']),
              exSelect('Ich ___ die Jacke ___.', 'tausche … um', ['tausche … um', 'umtausche …', 'tauschen … um']),
              exInput('Ich möchte mein Geld ___________. (back)', 'zurück'),
              exSelect('Für einen Umtausch braucht man oft:', 'den Kassenbon', ['den Kassenbon', 'die Tüte', 'den Ausweis']),
              exSelect('Ein „Gutschein" ist:', 'a voucher', ['a voucher', 'a receipt', 'a bag'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: shops, prices, welch-, the accusative of shopping things, paying and returning.</p>',
        exercises: exerciseList([
          exSelect('Zahnpasta kauft man in der:', 'Drogerie', ['Apotheke', 'Drogerie', 'Metzgerei']),
          exSelect('Ich gehe in ___ Supermarkt.', 'den', ['der', 'den', 'dem']),
          exSelect('Was ___ die Äpfel?', 'kosten', ['kostet', 'kosten', 'kostest']),
          exSelect('___ Tasche möchten Sie?', 'Welche', ['Welcher', 'Welche', 'Welches']),
          exSelect('Ich brauche ___ Salat. (der)', 'einen', ['ein', 'einen', 'eine']),
          exSelect('Wir haben ___ Kaffee mehr.', 'keinen', ['kein', 'keine', 'keinen']),
          exSelect('Imperativ: ___ Sie bitte hier.', 'Zahlen', ['Zahlen', 'Zahlt', 'Zahl']),
          exSelect('Der Kassenbon ist:', 'the receipt', ['the receipt', 'the bag', 'the change']),
          exSelect('Ich möchte die Jacke ___.', 'umtauschen', ['umtauschen', 'tausche um', 'um tauschen']),
          exInput('Ich möchte mein Geld ___________. (back)', 'zurück'),
          exSelect('Das Gegenteil von „teuer" ist:', 'billig', ['billig', 'groß', 'neu']),
          exInput('„I’ll take it": Das ___________ ich.', 'nehme')
        ]),

        reading: {
          intro: 'A supermarket flyer with this week’s offers. Read for the products, prices and dates.',
          words: 90, minutes: 5,
          text: readingText('FrischMarkt — Angebote der Woche (Mo. 3.3. bis Sa. 8.3.)', [
            '🍎 Äpfel aus Deutschland, 1 kg — <strong>1,99 €</strong> (statt 2,79 €)',
            '🧀 Gouda in Scheiben, 200 g — <strong>1,49 €</strong>',
            '☕ Kaffee, 500 g — <strong>4,99 €</strong> · Nur am Freitag und Samstag!',
            '🥛 Frische Milch, 1 Liter — <strong>0,99 €</strong>',
            '🧴 Shampoo, 2 Flaschen — <strong>3,00 €</strong> (Sie sparen 1,20 €)',
            'Öffnungszeiten: Montag bis Samstag 7 bis 21 Uhr. Sonntag geschlossen. Sie können bar oder mit Karte zahlen.'
          ], 'Werbeprospekt, fiktiv'),
          glossary: vocabTable([
            ['das Angebot', 'the offer'],
            ['statt', 'instead of'],
            ['sparen', 'to save'],
            ['frisch', 'fresh']
          ]),
          questions: exerciseList([
            exInput('Was kostet ein Kilo Äpfel im Angebot? (… €)', '1,99|1,99 €|1.99'),
            exInput('Was war der normale Preis für die Äpfel? (… €)', '2,79|2,79 €|2.79'),
            exSelect('Wann ist der Kaffee im Angebot?', 'Freitag und Samstag', ['die ganze Woche', 'Freitag und Samstag', 'Montag']),
            exTF('Der Supermarkt hat am Sonntag geöffnet.', false),
            exSelect('Wie viel spart man beim Shampoo?', '1,20 €', ['1,20 €', '3,00 €', '0,99 €']),
            exTF('Man kann mit Karte zahlen.', true),
            exSelect('Wann schließt der Markt am Montag?', 'um 21 Uhr', ['um 20 Uhr', 'um 21 Uhr', 'um 22 Uhr'])
          ])
        },

        listening: {
          title: 'In der Drogerie',
          intro: 'A customer buys a few things in a drugstore and pays. Listen for the products, the price and how she pays.',
          lines: [
            ['Kundin', 'Entschuldigung, wo finde ich Sonnencreme?'],
            ['Verkäufer', 'Gleich hier vorne, im Regal links.'],
            ['Kundin', 'Danke. Was kostet diese Sonnencreme?'],
            ['Verkäufer', 'Die kostet 6 Euro 95. Die kleine Flasche kostet 3 Euro 45.'],
            ['Kundin', 'Dann nehme ich die kleine. Und eine Zahnbürste.'],
            ['Verkäufer', 'Zusammen 5 Euro 44. Bar oder mit Karte?'],
            ['Kundin', 'Bar, bitte. Hier sind 10 Euro.'],
            ['Verkäufer', 'Und 4 Euro 56 zurück. Brauchen Sie eine Tüte?'],
            ['Kundin', 'Nein, danke. Auf Wiedersehen!']
          ],
          questions: exerciseList([
            exSelect('Was sucht die Kundin zuerst?', 'Sonnencreme', ['Shampoo', 'Sonnencreme', 'Zahnpasta']),
            exSelect('Wo ist die Sonnencreme?', 'im Regal links', ['an der Kasse', 'im Regal links', 'im Regal rechts']),
            exSelect('Welche Flasche nimmt sie?', 'die kleine', ['die große', 'die kleine', 'zwei Flaschen']),
            exInput('Was kauft sie noch? (eine …)', 'Zahnbürste|eine Zahnbürste'),
            exSelect('Wie bezahlt sie?', 'bar', ['bar', 'mit Karte', 'mit Gutschein']),
            exInput('Wie viel Wechselgeld bekommt sie? (… Euro …)', '4,56|4 Euro 56|4,56 Euro'),
            exTF('Sie nimmt eine Tüte.', false)
          ])
        },

        writing: {
          title: 'E-Mail an den Online-Shop',
          textType: 'Kurze formelle E-Mail (Reklamation)',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['greeting', 'formal-closing'],
          task: '<p>Sie haben online einen Pullover gekauft. Er ist zu klein. Schreiben Sie eine kurze E-Mail an den Shop.</p>' +
            '<p class="note">You bought a pullover online. It is too small. Write a short e-mail to the shop.</p>',
          plainTask: 'Write a short formal e-mail in German (30–60 words) to an online shop. Say what you bought and when, explain the problem (too small), say what you want (exchange for a bigger size or money back) and ask what you should do now.',
          bullets: [
            'Sagen Sie, <strong>was</strong> und <strong>wann</strong> Sie gekauft haben (Bestellnummer).',
            'Beschreiben Sie das <strong>Problem</strong>.',
            'Sagen Sie, was Sie <strong>möchten</strong>: umtauschen oder Geld zurück.',
            'Fragen Sie, was Sie jetzt <strong>machen</strong> sollen.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Damen und Herren,'],
            ['Kauf', 'Ich habe am 3. März einen Pullover bestellt (Bestellnummer 4471).'],
            ['Problem', 'Der Pullover ist leider zu klein. · Er passt nicht.'],
            ['Wunsch', 'Ich möchte den Pullover umtauschen. · Ich möchte mein Geld zurück.'],
            ['Frage', 'Was muss ich jetzt machen?'],
            ['Gruß', 'Mit freundlichen Grüßen'] 
          ]),
          criteria: [
            'Ich beginne mit einer formellen Anrede.',
            'Ich sage, was ich gekauft habe.',
            'Ich beschreibe das Problem.',
            'Ich sage, was ich möchte (umtauschen / Geld zurück).',
            'Ich stelle eine Frage.',
            'Ich schließe mit „Mit freundlichen Grüßen".',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Sunday is closed.</strong> In Germany and Austria almost all shops close on Sundays and public holidays (<em>Ladenschluss</em>). Plan your weekly shop for Saturday. Bakeries, petrol stations and shops in big train stations are the exceptions.</p>' +
          '<p><strong>Bring your own bag.</strong> Plastic bags cost money or are not offered at all. Most people carry a cloth bag (<em>Stoffbeutel</em>) or a folding box.</p>' +
          '<p><strong>Pfand.</strong> On many bottles and cans you pay a deposit (<em>Pfand</em>) of 8, 15 or 25 cents. You get it back at the bottle machine (<em>Pfandautomat</em>) in the supermarket — the machine prints a receipt you show at the checkout.</p>' +
          '<p><strong>Fast checkouts.</strong> Cashiers scan very quickly and you are expected to pack fast. It is normal to put things back in the trolley and pack them at the shelf after the till.</p>' +
          '<p><strong>Apotheke vs. Drogerie.</strong> The <em>Apotheke</em> (green or red A) sells medicine and gives health advice; the <em>Drogerie</em> sells toiletries, cosmetics and cleaning products and is much cheaper for those.</p>',

        recap: [
          { group: '🏬 Geschäfte', rows: [
            ['die Bäckerei', 'the bakery'], ['die Metzgerei', 'the butcher’s'], ['der Supermarkt', 'the supermarket'],
            ['die Apotheke', 'the pharmacy'], ['die Drogerie', 'the drugstore'], ['das Kaufhaus', 'the department store'],
            ['geöffnet / geschlossen', 'open / closed']
          ] },
          { group: '💶 Preise', rows: [
            ['Was kostet …?', 'What does … cost?'], ['teuer', 'expensive'], ['billig / günstig', 'cheap'],
            ['das Angebot', 'the offer'], ['welcher / welche / welches', 'which'], ['Das nehme ich.', 'I’ll take it.']
          ] },
          { group: '🧺 Einkaufen', rows: [
            ['brauchen', 'to need'], ['kaufen', 'to buy'], ['der Einkaufszettel', 'the shopping list'],
            ['die Kasse', 'the checkout'], ['die Tüte', 'the bag'], ['das Pfand', 'the deposit']
          ] },
          { group: '💳 Bezahlen', rows: [
            ['bar zahlen', 'to pay cash'], ['mit Karte zahlen', 'to pay by card'], ['der Kassenbon', 'the receipt'],
            ['das Wechselgeld', 'the change'], ['Das macht …', 'That’s …']
          ] },
          { group: '🔁 Umtausch', rows: [
            ['kaputt', 'broken'], ['Das passt nicht.', 'It doesn’t fit.'], ['umtauschen', 'to exchange'],
            ['zurückgeben', 'to return'], ['der Gutschein', 'the voucher']
          ] }
        ],

        sentences: [
          { de: 'Was kostet das', en: 'What does that cost' },
          { de: 'Das ist zu teuer', en: 'That is too expensive' },
          { de: 'Ich brauche einen Salat und ein Brot', en: 'I need a lettuce and a loaf of bread' },
          { de: 'Kann ich mit Karte zahlen', en: 'Can I pay by card' },
          { de: 'Die Hose passt nicht', en: 'The trousers do not fit' },
          { de: 'Ich möchte die Jacke umtauschen', en: 'I would like to exchange the jacket' }
        ]
      },

      { // ===== UNIT 8 — written out in full =====
        title: '🏠 Unit 8 — Home and Living',
        subject: 'Wohnen',
        canDo: ['Describe your home room by room', 'Say where objects and people are'],
        grammarFocus: ['Dative case with location prepositions', 'es gibt + accusative', 'Two-way prepositions (static use)'],
        topics: [
          {
            icon: '🚪', title: 'Rooms of a home', note: 'die Küche, das Bad, das Schlafzimmer',
            explanation:
              '<p>Many room names are compounds with <span class="de">-zimmer</span> (room): <span class="de">das Wohnzimmer</span> (living room), <span class="de">das Schlafzimmer</span> (bedroom), <span class="de">das Kinderzimmer</span>, <span class="de">das Arbeitszimmer</span> (study). Because the last part decides the gender, they are all <span class="de">das</span>.</p>' +
              '<p>Other rooms: <span class="de">die Küche</span> (kitchen), <span class="de">das Bad</span> (bathroom), <span class="de">der Flur</span> (hall), <span class="de">der Balkon</span>, <span class="de">der Keller</span> (cellar), <span class="de">der Garten</span>. The toilet is <span class="de">die Toilette</span> or, informally, <span class="de">das Klo</span>.</p>' +
              '<p>To describe your home use <span class="de">Meine Wohnung hat …</span> + accusative, or <span class="de">Es gibt …</span> + accusative: <span class="de">Es gibt einen Balkon.</span> To ask: <span class="de">Wie viele Zimmer hat die Wohnung?</span></p>',
            vocab: vocabTable([
              ['die Wohnung', 'the flat'],
              ['das Zimmer', 'the room'],
              ['das Wohnzimmer', 'the living room'],
              ['das Schlafzimmer', 'the bedroom'],
              ['das Kinderzimmer', 'the child’s room'],
              ['die Küche', 'the kitchen'],
              ['das Bad', 'the bathroom'],
              ['die Toilette', 'the toilet'],
              ['der Flur', 'the hall'],
              ['der Balkon', 'the balcony'],
              ['der Keller', 'the cellar'],
              ['der Garten', 'the garden'],
              ['hell / dunkel', 'bright / dark'],
              ['groß / klein', 'big / small']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('es gibt + Akkusativ', ['', 'Example'], [
                ['der Balkon', 'Es gibt <strong>einen</strong> Balkon.'],
                ['die Küche', 'Es gibt <strong>eine</strong> Küche.'],
                ['das Bad', 'Es gibt <strong>ein</strong> Bad.'],
                ['der Garten (nein)', 'Es gibt <strong>keinen</strong> Garten.']
              ]) +
              '<p class="note"><em>es gibt</em> = there is / there are. It never changes for plural: <span class="de">Es gibt zwei Schlafzimmer.</span> Compound nouns take the gender of the last word: <em>das Zimmer → das Wohnzimmer</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — your new flat', [
              ['Lena', 'Wie ist deine neue Wohnung?'],
              ['Sıla', 'Sie ist toll! Sie hat drei Zimmer, eine Küche und ein Bad.'],
              ['Lena', 'Gibt es einen Balkon?'],
              ['Sıla', 'Ja, es gibt einen kleinen Balkon. Aber es gibt keinen Garten.'],
              ['Lena', 'Ist das Wohnzimmer groß?'],
              ['Sıla', 'Ja, es ist groß und sehr hell.']
            ]),
            exercises: exerciseList([
              exSelect('Man kocht in der:', 'Küche', ['Küche', 'Keller', 'Flur']),
              exSelect('Man schläft im:', 'Schlafzimmer', ['Wohnzimmer', 'Schlafzimmer', 'Bad']),
              exSelect('Man duscht im:', 'Bad', ['Bad', 'Garten', 'Flur']),
              exSelect('___ Wohnzimmer', 'das', ['der', 'die', 'das']),
              exSelect('Es gibt ___ Balkon. (der)', 'einen', ['ein', 'einen', 'eine']),
              exSelect('Es gibt ___ Garten. (nein)', 'keinen', ['kein', 'keine', 'keinen']),
              exSelect('Das Gegenteil von „hell" ist:', 'dunkel', ['dunkel', 'klein', 'alt'])
            ])
          },
          {
            icon: '🛋️', title: 'Furniture and objects', note: 'Describing what is in each room',
            explanation:
              '<p>Furniture (<span class="de">die Möbel</span>, always plural) is a good place to practise articles. A useful trick: many big pieces are masculine (<span class="de">der Tisch, der Stuhl, der Schrank, der Sessel, der Kühlschrank</span>), many electrical things are masculine or neuter (<span class="de">der Fernseher, das Handy</span>), and words ending in <em>-e</em> are often feminine (<span class="de">die Lampe, die Dusche, die Badewanne</span>).</p>' +
              '<p>To describe a room: <span class="de">Im Wohnzimmer gibt es ein Sofa, einen Tisch und zwei Sessel.</span> To give an opinion use a short adjective after <span class="de">sein</span>: <span class="de">Das Sofa ist bequem. Der Schrank ist alt.</span></p>' +
              '<p>Remember that a pronoun replaces the noun with the same gender: <span class="de">der Tisch → er</span>, <span class="de">die Lampe → sie</span>, <span class="de">das Bett → es</span>. <span class="de">Wie findest du die Lampe? — Sie ist schön.</span></p>',
            vocab: vocabTable([
              ['die Möbel (Pl.)', 'the furniture'],
              ['der Tisch', 'the table'],
              ['der Stuhl', 'the chair'],
              ['das Sofa', 'the sofa'],
              ['der Sessel', 'the armchair'],
              ['das Bett', 'the bed'],
              ['der Schrank', 'the cupboard, wardrobe'],
              ['das Regal', 'the shelf'],
              ['die Lampe', 'the lamp'],
              ['der Teppich', 'the rug'],
              ['der Kühlschrank', 'the fridge'],
              ['der Herd', 'the cooker'],
              ['die Dusche', 'the shower'],
              ['der Spiegel', 'the mirror'],
              ['bequem', 'comfortable'],
              ['modern / alt', 'modern / old']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Noun → pronoun', ['Noun', 'Pronoun', 'Example'], [
                ['der Tisch', '<strong>er</strong>', 'Der Tisch ist neu. <strong>Er</strong> ist aus Holz.'],
                ['die Lampe', '<strong>sie</strong>', 'Die Lampe ist schön. <strong>Sie</strong> ist modern.'],
                ['das Bett', '<strong>es</strong>', 'Das Bett ist groß. <strong>Es</strong> ist bequem.'],
                ['die Stühle (Pl.)', '<strong>sie</strong>', 'Die Stühle sind alt. <strong>Sie</strong> sind kaputt.']
              ]) +
              '<p class="note">In English a table is “it”; in German it is <em>er</em>, because <em>der Tisch</em> is masculine.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — furnishing the flat', [
              ['Tom', 'Was brauchst du noch für die Wohnung?'],
              ['Lena', 'Ich brauche einen Tisch und vier Stühle für die Küche.'],
              ['Tom', 'Und für das Wohnzimmer?'],
              ['Lena', 'Ein Sofa habe ich schon. Es ist alt, aber sehr bequem.'],
              ['Tom', 'Wie findest du die Lampe hier?'],
              ['Lena', 'Sie ist schön! Aber sie ist zu teuer.']
            ]),
            exercises: exerciseList([
              exSelect('___ Tisch', 'der', ['der', 'die', 'das']),
              exSelect('___ Lampe', 'die', ['der', 'die', 'das']),
              exSelect('___ Bett', 'das', ['der', 'die', 'das']),
              exSelect('Der Schrank ist alt. ___ ist aus Holz.', 'Er', ['Er', 'Sie', 'Es']),
              exSelect('Das Sofa ist neu. ___ ist bequem.', 'Es', ['Er', 'Sie', 'Es']),
              exSelect('Lebensmittel sind kalt im:', 'Kühlschrank', ['Kühlschrank', 'Herd', 'Schrank']),
              exInput('Im Wohnzimmer gibt es ___________ Sofa. (ein)', 'ein'),
              exSelect('„Möbel" ist:', 'immer Plural', ['immer Singular', 'immer Plural', 'feminin'])
            ])
          },
          {
            icon: '📍', title: 'Where things are', note: 'in, auf, unter, neben, zwischen, hinter, vor',
            explanation:
              '<p>To say <strong>where</strong> something is (question <span class="de">Wo?</span>), German uses a group of prepositions with the <strong>dative</strong>: <span class="de">in, an, auf, unter, über, neben, zwischen, hinter, vor</span>.</p>' +
              '<p>In the dative the articles change: <span class="de">der → dem</span>, <span class="de">das → dem</span>, <span class="de">die → der</span>, plural <span class="de">die → den</span> (+ -n on the noun). <span class="de">Das Buch liegt auf dem Tisch. Die Katze schläft unter dem Bett. Die Lampe steht neben der Couch.</span></p>' +
              '<p>Two short forms are very common: <span class="de">in dem → im</span> and <span class="de">an dem → am</span>. <span class="de">Im Schrank, am Fenster.</span> German also uses different verbs for position: <span class="de">stehen</span> (upright), <span class="de">liegen</span> (flat), <span class="de">hängen</span> (hanging).</p>',
            vocab: vocabTable([
              ['in', 'in'],
              ['an', 'at, on (vertical surface)'],
              ['auf', 'on (top)'],
              ['unter', 'under'],
              ['über', 'above'],
              ['neben', 'next to'],
              ['zwischen', 'between'],
              ['hinter', 'behind'],
              ['vor', 'in front of'],
              ['stehen', 'to stand'],
              ['liegen', 'to lie'],
              ['hängen', 'to hang'],
              ['Wo ist …?', 'Where is …?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Wo? → Dativ', ['', 'masculine', 'feminine', 'neuter', 'plural'], [
                ['Nominativ', 'der Tisch', 'die Wand', 'das Bett', 'die Stühle'],
                ['Dativ', 'auf <strong>dem</strong> Tisch', 'an <strong>der</strong> Wand', 'unter <strong>dem</strong> Bett', 'zwischen <strong>den</strong> Stühle<strong>n</strong>'],
                ['short form', '<strong>im</strong> Schrank, <strong>am</strong> Fenster', '—', '<strong>im</strong> Bad', '—']
              ]) +
              '<p class="note">These are “two-way” prepositions: with <em>Wo?</em> they take the dative. With <em>Wohin?</em> (movement) they take the accusative — that comes at A2.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — where are my keys?', [
              ['Tom', 'Lena, wo sind meine Schlüssel?'],
              ['Lena', 'Liegen sie nicht auf dem Tisch?'],
              ['Tom', 'Nein, auf dem Tisch liegt nur die Zeitung.'],
              ['Lena', 'Vielleicht im Flur, neben der Tür?'],
              ['Tom', 'Nein … Ah, hier! Sie sind in der Jacke. Die Jacke hängt hinter der Tür.']
            ]),
            exercises: exerciseList([
              exSelect('Das Buch liegt auf ___ Tisch. (der)', 'dem', ['der', 'den', 'dem']),
              exSelect('Die Lampe steht neben ___ Sofa. (das)', 'dem', ['das', 'dem', 'der']),
              exSelect('Das Bild hängt an ___ Wand. (die)', 'der', ['die', 'der', 'dem']),
              exSelect('Die Katze schläft ___ dem Bett. (under)', 'unter', ['unter', 'über', 'vor']),
              exSelect('Der Teller ist ___ Schrank. (in dem)', 'im', ['im', 'in', 'ins']),
              exSelect('Ein Buch ___ auf dem Tisch. (flat)', 'liegt', ['steht', 'liegt', 'hängt']),
              exSelect('Ein Bild ___ an der Wand.', 'hängt', ['steht', 'liegt', 'hängt']),
              exInput('„next to" auf Deutsch: ___________', 'neben')
            ])
          },
          {
            icon: '🏘️', title: 'Flats, houses and rent', note: 'Wohnung, Haus, Miete, Nebenkosten',
            explanation:
              '<p>Most people in German cities rent a flat: <span class="de">eine Wohnung mieten</span>. The rent is <span class="de">die Miete</span>. Two different figures matter: <span class="de">die Kaltmiete</span> (rent only) and <span class="de">die Warmmiete</span> (rent + <span class="de">Nebenkosten</span>, i.e. heating, water, rubbish). Electricity (<span class="de">Strom</span>) is usually extra.</p>' +
              '<p>Before you move in you often pay a <span class="de">Kaution</span> (deposit), usually up to three months of cold rent. The landlord is <span class="de">der Vermieter / die Vermieterin</span>, the tenant <span class="de">der Mieter / die Mieterin</span>.</p>' +
              '<p>A <span class="de">WG</span> (Wohngemeinschaft) is a shared flat — very common among students and young workers. To talk about where you live: <span class="de">Ich wohne in einer Wohnung / in einer WG / in einem Haus.</span> <span class="de">Ich wohne im dritten Stock.</span></p>',
            vocab: vocabTable([
              ['mieten', 'to rent'],
              ['die Miete', 'the rent'],
              ['die Kaltmiete / Warmmiete', 'rent without / with extra costs'],
              ['die Nebenkosten (Pl.)', 'the extra costs'],
              ['die Kaution', 'the deposit'],
              ['der Vermieter / die Vermieterin', 'the landlord / landlady'],
              ['der Mieter / die Mieterin', 'the tenant'],
              ['die WG', 'the shared flat'],
              ['das Haus', 'the house'],
              ['der Stock / die Etage', 'the floor'],
              ['das Erdgeschoss', 'the ground floor'],
              ['der Aufzug', 'the lift'],
              ['ruhig / laut', 'quiet / noisy'],
              ['zentral', 'central']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Where do you live? — in + Dativ', ['', 'Example'], [
                ['die Wohnung', 'Ich wohne in <strong>einer</strong> Wohnung.'],
                ['das Haus', 'Ich wohne in <strong>einem</strong> Haus.'],
                ['die WG', 'Ich wohne in <strong>einer</strong> WG.'],
                ['der Stock', 'Ich wohne <strong>im</strong> zweiten Stock.']
              ]) +
              '<p class="note">Dative of <em>ein</em>: <em>einem</em> (masc./neut.), <em>einer</em> (fem.). Floors: <em>im Erdgeschoss, im ersten Stock</em> (= first floor above the ground floor).</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — how much is the rent?', [
              ['Lena', 'Wohnst du allein?'],
              ['Sıla', 'Nein, ich wohne in einer WG mit zwei Studentinnen.'],
              ['Lena', 'Wie hoch ist die Miete?'],
              ['Sıla', 'Mein Zimmer kostet 420 Euro warm. Strom ist extra.'],
              ['Lena', 'Das ist nicht schlecht. Ist die Wohnung zentral?'],
              ['Sıla', 'Ja, sehr zentral, aber ein bisschen laut. Wir wohnen im ersten Stock.']
            ]),
            exercises: exerciseList([
              exSelect('Das Geld für die Wohnung jeden Monat ist die:', 'Miete', ['Miete', 'Kaution', 'Rechnung']),
              exSelect('Miete + Nebenkosten =', 'Warmmiete', ['Kaltmiete', 'Warmmiete', 'Kaution']),
              exSelect('Eine Wohnung für mehrere Personen, die nicht Familie sind:', 'eine WG', ['ein Haus', 'eine WG', 'ein Keller']),
              exSelect('Ich wohne in ___ Wohnung.', 'einer', ['ein', 'eine', 'einer']),
              exSelect('Ich wohne in ___ Haus.', 'einem', ['ein', 'einem', 'einer']),
              exSelect('Die Person, die die Wohnung vermietet, ist der:', 'Vermieter', ['Mieter', 'Vermieter', 'Nachbar']),
              exSelect('Das Gegenteil von „laut" ist:', 'ruhig', ['ruhig', 'hell', 'teuer'])
            ])
          },
          {
            icon: '📰', title: 'Reading a flat advert', note: 'Abbreviations: 2 ZKB, qm, NK, WG',
            explanation:
              '<p>German flat adverts (<span class="de">Wohnungsanzeigen</span>) are full of abbreviations. Once you know about ten of them you can read almost any advert.</p>' +
              '<p>The most important: <span class="de">2 ZKB</span> = 2 Zimmer, Küche, Bad; <span class="de">qm / m²</span> = Quadratmeter; <span class="de">KM</span> = Kaltmiete; <span class="de">NK</span> = Nebenkosten; <span class="de">WM</span> = Warmmiete; <span class="de">EG / OG / DG</span> = Erdgeschoss / Obergeschoss / Dachgeschoss; <span class="de">EBK</span> = Einbauküche (fitted kitchen); <span class="de">Blk.</span> = Balkon; <span class="de">ab sofort</span> = available now; <span class="de">NR</span> = Nichtraucher.</p>' +
              '<p>Tip: in Germany a flat is often rented <em>without</em> a kitchen. <span class="de">mit EBK</span> is a big advantage.</p>',
            vocab: vocabTable([
              ['die Anzeige', 'the advert'],
              ['ZKB', 'Zimmer, Küche, Bad'],
              ['qm / m²', 'square metres'],
              ['KM / WM', 'cold rent / warm rent'],
              ['NK', 'extra costs'],
              ['EG / 1. OG / DG', 'ground / 1st / top floor'],
              ['EBK', 'fitted kitchen'],
              ['Blk.', 'balcony'],
              ['ab sofort', 'available now'],
              ['ab 1.5.', 'from 1 May'],
              ['NR', 'non-smoker'],
              ['die Besichtigung', 'the viewing']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">3 ZKB, 75 qm, 2. OG, Blk., EBK, KM 850 € + NK 180 €, ab 1.6.<br>= <em>Drei Zimmer, Küche, Bad, 75 Quadratmeter, zweiter Stock, Balkon, Einbauküche, Kaltmiete 850 Euro plus 180 Euro Nebenkosten, ab dem ersten Juni.</em></div>' +
              '<p class="note">Read numbers aloud as words: 75 qm = <em>fünfundsiebzig Quadratmeter</em>; 2. OG = <em>zweites Obergeschoss</em> / <em>zweiter Stock</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — calling about the advert', [
              ['Sıla', 'Guten Tag, ich rufe wegen der Wohnung in der Anzeige an. Ist sie noch frei?'],
              ['Vermieterin', 'Ja, die Wohnung ist noch frei.'],
              ['Sıla', 'Hat die Wohnung eine Einbauküche?'],
              ['Vermieterin', 'Ja, mit EBK und Balkon.'],
              ['Sıla', 'Kann ich die Wohnung besichtigen?'],
              ['Vermieterin', 'Gern. Die Besichtigung ist am Samstag um 11 Uhr.']
            ]),
            exercises: exerciseList([
              exSelect('„2 ZKB" bedeutet:', '2 Zimmer, Küche, Bad', ['2 Zimmer, Küche, Bad', '2 Küchen, Bad', '2 Zimmer, Keller, Balkon']),
              exSelect('„EBK" ist eine:', 'Einbauküche', ['Einbauküche', 'Etage', 'Erdgeschoss']),
              exSelect('„EG" ist das:', 'Erdgeschoss', ['Erdgeschoss', 'Dachgeschoss', 'Obergeschoss']),
              exSelect('„KM 600 € + NK 150 €" — wie hoch ist die Warmmiete?', '750 €', ['600 €', '150 €', '750 €']),
              exSelect('„ab sofort" bedeutet:', 'available now', ['available now', 'from next month', 'no pets']),
              exInput('„qm" = Quadrat___________', 'meter'),
              exSelect('Man sieht die Wohnung bei der:', 'Besichtigung', ['Besichtigung', 'Kaution', 'Anzeige'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: rooms, furniture and their pronouns, es gibt, where things are with the dative, renting and flat adverts.</p>',
        exercises: exerciseList([
          exSelect('Man kocht in der:', 'Küche', ['Küche', 'Keller', 'Flur']),
          exSelect('Es gibt ___ Balkon. (der)', 'einen', ['ein', 'einen', 'eine']),
          exSelect('___ Lampe', 'die', ['der', 'die', 'das']),
          exSelect('Der Schrank ist alt. ___ ist aus Holz.', 'Er', ['Er', 'Sie', 'Es']),
          exSelect('Das Buch liegt auf ___ Tisch.', 'dem', ['der', 'den', 'dem']),
          exSelect('Das Bild hängt an ___ Wand.', 'der', ['die', 'der', 'dem']),
          exSelect('Der Teller ist ___ Schrank.', 'im', ['im', 'in', 'ins']),
          exSelect('Ein Buch ___ auf dem Tisch. (flat)', 'liegt', ['steht', 'liegt', 'hängt']),
          exSelect('Ich wohne in ___ Wohnung.', 'einer', ['ein', 'eine', 'einer']),
          exSelect('Miete + Nebenkosten =', 'Warmmiete', ['Kaltmiete', 'Warmmiete', 'Kaution']),
          exSelect('„EBK" ist eine:', 'Einbauküche', ['Einbauküche', 'Etage', 'Erdgeschoss']),
          exInput('„next to" auf Deutsch: ___________', 'neben')
        ]),

        reading: {
          intro: 'Three short flat adverts. Read for size, price, floor and what is included.',
          words: 95, minutes: 6,
          text: readingText('Wohnungsanzeigen', [
            '<strong>A)</strong> Helle 2-ZKB-Wohnung, 55 qm, 3. OG, kein Aufzug, Blk., EBK. KM 640 €, NK 140 €. Ab sofort. Tel. 0171 223344.',
            '<strong>B)</strong> WG-Zimmer, 16 qm, möbliert, in 3er-WG, zentral, 390 € warm. Nur NR. Ab 1.4. E-Mail: wg-lindenstrasse@mail.de',
            '<strong>C)</strong> Haus mit Garten, 4 Zimmer, Küche, 2 Bäder, 120 qm, ruhig am Stadtrand. KM 1.450 € + NK. Haustiere erlaubt. Besichtigung Sa. 10 Uhr.'
          ], 'Anzeigen, fiktiv'),
          glossary: vocabTable([
            ['möbliert', 'furnished'],
            ['der Stadtrand', 'the edge of town'],
            ['erlaubt', 'allowed'],
            ['3er-WG', 'flat share for three people']
          ]),
          questions: exerciseList([
            exSelect('Welche Wohnung hat einen Garten?', 'C', ['A', 'B', 'C']),
            exInput('Wie hoch ist die Warmmiete von Wohnung A? (… €)', '780|780 €'),
            exTF('Wohnung A hat einen Aufzug.', false),
            exSelect('Welches Angebot ist möbliert?', 'B', ['A', 'B', 'C']),
            exSelect('Ab wann ist das WG-Zimmer frei?', 'ab 1. April', ['ab sofort', 'ab 1. April', 'ab Samstag']),
            exTF('Im Haus C sind Haustiere erlaubt.', true),
            exInput('Wie viele Quadratmeter hat das Haus? (Zahl)', '120')
          ])
        },

        listening: {
          title: 'Die neue Wohnung',
          intro: 'Sıla shows a friend her new flat. Listen for the rooms and where the furniture is.',
          lines: [
            ['Sıla', 'Komm rein! Hier links ist die Küche. Sie ist klein, aber sie hat eine Einbauküche.'],
            ['Tom', 'Schön! Und wo ist das Bad?'],
            ['Sıla', 'Das Bad ist gegenüber, neben dem Schlafzimmer.'],
            ['Tom', 'Und das hier ist das Wohnzimmer? Es ist sehr hell!'],
            ['Sıla', 'Ja. Das Sofa steht vor dem Fenster, und der Fernseher steht an der Wand.'],
            ['Tom', 'Gibt es einen Balkon?'],
            ['Sıla', 'Ja, hinter dem Wohnzimmer. Aber es gibt keinen Keller.'],
            ['Tom', 'Und wie viel kostet die Wohnung?'],
            ['Sıla', '700 Euro warm. Das ist okay für Hamburg.']
          ],
          questions: exerciseList([
            exSelect('Wo ist die Küche?', 'links', ['links', 'rechts', 'neben dem Bad']),
            exTF('Die Küche ist groß.', false),
            exSelect('Wo ist das Bad?', 'neben dem Schlafzimmer', ['neben dem Schlafzimmer', 'neben der Küche', 'hinter dem Wohnzimmer']),
            exSelect('Wo steht das Sofa?', 'vor dem Fenster', ['an der Wand', 'vor dem Fenster', 'im Schlafzimmer']),
            exTF('Die Wohnung hat einen Keller.', false),
            exInput('Wie viel kostet die Wohnung warm? (… Euro)', '700|700 Euro'),
            exInput('In welcher Stadt wohnt Sıla?', 'Hamburg|in Hamburg')
          ])
        },

        writing: {
          title: 'Meine Wohnung',
          textType: 'Kurze E-Mail an eine Freundin',
          minWords: 35, maxWords: 70, minutes: 15,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Sie wohnen in einer neuen Wohnung. Schreiben Sie einer Freundin eine E-Mail und beschreiben Sie die Wohnung.</p>' +
            '<p class="note">You have moved into a new flat. Write an e-mail to a friend describing it.</p>',
          plainTask: 'Write a short informal e-mail in German (35–70 words) to a friend about your new flat. Say how many rooms it has, describe one room and where two pieces of furniture are, say how much the rent is, and invite your friend to visit.',
          bullets: [
            'Wie viele <strong>Zimmer</strong> hat die Wohnung? Gibt es einen Balkon?',
            'Beschreiben Sie <strong>ein Zimmer</strong>: Was steht wo?',
            'Wie hoch ist die <strong>Miete</strong>?',
            'Laden Sie Ihre Freundin <strong>ein</strong>.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Liebe Anna, · Hallo Tom,'],
            ['Wohnung', 'Meine Wohnung hat drei Zimmer. · Es gibt einen Balkon.'],
            ['Ort', 'Das Sofa steht vor dem Fenster. · Das Bett steht neben dem Schrank.'],
            ['Miete', 'Die Miete ist 650 Euro warm.'],
            ['Einladung', 'Besuch mich doch am Wochenende!'],
            ['Gruß', 'Viele Grüße · Bis bald!']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich sage, wie viele Zimmer die Wohnung hat.',
            'Ich sage mit Präpositionen + Dativ, wo zwei Möbel stehen.',
            'Ich nenne die Miete.',
            'Ich lade meine Freundin ein.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 35 und 70 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Most people rent.</strong> Germany has one of the lowest home-ownership rates in Europe — about half of all households rent, in big cities far more. Tenants have strong legal protection.</p>' +
          '<p><strong>Bring your own kitchen.</strong> Unfurnished flats are often rented without a kitchen, and tenants take their kitchen with them when they move. An advert saying <em>mit EBK</em> is a plus.</p>' +
          '<p><strong>Quiet hours.</strong> Most house rules (<em>Hausordnung</em>) set <em>Ruhezeiten</em>: usually 10 pm to 6/7 am, and in many buildings all day Sunday. Loud music, drilling or vacuuming at those times can cause trouble with the neighbours.</p>' +
          '<p><strong>Rubbish is sorted.</strong> Paper, packaging (<em>gelbe Tonne / gelber Sack</em>), glass, organic waste (<em>Biotonne</em>) and the rest (<em>Restmüll</em>) go into different bins.</p>' +
          '<p><strong>Register your address.</strong> After moving, you must register at the <em>Bürgeramt</em> within two weeks (<em>Anmeldung</em>). You need a form from your landlord, the <em>Wohnungsgeberbestätigung</em>.</p>',

        recap: [
          { group: '🚪 Zimmer', rows: [
            ['die Wohnung', 'the flat'], ['das Wohnzimmer', 'the living room'], ['das Schlafzimmer', 'the bedroom'],
            ['die Küche', 'the kitchen'], ['das Bad', 'the bathroom'], ['der Flur', 'the hall'], ['der Balkon', 'the balcony'], ['der Keller', 'the cellar']
          ] },
          { group: '🛋️ Möbel', rows: [
            ['der Tisch', 'the table'], ['der Stuhl', 'the chair'], ['das Sofa', 'the sofa'], ['das Bett', 'the bed'],
            ['der Schrank', 'the cupboard'], ['die Lampe', 'the lamp'], ['der Kühlschrank', 'the fridge'], ['bequem', 'comfortable']
          ] },
          { group: '📍 Wo?', rows: [
            ['auf dem Tisch', 'on the table'], ['unter dem Bett', 'under the bed'], ['neben der Tür', 'next to the door'],
            ['an der Wand', 'on the wall'], ['im Schrank', 'in the cupboard'], ['zwischen', 'between'], ['hinter / vor', 'behind / in front of'],
            ['stehen / liegen / hängen', 'stand / lie / hang']
          ] },
          { group: '🏘️ Mieten', rows: [
            ['die Miete', 'the rent'], ['die Nebenkosten', 'the extra costs'], ['die Kaution', 'the deposit'],
            ['der Vermieter', 'the landlord'], ['die WG', 'the flat share'], ['der Stock', 'the floor']
          ] },
          { group: '📰 Anzeige', rows: [
            ['ZKB', 'rooms, kitchen, bathroom'], ['qm', 'square metres'], ['EBK', 'fitted kitchen'],
            ['ab sofort', 'available now'], ['die Besichtigung', 'the viewing']
          ] }
        ],

        sentences: [
          { de: 'Meine Wohnung hat drei Zimmer', en: 'My flat has three rooms' },
          { de: 'Es gibt einen Balkon', en: 'There is a balcony' },
          { de: 'Das Buch liegt auf dem Tisch', en: 'The book is lying on the table' },
          { de: 'Die Lampe steht neben dem Sofa', en: 'The lamp is standing next to the sofa' },
          { de: 'Ich wohne in einer WG', en: 'I live in a shared flat' },
          { de: 'Die Miete ist 600 Euro warm', en: 'The rent is 600 euros including extra costs' }
        ]
      },

      { // ===== UNIT 9 — written out in full =====
        title: '⏰ Unit 9 — Daily Routine',
        subject: 'Tagesablauf',
        canDo: ['Describe your day in order with times', 'Say how often you do something'],
        grammarFocus: ['Separable verbs', 'Reflexive verbs (introduction)', 'Time adverbs and position in the sentence'],
        topics: [
          {
            icon: '🌞', title: 'A normal weekday', note: 'aufstehen, duschen, frühstücken, zur Arbeit fahren',
            explanation:
              '<p>To describe your day, give each action a time: <span class="de">Um sieben Uhr stehe ich auf.</span> When the time comes first, the verb still stays in <strong>position 2</strong>, so the subject moves behind it: <span class="de">Um acht <strong>fahre</strong> ich zur Arbeit.</span> This is called inversion, and it is the most important word-order rule in German.</p>' +
              '<p>Sequence words help you tell the day in order: <span class="de">zuerst</span> (first), <span class="de">dann</span> (then), <span class="de">danach</span> (after that), <span class="de">später</span> (later), <span class="de">zum Schluss</span> (finally). They also count as position 1: <span class="de">Dann <strong>dusche</strong> ich.</span></p>' +
              '<p>Parts of the day: <span class="de">morgens, vormittags, mittags, nachmittags, abends, nachts</span> — the forms with <em>-s</em> mean “every morning, in the mornings”.</p>',
            vocab: vocabTable([
              ['aufstehen', 'to get up'],
              ['duschen', 'to shower'],
              ['frühstücken', 'to have breakfast'],
              ['zur Arbeit fahren', 'to go to work'],
              ['arbeiten', 'to work'],
              ['Mittagspause machen', 'to have a lunch break'],
              ['nach Hause kommen', 'to come home'],
              ['kochen', 'to cook'],
              ['fernsehen', 'to watch TV'],
              ['ins Bett gehen', 'to go to bed'],
              ['schlafen', 'to sleep'],
              ['zuerst / dann / danach', 'first / then / after that'],
              ['morgens / abends', 'in the mornings / evenings']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Verb in position 2', ['Position 1', 'Position 2 (verb)', 'Rest'], [
                ['Ich', '<strong>stehe</strong>', 'um sieben Uhr auf.'],
                ['Um sieben Uhr', '<strong>stehe</strong>', 'ich auf.'],
                ['Dann', '<strong>dusche</strong>', 'ich.'],
                ['Morgens', '<strong>trinke</strong>', 'ich Kaffee.']
              ]) +
              '<p class="note">Never <s>Um sieben Uhr ich stehe auf</s>. Whatever stands in position 1, the verb comes next.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — a typical day', [
              ['Tom', 'Wann stehst du auf?'],
              ['Sıla', 'Ich stehe um halb sieben auf. Zuerst dusche ich, dann frühstücke ich.'],
              ['Tom', 'Und wann fährst du zur Arbeit?'],
              ['Sıla', 'Um Viertel nach sieben. Ich arbeite von acht bis vier.'],
              ['Tom', 'Und abends?'],
              ['Sıla', 'Abends koche ich und sehe ein bisschen fern. Um elf gehe ich ins Bett.']
            ]),
            exercises: exerciseList([
              exSelect('Um sieben Uhr ___ ich.', 'dusche', ['dusche', 'ich dusche', 'duschen']),
              exSelect('Richtig ist:', 'Dann frühstücke ich.', ['Dann ich frühstücke.', 'Dann frühstücke ich.', 'Dann frühstücken ich.']),
              exSelect('Abends ___ ich.', 'koche', ['koche', 'kochen', 'ich koche']),
              exSelect('„zuerst" bedeutet:', 'first', ['first', 'later', 'finally']),
              exSelect('„morgens" bedeutet:', 'in the mornings', ['tomorrow', 'in the mornings', 'at night']),
              exInput('Um 23 Uhr gehe ich ins ___________. (bed)', 'Bett'),
              exInput('Wort-Reihenfolge: <i>arbeite / ich / dann</i> → ___________', 'Dann arbeite ich|Dann arbeite ich.')
            ])
          },
          {
            icon: '🔀', title: 'Separable verbs', note: 'Why the prefix jumps to the end of the sentence',
            explanation:
              '<p>Many everyday verbs have a small prefix that splits off: <span class="de">aufstehen, einkaufen, anrufen, fernsehen, mitkommen, aufräumen</span>. In a normal sentence the verb part goes to position 2 and the <strong>prefix jumps to the end</strong>: <span class="de">Ich <strong>stehe</strong> um sieben <strong>auf</strong>.</span> Together the two parts form a bracket around the sentence (<span class="de">Satzklammer</span>).</p>' +
              '<p>In the infinitive — for example after <span class="de">möchten, können, müssen</span> — the verb stays together at the end: <span class="de">Ich muss um sieben <strong>aufstehen</strong>.</span></p>' +
              '<p>How do you know if a prefix separates? The prefix is <strong>stressed</strong>: <span class="de">AUFstehen, EINkaufen, ANrufen</span>. Prefixes like <span class="de">be-, ver-, er-, ent-</span> are never stressed and never separate: <span class="de">Ich besuche dich. Ich verstehe.</span></p>',
            vocab: vocabTable([
              ['aufstehen', 'to get up'],
              ['einkaufen', 'to shop'],
              ['anrufen', 'to call (phone)'],
              ['fernsehen', 'to watch TV'],
              ['aufräumen', 'to tidy up'],
              ['mitkommen', 'to come along'],
              ['anfangen', 'to begin'],
              ['aufhören', 'to stop'],
              ['abholen', 'to pick up'],
              ['einschlafen', 'to fall asleep'],
              ['besuchen (not separable)', 'to visit'],
              ['verstehen (not separable)', 'to understand']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('The sentence bracket', ['', 'Position 2', 'Middle', 'End'], [
                ['Ich', '<strong>stehe</strong>', 'um 7 Uhr', '<strong>auf</strong>.'],
                ['Wir', '<strong>kaufen</strong>', 'am Samstag', '<strong>ein</strong>.'],
                ['Er', '<strong>ruft</strong>', 'seine Mutter', '<strong>an</strong>.'],
                ['Ich', '<strong>muss</strong>', 'um 7 Uhr', '<strong>aufstehen</strong>.'],
                ['<strong>Kommst</strong>', 'du', 'heute', '<strong>mit</strong>?']
              ]) +
              '<p class="note">In questions the verb moves to position 1, but the prefix still goes to the end: <span class="de">Wann stehst du auf?</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — Saturday plans', [
              ['Lena', 'Was machst du am Samstag?'],
              ['Tom', 'Am Vormittag räume ich die Wohnung auf. Dann kaufe ich ein.'],
              ['Lena', 'Ich rufe dich am Nachmittag an. Kommst du dann mit ins Kino?'],
              ['Tom', 'Gern! Wann fängt der Film an?'],
              ['Lena', 'Um acht. Ich hole dich um halb acht ab.']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ um sieben ___. (aufstehen)', 'stehe … auf', ['stehe … auf', 'aufstehe …', 'stehe … an']),
              exInput('Wir ___________ am Samstag ___________. (einkaufen) — two words separated by a space', 'kaufen ein'),
              exInput('Er ___________ seine Mutter ___________. (anrufen) — two words', 'ruft an'),
              exSelect('Ich möchte heute ___.', 'fernsehen', ['fernsehen', 'sehe fern', 'fern sehen']),
              exSelect('Wann ___ der Film ___?', 'fängt … an', ['fängt … an', 'anfängt …', 'fangen … an']),
              exSelect('Welches Verb ist NICHT trennbar?', 'verstehen', ['aufstehen', 'verstehen', 'einkaufen']),
              exSelect('Ich ___ meine Oma. (besuchen)', 'besuche', ['besuche', 'suche … be', 'be … suche']),
              exInput('Kommst du ___________? (mitkommen)', 'mit')
            ])
          },
          {
            icon: '🔁', title: 'How often?', note: 'immer, oft, manchmal, selten, nie; jeden Tag',
            explanation:
              '<p>Frequency adverbs form a scale: <span class="de">immer</span> (always) → <span class="de">fast immer</span> → <span class="de">oft</span> (often) → <span class="de">manchmal</span> (sometimes) → <span class="de">selten</span> (rarely) → <span class="de">nie</span> (never). They usually stand right after the verb: <span class="de">Ich trinke <strong>oft</strong> Kaffee.</span> Or in position 1 for emphasis: <span class="de">Manchmal koche ich.</span></p>' +
              '<p>Regular repetition uses <span class="de">jeden / jede / jedes</span> + accusative: <span class="de">jeden Tag, jede Woche, jedes Jahr</span>. Or a day with <em>-s</em>: <span class="de">montags</span> (on Mondays), <span class="de">sonntags</span>. Counting: <span class="de">einmal, zweimal, dreimal pro Woche</span> (once, twice, three times a week).</p>' +
              '<p>The question is <span class="de">Wie oft …?</span> — <span class="de">Wie oft machst du Sport? — Zweimal pro Woche.</span></p>',
            vocab: vocabTable([
              ['Wie oft?', 'How often?'],
              ['immer', 'always'],
              ['meistens', 'mostly'],
              ['oft', 'often'],
              ['manchmal', 'sometimes'],
              ['selten', 'rarely'],
              ['nie', 'never'],
              ['jeden Tag', 'every day'],
              ['jede Woche', 'every week'],
              ['jedes Wochenende', 'every weekend'],
              ['einmal / zweimal pro Woche', 'once / twice a week'],
              ['montags', 'on Mondays']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('jed- + Akkusativ', ['', 'Example'], [
                ['der Tag', '<strong>jeden</strong> Tag'],
                ['die Woche', '<strong>jede</strong> Woche'],
                ['das Jahr', '<strong>jedes</strong> Jahr']
              ]) +
              '<div class="example-box">Ich jogge <strong>oft</strong>. · <strong>Manchmal</strong> gehe ich ins Kino. · Ich esse <strong>nie</strong> Fleisch. · Ich gehe <strong>zweimal pro Woche</strong> schwimmen.</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — healthy habits', [
              ['Lena', 'Wie oft machst du Sport?'],
              ['Tom', 'Ich gehe zweimal pro Woche ins Fitnessstudio. Und du?'],
              ['Lena', 'Ich jogge jeden Morgen. Montags gehe ich auch schwimmen.'],
              ['Tom', 'Jeden Morgen? Wow! Ich stehe nie so früh auf.'],
              ['Lena', 'Und isst du oft Fast Food?'],
              ['Tom', 'Nur manchmal. Meistens koche ich selbst.']
            ]),
            exercises: exerciseList([
              exSelect('Das Gegenteil von „immer" ist:', 'nie', ['oft', 'nie', 'manchmal']),
              exSelect('„selten" bedeutet:', 'rarely', ['rarely', 'often', 'sometimes']),
              exSelect('Ich gehe ___ Tag zur Arbeit.', 'jeden', ['jeden', 'jede', 'jedes']),
              exSelect('Wir telefonieren ___ Woche.', 'jede', ['jeden', 'jede', 'jedes']),
              exSelect('„on Sundays" =', 'sonntags', ['Sonntag', 'sonntags', 'am Sonntags']),
              exInput('„twice a week" = ___________ pro Woche', 'zweimal'),
              exSelect('Richtig ist:', 'Manchmal koche ich.', ['Manchmal ich koche.', 'Manchmal koche ich.', 'Ich manchmal koche.'])
            ])
          },
          {
            icon: '🪞', title: 'Reflexive routine verbs', note: 'sich waschen, sich anziehen, sich fühlen',
            explanation:
              '<p>Some verbs describe an action you do to yourself. German shows this with a <strong>reflexive pronoun</strong>: <span class="de">Ich wasche <strong>mich</strong>.</span> (I wash myself.) English often leaves it out — “I get dressed” — but German needs it: <span class="de">Ich ziehe <strong>mich</strong> an.</span></p>' +
              '<p>The pronouns are like the accusative pronouns, except for <em>er/sie/es/sie/Sie</em>, which all use <span class="de">sich</span>: <span class="de">mich, dich, sich, uns, euch, sich</span>.</p>' +
              '<p>Common routine verbs: <span class="de">sich waschen, sich anziehen, sich ausziehen, sich kämmen, sich schminken, sich rasieren, sich beeilen</span> (to hurry), and for feelings <span class="de">sich fühlen</span> (to feel) and <span class="de">sich freuen</span> (to be happy). <span class="de">Wie fühlst du dich? — Ich fühle mich gut.</span></p>',
            vocab: vocabTable([
              ['sich waschen', 'to wash (oneself)'],
              ['sich anziehen', 'to get dressed'],
              ['sich ausziehen', 'to get undressed'],
              ['sich kämmen', 'to comb one’s hair'],
              ['sich rasieren', 'to shave'],
              ['sich schminken', 'to put on make-up'],
              ['sich die Zähne putzen', 'to brush one’s teeth'],
              ['sich beeilen', 'to hurry'],
              ['sich fühlen', 'to feel'],
              ['sich freuen', 'to be happy'],
              ['sich ausruhen', 'to rest']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('sich waschen', ['Person', 'Verb', 'Reflexive pronoun'], [
                ['ich', 'wasche', '<strong>mich</strong>'],
                ['du', 'wäschst', '<strong>dich</strong>'],
                ['er / sie / es', 'wäscht', '<strong>sich</strong>'],
                ['wir', 'waschen', '<strong>uns</strong>'],
                ['ihr', 'wascht', '<strong>euch</strong>'],
                ['sie / Sie', 'waschen', '<strong>sich</strong>']
              ]) +
              '<p class="note">With inversion the pronoun follows the subject: <span class="de">Dann ziehe ich mich an.</span> With a body part the pronoun is dative (<span class="de">Ich putze mir die Zähne</span>) — learn this one as a phrase.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — late again!', [
              ['Mutter', 'Max, es ist schon halb acht! Beeil dich!'],
              ['Max', 'Ja, ja. Ich wasche mich gerade.'],
              ['Mutter', 'Zieh dich schnell an! Und putz dir die Zähne!'],
              ['Max', 'Ich fühle mich nicht so gut …'],
              ['Mutter', 'Du hast heute einen Test, oder?'],
              ['Max', '… Okay, okay. Ich komme.']
            ]),
            exercises: exerciseList([
              exSelect('Ich wasche ___.', 'mich', ['mich', 'mir', 'sich']),
              exSelect('Du ziehst ___ an.', 'dich', ['dich', 'sich', 'mich']),
              exSelect('Er rasiert ___.', 'sich', ['ihn', 'sich', 'er']),
              exSelect('Wir beeilen ___.', 'uns', ['uns', 'sich', 'euch']),
              exSelect('Wie fühlen Sie ___?', 'sich', ['sie', 'sich', 'Sie']),
              exInput('Ihr freut ___________. (pronoun)', 'euch'),
              exSelect('Richtig ist:', 'Dann ziehe ich mich an.', ['Dann ziehe mich ich an.', 'Dann ziehe ich mich an.', 'Dann ich ziehe mich an.'])
            ])
          },
          {
            icon: '🌙', title: 'Evening and weekend', note: 'Talking about free evenings and Sundays',
            explanation:
              '<p>Free time is when people use <span class="de">am</span> + day or part of the day: <span class="de">am Abend, am Wochenende, am Sonntag</span>. Activities often use <span class="de">gehen</span> + infinitive: <span class="de">Ich gehe schwimmen / einkaufen / spazieren / essen.</span></p>' +
              '<p>To talk about plans in the near future, German simply uses the <strong>present tense</strong> + a time word: <span class="de">Am Samstag besuche ich meine Eltern.</span> (On Saturday I’m visiting my parents.)</p>' +
              '<p>Useful contrast words: <span class="de">unter der Woche</span> (during the week) vs. <span class="de">am Wochenende</span>. <span class="de">Unter der Woche habe ich wenig Zeit, aber am Wochenende schlafe ich lange.</span></p>',
            vocab: vocabTable([
              ['der Feierabend', 'the end of the working day'],
              ['das Wochenende', 'the weekend'],
              ['am Wochenende', 'at the weekend'],
              ['unter der Woche', 'during the week'],
              ['ausschlafen', 'to sleep in'],
              ['spazieren gehen', 'to go for a walk'],
              ['Freunde treffen', 'to meet friends'],
              ['ausgehen', 'to go out'],
              ['entspannen', 'to relax'],
              ['lesen', 'to read'],
              ['faulenzen', 'to be lazy'],
              ['lange schlafen', 'to sleep late']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Time words', ['', 'Example'], [
                ['am + day', '<strong>Am</strong> Sonntag schlafe ich aus.'],
                ['am + part of day', '<strong>Am</strong> Abend sehe ich fern. (but: in der Nacht)'],
                ['gehen + infinitive', 'Ich <strong>gehe</strong> am Samstag <strong>schwimmen</strong>.'],
                ['present for future', 'Morgen <strong>besuche</strong> ich meine Oma.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — the weekend', [
              ['Lena', 'Was machst du am Wochenende?'],
              ['Tom', 'Am Samstag schlafe ich aus. Am Nachmittag treffe ich Freunde.'],
              ['Lena', 'Und am Sonntag?'],
              ['Tom', 'Am Sonntag gehe ich spazieren und am Abend lese ich. Und du?'],
              ['Lena', 'Ich besuche meine Eltern. Unter der Woche habe ich keine Zeit.']
            ]),
            exercises: exerciseList([
              exSelect('___ Wochenende schlafe ich aus.', 'Am', ['Am', 'Im', 'Um']),
              exSelect('Ich gehe am Sonntag ___.', 'spazieren', ['spazieren', 'spaziere', 'spazierst']),
              exSelect('„ausschlafen" bedeutet:', 'to sleep in', ['to go out', 'to sleep in', 'to relax']),
              exSelect('Morgen ___ ich meine Oma.', 'besuche', ['besuche', 'besuchen', 'ich besuche']),
              exSelect('„Feierabend" ist:', 'the end of the working day', ['a party', 'the end of the working day', 'Sunday']),
              exInput('„during the week" = unter der ___________', 'Woche'),
              exInput('Am Abend ___________ ich fern. (fernsehen)', 'sehe')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: the verb in position 2, separable verbs, how often, reflexive verbs and talking about evenings and weekends.</p>',
        exercises: exerciseList([
          exSelect('Richtig ist:', 'Dann frühstücke ich.', ['Dann ich frühstücke.', 'Dann frühstücke ich.', 'Dann frühstücken ich.']),
          exSelect('Ich ___ um sieben ___.', 'stehe … auf', ['stehe … auf', 'aufstehe …', 'stehe … an']),
          exInput('Er ___________ seine Mutter ___________. (anrufen) — two words', 'ruft an'),
          exSelect('Ich möchte heute ___.', 'fernsehen', ['fernsehen', 'sehe fern', 'fern sehen']),
          exSelect('Welches Verb ist NICHT trennbar?', 'verstehen', ['aufstehen', 'verstehen', 'einkaufen']),
          exSelect('Das Gegenteil von „immer" ist:', 'nie', ['oft', 'nie', 'manchmal']),
          exSelect('Ich gehe ___ Tag zur Arbeit.', 'jeden', ['jeden', 'jede', 'jedes']),
          exSelect('Du ziehst ___ an.', 'dich', ['dich', 'sich', 'mich']),
          exSelect('Wir beeilen ___.', 'uns', ['uns', 'sich', 'euch']),
          exSelect('___ Wochenende schlafe ich aus.', 'Am', ['Am', 'Im', 'Um']),
          exSelect('„selten" bedeutet:', 'rarely', ['rarely', 'often', 'sometimes']),
          exInput('Kommst du ___________? (mitkommen)', 'mit')
        ]),

        reading: {
          intro: 'A blog post about a nurse’s day. Read for times, actions and how often she does things.',
          words: 110, minutes: 6,
          text: readingText('Mein Tag als Krankenschwester', [
            'Ich heiße Maria und arbeite im Krankenhaus. Diese Woche habe ich Frühdienst. Ich stehe schon um 4.45 Uhr auf! Zuerst dusche ich, dann ziehe ich mich an. Ich frühstücke nie zu Hause — ich trinke nur schnell einen Kaffee.',
            'Um 5.30 Uhr fahre ich mit dem Fahrrad ins Krankenhaus. Die Arbeit fängt um 6 Uhr an. Um 10 Uhr mache ich Pause und esse ein Brötchen.',
            'Um 14 Uhr habe ich Feierabend. Nachmittags schlafe ich oft eine Stunde. Danach kaufe ich ein oder gehe spazieren. Abends sehe ich selten fern, ich lese lieber. Um 21 Uhr gehe ich ins Bett.'
          ], 'Blog, fiktiv'),
          glossary: vocabTable([
            ['die Krankenschwester', 'the nurse'],
            ['der Frühdienst', 'the early shift'],
            ['schnell', 'quickly'],
            ['die Stunde', 'the hour']
          ]),
          questions: exerciseList([
            exInput('Wann steht Maria auf? (… Uhr)', '4.45|4:45|4.45 Uhr|4:45 Uhr|Viertel vor fünf'),
            exTF('Maria frühstückt zu Hause.', false),
            exSelect('Wie fährt sie zur Arbeit?', 'mit dem Fahrrad', ['mit dem Bus', 'mit dem Auto', 'mit dem Fahrrad']),
            exSelect('Wann fängt die Arbeit an?', 'um 6 Uhr', ['um 5.30 Uhr', 'um 6 Uhr', 'um 10 Uhr']),
            exInput('Wann hat sie Feierabend? (… Uhr)', '14|14 Uhr|um 14 Uhr'),
            exSelect('Was macht sie nachmittags oft?', 'Sie schläft eine Stunde.', ['Sie sieht fern.', 'Sie schläft eine Stunde.', 'Sie arbeitet.']),
            exTF('Abends sieht sie oft fern.', false)
          ])
        },

        listening: {
          title: 'Wie sieht dein Tag aus?',
          intro: 'Two students compare their daily routines. Listen for times and how often they do things.',
          lines: [
            ['Jonas', 'Ayşe, wann stehst du morgens auf?'],
            ['Ayşe', 'Unter der Woche um sieben. Ich habe um neun Uhr Uni.'],
            ['Jonas', 'Ich stehe erst um halb neun auf. Ich frühstücke nie.'],
            ['Ayşe', 'Nie? Ich frühstücke immer! Und ich gehe dreimal pro Woche joggen.'],
            ['Jonas', 'Ich mache selten Sport. Aber ich koche jeden Abend.'],
            ['Ayşe', 'Toll! Was machst du am Wochenende?'],
            ['Jonas', 'Am Samstag arbeite ich im Café. Am Sonntag schlafe ich aus.']
          ],
          questions: exerciseList([
            exSelect('Wann steht Ayşe unter der Woche auf?', 'um sieben', ['um sieben', 'um halb neun', 'um neun']),
            exSelect('Wann fängt Ayşes Uni an?', 'um neun', ['um sieben', 'um acht', 'um neun']),
            exTF('Jonas frühstückt jeden Tag.', false),
            exInput('Wie oft geht Ayşe joggen? (… pro Woche)', 'dreimal|dreimal pro Woche|3 mal|3-mal'),
            exSelect('Was macht Jonas jeden Abend?', 'Er kocht.', ['Er joggt.', 'Er kocht.', 'Er liest.']),
            exSelect('Wo arbeitet Jonas am Samstag?', 'im Café', ['im Café', 'in der Uni', 'im Supermarkt'])
          ])
        },

        writing: {
          title: 'Mein Tagesablauf',
          textType: 'Kurzer Text für ein Sprachforum',
          minWords: 40, maxWords: 70, minutes: 15,
          expect: ['self-intro'],
          task: '<p>In einem Sprachforum beschreiben alle ihren Tag. Schreiben Sie über einen normalen Tag und über Ihr Wochenende.</p>' +
            '<p class="note">In a language forum everyone describes their day. Write about a normal day and your weekend.</p>',
          plainTask: 'Write a short text in German (40–70 words) about your daily routine. Give your name, describe at least four things you do with times, use two separable verbs and one frequency word, and say what you do at the weekend.',
          bullets: [
            'Stellen Sie sich kurz <strong>vor</strong>.',
            'Beschreiben Sie Ihren Tag mit <strong>Uhrzeiten</strong> (zuerst, dann, danach).',
            'Benutzen Sie zwei <strong>trennbare Verben</strong> (aufstehen, einkaufen …).',
            'Sagen Sie, <strong>wie oft</strong> Sie etwas machen.',
            'Was machen Sie am <strong>Wochenende</strong>?'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Zeit', 'Um 7 Uhr stehe ich auf. · Von 9 bis 17 Uhr arbeite ich.'],
            ['Reihenfolge', 'Zuerst … dann … danach … zum Schluss …'],
            ['Häufigkeit', 'Ich jogge oft. · Ich sehe selten fern. · jeden Tag'],
            ['Wochenende', 'Am Samstag schlafe ich aus. · Am Sonntag treffe ich Freunde.']
          ]),
          criteria: [
            'Ich stelle mich kurz vor.',
            'Ich nenne mindestens vier Tätigkeiten mit Uhrzeit.',
            'Das Verb steht immer auf Position 2 (Um 7 Uhr stehe ich …).',
            'Ich benutze zwei trennbare Verben richtig.',
            'Ich benutze ein Wort für Häufigkeit.',
            'Ich schreibe über das Wochenende.',
            'Ich liege zwischen 40 und 70 Wörtern.'
          ]
        },

        culture:
          '<p><strong>An early start.</strong> The German working day often starts early — 7 or 8 am is normal, and schools begin around 8. In return, many people finish by 4 or 5 pm and have a long <em>Feierabend</em>.</p>' +
          '<p><strong>Punctuality.</strong> Being on time (<em>Pünktlichkeit</em>) matters. For a meeting or appointment, five minutes early is ideal; if you are late, send a message.</p>' +
          '<p><strong>Sunday rest.</strong> Sunday is a quiet day: shops are closed and many people go for a walk (<em>Spaziergang</em>), visit family or have <em>Kaffee und Kuchen</em>. Noisy work at home is not welcome.</p>' +
          '<p><strong>Lunch break.</strong> Many workplaces have a canteen (<em>Kantine</em>), and a 30–60 minute lunch break is legally required for long working days.</p>',

        recap: [
          { group: '🌞 Tagesablauf', rows: [
            ['aufstehen', 'to get up'], ['duschen', 'to shower'], ['frühstücken', 'to have breakfast'], ['zur Arbeit fahren', 'to go to work'],
            ['nach Hause kommen', 'to come home'], ['ins Bett gehen', 'to go to bed'], ['zuerst / dann / danach', 'first / then / after that']
          ] },
          { group: '🔀 Trennbare Verben', rows: [
            ['einkaufen', 'to shop'], ['anrufen', 'to phone'], ['fernsehen', 'to watch TV'], ['aufräumen', 'to tidy up'],
            ['mitkommen', 'to come along'], ['anfangen', 'to begin'], ['abholen', 'to pick up']
          ] },
          { group: '🔁 Wie oft?', rows: [
            ['immer', 'always'], ['oft', 'often'], ['manchmal', 'sometimes'], ['selten', 'rarely'], ['nie', 'never'],
            ['jeden Tag', 'every day'], ['zweimal pro Woche', 'twice a week']
          ] },
          { group: '🪞 Reflexive Verben', rows: [
            ['sich waschen', 'to wash'], ['sich anziehen', 'to get dressed'], ['sich beeilen', 'to hurry'],
            ['sich fühlen', 'to feel'], ['sich freuen', 'to be happy'], ['mich / dich / sich / uns / euch', 'reflexive pronouns']
          ] },
          { group: '🌙 Freizeit', rows: [
            ['der Feierabend', 'end of work'], ['am Wochenende', 'at the weekend'], ['ausschlafen', 'to sleep in'],
            ['spazieren gehen', 'to go for a walk'], ['Freunde treffen', 'to meet friends']
          ] }
        ],

        sentences: [
          { de: 'Ich stehe um sieben Uhr auf', en: 'I get up at seven o’clock' },
          { de: 'Dann frühstücke ich', en: 'Then I have breakfast' },
          { de: 'Ich rufe meine Mutter an', en: 'I call my mother' },
          { de: 'Ich mache zweimal pro Woche Sport', en: 'I do sport twice a week' },
          { de: 'Ich ziehe mich schnell an', en: 'I get dressed quickly' },
          { de: 'Am Wochenende schlafe ich aus', en: 'At the weekend I sleep in' }
        ]
      },

      { // ===== UNIT 10 — written out in full =====
        title: '🎨 Unit 10 — Free Time and Hobbies',
        subject: 'Freizeit und Hobbys',
        canDo: ['Talk about your hobbies and interests', 'Suggest an activity and accept or refuse an invitation'],
        grammarFocus: ['Modal verbs können / wollen / müssen', 'Sentence bracket (Satzklammer)', 'Word order with time expressions'],
        topics: [
          {
            icon: '⚽', title: 'Sports and activities', note: 'Fußball spielen, schwimmen, wandern, Rad fahren',
            explanation:
              '<p>Some sports are verbs on their own: <span class="de">schwimmen, wandern, joggen, tanzen, klettern, reiten</span>. Ball games and instruments use <span class="de">spielen</span>: <span class="de">Fußball spielen, Tennis spielen, Gitarre spielen</span>. A few are fixed phrases: <span class="de">Rad fahren, Ski fahren, Yoga machen, ins Fitnessstudio gehen</span>.</p>' +
              '<p>To ask about hobbies: <span class="de">Was machst du in deiner Freizeit?</span> or <span class="de">Was sind deine Hobbys?</span> Answer with <span class="de">gern</span>: <span class="de">Ich schwimme gern. Ich spiele gern Fußball.</span></p>' +
              '<p>Watch the irregular present: <span class="de">fahren → du fährst, er fährt</span>; <span class="de">laufen → du läufst, er läuft</span>.</p>',
            vocab: vocabTable([
              ['die Freizeit', 'free time'],
              ['das Hobby / die Hobbys', 'the hobby / hobbies'],
              ['Fußball spielen', 'to play football'],
              ['Tennis spielen', 'to play tennis'],
              ['schwimmen', 'to swim'],
              ['joggen / laufen', 'to jog / to run'],
              ['wandern', 'to hike'],
              ['Rad fahren', 'to cycle'],
              ['tanzen', 'to dance'],
              ['klettern', 'to climb'],
              ['Yoga machen', 'to do yoga'],
              ['ins Fitnessstudio gehen', 'to go to the gym'],
              ['der Verein', 'the club']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Person', 'fahren', 'laufen', 'spielen (regular)'], [
                ['ich', 'fahre', 'laufe', 'spiele'],
                ['du', '<strong>fährst</strong>', '<strong>läufst</strong>', 'spielst'],
                ['er / sie / es', '<strong>fährt</strong>', '<strong>läuft</strong>', 'spielt'],
                ['wir / sie / Sie', 'fahren', 'laufen', 'spielen']
              ]) +
              '<p class="note">The vowel change a → ä, au → äu happens only in <em>du</em> and <em>er/sie/es</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — hobbies', [
              ['Tom', 'Was machst du in deiner Freizeit?'],
              ['Sıla', 'Ich schwimme gern und ich spiele Gitarre. Und du?'],
              ['Tom', 'Ich spiele Fußball in einem Verein. Und am Wochenende wandere ich oft.'],
              ['Sıla', 'Fährst du auch Rad?'],
              ['Tom', 'Ja, jeden Tag zur Arbeit!']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ gern Tennis.', 'spiele', ['spiele', 'mache', 'fahre']),
              exSelect('Er ___ Rad.', 'fährt', ['fahrt', 'fährt', 'fahren']),
              exInput('Du ___________ jeden Morgen. (laufen)', 'läufst'),
              exSelect('Yoga ___ man.', 'macht', ['spielt', 'macht', 'fährt']),
              exSelect('„wandern" bedeutet:', 'to hike', ['to swim', 'to hike', 'to dance']),
              exSelect('Ein Fußballteam ist oft in einem:', 'Verein', ['Verein', 'Hobby', 'Studio']),
              exInput('Was machst du in deiner ___________? (free time)', 'Freizeit')
            ])
          },
          {
            icon: '🎬', title: 'Music, films and books', note: 'Talking about what you watch, read and listen to',
            explanation:
              '<p>For media you need a few verbs: <span class="de">Musik hören</span>, <span class="de">einen Film sehen / schauen</span>, <span class="de">ein Buch lesen</span>, <span class="de">eine Serie streamen</span>, <span class="de">ins Kino / ins Konzert gehen</span>. <span class="de">lesen</span> and <span class="de">sehen</span> change their vowel: <span class="de">du liest, er liest; du siehst, er sieht</span>.</p>' +
              '<p>To give your opinion use <span class="de">Ich finde … + adjective</span>: <span class="de">Ich finde den Film spannend.</span> Note the accusative: <span class="de">den Film, die Serie, das Buch</span>. Or simpler: <span class="de">Der Film ist toll / langweilig / lustig.</span></p>' +
              '<p>Your favourite things use <span class="de">Lieblings-</span>: <span class="de">mein Lieblingsfilm, meine Lieblingsband, mein Lieblingsbuch</span>.</p>',
            vocab: vocabTable([
              ['Musik hören', 'to listen to music'],
              ['einen Film sehen', 'to watch a film'],
              ['eine Serie streamen', 'to stream a series'],
              ['ein Buch lesen', 'to read a book'],
              ['ins Kino gehen', 'to go to the cinema'],
              ['ins Konzert gehen', 'to go to a concert'],
              ['der Krimi', 'the crime story'],
              ['die Komödie', 'the comedy'],
              ['spannend', 'exciting'],
              ['langweilig', 'boring'],
              ['lustig', 'funny'],
              ['traurig', 'sad'],
              ['Ich finde … toll.', 'I think … is great.'],
              ['Lieblings-', 'favourite']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('finden + Akkusativ + Adjektiv', ['', 'Example'], [
                ['der Film', 'Ich finde <strong>den</strong> Film spannend.'],
                ['die Serie', 'Ich finde <strong>die</strong> Serie langweilig.'],
                ['das Buch', 'Ich finde <strong>das</strong> Buch toll.'],
                ['Question', 'Wie findest du <strong>den</strong> Film?']
              ]) +
              formTable('', ['Person', 'lesen', 'sehen'], [
                ['du', '<strong>liest</strong>', '<strong>siehst</strong>'],
                ['er / sie / es', '<strong>liest</strong>', '<strong>sieht</strong>']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — film night', [
              ['Lena', 'Siehst du gern Filme?'],
              ['Tom', 'Ja, sehr gern. Am liebsten Krimis. Und du?'],
              ['Lena', 'Ich mag Komödien. Kennst du die Serie „Dark"?'],
              ['Tom', 'Ja! Ich finde die Serie sehr spannend.'],
              ['Lena', 'Ich finde sie ein bisschen traurig. Aber die Musik ist toll.']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ gern Musik.', 'höre', ['höre', 'sehe', 'lese']),
              exInput('Er ___________ ein Buch. (lesen)', 'liest'),
              exInput('Du ___________ einen Film. (sehen)', 'siehst'),
              exSelect('Ich finde ___ Film spannend.', 'den', ['der', 'den', 'dem']),
              exSelect('Das Gegenteil von „spannend" ist:', 'langweilig', ['lustig', 'langweilig', 'toll']),
              exSelect('Ein Film über einen Mord ist ein:', 'Krimi', ['Krimi', 'Komödie', 'Konzert']),
              exInput('my favourite band = meine ___________band', 'Lieblings')
            ])
          },
          {
            icon: '👍', title: 'Can, want, must', note: 'können, wollen, müssen in free-time plans',
            explanation:
              '<p>Modal verbs add an attitude to another verb: <span class="de">können</span> (can, be able to), <span class="de">wollen</span> (want to), <span class="de">müssen</span> (must, have to). The modal is conjugated in position 2 and the main verb goes to the <strong>end</strong> in the infinitive: <span class="de">Ich <strong>kann</strong> gut <strong>schwimmen</strong>.</span> This is the sentence bracket again.</p>' +
              '<p>Modals are irregular in the singular, and <em>ich</em> and <em>er/sie/es</em> have <strong>no ending</strong>: <span class="de">ich kann, er kann; ich will, er will; ich muss, er muss</span>.</p>' +
              '<p>Mind the meaning: <span class="de">Ich muss nicht arbeiten.</span> means “I don’t have to work”, not “I must not”. And <span class="de">will</span> is “want”, not English “will”: <span class="de">Ich will tanzen.</span> = I want to dance.</p>',
            vocab: vocabTable([
              ['können', 'can, to be able to'],
              ['wollen', 'to want to'],
              ['müssen', 'must, to have to'],
              ['gut / nicht gut', 'well / not well'],
              ['Ich kann nicht.', 'I can’t.'],
              ['Ich muss arbeiten.', 'I have to work.'],
              ['Ich muss nicht …', 'I don’t have to …'],
              ['lernen', 'to learn'],
              ['üben', 'to practise'],
              ['der Kurs', 'the course']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Modal verbs', ['Person', 'können', 'wollen', 'müssen'], [
                ['ich', '<strong>kann</strong>', '<strong>will</strong>', '<strong>muss</strong>'],
                ['du', 'kannst', 'willst', 'musst'],
                ['er / sie / es', '<strong>kann</strong>', '<strong>will</strong>', '<strong>muss</strong>'],
                ['wir', 'können', 'wollen', 'müssen'],
                ['ihr', 'könnt', 'wollt', 'müsst'],
                ['sie / Sie', 'können', 'wollen', 'müssen']
              ]) +
              formTable('The bracket', ['Position 1', 'Modal (2)', 'Middle', 'Infinitive (end)'], [
                ['Ich', '<strong>kann</strong>', 'gut', '<strong>tanzen</strong>.'],
                ['Am Samstag', '<strong>muss</strong>', 'ich', '<strong>arbeiten</strong>.'],
                ['Wir', '<strong>wollen</strong>', 'morgen ins Kino', '<strong>gehen</strong>.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — dance course', [
              ['Lena', 'Kannst du tanzen?'],
              ['Tom', 'Nein, leider nicht gut. Aber ich will es lernen.'],
              ['Lena', 'Es gibt einen Tanzkurs am Donnerstag. Willst du mitkommen?'],
              ['Tom', 'Am Donnerstag muss ich lange arbeiten. Gibt es auch einen Kurs am Freitag?'],
              ['Lena', 'Ja, um 19 Uhr. Da kannst du bestimmt!']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ gut schwimmen.', 'kann', ['kann', 'kannst', 'können']),
              exSelect('Er ___ heute arbeiten.', 'muss', ['musst', 'muss', 'müssen']),
              exInput('Wir ___________ ins Kino gehen. (wollen)', 'wollen'),
              exInput('Du ___________ Gitarre spielen. (können)', 'kannst'),
              exSelect('Richtig ist:', 'Ich kann gut tanzen.', ['Ich kann tanzen gut.', 'Ich kann gut tanzen.', 'Ich tanzen kann gut.']),
              exSelect('„Ich muss nicht arbeiten" bedeutet:', 'I don’t have to work', ['I must not work', 'I don’t have to work', 'I don’t want to work']),
              exSelect('„Ich will schwimmen" bedeutet:', 'I want to swim', ['I will swim', 'I want to swim', 'I can swim']),
              exInput('Am Samstag muss ich ___________. (arbeiten)', 'arbeiten')
            ])
          },
          {
            icon: '🗓️', title: 'Making an arrangement', note: 'Hast du am Samstag Zeit? Wollen wir …?',
            explanation:
              '<p>To make plans, first ask if the person is free: <span class="de">Hast du am Samstag Zeit?</span> Then suggest something. There are three common ways: <span class="de">Wollen wir ins Kino gehen?</span> (Shall we …?), <span class="de">Hast du Lust, … zu …?</span> (Do you feel like …?) and <span class="de">Lass uns … !</span> (Let’s …!)</p>' +
              '<p>Then fix the time and place: <span class="de">Wann treffen wir uns? — Um sieben.</span> <span class="de">Wo treffen wir uns? — Vor dem Kino.</span></p>' +
              '<p>In time expressions, German order inside the middle of the sentence is usually <strong>time before place</strong>: <span class="de">Wir treffen uns <strong>um sieben</strong> <strong>vor dem Kino</strong>.</span></p>',
            vocab: vocabTable([
              ['Hast du Zeit?', 'Are you free?'],
              ['Hast du Lust auf …?', 'Do you fancy …?'],
              ['Wollen wir …?', 'Shall we …?'],
              ['Lass uns …!', 'Let’s …!'],
              ['sich treffen', 'to meet'],
              ['Wann treffen wir uns?', 'When shall we meet?'],
              ['Wo treffen wir uns?', 'Where shall we meet?'],
              ['der Treffpunkt', 'the meeting point'],
              ['Passt dir …?', 'Does … suit you?'],
              ['Das passt.', 'That works.'],
              ['Abgemacht!', 'Deal!'],
              ['vielleicht', 'maybe']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Suggesting', ['Pattern', 'Example'], [
                ['Wollen wir + infinitive?', '<strong>Wollen</strong> wir ins Kino <strong>gehen</strong>?'],
                ['Hast du Lust auf + Akk.?', 'Hast du Lust auf <strong>einen</strong> Kaffee?'],
                ['Hast du Lust, … zu + inf.?', 'Hast du Lust, ins Kino <strong>zu gehen</strong>?'],
                ['Lass uns + infinitive!', '<strong>Lass</strong> uns Pizza <strong>essen</strong>!']
              ]) +
              '<p class="note">Order in the middle field: time → place. <span class="de">Ich gehe <strong>morgen</strong> <strong>ins Kino</strong>.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — Saturday evening', [
              ['Tom', 'Hast du am Samstag Zeit?'],
              ['Lena', 'Am Abend ja. Warum?'],
              ['Tom', 'Wollen wir ins Konzert gehen? Die Band spielt im Park.'],
              ['Lena', 'Super Idee! Wann treffen wir uns?'],
              ['Tom', 'Um halb acht vor dem Eingang. Passt dir das?'],
              ['Lena', 'Ja, das passt. Abgemacht!']
            ]),
            exercises: exerciseList([
              exSelect('Hast du am Freitag ___?', 'Zeit', ['Zeit', 'Uhr', 'Lust zu']),
              exSelect('___ wir ins Kino gehen?', 'Wollen', ['Wollen', 'Wollt', 'Will']),
              exSelect('Hast du Lust ___ einen Kaffee?', 'auf', ['auf', 'für', 'zu']),
              exInput('Lass ___________ tanzen! (us)', 'uns'),
              exSelect('Wann treffen wir ___?', 'uns', ['uns', 'sich', 'wir']),
              exSelect('Richtig ist:', 'Ich gehe morgen ins Kino.', ['Ich gehe ins Kino morgen.', 'Ich gehe morgen ins Kino.', 'Morgen ich gehe ins Kino.']),
              exSelect('„Abgemacht!" bedeutet:', 'Deal!', ['Deal!', 'Maybe.', 'Cancelled.'])
            ])
          },
          {
            icon: '🙅', title: 'Accepting and refusing politely', note: 'Gern! / Leider kann ich nicht, weil …',
            explanation:
              '<p>To accept: <span class="de">Gern!</span>, <span class="de">Gute Idee!</span>, <span class="de">Ja, das passt mir gut.</span> To refuse politely, Germans use <span class="de">leider</span> (unfortunately) and give a reason: <span class="de">Leider kann ich nicht. Ich muss arbeiten.</span></p>' +
              '<p>A reason can also be joined with <span class="de">denn</span> or <span class="de">weil</span>. With <span class="de">denn</span> the word order stays normal: <span class="de">…, denn ich <strong>muss</strong> arbeiten.</span> With <span class="de">weil</span> the conjugated verb goes to the very <strong>end</strong>: <span class="de">…, weil ich arbeiten <strong>muss</strong>.</span> At A1 you can use <em>weil</em> as a fixed pattern; it is practised fully at A2.</p>' +
              '<p>Offer an alternative to stay friendly: <span class="de">Aber am Sonntag habe ich Zeit. Vielleicht ein anderes Mal?</span></p>',
            vocab: vocabTable([
              ['Gern!', 'With pleasure!'],
              ['Gute Idee!', 'Good idea!'],
              ['Ich komme gern mit.', 'I’d love to come.'],
              ['leider', 'unfortunately'],
              ['Leider kann ich nicht.', 'Sorry, I can’t.'],
              ['Ich habe keine Zeit.', 'I have no time.'],
              ['Ich habe schon etwas vor.', 'I already have plans.'],
              ['denn / weil', 'because'],
              ['ein anderes Mal', 'another time'],
              ['Schade!', 'What a pity!'],
              ['Kein Problem.', 'No problem.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Giving a reason', ['', 'Example', 'Verb position'], [
                ['two sentences', 'Ich kann nicht. Ich <strong>muss</strong> arbeiten.', 'position 2'],
                ['denn', 'Ich kann nicht, denn ich <strong>muss</strong> arbeiten.', 'position 2'],
                ['weil', 'Ich kann nicht, weil ich arbeiten <strong>muss</strong>.', 'at the end']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — sorry, I can’t', [
              ['Tom', 'Wollen wir am Sonntag wandern?'],
              ['Lena', 'Leider kann ich nicht, weil ich meine Eltern besuche.'],
              ['Tom', 'Schade! Und am Samstag?'],
              ['Lena', 'Am Samstag habe ich Zeit. Ich komme gern mit!'],
              ['Tom', 'Super. Dann am Samstag um neun am Bahnhof.']
            ]),
            exercises: exerciseList([
              exSelect('„leider" bedeutet:', 'unfortunately', ['fortunately', 'unfortunately', 'maybe']),
              exSelect('Ich kann nicht, denn ich ___ arbeiten.', 'muss', ['muss', 'arbeiten muss', 'müssen']),
              exSelect('Ich kann nicht, weil ich arbeiten ___.', 'muss', ['muss', 'musst', 'müssen']),
              exSelect('Richtig ist:', 'Ich komme nicht, weil ich krank bin.', ['Ich komme nicht, weil ich bin krank.', 'Ich komme nicht, weil ich krank bin.', 'Ich komme nicht, weil bin ich krank.']),
              exSelect('Eine positive Antwort:', 'Gute Idee!', ['Schade!', 'Gute Idee!', 'Leider nicht.']),
              exInput('Vielleicht ein anderes ___________? (time)', 'Mal'),
              exSelect('„Ich habe schon etwas vor" bedeutet:', 'I already have plans', ['I already have plans', 'I am in front', 'I am early'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: sports and media, irregular present forms, modal verbs and the sentence bracket, suggesting, accepting and refusing.</p>',
        exercises: exerciseList([
          exSelect('Ich ___ gern Tennis.', 'spiele', ['spiele', 'mache', 'fahre']),
          exSelect('Er ___ Rad.', 'fährt', ['fahrt', 'fährt', 'fahren']),
          exInput('Er ___________ ein Buch. (lesen)', 'liest'),
          exSelect('Ich finde ___ Film spannend.', 'den', ['der', 'den', 'dem']),
          exSelect('Ich ___ gut schwimmen.', 'kann', ['kann', 'kannst', 'können']),
          exSelect('Richtig ist:', 'Ich kann gut tanzen.', ['Ich kann tanzen gut.', 'Ich kann gut tanzen.', 'Ich tanzen kann gut.']),
          exSelect('„Ich will schwimmen" bedeutet:', 'I want to swim', ['I will swim', 'I want to swim', 'I can swim']),
          exSelect('___ wir ins Kino gehen?', 'Wollen', ['Wollen', 'Wollt', 'Will']),
          exSelect('Hast du Lust ___ einen Kaffee?', 'auf', ['auf', 'für', 'zu']),
          exSelect('Ich kann nicht, weil ich arbeiten ___.', 'muss', ['muss', 'musst', 'müssen']),
          exSelect('„leider" bedeutet:', 'unfortunately', ['fortunately', 'unfortunately', 'maybe']),
          exInput('Du ___________ jeden Morgen. (laufen)', 'läufst')
        ]),

        reading: {
          intro: 'Notices on the board of a community centre. Read for the activity, day, time and price.',
          words: 100, minutes: 6,
          text: readingText('Schwarzes Brett — Freizeitzentrum Nord', [
            '<strong>🎸 Gitarrenkurs für Anfänger</strong> — Sie wollen Gitarre spielen? Kein Problem! Jeden Dienstag 18–19.30 Uhr, Raum 4. 8 Termine: 80 €. Sie müssen eine Gitarre mitbringen.',
            '<strong>⚽ Fußball für alle</strong> — Wir spielen jeden Samstag um 10 Uhr im Stadtpark. Kostenlos! Jeder kann mitspielen.',
            '<strong>📚 Lesekreis</strong> — Lesen Sie gern? Wir treffen uns einmal pro Monat am Donnerstag um 19 Uhr in der Bibliothek. Dieses Mal: ein Krimi von Nele Neuhaus.',
            '<strong>🧘 Yoga am Morgen</strong> — Montag, Mittwoch und Freitag, 7–8 Uhr. 5 € pro Stunde. Bitte eine Matte mitbringen.'
          ], 'Aushänge, fiktiv'),
          glossary: vocabTable([
            ['der Anfänger', 'the beginner'],
            ['mitbringen', 'to bring along'],
            ['kostenlos', 'free of charge'],
            ['die Matte', 'the mat']
          ]),
          questions: exerciseList([
            exSelect('Wann ist der Gitarrenkurs?', 'dienstags', ['montags', 'dienstags', 'samstags']),
            exInput('Was kostet der Gitarrenkurs? (… €)', '80|80 €'),
            exTF('Fußball kostet 5 Euro.', false),
            exSelect('Wo spielen sie Fußball?', 'im Stadtpark', ['im Raum 4', 'im Stadtpark', 'in der Bibliothek']),
            exSelect('Wie oft trifft sich der Lesekreis?', 'einmal pro Monat', ['jede Woche', 'einmal pro Monat', 'jeden Tag']),
            exSelect('Was muss man zum Yoga mitbringen?', 'eine Matte', ['eine Gitarre', 'ein Buch', 'eine Matte']),
            exTF('Yoga gibt es dreimal pro Woche.', true)
          ])
        },

        listening: {
          title: 'Eine Einladung am Telefon',
          intro: 'Two friends try to find a time to do something together. Listen for the activity, the day and the time.',
          lines: [
            ['Ben', 'Hallo Mia! Hast du am Freitag Zeit? Wollen wir klettern gehen?'],
            ['Mia', 'Am Freitag? Leider kann ich nicht, ich muss bis 20 Uhr arbeiten.'],
            ['Ben', 'Schade. Und am Samstag?'],
            ['Mia', 'Am Samstag will ich mit meiner Schwester schwimmen gehen. Aber am Sonntag habe ich Zeit!'],
            ['Ben', 'Super. Am Sonntag um elf?'],
            ['Mia', 'Lieber um zwölf. Ich schlafe am Sonntag gern aus.'],
            ['Ben', 'Okay, um zwölf vor der Kletterhalle. Abgemacht!']
          ],
          questions: exerciseList([
            exSelect('Was will Ben machen?', 'klettern', ['schwimmen', 'klettern', 'tanzen']),
            exSelect('Warum kann Mia am Freitag nicht?', 'Sie muss arbeiten.', ['Sie ist krank.', 'Sie muss arbeiten.', 'Sie besucht ihre Eltern.']),
            exSelect('Was macht Mia am Samstag?', 'Sie geht schwimmen.', ['Sie geht schwimmen.', 'Sie arbeitet.', 'Sie klettert.']),
            exSelect('An welchem Tag treffen sie sich?', 'am Sonntag', ['am Freitag', 'am Samstag', 'am Sonntag']),
            exInput('Um wie viel Uhr? (um …)', 'zwölf|12|um zwölf|um 12|12 Uhr|um 12 Uhr'),
            exSelect('Wo treffen sie sich?', 'vor der Kletterhalle', ['im Schwimmbad', 'vor der Kletterhalle', 'bei Mia'])
          ])
        },

        writing: {
          title: 'Eine Einladung absagen',
          textType: 'Kurze Antwort-Nachricht',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['informal-opening', 'thanks', 'farewell'],
          task: '<p>Ihr Freund Ben lädt Sie am Samstag zum Fußballspiel ein. Sie können nicht. Antworten Sie ihm.</p>' +
            '<p class="note">Your friend Ben invites you to a football match on Saturday. You can’t go. Reply to him.</p>',
          plainTask: 'Write a short informal reply in German (30–60 words). Thank Ben for the invitation, say that you cannot come and give a reason with a modal verb, suggest another day and activity, and end with a greeting.',
          bullets: [
            '<strong>Danken</strong> Sie für die Einladung.',
            'Sagen Sie, dass Sie <strong>leider nicht</strong> kommen können, und nennen Sie einen <strong>Grund</strong>.',
            'Machen Sie einen <strong>neuen Vorschlag</strong> (Tag, Uhrzeit, Aktivität).'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Dank', 'Danke für die Einladung!'],
            ['Absage', 'Leider kann ich am Samstag nicht.'],
            ['Grund', 'Ich muss arbeiten. · …, weil ich meine Oma besuche.'],
            ['Vorschlag', 'Hast du am Sonntag Zeit? Wollen wir schwimmen gehen?'],
            ['Gruß', 'Viele Grüße · Bis bald!']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich danke für die Einladung.',
            'Ich sage höflich ab (leider).',
            'Ich gebe einen Grund mit einem Modalverb (müssen / wollen / können).',
            'Ich mache einen neuen Vorschlag mit Tag und Uhrzeit.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>The Verein.</strong> Germany has around 600,000 clubs (<em>Vereine</em>): sports, music, gardening, hiking, carnival… Joining a club is the classic way to make friends and practise German.</p>' +
          '<p><strong>Volkshochschule.</strong> Almost every town has a <em>Volkshochschule (VHS)</em>, an adult education centre with cheap evening courses — from languages and cooking to yoga and photography.</p>' +
          '<p><strong>Plans are made ahead.</strong> Spontaneous visits are less common; people often arrange meetings days or weeks in advance and note them in a calendar. A clear yes or no is appreciated more than a vague “maybe”.</p>' +
          '<p><strong>Outdoor life.</strong> Hiking (<em>Wandern</em>), cycling and swimming in lakes are hugely popular. On sunny weekends trains to the countryside and mountains are full.</p>',

        recap: [
          { group: '⚽ Sport', rows: [
            ['Fußball spielen', 'to play football'], ['schwimmen', 'to swim'], ['wandern', 'to hike'], ['Rad fahren', 'to cycle'],
            ['joggen', 'to jog'], ['tanzen', 'to dance'], ['der Verein', 'the club'], ['die Freizeit', 'free time']
          ] },
          { group: '🎬 Medien', rows: [
            ['Musik hören', 'to listen to music'], ['einen Film sehen', 'to watch a film'], ['lesen', 'to read'],
            ['spannend', 'exciting'], ['langweilig', 'boring'], ['Ich finde … toll.', 'I think … is great.']
          ] },
          { group: '👍 Modalverben', rows: [
            ['können (kann)', 'can'], ['wollen (will)', 'to want'], ['müssen (muss)', 'must'],
            ['Ich kann gut schwimmen.', 'I can swim well.'], ['Ich muss nicht …', 'I don’t have to …']
          ] },
          { group: '🗓️ Verabredung', rows: [
            ['Hast du Zeit?', 'Are you free?'], ['Wollen wir …?', 'Shall we …?'], ['Hast du Lust auf …?', 'Do you fancy …?'],
            ['sich treffen', 'to meet'], ['Abgemacht!', 'Deal!']
          ] },
          { group: '🙅 Antworten', rows: [
            ['Gern!', 'With pleasure!'], ['Gute Idee!', 'Good idea!'], ['leider', 'unfortunately'],
            ['Schade!', 'What a pity!'], ['ein anderes Mal', 'another time']
          ] }
        ],

        sentences: [
          { de: 'Ich spiele gern Fußball', en: 'I like playing football' },
          { de: 'Ich kann gut schwimmen', en: 'I can swim well' },
          { de: 'Am Samstag muss ich arbeiten', en: 'On Saturday I have to work' },
          { de: 'Wollen wir ins Kino gehen', en: 'Shall we go to the cinema' },
          { de: 'Hast du am Sonntag Zeit', en: 'Are you free on Sunday' },
          { de: 'Leider kann ich nicht', en: 'Unfortunately I cannot' }
        ]
      },

      { // ===== UNIT 11 — written out in full =====
        title: '🧭 Unit 11 — Getting Around Town',
        subject: 'Wege und Orte',
        canDo: ['Ask for and understand simple directions', 'Buy a ticket and ask about connections'],
        grammarFocus: ['Dative prepositions zu / mit / bei / nach', 'Imperative forms', 'zum / zur contractions'],
        topics: [
          {
            icon: '🏛️', title: 'Places in a town', note: 'Bahnhof, Rathaus, Museum, Krankenhaus',
            explanation:
              '<p>Learn town places with their articles, because the article decides the contraction you will need for directions: <span class="de">der Bahnhof → zum Bahnhof</span>, <span class="de">die Post → zur Post</span>, <span class="de">das Museum → zum Museum</span>.</p>' +
              '<p>Many official buildings are compounds: <span class="de">das Rathaus</span> (town hall), <span class="de">das Krankenhaus</span> (hospital), <span class="de">das Kaufhaus</span>, <span class="de">die Bushaltestelle</span> (bus stop). The centre of town is <span class="de">die Innenstadt</span> or <span class="de">das Zentrum</span>; the main square is often called <span class="de">der Marktplatz</span>.</p>' +
              '<p>To say what is in a town use <span class="de">Es gibt</span> + accusative: <span class="de">In meiner Stadt gibt es einen Bahnhof, ein Museum und viele Cafés.</span></p>',
            vocab: vocabTable([
              ['die Stadt', 'the town, city'],
              ['der Bahnhof', 'the station'],
              ['die Bushaltestelle', 'the bus stop'],
              ['das Rathaus', 'the town hall'],
              ['die Post', 'the post office'],
              ['die Bank', 'the bank'],
              ['das Krankenhaus', 'the hospital'],
              ['das Museum', 'the museum'],
              ['die Kirche', 'the church'],
              ['der Park', 'the park'],
              ['der Marktplatz', 'the market square'],
              ['die Schule', 'the school'],
              ['die Bibliothek', 'the library'],
              ['das Hotel', 'the hotel']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Article → contraction with zu', ['Place', 'zu + dem / der', 'Example'], [
                ['der Bahnhof', '<strong>zum</strong>', 'Ich gehe zum Bahnhof.'],
                ['das Museum', '<strong>zum</strong>', 'Wir fahren zum Museum.'],
                ['die Post', '<strong>zur</strong>', 'Sie geht zur Post.']
              ]) +
              '<p class="note"><em>zum</em> = zu dem, <em>zur</em> = zu der. <em>zu</em> always takes the dative.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — what is there in your town?', [
              ['Tom', 'Was gibt es in deiner Stadt?'],
              ['Sıla', 'Es gibt einen Bahnhof, ein Rathaus und ein schönes Museum.'],
              ['Tom', 'Gibt es auch einen Park?'],
              ['Sıla', 'Ja, einen großen Park neben dem Krankenhaus.'],
              ['Tom', 'Und eine Bibliothek?'],
              ['Sıla', 'Ja, die Bibliothek ist am Marktplatz.']
            ]),
            exercises: exerciseList([
              exSelect('Züge fahren am:', 'Bahnhof', ['Bahnhof', 'Rathaus', 'Museum']),
              exSelect('Kranke Menschen sind im:', 'Krankenhaus', ['Krankenhaus', 'Kaufhaus', 'Rathaus']),
              exSelect('Ich gehe ___ Post.', 'zur', ['zum', 'zur', 'zu']),
              exSelect('Ich gehe ___ Bahnhof.', 'zum', ['zum', 'zur', 'zu der']),
              exSelect('Wir fahren ___ Museum.', 'zum', ['zum', 'zur', 'ins zu']),
              exSelect('___ Bibliothek', 'die', ['der', 'die', 'das']),
              exInput('Bücher leiht man in der ___________ aus.', 'Bibliothek')
            ])
          },
          {
            icon: '➡️', title: 'Asking the way', note: 'Wie komme ich zum / zur …? Entschuldigung, wo ist …?',
            explanation:
              '<p>Start politely with <span class="de">Entschuldigung</span> or <span class="de">Entschuldigen Sie</span>. Then ask one of three standard questions: <span class="de">Wo ist der Bahnhof?</span>, <span class="de">Wie komme ich zum Bahnhof?</span> or <span class="de">Gibt es hier eine Apotheke?</span></p>' +
              '<p>The answer often uses distance and transport: <span class="de">Das ist nicht weit, nur fünf Minuten zu Fuß.</span> or <span class="de">Das ist weit. Nehmen Sie den Bus.</span></p>' +
              '<p>If you don’t understand: <span class="de">Können Sie das bitte wiederholen?</span> And if the person doesn’t know: <span class="de">Tut mir leid, ich bin nicht von hier.</span></p>',
            vocab: vocabTable([
              ['Entschuldigen Sie, …', 'Excuse me, …'],
              ['Wo ist …?', 'Where is …?'],
              ['Wie komme ich zum / zur …?', 'How do I get to …?'],
              ['Gibt es hier …?', 'Is there … here?'],
              ['weit / nicht weit', 'far / not far'],
              ['in der Nähe', 'nearby'],
              ['zu Fuß', 'on foot'],
              ['… Minuten zu Fuß', '… minutes’ walk'],
              ['Ich bin nicht von hier.', 'I’m not from here.'],
              ['Können Sie das wiederholen?', 'Can you repeat that?'],
              ['der Weg', 'the way'],
              ['sich verlaufen', 'to get lost']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Three ways to ask', ['Question', 'Grammar'], [
                ['Wo <strong>ist der</strong> Bahnhof?', 'Nominativ'],
                ['Wie komme ich <strong>zum</strong> Bahnhof?', 'zu + Dativ'],
                ['Gibt es hier <strong>eine</strong> Apotheke?', 'es gibt + Akkusativ']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — where is the station?', [
              ['Tourist', 'Entschuldigen Sie, wie komme ich zum Bahnhof?'],
              ['Passantin', 'Zum Bahnhof? Das ist nicht weit. Zehn Minuten zu Fuß.'],
              ['Tourist', 'Und gibt es hier in der Nähe eine Apotheke?'],
              ['Passantin', 'Ja, direkt am Marktplatz.'],
              ['Tourist', 'Vielen Dank!'],
              ['Passantin', 'Bitte schön!']
            ]),
            exercises: exerciseList([
              exSelect('Wie komme ich ___ Rathaus?', 'zum', ['zum', 'zur', 'zu']),
              exSelect('Wie komme ich ___ Bibliothek?', 'zur', ['zum', 'zur', 'zu']),
              exSelect('Gibt es hier ___ Bank?', 'eine', ['ein', 'eine', 'einen']),
              exSelect('„in der Nähe" bedeutet:', 'nearby', ['nearby', 'far away', 'on foot']),
              exSelect('„Ich bin nicht von hier" bedeutet:', 'I’m not from here', ['I’m not here', 'I’m not from here', 'I’m not going']),
              exInput('fünf Minuten zu ___________ (on foot)', 'Fuß'),
              exInput('Höflicher Anfang: ___________ Sie, wo ist die Post?', 'Entschuldigen')
            ])
          },
          {
            icon: '🧱', title: 'Giving directions', note: 'geradeaus, links, rechts, an der Ecke, gegenüber',
            explanation:
              '<p>Directions are given with the <strong>imperative</strong>. With strangers use the Sie-form: <span class="de">Gehen Sie geradeaus. Biegen Sie links ab. Nehmen Sie die zweite Straße rechts.</span> With friends use the du-form, which drops <em>-st</em> and the pronoun: <span class="de">Geh geradeaus! Nimm den Bus!</span></p>' +
              '<p>Key place words: <span class="de">geradeaus</span> (straight on), <span class="de">links / rechts</span>, <span class="de">an der Ecke</span> (at the corner), <span class="de">an der Ampel</span> (at the traffic light), <span class="de">an der Kreuzung</span> (at the crossroads), <span class="de">gegenüber</span> (opposite), <span class="de">bis zum / zur</span> (as far as).</p>' +
              '<p>Ordinal numbers name the street: <span class="de">die erste / zweite / dritte Straße</span>.</p>',
            vocab: vocabTable([
              ['geradeaus', 'straight on'],
              ['links / rechts', 'left / right'],
              ['nach links / nach rechts', 'to the left / right'],
              ['abbiegen', 'to turn'],
              ['die Straße', 'the street'],
              ['die Ecke', 'the corner'],
              ['die Ampel', 'the traffic light'],
              ['die Kreuzung', 'the crossroads'],
              ['gegenüber', 'opposite'],
              ['bis zum / zur', 'as far as'],
              ['über die Brücke', 'over the bridge'],
              ['die erste / zweite Straße', 'the first / second street']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Imperative', ['Infinitive', 'Sie-form', 'du-form', 'ihr-form'], [
                ['gehen', '<strong>Gehen Sie</strong> geradeaus!', '<strong>Geh</strong> geradeaus!', '<strong>Geht</strong> geradeaus!'],
                ['nehmen', '<strong>Nehmen Sie</strong> den Bus!', '<strong>Nimm</strong> den Bus!', '<strong>Nehmt</strong> den Bus!'],
                ['abbiegen', '<strong>Biegen Sie</strong> links <strong>ab</strong>!', '<strong>Bieg</strong> links <strong>ab</strong>!', '<strong>Biegt</strong> links <strong>ab</strong>!'],
                ['fahren', '<strong>Fahren Sie</strong> bis zur Ampel!', '<strong>Fahr</strong> bis zur Ampel!', '<strong>Fahrt</strong> bis zur Ampel!']
              ]) +
              '<p class="note">du-form = du-present minus <em>-st</em>: du nimmst → <em>nimm</em>; du gehst → <em>geh</em>. But a → ä verbs lose the umlaut: du fährst → <em>fahr</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — to the museum', [
              ['Touristin', 'Entschuldigung, wie komme ich zum Museum?'],
              ['Mann', 'Gehen Sie hier geradeaus bis zur Ampel.'],
              ['Touristin', 'Bis zur Ampel …'],
              ['Mann', 'Dann biegen Sie links ab. Das Museum ist an der Ecke, gegenüber der Kirche.'],
              ['Touristin', 'Also geradeaus, an der Ampel links. Danke!']
            ]),
            exercises: exerciseList([
              exSelect('„geradeaus" bedeutet:', 'straight on', ['left', 'straight on', 'opposite']),
              exSelect('Imperativ (Sie): ___ Sie geradeaus!', 'Gehen', ['Gehen', 'Geh', 'Geht']),
              exSelect('Imperativ (du), nehmen: ___ den Bus!', 'Nimm', ['Nehm', 'Nimm', 'Nimmst']),
              exSelect('Imperativ (du), fahren: ___ langsam!', 'Fahr', ['Fahr', 'Fähr', 'Fährst']),
              exSelect('Biegen Sie an der Ampel links ___!', 'ab', ['ab', 'an', 'auf']),
              exSelect('Das Café ist ___ der Kirche. (opposite)', 'gegenüber', ['neben', 'gegenüber', 'hinter']),
              exInput('Nehmen Sie die ___________ Straße rechts. (2.)', 'zweite')
            ])
          },
          {
            icon: '🚌', title: 'Public transport', note: 'Bus, Bahn, Ticket, umsteigen, Fahrplan',
            explanation:
              '<p>Transport uses <span class="de">mit</span> + dative: <span class="de">mit dem Bus, mit der U-Bahn, mit dem Zug, mit dem Fahrrad</span>. But on foot is <span class="de">zu Fuß</span>. The verb is usually <span class="de">fahren</span>: <span class="de">Ich fahre mit der S-Bahn zur Arbeit.</span></p>' +
              '<p>Important transport verbs are separable: <span class="de">einsteigen</span> (get on), <span class="de">aussteigen</span> (get off), <span class="de">umsteigen</span> (change). <span class="de">Sie steigen am Hauptbahnhof um.</span> Announcements also say <span class="de">Nächster Halt: …</span> (next stop).</p>' +
              '<p>Destinations: <span class="de">nach</span> for towns and countries without article (<span class="de">nach Berlin, nach Österreich</span>), <span class="de">zu</span> for places and people (<span class="de">zum Bahnhof, zu meiner Freundin</span>), and <span class="de">bei</span> for being at someone’s place (<span class="de">bei meiner Freundin</span>).</p>',
            vocab: vocabTable([
              ['der Bus', 'the bus'],
              ['die U-Bahn / S-Bahn', 'the underground / suburban train'],
              ['die Straßenbahn', 'the tram'],
              ['der Zug', 'the train'],
              ['das Taxi', 'the taxi'],
              ['das Fahrrad', 'the bicycle'],
              ['die Haltestelle', 'the stop'],
              ['der Fahrplan', 'the timetable'],
              ['einsteigen / aussteigen', 'to get on / off'],
              ['umsteigen', 'to change'],
              ['die Linie', 'the line'],
              ['die Richtung', 'the direction'],
              ['Nächster Halt: …', 'Next stop: …']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Dative prepositions', ['Preposition', 'Use', 'Example'], [
                ['mit', 'means of transport', 'mit <strong>dem</strong> Bus, mit <strong>der</strong> Bahn'],
                ['nach', 'towns, countries; nach Hause', 'nach Wien, nach Hause'],
                ['zu', 'places, people', '<strong>zum</strong> Arzt, <strong>zur</strong> Schule'],
                ['bei', 'at someone’s place / workplace', 'bei meiner Oma, bei Siemens'],
                ['von', 'from', 'vom Bahnhof (von dem)'],
                ['aus', 'out of; origin', 'aus der U-Bahn']
              ]) +
              '<p class="note">These prepositions always take the dative.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — how do you get to work?', [
              ['Lena', 'Wie fährst du zur Arbeit?'],
              ['Tom', 'Ich fahre mit der U-Bahn, Linie 3. Am Hauptbahnhof steige ich in die S-Bahn um.'],
              ['Lena', 'Wie lange dauert das?'],
              ['Tom', 'Ungefähr 35 Minuten. Und du?'],
              ['Lena', 'Ich fahre mit dem Fahrrad. Bei gutem Wetter ist das super.']
            ]),
            exercises: exerciseList([
              exSelect('Ich fahre mit ___ Bus.', 'dem', ['der', 'den', 'dem']),
              exSelect('Sie fährt mit ___ Straßenbahn.', 'der', ['die', 'der', 'dem']),
              exSelect('Wir fahren ___ Berlin.', 'nach', ['nach', 'zu', 'in']),
              exSelect('Ich gehe ___ Arzt.', 'zum', ['zum', 'zur', 'nach']),
              exSelect('Heute Abend bin ich ___ meiner Oma.', 'bei', ['bei', 'zu', 'mit']),
              exSelect('Am Hauptbahnhof ___ Sie ___. (change)', 'steigen … um', ['steigen … um', 'umsteigen …', 'steigen … aus']),
              exInput('Ich gehe nach ___________. (home)', 'Hause')
            ])
          },
          {
            icon: '🎫', title: 'Buying a ticket', note: 'Einfach oder hin und zurück?',
            explanation:
              '<p>At the counter or machine you choose the ticket type: <span class="de">eine Einzelfahrkarte</span> (single), <span class="de">eine Tageskarte</span> (day ticket), <span class="de">eine Wochenkarte / Monatskarte</span>. For longer trips: <span class="de">einfach</span> (one way) or <span class="de">hin und zurück</span> (return).</p>' +
              '<p>A typical request: <span class="de">Eine Fahrkarte nach Köln, bitte. Hin und zurück.</span> Then you might hear: <span class="de">Erste oder zweite Klasse?</span> and <span class="de">Haben Sie eine BahnCard?</span> (discount card).</p>' +
              '<p>To ask about connections: <span class="de">Wann fährt der nächste Zug nach Köln?</span> <span class="de">Von welchem Gleis?</span> <span class="de">Muss ich umsteigen?</span> Remember: in Germany you often must <strong>validate</strong> your ticket (<span class="de">entwerten</span>) before the trip on local transport.</p>',
            vocab: vocabTable([
              ['die Fahrkarte / das Ticket', 'the ticket'],
              ['der Fahrkartenautomat', 'the ticket machine'],
              ['der Schalter', 'the counter'],
              ['einfach', 'one way'],
              ['hin und zurück', 'return'],
              ['die Einzelfahrkarte', 'the single ticket'],
              ['die Tageskarte', 'the day ticket'],
              ['erste / zweite Klasse', 'first / second class'],
              ['das Gleis', 'the platform'],
              ['die Abfahrt / die Ankunft', 'the departure / arrival'],
              ['entwerten', 'to validate'],
              ['der nächste Zug', 'the next train']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Eine Fahrkarte <strong>nach</strong> Köln, bitte. — Einfach oder hin und zurück? — Hin und zurück, zweite Klasse.<br>' +
              'Wann fährt <strong>der nächste</strong> Zug? — Um 14.12 Uhr <strong>von</strong> Gleis 7.</div>' +
              '<p class="note">Train times are read the official way: 14.12 Uhr = <em>vierzehn Uhr zwölf</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the ticket counter', [
              ['Reisende', 'Guten Tag, eine Fahrkarte nach Hamburg, bitte.'],
              ['Mitarbeiter', 'Einfach oder hin und zurück?'],
              ['Reisende', 'Hin und zurück. Wann fährt der nächste Zug?'],
              ['Mitarbeiter', 'Um 10.48 Uhr von Gleis 12. Sie müssen in Hannover umsteigen.'],
              ['Reisende', 'Was kostet das?'],
              ['Mitarbeiter', 'Zweite Klasse 89 Euro.']
            ]),
            exercises: exerciseList([
              exSelect('Eine Fahrkarte für die Reise und zurück:', 'hin und zurück', ['einfach', 'hin und zurück', 'Tageskarte']),
              exSelect('Eine Fahrkarte nur für eine Richtung:', 'einfach', ['einfach', 'hin und zurück', 'Monatskarte']),
              exSelect('Der Zug fährt von ___ 5.', 'Gleis', ['Gleis', 'Schalter', 'Klasse']),
              exSelect('Wann fährt ___ Zug nach Wien?', 'der nächste', ['der nächste', 'die nächste', 'das nächste']),
              exSelect('„entwerten" bedeutet:', 'to validate', ['to buy', 'to validate', 'to cancel']),
              exInput('Eine Fahrkarte ___________ München, bitte.', 'nach'),
              exSelect('16.30 Uhr sagt man offiziell:', 'sechzehn Uhr dreißig', ['halb fünf Uhr', 'sechzehn Uhr dreißig', 'sechzehn dreißig Uhren'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: places, zum / zur, asking and giving directions with the imperative, transport with mit / nach / zu / bei, and tickets.</p>',
        exercises: exerciseList([
          exSelect('Ich gehe ___ Post.', 'zur', ['zum', 'zur', 'zu']),
          exSelect('Wie komme ich ___ Rathaus?', 'zum', ['zum', 'zur', 'zu']),
          exSelect('„in der Nähe" bedeutet:', 'nearby', ['nearby', 'far away', 'on foot']),
          exSelect('Imperativ (Sie): ___ Sie geradeaus!', 'Gehen', ['Gehen', 'Geh', 'Geht']),
          exSelect('Imperativ (du), nehmen: ___ den Bus!', 'Nimm', ['Nehm', 'Nimm', 'Nimmst']),
          exSelect('Das Café ist ___ der Kirche. (opposite)', 'gegenüber', ['neben', 'gegenüber', 'hinter']),
          exSelect('Ich fahre mit ___ Bus.', 'dem', ['der', 'den', 'dem']),
          exSelect('Wir fahren ___ Berlin.', 'nach', ['nach', 'zu', 'in']),
          exSelect('Heute Abend bin ich ___ meiner Oma.', 'bei', ['bei', 'zu', 'mit']),
          exSelect('Eine Fahrkarte für die Reise und zurück:', 'hin und zurück', ['einfach', 'hin und zurück', 'Tageskarte']),
          exInput('Ich gehe nach ___________. (home)', 'Hause'),
          exInput('fünf Minuten zu ___________ (on foot)', 'Fuß')
        ]),

        reading: {
          intro: 'Directions in a message from a friend. Follow the way on an imaginary map and answer the questions.',
          words: 100, minutes: 5,
          text: readingText('Nachricht von Jana', [
            'Hallo Sıla! Hier ist der Weg zu meiner neuen Wohnung:',
            'Fahr mit der U2 bis „Schillerplatz". Steig dort aus und nimm den Ausgang „Rathaus". Geh dann geradeaus bis zur Ampel. An der Ampel bieg rechts ab, in die Gartenstraße.',
            'Geh an der Bäckerei und an der Apotheke vorbei. Meine Wohnung ist im Haus Nummer 14, gegenüber vom Park. Ich wohne im dritten Stock, links. Der Weg von der U-Bahn dauert nur fünf Minuten.',
            'Bis Samstag! Jana'
          ], 'Kurznachricht, fiktiv'),
          glossary: vocabTable([
            ['der Ausgang', 'the exit'],
            ['vorbeigehen an', 'to walk past'],
            ['dauern', 'to take (time)']
          ]),
          questions: exerciseList([
            exSelect('Mit welcher Linie fährt Sıla?', 'U2', ['U1', 'U2', 'S2']),
            exInput('An welcher Haltestelle steigt sie aus?', 'Schillerplatz|am Schillerplatz'),
            exSelect('Was macht sie an der Ampel?', 'Sie biegt rechts ab.', ['Sie biegt links ab.', 'Sie biegt rechts ab.', 'Sie geht geradeaus.']),
            exInput('In welcher Straße wohnt Jana?', 'Gartenstraße|in der Gartenstraße'),
            exSelect('Was ist gegenüber von Janas Haus?', 'der Park', ['die Bäckerei', 'der Park', 'das Rathaus']),
            exSelect('In welchem Stock wohnt Jana?', 'im dritten Stock', ['im ersten Stock', 'im zweiten Stock', 'im dritten Stock']),
            exTF('Der Weg von der U-Bahn dauert 15 Minuten.', false)
          ])
        },

        listening: {
          title: 'Am Fahrkartenschalter',
          intro: 'A traveller buys a ticket and asks about the connection. Listen for the destination, time, platform and price.',
          lines: [
            ['Reisender', 'Guten Morgen. Ich möchte eine Fahrkarte nach Salzburg.'],
            ['Mitarbeiterin', 'Einfach oder hin und zurück?'],
            ['Reisender', 'Nur einfach, bitte. Zweite Klasse.'],
            ['Mitarbeiterin', 'Der nächste Zug fährt um 9.15 Uhr. Sie müssen in München umsteigen.'],
            ['Reisender', 'Gibt es auch eine direkte Verbindung?'],
            ['Mitarbeiterin', 'Ja, um 10.30 Uhr. Der Zug ist direkt.'],
            ['Reisender', 'Dann nehme ich den Zug um 10.30 Uhr. Von welchem Gleis fährt er?'],
            ['Mitarbeiterin', 'Von Gleis 8. Das macht 49 Euro 90.']
          ],
          questions: exerciseList([
            exInput('Wohin fährt der Reisende?', 'Salzburg|nach Salzburg'),
            exSelect('Was für eine Fahrkarte kauft er?', 'einfach', ['einfach', 'hin und zurück', 'Tageskarte']),
            exSelect('Wo muss man mit dem Zug um 9.15 Uhr umsteigen?', 'in München', ['in Salzburg', 'in München', 'in Wien']),
            exSelect('Welchen Zug nimmt er?', 'um 10.30 Uhr', ['um 9.15 Uhr', 'um 10.30 Uhr', 'um 8 Uhr']),
            exInput('Von welchem Gleis fährt der Zug? (Zahl)', '8|acht'),
            exInput('Was kostet die Fahrkarte? (… Euro …)', '49,90|49 Euro 90|49,90 Euro')
          ])
        },

        writing: {
          title: 'Der Weg zu mir',
          textType: 'Wegbeschreibung per Nachricht',
          minWords: 35, maxWords: 65, minutes: 15,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Eine Freundin besucht Sie zum ersten Mal. Sie kommt mit dem Zug. Beschreiben Sie den Weg vom Bahnhof zu Ihrer Wohnung.</p>' +
            '<p class="note">A friend is visiting you for the first time by train. Describe the way from the station to your flat.</p>',
          plainTask: 'Write a short message in German (35–65 words) to a friend describing the way from the station to your flat. Say which bus or tram to take and where to get off, give at least three walking directions with the du-imperative, describe the house and end with a greeting.',
          bullets: [
            'Welcher <strong>Bus</strong> / welche <strong>Straßenbahn</strong>? Wo aussteigen?',
            'Geben Sie mindestens drei <strong>Richtungen</strong> (Imperativ mit du).',
            'Beschreiben Sie das <strong>Haus</strong> (Nummer, Stock, gegenüber …).'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Verkehrsmittel', 'Nimm den Bus Nummer 5. · Fahr mit der Straßenbahn bis …'],
            ['Aussteigen', 'Steig am Marktplatz aus.'],
            ['Richtung', 'Geh geradeaus. · Bieg an der Ampel links ab.'],
            ['Haus', 'Ich wohne in Nummer 12, im zweiten Stock. · gegenüber vom Supermarkt'],
            ['Gruß', 'Bis Samstag! · Ruf mich an, wenn du da bist.']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich nenne Verkehrsmittel und Haltestelle (mit + Dativ).',
            'Ich gebe drei Richtungen im Imperativ (du).',
            'Ich beschreibe das Haus.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 35 und 65 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Tickets on trust.</strong> On buses, trams and the U-Bahn there are usually no barriers. You buy a ticket before you get on and sometimes validate it. Inspectors check at random, and riding without a ticket (<em>Schwarzfahren</em>) costs a fine of around 60 euros.</p>' +
          '<p><strong>The Deutschlandticket.</strong> A monthly subscription that covers all local and regional transport across Germany — buses, trams, U-Bahn, S-Bahn and regional trains — but not the fast ICE/IC trains.</p>' +
          '<p><strong>Cycling cities.</strong> Many towns have bike lanes (<em>Radwege</em>). Do not walk on them — cyclists ring their bells and do not slow down. Bikes must have lights.</p>' +
          '<p><strong>Waiting at the light.</strong> Pedestrians usually wait for the green man (<em>Ampelmännchen</em>), even on an empty street — especially when children are around.</p>',

        recap: [
          { group: '🏛️ Orte', rows: [
            ['der Bahnhof', 'the station'], ['die Haltestelle', 'the stop'], ['das Rathaus', 'the town hall'], ['die Post', 'the post office'],
            ['das Krankenhaus', 'the hospital'], ['das Museum', 'the museum'], ['die Kirche', 'the church'], ['der Marktplatz', 'the market square']
          ] },
          { group: '➡️ Fragen', rows: [
            ['Wie komme ich zum / zur …?', 'How do I get to …?'], ['Wo ist …?', 'Where is …?'], ['in der Nähe', 'nearby'],
            ['weit', 'far'], ['zu Fuß', 'on foot']
          ] },
          { group: '🧱 Richtungen', rows: [
            ['geradeaus', 'straight on'], ['links / rechts', 'left / right'], ['abbiegen', 'to turn'], ['an der Ampel', 'at the traffic light'],
            ['an der Ecke', 'at the corner'], ['gegenüber', 'opposite'], ['bis zum / zur', 'as far as']
          ] },
          { group: '🚌 Verkehr', rows: [
            ['mit dem Bus', 'by bus'], ['mit der U-Bahn', 'by underground'], ['der Zug', 'the train'], ['einsteigen / aussteigen', 'to get on / off'],
            ['umsteigen', 'to change'], ['der Fahrplan', 'the timetable']
          ] },
          { group: '🎫 Fahrkarten', rows: [
            ['die Fahrkarte', 'the ticket'], ['einfach', 'one way'], ['hin und zurück', 'return'], ['das Gleis', 'the platform'],
            ['die Abfahrt', 'the departure'], ['entwerten', 'to validate']
          ] }
        ],

        sentences: [
          { de: 'Wie komme ich zum Bahnhof', en: 'How do I get to the station' },
          { de: 'Gehen Sie geradeaus', en: 'Go straight on' },
          { de: 'Biegen Sie an der Ampel links ab', en: 'Turn left at the traffic light' },
          { de: 'Ich fahre mit dem Bus zur Arbeit', en: 'I go to work by bus' },
          { de: 'Eine Fahrkarte nach Köln bitte', en: 'A ticket to Cologne, please' },
          { de: 'Muss ich umsteigen', en: 'Do I have to change' }
        ]
      },

      { // ===== UNIT 12 — written out in full =====
        title: '💊 Unit 12 — Body and Health',
        subject: 'Körper und Gesundheit',
        canDo: ['Describe symptoms and make a doctor’s appointment', 'Understand simple health advice'],
        grammarFocus: ['Modal verb sollen', 'Dative of the person: mir tut … weh', 'Imperative with Sie'],
        topics: [
          {
            icon: '🦵', title: 'Parts of the body', note: 'With articles — the part learners most often get wrong',
            explanation:
              '<p>Body parts are a classic article trap. Some help: <span class="de">der Kopf, der Arm, der Bauch, der Rücken, der Fuß, der Hals, der Zahn</span> are masculine; <span class="de">die Hand, die Nase, die Schulter, die Brust</span> are feminine; <span class="de">das Auge, das Ohr, das Bein, das Knie, das Herz</span> are neuter.</p>' +
              '<p>Many body parts come in pairs, so learn the plurals too: <span class="de">die Augen, die Ohren, die Hände, die Füße, die Beine, die Arme, die Zähne</span>.</p>' +
              '<p>German uses the article where English uses “my” for actions on your own body: <span class="de">Ich wasche mir die Hände.</span> (I wash my hands.)</p>',
            vocab: vocabTable([
              ['der Körper', 'the body'],
              ['der Kopf', 'the head'],
              ['das Gesicht', 'the face'],
              ['das Auge / die Augen', 'the eye / eyes'],
              ['das Ohr / die Ohren', 'the ear / ears'],
              ['die Nase', 'the nose'],
              ['der Mund', 'the mouth'],
              ['der Zahn / die Zähne', 'the tooth / teeth'],
              ['der Hals', 'the neck, throat'],
              ['der Arm', 'the arm'],
              ['die Hand / die Hände', 'the hand / hands'],
              ['der Bauch', 'the stomach'],
              ['der Rücken', 'the back'],
              ['das Bein', 'the leg'],
              ['das Knie', 'the knee'],
              ['der Fuß / die Füße', 'the foot / feet']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['der', 'die', 'das'], [
                ['Kopf, Hals, Arm, Bauch', 'Hand, Nase, Schulter', 'Auge, Ohr, Bein'],
                ['Rücken, Fuß, Zahn, Mund', 'Brust, Haut', 'Knie, Herz, Gesicht']
              ]) +
              '<p class="note">Plurals with umlaut: <em>Hand → Hände, Fuß → Füße, Zahn → Zähne, Bauch → Bäuche</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — a game with a child', [
              ['Mutter', 'Wo ist deine Nase?'],
              ['Kind', 'Hier ist meine Nase!'],
              ['Mutter', 'Und wo sind deine Ohren?'],
              ['Kind', 'Hier! Zwei Ohren. Und zwei Augen!'],
              ['Mutter', 'Super! Und wie viele Finger hast du?'],
              ['Kind', 'Zehn Finger und zehn Zehen!']
            ]),
            exercises: exerciseList([
              exSelect('___ Kopf', 'der', ['der', 'die', 'das']),
              exSelect('___ Hand', 'die', ['der', 'die', 'das']),
              exSelect('___ Auge', 'das', ['der', 'die', 'das']),
              exSelect('___ Bein', 'das', ['der', 'die', 'das']),
              exInput('Plural: ein Fuß, zwei ___________', 'Füße'),
              exInput('Plural: ein Zahn, viele ___________', 'Zähne'),
              exSelect('Man hört mit den:', 'Ohren', ['Augen', 'Ohren', 'Händen']),
              exSelect('Man sieht mit den:', 'Augen', ['Augen', 'Ohren', 'Füßen'])
            ])
          },
          {
            icon: '🤒', title: 'Saying what hurts', note: 'Ich habe Kopfschmerzen. Mein Hals tut weh.',
            explanation:
              '<p>There are two main patterns. The first is <span class="de">Ich habe … -schmerzen</span> (pains): <span class="de">Kopfschmerzen, Bauchschmerzen, Rückenschmerzen, Zahnschmerzen, Halsschmerzen</span>. It is always plural.</p>' +
              '<p>The second is <span class="de">… tut weh</span> (hurts). The body part is the subject: <span class="de">Mein Kopf tut weh. Meine Füße tun weh.</span> You can also put the person in the <strong>dative</strong>: <span class="de">Mir tut der Kopf weh.</span> (literally: “to me the head hurts”). Dative pronouns: <span class="de">mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</span>.</p>' +
              '<p>Other illnesses: <span class="de">Ich habe Fieber / Husten / Schnupfen / eine Erkältung / die Grippe.</span> <span class="de">Mir ist schlecht.</span> (I feel sick.) <span class="de">Ich bin krank / müde.</span></p>',
            vocab: vocabTable([
              ['krank / gesund', 'ill / healthy'],
              ['die Schmerzen (Pl.)', 'the pains'],
              ['Kopfschmerzen', 'headache'],
              ['Bauchschmerzen', 'stomach ache'],
              ['Halsschmerzen', 'sore throat'],
              ['wehtun', 'to hurt'],
              ['das Fieber', 'the fever'],
              ['der Husten', 'the cough'],
              ['der Schnupfen', 'the cold (runny nose)'],
              ['die Erkältung', 'the cold'],
              ['die Grippe', 'the flu'],
              ['Mir ist schlecht.', 'I feel sick.'],
              ['Gute Besserung!', 'Get well soon!']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('wehtun', ['Pattern', 'Example'], [
                ['singular part', 'Mein Kopf <strong>tut</strong> weh.'],
                ['plural parts', 'Meine Füße <strong>tun</strong> weh.'],
                ['dative person', '<strong>Mir</strong> tut der Rücken weh. · Tut <strong>dir</strong> der Hals weh? · <strong>Ihm</strong> tut das Knie weh.']
              ]) +
              formTable('Dative pronouns', ['ich', 'du', 'er / es', 'sie', 'wir', 'ihr', 'sie / Sie'], [
                ['mir', 'dir', 'ihm', 'ihr', 'uns', 'euch', 'ihnen / Ihnen']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — feeling ill', [
              ['Lena', 'Du siehst nicht gut aus. Was ist los?'],
              ['Tom', 'Ich bin krank. Ich habe Kopfschmerzen und Fieber.'],
              ['Lena', 'Tut dir auch der Hals weh?'],
              ['Tom', 'Ja, und ich habe Husten.'],
              ['Lena', 'Das ist bestimmt eine Grippe. Geh nach Hause! Gute Besserung!']
            ]),
            exercises: exerciseList([
              exSelect('Ich habe ___. (head)', 'Kopfschmerzen', ['Kopfschmerz', 'Kopfschmerzen', 'Kopfweh tut']),
              exSelect('Mein Bauch ___ weh.', 'tut', ['tut', 'tun', 'tust']),
              exSelect('Meine Füße ___ weh.', 'tun', ['tut', 'tun', 'tue']),
              exSelect('___ tut der Rücken weh. (ich)', 'Mir', ['Mich', 'Mir', 'Ich']),
              exSelect('Tut ___ der Hals weh? (du)', 'dir', ['dich', 'dir', 'du']),
              exSelect('Zu einer kranken Person sagt man:', 'Gute Besserung!', ['Guten Appetit!', 'Gute Besserung!', 'Gute Reise!']),
              exInput('„I feel sick" = Mir ist ___________.', 'schlecht')
            ])
          },
          {
            icon: '🩺', title: 'At the doctor', note: 'Making an appointment, describing symptoms',
            explanation:
              '<p>In Germany you usually go first to a general practitioner, the <span class="de">Hausarzt / Hausärztin</span>. Call to make an appointment: <span class="de">Ich möchte einen Termin machen.</span> The receptionist may ask <span class="de">Sind Sie gesetzlich oder privat versichert?</span> and will want your <span class="de">Versichertenkarte</span> (health card).</p>' +
              '<p>The doctor asks <span class="de">Was fehlt Ihnen?</span> or <span class="de">Was haben Sie für Beschwerden?</span> (What is the problem?) and <span class="de">Seit wann?</span> (Since when?). Answer with <span class="de">seit</span> + dative: <span class="de">seit gestern, seit zwei Tagen, seit einer Woche</span>.</p>' +
              '<p>If you are ill and cannot work you get a sick note: <span class="de">die Krankmeldung</span> or <span class="de">die Arbeitsunfähigkeitsbescheinigung (AU)</span>.</p>',
            vocab: vocabTable([
              ['der Arzt / die Ärztin', 'the doctor'],
              ['der Hausarzt', 'the family doctor'],
              ['die Praxis', 'the practice'],
              ['der Termin', 'the appointment'],
              ['das Wartezimmer', 'the waiting room'],
              ['die Versichertenkarte', 'the health insurance card'],
              ['Was fehlt Ihnen?', 'What’s the matter?'],
              ['Seit wann?', 'Since when?'],
              ['seit gestern / seit drei Tagen', 'since yesterday / for three days'],
              ['untersuchen', 'to examine'],
              ['die Krankmeldung', 'the sick note'],
              ['der Zahnarzt', 'the dentist']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('seit + Dativ', ['', 'Example'], [
                ['der Tag → seit einem Tag', 'Ich habe seit <strong>einem</strong> Tag Fieber.'],
                ['die Woche → seit einer Woche', 'Ich habe seit <strong>einer</strong> Woche Husten.'],
                ['plural → seit zwei Tage<strong>n</strong>', 'Mir tut seit zwei Tage<strong>n</strong> der Kopf weh.'],
                ['seit gestern / seit Montag', 'no article']
              ]) +
              '<p class="note">German uses the <strong>present</strong> with <em>seit</em>: <span class="de">Ich habe seit Montag Husten.</span> = I have had a cough since Monday.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the doctor’s', [
              ['Ärztin', 'Guten Tag, Frau Yılmaz. Was fehlt Ihnen?'],
              ['Sıla', 'Ich habe Halsschmerzen und Husten.'],
              ['Ärztin', 'Seit wann haben Sie das?'],
              ['Sıla', 'Seit drei Tagen. Und seit gestern habe ich auch Fieber.'],
              ['Ärztin', 'Ich untersuche Sie mal. … Sie haben eine Erkältung. Ich schreibe Sie zwei Tage krank.'],
              ['Sıla', 'Danke, Frau Doktor.']
            ]),
            exercises: exerciseList([
              exSelect('Für einen Arzttermin sagt man:', 'Ich möchte einen Termin machen.', ['Ich möchte einen Termin machen.', 'Ich möchte einen Arzt kaufen.', 'Ich habe einen Termin gern.']),
              exSelect('Ich habe ___ drei Tagen Fieber.', 'seit', ['seit', 'vor', 'für']),
              exSelect('Ich habe seit ___ Woche Husten.', 'einer', ['eine', 'einer', 'einem']),
              exSelect('„Was fehlt Ihnen?" bedeutet:', 'What’s the matter?', ['What are you missing?', 'What’s the matter?', 'Where do you live?']),
              exSelect('Vor dem Termin wartet man im:', 'Wartezimmer', ['Wartezimmer', 'Wohnzimmer', 'Rathaus']),
              exSelect('Bei Zahnschmerzen geht man zum:', 'Zahnarzt', ['Hausarzt', 'Zahnarzt', 'Apotheker']),
              exInput('Für die Arbeit braucht man eine Kranken___________.', 'meldung')
            ])
          },
          {
            icon: '💉', title: 'Advice and instructions', note: 'Sie sollten … / Nehmen Sie …',
            explanation:
              '<p>Doctors give instructions with the <strong>Sie-imperative</strong>: <span class="de">Nehmen Sie die Tabletten dreimal täglich. Trinken Sie viel Tee. Bleiben Sie im Bett.</span></p>' +
              '<p>To report what the doctor said, use <span class="de">sollen</span>: <span class="de">Der Arzt sagt, ich soll im Bett bleiben.</span> <span class="de">sollen</span> = someone else wants you to do it. For your own advice to a friend use <span class="de">solltest</span> (should): <span class="de">Du solltest zum Arzt gehen.</span></p>' +
              '<p>Like all modals, <span class="de">sollen</span> sends the main verb to the end, and <em>ich</em> / <em>er</em> have no ending: <span class="de">ich soll, du sollst, er soll</span>.</p>',
            vocab: vocabTable([
              ['sollen', 'to be supposed to'],
              ['Sie sollten …', 'You should …'],
              ['die Tablette', 'the tablet'],
              ['das Medikament', 'the medicine'],
              ['die Tropfen (Pl.)', 'the drops'],
              ['dreimal täglich', 'three times a day'],
              ['vor / nach dem Essen', 'before / after meals'],
              ['sich ausruhen', 'to rest'],
              ['im Bett bleiben', 'to stay in bed'],
              ['viel trinken', 'to drink a lot'],
              ['nicht rauchen', 'not to smoke'],
              ['Sport machen', 'to do sport']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('sollen', ['Person', 'sollen', 'Example'], [
                ['ich', '<strong>soll</strong>', 'Ich soll viel trinken.'],
                ['du', 'sollst', 'Du sollst im Bett bleiben.'],
                ['er / sie', '<strong>soll</strong>', 'Er soll nicht rauchen.'],
                ['wir', 'sollen', 'Wir sollen morgen wiederkommen.'],
                ['Sie', 'sollen', 'Sie sollen die Tabletten nehmen.']
              ]) +
              formTable('Instruction → report', ['Doctor (imperative)', 'You (sollen)'], [
                ['<strong>Nehmen Sie</strong> die Tabletten!', 'Ich <strong>soll</strong> die Tabletten <strong>nehmen</strong>.'],
                ['<strong>Bleiben Sie</strong> zu Hause!', 'Ich <strong>soll</strong> zu Hause <strong>bleiben</strong>.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — what did the doctor say?', [
              ['Lena', 'Und? Was sagt der Arzt?'],
              ['Tom', 'Ich soll drei Tage im Bett bleiben und viel Tee trinken.'],
              ['Lena', 'Und Medikamente?'],
              ['Tom', 'Ich soll die Tabletten dreimal täglich nach dem Essen nehmen.'],
              ['Lena', 'Du solltest auch nicht rauchen!'],
              ['Tom', 'Ja, ja … das sagt der Arzt auch.']
            ]),
            exercises: exerciseList([
              exSelect('Imperativ: ___ Sie viel Wasser!', 'Trinken', ['Trinken', 'Trink', 'Trinkt']),
              exSelect('Der Arzt sagt, ich ___ im Bett bleiben.', 'soll', ['soll', 'sollst', 'sollen']),
              exInput('Er ___________ nicht rauchen. (sollen)', 'soll'),
              exSelect('„Nehmen Sie die Tabletten!" → Ich soll die Tabletten ___.', 'nehmen', ['nehmen', 'nimm', 'nehme']),
              exSelect('„dreimal täglich" bedeutet:', 'three times a day', ['three days', 'three times a day', 'every three days']),
              exSelect('Ein Rat für einen Freund: Du ___ zum Arzt gehen.', 'solltest', ['solltest', 'sollst', 'soll']),
              exSelect('„nach dem Essen" bedeutet:', 'after meals', ['before meals', 'after meals', 'with meals'])
            ])
          },
          {
            icon: '🏥', title: 'Pharmacy and emergencies', note: 'Rezept, Apotheke, Notaufnahme, 112',
            explanation:
              '<p>Prescription medicine (<span class="de">verschreibungspflichtig</span>) needs a <span class="de">Rezept</span> from the doctor; you take it to the <span class="de">Apotheke</span>. Simple medicine like painkillers is sold there without a prescription: <span class="de">Haben Sie etwas gegen Kopfschmerzen?</span></p>' +
              '<p>In an emergency (<span class="de">der Notfall</span>) call <strong>112</strong> for an ambulance (<span class="de">der Krankenwagen</span>) or the fire brigade, and <strong>110</strong> for the police. At night and on weekends there is also the medical on-call service <strong>116 117</strong>, and one pharmacy in each area is always open (<span class="de">Notdienst</span>).</p>' +
              '<p>Short emergency sentences: <span class="de">Hilfe!</span> <span class="de">Rufen Sie einen Krankenwagen!</span> <span class="de">Es gab einen Unfall.</span> <span class="de">Er ist verletzt.</span></p>',
            vocab: vocabTable([
              ['die Apotheke', 'the pharmacy'],
              ['das Rezept', 'the prescription'],
              ['etwas gegen …', 'something for …'],
              ['das Schmerzmittel', 'the painkiller'],
              ['der Notfall', 'the emergency'],
              ['die Notaufnahme', 'the A&E department'],
              ['der Krankenwagen', 'the ambulance'],
              ['der Unfall', 'the accident'],
              ['verletzt', 'injured'],
              ['Hilfe!', 'Help!'],
              ['der Notdienst', 'the emergency service'],
              ['die Allergie', 'the allergy']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Haben Sie etwas <strong>gegen</strong> Husten? (gegen + Akkusativ)<br>' +
              '<strong>Rufen Sie</strong> bitte einen Krankenwagen! (Imperativ)<br>' +
              'Ich bin <strong>gegen</strong> Penizillin allergisch.</div>' +
              '<p class="note">Numbers to remember: <strong>112</strong> ambulance/fire · <strong>110</strong> police · <strong>116 117</strong> doctor on call.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — in the pharmacy', [
              ['Apothekerin', 'Guten Tag, was kann ich für Sie tun?'],
              ['Kunde', 'Ich habe hier ein Rezept. Und haben Sie auch etwas gegen Halsschmerzen?'],
              ['Apothekerin', 'Ja, diese Tabletten hier. Nehmen Sie eine Tablette alle vier Stunden.'],
              ['Kunde', 'Sind die rezeptfrei?'],
              ['Apothekerin', 'Ja. Haben Sie Allergien?'],
              ['Kunde', 'Nein. Danke schön!']
            ]),
            exercises: exerciseList([
              exSelect('Die Notrufnummer für den Krankenwagen ist:', '112', ['110', '112', '116 117']),
              exSelect('Die Nummer der Polizei ist:', '110', ['110', '112', '118']),
              exSelect('Für manche Medikamente braucht man ein:', 'Rezept', ['Rezept', 'Ticket', 'Termin']),
              exSelect('Haben Sie etwas ___ Kopfschmerzen?', 'gegen', ['für', 'gegen', 'mit']),
              exSelect('„verletzt" bedeutet:', 'injured', ['ill', 'injured', 'tired']),
              exInput('Im Notfall ruft man: „___________!" (Help!)', 'Hilfe'),
              exSelect('Imperativ: ___ Sie einen Krankenwagen!', 'Rufen', ['Rufen', 'Ruf', 'Ruft'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: body parts and their plurals, saying what hurts, seit, sollen and the Sie-imperative, pharmacy and emergencies.</p>',
        exercises: exerciseList([
          exSelect('___ Auge', 'das', ['der', 'die', 'das']),
          exInput('Plural: ein Fuß, zwei ___________', 'Füße'),
          exSelect('Meine Füße ___ weh.', 'tun', ['tut', 'tun', 'tue']),
          exSelect('___ tut der Rücken weh. (ich)', 'Mir', ['Mich', 'Mir', 'Ich']),
          exSelect('Zu einer kranken Person sagt man:', 'Gute Besserung!', ['Guten Appetit!', 'Gute Besserung!', 'Gute Reise!']),
          exSelect('Ich habe ___ drei Tagen Fieber.', 'seit', ['seit', 'vor', 'für']),
          exSelect('Der Arzt sagt, ich ___ im Bett bleiben.', 'soll', ['soll', 'sollst', 'sollen']),
          exSelect('Imperativ: ___ Sie viel Wasser!', 'Trinken', ['Trinken', 'Trink', 'Trinkt']),
          exSelect('„dreimal täglich" bedeutet:', 'three times a day', ['three days', 'three times a day', 'every three days']),
          exSelect('Die Notrufnummer für den Krankenwagen ist:', '112', ['110', '112', '116 117']),
          exSelect('Haben Sie etwas ___ Kopfschmerzen?', 'gegen', ['für', 'gegen', 'mit']),
          exInput('„I feel sick" = Mir ist ___________.', 'schlecht')
        ]),

        reading: {
          intro: 'The instructions leaflet from a packet of tablets. Read for the dose, when to take them and warnings.',
          words: 90, minutes: 5,
          text: readingText('Packungsbeilage: Dolomed 500 mg Tabletten', [
            '<strong>Wofür?</strong> Gegen leichte bis mittlere Schmerzen, z. B. Kopfschmerzen, Zahnschmerzen, und gegen Fieber.',
            '<strong>Wie viel?</strong> Erwachsene: 1–2 Tabletten, bis zu dreimal täglich. Kinder unter 12 Jahren: nur nach Rücksprache mit dem Arzt.',
            '<strong>Wie?</strong> Nehmen Sie die Tabletten mit einem Glas Wasser nach dem Essen.',
            '<strong>Achtung:</strong> Nehmen Sie die Tabletten nicht länger als drei Tage ohne Arzt. Trinken Sie keinen Alkohol. Nicht für Schwangere.'
          ], 'Beipackzettel, fiktiv'),
          glossary: vocabTable([
            ['leicht', 'light, mild'],
            ['der Erwachsene', 'the adult'],
            ['die Rücksprache', 'the consultation'],
            ['schwanger', 'pregnant']
          ]),
          questions: exerciseList([
            exSelect('Wogegen helfen die Tabletten?', 'gegen Schmerzen und Fieber', ['gegen Husten', 'gegen Schmerzen und Fieber', 'gegen Allergien']),
            exSelect('Wie oft dürfen Erwachsene die Tabletten nehmen?', 'bis zu dreimal täglich', ['einmal täglich', 'bis zu dreimal täglich', 'jede Stunde']),
            exTF('Kinder unter 12 Jahren können die Tabletten immer nehmen.', false),
            exSelect('Wann nimmt man die Tabletten?', 'nach dem Essen', ['vor dem Essen', 'nach dem Essen', 'in der Nacht']),
            exInput('Womit nimmt man die Tabletten? (mit einem Glas …)', 'Wasser'),
            exTF('Man darf Alkohol trinken.', false),
            exInput('Wie viele Tage höchstens ohne Arzt? (Zahl)', '3|drei')
          ])
        },

        listening: {
          title: 'Anruf in der Arztpraxis',
          intro: 'A patient calls the doctor’s practice to make an appointment. Listen for the symptoms, the day and the time.',
          lines: [
            ['Praxis', 'Praxis Dr. Weber, guten Morgen.'],
            ['Patient', 'Guten Morgen, hier ist Ben Krüger. Ich möchte einen Termin machen.'],
            ['Praxis', 'Was haben Sie für Beschwerden?'],
            ['Patient', 'Mir tut seit vier Tagen der Rücken weh. Ich kann nicht gut schlafen.'],
            ['Praxis', 'Können Sie heute um 15.30 Uhr kommen?'],
            ['Patient', 'Heute kann ich leider nicht. Geht es morgen?'],
            ['Praxis', 'Morgen um 9 Uhr. Bringen Sie bitte Ihre Versichertenkarte mit.'],
            ['Patient', 'Ja, morgen um 9 Uhr passt. Vielen Dank!']
          ],
          questions: exerciseList([
            exInput('Wie heißt der Arzt? (Dr. …)', 'Weber|Dr. Weber'),
            exSelect('Was tut dem Patienten weh?', 'der Rücken', ['der Kopf', 'der Rücken', 'der Bauch']),
            exSelect('Seit wann?', 'seit vier Tagen', ['seit gestern', 'seit vier Tagen', 'seit einer Woche']),
            exTF('Der Patient kommt heute um 15.30 Uhr.', false),
            exInput('Wann ist der Termin? (morgen um …)', '9|9 Uhr|neun|neun Uhr|um 9|um 9 Uhr|morgen um 9 Uhr'),
            exSelect('Was soll er mitbringen?', 'die Versichertenkarte', ['ein Rezept', 'die Versichertenkarte', 'Tabletten'])
          ])
        },

        writing: {
          title: 'Krankmeldung an die Chefin',
          textType: 'Kurze formelle E-Mail',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['greeting', 'farewell'],
          task: '<p>Sie sind krank und können heute nicht arbeiten. Schreiben Sie Ihrer Chefin, Frau Berger, eine E-Mail.</p>' +
            '<p class="note">You are ill and cannot work today. Write an e-mail to your boss, Ms Berger.</p>',
          plainTask: 'Write a short e-mail in German (30–60 words) to your boss, Ms Berger. Say that you are ill and cannot come to work, describe two symptoms and since when you have them, say what the doctor said (sollen), say when you think you will be back, and close politely.',
          bullets: [
            'Sagen Sie, dass Sie <strong>krank</strong> sind und nicht kommen können.',
            'Beschreiben Sie zwei <strong>Symptome</strong> und <strong>seit wann</strong>.',
            'Was sagt der <strong>Arzt</strong>? (Ich soll …)',
            'Wann kommen Sie <strong>wieder</strong>?'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Frau Berger, · Liebe Frau Berger,'],
            ['Krank', 'Leider bin ich krank und kann heute nicht arbeiten.'],
            ['Symptome', 'Ich habe seit gestern Fieber und Halsschmerzen.'],
            ['Arzt', 'Der Arzt sagt, ich soll zwei Tage zu Hause bleiben.'],
            ['Rückkehr', 'Am Donnerstag bin ich wieder im Büro.'],
            ['Gruß', 'Viele Grüße · Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit einer passenden Anrede.',
            'Ich sage, dass ich krank bin.',
            'Ich nenne zwei Symptome mit seit.',
            'Ich benutze sollen richtig (Ich soll … + Infinitiv am Ende).',
            'Ich sage, wann ich wieder arbeite.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Health insurance is compulsory.</strong> Everybody living in Germany needs health insurance (<em>Krankenversicherung</em>), most people with a public fund (<em>gesetzliche Krankenkasse</em>). You show your card (<em>Versichertenkarte</em>) at every visit.</p>' +
          '<p><strong>The sick note.</strong> If you are ill, you must tell your employer on the first day. From the third or fourth day (often earlier) you need a doctor’s sick note, which today is sent electronically. Your salary is paid for up to six weeks.</p>' +
          '<p><strong>Appointments.</strong> GP practices often have open consultation hours (<em>offene Sprechstunde</em>) in the morning, but specialists can have long waiting times. Call early in the morning.</p>' +
          '<p><strong>Home remedies.</strong> Germans love herbal tea, fresh air and rest for colds. Antibiotics are prescribed carefully, and a doctor may send you home with advice rather than medicine.</p>',

        recap: [
          { group: '🦵 Körper', rows: [
            ['der Kopf', 'the head'], ['das Auge', 'the eye'], ['das Ohr', 'the ear'], ['die Nase', 'the nose'], ['der Hals', 'the throat'],
            ['der Bauch', 'the stomach'], ['der Rücken', 'the back'], ['die Hand', 'the hand'], ['das Bein', 'the leg'], ['der Fuß', 'the foot']
          ] },
          { group: '🤒 Krank', rows: [
            ['Ich habe Kopfschmerzen.', 'I have a headache.'], ['Mein Bauch tut weh.', 'My stomach hurts.'], ['Mir tut … weh.', 'My … hurts.'],
            ['das Fieber', 'the fever'], ['der Husten', 'the cough'], ['die Erkältung', 'the cold'], ['Gute Besserung!', 'Get well soon!']
          ] },
          { group: '🩺 Beim Arzt', rows: [
            ['der Arzt / die Ärztin', 'the doctor'], ['der Termin', 'the appointment'], ['Was fehlt Ihnen?', 'What’s the matter?'],
            ['seit drei Tagen', 'for three days'], ['die Krankmeldung', 'the sick note']
          ] },
          { group: '💉 Ratschläge', rows: [
            ['sollen', 'to be supposed to'], ['Ich soll im Bett bleiben.', 'I am to stay in bed.'], ['Nehmen Sie …!', 'Take …!'],
            ['die Tablette', 'the tablet'], ['dreimal täglich', 'three times a day']
          ] },
          { group: '🏥 Notfall', rows: [
            ['das Rezept', 'the prescription'], ['die Apotheke', 'the pharmacy'], ['der Notfall', 'the emergency'],
            ['der Krankenwagen', 'the ambulance'], ['112 / 110', 'ambulance / police']
          ] }
        ],

        sentences: [
          { de: 'Ich habe Kopfschmerzen', en: 'I have a headache' },
          { de: 'Mir tut der Rücken weh', en: 'My back hurts' },
          { de: 'Ich habe seit gestern Fieber', en: 'I have had a fever since yesterday' },
          { de: 'Ich möchte einen Termin machen', en: 'I would like to make an appointment' },
          { de: 'Ich soll im Bett bleiben', en: 'I am supposed to stay in bed' },
          { de: 'Haben Sie etwas gegen Husten', en: 'Do you have something for a cough' }
        ]
      },

      { // ===== UNIT 13 — written out in full =====
        title: '👕 Unit 13 — Clothes and Colours',
        subject: 'Kleidung und Farben',
        canDo: ['Buy clothes and ask about size and colour', 'Say what you are wearing and why you like it'],
        grammarFocus: ['Adjectives after the verb (no ending)', 'Demonstratives dieser / diese / dieses', 'Comparative gut / besser (introduction)'],
        topics: [
          {
            icon: '🧥', title: 'Clothing vocabulary', note: 'With gender grouped by colour code',
            explanation:
              '<p>Clothes are a good chance to fix genders in memory. Masculine: <span class="de">der Pullover, der Rock, der Mantel, der Schal, der Hut, der Schuh</span>. Feminine: <span class="de">die Hose, die Jacke, die Bluse, die Mütze, die Socke</span>. Neuter: <span class="de">das Hemd, das Kleid, das T-Shirt</span>. Some are plural only: <span class="de">die Jeans</span> (also singular in speech), <span class="de">die Shorts</span>.</p>' +
              '<p>To say what someone is wearing use <span class="de">tragen</span> (irregular: <span class="de">du trägst, er trägt</span>) or <span class="de">anhaben</span>: <span class="de">Sie trägt ein rotes Kleid.</span> <span class="de">Er hat eine Jacke an.</span> The clothing is in the accusative.</p>' +
              '<p>For getting dressed use the reflexive verbs from Unit 9: <span class="de">sich anziehen, sich ausziehen, sich umziehen</span> (to change).</p>',
            vocab: vocabTable([
              ['die Kleidung', 'the clothing'],
              ['der Pullover', 'the jumper'],
              ['der Rock', 'the skirt'],
              ['der Mantel', 'the coat'],
              ['der Schuh / die Schuhe', 'the shoe / shoes'],
              ['die Hose', 'the trousers'],
              ['die Jeans', 'the jeans'],
              ['die Jacke', 'the jacket'],
              ['die Bluse', 'the blouse'],
              ['das Hemd', 'the shirt'],
              ['das Kleid', 'the dress'],
              ['das T-Shirt', 'the T-shirt'],
              ['die Mütze', 'the woolly hat'],
              ['der Schal', 'the scarf'],
              ['tragen (trägt)', 'to wear']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['der (→ den)', 'die', 'das'], [
                ['der Pullover, der Rock', 'die Hose, die Jacke', 'das Hemd, das Kleid'],
                ['der Mantel, der Schal', 'die Bluse, die Mütze', 'das T-Shirt']
              ]) +
              formTable('tragen', ['ich', 'du', 'er / sie / es', 'wir / sie / Sie'], [
                ['trage', '<strong>trägst</strong>', '<strong>trägt</strong>', 'tragen']
              ]) +
              '<p class="note">Accusative: <span class="de">Er trägt <strong>einen</strong> Mantel.</span> Feminine and neuter don’t change.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — what should I wear?', [
              ['Lena', 'Was ziehst du heute Abend an?'],
              ['Sıla', 'Ich trage mein blaues Kleid. Und du?'],
              ['Lena', 'Ich trage eine Jeans und eine Bluse.'],
              ['Sıla', 'Nimm auch eine Jacke mit. Es ist kalt.'],
              ['Lena', 'Stimmt. Ich ziehe meinen Mantel an.']
            ]),
            exercises: exerciseList([
              exSelect('___ Hose', 'die', ['der', 'die', 'das']),
              exSelect('___ Hemd', 'das', ['der', 'die', 'das']),
              exSelect('___ Pullover', 'der', ['der', 'die', 'das']),
              exInput('Er ___________ einen Mantel. (tragen)', 'trägt'),
              exSelect('Sie trägt ___ Rock. (der)', 'einen', ['ein', 'eine', 'einen']),
              exSelect('Im Winter trägt man eine:', 'Mütze', ['Mütze', 'Shorts', 'Bluse']),
              exSelect('„sich umziehen" bedeutet:', 'to change clothes', ['to move house', 'to change clothes', 'to get undressed'])
            ])
          },
          {
            icon: '🌈', title: 'Colours and patterns', note: 'hell-, dunkel-, gestreift, gepunktet',
            explanation:
              '<p>The basic colours: <span class="de">rot, blau, grün, gelb, schwarz, weiß, grau, braun, orange, lila, rosa</span>. Shades are made with <span class="de">hell-</span> (light) and <span class="de">dunkel-</span> (dark) written together: <span class="de">hellblau, dunkelgrün</span>.</p>' +
              '<p>After <span class="de">sein</span> a colour has <strong>no ending</strong>: <span class="de">Der Pullover ist rot. Die Schuhe sind schwarz.</span> Before a noun it needs an ending — at A1 learn a few phrases: <span class="de">ein rotes Kleid, eine blaue Hose, ein schwarzer Mantel</span>.</p>' +
              '<p>Patterns: <span class="de">gestreift</span> (striped), <span class="de">kariert</span> (checked), <span class="de">gepunktet</span> (spotted), <span class="de">einfarbig</span> (plain), <span class="de">bunt</span> (colourful). To ask: <span class="de">Welche Farbe hat …?</span></p>',
            vocab: vocabTable([
              ['die Farbe', 'the colour'],
              ['rot / blau / grün', 'red / blue / green'],
              ['gelb / orange', 'yellow / orange'],
              ['schwarz / weiß / grau', 'black / white / grey'],
              ['braun / beige', 'brown / beige'],
              ['lila / rosa', 'purple / pink'],
              ['hellblau / dunkelblau', 'light blue / dark blue'],
              ['bunt', 'colourful'],
              ['gestreift', 'striped'],
              ['kariert', 'checked'],
              ['gepunktet', 'spotted'],
              ['einfarbig', 'plain'],
              ['Welche Farbe hat …?', 'What colour is …?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['After sein (no ending)', 'Before a noun (learn as phrases)'], [
                ['Der Mantel ist schwarz.', 'ein schwarz<strong>er</strong> Mantel'],
                ['Die Hose ist blau.', 'eine blau<strong>e</strong> Hose'],
                ['Das Kleid ist rot.', 'ein rot<strong>es</strong> Kleid'],
                ['Die Schuhe sind braun.', 'braun<strong>e</strong> Schuhe']
              ]) +
              '<p class="note"><em>lila, rosa, orange</em> usually keep no ending in everyday speech. Full adjective endings come at A2.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — favourite colours', [
              ['Tom', 'Welche Farbe magst du am liebsten?'],
              ['Sıla', 'Ich mag Grün. Und dunkelblau finde ich auch schön.'],
              ['Tom', 'Dein Schal ist aber gelb!'],
              ['Sıla', 'Ja, der Schal ist ein Geschenk. Er ist gestreift: gelb und weiß.'],
              ['Tom', 'Sehr bunt! Mir gefällt das.']
            ]),
            exercises: exerciseList([
              exSelect('Die Farbe vom Schnee ist:', 'weiß', ['schwarz', 'weiß', 'grau']),
              exSelect('Gras ist:', 'grün', ['grün', 'rot', 'gelb']),
              exSelect('Der Himmel ist hell und blau, also:', 'hellblau', ['dunkelblau', 'hellblau', 'blaugrau']),
              exSelect('Der Pullover ist ___.', 'rot', ['rot', 'roter', 'rotes']),
              exSelect('Ein Hemd mit Streifen ist:', 'gestreift', ['kariert', 'gestreift', 'gepunktet']),
              exInput('Welche ___________ hat dein Auto?', 'Farbe'),
              exSelect('„bunt" bedeutet:', 'colourful', ['colourful', 'plain', 'dark'])
            ])
          },
          {
            icon: '📏', title: 'Sizes and fit', note: 'Größe, zu klein, zu eng, passt gut',
            explanation:
              '<p>Sizes are <span class="de">Größen</span>: <span class="de">Welche Größe haben Sie?</span> — <span class="de">Ich habe Größe 38</span> (clothes) or <span class="de">Ich habe Schuhgröße 41.</span> International sizes are read as letters: S, M, L, XL.</p>' +
              '<p>The verb for fit is <span class="de">passen</span>: <span class="de">Die Hose passt (gut).</span> For problems, use <span class="de">zu</span> + adjective: <span class="de">zu klein, zu groß, zu eng</span> (tight), <span class="de">zu weit</span> (loose), <span class="de">zu lang, zu kurz</span>.</p>' +
              '<p>To compare, German adds <span class="de">-er</span>: <span class="de">groß → größer, klein → kleiner, lang → länger</span>. The most important irregular form is <span class="de">gut → besser</span>: <span class="de">Die blaue Hose passt besser.</span> “than” is <span class="de">als</span>: <span class="de">Diese Jacke ist billiger als die andere.</span></p>',
            vocab: vocabTable([
              ['die Größe', 'the size'],
              ['die Schuhgröße', 'the shoe size'],
              ['passen', 'to fit'],
              ['zu klein / zu groß', 'too small / too big'],
              ['zu eng / zu weit', 'too tight / too loose'],
              ['zu lang / zu kurz', 'too long / too short'],
              ['eine Nummer größer / kleiner', 'one size bigger / smaller'],
              ['besser', 'better'],
              ['als', 'than'],
              ['größer / kleiner', 'bigger / smaller'],
              ['billiger / teurer', 'cheaper / more expensive']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Comparative', ['Adjective', 'Comparative', 'Example'], [
                ['klein', 'klein<strong>er</strong>', 'Die Jacke ist kleiner als der Mantel.'],
                ['billig', 'billig<strong>er</strong>', 'Das T-Shirt ist billiger als das Hemd.'],
                ['groß', 'gr<strong>ö</strong>ß<strong>er</strong>', 'Ich brauche eine Nummer größer.'],
                ['lang', 'l<strong>ä</strong>ng<strong>er</strong>', 'Der Rock ist länger.'],
                ['teuer', 'teu<strong>rer</strong>', 'Die Schuhe sind teurer.'],
                ['gut', '<strong>besser</strong>', 'Die blaue Hose passt besser.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — it doesn’t fit', [
              ['Verkäuferin', 'Passt die Hose?'],
              ['Kundin', 'Nein, sie ist zu eng. Haben Sie die Hose eine Nummer größer?'],
              ['Verkäuferin', 'Welche Größe haben Sie?'],
              ['Kundin', 'Normalerweise 38. Diese ist 36.'],
              ['Verkäuferin', 'Hier ist Größe 38. … Und?'],
              ['Kundin', 'Die passt viel besser!']
            ]),
            exercises: exerciseList([
              exSelect('Die Schuhe sind zu klein. Ich brauche eine Nummer ___.', 'größer', ['größer', 'kleiner', 'besser']),
              exSelect('Die Hose ist nicht zu groß, nicht zu klein. Sie ___ gut.', 'passt', ['passt', 'trägt', 'steht zu']),
              exSelect('Komparativ von „gut":', 'besser', ['guter', 'besser', 'gutter']),
              exInput('Komparativ von „billig": ___________', 'billiger'),
              exInput('Komparativ von „lang": ___________', 'länger'),
              exSelect('Die Jacke ist teurer ___ der Pullover.', 'als', ['als', 'wie', 'dann']),
              exSelect('„zu eng" bedeutet:', 'too tight', ['too tight', 'too long', 'too loose'])
            ])
          },
          {
            icon: '🛍️', title: 'In a clothes shop', note: 'Kann ich das anprobieren? Haben Sie das in …?',
            explanation:
              '<p>Typical phrases: <span class="de">Ich suche einen Pullover.</span> <span class="de">Haben Sie das in Blau / in Größe M?</span> <span class="de">Kann ich das anprobieren?</span> (try on) <span class="de">Wo sind die Umkleidekabinen?</span> (changing rooms).</p>' +
              '<p>To point at a specific item use <span class="de">dieser / diese / dieses</span> (this). It takes the same endings as <span class="de">der / die / das</span>: <span class="de">Dieser Pullover ist schön. Ich nehme diesen Pullover.</span> (accusative, masculine <em>-en</em>).</p>' +
              '<p>The assistant often asks <span class="de">Kann ich Ihnen helfen?</span> If you only want to look: <span class="de">Danke, ich schaue nur.</span></p>',
            vocab: vocabTable([
              ['Kann ich Ihnen helfen?', 'Can I help you?'],
              ['Ich schaue nur.', 'I’m just looking.'],
              ['Ich suche …', 'I’m looking for …'],
              ['anprobieren', 'to try on'],
              ['die Umkleidekabine', 'the changing room'],
              ['Haben Sie das in Blau?', 'Do you have it in blue?'],
              ['dieser / diese / dieses', 'this'],
              ['der Spiegel', 'the mirror'],
              ['der Schlussverkauf / Sale', 'the sale'],
              ['reduziert', 'reduced'],
              ['Ich nehme ihn / sie / es.', 'I’ll take it.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('dies- (this)', ['', 'masculine', 'feminine', 'neuter', 'plural'], [
                ['Nominativ', '<strong>dieser</strong> Rock', '<strong>diese</strong> Jacke', '<strong>dieses</strong> Kleid', '<strong>diese</strong> Schuhe'],
                ['Akkusativ', '<strong>diesen</strong> Rock', 'diese Jacke', 'dieses Kleid', 'diese Schuhe']
              ]) +
              '<p class="note">Pronoun for clothing in the accusative: <span class="de">Den Pullover? Ich nehme <strong>ihn</strong>.</span> · die Jacke → <strong>sie</strong> · das Kleid → <strong>es</strong>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — buying a jacket', [
              ['Verkäufer', 'Guten Tag! Kann ich Ihnen helfen?'],
              ['Kunde', 'Ja, ich suche eine Jacke für den Winter.'],
              ['Verkäufer', 'Wie finden Sie diese Jacke hier? Sie ist reduziert.'],
              ['Kunde', 'Schön. Haben Sie die auch in Schwarz? Größe L?'],
              ['Verkäufer', 'Ja, hier. Die Umkleidekabine ist dort hinten.'],
              ['Kunde', 'Sie passt super. Ich nehme sie.']
            ]),
            exercises: exerciseList([
              exSelect('___ Pullover ist schön. (this)', 'Dieser', ['Dieser', 'Diese', 'Dieses']),
              exSelect('Ich nehme ___ Pullover. (Akk.)', 'diesen', ['dieser', 'diesen', 'dieses']),
              exSelect('Wie findest du ___ Kleid?', 'dieses', ['dieser', 'diese', 'dieses']),
              exSelect('Den Mantel? Ja, ich nehme ___.', 'ihn', ['er', 'ihn', 'es']),
              exSelect('Kann ich die Hose ___?', 'anprobieren', ['anprobieren', 'probiere an', 'an probieren']),
              exSelect('„Ich schaue nur" bedeutet:', 'I’m just looking', ['I’m just looking', 'I’m looking for something', 'I’ll take it']),
              exInput('Man probiert Kleidung in der ___________ an.', 'Umkleidekabine')
            ])
          },
          {
            icon: '🪞', title: 'Saying how something looks', note: 'Das steht dir. Das sieht gut aus.',
            explanation:
              '<p>To comment on clothes, German has three common patterns. <span class="de">Das sieht gut aus.</span> (It looks good — <em>aussehen</em> is separable.) <span class="de">Das steht dir gut.</span> (It suits you.) <span class="de">Das gefällt mir.</span> (I like it.)</p>' +
              '<p><span class="de">stehen</span> and <span class="de">gefallen</span> take the <strong>person in the dative</strong>: <span class="de">Die Farbe steht <strong>dir</strong>.</span> <span class="de">Der Rock gefällt <strong>mir</strong> nicht.</span> The thing is the subject: with a plural thing the verb is plural: <span class="de">Die Schuhe gefallen mir.</span></p>' +
              '<p>Useful adjectives: <span class="de">schick</span> (smart), <span class="de">elegant</span>, <span class="de">bequem</span> (comfortable), <span class="de">modisch</span> (fashionable), <span class="de">altmodisch</span> (old-fashioned), <span class="de">sportlich</span>.</p>',
            vocab: vocabTable([
              ['aussehen', 'to look'],
              ['Das sieht gut aus.', 'That looks good.'],
              ['stehen + Dat.', 'to suit'],
              ['Das steht dir.', 'That suits you.'],
              ['gefallen + Dat.', 'to please (= like)'],
              ['Das gefällt mir.', 'I like it.'],
              ['schick', 'smart, chic'],
              ['elegant', 'elegant'],
              ['bequem', 'comfortable'],
              ['modisch / altmodisch', 'fashionable / old-fashioned'],
              ['sportlich', 'sporty'],
              ['die Mode', 'the fashion']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Verbs with the dative person', ['Verb', 'Singular thing', 'Plural thing'], [
                ['gefallen', 'Das Kleid <strong>gefällt</strong> mir.', 'Die Schuhe <strong>gefallen</strong> mir.'],
                ['stehen', 'Die Farbe <strong>steht</strong> dir.', 'Die Hosen <strong>stehen</strong> dir.'],
                ['aussehen', 'Du <strong>siehst</strong> toll <strong>aus</strong>.', 'Die Schuhe <strong>sehen</strong> neu <strong>aus</strong>.']
              ]) +
              '<p class="note">gefallen is irregular: <em>es gefällt</em>. Dative pronouns: mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — in front of the mirror', [
              ['Sıla', 'Wie sehe ich aus?'],
              ['Lena', 'Toll! Das Kleid steht dir sehr gut.'],
              ['Sıla', 'Wirklich? Gefällt dir die Farbe?'],
              ['Lena', 'Ja, Grün ist deine Farbe. Und die Schuhe sehen elegant aus.'],
              ['Sıla', 'Die Schuhe gefallen mir auch, aber sie sind nicht sehr bequem.']
            ]),
            exercises: exerciseList([
              exSelect('Das Kleid ___ mir.', 'gefällt', ['gefällt', 'gefallen', 'gefalle']),
              exSelect('Die Schuhe ___ mir.', 'gefallen', ['gefällt', 'gefallen', 'gefallt']),
              exSelect('Die Farbe steht ___ gut. (du)', 'dir', ['dich', 'dir', 'du']),
              exSelect('Du ___ toll ___!', 'siehst … aus', ['siehst … aus', 'aussiehst …', 'sieht … aus']),
              exSelect('Der Pullover gefällt ___. (er)', 'ihm', ['er', 'ihn', 'ihm']),
              exSelect('Das Gegenteil von „modisch" ist:', 'altmodisch', ['schick', 'altmodisch', 'elegant']),
              exInput('„That suits you" = Das ___________ dir.', 'steht')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: clothing and articles, colours, sizes and comparatives, dieser, and gefallen / stehen with the dative.</p>',
        exercises: exerciseList([
          exSelect('___ Hemd', 'das', ['der', 'die', 'das']),
          exInput('Er ___________ einen Mantel. (tragen)', 'trägt'),
          exSelect('Der Pullover ist ___.', 'rot', ['rot', 'roter', 'rotes']),
          exSelect('Ein Hemd mit Streifen ist:', 'gestreift', ['kariert', 'gestreift', 'gepunktet']),
          exSelect('Komparativ von „gut":', 'besser', ['guter', 'besser', 'gutter']),
          exSelect('Die Jacke ist teurer ___ der Pullover.', 'als', ['als', 'wie', 'dann']),
          exSelect('Ich nehme ___ Pullover. (Akk.)', 'diesen', ['dieser', 'diesen', 'dieses']),
          exSelect('Den Mantel? Ja, ich nehme ___.', 'ihn', ['er', 'ihn', 'es']),
          exSelect('Die Schuhe ___ mir.', 'gefallen', ['gefällt', 'gefallen', 'gefallt']),
          exSelect('Die Farbe steht ___ gut. (du)', 'dir', ['dich', 'dir', 'du']),
          exSelect('„zu eng" bedeutet:', 'too tight', ['too tight', 'too long', 'too loose']),
          exInput('Komparativ von „lang": ___________', 'länger')
        ]),

        reading: {
          intro: 'A short online shop description and a customer review. Read for colours, sizes, prices and opinions.',
          words: 105, minutes: 6,
          text: readingText('Online-Shop: Winterjacke „Nordwind"', [
            '<strong>Produkt:</strong> Warme Winterjacke mit Kapuze. Farben: Schwarz, Dunkelblau, Rot. Größen: S bis XXL. Preis: 129 € — jetzt reduziert: <strong>89 €</strong>. Die Jacke ist wasserdicht und sehr leicht.',
            '<strong>Bewertung von Anna K. (4 von 5 Sternen):</strong> Ich habe die Jacke in Dunkelblau, Größe M. Die Farbe ist sehr schön und die Jacke ist warm und bequem. Aber die Ärmel sind ein bisschen zu lang. Meine alte Jacke war kleiner. Ich empfehle eine Nummer kleiner! Für 89 € ist die Jacke aber super. Sie gefällt mir sehr.'
          ], 'Webseite, fiktiv'),
          glossary: vocabTable([
            ['die Kapuze', 'the hood'],
            ['wasserdicht', 'waterproof'],
            ['leicht', 'light'],
            ['der Ärmel', 'the sleeve'],
            ['empfehlen', 'to recommend']
          ]),
          questions: exerciseList([
            exSelect('In welcher Farbe gibt es die Jacke NICHT?', 'Grün', ['Schwarz', 'Rot', 'Grün']),
            exInput('Was kostet die Jacke jetzt? (… €)', '89|89 €'),
            exTF('Die Jacke ist wasserdicht.', true),
            exSelect('Welche Größe hat Anna?', 'M', ['S', 'M', 'L']),
            exSelect('Was ist das Problem?', 'Die Ärmel sind zu lang.', ['Die Jacke ist zu eng.', 'Die Ärmel sind zu lang.', 'Die Farbe ist hässlich.']),
            exSelect('Was empfiehlt Anna?', 'eine Nummer kleiner', ['eine Nummer größer', 'eine Nummer kleiner', 'eine andere Farbe']),
            exTF('Die Jacke gefällt Anna nicht.', false)
          ])
        },

        listening: {
          title: 'Im Kleidungsgeschäft',
          intro: 'A customer looks for clothes for a wedding. Listen for the item, the colour, the size and the price.',
          lines: [
            ['Verkäuferin', 'Guten Tag! Kann ich Ihnen helfen?'],
            ['Kunde', 'Ja, ich brauche ein Hemd für eine Hochzeit.'],
            ['Verkäuferin', 'Welche Größe haben Sie?'],
            ['Kunde', 'Größe 40. Haben Sie ein Hemd in Hellblau?'],
            ['Verkäuferin', 'Ja, dieses hier. Möchten Sie es anprobieren?'],
            ['Kunde', '… Hm, es ist ein bisschen zu eng.'],
            ['Verkäuferin', 'Dann nehmen Sie Größe 41. Probieren Sie dieses.'],
            ['Kunde', 'Das passt besser. Was kostet es?'],
            ['Verkäuferin', '49 Euro. Es steht Ihnen sehr gut!'],
            ['Kunde', 'Danke. Ich nehme es.']
          ],
          questions: exerciseList([
            exSelect('Was sucht der Kunde?', 'ein Hemd', ['einen Anzug', 'ein Hemd', 'eine Hose']),
            exInput('Für welches Fest? (eine …)', 'Hochzeit|eine Hochzeit'),
            exSelect('Welche Farbe möchte er?', 'Hellblau', ['Weiß', 'Hellblau', 'Dunkelblau']),
            exSelect('Was ist das Problem mit Größe 40?', 'Es ist zu eng.', ['Es ist zu groß.', 'Es ist zu eng.', 'Es ist zu teuer.']),
            exInput('Welche Größe kauft er? (Zahl)', '41|einundvierzig'),
            exInput('Was kostet das Hemd? (… Euro)', '49|49 Euro')
          ])
        },

        writing: {
          title: 'Was ziehe ich an?',
          textType: 'Nachricht an eine Freundin',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Sie gehen am Samstag zu einer Party. Sie haben neue Kleidung gekauft. Schreiben Sie einer Freundin.</p>' +
            '<p class="note">You are going to a party on Saturday and have bought new clothes. Write to a friend.</p>',
          plainTask: 'Write a short message in German (30–60 words) to a friend. Say what new clothes you bought for the party, give colours and say what you think of them (gefallen / bequem / schick), compare one thing (besser / billiger), and ask what she will wear.',
          bullets: [
            'Was haben Sie <strong>gekauft</strong>? (Ich habe … gekauft / Ich habe jetzt …)',
            'Beschreiben Sie <strong>Farbe</strong> und Ihre <strong>Meinung</strong>.',
            'Vergleichen Sie etwas (<strong>besser, billiger …</strong>).',
            'Fragen Sie, was Ihre Freundin <strong>trägt</strong>.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Kleidung', 'Ich habe jetzt ein neues Kleid. Es ist dunkelrot.'],
            ['Meinung', 'Es gefällt mir sehr. · Die Schuhe sind schick, aber nicht bequem.'],
            ['Vergleich', 'Die blaue Hose war billiger als die schwarze.'],
            ['Frage', 'Was ziehst du an? · Was trägst du?'],
            ['Gruß', 'Bis Samstag! · Liebe Grüße']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich nenne zwei Kleidungsstücke mit Farbe.',
            'Ich sage meine Meinung mit gefallen oder stehen.',
            'Ich benutze einen Komparativ mit als.',
            'Ich stelle eine Frage.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Practical first.</strong> Everyday German fashion is often practical and casual: functional jackets, sneakers and dark colours. In offices outside banking and law, smart-casual is normal.</p>' +
          '<p><strong>Dress for the weather.</strong> The saying <em>Es gibt kein schlechtes Wetter, nur falsche Kleidung</em> — there is no bad weather, only the wrong clothes — sums up the attitude. A rain jacket is standard equipment.</p>' +
          '<p><strong>Sizes.</strong> German clothing sizes for women are usually 34–46, for men 44–58 (or S–XXL); shoe sizes are European (36–47). Sizes vary between brands, so try things on.</p>' +
          '<p><strong>Returns and second-hand.</strong> Online shopping with free returns is very common. Flea markets (<em>Flohmärkte</em>) and second-hand shops are popular and seen as sustainable.</p>' +
          '<p><strong>Traditional dress.</strong> In Bavaria and Austria, <em>Dirndl</em> and <em>Lederhosen</em> are worn at festivals such as the Oktoberfest and at weddings.</p>',

        recap: [
          { group: '🧥 Kleidung', rows: [
            ['der Pullover', 'the jumper'], ['der Mantel', 'the coat'], ['der Rock', 'the skirt'], ['die Hose', 'the trousers'],
            ['die Jacke', 'the jacket'], ['das Hemd', 'the shirt'], ['das Kleid', 'the dress'], ['die Schuhe', 'the shoes'], ['tragen', 'to wear']
          ] },
          { group: '🌈 Farben', rows: [
            ['rot', 'red'], ['blau', 'blue'], ['grün', 'green'], ['gelb', 'yellow'], ['schwarz', 'black'], ['weiß', 'white'],
            ['hell- / dunkel-', 'light / dark'], ['gestreift', 'striped'], ['kariert', 'checked']
          ] },
          { group: '📏 Größe', rows: [
            ['die Größe', 'the size'], ['passen', 'to fit'], ['zu eng / zu weit', 'too tight / too loose'],
            ['größer / kleiner', 'bigger / smaller'], ['besser', 'better'], ['als', 'than']
          ] },
          { group: '🛍️ Im Geschäft', rows: [
            ['anprobieren', 'to try on'], ['die Umkleidekabine', 'the changing room'], ['dieser / diese / dieses', 'this'],
            ['Ich schaue nur.', 'I’m just looking.'], ['reduziert', 'reduced']
          ] },
          { group: '🪞 Meinung', rows: [
            ['Das gefällt mir.', 'I like it.'], ['Das steht dir.', 'That suits you.'], ['Das sieht gut aus.', 'That looks good.'],
            ['schick', 'smart'], ['bequem', 'comfortable']
          ] }
        ],

        sentences: [
          { de: 'Sie trägt ein rotes Kleid', en: 'She is wearing a red dress' },
          { de: 'Kann ich das anprobieren', en: 'Can I try that on' },
          { de: 'Die Hose ist zu eng', en: 'The trousers are too tight' },
          { de: 'Haben Sie das eine Nummer größer', en: 'Do you have that one size bigger' },
          { de: 'Das steht dir gut', en: 'That suits you' },
          { de: 'Die Schuhe gefallen mir', en: 'I like the shoes' }
        ]
      },

      { // ===== UNIT 14 — written out in full =====
        title: '🌦️ Unit 14 — Weather and Seasons',
        subject: 'Wetter und Jahreszeiten',
        canDo: ['Talk about today’s weather and the forecast', 'Link weather to what you will do'],
        grammarFocus: ['Impersonal es', 'wenn-clauses (introduction)', 'Subordinate clause word order'],
        topics: [
          {
            icon: '☀️', title: 'Describing the weather', note: 'Es ist sonnig / Es regnet / Es sind 18 Grad',
            explanation:
              '<p>Weather sentences in German almost always start with an impersonal <span class="de">es</span> (it). There are three patterns: <span class="de">es + verb</span> for what is happening (<span class="de">Es regnet. Es schneit. Es donnert.</span>), <span class="de">es ist + adjective</span> for the state (<span class="de">Es ist sonnig / kalt / windig / bewölkt.</span>) and <span class="de">es gibt + noun</span> (<span class="de">Es gibt ein Gewitter.</span>).</p>' +
              '<p>Many weather adjectives are made from nouns with <span class="de">-ig</span>: <span class="de">die Sonne → sonnig, der Wind → windig, der Nebel → neblig, die Wolke → wolkig</span>.</p>' +
              '<p>To ask: <span class="de">Wie ist das Wetter (heute)?</span> And for temperature: <span class="de">Wie warm / kalt ist es? — Es sind 18 Grad.</span> Note the plural <span class="de">sind</span> with a number.</p>',
            vocab: vocabTable([
              ['das Wetter', 'the weather'],
              ['die Sonne / sonnig', 'the sun / sunny'],
              ['der Regen / Es regnet.', 'the rain / It’s raining.'],
              ['der Schnee / Es schneit.', 'the snow / It’s snowing.'],
              ['der Wind / windig', 'the wind / windy'],
              ['die Wolke / bewölkt', 'the cloud / cloudy'],
              ['der Nebel / neblig', 'the fog / foggy'],
              ['das Gewitter', 'the thunderstorm'],
              ['warm / heiß', 'warm / hot'],
              ['kühl / kalt', 'cool / cold'],
              ['nass / trocken', 'wet / dry'],
              ['schön / schlecht', 'nice / bad'],
              ['das Grad', 'the degree']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Impersonal es', ['Pattern', 'Example'], [
                ['es + verb', 'Es <strong>regnet</strong>. Es <strong>schneit</strong>. Es <strong>blitzt</strong>.'],
                ['es ist + adjective', 'Es <strong>ist</strong> kalt. Es <strong>ist</strong> sonnig.'],
                ['es sind + number', 'Es <strong>sind</strong> 25 Grad. (minus fünf Grad)'],
                ['es gibt + Akk.', 'Heute gibt es <strong>ein</strong> Gewitter.']
              ]) +
              '<p class="note">With inversion es moves behind the verb: <span class="de">Heute regnet es.</span> <span class="de">Morgen ist es kalt.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — on the phone', [
              ['Mutter', 'Wie ist das Wetter in Hamburg?'],
              ['Sıla', 'Schlecht! Es regnet und es ist windig. Und in Izmir?'],
              ['Mutter', 'Hier ist es sonnig und heiß. Es sind 32 Grad.'],
              ['Sıla', 'Oh, das ist schön! Hier sind es nur 12 Grad.'],
              ['Mutter', 'Zieh dich warm an!']
            ]),
            exercises: exerciseList([
              exSelect('Es ___. (rain)', 'regnet', ['regnet', 'Regen', 'regnig']),
              exSelect('Die Sonne scheint. Es ist ___.', 'sonnig', ['sonnig', 'sonne', 'sonnt']),
              exSelect('Es ___ 20 Grad.', 'sind', ['ist', 'sind', 'gibt']),
              exSelect('Heute ___ es. (snow)', 'schneit', ['schneit', 'schnee', 'schneig']),
              exInput('Viel Wind: Es ist ___________.', 'windig'),
              exSelect('Richtig ist:', 'Heute ist es kalt.', ['Heute es ist kalt.', 'Heute ist es kalt.', 'Heute ist kalt es.']),
              exSelect('Das Gegenteil von „nass" ist:', 'trocken', ['trocken', 'warm', 'kühl'])
            ])
          },
          {
            icon: '🍂', title: 'Seasons and months', note: 'im Frühling, im Herbst — and typical weather',
            explanation:
              '<p>The four seasons are all masculine: <span class="de">der Frühling, der Sommer, der Herbst, der Winter</span>. Seasons and months take <span class="de">im</span> (in dem): <span class="de">im Sommer, im Januar</span>. Days take <span class="de">am</span>: <span class="de">am Montag</span>. Clock times take <span class="de">um</span>.</p>' +
              '<p>Describing a season combines weather words with activities: <span class="de">Im Herbst ist es oft neblig und die Blätter sind bunt. Im Winter fahren viele Leute Ski.</span></p>' +
              '<p>In the north the climate is mild and wet; in the south and the Alps winters are colder and snowier. The months are in Unit 4 — revise them here with their weather.</p>',
            vocab: vocabTable([
              ['die Jahreszeit', 'the season'],
              ['der Frühling', 'spring'],
              ['der Sommer', 'summer'],
              ['der Herbst', 'autumn'],
              ['der Winter', 'winter'],
              ['im Frühling / im Juli', 'in spring / in July'],
              ['das Blatt / die Blätter', 'the leaf / leaves'],
              ['die Blume', 'the flower'],
              ['blühen', 'to bloom'],
              ['der Urlaub', 'the holiday'],
              ['Ski fahren', 'to ski'],
              ['baden', 'to swim (in a lake)'],
              ['die Lieblingsjahreszeit', 'the favourite season']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Time prepositions', ['', 'Preposition', 'Example'], [
                ['seasons', '<strong>im</strong>', 'im Sommer, im Winter'],
                ['months', '<strong>im</strong>', 'im März, im Dezember'],
                ['days, parts of day', '<strong>am</strong>', 'am Sonntag, am Abend'],
                ['clock time', '<strong>um</strong>', 'um 8 Uhr'],
                ['years', '(—) / im Jahr', '2026 / im Jahr 2026']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — favourite season', [
              ['Tom', 'Was ist deine Lieblingsjahreszeit?'],
              ['Sıla', 'Der Frühling. Im April und Mai blühen die Blumen und es ist nicht zu heiß.'],
              ['Tom', 'Ich mag den Winter. Im Januar fahre ich in den Alpen Ski.'],
              ['Sıla', 'Mir ist es im Winter zu kalt!'],
              ['Tom', 'Und der Herbst? Im Oktober sind die Blätter so bunt.'],
              ['Sıla', 'Ja, aber im November regnet es oft.']
            ]),
            exercises: exerciseList([
              exSelect('___ Sommer ist es heiß.', 'Im', ['Im', 'Am', 'Um']),
              exSelect('Ich habe ___ Juli Urlaub.', 'im', ['im', 'am', 'um']),
              exSelect('___ Montag regnet es.', 'Am', ['Im', 'Am', 'Um']),
              exSelect('Die Jahreszeit nach dem Sommer ist der:', 'Herbst', ['Frühling', 'Herbst', 'Winter']),
              exSelect('Alle Jahreszeiten sind:', 'maskulin', ['maskulin', 'feminin', 'neutral']),
              exSelect('Im Frühling ___ die Blumen.', 'blühen', ['blühen', 'schneien', 'regnen']),
              exInput('Was ist deine Lieblings___________?', 'jahreszeit')
            ])
          },
          {
            icon: '🌡️', title: 'Temperature and forecasts', note: 'Reading a short weather report',
            explanation:
              '<p>A weather forecast (<span class="de">die Wettervorhersage</span>, informally <span class="de">der Wetterbericht</span>) uses short phrases: <span class="de">Am Vormittag sonnig, am Nachmittag Regenschauer. Höchstwerte 22 Grad, Tiefstwerte 9 Grad.</span></p>' +
              '<p>For the future German usually uses the <strong>present tense + a time word</strong>: <span class="de">Morgen regnet es.</span> The verb <span class="de">werden</span> is also common in forecasts: <span class="de">Es wird kälter.</span> (It’s getting colder.) <span class="de">Morgen wird es sonnig.</span></p>' +
              '<p>Temperature words: <span class="de">plus / minus 5 Grad</span>, <span class="de">unter null</span> (below zero), <span class="de">die Temperatur steigt / sinkt</span> (rises / falls).</p>',
            vocab: vocabTable([
              ['die Wettervorhersage', 'the weather forecast'],
              ['der Wetterbericht', 'the weather report'],
              ['die Temperatur', 'the temperature'],
              ['der Höchstwert / Tiefstwert', 'the high / low'],
              ['der Schauer', 'the shower'],
              ['heiter', 'fair, bright'],
              ['wechselhaft', 'changeable'],
              ['unter null', 'below zero'],
              ['steigen / sinken', 'to rise / fall'],
              ['es wird wärmer / kälter', 'it’s getting warmer / colder'],
              ['morgen / übermorgen', 'tomorrow / the day after tomorrow'],
              ['im Norden / im Süden', 'in the north / south']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('werden — to become', ['Person', 'werden'], [
                ['ich', 'werde'], ['du', '<strong>wirst</strong>'], ['er / sie / es', '<strong>wird</strong>'], ['wir / sie / Sie', 'werden']
              ]) +
              '<div class="example-box">Es <strong>wird</strong> kalt. · Morgen <strong>wird</strong> es wärmer. · Am Wochenende <strong>regnet</strong> es. (present for future)</div>' +
              '</div>',
            dialogs: dialogBox('Dialog — the weekend forecast', [
              ['Lena', 'Hast du den Wetterbericht gehört?'],
              ['Tom', 'Ja. Morgen wird es kälter, nur 8 Grad.'],
              ['Lena', 'Und am Wochenende?'],
              ['Tom', 'Am Samstag regnet es, aber am Sonntag wird es sonnig.'],
              ['Lena', 'Dann gehen wir am Sonntag wandern!']
            ]),
            exercises: exerciseList([
              exSelect('Morgen ___ es wärmer.', 'wird', ['wird', 'werde', 'wirst']),
              exSelect('„Es wird kälter" bedeutet:', 'It’s getting colder', ['It was colder', 'It’s getting colder', 'It’s cold']),
              exSelect('-3 Grad ist:', 'unter null', ['unter null', 'über null', 'heiß']),
              exSelect('„wechselhaft" bedeutet:', 'changeable', ['stormy', 'changeable', 'dry']),
              exInput('Du ___________ müde. (werden)', 'wirst'),
              exSelect('Am Samstag ___ es. (future, rain)', 'regnet', ['regnet', 'regnete', 'regnen']),
              exSelect('Der Tag nach morgen ist:', 'übermorgen', ['gestern', 'übermorgen', 'vorgestern'])
            ])
          },
          {
            icon: '🧣', title: 'Weather and plans', note: 'Wenn es regnet, bleiben wir zu Hause.',
            explanation:
              '<p>To link weather to plans use <span class="de">wenn</span> (if / when). <span class="de">wenn</span> opens a <strong>subordinate clause</strong>, and in a subordinate clause the conjugated verb goes to the <strong>end</strong>: <span class="de">…, wenn es <strong>regnet</strong>.</span> <span class="de">…, wenn das Wetter schön <strong>ist</strong>.</span></p>' +
              '<p>If the wenn-clause comes first, it counts as position 1, so the main-clause verb follows immediately — two verbs meet at the comma: <span class="de">Wenn es <strong>regnet</strong>, <strong>bleiben</strong> wir zu Hause.</span></p>' +
              '<p>This is the A1 introduction to subordinate clauses; <span class="de">weil</span> and <span class="de">dass</span> work the same way and come at A2.</p>',
            vocab: vocabTable([
              ['wenn', 'if, when'],
              ['zu Hause bleiben', 'to stay at home'],
              ['der Regenschirm', 'the umbrella'],
              ['die Sonnenbrille', 'the sunglasses'],
              ['die Sonnencreme', 'the sun cream'],
              ['grillen', 'to have a barbecue'],
              ['ins Schwimmbad gehen', 'to go to the pool'],
              ['einen Ausflug machen', 'to go on a trip'],
              ['Schlittschuh laufen', 'to ice-skate'],
              ['einen Schneemann bauen', 'to build a snowman'],
              ['drinnen / draußen', 'inside / outside']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('wenn — verb to the end', ['Main clause', 'wenn-clause'], [
                ['Wir bleiben zu Hause,', 'wenn es <strong>regnet</strong>.'],
                ['Ich gehe schwimmen,', 'wenn es heiß <strong>ist</strong>.'],
                ['Wir grillen,', 'wenn das Wetter schön <strong>bleibt</strong>.']
              ]) +
              formTable('wenn-clause first', ['wenn-clause (position 1)', 'Verb (2)', 'Rest'], [
                ['Wenn es regnet,', '<strong>bleiben</strong>', 'wir zu Hause.'],
                ['Wenn es schneit,', '<strong>bauen</strong>', 'die Kinder einen Schneemann.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — plans for Saturday', [
              ['Tom', 'Was machen wir am Samstag?'],
              ['Lena', 'Wenn es sonnig ist, machen wir einen Ausflug an den See.'],
              ['Tom', 'Und wenn es regnet?'],
              ['Lena', 'Wenn es regnet, gehen wir ins Museum.'],
              ['Tom', 'Gute Idee. Ich nehme trotzdem einen Regenschirm mit.']
            ]),
            exercises: exerciseList([
              exSelect('Wir bleiben zu Hause, wenn es ___.', 'regnet', ['regnet', 'es regnet', 'regnen']),
              exSelect('Ich gehe schwimmen, wenn es heiß ___.', 'ist', ['ist', 'sind', 'es ist']),
              exSelect('Wenn es regnet, ___ wir zu Hause.', 'bleiben', ['bleiben', 'wir bleiben', 'bleibt']),
              exSelect('Richtig ist:', 'Wenn es schneit, baue ich einen Schneemann.', ['Wenn es schneit, ich baue einen Schneemann.', 'Wenn es schneit, baue ich einen Schneemann.', 'Wenn schneit es, baue ich einen Schneemann.']),
              exSelect('Bei Regen braucht man einen:', 'Regenschirm', ['Regenschirm', 'Sonnenbrille', 'Schneemann']),
              exInput('Wenn die Sonne scheint, ___________ wir. (grillen)', 'grillen'),
              exSelect('Das Gegenteil von „draußen" ist:', 'drinnen', ['drinnen', 'oben', 'zu Fuß'])
            ])
          },
          {
            icon: '🗺️', title: 'Climate in German-speaking countries', note: 'North vs. Alps',
            explanation:
              '<p>Germany, Austria and Switzerland have a temperate climate with four seasons, but there are big differences. The <strong>north</strong> near the North Sea and Baltic Sea (<span class="de">die Nordsee, die Ostsee</span>) is windy and mild, with lots of rain. The <strong>south</strong> and the <strong>Alps</strong> (<span class="de">die Alpen</span>) have colder, snowier winters and warmer summers.</p>' +
              '<p>To compare regions use the comparative (Unit 13) with <span class="de">als</span>: <span class="de">Im Süden ist es im Sommer wärmer als im Norden.</span> And the superlative for extremes: <span class="de">Die Zugspitze ist der höchste Berg Deutschlands.</span></p>' +
              '<p>Directions: <span class="de">im Norden, im Süden, im Osten, im Westen</span>; in the mountains: <span class="de">in den Bergen</span>; at the sea: <span class="de">am Meer, an der Küste</span>.</p>',
            vocab: vocabTable([
              ['das Klima', 'the climate'],
              ['der Norden / Süden', 'the north / south'],
              ['der Osten / Westen', 'the east / west'],
              ['die Küste', 'the coast'],
              ['das Meer / die See', 'the sea'],
              ['die Nordsee / Ostsee', 'the North Sea / Baltic Sea'],
              ['die Alpen', 'the Alps'],
              ['der Berg', 'the mountain'],
              ['der See', 'the lake'],
              ['mild', 'mild'],
              ['feucht', 'humid'],
              ['der Klimawandel', 'climate change']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Im Süden ist es <strong>wärmer als</strong> im Norden. · In den Alpen ist es im Winter <strong>kälter als</strong> an der Küste. · In Hamburg regnet es <strong>öfter als</strong> in München.</div>' +
              '<p class="note">Careful: <em>der See</em> = lake, <em>die See</em> = sea. <em>am</em> Meer / <em>an der</em> Küste / <em>in den</em> Bergen (Dativ).</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — holiday at the sea or in the mountains?', [
              ['Lena', 'Fahren wir im Sommer ans Meer oder in die Berge?'],
              ['Tom', 'An der Nordsee ist es oft windig und kühl.'],
              ['Lena', 'Aber in den Alpen regnet es im Sommer auch viel.'],
              ['Tom', 'Stimmt. Im Süden ist es aber wärmer als im Norden.'],
              ['Lena', 'Dann fahren wir an einen See in Bayern. Da kann man baden und wandern!']
            ]),
            exercises: exerciseList([
              exSelect('Die Alpen sind im:', 'Süden', ['Norden', 'Süden', 'Osten']),
              exSelect('Die Nordsee ist im:', 'Norden', ['Norden', 'Süden', 'Westen']),
              exSelect('Im Süden ist es wärmer ___ im Norden.', 'als', ['als', 'wie', 'dann']),
              exSelect('„der See" bedeutet:', 'the lake', ['the sea', 'the lake', 'the coast']),
              exSelect('Wir machen Urlaub ___ Meer.', 'am', ['am', 'im', 'auf']),
              exInput('Wir wandern in den ___________. (mountains)', 'Bergen'),
              exSelect('„mild" beschreibt ein Klima ohne:', 'extreme Temperaturen', ['Regen', 'extreme Temperaturen', 'Wind'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: impersonal es, seasons with im / am / um, werden and the forecast, wenn-clauses with the verb at the end, and comparing regions.</p>',
        exercises: exerciseList([
          exSelect('Es ___. (rain)', 'regnet', ['regnet', 'Regen', 'regnig']),
          exSelect('Es ___ 20 Grad.', 'sind', ['ist', 'sind', 'gibt']),
          exSelect('Richtig ist:', 'Heute ist es kalt.', ['Heute es ist kalt.', 'Heute ist es kalt.', 'Heute ist kalt es.']),
          exSelect('___ Sommer ist es heiß.', 'Im', ['Im', 'Am', 'Um']),
          exSelect('___ Montag regnet es.', 'Am', ['Im', 'Am', 'Um']),
          exSelect('Morgen ___ es wärmer.', 'wird', ['wird', 'werde', 'wirst']),
          exSelect('Wir bleiben zu Hause, wenn es ___.', 'regnet', ['regnet', 'es regnet', 'regnen']),
          exSelect('Wenn es regnet, ___ wir zu Hause.', 'bleiben', ['bleiben', 'wir bleiben', 'bleibt']),
          exSelect('Im Süden ist es wärmer ___ im Norden.', 'als', ['als', 'wie', 'dann']),
          exSelect('„der See" bedeutet:', 'the lake', ['the sea', 'the lake', 'the coast']),
          exInput('Viel Wind: Es ist ___________.', 'windig'),
          exInput('Du ___________ müde. (werden)', 'wirst')
        ]),

        reading: {
          intro: 'A weather forecast for the weekend. Read for the weather in different regions and the temperatures.',
          words: 95, minutes: 5,
          text: readingText('Das Wetter am Wochenende', [
            '<strong>Samstag:</strong> Im Norden ist es bewölkt und windig, an der Küste gibt es Regenschauer. Höchstwerte 14 Grad. Im Süden scheint die Sonne, bei 21 Grad. In den Alpen ist es am Nachmittag gewittrig.',
            '<strong>Sonntag:</strong> Es wird überall wärmer. Im Norden zeigt sich die Sonne, die Temperaturen steigen auf 17 Grad. Im Süden bleibt es sonnig und trocken, bis 24 Grad.',
            '<strong>In der Nacht:</strong> Kühl, 6 bis 10 Grad, in den Bergen bis 2 Grad.',
            '<strong>Unser Tipp:</strong> Am Sonntag ist es ideal für einen Ausflug!'
          ], 'Wetterbericht, fiktiv'),
          glossary: vocabTable([
            ['der Regenschauer', 'the rain shower'],
            ['gewittrig', 'thundery'],
            ['überall', 'everywhere'],
            ['sich zeigen', 'to appear']
          ]),
          questions: exerciseList([
            exSelect('Wie ist das Wetter am Samstag im Norden?', 'bewölkt und windig', ['sonnig', 'bewölkt und windig', 'heiß']),
            exInput('Wie warm wird es am Samstag im Süden? (… Grad)', '21|21 Grad'),
            exSelect('Wo gibt es am Samstagnachmittag Gewitter?', 'in den Alpen', ['an der Küste', 'in den Alpen', 'im Norden']),
            exTF('Am Sonntag wird es kälter.', false),
            exInput('Höchstwert am Sonntag im Süden? (… Grad)', '24|24 Grad'),
            exSelect('Wie kalt ist es in der Nacht in den Bergen?', '2 Grad', ['2 Grad', '6 Grad', '10 Grad']),
            exSelect('Welcher Tag ist gut für einen Ausflug?', 'Sonntag', ['Samstag', 'Sonntag', 'keiner'])
          ])
        },

        listening: {
          title: 'Ein Ausflug am Wochenende',
          intro: 'Two friends plan a trip and check the weather. Listen for the forecast and what they decide.',
          lines: [
            ['Mia', 'Ben, wollen wir am Samstag an den Ammersee fahren?'],
            ['Ben', 'Gern, aber wie wird das Wetter?'],
            ['Mia', 'Die App sagt: Am Samstag regnet es den ganzen Tag. Nur 13 Grad.'],
            ['Ben', 'Hm. Und am Sonntag?'],
            ['Mia', 'Am Sonntag wird es sonnig, 22 Grad.'],
            ['Ben', 'Dann fahren wir am Sonntag! Wenn es warm ist, können wir baden.'],
            ['Mia', 'Super. Und am Samstag? Wenn es regnet, gehen wir ins Kino.'],
            ['Ben', 'Perfekt. Vergiss die Sonnencreme nicht!']
          ],
          questions: exerciseList([
            exInput('Wohin wollen sie fahren? (an den …)', 'Ammersee|an den Ammersee|den Ammersee'),
            exSelect('Wie ist das Wetter am Samstag?', 'Es regnet.', ['Es ist sonnig.', 'Es regnet.', 'Es schneit.']),
            exInput('Wie warm wird es am Sonntag? (… Grad)', '22|22 Grad'),
            exSelect('Wann fahren sie an den See?', 'am Sonntag', ['am Samstag', 'am Sonntag', 'nie']),
            exSelect('Was machen sie am Samstag?', 'Sie gehen ins Kino.', ['Sie baden.', 'Sie gehen ins Kino.', 'Sie wandern.']),
            exSelect('Was soll Mia nicht vergessen?', 'die Sonnencreme', ['den Regenschirm', 'die Sonnencreme', 'die Jacke'])
          ])
        },

        writing: {
          title: 'Urlaubsgrüße',
          textType: 'Postkarte',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Sie sind im Urlaub. Schreiben Sie eine Postkarte an Ihre Kursgruppe.</p>' +
            '<p class="note">You are on holiday. Write a postcard to your course group.</p>',
          plainTask: 'Write a postcard in German (30–60 words) to your course group from your holiday. Say where you are, describe the weather with es and give the temperature, say what you do when the weather is good and when it is bad (two wenn-clauses), and end with a greeting.',
          bullets: [
            'Wo sind Sie?',
            'Wie ist das <strong>Wetter</strong>? Wie viel <strong>Grad</strong>?',
            'Was machen Sie, <strong>wenn</strong> das Wetter schön ist?',
            'Was machen Sie, <strong>wenn</strong> es regnet?'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Liebe Kursgruppe, · Hallo zusammen,'],
            ['Ort', 'Ich bin gerade in … am Meer / in den Bergen.'],
            ['Wetter', 'Es ist sonnig und es sind 28 Grad. · Leider regnet es oft.'],
            ['Pläne', 'Wenn es warm ist, gehe ich baden. · Wenn es regnet, lese ich.'],
            ['Gruß', 'Viele Grüße aus … · Bis bald!']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich sage, wo ich bin.',
            'Ich beschreibe das Wetter mit es und nenne die Temperatur.',
            'Ich schreibe zwei wenn-Sätze mit dem Verb am Ende.',
            'Ich schließe mit einem Gruß.',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Small talk starts with the weather.</strong> Just like in English, weather is the safest small-talk topic. A common complaint is <em>Schmuddelwetter</em> — grey, wet, cold weather.</p>' +
          '<p><strong>The famous sayings.</strong> <em>April, April, der macht, was er will</em> — April does whatever it wants (very changeable). <em>Es gibt kein schlechtes Wetter, nur falsche Kleidung.</em></p>' +
          '<p><strong>Celsius and the comma.</strong> Temperatures are always in Celsius, and decimals use a comma: <em>21,5 Grad</em>.</p>' +
          '<p><strong>Sun means outside.</strong> As soon as the sun comes out, cafés put tables on the pavement, beer gardens fill up and people go to lakes and parks. Many people open windows wide twice a day (<em>Stoßlüften</em>), even in winter.</p>' +
          '<p><strong>Weather warnings.</strong> The German Weather Service (<em>Deutscher Wetterdienst, DWD</em>) issues warnings for storms, ice and heat. Snow tyres are required in winter conditions.</p>',

        recap: [
          { group: '☀️ Wetter', rows: [
            ['Es regnet.', 'It’s raining.'], ['Es schneit.', 'It’s snowing.'], ['Es ist sonnig.', 'It’s sunny.'], ['windig', 'windy'],
            ['bewölkt', 'cloudy'], ['das Gewitter', 'the thunderstorm'], ['Es sind 20 Grad.', 'It’s 20 degrees.']
          ] },
          { group: '🍂 Jahreszeiten', rows: [
            ['der Frühling', 'spring'], ['der Sommer', 'summer'], ['der Herbst', 'autumn'], ['der Winter', 'winter'],
            ['im Sommer', 'in summer'], ['am Montag', 'on Monday'], ['um 8 Uhr', 'at 8 o’clock']
          ] },
          { group: '🌡️ Vorhersage', rows: [
            ['die Wettervorhersage', 'the forecast'], ['es wird wärmer', 'it’s getting warmer'], ['unter null', 'below zero'],
            ['morgen', 'tomorrow'], ['übermorgen', 'the day after tomorrow']
          ] },
          { group: '🧣 Pläne', rows: [
            ['wenn', 'if, when'], ['Wenn es regnet, bleiben wir zu Hause.', 'If it rains, we stay at home.'],
            ['der Regenschirm', 'the umbrella'], ['grillen', 'to barbecue'], ['einen Ausflug machen', 'to go on a trip']
          ] },
          { group: '🗺️ Klima', rows: [
            ['der Norden / Süden', 'north / south'], ['die Küste', 'the coast'], ['die Alpen', 'the Alps'],
            ['der See / die See', 'the lake / the sea'], ['wärmer als', 'warmer than']
          ] }
        ],

        sentences: [
          { de: 'Es regnet und es ist kalt', en: 'It is raining and it is cold' },
          { de: 'Heute sind es 25 Grad', en: 'Today it is 25 degrees' },
          { de: 'Im Herbst ist es oft neblig', en: 'In autumn it is often foggy' },
          { de: 'Morgen wird es wärmer', en: 'Tomorrow it will get warmer' },
          { de: 'Wenn es regnet, bleiben wir zu Hause', en: 'If it rains, we stay at home' },
          { de: 'Im Süden ist es wärmer als im Norden', en: 'In the south it is warmer than in the north' }
        ]
      },

      { // ===== UNIT 15 — written out in full =====
        title: '💼 Unit 15 — Work and Jobs',
        subject: 'Arbeit und Beruf',
        canDo: ['Say what you do for a living and describe your tasks', 'Understand a simple job advert'],
        grammarFocus: ['als + job with no article', 'Prepositions of time von … bis, seit', 'Word order in longer statements'],
        topics: [
          {
            icon: '🧑‍🏫', title: 'Jobs and workplaces', note: 'Masculine and feminine job titles: Lehrer / Lehrerin',
            explanation:
              '<p>Almost every job title has a masculine and a feminine form. Most feminine forms add <span class="de">-in</span>: <span class="de">der Lehrer → die Lehrerin</span>, <span class="de">der Verkäufer → die Verkäuferin</span>. Some also take an umlaut: <span class="de">der Arzt → die Ärztin</span>, <span class="de">der Koch → die Köchin</span>. Plural feminine: <span class="de">-innen</span>.</p>' +
              '<p>When you say what someone <em>is</em>, German uses <strong>no article</strong>: <span class="de">Ich bin Lehrerin.</span> (not <s>eine Lehrerin</s>). The same after <span class="de">als</span>: <span class="de">Er arbeitet als Koch.</span> (He works as a cook.)</p>' +
              '<p>Workplaces: <span class="de">im Büro, in der Schule, im Krankenhaus, in einer Firma, in einem Restaurant, in der Fabrik, im Geschäft</span>; at a company: <span class="de">bei Siemens, bei der Post</span>.</p>',
            vocab: vocabTable([
              ['der Beruf', 'the profession'],
              ['der Lehrer / die Lehrerin', 'the teacher'],
              ['der Arzt / die Ärztin', 'the doctor'],
              ['der Krankenpfleger / die Krankenpflegerin', 'the nurse'],
              ['der Ingenieur / die Ingenieurin', 'the engineer'],
              ['der Verkäufer / die Verkäuferin', 'the shop assistant'],
              ['der Koch / die Köchin', 'the cook'],
              ['der Kellner / die Kellnerin', 'the waiter / waitress'],
              ['der Programmierer / die Programmiererin', 'the programmer'],
              ['der Mechaniker / die Mechanikerin', 'the mechanic'],
              ['der Student / die Studentin', 'the student'],
              ['das Büro', 'the office'],
              ['die Firma', 'the company'],
              ['arbeitslos', 'unemployed'],
              ['in Rente', 'retired']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['masculine', 'feminine', 'Rule'], [
                ['der Lehrer', 'die Lehrer<strong>in</strong>', '+ in'],
                ['der Arzt', 'die <strong>Ä</strong>rzt<strong>in</strong>', '+ umlaut + in'],
                ['der Koch', 'die K<strong>ö</strong>ch<strong>in</strong>', '+ umlaut + in'],
                ['der Kaufmann', 'die Kauf<strong>frau</strong>', '-mann → -frau']
              ]) +
              '<div class="example-box">Ich <strong>bin</strong> Ingenieurin. · Sie arbeitet <strong>als</strong> Ärztin. · Er arbeitet <strong>bei</strong> BMW. · Wir arbeiten <strong>in einem</strong> Hotel.</div>' +
              '<p class="note">No article with a job after <em>sein</em> and <em>als</em> — but with an adjective you need one: <span class="de">Sie ist eine gute Ärztin.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — what do you do?', [
              ['Tom', 'Was bist du von Beruf?'],
              ['Sıla', 'Ich bin Programmiererin. Ich arbeite bei einer Softwarefirma.'],
              ['Tom', 'Und deine Schwester?'],
              ['Sıla', 'Sie ist Ärztin. Sie arbeitet in einem Krankenhaus in Izmir.'],
              ['Tom', 'Interessant! Ich arbeite als Koch in einem Restaurant.']
            ]),
            exercises: exerciseList([
              exInput('der Lehrer → die ___________', 'Lehrerin'),
              exInput('der Arzt → die ___________', 'Ärztin'),
              exInput('der Koch → die ___________', 'Köchin'),
              exSelect('Richtig ist:', 'Ich bin Lehrer.', ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich bin der Lehrer.']),
              exSelect('Er arbeitet ___ Kellner.', 'als', ['als', 'wie', 'bei']),
              exSelect('Sie arbeitet ___ Siemens.', 'bei', ['bei', 'in', 'als']),
              exSelect('Eine Person ohne Arbeit ist:', 'arbeitslos', ['in Rente', 'arbeitslos', 'Student'])
            ])
          },
          {
            icon: '🕘', title: 'Working hours and tasks', note: 'Was machen Sie beruflich? Ich arbeite von … bis …',
            explanation:
              '<p>The polite question is <span class="de">Was machen Sie beruflich?</span> or <span class="de">Was sind Sie von Beruf?</span> To describe hours use <span class="de">von … bis …</span>: <span class="de">Ich arbeite von 9 bis 17 Uhr.</span> <span class="de">von Montag bis Freitag</span>. For duration up to now use <span class="de">seit</span> + dative: <span class="de">Ich arbeite seit drei Jahren bei der Firma.</span></p>' +
              '<p>For tasks, list verbs: <span class="de">Ich schreibe E-Mails, telefoniere mit Kunden und plane Projekte.</span> Other useful patterns: <span class="de">Ich arbeite Vollzeit / Teilzeit</span>, <span class="de">Ich habe Schichtdienst</span> (shifts), <span class="de">Ich arbeite im Homeoffice</span>.</p>' +
              '<p>In longer statements, keep the verb in position 2 and the order <strong>time – manner – place</strong>: <span class="de">Ich fahre jeden Tag mit dem Bus ins Büro.</span></p>',
            vocab: vocabTable([
              ['Was machen Sie beruflich?', 'What do you do for a living?'],
              ['von … bis …', 'from … to …'],
              ['seit', 'since, for'],
              ['Vollzeit / Teilzeit', 'full time / part time'],
              ['die Schicht', 'the shift'],
              ['das Homeoffice', 'working from home'],
              ['der Kunde / die Kundin', 'the customer'],
              ['der Kollege / die Kollegin', 'the colleague'],
              ['der Chef / die Chefin', 'the boss'],
              ['die Besprechung', 'the meeting'],
              ['telefonieren', 'to phone'],
              ['planen / organisieren', 'to plan / organise'],
              ['verdienen', 'to earn'],
              ['die Pause', 'the break']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Time prepositions', ['', 'Example', 'Meaning'], [
                ['von … bis', 'Ich arbeite <strong>von</strong> 8 <strong>bis</strong> 16 Uhr.', 'from … to'],
                ['seit + Dativ', 'Ich arbeite <strong>seit</strong> zwei Jahr<strong>en</strong> hier.', 'for (still true)'],
                ['ab', '<strong>Ab</strong> Montag arbeite ich Teilzeit.', 'from … on'],
                ['um', 'Die Besprechung ist <strong>um</strong> 10 Uhr.', 'at (clock)']
              ]) +
              formTable('Order in the middle', ['Time', 'Manner', 'Place'], [
                ['jeden Tag', 'mit dem Fahrrad', 'zur Arbeit'],
                ['morgen', 'zusammen', 'im Büro']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — a normal working day', [
              ['Lena', 'Was machst du beruflich?'],
              ['Tom', 'Ich bin Bürokaufmann. Ich arbeite seit fünf Jahren bei einer Bank.'],
              ['Lena', 'Wie sind deine Arbeitszeiten?'],
              ['Tom', 'Von Montag bis Freitag, von halb acht bis vier. Freitags arbeite ich im Homeoffice.'],
              ['Lena', 'Und was machst du genau?'],
              ['Tom', 'Ich schreibe E-Mails, telefoniere mit Kunden und organisiere Termine.']
            ]),
            exercises: exerciseList([
              exSelect('Ich arbeite ___ 9 ___ 17 Uhr.', 'von … bis', ['von … bis', 'seit … bis', 'ab … zu']),
              exSelect('Ich arbeite ___ drei Jahren hier.', 'seit', ['seit', 'von', 'vor']),
              exSelect('Ich arbeite seit zwei ___.', 'Jahren', ['Jahr', 'Jahre', 'Jahren']),
              exSelect('20 Stunden pro Woche ist:', 'Teilzeit', ['Vollzeit', 'Teilzeit', 'Schicht']),
              exSelect('Richtig ist:', 'Ich fahre jeden Tag mit dem Bus ins Büro.', ['Ich fahre ins Büro jeden Tag mit dem Bus.', 'Ich fahre jeden Tag mit dem Bus ins Büro.', 'Jeden Tag ich fahre mit dem Bus ins Büro.']),
              exInput('Was machen Sie ___________? (for a living)', 'beruflich'),
              exSelect('Die Person, mit der man zusammenarbeitet:', 'der Kollege', ['der Kunde', 'der Kollege', 'der Chef'])
            ])
          },
          {
            icon: '📄', title: 'A simple CV', note: 'Reading and filling in a Lebenslauf',
            explanation:
              '<p>A German CV (<span class="de">der Lebenslauf</span>) is usually set out as a table in reverse chronological order. Typical headings: <span class="de">Persönliche Daten</span> (personal details), <span class="de">Berufserfahrung</span> (work experience), <span class="de">Ausbildung</span> (education / training), <span class="de">Sprachkenntnisse</span> (languages), <span class="de">Kenntnisse</span> (skills), <span class="de">Hobbys</span>.</p>' +
              '<p>Dates are written with months as numbers: <span class="de">09/2021 – heute</span> or <span class="de">seit 09/2021</span>. Language levels are often given with the CEFR: <span class="de">Deutsch: A1, Englisch: fließend, Türkisch: Muttersprache</span>.</p>' +
              '<p>To talk about a CV entry: <span class="de">Von 2018 bis 2022 habe ich in Ankara studiert.</span> The past tense (Perfekt) follows in Unit 18 — here, learn to read the table.</p>',
            vocab: vocabTable([
              ['der Lebenslauf', 'the CV'],
              ['persönliche Daten', 'personal details'],
              ['das Geburtsdatum', 'the date of birth'],
              ['der Geburtsort', 'the place of birth'],
              ['die Staatsangehörigkeit', 'the nationality'],
              ['die Berufserfahrung', 'the work experience'],
              ['die Ausbildung', 'the vocational training, education'],
              ['das Studium', 'the university studies'],
              ['der Abschluss', 'the degree, qualification'],
              ['das Praktikum', 'the internship'],
              ['die Sprachkenntnisse', 'the language skills'],
              ['die Muttersprache', 'the mother tongue'],
              ['fließend', 'fluent'],
              ['die Bewerbung', 'the application']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Lebenslauf — Beispiel', ['Zeitraum', 'Station'], [
                ['seit 03/2024', 'Programmiererin, SoftTec GmbH, Hamburg'],
                ['10/2022 – 02/2024', 'Praktikum, Web Solutions, Izmir'],
                ['2018 – 2022', 'Studium Informatik, Universität Ankara (Bachelor)'],
                ['Sprachen', 'Türkisch (Muttersprache), Englisch (fließend), Deutsch (A1)']
              ]) +
              '<p class="note">Read aloud: <em>seit März 2024</em>, <em>von Oktober 2022 bis Februar 2024</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — talking about the CV', [
              ['Berater', 'Was steht in Ihrem Lebenslauf? Was ist Ihre Ausbildung?'],
              ['Sıla', 'Ich habe einen Bachelor in Informatik.'],
              ['Berater', 'Und Berufserfahrung?'],
              ['Sıla', 'Seit März 2024 arbeite ich als Programmiererin. Vorher hatte ich ein Praktikum.'],
              ['Berater', 'Welche Sprachen sprechen Sie?'],
              ['Sıla', 'Türkisch ist meine Muttersprache. Englisch spreche ich fließend, Deutsch lerne ich.']
            ]),
            exercises: exerciseList([
              exSelect('Ein „Lebenslauf" ist:', 'a CV', ['a CV', 'a job advert', 'a contract']),
              exSelect('„Berufserfahrung" bedeutet:', 'work experience', ['education', 'work experience', 'skills']),
              exSelect('Die erste Sprache eines Menschen ist die:', 'Muttersprache', ['Fremdsprache', 'Muttersprache', 'Sprachkenntnis']),
              exSelect('„fließend" bedeutet:', 'fluent', ['basic', 'fluent', 'native']),
              exSelect('Eine kurze Arbeit als Student/in, oft ohne viel Geld:', 'das Praktikum', ['das Praktikum', 'die Rente', 'der Abschluss']),
              exInput('„date of birth" = das Geburts___________', 'datum'),
              exSelect('Mit Lebenslauf und Brief schreibt man eine:', 'Bewerbung', ['Bewerbung', 'Rechnung', 'Krankmeldung'])
            ])
          },
          {
            icon: '📞', title: 'On the phone at work', note: 'Can I speak to…? Taking a message',
            explanation:
              '<p>Answering the phone at work, Germans say the company and their own surname: <span class="de">Firma Schulz, Meier, guten Tag.</span> When calling, introduce yourself the same way: <span class="de">Guten Tag, hier ist Yılmaz von der Firma SoftTec.</span></p>' +
              '<p>To ask for someone: <span class="de">Kann ich bitte mit Frau Berger sprechen?</span> Possible answers: <span class="de">Einen Moment, ich verbinde.</span> (I’ll put you through.) <span class="de">Sie ist leider nicht da / in einer Besprechung.</span> <span class="de">Kann ich etwas ausrichten?</span> (Can I take a message?)</p>' +
              '<p>To leave a message: <span class="de">Kann sie mich bitte zurückrufen?</span> <span class="de">Meine Nummer ist …</span> And to end: <span class="de">Auf Wiederhören!</span> — on the phone, not <em>Auf Wiedersehen</em>.</p>',
            vocab: vocabTable([
              ['anrufen', 'to call'],
              ['Hier ist …', 'This is …'],
              ['Kann ich mit … sprechen?', 'Can I speak to …?'],
              ['Ich verbinde.', 'I’ll put you through.'],
              ['Er / Sie ist nicht da.', 'He / she is not here.'],
              ['besetzt', 'busy (line)'],
              ['Kann ich etwas ausrichten?', 'Can I take a message?'],
              ['zurückrufen', 'to call back'],
              ['die Nachricht', 'the message'],
              ['die Durchwahl', 'the direct line'],
              ['buchstabieren', 'to spell'],
              ['Auf Wiederhören!', 'Goodbye (on the phone)']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Separable verbs on the phone', ['Infinitive', 'Sentence', 'With modal'], [
                ['anrufen', 'Ich <strong>rufe</strong> morgen wieder <strong>an</strong>.', 'Ich kann morgen wieder <strong>anrufen</strong>.'],
                ['zurückrufen', 'Sie <strong>ruft</strong> Sie <strong>zurück</strong>.', 'Kann sie mich <strong>zurückrufen</strong>?'],
                ['ausrichten', '<strong>Richten</strong> Sie ihr bitte <strong>aus</strong>, …', 'Kann ich etwas <strong>ausrichten</strong>?']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — she is in a meeting', [
              ['Empfang', 'Firma Becker, Schneider, guten Tag.'],
              ['Sıla', 'Guten Tag, hier ist Yılmaz von SoftTec. Kann ich bitte mit Frau Berger sprechen?'],
              ['Empfang', 'Frau Berger ist leider in einer Besprechung. Kann ich etwas ausrichten?'],
              ['Sıla', 'Ja, kann sie mich bitte zurückrufen? Meine Nummer ist 040 556 78 21.'],
              ['Empfang', 'Wie war Ihr Name noch mal?'],
              ['Sıla', 'Yılmaz. Ich buchstabiere: Y – I – L – M – A – Z.'],
              ['Empfang', 'Danke. Sie ruft Sie heute Nachmittag zurück. Auf Wiederhören!']
            ]),
            exercises: exerciseList([
              exSelect('Am Telefon sagt man zum Schluss:', 'Auf Wiederhören!', ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Gute Nacht!']),
              exSelect('Kann ich bitte ___ Herrn Klein sprechen?', 'mit', ['mit', 'zu', 'bei']),
              exSelect('„Ich verbinde" bedeutet:', 'I’ll put you through', ['I’ll call back', 'I’ll put you through', 'The line is busy']),
              exSelect('Die Leitung ist ___. (busy)', 'besetzt', ['besetzt', 'beschäftigt', 'belegt nicht']),
              exSelect('Sie ruft Sie morgen ___.', 'zurück', ['zurück', 'an zurück', 'wieder']),
              exInput('Kann ich etwas ___________? (take a message)', 'ausrichten'),
              exInput('Kann er mich bitte ___________? (call back)', 'zurückrufen')
            ])
          },
          {
            icon: '🤝', title: 'Small talk with colleagues', note: 'Safe topics and how to keep it short',
            explanation:
              '<p>At work, small talk is usually short and friendly. Safe topics are the weekend, holidays, weather, food, sport and local events. Germans are often more private about salary, politics and religion with colleagues they do not know well.</p>' +
              '<p>Typical openers: <span class="de">Wie war dein Wochenende?</span> <span class="de">Na, alles gut?</span> <span class="de">Hast du schon Mittagspause gemacht?</span> <span class="de">Wohin fährst du im Urlaub?</span> And on Friday: <span class="de">Schönes Wochenende!</span></p>' +
              '<p>Whether colleagues use <span class="de">du</span> or <span class="de">Sie</span> depends on the company. In many start-ups and shops everybody says <em>du</em>; in banks, offices and with older colleagues <em>Sie</em> is safer until someone offers <em>du</em>.</p>',
            vocab: vocabTable([
              ['Na, alles gut?', 'Hi, all good?'],
              ['Wie war dein Wochenende?', 'How was your weekend?'],
              ['Wie geht’s?', 'How are you?'],
              ['Was hast du vor?', 'What are you planning?'],
              ['Mahlzeit!', 'Lunchtime greeting'],
              ['die Kaffeeküche', 'the office kitchen'],
              ['Schönes Wochenende!', 'Have a nice weekend!'],
              ['Gleichfalls!', 'Same to you!'],
              ['Bis morgen!', 'See you tomorrow!'],
              ['Feierabend!', 'Work’s over!'],
              ['der Urlaub', 'the holiday']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('du or Sie at work', ['du', 'Sie'], [
                ['Wie war <strong>dein</strong> Wochenende?', 'Wie war <strong>Ihr</strong> Wochenende?'],
                ['Hast <strong>du</strong> schon gegessen?', 'Haben <strong>Sie</strong> schon gegessen?'],
                ['Schönes Wochenende <strong>dir</strong>!', 'Schönes Wochenende <strong>Ihnen</strong>!']
              ]) +
              '<p class="note">If in doubt, start with Sie. <em>Wollen wir uns duzen?</em> = Shall we say du?</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — Monday morning in the office kitchen', [
              ['Jan', 'Morgen, Sıla! Na, wie war dein Wochenende?'],
              ['Sıla', 'Schön, danke! Ich war mit Freunden an der Ostsee. Und deins?'],
              ['Jan', 'Ruhig. Ich war zu Hause und habe Fußball geschaut.'],
              ['Sıla', 'Hat deine Mannschaft gewonnen?'],
              ['Jan', 'Leider nicht! … So, ich muss los. Um neun habe ich eine Besprechung.'],
              ['Sıla', 'Viel Erfolg! Bis später.']
            ]),
            exercises: exerciseList([
              exSelect('Am Freitagnachmittag sagt man:', 'Schönes Wochenende!', ['Guten Appetit!', 'Schönes Wochenende!', 'Gute Besserung!']),
              exSelect('Antwort auf „Schönes Wochenende!":', 'Gleichfalls!', ['Gleichfalls!', 'Mahlzeit!', 'Entschuldigung!']),
              exSelect('Wie war ___ Wochenende? (Sie)', 'Ihr', ['dein', 'Ihr', 'Sie']),
              exSelect('Ein sicheres Small-Talk-Thema ist:', 'das Wetter', ['das Gehalt', 'das Wetter', 'die Religion']),
              exSelect('„Mahlzeit!" sagt man:', 'zur Mittagszeit', ['am Morgen', 'zur Mittagszeit', 'am Abend']),
              exInput('Wollen wir uns ___________? (say du)', 'duzen'),
              exSelect('Ende des Arbeitstages =', 'Feierabend', ['Feierabend', 'Feiertag', 'Urlaub'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: job titles, als with no article, von … bis and seit, the CV, phoning at work and small talk.</p>',
        exercises: exerciseList([
          exInput('der Arzt → die ___________', 'Ärztin'),
          exSelect('Richtig ist:', 'Ich bin Lehrer.', ['Ich bin ein Lehrer.', 'Ich bin Lehrer.', 'Ich bin der Lehrer.']),
          exSelect('Er arbeitet ___ Kellner.', 'als', ['als', 'wie', 'bei']),
          exSelect('Ich arbeite ___ 9 ___ 17 Uhr.', 'von … bis', ['von … bis', 'seit … bis', 'ab … zu']),
          exSelect('Ich arbeite ___ drei Jahren hier.', 'seit', ['seit', 'von', 'vor']),
          exSelect('„Berufserfahrung" bedeutet:', 'work experience', ['education', 'work experience', 'skills']),
          exSelect('Die erste Sprache eines Menschen ist die:', 'Muttersprache', ['Fremdsprache', 'Muttersprache', 'Sprachkenntnis']),
          exSelect('Am Telefon sagt man zum Schluss:', 'Auf Wiederhören!', ['Auf Wiedersehen!', 'Auf Wiederhören!', 'Gute Nacht!']),
          exInput('Kann er mich bitte ___________? (call back)', 'zurückrufen'),
          exSelect('Antwort auf „Schönes Wochenende!":', 'Gleichfalls!', ['Gleichfalls!', 'Mahlzeit!', 'Entschuldigung!']),
          exSelect('20 Stunden pro Woche ist:', 'Teilzeit', ['Vollzeit', 'Teilzeit', 'Schicht']),
          exInput('Was machen Sie ___________? (for a living)', 'beruflich')
        ]),

        reading: {
          intro: 'A job advert. Read for the job, the hours, the requirements and how to apply.',
          words: 110, minutes: 6,
          text: readingText('Stellenanzeige — Café Lindenblatt sucht Verstärkung!', [
            'Wir suchen ab 1. Juni eine <strong>Servicekraft (m/w/d)</strong> in Teilzeit, 20 Stunden pro Woche.',
            '<strong>Arbeitszeiten:</strong> Mittwoch bis Sonntag, von 10 bis 14 Uhr. Am Wochenende auch bis 16 Uhr möglich.',
            '<strong>Ihre Aufgaben:</strong> Gäste begrüßen, Bestellungen aufnehmen, Kaffee und Kuchen servieren, kassieren.',
            '<strong>Sie haben:</strong> Erfahrung im Service (wünschenswert), gute Deutschkenntnisse (mindestens A2), Freude am Kontakt mit Menschen.',
            '<strong>Wir bieten:</strong> 14 Euro pro Stunde, ein nettes Team, kostenloses Essen.',
            'Schicken Sie Ihre Bewerbung mit Lebenslauf bis zum 15. Mai an: jobs@cafe-lindenblatt.de. Fragen? Rufen Sie Frau Hoffmann an: 0221 445566.'
          ], 'Stellenanzeige, fiktiv'),
          glossary: vocabTable([
            ['die Servicekraft', 'the waiter / waitress'],
            ['(m/w/d)', 'male / female / diverse'],
            ['die Aufgabe', 'the task'],
            ['wünschenswert', 'desirable'],
            ['bieten', 'to offer']
          ]),
          questions: exerciseList([
            exSelect('Welche Stelle ist das?', 'Servicekraft', ['Koch', 'Servicekraft', 'Verkäufer']),
            exSelect('Vollzeit oder Teilzeit?', 'Teilzeit', ['Vollzeit', 'Teilzeit']),
            exInput('Wie viele Stunden pro Woche? (Zahl)', '20|zwanzig'),
            exTF('Man arbeitet auch am Montag.', false),
            exSelect('Welches Deutschniveau braucht man mindestens?', 'A2', ['A1', 'A2', 'B2']),
            exInput('Wie viel verdient man pro Stunde? (… Euro)', '14|14 Euro'),
            exSelect('Bis wann muss man die Bewerbung schicken?', 'bis zum 15. Mai', ['bis zum 1. Juni', 'bis zum 15. Mai', 'bis Sonntag'])
          ])
        },

        listening: {
          title: 'Neue Kollegen',
          intro: 'Two new colleagues meet in the canteen. Listen for their jobs, how long they have worked there and their hours.',
          lines: [
            ['Paul', 'Hallo! Bist du neu hier? Ich bin Paul.'],
            ['Elif', 'Hallo, ich bin Elif. Ja, ich arbeite seit zwei Wochen hier, in der IT-Abteilung.'],
            ['Paul', 'Ach, cool. Ich bin im Marketing, seit vier Jahren.'],
            ['Elif', 'Wie sind deine Arbeitszeiten?'],
            ['Paul', 'Ich arbeite Teilzeit, von Montag bis Donnerstag. Freitags habe ich frei. Und du?'],
            ['Elif', 'Vollzeit, von acht bis halb fünf. Aber mittwochs arbeite ich im Homeoffice.'],
            ['Paul', 'Super. Dann sehen wir uns in der Kantine. Mahlzeit!'],
            ['Elif', 'Mahlzeit!']
          ],
          questions: exerciseList([
            exSelect('In welcher Abteilung arbeitet Elif?', 'IT', ['Marketing', 'IT', 'Verkauf']),
            exSelect('Seit wann arbeitet Elif dort?', 'seit zwei Wochen', ['seit zwei Wochen', 'seit zwei Jahren', 'seit vier Jahren']),
            exInput('Wie lange arbeitet Paul schon dort? (seit … Jahren)', 'vier|4|seit vier Jahren|vier Jahren'),
            exTF('Paul arbeitet am Freitag.', false),
            exSelect('Arbeitet Elif Vollzeit oder Teilzeit?', 'Vollzeit', ['Vollzeit', 'Teilzeit']),
            exSelect('Wann arbeitet Elif im Homeoffice?', 'mittwochs', ['montags', 'mittwochs', 'freitags'])
          ])
        },

        writing: {
          title: 'Kurze Bewerbung',
          textType: 'Formelle E-Mail',
          minWords: 40, maxWords: 70, minutes: 20,
          expect: ['formal-opening', 'self-intro', 'formal-closing'],
          task: '<p>Sie lesen die Anzeige vom Café Lindenblatt. Schreiben Sie eine kurze Bewerbung per E-Mail an Frau Hoffmann.</p>' +
            '<p class="note">You read the advert from Café Lindenblatt. Write a short application e-mail to Ms Hoffmann.</p>',
          plainTask: 'Write a short formal application e-mail in German (40–70 words) to Ms Hoffmann at Café Lindenblatt. Introduce yourself (name, age, origin), say what you do now and since when, mention your languages, say when you can work, and close formally.',
          bullets: [
            'Stellen Sie sich <strong>vor</strong> (Name, Alter, Herkunft).',
            'Was machen Sie <strong>jetzt</strong>? Seit wann?',
            'Welche <strong>Sprachen</strong> sprechen Sie?',
            '<strong>Wann</strong> können Sie arbeiten?'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Frau Hoffmann,'],
            ['Anlass', 'ich interessiere mich für die Stelle als Servicekraft.'],
            ['Vorstellung', 'Ich heiße … und bin … Jahre alt. Ich komme aus …'],
            ['Jetzt', 'Ich arbeite seit einem Jahr als … · Ich bin Studentin.'],
            ['Sprachen', 'Ich spreche Türkisch, Englisch und ein bisschen Deutsch (A2).'],
            ['Zeit', 'Ich kann von Mittwoch bis Sonntag arbeiten.'],
            ['Schluss', 'Meinen Lebenslauf schicke ich im Anhang. Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit „Sehr geehrte Frau Hoffmann,".',
            'Ich nenne die Stelle.',
            'Ich stelle mich vor.',
            'Ich sage, was ich jetzt mache, mit seit.',
            'Ich nenne meine Sprachen und wann ich arbeiten kann.',
            'Ich schließe mit „Mit freundlichen Grüßen".',
            'Ich liege zwischen 40 und 70 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Ausbildung.</strong> Many jobs in Germany require a formal vocational training (<em>Ausbildung</em>), usually three years, split between a company and a vocational school. Job titles like <em>Bürokaufmann</em> or <em>Elektriker</em> are protected qualifications.</p>' +
          '<p><strong>Applications are formal.</strong> A full application (<em>Bewerbung</em>) traditionally includes a cover letter, a CV in table form — often with a photo, though this is now optional — and copies of certificates (<em>Zeugnisse</em>).</p>' +
          '<p><strong>Work–life balance.</strong> A full-time week is usually 38–40 hours. By law, employees get at least 20 working days of holiday (24 in a six-day week); 25–30 days are common. Answering work e-mails in the evening is not expected in many companies.</p>' +
          '<p><strong>m/w/d.</strong> Job adverts must address all genders, which is why titles are followed by <em>(m/w/d)</em> — männlich, weiblich, divers.</p>',

        recap: [
          { group: '🧑‍🏫 Berufe', rows: [
            ['der Lehrer / die Lehrerin', 'the teacher'], ['der Arzt / die Ärztin', 'the doctor'], ['der Koch / die Köchin', 'the cook'],
            ['der Verkäufer / die Verkäuferin', 'the shop assistant'], ['Ich bin Ingenieurin.', 'I am an engineer.'], ['als', 'as']
          ] },
          { group: '🕘 Arbeit', rows: [
            ['Was machen Sie beruflich?', 'What do you do?'], ['von … bis', 'from … to'], ['seit zwei Jahren', 'for two years'],
            ['Vollzeit / Teilzeit', 'full / part time'], ['der Kollege', 'the colleague'], ['die Besprechung', 'the meeting']
          ] },
          { group: '📄 Lebenslauf', rows: [
            ['der Lebenslauf', 'the CV'], ['die Berufserfahrung', 'work experience'], ['die Ausbildung', 'the training'],
            ['das Studium', 'the studies'], ['das Praktikum', 'the internship'], ['die Bewerbung', 'the application']
          ] },
          { group: '📞 Telefon', rows: [
            ['Kann ich mit … sprechen?', 'Can I speak to …?'], ['Ich verbinde.', 'I’ll put you through.'], ['besetzt', 'busy'],
            ['zurückrufen', 'to call back'], ['Auf Wiederhören!', 'Goodbye (phone)']
          ] },
          { group: '🤝 Small Talk', rows: [
            ['Wie war dein Wochenende?', 'How was your weekend?'], ['Mahlzeit!', 'Lunchtime greeting'],
            ['Schönes Wochenende!', 'Have a nice weekend!'], ['Gleichfalls!', 'Same to you!']
          ] }
        ],

        sentences: [
          { de: 'Ich bin Programmiererin von Beruf', en: 'I am a programmer by profession' },
          { de: 'Er arbeitet als Koch in einem Restaurant', en: 'He works as a cook in a restaurant' },
          { de: 'Ich arbeite von neun bis fünf Uhr', en: 'I work from nine to five' },
          { de: 'Ich arbeite seit drei Jahren hier', en: 'I have been working here for three years' },
          { de: 'Kann ich bitte mit Frau Berger sprechen', en: 'Can I speak to Ms Berger, please' },
          { de: 'Wie war dein Wochenende', en: 'How was your weekend' }
        ]
      },

      { // ===== UNIT 16 — written out in full =====
        title: '📨 Unit 16 — Appointments and Short Messages',
        subject: 'Termine und kurze Nachrichten',
        canDo: ['Arrange, change and cancel an appointment', 'Write a short message or fill in a form'],
        grammarFocus: ['möchten for polite requests', 'Formal vs. informal register', 'Dates and times in writing'],
        topics: [
          {
            icon: '🗓️', title: 'Making an appointment', note: 'Ich möchte einen Termin vereinbaren.',
            explanation:
              '<p>For official appointments — doctor, hairdresser, office, bank — use polite <span class="de">möchte</span>: <span class="de">Ich möchte einen Termin vereinbaren / machen.</span> The other person will ask <span class="de">Wann passt es Ihnen?</span> or offer <span class="de">Geht es am Dienstag um 10 Uhr?</span></p>' +
              '<p>Answers: <span class="de">Ja, das passt (mir) gut.</span> / <span class="de">Da kann ich leider nicht. Geht es auch später / früher?</span> <span class="de">passen</span> takes the dative person: <span class="de">Passt <strong>Ihnen</strong> Montag?</span></p>' +
              '<p>Dates are spoken as ordinals: <span class="de">am Montag, dem 3. März</span> = <em>am Montag, dem dritten März</em>. Repeat the appointment to check: <span class="de">Also am Dienstag, dem 5. Mai, um 10 Uhr. Vielen Dank!</span></p>',
            vocab: vocabTable([
              ['der Termin', 'the appointment'],
              ['einen Termin vereinbaren', 'to arrange an appointment'],
              ['Wann passt es Ihnen?', 'When suits you?'],
              ['Geht es am …?', 'Is … possible?'],
              ['Das passt gut.', 'That suits me well.'],
              ['frei / besetzt', 'free / taken'],
              ['früher / später', 'earlier / later'],
              ['vormittags / nachmittags', 'in the morning / afternoon'],
              ['der Friseur', 'the hairdresser'],
              ['das Amt / die Behörde', 'the public office'],
              ['der Kalender', 'the calendar'],
              ['notieren', 'to note down']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('möchten — polite request', ['Person', 'Form', 'Example'], [
                ['ich', '<strong>möchte</strong>', 'Ich möchte einen Termin machen.'],
                ['du', 'möchtest', 'Möchtest du morgen kommen?'],
                ['er / sie', '<strong>möchte</strong>', 'Sie möchte den Termin verschieben.'],
                ['wir / Sie', 'möchten', 'Möchten Sie am Montag kommen?']
              ]) +
              '<p class="note">Spoken dates: <em>am 3. Mai</em> = <em>am dritten Mai</em>; <em>der 3. Mai</em> = <em>der dritte Mai</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the hairdresser’s (on the phone)', [
              ['Friseurin', 'Salon Haarmonie, guten Tag.'],
              ['Sıla', 'Guten Tag, ich möchte einen Termin vereinbaren. Zum Schneiden.'],
              ['Friseurin', 'Wann passt es Ihnen?'],
              ['Sıla', 'Geht es am Donnerstag nachmittags?'],
              ['Friseurin', 'Donnerstag um 15 Uhr ist frei.'],
              ['Sıla', 'Das passt gut. Mein Name ist Yılmaz.'],
              ['Friseurin', 'Also Donnerstag, der 12. Juni, um 15 Uhr. Bis dann!']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ einen Termin vereinbaren.', 'möchte', ['möchte', 'möchtest', 'mag']),
              exSelect('Wann passt es ___? (Sie)', 'Ihnen', ['Sie', 'Ihnen', 'Ihr']),
              exSelect('„Das passt gut" bedeutet:', 'That suits me well', ['That fits well (clothes)', 'That suits me well', 'That is good food']),
              exSelect('am 3. März spricht man:', 'am dritten März', ['am drei März', 'am dritten März', 'am dritte März']),
              exSelect('Der Termin um 9 Uhr ist ___. Er ist nicht frei.', 'besetzt', ['besetzt', 'früher', 'notiert']),
              exInput('Geht es auch ___________? (later)', 'später'),
              exInput('Ich möchte einen ___________ machen. (appointment)', 'Termin')
            ])
          },
          {
            icon: '🔄', title: 'Changing or cancelling', note: 'Kann ich den Termin verschieben? Ich muss absagen.',
            explanation:
              '<p>To move an appointment: <span class="de">Ich möchte meinen Termin verschieben.</span> (move) To cancel: <span class="de">Ich muss meinen Termin leider absagen.</span> Always give a short reason and apologise: <span class="de">Es tut mir leid, ich bin krank.</span></p>' +
              '<p>Note the verbs: <span class="de">absagen</span> (cancel) and <span class="de">zusagen</span> (confirm, accept) are separable: <span class="de">Ich sage den Termin ab.</span> <span class="de">verschieben</span> is not: <span class="de">Ich verschiebe den Termin auf Freitag.</span> (<em>auf</em> + new date).</p>' +
              '<p>In Germany it is polite to cancel at least <strong>24 hours</strong> before; some doctors and hairdressers charge a fee for missed appointments.</p>',
            vocab: vocabTable([
              ['verschieben', 'to postpone, move'],
              ['auf Freitag verschieben', 'to move to Friday'],
              ['absagen', 'to cancel'],
              ['zusagen', 'to confirm, accept'],
              ['bestätigen', 'to confirm'],
              ['der neue Termin', 'the new appointment'],
              ['Es tut mir leid.', 'I’m sorry.'],
              ['leider', 'unfortunately'],
              ['dazwischenkommen', 'to come up (unexpectedly)'],
              ['Mir ist etwas dazwischengekommen.', 'Something has come up.'],
              ['rechtzeitig', 'in good time']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Infinitive', 'Present', 'With müssen / möchten'], [
                ['absagen', 'Ich <strong>sage</strong> den Termin <strong>ab</strong>.', 'Ich muss den Termin <strong>absagen</strong>.'],
                ['verschieben', 'Ich <strong>verschiebe</strong> den Termin.', 'Ich möchte den Termin <strong>verschieben</strong>.'],
                ['bestätigen', 'Ich <strong>bestätige</strong> den Termin.', 'Können Sie den Termin <strong>bestätigen</strong>?']
              ]) +
              '<p class="note"><em>ver-</em> and <em>be-</em> never separate; <em>ab-</em> and <em>zu-</em> do.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — something has come up', [
              ['Sıla', 'Guten Tag, hier ist Yılmaz. Ich habe am Donnerstag um 15 Uhr einen Termin.'],
              ['Friseurin', 'Ja, richtig.'],
              ['Sıla', 'Es tut mir leid, aber ich muss den Termin verschieben. Ich muss länger arbeiten.'],
              ['Friseurin', 'Kein Problem. Geht es am Samstag um 11 Uhr?'],
              ['Sıla', 'Ja, Samstag passt mir gut. Danke!'],
              ['Friseurin', 'Gern. Dann bis Samstag.']
            ]),
            exercises: exerciseList([
              exSelect('„absagen" bedeutet:', 'to cancel', ['to cancel', 'to confirm', 'to postpone']),
              exSelect('Ich ___ den Termin ___.', 'sage … ab', ['sage … ab', 'absage …', 'sage … zu ab']),
              exSelect('Ich muss den Termin leider ___.', 'absagen', ['absagen', 'sage ab', 'ab sagen']),
              exSelect('Ich verschiebe den Termin ___ Montag.', 'auf', ['auf', 'zu', 'nach']),
              exSelect('Welches Verb ist NICHT trennbar?', 'verschieben', ['absagen', 'zusagen', 'verschieben']),
              exInput('Es tut mir ___________. (sorry)', 'leid'),
              exSelect('„Mir ist etwas dazwischengekommen" bedeutet:', 'Something has come up', ['Something has come up', 'I am in between', 'I am coming'])
            ])
          },
          {
            icon: '✉️', title: 'Writing a short e-mail', note: 'Formal vs. informal opening and closing',
            explanation:
              '<p>German e-mails have fixed openings and closings, and you must choose the right <strong>register</strong>. Formal: <span class="de">Sehr geehrte Frau Berger, / Sehr geehrter Herr Klein, / Sehr geehrte Damen und Herren,</span> … <span class="de">Mit freundlichen Grüßen</span>. Semi-formal: <span class="de">Liebe Frau Berger,</span> … <span class="de">Viele Grüße</span>. Informal: <span class="de">Liebe Anna, / Lieber Tom, / Hallo Tom,</span> … <span class="de">Liebe Grüße / LG / Bis bald</span>.</p>' +
              '<p>After the opening comma the first word is written in <strong>lower case</strong> (unless it is a noun or Sie): <span class="de">Sehr geehrte Frau Berger,<br>ich möchte …</span></p>' +
              '<p>Formal letters use <span class="de">Sie, Ihnen, Ihr</span> — always capitalised. A good formal e-mail has: reason for writing, request, thanks, closing.</p>',
            vocab: vocabTable([
              ['Sehr geehrte Frau …,', 'Dear Ms … (formal)'],
              ['Sehr geehrter Herr …,', 'Dear Mr … (formal)'],
              ['Sehr geehrte Damen und Herren,', 'Dear Sir or Madam,'],
              ['Liebe … / Lieber …,', 'Dear … (friendly)'],
              ['Mit freundlichen Grüßen', 'Yours sincerely'],
              ['Viele Grüße', 'Best wishes'],
              ['Liebe Grüße (LG)', 'Love, best wishes (informal)'],
              ['der Betreff', 'the subject line'],
              ['der Anhang', 'the attachment'],
              ['Ich schreibe Ihnen, weil …', 'I am writing to you because …'],
              ['Vielen Dank im Voraus.', 'Thank you in advance.'],
              ['Ich freue mich auf Ihre Antwort.', 'I look forward to your reply.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Register', ['', 'Formal', 'Informal'], [
                ['Opening', 'Sehr geehrte Frau Berger,', 'Liebe Anna, / Hallo Anna,'],
                ['Pronoun', '<strong>Sie / Ihnen / Ihr</strong>', 'du / dir / dein'],
                ['Request', 'Könnten Sie mir bitte … schicken?', 'Kannst du mir … schicken?'],
                ['Closing', 'Mit freundlichen Grüßen', 'Liebe Grüße / Bis bald!']
              ]) +
              '<p class="note">Sehr geehrt<strong>e</strong> Frau, sehr geehrt<strong>er</strong> Herr; Lieb<strong>e</strong> Anna, Lieb<strong>er</strong> Tom.</p>' +
              '</div>',
            dialogs: dialogBox('Example — a formal e-mail', [
              ['Betreff', 'Termin am 12. Juni'],
              ['Anrede', 'Sehr geehrte Frau Berger,'],
              ['Text', 'leider kann ich am 12. Juni nicht zu unserem Termin kommen. Könnten wir den Termin auf den 14. Juni verschieben?'],
              ['Dank', 'Vielen Dank im Voraus.'],
              ['Gruß', 'Mit freundlichen Grüßen<br>Sıla Yılmaz']
            ]),
            exercises: exerciseList([
              exSelect('An eine unbekannte Firma: ___', 'Sehr geehrte Damen und Herren,', ['Liebe Firma,', 'Sehr geehrte Damen und Herren,', 'Hallo Leute,']),
              exSelect('Sehr ___ Herr Klein,', 'geehrter', ['geehrte', 'geehrter', 'geehrtes']),
              exSelect('___ Tom, (informal)', 'Lieber', ['Liebe', 'Lieber', 'Liebes']),
              exSelect('Formeller Schluss:', 'Mit freundlichen Grüßen', ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Tschüss']),
              exSelect('In einer formellen E-Mail schreibt man:', 'Ihnen', ['dir', 'Ihnen', 'ihnen']),
              exInput('Das Thema der E-Mail steht im ___________.', 'Betreff'),
              exSelect('Nach „Sehr geehrte Frau Berger," schreibt man:', 'ich möchte …', ['Ich möchte …', 'ich möchte …', 'ICH möchte …'])
            ])
          },
          {
            icon: '💬', title: 'Texting a friend', note: 'Common abbreviations and tone',
            explanation:
              '<p>Text messages between friends are short and relaxed. Typical abbreviations: <span class="de">LG</span> (liebe Grüße), <span class="de">VG</span> (viele Grüße), <span class="de">HDL</span> (hab dich lieb), <span class="de">vllt</span> (vielleicht), <span class="de">gg</span> / <span class="de">gleich</span>, <span class="de">kp</span> (kein Problem), <span class="de">mom</span> (Moment), <span class="de">bzw.</span> (beziehungsweise = or rather), <span class="de">ca.</span> (circa).</p>' +
              '<p>Spoken forms appear in writing too: <span class="de">hab</span> (habe), <span class="de">gibt’s</span> (gibt es), <span class="de">wie geht’s</span>, <span class="de">’n</span> (ein). The subject is often dropped: <span class="de">Komme 10 Min später.</span> <span class="de">Bin gleich da!</span></p>' +
              '<p>Use these only with friends. In a message to a teacher, landlord or colleague you don’t know well, write full sentences.</p>',
            vocab: vocabTable([
              ['LG / VG', 'love / best wishes'],
              ['vllt', 'maybe'],
              ['kp', 'no problem'],
              ['HDL', 'love you (friends, family)'],
              ['bzw.', 'or rather'],
              ['ca.', 'about'],
              ['Bin gleich da.', 'I’ll be there in a sec.'],
              ['Komme später.', 'I’ll be late.'],
              ['Sorry!', 'Sorry!'],
              ['Alles klar!', 'All right!'],
              ['Kein Stress.', 'No stress.'],
              ['Meld dich!', 'Get in touch!']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Text style vs. full sentence', ['Text message', 'Full sentence'], [
                ['Komme 10 Min später, sorry!', 'Ich komme zehn Minuten später. Entschuldigung!'],
                ['Hab keine Zeit, vllt morgen?', 'Ich habe keine Zeit. Vielleicht morgen?'],
                ['Bin gleich da!', 'Ich bin gleich da.'],
                ['Gibt’s was Neues?', 'Gibt es etwas Neues?']
              ]) +
              '</div>',
            dialogs: dialogBox('Chat — running late', [
              ['Tom', 'Hey, wo bist du? Film fängt um 8 an!'],
              ['Lena', 'Sorry!! Bus hat Verspätung. Komme ca. 10 Min später.'],
              ['Tom', 'Kp. Ich kauf schon mal die Tickets.'],
              ['Lena', 'Super, danke! Bin gleich da. LG'],
              ['Tom', 'Alles klar 👍']
            ]),
            exercises: exerciseList([
              exSelect('„LG" bedeutet:', 'Liebe Grüße', ['Liebe Grüße', 'Leider gehen', 'Lange Geschichte']),
              exSelect('„vllt" bedeutet:', 'vielleicht', ['viel Licht', 'vielleicht', 'vollständig']),
              exSelect('„kp" bedeutet:', 'kein Problem', ['kein Problem', 'kaputt', 'komm pünktlich']),
              exSelect('„ca." bedeutet:', 'ungefähr', ['ungefähr', 'genau', 'Café']),
              exSelect('Für eine Nachricht an die Vermieterin ist besser:', 'Ich komme zehn Minuten später.', ['Komme 10 Min später, sorry!!', 'Ich komme zehn Minuten später.', 'Bin gleich da LG']),
              exInput('„hab" ist kurz für ___________', 'habe'),
              exInput('„Gibt’s" = Gibt ___________', 'es')
            ])
          },
          {
            icon: '📝', title: 'Filling in forms', note: 'Vorname, Nachname, Geburtsdatum, Straße, PLZ',
            explanation:
              '<p>Forms (<span class="de">Formulare</span>) are part of everyday life in German-speaking countries — for the registration office, a course, a library card or a gym. The fields are always similar: <span class="de">Vorname</span> (first name), <span class="de">Nachname / Familienname</span> (surname), <span class="de">Geburtsdatum</span>, <span class="de">Geburtsort</span>, <span class="de">Staatsangehörigkeit</span>, <span class="de">Straße, Hausnummer</span>, <span class="de">PLZ</span> (Postleitzahl, postcode), <span class="de">Ort / Wohnort</span>, <span class="de">Telefon</span>, <span class="de">E-Mail</span>, <span class="de">Datum, Unterschrift</span> (signature).</p>' +
              '<p>Dates are written <strong>day.month.year</strong>: <span class="de">03.04.1999</span>. In addresses, the house number comes <strong>after</strong> the street, and the postcode <strong>before</strong> the town: <span class="de">Lindenstraße 12, 20095 Hamburg</span>.</p>' +
              '<p>Other common fields: <span class="de">Familienstand</span> (marital status), <span class="de">Geschlecht</span> (gender: männlich / weiblich / divers), <span class="de">Beruf</span>, <span class="de">Bitte in Druckbuchstaben</span> (block capitals), <span class="de">Zutreffendes ankreuzen</span> (tick what applies).</p>',
            vocab: vocabTable([
              ['das Formular', 'the form'],
              ['ausfüllen', 'to fill in'],
              ['der Vorname', 'the first name'],
              ['der Nachname / Familienname', 'the surname'],
              ['das Geburtsdatum', 'the date of birth'],
              ['der Geburtsort', 'the place of birth'],
              ['die Straße / Hausnummer', 'the street / house number'],
              ['die PLZ (Postleitzahl)', 'the postcode'],
              ['der Wohnort', 'the place of residence'],
              ['der Familienstand', 'the marital status'],
              ['das Geschlecht', 'the gender'],
              ['die Unterschrift', 'the signature'],
              ['unterschreiben', 'to sign'],
              ['ankreuzen', 'to tick']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Anmeldung — Beispiel', ['Feld', 'Eintrag'], [
                ['Nachname', 'Yılmaz'],
                ['Vorname', 'Sıla'],
                ['Geburtsdatum', '14.08.1999'],
                ['Geburtsort', 'Izmir'],
                ['Staatsangehörigkeit', 'türkisch'],
                ['Straße, Hausnummer', 'Lindenstraße 12'],
                ['PLZ, Ort', '20095 Hamburg'],
                ['Familienstand', '☒ ledig ☐ verheiratet']
              ]) +
              '<p class="note">Date: day.month.year — 14.08.1999 is spoken <em>vierzehnter achter neunzehnhundertneunundneunzig</em>.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the library', [
              ['Mitarbeiter', 'Für den Bibliotheksausweis füllen Sie bitte dieses Formular aus.'],
              ['Sıla', 'Was schreibe ich hier bei „PLZ"?'],
              ['Mitarbeiter', 'Das ist die Postleitzahl, zum Beispiel 20095.'],
              ['Sıla', 'Und „Wohnort" ist die Stadt?'],
              ['Mitarbeiter', 'Genau. Und hier unten bitte unterschreiben.'],
              ['Sıla', 'Fertig. Bitte schön.']
            ]),
            exercises: exerciseList([
              exSelect('„Sıla" ist der:', 'Vorname', ['Vorname', 'Nachname', 'Wohnort']),
              exSelect('„Yılmaz" ist der:', 'Nachname', ['Vorname', 'Nachname', 'Geburtsort']),
              exSelect('„PLZ" bedeutet:', 'Postleitzahl', ['Postleitzahl', 'Platz', 'Personalzahl']),
              exSelect('Richtig ist die Adresse:', 'Bahnhofstraße 5, 10115 Berlin', ['5 Bahnhofstraße, Berlin 10115', 'Bahnhofstraße 5, 10115 Berlin', '10115 Bahnhofstraße, 5 Berlin']),
              exSelect('Das Datum 05.11.2001 ist:', 'der 5. November 2001', ['der 11. Mai 2001', 'der 5. November 2001', 'der 1. Mai 2005']),
              exInput('Am Ende des Formulars: Datum und ___________', 'Unterschrift'),
              exSelect('„ledig" oder „verheiratet" steht beim:', 'Familienstand', ['Geschlecht', 'Familienstand', 'Beruf'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: polite möchte, making, moving and cancelling appointments, formal and informal e-mails, text messages and forms.</p>',
        exercises: exerciseList([
          exSelect('Ich ___ einen Termin vereinbaren.', 'möchte', ['möchte', 'möchtest', 'mag']),
          exSelect('Wann passt es ___? (Sie)', 'Ihnen', ['Sie', 'Ihnen', 'Ihr']),
          exSelect('am 3. März spricht man:', 'am dritten März', ['am drei März', 'am dritten März', 'am dritte März']),
          exSelect('Ich ___ den Termin ___.', 'sage … ab', ['sage … ab', 'absage …', 'sage … zu ab']),
          exSelect('Ich verschiebe den Termin ___ Montag.', 'auf', ['auf', 'zu', 'nach']),
          exSelect('Sehr ___ Herr Klein,', 'geehrter', ['geehrte', 'geehrter', 'geehrtes']),
          exSelect('Formeller Schluss:', 'Mit freundlichen Grüßen', ['Liebe Grüße', 'Mit freundlichen Grüßen', 'Tschüss']),
          exSelect('„vllt" bedeutet:', 'vielleicht', ['viel Licht', 'vielleicht', 'vollständig']),
          exSelect('„PLZ" bedeutet:', 'Postleitzahl', ['Postleitzahl', 'Platz', 'Personalzahl']),
          exSelect('Das Datum 05.11.2001 ist:', 'der 5. November 2001', ['der 11. Mai 2001', 'der 5. November 2001', 'der 1. Mai 2005']),
          exInput('Es tut mir ___________. (sorry)', 'leid'),
          exInput('Am Ende des Formulars: Datum und ___________', 'Unterschrift')
        ]),

        reading: {
          intro: 'Two messages: an appointment confirmation from a practice and a text from a friend. Read for dates, times and what each person wants.',
          words: 100, minutes: 5,
          text: readingText('Zwei Nachrichten', [
            '<strong>E-Mail — Betreff: Terminbestätigung</strong><br>Sehr geehrte Frau Yılmaz,<br>hiermit bestätigen wir Ihren Termin bei Dr. Schneider am Mittwoch, dem 18. Juni, um 9.30 Uhr. Bitte bringen Sie Ihre Versichertenkarte mit und kommen Sie 10 Minuten früher. Wenn Sie nicht kommen können, sagen Sie den Termin bitte mindestens 24 Stunden vorher ab.<br>Mit freundlichen Grüßen<br>Ihr Praxisteam Dr. Schneider',
            '<strong>Nachricht von Lena:</strong> Hey Sıla! Hast du Mi. Zeit? Wollen wir vllt zusammen frühstücken? So um 10 im Café Rosa? LG Lena'
          ], 'Nachrichten, fiktiv'),
          glossary: vocabTable([
            ['hiermit', 'hereby'],
            ['bestätigen', 'to confirm'],
            ['mindestens', 'at least'],
            ['vorher', 'beforehand']
          ]),
          questions: exerciseList([
            exSelect('Wann ist der Termin beim Arzt?', 'Mittwoch, 18. Juni, 9.30 Uhr', ['Mittwoch, 18. Juni, 9.30 Uhr', 'Mittwoch, 18. Juni, 10 Uhr', 'Montag, 18. Juni, 9.30 Uhr']),
            exSelect('Was soll Frau Yılmaz mitbringen?', 'die Versichertenkarte', ['ein Rezept', 'die Versichertenkarte', 'einen Ausweis']),
            exInput('Wann soll sie da sein? (Uhrzeit)', '9.20|9:20|9.20 Uhr|9:20 Uhr|um 9.20 Uhr'),
            exSelect('Wie früh muss man absagen?', 'mindestens 24 Stunden vorher', ['mindestens 24 Stunden vorher', 'eine Woche vorher', 'am gleichen Tag']),
            exSelect('Was möchte Lena?', 'zusammen frühstücken', ['zum Arzt gehen', 'zusammen frühstücken', 'ins Kino gehen']),
            exTF('Lena und der Arzttermin sind am gleichen Tag.', true),
            exSelect('Kann Sıla um 10 Uhr ins Café gehen?', 'Nein, sie ist beim Arzt.', ['Ja, kein Problem.', 'Nein, sie ist beim Arzt.', 'Nein, sie arbeitet.'])
          ])
        },

        listening: {
          title: 'Einen Termin verschieben',
          intro: 'A caller needs to move an appointment at the citizens’ office. Listen for the old and new appointment.',
          lines: [
            ['Bürgeramt', 'Bürgeramt Mitte, Wagner, guten Tag.'],
            ['Anrufer', 'Guten Tag, mein Name ist Can Demir. Ich habe am Montag um 8 Uhr einen Termin für die Anmeldung.'],
            ['Bürgeramt', 'Einen Moment … Ja, Montag, 8 Uhr.'],
            ['Anrufer', 'Leider muss ich den Termin verschieben. Ich bin am Montag auf einer Dienstreise.'],
            ['Bürgeramt', 'Geht es am Donnerstag? Um 13.15 Uhr ist noch etwas frei.'],
            ['Anrufer', 'Donnerstag um 13.15 Uhr passt gut.'],
            ['Bürgeramt', 'Gut. Bringen Sie bitte Ihren Pass und die Wohnungsgeberbestätigung mit.'],
            ['Anrufer', 'Alles klar. Vielen Dank! Auf Wiederhören.']
          ],
          questions: exerciseList([
            exInput('Wie heißt der Anrufer? (Vorname Nachname)', 'Can Demir'),
            exSelect('Wann ist der alte Termin?', 'Montag, 8 Uhr', ['Montag, 8 Uhr', 'Donnerstag, 8 Uhr', 'Montag, 13.15 Uhr']),
            exSelect('Warum kann er nicht?', 'Er ist auf einer Dienstreise.', ['Er ist krank.', 'Er ist auf einer Dienstreise.', 'Er hat Urlaub.']),
            exSelect('Wann ist der neue Termin?', 'Donnerstag, 13.15 Uhr', ['Dienstag, 13.15 Uhr', 'Donnerstag, 13.15 Uhr', 'Donnerstag, 15.30 Uhr']),
            exSelect('Was soll er mitbringen?', 'den Pass und die Wohnungsgeberbestätigung', ['nur den Pass', 'den Pass und die Wohnungsgeberbestätigung', 'ein Foto']),
            exInput('Wofür ist der Termin? (die …)', 'Anmeldung|die Anmeldung')
          ])
        },

        writing: {
          title: 'Termin absagen',
          textType: 'Formelle E-Mail',
          minWords: 30, maxWords: 60, minutes: 15,
          expect: ['formal-opening', 'formal-closing'],
          task: '<p>Sie haben am Freitag um 10 Uhr einen Termin bei Ihrer Deutschlehrerin, Frau Wolf, für ein Beratungsgespräch. Sie können nicht kommen. Schreiben Sie eine E-Mail.</p>' +
            '<p class="note">You have a consultation appointment with your German teacher, Ms Wolf, on Friday at 10. You can’t come. Write an e-mail.</p>',
          plainTask: 'Write a short formal e-mail in German (30–60 words) to Ms Wolf. Say which appointment you mean, apologise and give a reason, suggest a new date and time, ask her to confirm, and close formally.',
          bullets: [
            'Nennen Sie den <strong>Termin</strong> (Tag, Uhrzeit).',
            '<strong>Entschuldigen</strong> Sie sich und nennen Sie einen <strong>Grund</strong>.',
            'Schlagen Sie einen <strong>neuen Termin</strong> vor.',
            'Bitten Sie um eine <strong>Antwort</strong>.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Frau Wolf,'],
            ['Termin', 'ich habe am Freitag um 10 Uhr einen Termin bei Ihnen.'],
            ['Absage', 'Leider kann ich nicht kommen, weil … · Es tut mir leid.'],
            ['Vorschlag', 'Geht es vielleicht am Montag um 14 Uhr?'],
            ['Bitte', 'Können Sie mir bitte kurz antworten?'],
            ['Gruß', 'Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit „Sehr geehrte Frau Wolf,".',
            'Das erste Wort nach der Anrede ist klein geschrieben.',
            'Ich nenne den alten Termin.',
            'Ich entschuldige mich und gebe einen Grund.',
            'Ich schlage einen neuen Termin vor.',
            'Ich verwende Sie / Ihnen richtig und schließe mit „Mit freundlichen Grüßen".',
            'Ich liege zwischen 30 und 60 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Termin is everything.</strong> In German-speaking countries almost everything works by appointment: doctors, hairdressers, banks, public offices (<em>Bürgeramt</em>). Many offices now only accept online bookings.</p>' +
          '<p><strong>Punctual and planned.</strong> Appointments are kept, and people arrive on time. If you cannot come, cancel early — no-shows are considered rude and may cost a fee.</p>' +
          '<p><strong>E-mail etiquette.</strong> Formal e-mails follow the letter format: <em>Sehr geehrte …</em> and <em>Mit freundlichen Grüßen</em>. Many people switch to <em>Liebe Frau …</em> / <em>Viele Grüße</em> once they know each other — follow the other person’s lead.</p>' +
          '<p><strong>Forms and the Anmeldung.</strong> Bureaucracy runs on forms. After moving you must register your address (<em>Anmeldung</em>), and you get a registration certificate (<em>Meldebescheinigung</em>) which you need for a bank account, tax number and more.</p>',

        recap: [
          { group: '🗓️ Termine', rows: [
            ['der Termin', 'the appointment'], ['einen Termin vereinbaren', 'to make an appointment'], ['Wann passt es Ihnen?', 'When suits you?'],
            ['Das passt gut.', 'That suits me.'], ['früher / später', 'earlier / later']
          ] },
          { group: '🔄 Ändern', rows: [
            ['verschieben', 'to move'], ['absagen', 'to cancel'], ['bestätigen', 'to confirm'],
            ['Es tut mir leid.', 'I’m sorry.'], ['rechtzeitig', 'in good time']
          ] },
          { group: '✉️ E-Mail', rows: [
            ['Sehr geehrte Frau …,', 'Dear Ms …'], ['Sehr geehrter Herr …,', 'Dear Mr …'], ['Liebe / Lieber …,', 'Dear … (friendly)'],
            ['Mit freundlichen Grüßen', 'Yours sincerely'], ['Viele Grüße', 'Best wishes'], ['der Betreff', 'the subject']
          ] },
          { group: '💬 Chat', rows: [
            ['LG', 'liebe Grüße'], ['vllt', 'vielleicht'], ['kp', 'kein Problem'], ['ca.', 'about'], ['Bin gleich da.', 'I’ll be right there.']
          ] },
          { group: '📝 Formular', rows: [
            ['der Vorname', 'first name'], ['der Nachname', 'surname'], ['das Geburtsdatum', 'date of birth'],
            ['die PLZ', 'postcode'], ['der Wohnort', 'place of residence'], ['die Unterschrift', 'signature'], ['ausfüllen', 'to fill in']
          ] }
        ],

        sentences: [
          { de: 'Ich möchte einen Termin vereinbaren', en: 'I would like to make an appointment' },
          { de: 'Passt Ihnen Dienstag um zehn Uhr', en: 'Does Tuesday at ten suit you' },
          { de: 'Ich muss den Termin leider absagen', en: 'Unfortunately I have to cancel the appointment' },
          { de: 'Können wir den Termin verschieben', en: 'Can we move the appointment' },
          { de: 'Mit freundlichen Grüßen', en: 'Yours sincerely' },
          { de: 'Bitte füllen Sie das Formular aus', en: 'Please fill in the form' }
        ]
      },

      { // ===== UNIT 17 — written out in full =====
        title: '✈️ Unit 17 — Travel and Holidays',
        subject: 'Reisen und Urlaub',
        canDo: ['Book travel and accommodation', 'Deal with a simple travel problem'],
        grammarFocus: ['Prepositions of direction nach / in / zu', 'Modal verb dürfen', 'Future with the present tense + time word'],
        topics: [
          {
            icon: '🧳', title: 'Planning a trip', note: 'Where, when, how long, with whom',
            explanation:
              '<p>Plans for the future are normally told in the <strong>present tense</strong> with a time word: <span class="de">Im August fahre ich nach Italien.</span> <span class="de">Nächste Woche fliegen wir nach Wien.</span></p>' +
              '<p>“Where to?” (<span class="de">Wohin?</span>) has three main prepositions. <span class="de">nach</span> for towns and most countries: <span class="de">nach Berlin, nach Spanien</span>. <span class="de">in</span> + accusative for countries with an article and for places you enter: <span class="de">in die Türkei, in die Schweiz, in die USA, in die Berge, ins Hotel</span>. <span class="de">an</span> + accusative for water: <span class="de">ans Meer, an den See, an die Nordsee</span>. And <span class="de">zu</span> for people and buildings: <span class="de">zu meiner Tante, zum Flughafen</span>.</p>' +
              '<p>Other planning questions: <span class="de">Wie lange?</span> — <span class="de">zwei Wochen</span>; <span class="de">Mit wem?</span> — <span class="de">mit meiner Familie</span> (mit + dative); <span class="de">Womit?</span> — <span class="de">mit dem Zug / Auto / Flugzeug</span>.</p>',
            vocab: vocabTable([
              ['die Reise', 'the trip'],
              ['reisen', 'to travel'],
              ['der Urlaub', 'the holiday (from work)'],
              ['die Ferien (Pl.)', 'the holidays (school, university)'],
              ['Urlaub machen', 'to go on holiday'],
              ['fliegen', 'to fly'],
              ['das Flugzeug', 'the plane'],
              ['der Koffer', 'the suitcase'],
              ['packen', 'to pack'],
              ['Wohin?', 'Where to?'],
              ['Wie lange?', 'How long?'],
              ['Mit wem?', 'With whom?'],
              ['nächste Woche', 'next week'],
              ['im Sommer', 'in summer']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Wohin?', ['Preposition', 'Use', 'Example'], [
                ['nach', 'towns, countries without article; nach Hause', 'nach Rom, nach Österreich'],
                ['in + Akk.', 'countries with article; regions; buildings', 'in <strong>die</strong> Türkei, in <strong>die</strong> Berge, <strong>ins</strong> Museum'],
                ['an + Akk.', 'water, borders', '<strong>ans</strong> Meer, an <strong>den</strong> See'],
                ['zu + Dat.', 'people, specific places', 'zu meinen Eltern, <strong>zum</strong> Bahnhof']
              ]) +
              '<p class="note">Future plans: present tense + time word. <span class="de">Morgen fahre ich nach Hamburg.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — summer plans', [
              ['Lena', 'Was machst du im Sommer?'],
              ['Sıla', 'Im Juli fliege ich in die Türkei, zu meiner Familie. Und du?'],
              ['Lena', 'Wir fahren im August ans Meer, nach Kroatien.'],
              ['Sıla', 'Wie lange bleibt ihr?'],
              ['Lena', 'Zwei Wochen. Wir fahren mit dem Auto.'],
              ['Sıla', 'Toll! Gute Reise!']
            ]),
            exercises: exerciseList([
              exSelect('Wir fahren ___ Spanien.', 'nach', ['nach', 'in die', 'zu']),
              exSelect('Ich fliege ___ Türkei.', 'in die', ['nach', 'in die', 'zur']),
              exSelect('Wir fahren ___ Meer.', 'ans', ['ans', 'nach', 'zum']),
              exSelect('Ich fahre ___ meiner Tante.', 'zu', ['zu', 'nach', 'in']),
              exSelect('Wir fahren ___ Berge.', 'in die', ['nach', 'in die', 'an die']),
              exSelect('Ferien haben:', 'Schüler und Studenten', ['Schüler und Studenten', 'nur Arbeiter', 'nur Rentner']),
              exSelect('Future: Nächste Woche ___ ich nach Wien.', 'fahre', ['fahre', 'gefahren', 'fuhr'])
            ])
          },
          {
            icon: '🏨', title: 'Booking a room', note: 'Haben Sie ein Zimmer frei? Ein Einzelzimmer, bitte.',
            explanation:
              '<p>At a hotel reception or on the phone: <span class="de">Haben Sie noch ein Zimmer frei?</span> Then say which kind: <span class="de">ein Einzelzimmer</span> (single), <span class="de">ein Doppelzimmer</span> (double), <span class="de">mit Dusche / mit Bad</span>, <span class="de">mit Frühstück / Halbpension</span> (half board).</p>' +
              '<p>Give dates with <span class="de">vom … bis zum …</span>: <span class="de">vom 3. bis zum 7. Mai</span> (spoken <em>vom dritten bis zum siebten Mai</em>), or a number of nights: <span class="de">für drei Nächte</span>.</p>' +
              '<p>Useful questions: <span class="de">Was kostet das Zimmer pro Nacht?</span> <span class="de">Ist das Frühstück inklusive?</span> <span class="de">Wann ist der Check-out?</span> <span class="de">Gibt es WLAN?</span></p>',
            vocab: vocabTable([
              ['das Hotel / die Pension', 'the hotel / guest house'],
              ['die Jugendherberge', 'the youth hostel'],
              ['die Ferienwohnung', 'the holiday flat'],
              ['das Einzelzimmer', 'the single room'],
              ['das Doppelzimmer', 'the double room'],
              ['die Übernachtung', 'the overnight stay'],
              ['pro Nacht', 'per night'],
              ['inklusive / inkl.', 'included'],
              ['die Halbpension', 'half board'],
              ['buchen / reservieren', 'to book / reserve'],
              ['die Rezeption', 'the reception'],
              ['der Schlüssel', 'the key'],
              ['das WLAN', 'the Wi-Fi']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Dates', ['Written', 'Spoken'], [
                ['vom 3. bis zum 7. Mai', 'vom dritten bis zum siebten Mai'],
                ['am 15.8.', 'am fünfzehnten August'],
                ['für drei Nächte', '—']
              ]) +
              '<p class="note"><em>vom</em> = von dem, <em>zum</em> = zu dem; the ordinal takes <em>-ten</em>: dritten, siebten, zwanzigsten.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — at the reception', [
              ['Rezeption', 'Guten Abend! Kann ich Ihnen helfen?'],
              ['Gast', 'Guten Abend. Haben Sie noch ein Doppelzimmer frei? Für zwei Nächte.'],
              ['Rezeption', 'Ja, mit Dusche und Balkon. Das kostet 95 Euro pro Nacht.'],
              ['Gast', 'Ist das Frühstück inklusive?'],
              ['Rezeption', 'Ja, Frühstück gibt es von 7 bis 10 Uhr. Hier ist Ihr Schlüssel. Zimmer 214.'],
              ['Gast', 'Danke! Und wie ist das WLAN-Passwort?']
            ]),
            exercises: exerciseList([
              exSelect('Ein Zimmer für eine Person ist ein:', 'Einzelzimmer', ['Einzelzimmer', 'Doppelzimmer', 'Wohnzimmer']),
              exSelect('Haben Sie noch ein Zimmer ___?', 'frei', ['frei', 'leer', 'offen zu']),
              exSelect('vom 3. ___ 7. Mai', 'bis zum', ['bis zum', 'zu dem', 'nach dem']),
              exSelect('„inklusive" bedeutet:', 'included', ['included', 'extra', 'expensive']),
              exSelect('Was kostet das Zimmer ___ Nacht?', 'pro', ['pro', 'für die', 'in']),
              exInput('Man bekommt den ___________ für das Zimmer an der Rezeption.', 'Schlüssel'),
              exSelect('Eine günstige Unterkunft für junge Leute ist die:', 'Jugendherberge', ['Jugendherberge', 'Halbpension', 'Rezeption'])
            ])
          },
          {
            icon: '🚆', title: 'At the station and airport', note: 'Gleis, Verspätung, Abflug, Gepäck',
            explanation:
              '<p>At the station listen for <span class="de">Gleis</span> (platform), <span class="de">Abfahrt</span> (departure), <span class="de">Ankunft</span> (arrival) and the famous <span class="de">Verspätung</span> (delay): <span class="de">Der ICE nach München hat heute 20 Minuten Verspätung.</span> A cancelled train <span class="de">fällt aus</span>.</p>' +
              '<p>At the airport: <span class="de">der Abflug</span> (departure), <span class="de">das Terminal</span>, <span class="de">der Check-in</span>, <span class="de">das Gepäck</span> (luggage), <span class="de">das Handgepäck</span>, <span class="de">die Bordkarte</span> (boarding pass), <span class="de">der Ausgang / das Gate</span>, <span class="de">die Passkontrolle</span>.</p>' +
              '<p>Rules use <span class="de">dürfen</span> (to be allowed to): <span class="de">Im Handgepäck dürfen Sie keine Flüssigkeiten über 100 ml mitnehmen.</span> <span class="de">Hier darf man nicht rauchen.</span> Like all modals: <span class="de">ich darf, du darfst, er darf</span>.</p>',
            vocab: vocabTable([
              ['der Flughafen', 'the airport'],
              ['der Abflug / die Ankunft', 'departure / arrival'],
              ['das Gepäck', 'the luggage'],
              ['das Handgepäck', 'the hand luggage'],
              ['die Bordkarte', 'the boarding pass'],
              ['der Reisepass', 'the passport'],
              ['das Gleis', 'the platform'],
              ['die Verspätung', 'the delay'],
              ['ausfallen', 'to be cancelled'],
              ['pünktlich', 'on time'],
              ['dürfen', 'to be allowed to'],
              ['die Durchsage', 'the announcement']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('dürfen', ['Person', 'dürfen', 'Example'], [
                ['ich', '<strong>darf</strong>', 'Darf ich hier sitzen?'],
                ['du', 'darfst', 'Du darfst hier nicht parken.'],
                ['er / sie / man', '<strong>darf</strong>', 'Man darf nicht rauchen.'],
                ['wir / sie / Sie', 'dürfen', 'Sie dürfen jetzt einsteigen.']
              ]) +
              '<p class="note"><em>nicht dürfen</em> = must not. Compare <em>nicht müssen</em> = don’t have to.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — a delay', [
              ['Durchsage', 'Achtung an Gleis 9: Der ICE 578 nach Berlin hat heute circa 25 Minuten Verspätung.'],
              ['Sıla', 'Oh nein! Entschuldigung, fährt der Zug noch von Gleis 9?'],
              ['Mann', 'Ja, aber er kommt später.'],
              ['Sıla', 'Dann verpasse ich meinen Anschluss in Hannover.'],
              ['Mann', 'Fragen Sie im Reisezentrum. Sie dürfen bestimmt einen anderen Zug nehmen.']
            ]),
            exercises: exerciseList([
              exSelect('Der Zug kommt 20 Minuten zu spät. Er hat:', 'Verspätung', ['Verspätung', 'Abfahrt', 'Gleis']),
              exSelect('Der Zug fährt heute gar nicht. Er ___ ___.', 'fällt … aus', ['fällt … aus', 'kommt … an', 'fährt … ab']),
              exSelect('Hier ___ man nicht rauchen.', 'darf', ['darf', 'darfst', 'dürfen']),
              exInput('___________ ich hier sitzen? (dürfen)', 'Darf'),
              exSelect('Im Flugzeug braucht man eine:', 'Bordkarte', ['Bordkarte', 'Fahrkarte', 'Postkarte']),
              exSelect('„Man darf nicht parken" bedeutet:', 'You must not park', ['You don’t have to park', 'You must not park', 'You can park']),
              exSelect('Das Gegenteil von „Abflug" ist:', 'Ankunft', ['Ankunft', 'Abfahrt', 'Ausgang'])
            ])
          },
          {
            icon: '🗺️', title: 'Holiday activities', note: 'Sightseeing, beach, hiking, museums',
            explanation:
              '<p>Typical holiday activities: <span class="de">eine Stadtführung machen</span> (guided tour), <span class="de">Sehenswürdigkeiten besichtigen</span> (see the sights), <span class="de">ins Museum gehen</span>, <span class="de">am Strand liegen</span>, <span class="de">im Meer schwimmen</span>, <span class="de">in den Bergen wandern</span>, <span class="de">Fotos machen</span>, <span class="de">Souvenirs kaufen</span>.</p>' +
              '<p>Notice <strong>Wo? vs. Wohin?</strong>: going somewhere uses the accusative (<span class="de">Wir gehen <strong>an den</strong> Strand.</span>), being somewhere uses the dative (<span class="de">Wir liegen <strong>am</strong> Strand.</span>).</p>' +
              '<p>To recommend things: <span class="de">Man kann dort gut wandern.</span> <span class="de">Du musst unbedingt das Museum besuchen!</span> <span class="de">Es lohnt sich.</span> (It’s worth it.)</p>',
            vocab: vocabTable([
              ['die Sehenswürdigkeit', 'the sight'],
              ['besichtigen', 'to visit (a sight)'],
              ['die Stadtführung', 'the city tour'],
              ['der Strand', 'the beach'],
              ['am Strand liegen', 'to lie on the beach'],
              ['sich sonnen', 'to sunbathe'],
              ['die Altstadt', 'the old town'],
              ['das Schloss', 'the castle, palace'],
              ['die Aussicht', 'the view'],
              ['das Souvenir', 'the souvenir'],
              ['Es lohnt sich.', 'It’s worth it.'],
              ['unbedingt', 'definitely'],
              ['der Tourist / die Touristin', 'the tourist']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Wohin? (Akk.) vs. Wo? (Dat.)', ['Wohin? — movement', 'Wo? — position'], [
                ['Wir gehen <strong>an den</strong> Strand.', 'Wir liegen <strong>am</strong> Strand.'],
                ['Wir fahren <strong>in die</strong> Berge.', 'Wir wandern <strong>in den</strong> Bergen.'],
                ['Ich gehe <strong>ins</strong> Museum.', 'Ich bin <strong>im</strong> Museum.'],
                ['Wir fahren <strong>in die</strong> Altstadt.', 'Wir essen <strong>in der</strong> Altstadt.']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — what to do in Vienna', [
              ['Tom', 'Ich fahre nächste Woche nach Wien. Was kann man dort machen?'],
              ['Lena', 'Du musst unbedingt das Schloss Schönbrunn besichtigen!'],
              ['Tom', 'Ist es teuer?'],
              ['Lena', 'Ein bisschen, aber es lohnt sich. Und mach eine Stadtführung in der Altstadt.'],
              ['Tom', 'Und Kaffeehäuser?'],
              ['Lena', 'Natürlich! In Wien musst du Sachertorte essen.']
            ]),
            exercises: exerciseList([
              exSelect('Wir gehen ___ Strand. (Wohin?)', 'an den', ['an den', 'am', 'auf dem']),
              exSelect('Wir liegen ___ Strand. (Wo?)', 'am', ['an den', 'am', 'in den']),
              exSelect('Ich gehe ___ Museum. (Wohin?)', 'ins', ['ins', 'im', 'in dem']),
              exSelect('Wir wandern ___ Bergen.', 'in den', ['in die', 'in den', 'an den']),
              exSelect('„Es lohnt sich" bedeutet:', 'It’s worth it', ['It’s worth it', 'It’s expensive', 'It’s closed']),
              exInput('Ein Schloss oder ein Museum ist eine Sehens___________.', 'würdigkeit'),
              exSelect('„besichtigen" bedeutet:', 'to visit a sight', ['to visit a friend', 'to visit a sight', 'to book'])
            ])
          },
          {
            icon: '🆘', title: 'When something goes wrong', note: 'Lost luggage, missed train, complaints',
            explanation:
              '<p>Describe the problem in a short present-tense sentence: <span class="de">Mein Koffer ist nicht da.</span> <span class="de">Ich habe meinen Zug verpasst.</span> <span class="de">Das Zimmer ist schmutzig.</span> <span class="de">Die Heizung funktioniert nicht.</span> <span class="de">Ich habe meinen Pass verloren.</span></p>' +
              '<p>Then ask for help politely with <span class="de">Können Sie mir helfen?</span>, <span class="de">Was kann ich jetzt machen?</span>, <span class="de">Ich möchte ein anderes Zimmer.</span> or <span class="de">Ich möchte mich beschweren.</span> (I would like to complain.)</p>' +
              '<p>Where to go: lost luggage → <span class="de">die Gepäckermittlung</span>; lost property → <span class="de">das Fundbüro</span>; theft → <span class="de">die Polizei</span>; lost passport → your embassy or consulate (<span class="de">die Botschaft, das Konsulat</span>).</p>',
            vocab: vocabTable([
              ['das Problem', 'the problem'],
              ['verpassen', 'to miss'],
              ['verlieren', 'to lose'],
              ['gestohlen', 'stolen'],
              ['schmutzig / sauber', 'dirty / clean'],
              ['laut', 'noisy'],
              ['Das funktioniert nicht.', 'It doesn’t work.'],
              ['die Heizung', 'the heating'],
              ['sich beschweren', 'to complain'],
              ['das Fundbüro', 'the lost property office'],
              ['die Gepäckermittlung', 'the lost luggage desk'],
              ['die Botschaft', 'the embassy'],
              ['Können Sie mir helfen?', 'Can you help me?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Mein Koffer <strong>ist</strong> nicht <strong>angekommen</strong>. · Ich <strong>habe</strong> den Zug <strong>verpasst</strong>. · Ich <strong>habe</strong> meinen Pass <strong>verloren</strong>.</div>' +
              '<p class="note">These are Perfekt forms (past tense) — learn them as phrases now; the Perfekt is explained in Unit 18. Polite request: <span class="de">Ich <strong>möchte</strong> ein anderes Zimmer.</span></p>' +
              '</div>',
            dialogs: dialogBox('Dialog — lost luggage', [
              ['Sıla', 'Entschuldigung, mein Koffer ist nicht angekommen.'],
              ['Mitarbeiter', 'Woher kommen Sie?'],
              ['Sıla', 'Aus Istanbul, mit dem Flug TK 1661.'],
              ['Mitarbeiter', 'Wie sieht der Koffer aus?'],
              ['Sıla', 'Er ist groß und rot, mit einem gelben Band.'],
              ['Mitarbeiter', 'Füllen Sie bitte dieses Formular aus. Wir bringen den Koffer ins Hotel.']
            ]),
            exercises: exerciseList([
              exSelect('Der Zug ist weg. Ich habe ihn ___.', 'verpasst', ['verpasst', 'verloren', 'gekauft']),
              exSelect('Mein Pass ist weg. Ich habe ihn ___.', 'verloren', ['verpasst', 'verloren', 'besichtigt']),
              exSelect('Das Gegenteil von „schmutzig" ist:', 'sauber', ['sauber', 'laut', 'kaputt']),
              exSelect('Verlorene Sachen findet man im:', 'Fundbüro', ['Fundbüro', 'Reisebüro', 'Rathaus']),
              exSelect('Die Heizung ___ nicht.', 'funktioniert', ['funktioniert', 'kostet', 'passt']),
              exInput('Ich möchte mich ___________. (complain)', 'beschweren'),
              exSelect('Höflich um Hilfe bitten:', 'Können Sie mir helfen?', ['Helfen!', 'Können Sie mir helfen?', 'Sie helfen mir.'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: nach / in / an / zu, the present for future plans, hotel bookings and dates, dürfen, Wo? vs. Wohin?, and travel problems.</p>',
        exercises: exerciseList([
          exSelect('Wir fahren ___ Spanien.', 'nach', ['nach', 'in die', 'zu']),
          exSelect('Ich fliege ___ Türkei.', 'in die', ['nach', 'in die', 'zur']),
          exSelect('Wir fahren ___ Meer.', 'ans', ['ans', 'nach', 'zum']),
          exSelect('Ein Zimmer für eine Person ist ein:', 'Einzelzimmer', ['Einzelzimmer', 'Doppelzimmer', 'Wohnzimmer']),
          exSelect('vom 3. ___ 7. Mai', 'bis zum', ['bis zum', 'zu dem', 'nach dem']),
          exSelect('Hier ___ man nicht rauchen.', 'darf', ['darf', 'darfst', 'dürfen']),
          exSelect('Der Zug kommt 20 Minuten zu spät. Er hat:', 'Verspätung', ['Verspätung', 'Abfahrt', 'Gleis']),
          exSelect('Wir liegen ___ Strand. (Wo?)', 'am', ['an den', 'am', 'in den']),
          exSelect('Ich gehe ___ Museum. (Wohin?)', 'ins', ['ins', 'im', 'in dem']),
          exSelect('Mein Pass ist weg. Ich habe ihn ___.', 'verloren', ['verpasst', 'verloren', 'besichtigt']),
          exSelect('Verlorene Sachen findet man im:', 'Fundbüro', ['Fundbüro', 'Reisebüro', 'Rathaus']),
          exInput('___________ ich hier sitzen? (dürfen)', 'Darf')
        ]),

        reading: {
          intro: 'A booking confirmation from a guest house. Read for dates, room, price and the house rules.',
          words: 110, minutes: 6,
          text: readingText('Buchungsbestätigung — Pension Alpenblick, Garmisch-Partenkirchen', [
            'Liebe Frau Yılmaz,<br>vielen Dank für Ihre Buchung! Hier sind Ihre Daten:',
            '<strong>Anreise:</strong> Freitag, 8. August, ab 15 Uhr · <strong>Abreise:</strong> Montag, 11. August, bis 10 Uhr<br><strong>Zimmer:</strong> 1 Doppelzimmer mit Dusche, WC und Balkon (Bergblick) · <strong>Preis:</strong> 89 € pro Nacht inkl. Frühstück, gesamt 267 €',
            '<strong>Hausregeln:</strong> Frühstück gibt es von 7.30 bis 10 Uhr. Im Haus darf man nicht rauchen. Haustiere sind leider nicht erlaubt. Kostenlose Parkplätze gibt es hinter dem Haus.',
            '<strong>Tipp:</strong> Mit der Gästekarte dürfen Sie alle Busse im Ort kostenlos benutzen.',
            'Wir freuen uns auf Ihren Besuch!<br>Familie Huber'
          ], 'Bestätigung, fiktiv'),
          glossary: vocabTable([
            ['die Anreise / Abreise', 'arrival / departure'],
            ['der Bergblick', 'the mountain view'],
            ['gesamt', 'total'],
            ['die Gästekarte', 'the guest card']
          ]),
          questions: exerciseList([
            exSelect('Ab wann kann man am Freitag ankommen?', 'ab 15 Uhr', ['ab 10 Uhr', 'ab 15 Uhr', 'ab 7.30 Uhr']),
            exInput('Wie viele Nächte bleibt Frau Yılmaz? (Zahl)', '3|drei'),
            exSelect('Was für ein Zimmer hat sie?', 'ein Doppelzimmer mit Balkon', ['ein Einzelzimmer', 'ein Doppelzimmer mit Balkon', 'eine Ferienwohnung']),
            exTF('Das Frühstück kostet extra.', false),
            exTF('Man darf im Haus rauchen.', false),
            exSelect('Wo kann man parken?', 'hinter dem Haus', ['vor dem Haus', 'hinter dem Haus', 'im Ort']),
            exSelect('Was kann man mit der Gästekarte machen?', 'kostenlos Bus fahren', ['kostenlos essen', 'kostenlos Bus fahren', 'Haustiere mitbringen'])
          ])
        },

        listening: {
          title: 'Ein Problem im Hotel',
          intro: 'A guest complains at the reception. Listen for the problem and the solution.',
          lines: [
            ['Gast', 'Guten Abend. Ich habe ein Problem mit meinem Zimmer, Nummer 312.'],
            ['Rezeptionistin', 'Oh, das tut mir leid. Was ist los?'],
            ['Gast', 'Die Heizung funktioniert nicht und es ist sehr kalt. Und das Fenster geht nicht zu.'],
            ['Rezeptionistin', 'Das ist ärgerlich. Möchten Sie ein anderes Zimmer?'],
            ['Gast', 'Ja, bitte. Gern ein ruhiges Zimmer, nicht zur Straße.'],
            ['Rezeptionistin', 'Zimmer 405 ist frei, zum Garten. Und morgen ist das Frühstück für Sie kostenlos.'],
            ['Gast', 'Vielen Dank, das ist sehr nett.']
          ],
          questions: exerciseList([
            exInput('Welche Zimmernummer hat der Gast zuerst? (Zahl)', '312'),
            exSelect('Was funktioniert nicht?', 'die Heizung', ['die Dusche', 'die Heizung', 'das WLAN']),
            exTF('Das Fenster geht nicht zu.', true),
            exSelect('Was für ein Zimmer möchte der Gast?', 'ein ruhiges Zimmer', ['ein großes Zimmer', 'ein ruhiges Zimmer', 'ein Zimmer zur Straße']),
            exInput('Welches neue Zimmer bekommt er? (Zahl)', '405'),
            exSelect('Was ist morgen kostenlos?', 'das Frühstück', ['das Zimmer', 'das Frühstück', 'der Parkplatz'])
          ])
        },

        writing: {
          title: 'Zimmeranfrage',
          textType: 'Formelle E-Mail an eine Pension',
          minWords: 35, maxWords: 65, minutes: 15,
          expect: ['formal-opening', 'formal-closing'],
          task: '<p>Sie möchten im September drei Nächte in einer Pension in Salzburg übernachten. Schreiben Sie eine E-Mail.</p>' +
            '<p class="note">You want to stay three nights in a guest house in Salzburg in September. Write an e-mail.</p>',
          plainTask: 'Write a short formal e-mail in German (35–65 words) to a guest house in Salzburg. Ask whether a room is free, say what kind of room and for which dates (vom … bis zum …), ask about the price and breakfast, ask one question with dürfen (e.g. bringing a dog, parking), and close formally.',
          bullets: [
            'Fragen Sie nach einem <strong>freien Zimmer</strong> (Einzel- oder Doppelzimmer).',
            'Nennen Sie die <strong>Daten</strong>: vom … bis zum …',
            'Fragen Sie nach <strong>Preis</strong> und <strong>Frühstück</strong>.',
            'Stellen Sie eine Frage mit <strong>dürfen</strong>.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Damen und Herren,'],
            ['Anfrage', 'haben Sie vom 12. bis zum 15. September ein Doppelzimmer frei?'],
            ['Preis', 'Was kostet das Zimmer pro Nacht? Ist das Frühstück inklusive?'],
            ['Regel', 'Darf ich meinen Hund mitbringen? · Darf man dort parken?'],
            ['Schluss', 'Vielen Dank für Ihre Antwort. Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Ich beginne mit einer formellen Anrede.',
            'Ich frage nach einem Zimmer und nenne die Zimmerart.',
            'Ich nenne die Daten mit vom … bis zum …',
            'Ich frage nach Preis und Frühstück.',
            'Ich stelle eine Frage mit dürfen.',
            'Ich schließe mit „Mit freundlichen Grüßen".',
            'Ich liege zwischen 35 und 65 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Holiday champions.</strong> Germans are among the world’s most frequent travellers. Favourite destinations include Spain, Italy, Austria, Turkey, Croatia and Germany itself — especially the Baltic and North Sea coasts and Bavaria.</p>' +
          '<p><strong>The train.</strong> The Deutsche Bahn connects the whole country, with fast ICE trains between big cities. Delays are a national topic of conversation. Saver fares (<em>Sparpreise</em>) are much cheaper if you book early.</p>' +
          '<p><strong>Guest tax.</strong> In many resorts you pay a small <em>Kurtaxe</em> or <em>Gästebeitrag</em> per night, and in return get a guest card with free buses or discounts.</p>' +
          '<p><strong>Camping and hostels.</strong> Camping is very popular, and the German youth hostel network (<em>Jugendherbergen</em>) is the oldest in the world — not just for young people but also for families and school classes.</p>',

        recap: [
          { group: '🧳 Reise', rows: [
            ['die Reise', 'the trip'], ['der Urlaub', 'the holiday'], ['nach Spanien', 'to Spain'], ['in die Türkei', 'to Turkey'],
            ['ans Meer', 'to the sea'], ['in die Berge', 'to the mountains'], ['der Koffer', 'the suitcase']
          ] },
          { group: '🏨 Hotel', rows: [
            ['das Einzelzimmer', 'the single room'], ['das Doppelzimmer', 'the double room'], ['pro Nacht', 'per night'],
            ['inklusive Frühstück', 'breakfast included'], ['buchen', 'to book'], ['der Schlüssel', 'the key']
          ] },
          { group: '🚆 Unterwegs', rows: [
            ['der Flughafen', 'the airport'], ['das Gepäck', 'the luggage'], ['die Verspätung', 'the delay'],
            ['ausfallen', 'to be cancelled'], ['dürfen (darf)', 'to be allowed'], ['pünktlich', 'on time']
          ] },
          { group: '🗺️ Aktivitäten', rows: [
            ['besichtigen', 'to visit'], ['die Sehenswürdigkeit', 'the sight'], ['der Strand', 'the beach'],
            ['die Altstadt', 'the old town'], ['Es lohnt sich.', 'It’s worth it.']
          ] },
          { group: '🆘 Probleme', rows: [
            ['verpassen', 'to miss'], ['verlieren', 'to lose'], ['Das funktioniert nicht.', 'It doesn’t work.'],
            ['sich beschweren', 'to complain'], ['das Fundbüro', 'the lost property office']
          ] }
        ],

        sentences: [
          { de: 'Im Sommer fahren wir ans Meer', en: 'In summer we are going to the seaside' },
          { de: 'Haben Sie noch ein Zimmer frei', en: 'Do you still have a room free' },
          { de: 'Ich brauche ein Doppelzimmer für drei Nächte', en: 'I need a double room for three nights' },
          { de: 'Der Zug hat zwanzig Minuten Verspätung', en: 'The train is twenty minutes late' },
          { de: 'Hier darf man nicht rauchen', en: 'You are not allowed to smoke here' },
          { de: 'Mein Koffer ist nicht angekommen', en: 'My suitcase has not arrived' }
        ]
      },

      { // ===== UNIT 18 — written out in full =====
        title: '⏮️ Unit 18 — Talking About the Past',
        subject: 'Über die Vergangenheit sprechen',
        canDo: ['Talk about what you did yesterday and last weekend', 'Write a short past-tense diary entry'],
        grammarFocus: ['Perfekt with haben and sein', 'Past participle formation', 'Präteritum of sein and haben'],
        topics: [
          {
            icon: '✅', title: 'Perfekt with haben', note: 'Ich habe gearbeitet / gegessen / gemacht',
            explanation:
              '<p>In spoken German the normal past tense is the <strong>Perfekt</strong>. It has two parts: a form of <span class="de">haben</span> (or <span class="de">sein</span>) in position 2, and the <strong>past participle</strong> (Partizip II) at the very <strong>end</strong>: <span class="de">Ich <strong>habe</strong> gestern Pizza <strong>gegessen</strong>.</span> It is the same bracket you know from modal verbs.</p>' +
              '<p>Most verbs use <span class="de">haben</span> — all verbs with an accusative object (<span class="de">kaufen, essen, lesen, sehen, machen</span>) and most others (<span class="de">arbeiten, schlafen, spielen</span>).</p>' +
              '<p>One Perfekt translates several English forms: <span class="de">Ich habe gearbeitet</span> = I worked / I have worked / I was working. Time words show when: <span class="de">gestern, letzte Woche, am Wochenende, vor zwei Tagen</span> (two days ago).</p>',
            vocab: vocabTable([
              ['gestern', 'yesterday'],
              ['vorgestern', 'the day before yesterday'],
              ['letzte Woche', 'last week'],
              ['letztes Jahr', 'last year'],
              ['am Wochenende', 'at the weekend'],
              ['vor zwei Tagen', 'two days ago'],
              ['gemacht', 'done, made'],
              ['gearbeitet', 'worked'],
              ['gekauft', 'bought'],
              ['gespielt', 'played'],
              ['gegessen', 'eaten'],
              ['getrunken', 'drunk'],
              ['gesehen', 'seen'],
              ['gelesen', 'read'],
              ['geschlafen', 'slept']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Perfekt = haben + Partizip II', ['Position 1', 'haben (2)', 'Middle', 'Partizip II (end)'], [
                ['Ich', '<strong>habe</strong>', 'gestern', '<strong>gearbeitet</strong>.'],
                ['Gestern', '<strong>hat</strong>', 'sie Pizza', '<strong>gegessen</strong>.'],
                ['Wir', '<strong>haben</strong>', 'einen Film', '<strong>gesehen</strong>.'],
                ['<strong>Hast</strong>', 'du', 'gut', '<strong>geschlafen</strong>?']
              ]) +
              formTable('haben', ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], [
                ['habe', 'hast', 'hat', 'haben', 'habt', 'haben']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — yesterday evening', [
              ['Tom', 'Was hast du gestern Abend gemacht?'],
              ['Sıla', 'Ich habe gekocht und dann einen Film gesehen. Und du?'],
              ['Tom', 'Ich habe lange gearbeitet. Dann habe ich nur eine Pizza gegessen.'],
              ['Sıla', 'Hast du gut geschlafen?'],
              ['Tom', 'Nein, nicht so gut. Ich habe zu viel Kaffee getrunken!']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ gestern gearbeitet.', 'habe', ['habe', 'hat', 'bin']),
              exSelect('Er ___ einen Film gesehen.', 'hat', ['habe', 'hat', 'haben']),
              exSelect('Richtig ist:', 'Wir haben Pizza gegessen.', ['Wir haben gegessen Pizza.', 'Wir haben Pizza gegessen.', 'Wir gegessen haben Pizza.']),
              exInput('Partizip II von „machen": ___________', 'gemacht'),
              exInput('Partizip II von „kaufen": ___________', 'gekauft'),
              exSelect('Was hast du gestern ___?', 'gemacht', ['gemacht', 'machen', 'macht']),
              exSelect('„vor zwei Tagen" bedeutet:', 'two days ago', ['in two days', 'two days ago', 'for two days'])
            ])
          },
          {
            icon: '🚶', title: 'Perfekt with sein', note: 'Which verbs take sein, and why',
            explanation:
              '<p>A smaller group of verbs forms the Perfekt with <span class="de">sein</span>. They have no accusative object and describe either a <strong>movement from A to B</strong> (<span class="de">gehen, fahren, fliegen, kommen, laufen, reisen, aufstehen</span>) or a <strong>change of state</strong> (<span class="de">aufwachen, einschlafen, werden, sterben</span>). Two important extras: <span class="de">sein</span> and <span class="de">bleiben</span> also take sein.</p>' +
              '<p>Examples: <span class="de">Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>.</span> <span class="de">Wir <strong>sind</strong> um sieben <strong>aufgestanden</strong>.</span> <span class="de">Sie <strong>ist</strong> zu Hause <strong>geblieben</strong>.</span></p>' +
              '<p>Test: Can you add “from A to B” or does something become different? Then it is <span class="de">sein</span>. Everything else: <span class="de">haben</span>.</p>',
            vocab: vocabTable([
              ['gehen → ist gegangen', 'to go'],
              ['fahren → ist gefahren', 'to drive, travel'],
              ['fliegen → ist geflogen', 'to fly'],
              ['kommen → ist gekommen', 'to come'],
              ['laufen → ist gelaufen', 'to run, walk'],
              ['reisen → ist gereist', 'to travel'],
              ['aufstehen → ist aufgestanden', 'to get up'],
              ['einschlafen → ist eingeschlafen', 'to fall asleep'],
              ['bleiben → ist geblieben', 'to stay'],
              ['sein → ist gewesen', 'to be'],
              ['werden → ist geworden', 'to become'],
              ['passieren → ist passiert', 'to happen']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('haben or sein?', ['sein — movement / change / sein, bleiben', 'haben — everything else'], [
                ['Ich <strong>bin</strong> ins Kino <strong>gegangen</strong>.', 'Ich <strong>habe</strong> einen Film <strong>gesehen</strong>.'],
                ['Sie <strong>ist</strong> nach Rom <strong>geflogen</strong>.', 'Sie <strong>hat</strong> ein Ticket <strong>gekauft</strong>.'],
                ['Er <strong>ist</strong> früh <strong>eingeschlafen</strong>.', 'Er <strong>hat</strong> lange <strong>geschlafen</strong>.'],
                ['Wir <strong>sind</strong> zu Hause <strong>geblieben</strong>.', 'Wir <strong>haben</strong> zu Hause <strong>gearbeitet</strong>.']
              ]) +
              '<p class="note">Note <em>schlafen</em> (state, haben) vs. <em>einschlafen</em> (change, sein).</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — the trip to Munich', [
              ['Lena', 'Was hast du am Wochenende gemacht?'],
              ['Tom', 'Ich bin nach München gefahren. Ich bin am Samstag um sechs aufgestanden!'],
              ['Lena', 'So früh? Und dann?'],
              ['Tom', 'Ich bin mit dem Zug gefahren und am Nachmittag zum Marienplatz gegangen.'],
              ['Lena', 'Bist du lange geblieben?'],
              ['Tom', 'Nein, am Sonntagabend bin ich zurückgekommen.']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ nach Berlin gefahren.', 'bin', ['habe', 'bin', 'ist']),
              exSelect('Sie ___ ins Kino gegangen.', 'ist', ['hat', 'ist', 'sind']),
              exSelect('Wir ___ einen Film gesehen.', 'haben', ['haben', 'sind', 'hat']),
              exSelect('Er ___ zu Hause geblieben.', 'ist', ['hat', 'ist', 'bin']),
              exSelect('Ich ___ um 7 Uhr aufgestanden.', 'bin', ['habe', 'bin', 'hat']),
              exSelect('Ich ___ gut geschlafen.', 'habe', ['habe', 'bin', 'ist']),
              exInput('Partizip II von „fliegen": ___________', 'geflogen'),
              exInput('Was ist ___________? (passieren — Partizip II)', 'passiert')
            ])
          },
          {
            icon: '🧩', title: 'Regular and irregular participles', note: '-t vs. -en, and the ge- rule',
            explanation:
              '<p><strong>Regular (weak) verbs:</strong> <span class="de">ge- + stem + -t</span>: <span class="de">machen → gemacht, kaufen → gekauft, spielen → gespielt</span>. Stems ending in <em>-t / -d</em> add <em>-et</em>: <span class="de">arbeiten → gearbeitet</span>.</p>' +
              '<p><strong>Irregular (strong) verbs:</strong> <span class="de">ge- + stem + -en</span>, often with a vowel change, which you must learn: <span class="de">essen → gegessen, trinken → getrunken, schreiben → geschrieben, finden → gefunden, nehmen → genommen</span>.</p>' +
              '<p><strong>The ge- rule:</strong> separable verbs put <em>ge-</em> between prefix and stem: <span class="de">einkaufen → ein<strong>ge</strong>kauft, aufstehen → auf<strong>ge</strong>standen</span>. Verbs with an inseparable prefix (<em>be-, ver-, er-, ent-, ge-</em>) and verbs ending in <em>-ieren</em> have <strong>no ge-</strong>: <span class="de">besuchen → besucht, verstehen → verstanden, studieren → studiert, telefonieren → telefoniert</span>.</p>',
            vocab: vocabTable([
              ['arbeiten → gearbeitet', 'to work'],
              ['schreiben → geschrieben', 'to write'],
              ['finden → gefunden', 'to find'],
              ['nehmen → genommen', 'to take'],
              ['treffen → getroffen', 'to meet'],
              ['sprechen → gesprochen', 'to speak'],
              ['einkaufen → eingekauft', 'to shop'],
              ['anrufen → angerufen', 'to phone'],
              ['fernsehen → ferngesehen', 'to watch TV'],
              ['besuchen → besucht', 'to visit'],
              ['vergessen → vergessen', 'to forget'],
              ['bezahlen → bezahlt', 'to pay'],
              ['studieren → studiert', 'to study'],
              ['fotografieren → fotografiert', 'to photograph']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Participle patterns', ['Type', 'Pattern', 'Examples'], [
                ['regular', 'ge- … -t', 'gemacht, gekauft, gewohnt, gearbeitet'],
                ['irregular', 'ge- … -en (vowel change)', 'gegessen, getrunken, geschrieben, gesprochen'],
                ['separable', 'prefix + ge + …', 'eingekauft, angerufen, aufgestanden'],
                ['be-/ver-/er-/ent-', 'no ge-', 'besucht, verkauft, verstanden, erklärt'],
                ['-ieren', 'no ge-, -t', 'studiert, telefoniert, passiert']
              ]) +
              '<p class="note">Mixed verbs: <em>bringen → gebracht, denken → gedacht, wissen → gewusst</em> (ge- … -t with a vowel change).</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — a busy day', [
              ['Mutter', 'Hast du heute eingekauft?'],
              ['Sohn', 'Ja, ich habe Brot und Milch eingekauft und bezahlt.'],
              ['Mutter', 'Und hast du Oma angerufen?'],
              ['Sohn', 'Ja, ich habe mit ihr telefoniert. Sie hat sich sehr gefreut.'],
              ['Mutter', 'Haha. Und die Hausaufgaben?'],
              ['Sohn', 'Die habe ich schon geschrieben.']
            ]),
            exercises: exerciseList([
              exInput('Partizip II von „arbeiten": ___________', 'gearbeitet'),
              exInput('Partizip II von „trinken": ___________', 'getrunken'),
              exInput('Partizip II von „schreiben": ___________', 'geschrieben'),
              exSelect('Partizip II von „einkaufen":', 'eingekauft', ['geeinkauft', 'eingekauft', 'einkaufte']),
              exSelect('Partizip II von „besuchen":', 'besucht', ['gebesucht', 'besucht', 'besuchen']),
              exSelect('Partizip II von „studieren":', 'studiert', ['gestudiert', 'studiert', 'studieren']),
              exSelect('Partizip II von „anrufen":', 'angerufen', ['angeruft', 'angerufen', 'geanrufen']),
              exInput('Partizip II von „verstehen": ___________', 'verstanden')
            ])
          },
          {
            icon: '🕰️', title: 'war and hatte', note: 'The two past forms you need even at A1',
            explanation:
              '<p>For <span class="de">sein</span> and <span class="de">haben</span> Germans almost always use the simple past (<strong>Präteritum</strong>), not the Perfekt: <span class="de">Ich <strong>war</strong> gestern krank.</span> (not <s>Ich bin krank gewesen</s> — correct but rare). <span class="de">Wir <strong>hatten</strong> keine Zeit.</span></p>' +
              '<p>The forms: <span class="de">war, warst, war, waren, wart, waren</span> and <span class="de">hatte, hattest, hatte, hatten, hattet, hatten</span>. Like modals, <em>ich</em> and <em>er/sie/es</em> are identical.</p>' +
              '<p>The modal verbs also usually appear in the Präteritum: <span class="de">ich konnte, ich musste, ich wollte</span> — e.g. <span class="de">Ich konnte nicht kommen.</span> And <span class="de">es gab</span> = there was / there were.</p>',
            vocab: vocabTable([
              ['ich war', 'I was'],
              ['du warst', 'you were'],
              ['wir waren', 'we were'],
              ['ich hatte', 'I had'],
              ['du hattest', 'you had'],
              ['wir hatten', 'we had'],
              ['es gab', 'there was / were'],
              ['ich konnte', 'I could'],
              ['ich musste', 'I had to'],
              ['ich wollte', 'I wanted to'],
              ['Wie war …?', 'How was …?'],
              ['Wo warst du?', 'Where were you?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('Präteritum', ['Person', 'sein', 'haben', 'können', 'müssen'], [
                ['ich', '<strong>war</strong>', '<strong>hatte</strong>', 'konnte', 'musste'],
                ['du', 'warst', 'hattest', 'konntest', 'musstest'],
                ['er / sie / es', '<strong>war</strong>', '<strong>hatte</strong>', 'konnte', 'musste'],
                ['wir', 'waren', 'hatten', 'konnten', 'mussten'],
                ['ihr', 'wart', 'hattet', 'konntet', 'musstet'],
                ['sie / Sie', 'waren', 'hatten', 'konnten', 'mussten']
              ]) +
              '</div>',
            dialogs: dialogBox('Dialog — where were you?', [
              ['Lena', 'Wo warst du gestern? Du warst nicht im Kurs.'],
              ['Tom', 'Ich war krank. Ich hatte Fieber.'],
              ['Lena', 'Oh, das tut mir leid! Geht es dir jetzt besser?'],
              ['Tom', 'Ja, danke. Wie war der Kurs?'],
              ['Lena', 'Gut, aber wir hatten einen Test! Du musstest nicht schreiben. Glück gehabt!']
            ]),
            exercises: exerciseList([
              exSelect('Ich ___ gestern krank.', 'war', ['war', 'warst', 'waren']),
              exSelect('Wo ___ du am Wochenende?', 'warst', ['war', 'warst', 'wart']),
              exSelect('Wir ___ keine Zeit.', 'hatten', ['hatte', 'hattet', 'hatten']),
              exInput('Er ___________ Fieber. (haben, Präteritum)', 'hatte'),
              exInput('Ihr ___________ im Urlaub. (sein, Präteritum)', 'wart'),
              exSelect('Ich ___ nicht kommen. (können, Präteritum)', 'konnte', ['kann', 'konnte', 'könnte']),
              exSelect('„Es gab ein Problem" bedeutet:', 'There was a problem', ['There is a problem', 'There was a problem', 'It gave a problem'])
            ])
          },
          {
            icon: '📔', title: 'Telling a weekend story', note: 'Putting several past sentences in order',
            explanation:
              '<p>A good short story combines the tools of this unit: <span class="de">war / hatte</span> for the situation, the <span class="de">Perfekt</span> for actions, and <strong>sequence words</strong> to keep the order clear: <span class="de">zuerst, dann, danach, später, am Abend, zum Schluss</span>.</p>' +
              '<p>Remember the verb-second rule after every sequence word: <span class="de">Dann <strong>sind</strong> wir ins Kino gegangen.</span> And the participle stays at the end even in long sentences: <span class="de">Am Abend <strong>haben</strong> wir mit Freunden in einem kleinen Restaurant <strong>gegessen</strong>.</span></p>' +
              '<p>Finish with an evaluation: <span class="de">Es war super / langweilig / anstrengend.</span> <span class="de">Das Wochenende hat Spaß gemacht.</span></p>',
            vocab: vocabTable([
              ['zuerst', 'first'],
              ['dann', 'then'],
              ['danach', 'after that'],
              ['später', 'later'],
              ['zum Schluss', 'finally'],
              ['am Vormittag / Nachmittag', 'in the morning / afternoon'],
              ['Es war super.', 'It was great.'],
              ['anstrengend', 'tiring'],
              ['Das hat Spaß gemacht.', 'That was fun.'],
              ['das Tagebuch', 'the diary'],
              ['erzählen', 'to tell'],
              ['Was ist passiert?', 'What happened?']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<div class="example-box">Am Samstag <strong>war</strong> das Wetter schön. <strong>Zuerst</strong> <strong>habe</strong> ich lange <strong>geschlafen</strong>. <strong>Dann</strong> <strong>bin</strong> ich mit Lena in den Park <strong>gegangen</strong>. <strong>Danach</strong> <strong>haben</strong> wir Eis <strong>gegessen</strong>. Am Abend <strong>hatte</strong> ich keine Lust auf Party und <strong>habe</strong> <strong>ferngesehen</strong>. Es <strong>war</strong> ein schöner Tag!</div>' +
              '<p class="note">Situation: war / hatte. Actions: Perfekt. Order: zuerst, dann, danach + verb in position 2.</p>' +
              '</div>',
            dialogs: dialogBox('Dialog — Monday morning', [
              ['Tom', 'Na, wie war dein Wochenende?'],
              ['Sıla', 'Super! Am Samstag war ich in Lübeck.'],
              ['Tom', 'Was hast du gemacht?'],
              ['Sıla', 'Zuerst habe ich die Altstadt besichtigt. Dann habe ich Marzipan gekauft. Danach bin ich an die Ostsee gefahren.'],
              ['Tom', 'Toll! Und am Sonntag?'],
              ['Sıla', 'Am Sonntag war ich müde. Ich bin zu Hause geblieben und habe gelesen.']
            ]),
            exercises: exerciseList([
              exSelect('Zuerst ___ ich lange geschlafen.', 'habe', ['habe', 'bin', 'war']),
              exSelect('Dann ___ wir in den Park gegangen.', 'sind', ['haben', 'sind', 'waren']),
              exSelect('Richtig ist:', 'Danach haben wir Eis gegessen.', ['Danach wir haben Eis gegessen.', 'Danach haben wir Eis gegessen.', 'Danach haben wir gegessen Eis.']),
              exSelect('Am Sonntag ___ ich müde.', 'war', ['war', 'habe', 'bin']),
              exSelect('„anstrengend" bedeutet:', 'tiring', ['boring', 'tiring', 'funny']),
              exInput('Das Wochenende hat Spaß ___________. (machen)', 'gemacht'),
              exInput('Am Abend habe ich ___________. (fernsehen — Partizip II)', 'ferngesehen')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: Perfekt with haben and sein, regular, irregular and separable participles, war / hatte, and telling a short story in order.</p>',
        exercises: exerciseList([
          exSelect('Ich ___ gestern gearbeitet.', 'habe', ['habe', 'hat', 'bin']),
          exSelect('Richtig ist:', 'Wir haben Pizza gegessen.', ['Wir haben gegessen Pizza.', 'Wir haben Pizza gegessen.', 'Wir gegessen haben Pizza.']),
          exSelect('Ich ___ nach Berlin gefahren.', 'bin', ['habe', 'bin', 'ist']),
          exSelect('Er ___ zu Hause geblieben.', 'ist', ['hat', 'ist', 'bin']),
          exInput('Partizip II von „trinken": ___________', 'getrunken'),
          exSelect('Partizip II von „einkaufen":', 'eingekauft', ['geeinkauft', 'eingekauft', 'einkaufte']),
          exSelect('Partizip II von „besuchen":', 'besucht', ['gebesucht', 'besucht', 'besuchen']),
          exSelect('Partizip II von „studieren":', 'studiert', ['gestudiert', 'studiert', 'studieren']),
          exSelect('Wo ___ du am Wochenende?', 'warst', ['war', 'warst', 'wart']),
          exSelect('Wir ___ keine Zeit.', 'hatten', ['hatte', 'hattet', 'hatten']),
          exSelect('Dann ___ wir in den Park gegangen.', 'sind', ['haben', 'sind', 'waren']),
          exInput('Partizip II von „machen": ___________', 'gemacht')
        ]),

        reading: {
          intro: 'A diary entry about a special day. Read for what happened, in which order, and how the writer felt.',
          words: 115, minutes: 6,
          text: readingText('Mein Tagebuch — Samstag, 14. Juni', [
            'Heute war ein besonderer Tag: Meine Schwester Deniz hatte Geburtstag! Ich bin schon um sieben Uhr aufgestanden und habe einen Kuchen gebacken.',
            'Um elf Uhr sind wir zusammen in die Stadt gefahren. Zuerst haben wir in einem Café gefrühstückt. Dann haben wir ein Geschenk gekauft: eine Kamera. Deniz hat sich sehr gefreut.',
            'Am Nachmittag sind wir in den Park gegangen. Dort haben unsere Freunde gewartet — eine Überraschungsparty! Wir haben gegessen, getanzt und viele Fotos gemacht.',
            'Am Abend war ich sehr müde, aber glücklich. Es war ein wunderschöner Tag.'
          ], 'Tagebuch, fiktiv'),
          glossary: vocabTable([
            ['besonders', 'special'],
            ['backen → gebacken', 'to bake'],
            ['das Geschenk', 'the present'],
            ['die Überraschung', 'the surprise'],
            ['warten', 'to wait']
          ]),
          questions: exerciseList([
            exSelect('Warum war der Tag besonders?', 'Deniz hatte Geburtstag.', ['Es war ein Feiertag.', 'Deniz hatte Geburtstag.', 'Sie hatte Urlaub.']),
            exInput('Wann ist die Schreiberin aufgestanden? (um … Uhr)', 'sieben|7|um sieben|um 7|um sieben Uhr|um 7 Uhr|7 Uhr'),
            exSelect('Was hat sie gebacken?', 'einen Kuchen', ['Brot', 'einen Kuchen', 'Kekse']),
            exSelect('Was haben sie zuerst in der Stadt gemacht?', 'gefrühstückt', ['ein Geschenk gekauft', 'gefrühstückt', 'getanzt']),
            exInput('Was war das Geschenk? (eine …)', 'Kamera|eine Kamera'),
            exTF('Im Park war eine Überraschungsparty.', true),
            exSelect('Wie war sie am Abend?', 'müde, aber glücklich', ['traurig', 'müde, aber glücklich', 'krank'])
          ])
        },

        listening: {
          title: 'Wie war dein Urlaub?',
          intro: 'Two colleagues talk about a holiday. Listen for where he went, how, what he did and the problem.',
          lines: [
            ['Anna', 'Hallo Ben! Du bist wieder da! Wie war dein Urlaub?'],
            ['Ben', 'Sehr schön, danke! Ich war zwei Wochen in Portugal.'],
            ['Anna', 'Bist du geflogen?'],
            ['Ben', 'Ja, ich bin nach Lissabon geflogen. Dann habe ich ein Auto gemietet und bin an die Küste gefahren.'],
            ['Anna', 'Toll! Was hast du gemacht?'],
            ['Ben', 'Ich habe viel gelesen, bin geschwommen und habe gesurft. Das Essen war fantastisch.'],
            ['Anna', 'Gab es auch Probleme?'],
            ['Ben', 'Ja, am letzten Tag hatte der Flug vier Stunden Verspätung. Ich bin erst um Mitternacht nach Hause gekommen.']
          ],
          questions: exerciseList([
            exInput('Wo war Ben im Urlaub?', 'Portugal|in Portugal'),
            exSelect('Wie lange war er weg?', 'zwei Wochen', ['eine Woche', 'zwei Wochen', 'drei Wochen']),
            exSelect('Was hat er in Lissabon gemietet?', 'ein Auto', ['ein Fahrrad', 'ein Auto', 'eine Wohnung']),
            exSelect('Was hat er NICHT gemacht?', 'gewandert', ['gelesen', 'gesurft', 'gewandert']),
            exInput('Wie viele Stunden Verspätung hatte der Flug? (Zahl)', '4|vier'),
            exSelect('Wann ist er nach Hause gekommen?', 'um Mitternacht', ['am Nachmittag', 'um Mitternacht', 'am nächsten Morgen'])
          ])
        },

        writing: {
          title: 'Mein Wochenende',
          textType: 'Tagebucheintrag / E-Mail an eine Freundin',
          minWords: 45, maxWords: 80, minutes: 20,
          expect: ['informal-opening', 'farewell'],
          task: '<p>Ihre Freundin fragt: „Wie war dein Wochenende?" Schreiben Sie ihr eine E-Mail.</p>' +
            '<p class="note">Your friend asks “How was your weekend?” Write her an e-mail.</p>',
          plainTask: 'Write a short informal e-mail in German (45–80 words) about your last weekend. Use at least three Perfekt sentences with haben and two with sein, use war or hatte at least once, order the events with zuerst / dann / danach, say how it was, and ask about her weekend.',
          bullets: [
            'Was haben Sie am <strong>Samstag</strong> und <strong>Sonntag</strong> gemacht?',
            'Benutzen Sie das <strong>Perfekt</strong> mit <strong>haben</strong> und mit <strong>sein</strong>.',
            'Benutzen Sie <strong>war</strong> oder <strong>hatte</strong>.',
            'Ordnen Sie mit <strong>zuerst, dann, danach</strong>.',
            'Wie <strong>war</strong> das Wochenende? Fragen Sie nach ihrem Wochenende.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Liebe Anna, · Hallo Tom,'],
            ['haben', 'Ich habe lange geschlafen. · Wir haben gekocht.'],
            ['sein', 'Ich bin in die Stadt gefahren. · Wir sind zu Hause geblieben.'],
            ['war / hatte', 'Das Wetter war schön. · Ich hatte viel Zeit.'],
            ['Reihenfolge', 'Zuerst … Dann … Danach … Am Abend …'],
            ['Bewertung', 'Es war super! · Das hat Spaß gemacht.'],
            ['Frage / Gruß', 'Und wie war dein Wochenende? · Liebe Grüße']
          ]),
          criteria: [
            'Ich beginne mit einer Anrede.',
            'Ich schreibe mindestens drei Perfekt-Sätze mit haben.',
            'Ich schreibe mindestens zwei Perfekt-Sätze mit sein.',
            'Das Partizip steht am Satzende.',
            'Ich benutze war oder hatte.',
            'Ich ordne mit zuerst / dann / danach (Verb auf Position 2).',
            'Ich stelle eine Frage und schließe mit einem Gruß.',
            'Ich liege zwischen 45 und 80 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Perfekt for speaking, Präteritum for writing.</strong> In conversation, Germans tell stories in the Perfekt. Books, newspapers and fairy tales use the Präteritum (<em>Es war einmal …</em> — once upon a time). In the north the Präteritum is heard more in speech than in the south.</p>' +
          '<p><strong>Monday small talk.</strong> <em>Wie war dein Wochenende?</em> is the classic Monday question at work and in class — now you can answer it with real detail.</p>' +
          '<p><strong>Diaries and the Fotobuch.</strong> Many Germans keep holiday memories in a printed photo book (<em>Fotobuch</em>) with short captions — a nice way to practise past-tense sentences.</p>' +
          '<p><strong>You have finished A1!</strong> With the Perfekt you can now talk about the past, the present and plans — the three time levels you need for the <em>Goethe-Zertifikat A1</em> or <em>telc Deutsch A1</em> exam.</p>',

        recap: [
          { group: '✅ Perfekt mit haben', rows: [
            ['Ich habe gearbeitet.', 'I worked.'], ['gemacht', 'done'], ['gekauft', 'bought'], ['gegessen', 'eaten'],
            ['getrunken', 'drunk'], ['gesehen', 'seen'], ['gelesen', 'read'], ['geschlafen', 'slept']
          ] },
          { group: '🚶 Perfekt mit sein', rows: [
            ['Ich bin gefahren.', 'I travelled.'], ['gegangen', 'gone'], ['gekommen', 'come'], ['geflogen', 'flown'],
            ['aufgestanden', 'got up'], ['geblieben', 'stayed'], ['gewesen', 'been']
          ] },
          { group: '🧩 Partizip II', rows: [
            ['ge- … -t', 'gemacht, gekauft'], ['ge- … -en', 'geschrieben, gefunden'], ['eingekauft', 'separable'],
            ['besucht / verstanden', 'no ge-'], ['studiert', '-ieren: no ge-']
          ] },
          { group: '🕰️ war / hatte', rows: [
            ['ich war', 'I was'], ['wir waren', 'we were'], ['ich hatte', 'I had'], ['wir hatten', 'we had'],
            ['es gab', 'there was'], ['ich konnte', 'I could'], ['ich musste', 'I had to']
          ] },
          { group: '📔 Erzählen', rows: [
            ['gestern', 'yesterday'], ['letzte Woche', 'last week'], ['vor zwei Tagen', 'two days ago'],
            ['zuerst / dann / danach', 'first / then / after that'], ['Es war super.', 'It was great.']
          ] }
        ],

        sentences: [
          { de: 'Ich habe gestern lange gearbeitet', en: 'I worked late yesterday' },
          { de: 'Wir sind nach München gefahren', en: 'We went to Munich' },
          { de: 'Am Wochenende war ich krank', en: 'At the weekend I was ill' },
          { de: 'Ich hatte keine Zeit', en: 'I had no time' },
          { de: 'Zuerst haben wir gefrühstückt', en: 'First we had breakfast' },
          { de: 'Danach bin ich ins Kino gegangen', en: 'After that I went to the cinema' }
        ]
      },
    ]
  };
})();
