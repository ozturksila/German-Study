/* B2 — Vantage.
   Units 1–3 are written out in full — lessons, unit practice, reading, listening,
   writing (AI-marked) and the recap that feeds flashcards and checkpoints.
   Units 4–14 are still outline only. */
(function () {
  window.LEVELS = window.LEVELS || {};
  function t(icon, title, note) { return { icon: icon, title: title, note: note }; }
  function U(title, subject, topics, canDo, grammarFocus) {
    return { title: title, subject: subject, topics: topics, canDo: canDo, grammarFocus: grammarFocus,
             culture: null, recap: null, sentences: [],
             exercises: null, reading: null, listening: null, writing: null };
  }

  window.LEVELS.b2 = {
    code: 'b2', label: 'B2', name: 'Oberstufe — Vantage',
    goal: 'Follow complex texts and discussions, argue a point of view in detail, and write clear, structured texts.',
    units: [
      { // ===== B2 UNIT 1 — written out in full =====
        title: '🗣️ Unit 1 — Reporting and Indirect Speech',
        subject: 'Indirekte Rede',
        canDo: ['Report what a source said without taking a position on whether it is true',
                'Recognise Konjunktiv I in the German press and know what it signals',
                'Summarise an article accurately, keeping your own voice out of it'],
        grammarFocus: ['Konjunktiv I, all persons', 'Tense mapping in indirect speech',
                       'Reported questions with ob and W-words', 'Reporting verbs and their nuances'],
        topics: [
          {
            icon: '📣', title: 'Konjunktiv I — the forms',
            explanation:
              '<p>Konjunktiv I exists for one job: to mark words as <em>somebody else\'s</em>. German newspapers use it constantly, and if you cannot read it you will misread who is claiming what.</p>' +
              '<p>It is built from the <strong>infinitive stem</strong> plus the endings <strong>-e, -est, -e, -en, -et, -en</strong>. No vowel change, no irregularity — even <span class="de">haben</span> and <span class="de">können</span> behave: <span class="de">er habe</span>, <span class="de">er könne</span>. ' +
              'The awkward part is that for most verbs only the <strong>3rd person singular</strong> actually looks different from the normal present tense: <span class="de">er sage</span> vs <span class="de">er sagt</span>. ' +
              'Everything else (<span class="de">wir sagen</span>, <span class="de">sie sagen</span>) is identical to the indicative and therefore useless as a signal.</p>' +
              '<p>German solves this with a simple substitution: <strong>where the Konjunktiv I form is not distinct, you switch to Konjunktiv II</strong> — and where that is also unclear, to <span class="de">würde</span> + infinitive. ' +
              'The one verb that never needs this is <span class="de">sein</span>, which is distinct in every person. That is why <span class="de">sei</span> and <span class="de">seien</span> are far and away the most common Konjunktiv I forms you will meet.</p>',
            vocab: formTable('Konjunktiv I — the endings on four verbs', ['', 'sagen', 'haben', 'können', 'sein'], [
              ['ich', 'sage', 'habe', 'könne', '<strong>sei</strong>'],
              ['du', 'sagest', 'habest', 'könnest', '<strong>seist</strong>'],
              ['er / sie / es', '<strong>sage</strong>', '<strong>habe</strong>', '<strong>könne</strong>', '<strong>sei</strong>'],
              ['wir', 'sagen', 'haben', 'können', '<strong>seien</strong>'],
              ['ihr', 'saget', 'habet', 'könnet', '<strong>seiet</strong>'],
              ['sie / Sie', 'sagen', 'haben', 'können', '<strong>seien</strong>']
            ]) +
            '<p class="note">Bold = distinct from the indicative, so usable. Everything else is replaced, as below.</p>',
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>The substitution rule.</strong> Work down this ladder and stop at the first form that is unambiguous:</p>' +
              '<ul class="goals">' +
              '<li><strong>1. Konjunktiv I</strong> if it differs from the indicative — <em>er sagt → er sage</em></li>' +
              '<li><strong>2. Konjunktiv II</strong> if it does not — <em>sie sagen → sie sagten</em></li>' +
              '<li><strong>3. würde + Infinitiv</strong> if Konjunktiv II is also ambiguous or sounds archaic — <em>sie sagten → sie würden sagen</em></li>' +
              '</ul>' +
              '<div class="example-box">' +
              '<strong>Direkt:</strong> „Ich bin müde." → <strong>Indirekt:</strong> Er sagt, er <strong>sei</strong> müde.<br>' +
              '<strong>Direkt:</strong> „Wir haben keine Zeit." → <strong>Indirekt:</strong> Sie sagen, sie <strong>hätten</strong> keine Zeit. ' +
              '<span class="note">(haben → Konj. I „haben" = indicative, so Konj. II)</span><br>' +
              '<strong>Direkt:</strong> „Die Preise steigen." → <strong>Indirekt:</strong> Er meint, die Preise <strong>würden steigen</strong>. ' +
              '<span class="note">(or: die Preise stiegen — both are used)</span>' +
              '</div>' +
              '<p class="note">Note that <span class="de">dass</span> is optional, and in careful written German usually left out. Without <span class="de">dass</span> the clause keeps normal main-clause word order: <em>Er sagt, er sei müde</em> — not <em>…, er müde sei</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('„Ich bin krank." → Er sagt, er ___________ krank.', 'sei'),
              exInput('„Sie hat recht." → Er sagt, sie ___________ recht.', 'habe'),
              exInput('„Ich kann nicht kommen." → Sie sagt, sie ___________ nicht kommen.', 'könne'),
              exInput('„Wir sind bereit." → Sie sagen, sie ___________ bereit.', 'seien'),
              exSelect('„Wir haben keine Zeit." → Sie sagen, sie ___ keine Zeit.', 'hätten', ['haben', 'hätten', 'habe']),
              exSelect('Why not „sie haben" in the sentence above?', 'Because it would look identical to the indicative', ['Because haben has no Konjunktiv I', 'Because it would look identical to the indicative', 'Because haben is irregular']),
              exSelect('Which Konjunktiv I form is distinct in every person?', 'sein', ['haben', 'sein', 'werden', 'können']),
              exInput('„Das Wetter wird besser." → Er sagt, das Wetter ___________ besser.', 'werde')
            ])
          },
          {
            icon: '📰', title: 'Reporting in the press',
            explanation:
              '<p>In German journalism Konjunktiv I is not decoration — it is a <strong>disclaimer</strong>. Compare:</p>' +
              '<p><span class="de">Die Ministerin sagte, die Lage <strong>sei</strong> ernst.</span> — the paper reports her claim and takes no position on it.<br>' +
              '<span class="de">Die Ministerin sagte, die Lage <strong>ist</strong> ernst.</span> — the paper is now also asserting it.</p>' +
              '<p>That distinction is why a German reader can tell, sentence by sentence, where the reporting stops and the claim begins. Using the indicative for a contested claim is a stance, and a careless B2 writer takes it by accident.</p>' +
              '<p>The second thing to control is the <strong>reporting verb</strong>. <span class="de">sagen</span> is neutral; <span class="de">behaupten</span> implies you doubt it; <span class="de">einräumen</span> implies it was conceded reluctantly; <span class="de">betonen</span> implies emphasis. ' +
              'Examiners at B2 notice whether you vary these or write <span class="de">er sagt</span> twelve times.</p>',
            vocab: vocabTable([
              ['sagen', 'to say', 'neutral'],
              ['erklären', 'to explain, to state', 'neutral, slightly formal'],
              ['mitteilen', 'to announce, to inform', 'official communication'],
              ['betonen', 'to stress, to emphasise', 'the source insists on it'],
              ['hinzufügen', 'to add', 'a further point'],
              ['behaupten', 'to claim', 'you signal doubt'],
              ['bestreiten', 'to deny, to dispute', 'the source rejects it'],
              ['einräumen', 'to concede, to admit', 'reluctantly granted'],
              ['zugeben', 'to admit', 'an admission of fault'],
              ['kritisieren', 'to criticise', ''],
              ['warnen (vor)', 'to warn (of)', ''],
              ['fordern', 'to demand, to call for', ''],
              ['versichern', 'to assure', ''],
              ['bezweifeln', 'to doubt', ''],
              ['laut + Dativ', 'according to', 'laut dem Bericht'],
              ['zufolge + Dativ', 'according to', 'follows its noun: dem Bericht zufolge'],
              ['angeblich', 'allegedly, supposedly', 'marks a claim as unverified']
            ], ['🇩🇪 Deutsch', '🇬🇧 English', '📝 What it signals']),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Tenses do not shift the way they do in English.</strong> German has only three indirect tenses, and the original tense maps onto them:</p>' +
              formTable('', ['Original', 'Indirect', 'Example'], [
                ['Präsens', 'Konjunktiv I <strong>Präsens</strong>', '„Ich arbeite." → Er sagt, er <strong>arbeite</strong>.'],
                ['Perfekt / Präteritum / Plusquamperfekt', 'Konjunktiv I <strong>Perfekt</strong><br>(habe / sei + Partizip II)', '„Ich habe gearbeitet." / „Ich arbeitete." → Er sagt, er <strong>habe gearbeitet</strong>.'],
                ['Futur I', 'werde + Infinitiv', '„Ich werde arbeiten." → Er sagt, er <strong>werde arbeiten</strong>.']
              ]) +
              '<p class="note">All three past tenses collapse into <strong>one</strong> indirect past. This is simpler than English, not harder — there is no „backshift" to worry about.</p>' +
              '<div class="example-box">' +
              'Der Sprecher erklärte, man <strong>habe</strong> alle Optionen geprüft. — The spokesman stated that all options had been examined.<br>' +
              'Die Firma räumte ein, es <strong>seien</strong> Fehler gemacht worden. — The company conceded that mistakes had been made.<br>' +
              'Dem Bericht <strong>zufolge</strong> <strong>werde</strong> die Regelung im Mai in Kraft treten. — According to the report, the rule will come into force in May.' +
              '</div>' +
              '</div>',
            dialogs: dialogBox('Aus einer Nachrichtensendung', [
              ['Sprecherin', 'Die Bundesregierung hat heute neue Zahlen vorgelegt.'],
              ['Sprecherin', 'Die Ministerin erklärte, die Entwicklung sei erfreulich, man dürfe aber nicht nachlassen.'],
              ['Sprecherin', 'Kritiker bestreiten das. Der Opposition zufolge seien die Zahlen geschönt.'],
              ['Sprecherin', 'Das Ministerium wies die Vorwürfe zurück und betonte, alle Daten seien geprüft worden.']
            ]),
            exercises: exerciseList([
              exInput('„Wir haben alles geprüft." → Der Sprecher sagte, man ___________ alles geprüft.', 'habe'),
              exInput('„Ich werde zurücktreten." → Er kündigte an, er ___________ zurücktreten.', 'werde'),
              exInput('„Es wurden Fehler gemacht." → Die Firma räumte ein, es ___________ Fehler gemacht worden.', 'seien'),
              exSelect('Which reporting verb signals that the writer doubts the claim?', 'behaupten', ['erklären', 'behaupten', 'mitteilen', 'betonen']),
              exSelect('Which signals that something was admitted reluctantly?', 'einräumen', ['betonen', 'einräumen', 'fordern', 'versichern']),
              exSelect('„Die Lage <em>ist</em> ernst, sagte sie." — what does the indicative signal here?', 'The paper is asserting it as fact too', ['The paper is asserting it as fact too', 'The paper doubts her', 'Nothing — it is the same as sei']),
              exInput('Complete: Dem Bericht ___________ steigen die Kosten. (according to)', 'zufolge'),
              exInput('„Ich arbeitete den ganzen Tag." → Sie sagte, sie ___________ den ganzen Tag gearbeitet.', 'habe')
            ])
          },
          {
            icon: '🔁', title: 'Konjunktiv I, würde, or plain indicative?',
            explanation:
              '<p>All three are correct German. They differ in <strong>register</strong> and in <strong>how much distance you take</strong>, and choosing between them deliberately is exactly what B2 is testing.</p>' +
              '<p><strong>Konjunktiv I</strong> belongs to written, formal reporting: press, minutes, reports, academic summary. It is neutral about truth — it only says „this is their claim".</p>' +
              '<p><strong>Konjunktiv II / würde</strong> is what spoken German reaches for when Konjunktiv I would be ambiguous or sound stiff. In speech it can also carry a faint note of scepticism, depending on the tone.</p>' +
              '<p><strong>Indicative with dass</strong> is the everyday option — <span class="de">Er hat gesagt, dass er müde ist.</span> Completely normal in conversation, but in a formal written text it reads as though you endorse the claim. In an exam summary, that is a content error, not just a style one.</p>',
            vocab: formTable('', ['Register', 'Form', 'Example'], [
              ['Press, formal writing', 'Konjunktiv I', 'Er erklärte, er <strong>sei</strong> nicht informiert worden.'],
              ['Careful speech, ambiguous forms', 'Konjunktiv II / würde', 'Sie sagten, sie <strong>hätten</strong> nichts gewusst.'],
              ['Everyday speech', 'Indikativ + dass', 'Er hat gesagt, <strong>dass</strong> er müde <strong>ist</strong>.'],
              ['Distancing, informal', 'angeblich / soll', 'Er <strong>soll</strong> krank sein. / <strong>Angeblich</strong> ist er krank.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>One more distancing device worth having at B2: the <strong>subjective modal verbs</strong>.</p>' +
              '<ul class="goals">' +
              '<li><span class="de">Er <strong>soll</strong> krank sein.</span> — He is said to be ill. <span class="note">(someone else claims it)</span></li>' +
              '<li><span class="de">Er <strong>will</strong> nichts gewusst haben.</span> — He claims to have known nothing. <span class="note">(he claims it about himself, and you are sceptical)</span></li>' +
              '<li><span class="de">Er <strong>dürfte</strong> recht haben.</span> — He is probably right. <span class="note">(your own cautious estimate)</span></li>' +
              '</ul>' +
              '<p class="note"><span class="de">sollen</span> and <span class="de">wollen</span> in this use are a compact alternative to a whole reporting clause, and they are extremely common in journalism.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('You are writing a formal summary of an article. Which do you use?', 'Konjunktiv I', ['Konjunktiv I', 'Indikativ mit dass', 'würde + Infinitiv']),
              exSelect('„Er <em>soll</em> krank sein" means:', 'He is said to be ill', ['He should be ill', 'He is said to be ill', 'He must be ill']),
              exSelect('„Er <em>will</em> nichts gewusst haben" means:', 'He claims to have known nothing', ['He wants to know nothing', 'He claims to have known nothing', 'He will not know anything']),
              exInput('Rewrite informally: „Er sagte, er sei müde." → Er hat gesagt, ___________ er müde ist.', 'dass'),
              exSelect('In a B2 exam summary, writing „Der Autor sagt, dass die Maßnahme gut <em>ist</em>" is:', 'risky — it reads as if you share the opinion', ['perfectly fine', 'risky — it reads as if you share the opinion', 'grammatically wrong']),
              exInput('Your own cautious estimate that he is right: Er ___________ recht haben.', 'dürfte')
            ])
          },
          {
            icon: '❓', title: 'Reported questions and requests',
            explanation:
              '<p>Questions lose their question mark and their question word order when they are reported, and become subordinate clauses with the <strong>verb at the end</strong>.</p>' +
              '<p>A <strong>yes/no question</strong> needs <span class="de">ob</span>, which has no equivalent in the direct question: „Kommst du?" → <span class="de">Er fragte, <strong>ob</strong> ich <strong>käme</strong>.</span> ' +
              'A <strong>W-question</strong> keeps its W-word, which now does the work of the conjunction: „Wo wohnst du?" → <span class="de">Er fragte, <strong>wo</strong> ich <strong>wohne</strong>.</span></p>' +
              '<p><strong>Imperatives</strong> have no Konjunktiv of their own, so German reports them with a modal: <span class="de">sollen</span> for instructions and <span class="de">mögen</span> for polite requests. ' +
              '„Warten Sie!" → <span class="de">Er sagte, ich <strong>solle</strong> warten.</span> „Bitte helfen Sie mir." → <span class="de">Sie bat, ich <strong>möge</strong> ihr helfen.</span> ' +
              'The <span class="de">möge</span> version is markedly formal and now sounds slightly old-fashioned outside written requests.</p>',
            vocab: formTable('', ['Direct', 'Reported'], [
              ['„Kommst du mit?"', 'Er fragte, <strong>ob</strong> ich mitkäme / mitkommen würde.'],
              ['„Wo arbeiten Sie?"', 'Sie fragte, <strong>wo</strong> ich arbeite.'],
              ['„Warum hast du das gemacht?"', 'Er wollte wissen, <strong>warum</strong> ich das gemacht habe.'],
              ['„Warten Sie bitte!"', 'Er sagte, ich <strong>solle</strong> warten.'],
              ['„Bitte schicken Sie die Unterlagen."', 'Sie bat, ich <strong>möge</strong> die Unterlagen schicken.'],
              ['„Mach das nicht!"', 'Er sagte, ich <strong>solle</strong> das nicht machen.']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>Three things change at once, and B2 writers typically forget the third:</p>' +
              '<ul class="goals">' +
              '<li>the <strong>conjunction</strong> appears — <span class="de">ob</span> or the W-word</li>' +
              '<li>the <strong>verb moves to the end</strong> — it is a subordinate clause now</li>' +
              '<li>the <strong>pronouns shift perspective</strong> — „Kommst <em>du</em>?" reported by the person addressed becomes „ob <em>ich</em> …"</li>' +
              '</ul>' +
              '<div class="example-box">' +
              '„Hast du meine Mail bekommen?" → Er fragte, <strong>ob ich seine Mail bekommen hätte</strong>.<br>' +
              '<span class="note">ob · verb at the end · du→ich, meine→seine</span>' +
              '</div>' +
              '<p class="note">Indirect questions also appear without any reporting verb at all, as polite questions: <span class="de">Können Sie mir sagen, wo der Bahnhof ist?</span> Same structure, same verb-final rule.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('„Kommst du mit?" → Er fragte, ___________ ich mitkäme.', 'ob'),
              exInput('„Wo wohnst du?" → Sie fragte, wo ich ___________. (wohnen)', 'wohne'),
              exInput('„Warten Sie!" → Er sagte, ich ___________ warten.', 'solle'),
              exSelect('Why is there no „ob" in „Sie fragte, wo ich wohne"?', 'The W-word already connects the clause', ['Because it is a polite question', 'The W-word already connects the clause', 'Because wohnen is regular']),
              exInput('„Hast du Zeit?" → Er wollte wissen, ob ich Zeit ___________.', 'hätte|habe'),
              exSelect('In a reported question the verb goes:', 'at the end of the clause', ['in second position', 'at the end of the clause', 'first, as in a question']),
              exInput('Complete the polite indirect question: Können Sie mir sagen, wann der Zug ___________? (abfahren)', 'abfährt')
            ])
          },
          {
            icon: '✍️', title: 'Summarising a source',
            explanation:
              '<p>A <em>Zusammenfassung</em> is the text type where all of this comes together, and it has strict conventions. Two voices run through it and must not be mixed up:</p>' +
              '<p><strong>Your frame</strong> — what the text is and does — is in the <strong>present indicative</strong>: <span class="de">Der Artikel thematisiert …</span>, <span class="de">Der Autor geht der Frage nach, ob …</span><br>' +
              '<strong>The author\'s claims</strong> are in <strong>indirect speech</strong>: <span class="de">Der Autor argumentiert, die Maßnahme <strong>sei</strong> wirkungslos.</span></p>' +
              '<p>What a summary must <em>not</em> contain: your own opinion, quotations copied out at length, examples the original used, or the word <span class="de">ich</span>. ' +
              'A B2 examiner is checking precisely whether you can stay out of the text — and indirect speech is the grammatical tool that lets you.</p>' +
              '<p>The standard opening sentence is almost formulaic, and worth learning as a block: <span class="de">In dem Artikel „…", erschienen in … am …, geht es um …</span></p>',
            vocab: vocabTable([
              ['In dem Artikel „…" geht es um …', 'The article "…" is about …'],
              ['Der Text thematisiert …', 'The text deals with …'],
              ['Der Autor geht der Frage nach, ob …', 'The author examines the question of whether …'],
              ['Zunächst stellt der Autor fest, …', 'First the author states …'],
              ['Er vertritt die Auffassung, …', 'He takes the view that …'],
              ['Als Begründung führt er an, …', 'As justification he cites …'],
              ['Darüber hinaus weist er darauf hin, …', 'Moreover he points out …'],
              ['Im Gegensatz dazu argumentiert …', 'In contrast, … argues'],
              ['Abschließend fordert der Autor, …', 'Finally the author calls for …'],
              ['Zusammenfassend lässt sich sagen, …', 'In summary one can say …'],
              ['die Zusammenfassung', 'the summary'],
              ['die Quelle', 'the source'],
              ['die Auffassung', 'the view, the opinion'],
              ['die These', 'the thesis, the claim'],
              ['das Argument', 'the argument']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>The two voices, side by side:</strong></p>' +
              '<div class="example-box">' +
              'In dem Artikel „Vier Tage reichen", erschienen in der Zeit am 3. März, <strong>geht es</strong> um die Vier-Tage-Woche. ' +
              '<span class="note">(your frame — indicative)</span><br>' +
              'Die Autorin <strong>vertritt die Auffassung</strong>, eine kürzere Woche <strong>steigere</strong> die Produktivität und <strong>senke</strong> die Zahl der Krankheitstage. ' +
              '<span class="note">(her claim — Konjunktiv I)</span><br>' +
              'Kritiker, so die Autorin, <strong>hätten</strong> bislang keine belastbaren Gegenbelege vorgelegt. ' +
              '<span class="note">(a claim within a claim — Konjunktiv II, because „haben" would be ambiguous)</span>' +
              '</div>' +
              '<p class="note">Notice <span class="de">so die Autorin</span> — a compact journalistic insertion meaning „according to the author". It saves a whole clause and is worth stealing.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Complete the standard opening: In dem Artikel „Vier Tage reichen" ___________ es um die Vier-Tage-Woche.', 'geht'),
              exSelect('Which belongs in a summary?', 'Der Autor vertritt die Auffassung, die Maßnahme sei wirkungslos.', ['Ich finde die Maßnahme wirkungslos.', 'Der Autor vertritt die Auffassung, die Maßnahme sei wirkungslos.', 'Die Maßnahme ist wirkungslos.']),
              exSelect('The frame of a summary („Der Text thematisiert…") is written in:', 'the present indicative', ['the present indicative', 'Konjunktiv I', 'Konjunktiv II']),
              exInput('„Die Autorin sagt: Eine kürzere Woche steigert die Produktivität." → Die Autorin argumentiert, eine kürzere Woche ___________ die Produktivität.', 'steigere'),
              exInput('What does the insertion „so die Autorin" mean in English? (three words)', 'according to the author|according to her'),
              exSelect('Which must NOT appear in a Zusammenfassung?', 'your own opinion', ['the source and date', 'the main thesis', 'your own opinion']),
              exInput('Finish the closing phrase: Zusammenfassend lässt ___________ sagen, dass …', 'sich')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: forms, tense mapping, reported questions, reporting verbs and summary conventions together — the way they turn up in an exam.</p>',
        exercises: exerciseList([
          exInput('„Ich habe das nicht gewusst." → Er behauptete, er ___________ das nicht gewusst.', 'habe'),
          exInput('„Wir werden die Preise senken." → Das Unternehmen kündigte an, man ___________ die Preise senken.', 'werde'),
          exInput('„Sind Sie zufrieden?" → Sie fragte, ___________ ich zufrieden sei.', 'ob'),
          exInput('„Rufen Sie mich morgen an!" → Er sagte, ich ___________ ihn morgen anrufen.', 'solle'),
          exSelect('„Die Zahlen seien geprüft worden" is which tense of indirect speech?', 'indirect past', ['indirect present', 'indirect past', 'indirect future']),
          exSelect('Pick the reporting verb for a claim the writer disputes:', 'behaupten', ['betonen', 'behaupten', 'mitteilen', 'erklären']),
          exSelect('Pick the reporting verb for something admitted reluctantly:', 'einräumen', ['einräumen', 'fordern', 'versichern', 'hinzufügen']),
          exInput('„Die Kosten steigen", heißt es im Bericht. → Dem Bericht ___________ steigen die Kosten.', 'zufolge'),
          exInput('He is said to be ill: Er ___________ krank sein.', 'soll'),
          exInput('He claims to have known nothing: Er ___________ nichts gewusst haben.', 'will'),
          exSelect('In „Er fragte, wo ich wohne" the verb „wohne" stands:', 'at the end', ['in second position', 'at the end', 'first']),
          exInput('„Wir sind nicht informiert worden." → Sie erklärten, sie ___________ nicht informiert worden.', 'seien')
        ]),

        reading: {
          intro: 'A press-style commentary — the genre where indirect speech does its real work. Read it once for the argument, then once more watching <strong>who</strong> is claiming each thing.',
          words: 330, minutes: 8,
          text: readingText('Vier Tage arbeiten, fünf Tage bezahlt bekommen?', [
            'Die Debatte über die Vier-Tage-Woche ist in Deutschland angekommen. Mehrere Unternehmen haben in den vergangenen Monaten Pilotprojekte gestartet, bei denen die Beschäftigten bei vollem Lohn einen Tag weniger arbeiten. Die Ergebnisse, so die Initiatoren, seien ermutigend: Die Produktivität sei stabil geblieben, die Zahl der Krankheitstage sogar gesunken.',
            'Die Gewerkschaften begrüßen die Entwicklung. Eine Sprecherin der IG Metall erklärte, die Arbeitszeitverkürzung sei „längst überfällig". Beschäftigte, die sich erholen könnten, arbeiteten konzentrierter und blieben dem Betrieb länger erhalten. Kritik an den Pilotprojekten wies sie zurück: Die vorliegenden Zahlen seien von unabhängigen Instituten geprüft worden.',
            'Arbeitgeberverbände sehen das anders. Ihr Hauptgeschäftsführer räumte zwar ein, dass einzelne Branchen von flexibleren Modellen profitieren könnten. Eine generelle Verkürzung jedoch, so warnte er, würde den Fachkräftemangel verschärfen. In der Pflege und im Handwerk fehlten schon heute Zehntausende Arbeitskräfte; wer dort einen Tag weniger arbeite, müsse ersetzt werden — und es gebe niemanden, der ersetzen könne.',
            'Wirtschaftsforscher mahnen zur Vorsicht. Die bisherigen Studien, heißt es in einer aktuellen Analyse, beruhten überwiegend auf Unternehmen, die sich freiwillig gemeldet hätten. Solche Betriebe seien tendenziell gut organisiert und ohnehin produktiv. Ob sich die Ergebnisse auf die gesamte Wirtschaft übertragen ließen, sei damit offen.',
            'Unstrittig ist allein der Befund, dass sich die Erwartungen an Arbeit verändert haben. In Umfragen nennen jüngere Beschäftigte Zeitsouveränität regelmäßig vor dem Gehalt. Ein Personalberater formulierte es zuletzt so: Wer heute qualifizierte Leute halten wolle, müsse ihnen nicht mehr Geld bieten, sondern mehr Zeit.'
          ], 'Kommentar, fiktiv — im Stil der deutschen Wirtschaftspresse'),
          glossary: vocabTable([
            ['die Arbeitszeitverkürzung', 'reduction in working hours'],
            ['der Fachkräftemangel', 'shortage of skilled workers'],
            ['die Zeitsouveränität', 'control over one\'s own time'],
            ['belastbar', 'robust, reliable (of data)'],
            ['überfällig', 'overdue'],
            ['verschärfen', 'to intensify, to worsen'],
            ['zur Vorsicht mahnen', 'to urge caution'],
            ['unstrittig', 'undisputed'],
            ['der Befund', 'the finding'],
            ['übertragen auf', 'to transfer to, to generalise to']
          ]),
          questions: exerciseList([
            exSelect('Was behaupten die Initiatoren der Pilotprojekte?', 'Die Produktivität sei gleich geblieben und es gab weniger Krankheitstage.', ['Die Produktivität sei gestiegen und die Löhne gesunken.', 'Die Produktivität sei gleich geblieben und es gab weniger Krankheitstage.', 'Die Produktivität sei gesunken, aber die Zufriedenheit gestiegen.']),
            exTF('Der Arbeitgeberverband lehnt flexiblere Arbeitszeitmodelle vollständig ab.', false),
            exSelect('Welches Hauptargument nennt der Arbeitgeberverband gegen eine generelle Verkürzung?', 'Es gibt in manchen Branchen niemanden, der die fehlenden Stunden übernehmen könnte.', ['Die Löhne würden zu stark steigen.', 'Es gibt in manchen Branchen niemanden, der die fehlenden Stunden übernehmen könnte.', 'Die Beschäftigten würden unkonzentrierter arbeiten.']),
            exSelect('Warum mahnen die Wirtschaftsforscher zur Vorsicht?', 'Die untersuchten Firmen haben sich freiwillig gemeldet und sind nicht repräsentativ.', ['Die Studien wurden von Gewerkschaften bezahlt.', 'Die untersuchten Firmen haben sich freiwillig gemeldet und sind nicht repräsentativ.', 'Es gibt bisher überhaupt keine Studien.']),
            exTF('Laut Umfragen ist jüngeren Beschäftigten das Gehalt wichtiger als die freie Zeit.', false),
            exInput('Der Text benutzt durchgehend den Konjunktiv I. Was signalisiert das? Antworte auf Englisch, in einem kurzen Satz.', 'that these are other people\'s claims, not the writer\'s own position|that the writer is reporting claims and not endorsing them|the claims belong to the sources', 'one short sentence', 'en'),
            exInput('Finde im dritten Absatz das Verb, das „reluctantly admitted" bedeutet.', 'einräumen|räumte ein|einräumte'),
            exInput('Mit welchem Wort führt der Text die Position der Gewerkschaft ein? „Eine Sprecherin der IG Metall ___________, die Arbeitszeitverkürzung sei überfällig."', 'erklärte')
          ])
        },

        listening: {
          title: 'Radiointerview — Vier-Tage-Woche im Betrieb',
          intro: 'A radio interview with a company owner. Listen <strong>once</strong> before you answer — that is how B2 exams work. Then check with the transcript.',
          lines: [
            ['Moderatorin', 'Herr Lindner, Ihr Betrieb hat vor einem Jahr auf die Vier-Tage-Woche umgestellt. War das ein Experiment oder eine Überzeugung?'],
            ['Lindner', 'Ehrlich gesagt war es zuerst Notwehr. Wir haben acht Monate lang vergeblich zwei Stellen ausgeschrieben. Niemand hat sich beworben.'],
            ['Moderatorin', 'Und mit der kürzeren Woche kamen die Bewerbungen?'],
            ['Lindner', 'Innerhalb von drei Wochen hatten wir vierzig. Das hat uns selbst überrascht.'],
            ['Moderatorin', 'Kritiker sagen, das funktioniere nur in Büroberufen. Sie sind im Handwerk.'],
            ['Lindner', 'Das höre ich oft. Bei uns sind die Maschinen freitags aus, das stimmt. Aber wir haben die Abläufe umgestellt, und die Aufträge schaffen wir trotzdem.'],
            ['Moderatorin', 'Hat sich die Produktivität verändert?'],
            ['Lindner', 'Pro Stunde ist sie gestiegen, insgesamt liegen wir etwa gleich. Was deutlich gesunken ist, sind die Krankmeldungen — fast um ein Drittel.'],
            ['Moderatorin', 'Und der Lohn?'],
            ['Lindner', 'Voller Lohn, keine Kürzung. Sonst wäre es ja auch kein Angebot, sondern eine Zumutung.'],
            ['Moderatorin', 'Würden Sie das jedem Betrieb empfehlen?'],
            ['Lindner', 'Nein. Wer ohnehin am Limit arbeitet, verschiebt damit nur das Problem. Man muss vorher die Prozesse aufräumen. Wir haben ein halbes Jahr geplant, bevor wir umgestellt haben.']
          ],
          questions: exerciseList([
            exSelect('Warum hat der Betrieb ursprünglich umgestellt?', 'Er fand keine neuen Mitarbeiter.', ['Die Mitarbeiter haben es gefordert.', 'Er fand keine neuen Mitarbeiter.', 'Ein Berater hat es empfohlen.']),
            exInput('Wie viele Bewerbungen kamen nach der Umstellung — und in welchem Zeitraum? (Zahl + Wochen)', '40 in drei wochen|vierzig in drei wochen|40 in 3 wochen'),
            exTF('Herr Lindner arbeitet in einem Büroberuf.', false),
            exSelect('Was sagt er über die Produktivität?', 'Pro Stunde gestiegen, insgesamt etwa gleich', ['Insgesamt deutlich gestiegen', 'Pro Stunde gestiegen, insgesamt etwa gleich', 'Deutlich gesunken']),
            exSelect('Um wie viel sind die Krankmeldungen gesunken?', 'um etwa ein Drittel', ['um die Hälfte', 'um etwa ein Drittel', 'um ein Viertel']),
            exTF('Die Mitarbeiter bekommen bei vier Tagen weniger Lohn.', false),
            exSelect('Wem würde er das Modell NICHT empfehlen?', 'Betrieben, die schon am Limit arbeiten', ['Kleinen Betrieben', 'Betrieben, die schon am Limit arbeiten', 'Betrieben im Handwerk']),
            exInput('Wie lange hat der Betrieb geplant, bevor er umgestellt hat?', 'ein halbes jahr|sechs monate|6 monate|halbes jahr')
          ])
        },

        writing: {
          title: 'Forumsbeitrag — Vier-Tage-Woche',
          textType: 'Forumsbeitrag / Stellungnahme',
          minWords: 150, maxWords: 200, minutes: 40,
          expect: ['opinion', 'arguments', 'examples', 'counter', 'conclusion', 'indirect'],
          task: '<p>In einem Online-Forum zum Thema Arbeit lesen Sie den folgenden Beitrag:</p>' +
            '<p><em>„Vier Tage arbeiten und voll bezahlt werden — das klingt schön, ist aber eine Illusion. Wer weniger arbeitet, produziert weniger. Am Ende zahlen die Kunden drauf."</em></p>' +
            '<p>Schreiben Sie einen Beitrag, in dem Sie dazu Stellung nehmen.</p>',
          plainTask: 'Write a forum post (150–200 words) taking a position on this statement: "Working four days and being paid in full sounds nice but is an illusion. Whoever works less produces less. In the end the customers pay for it." The post must: state a clear position; give at least two arguments with examples or reasons; address one counter-argument; close with a conclusion. Register: polite, semi-formal written German, addressing other forum readers.',
          bullets: [
            'Nehmen Sie klar Stellung: Stimmen Sie zu oder nicht?',
            'Begründen Sie Ihre Position mit <strong>mindestens zwei</strong> Argumenten und Beispielen.',
            'Gehen Sie auf <strong>ein Gegenargument</strong> ein und entkräften Sie es.',
            'Schließen Sie mit einem kurzen Fazit.',
            'Geben Sie mindestens einmal die Position eines anderen in <strong>indirekter Rede</strong> wieder.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Position beziehen', 'Meiner Ansicht nach … · Ich bin der Auffassung, dass … · Dem kann ich nur teilweise zustimmen.'],
            ['Argument einführen', 'Dafür spricht vor allem, dass … · Ein gewichtiges Argument ist … · Hinzu kommt, dass …'],
            ['Beispiel geben', 'Ein Beispiel dafür ist … · Dies zeigt sich etwa daran, dass …'],
            ['Andere zitieren', 'Befürworter argumentieren, die Produktivität <strong>bleibe</strong> stabil. · Kritiker wenden ein, es <strong>fehlten</strong> belastbare Daten.'],
            ['Gegenargument aufgreifen', 'Zwar …, aber … · Es wird häufig eingewendet, dass … · Dieses Argument überzeugt mich jedoch nicht, denn …'],
            ['Einschränken', 'allerdings · freilich · in gewissem Maße · unter bestimmten Voraussetzungen'],
            ['Fazit ziehen', 'Abschließend lässt sich festhalten, dass … · Insgesamt überwiegen für mich die Vorteile.']
          ]),
          criteria: [
            'Ich habe eine klare Position formuliert — man weiß nach dem ersten Absatz, wo ich stehe.',
            'Ich habe mindestens zwei Argumente genannt und jedes begründet oder mit einem Beispiel gestützt.',
            'Ich bin auf ein Gegenargument eingegangen und habe es entkräftet, nicht nur erwähnt.',
            'Ich habe mindestens einmal indirekte Rede benutzt (Konjunktiv I oder II).',
            'Mein Text hat einen erkennbaren Schluss, kein abruptes Ende.',
            'Register: durchgehend höflich und schriftsprachlich, keine Umgangssprache.',
            'Ich habe verschiedene Konnektoren benutzt und nicht jeden Satz mit dem Subjekt begonnen.',
            'Ich liege zwischen 150 und 200 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Konjunktiv I is a press institution.</strong> German journalism treats the distinction between <span class="de">sie sagte, die Lage sei ernst</span> and ' +
          '<span class="de">sie sagte, die Lage ist ernst</span> as a matter of professional ethics, not style. The first reports; the second endorses. ' +
          'Press councils have criticised outlets for sliding into the indicative when reporting contested claims — it quietly turns an allegation into a fact.</p>' +
          '<p><strong>„Angeblich" is not neutral.</strong> It flags a claim as unverified and often as doubted. Used about a person, it is close to an accusation of lying. ' +
          'The safer neutral markers are <span class="de">laut</span>, <span class="de">zufolge</span> and plain Konjunktiv I.</p>' +
          '<p><strong>The media landscape.</strong> Germany\'s public broadcasters (ARD, ZDF, Deutschlandfunk) are funded by a household fee, the <span class="de">Rundfunkbeitrag</span>, ' +
          'which every household pays regardless of whether it owns a television — a recurring source of public argument. ' +
          'Quality press (FAZ, SZ, Zeit, Spiegel) sits apart from the <span class="de">Boulevard</span> (Bild), and Germans will often name the outlet when citing a story, because the outlet is read as part of the claim.</p>' +
          '<p><strong>Where you will meet Konjunktiv I besides the news:</strong> minutes of meetings (<span class="de">Protokolle</span>), academic summaries of other people\'s positions, ' +
          'legal and insurance correspondence reporting what a party stated, and job references. German <span class="de">Arbeitszeugnisse</span> are a genre of their own, ' +
          'legally required to be benevolent, and therefore written in a code where <span class="de">stets bemüht</span> — „always made an effort" — is a devastating verdict.</p>' +
          '<p><strong>In speech it is rarer.</strong> Outside broadcasting, most Germans report speech with <span class="de">dass</span> + indicative or with Konjunktiv II. ' +
          'Using full Konjunktiv I in a conversation sounds like you are reading the news aloud — correct, but noticeably formal.</p>',

        recap: [
          { group: '📣 Konjunktiv I — Formen', rows: [
            ['er sei', 'he is (reported)'],
            ['sie seien', 'they are (reported)'],
            ['er habe', 'he has (reported)'],
            ['er werde', 'he will (reported)'],
            ['er könne', 'he can (reported)'],
            ['er müsse', 'he must (reported)'],
            ['er wolle', 'he wants (reported)'],
            ['er solle', 'he should (reported instruction)'],
            ['er möge', 'he may (reported polite request)'],
            ['sie hätten', 'they have (reported, Konjunktiv II)']
          ] },
          { group: '📰 Verben des Sagens', rows: [
            ['erklären', 'to state, to explain'],
            ['mitteilen', 'to announce, to inform'],
            ['betonen', 'to stress, to emphasise'],
            ['hinzufügen', 'to add'],
            ['behaupten', 'to claim (writer signals doubt)'],
            ['bestreiten', 'to deny, to dispute'],
            ['einräumen', 'to concede, to admit reluctantly'],
            ['zugeben', 'to admit'],
            ['kritisieren', 'to criticise'],
            ['warnen vor', 'to warn of'],
            ['fordern', 'to demand, to call for'],
            ['versichern', 'to assure'],
            ['bezweifeln', 'to doubt'],
            ['zurückweisen', 'to reject (an accusation)'],
            ['einwenden', 'to object'],
            ['nachgehen', 'to look into, to pursue (a question)']
          ] },
          { group: '🔁 Distanz markieren', rows: [
            ['laut', 'according to'],
            ['zufolge', 'according to (follows its noun)'],
            ['angeblich', 'allegedly'],
            ['so der Autor', 'according to the author'],
            ['Er soll krank sein.', 'He is said to be ill.'],
            ['Er will nichts gewusst haben.', 'He claims to have known nothing.'],
            ['Er dürfte recht haben.', 'He is probably right.'],
            ['die Quelle', 'the source'],
            ['die Auffassung', 'the view'],
            ['die These', 'the thesis, the claim']
          ] },
          { group: '✍️ Zusammenfassen', rows: [
            ['Der Text thematisiert', 'The text deals with'],
            ['Der Autor vertritt die Auffassung', 'The author takes the view'],
            ['Als Begründung führt er an', 'As justification he cites'],
            ['Darüber hinaus weist er darauf hin', 'Moreover he points out'],
            ['Im Gegensatz dazu', 'In contrast'],
            ['Abschließend fordert er', 'Finally he calls for'],
            ['Zusammenfassend lässt sich sagen', 'In summary one can say'],
            ['die Zusammenfassung', 'the summary'],
            ['das Argument', 'the argument'],
            ['das Fazit', 'the conclusion']
          ] },
          { group: '💼 Thema Arbeit', rows: [
            ['die Arbeitszeitverkürzung', 'reduction in working hours'],
            ['der Fachkräftemangel', 'shortage of skilled workers'],
            ['die Zeitsouveränität', 'control over one\'s own time'],
            ['die Krankmeldung', 'sick note, sickness report'],
            ['der Betrieb', 'the company, the operation'],
            ['die Abläufe', 'the processes, the workflows'],
            ['belastbar', 'robust, reliable'],
            ['überfällig', 'overdue'],
            ['verschärfen', 'to intensify, to worsen'],
            ['unstrittig', 'undisputed'],
            ['der Befund', 'the finding'],
            ['die Zumutung', 'an unreasonable demand']
          ] }
        ],

        sentences: [
          { de: 'Er sagte, er sei nicht informiert worden', en: 'He said he had not been informed' },
          { de: 'Sie fragte, ob ich Zeit hätte', en: 'She asked whether I had time' },
          { de: 'Dem Bericht zufolge steigen die Kosten', en: 'According to the report, costs are rising' },
          { de: 'Der Autor vertritt die Auffassung', en: 'The author takes the view' },
          { de: 'Er will nichts gewusst haben', en: 'He claims to have known nothing' },
          { de: 'Die Firma räumte Fehler ein', en: 'The company conceded mistakes' }
        ]
      },

      { // ===== B2 UNIT 2 — written out in full =====
        title: '🏭 Unit 2 — The World of Work',
        subject: 'Arbeitswelt',
        canDo: ['Describe trends and figures from the labour market in formal written German',
                'Negotiate conditions diplomatically and respond to an objection',
                'Understand the basic structures of German employment law and what they mean for you',
                'Give a short professional presentation and handle questions'],
        grammarFocus: ['Nominalstil and its conversion back to Verbalstil', 'Funktionsverbgefüge',
                       'Diplomatic Konjunktiv II in negotiation', 'Passive alternatives: man, sich lassen, sein + zu'],
        topics: [
          {
            icon: '📈', title: 'Trends, figures and the nominal style',
            explanation:
              '<p>Reports about the labour market are written in <strong>Nominalstil</strong> — the information sits in nouns rather than verbs. ' +
              'Where spoken German says <span class="de">Die Zahl der Bewerber ist gestiegen, deshalb konnten wir schneller einstellen</span>, a written report says ' +
              '<span class="de">Aufgrund des Anstiegs der Bewerberzahlen war eine schnellere Einstellung möglich</span>.</p>' +
              '<p>This is not decoration. Nominal style compresses: a whole subordinate clause collapses into a prepositional phrase, which is why reports, minutes and ' +
              'official letters are full of it. At B2 you need to do two things with it — <strong>read it without slowing down</strong>, and <strong>produce some of it</strong> ' +
              'when the text type calls for it. What you should <em>not</em> do is write everything that way: a text that is pure Nominalstil reads like a tax form.</p>' +
              '<p>The reliable pattern is that each subordinating conjunction has a preposition that does the same job with a noun: ' +
              '<span class="de">weil</span> → <span class="de">wegen</span> / <span class="de">aufgrund</span>, <span class="de">obwohl</span> → <span class="de">trotz</span>, ' +
              '<span class="de">wenn</span> → <span class="de">bei</span>, <span class="de">nachdem</span> → <span class="de">nach</span>, <span class="de">damit</span> → <span class="de">zu</span> / <span class="de">zwecks</span>.</p>',
            vocab: vocabTable([
              ['der Anstieg', 'the rise, the increase'],
              ['der Rückgang', 'the decline, the drop'],
              ['die Zunahme', 'the increase'],
              ['die Abnahme', 'the decrease'],
              ['der Anteil', 'the share, the proportion'],
              ['der Durchschnitt', 'the average'],
              ['die Quote', 'the rate, the quota'],
              ['die Arbeitslosenquote', 'the unemployment rate'],
              ['der Fachkräftemangel', 'the shortage of skilled workers'],
              ['die Erwerbstätigen', 'the people in employment'],
              ['die Belegschaft', 'the workforce (of one company)'],
              ['die Einstellung', 'the hiring, the recruitment'],
              ['die Entlassung', 'the dismissal, the lay-off'],
              ['die Fluktuation', 'staff turnover'],
              ['die Abwanderung', 'the migration away, the outflow'],
              ['geringfügig', 'marginal, slight'],
              ['deutlich', 'clear, marked'],
              ['stetig', 'steady'],
              ['rückläufig', 'declining'],
              ['im Vergleich zu', 'compared with']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Verbalstil ↔ Nominalstil.</strong> Learn the pairs, then you can convert in either direction on demand:</p>' +
              formTable('', ['Verbalstil (clause)', 'Nominalstil (phrase)'], [
                ['<strong>weil</strong> die Nachfrage gestiegen ist', '<strong>aufgrund</strong> der gestiegenen Nachfrage'],
                ['<strong>obwohl</strong> die Löhne gestiegen sind', '<strong>trotz</strong> der gestiegenen Löhne'],
                ['<strong>wenn</strong> man den Vertrag unterschreibt', '<strong>bei</strong> Vertragsunterzeichnung'],
                ['<strong>nachdem</strong> die Probezeit geendet hat', '<strong>nach</strong> Ende der Probezeit'],
                ['<strong>damit</strong> die Kosten sinken', '<strong>zur</strong> Senkung der Kosten'],
                ['<strong>bevor</strong> die Stelle ausgeschrieben wird', '<strong>vor</strong> der Ausschreibung der Stelle']
              ]) +
              '<p><strong>Describing a figure</strong> follows a fixed pattern that is worth memorising whole, because it also turns up in TestDaF and in every B2 report task:</p>' +
              '<div class="example-box">' +
              'Die Zahl der offenen Stellen <strong>stieg</strong> von 1,2 auf 1,8 Millionen. <span class="note">(von … auf …)</span><br>' +
              'Der Anteil der Teilzeitbeschäftigten <strong>nahm um</strong> 4 Prozentpunkte <strong>zu</strong>. <span class="note">(um … = by how much)</span><br>' +
              'Die Fluktuation <strong>lag bei</strong> rund 12 Prozent. <span class="note">(bei … = at a level of)</span><br>' +
              'Besonders <strong>auffällig ist</strong> der Rückgang in der Pflege. <span class="note">(pointing at the notable thing)</span>' +
              '</div>' +
              '<p class="note">Watch the prepositions: <strong>um</strong> for the size of a change, <strong>auf</strong> for the level reached, <strong>bei</strong> for a level that stays. Mixing these up is the single most common error in B2 chart descriptions.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Nominalstil: <em>weil die Nachfrage gestiegen ist</em> → ___________ der gestiegenen Nachfrage', 'aufgrund|wegen'),
              exInput('Nominalstil: <em>obwohl die Löhne gestiegen sind</em> → ___________ der gestiegenen Löhne', 'trotz'),
              exInput('Verbalstil: <em>nach Ende der Probezeit</em> → ___________ die Probezeit geendet hat', 'nachdem'),
              exSelect('Die Zahl stieg ___ 1,2 ___ 1,8 Millionen.', 'von … auf', ['von … auf', 'um … bei', 'bei … um']),
              exSelect('Der Anteil nahm ___ vier Prozentpunkte zu.', 'um', ['um', 'auf', 'bei']),
              exSelect('Die Fluktuation lag ___ zwölf Prozent.', 'bei', ['um', 'auf', 'bei']),
              exInput('Was ist das Gegenteil von <span class="de">der Anstieg</span>?', 'der Rückgang|Rückgang|die Abnahme|Abnahme'),
              exSelect('Ein Text, der nur aus Nominalstil besteht, wirkt:', 'schwer lesbar und bürokratisch', ['besonders elegant', 'schwer lesbar und bürokratisch', 'umgangssprachlich'])
            ])
          },
          {
            icon: '🤝', title: 'Negotiating conditions',
            explanation:
              '<p>German professional negotiation is <strong>direct about the substance and indirect about the form</strong>. You say what you want plainly — but you wrap it in ' +
              'Konjunktiv II, because the subjunctive is what turns a demand into a proposal.</p>' +
              '<p>Compare: <span class="de">Ich will 4.500 Euro.</span> — a demand, and in most German offices an oddly aggressive one. ' +
              '<span class="de">Ich hätte mir ein Gehalt im Bereich von 4.500 Euro vorgestellt.</span> — the same number, now a position you can negotiate from. ' +
              'The content is identical; only the register changed, and the register is what decides whether the conversation continues.</p>' +
              '<p>The second skill is <strong>conceding without giving way</strong>. <span class="de">Zwar … aber …</span>, <span class="de">Dafür habe ich Verständnis, allerdings …</span>, ' +
              '<span class="de">Da kann ich Ihnen entgegenkommen, wenn …</span> — each acknowledges the other side and then holds your position. ' +
              'A negotiation where you only repeat your figure reads at B2 as a failure to interact, both in the office and in the speaking exam.</p>',
            vocab: vocabTable([
              ['das Gehalt', 'the salary'],
              ['die Gehaltsvorstellung', 'salary expectation'],
              ['das Jahresbruttogehalt', 'annual gross salary'],
              ['die Zulage', 'the allowance, the bonus payment'],
              ['die Sonderzahlung', 'the one-off payment'],
              ['verhandeln über', 'to negotiate about'],
              ['jemandem entgegenkommen', 'to meet someone halfway'],
              ['einen Kompromiss schließen', 'to reach a compromise'],
              ['sich einigen auf', 'to agree on'],
              ['in Aussicht stellen', 'to hold out the prospect of'],
              ['das Angebot nachbessern', 'to improve the offer'],
              ['auf etwas bestehen', 'to insist on something'],
              ['Spielraum haben', 'to have room for manoeuvre'],
              ['die Rahmenbedingungen', 'the general conditions'],
              ['die Befristung', 'the fixed term'],
              ['unbefristet', 'permanent (contract)'],
              ['die Gleitzeit', 'flexitime'],
              ['die Vertrauensarbeitszeit', 'working time based on trust, not clocked'],
              ['die Weiterbildung', 'further training'],
              ['der Zuschuss', 'the subsidy, the contribution']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>The diplomatic toolkit.</strong> Every one of these is Konjunktiv II doing social work:</p>' +
              formTable('', ['Direct (too blunt)', 'Diplomatic'], [
                ['Ich will mehr Gehalt.', 'Ich <strong>hätte</strong> mir ein etwas höheres Gehalt <strong>vorgestellt</strong>.'],
                ['Das geht nicht.', 'Das <strong>wäre</strong> für uns leider schwierig.'],
                ['Machen Sie ein besseres Angebot.', '<strong>Wäre</strong> es möglich, das Angebot noch einmal zu prüfen?'],
                ['Ich brauche eine Antwort.', '<strong>Könnten</strong> Sie mir sagen, bis wann ich mit einer Antwort rechnen kann?'],
                ['Sie haben unrecht.', 'Da <strong>würde</strong> ich Ihnen widersprechen.'],
                ['Ich nehme die Stelle nicht.', 'Unter diesen Bedingungen <strong>müsste</strong> ich leider absagen.']
              ]) +
              '<p><strong>Conceding and holding:</strong></p>' +
              '<ul class="goals">' +
              '<li><span class="de"><strong>Zwar</strong> ist das Budget begrenzt, <strong>aber</strong> über die Weiterbildung ließe sich sprechen.</span></li>' +
              '<li><span class="de">Dafür habe ich volles Verständnis. <strong>Allerdings</strong> liegt das Angebot unter dem Branchendurchschnitt.</span></li>' +
              '<li><span class="de">Beim Gehalt kann ich Ihnen <strong>entgegenkommen</strong>, <strong>sofern</strong> wir uns bei der Probezeit einigen.</span></li>' +
              '</ul>' +
              '<p class="note">Note <span class="de">ließe sich sprechen</span> — <em>sich lassen</em> + infinitive is a passive alternative meaning „can be done". It is everywhere in negotiation because it removes the person: not „I will give you", but „it could be discussed".</p>' +
              '</div>',
            dialogs: dialogBox('Gehaltsgespräch — zweite Runde', [
              ['Personalleiterin', 'Wir könnten Ihnen 52.000 brutto im Jahr anbieten.'],
              ['Bewerber', 'Vielen Dank für das Angebot. Ehrlich gesagt hätte ich mir angesichts meiner Berufserfahrung etwas mehr vorgestellt — im Bereich von 58.000.'],
              ['Personalleiterin', 'Das wäre für die Position leider schwierig. Unser Spielraum liegt bei etwa 54.000.'],
              ['Bewerber', 'Dafür habe ich Verständnis. Wäre es denn möglich, über eine jährliche Weiterbildungspauschale zu sprechen?'],
              ['Personalleiterin', 'Da ließe sich etwas machen. 2.000 Euro jährlich könnte ich in Aussicht stellen.'],
              ['Bewerber', 'Wenn wir zusätzlich die Probezeit auf drei Monate verkürzen könnten, wären wir uns einig.'],
              ['Personalleiterin', 'Das halte ich für vertretbar. Ich lasse Ihnen den Vertrag bis Freitag zukommen.']
            ]),
            exercises: exerciseList([
              exInput('Diplomatisch: <em>Ich will mehr Gehalt.</em> → Ich ___________ mir ein etwas höheres Gehalt vorgestellt.', 'hätte'),
              exInput('Diplomatisch: <em>Das geht nicht.</em> → Das ___________ für uns leider schwierig.', 'wäre'),
              exInput('Diplomatisch: <em>Machen Sie ein besseres Angebot.</em> → ___________ es möglich, das Angebot noch einmal zu prüfen?', 'Wäre'),
              exSelect('<span class="de">jemandem entgegenkommen</span> bedeutet:', 'to meet someone halfway', ['to contradict someone', 'to meet someone halfway', 'to turn someone down']),
              exSelect('<span class="de">Da ließe sich etwas machen</span> bedeutet:', 'Something could be arranged', ['Something must be done', 'Something could be arranged', 'Nothing can be done']),
              exSelect('Welcher Satz hält die eigene Position UND zeigt Verständnis?', 'Dafür habe ich Verständnis. Allerdings liegt das Angebot unter dem Branchendurchschnitt.', ['Das ist zu wenig.', 'Dafür habe ich Verständnis. Allerdings liegt das Angebot unter dem Branchendurchschnitt.', 'Gut, dann nehme ich das Angebot an.']),
              exInput('Ein Vertrag ohne Enddatum ist ___________.', 'unbefristet'),
              exInput('Wie heißt der Verhandlungsspielraum auf Deutsch, in einem Wort?', 'Spielraum')
            ])
          },
          {
            icon: '⚖️', title: 'How German employment law works',
            explanation:
              '<p>German labour law gives employees more structural protection than most systems, and three institutions do most of the work.</p>' +
              '<p>The <strong>Tarifvertrag</strong> is a collective agreement negotiated between a union and an employers\' association for a whole sector. If your employer is bound by one, ' +
              'your pay scale, working hours and holiday are largely set by it, not by your individual negotiation. The <strong>Betriebsrat</strong> is the elected works council inside a company; ' +
              'it has genuine co-determination rights (<span class="de">Mitbestimmung</span>) over working time, shift plans and dismissals, which is far more than a consultative body. ' +
              'And the <strong>Kündigungsschutz</strong> means that after six months in a company with more than ten employees, you cannot simply be dismissed — there must be a reason recognised in law.</p>' +
              '<p>The practical sequence to know: <span class="de">Probezeit</span> (usually six months, two weeks\' notice either way) → ' +
              '<span class="de">Kündigungsschutz</span> → and if there is a problem, usually an <span class="de">Abmahnung</span>, a formal written warning, <em>before</em> a behavioural dismissal. ' +
              'A dismissal that skips the Abmahnung is often successfully challenged.</p>',
            vocab: vocabTable([
              ['der Arbeitsvertrag', 'the employment contract'],
              ['der Tarifvertrag', 'the collective agreement'],
              ['der Betriebsrat', 'the works council'],
              ['die Mitbestimmung', 'co-determination'],
              ['die Gewerkschaft', 'the trade union'],
              ['die Probezeit', 'the probation period'],
              ['die Kündigungsfrist', 'the notice period'],
              ['der Kündigungsschutz', 'protection against dismissal'],
              ['die Abmahnung', 'the formal written warning'],
              ['kündigen', 'to give notice, to terminate'],
              ['die Eigenkündigung', 'resignation by the employee'],
              ['die Abfindung', 'the severance payment'],
              ['die Arbeitsunfähigkeitsbescheinigung', 'the sick note'],
              ['die Lohnfortzahlung', 'continued payment of wages (when ill)'],
              ['der Urlaubsanspruch', 'the holiday entitlement'],
              ['die Elternzeit', 'parental leave'],
              ['die Überstunden', 'overtime'],
              ['der Mindestlohn', 'the minimum wage'],
              ['die Sozialversicherung', 'social insurance'],
              ['die Zeugnissprache', 'the coded language of job references']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p>Legal and official German avoids naming who acts. Three constructions do that, and they are interchangeable often enough that you should be able to swap them:</p>' +
              formTable('', ['Construction', 'Example', 'Means'], [
                ['<strong>Passiv</strong>', 'Die Kündigung <strong>muss</strong> schriftlich <strong>erfolgen</strong>.', 'obligation'],
                ['<strong>man</strong>', '<strong>Man</strong> muss die Frist einhalten.', 'obligation, less formal'],
                ['<strong>sein + zu</strong>', 'Die Frist <strong>ist einzuhalten</strong>.', 'obligation — very formal'],
                ['<strong>sich lassen</strong>', 'Die Kündigung <strong>lässt sich anfechten</strong>.', 'possibility'],
                ['<strong>-bar / -lich</strong>', 'Die Kündigung ist <strong>anfechtbar</strong>.', 'possibility, compressed']
              ]) +
              '<div class="example-box">' +
              'Alle drei sagen dasselbe:<br>' +
              '<strong>Passiv:</strong> Die Unterlagen müssen bis Freitag eingereicht werden.<br>' +
              '<strong>man:</strong> Man muss die Unterlagen bis Freitag einreichen.<br>' +
              '<strong>sein + zu:</strong> Die Unterlagen sind bis Freitag einzureichen.' +
              '</div>' +
              '<p class="note"><span class="de">sein + zu</span> is the marker of official written German. You will meet it in every contract and every letter from an Amt — and using it in a formal e-mail makes you sound like you know the register.</p>' +
              '</div>',
            dialogs: dialogBox('Beim Betriebsrat', [
              ['Mitarbeiterin', 'Ich habe gestern eine Abmahnung bekommen, wegen angeblich unentschuldigten Fehlens.'],
              ['Betriebsrat', 'Haben Sie die Abmahnung schriftlich und mit Begründung erhalten?'],
              ['Mitarbeiterin', 'Ja. Aber ich hatte eine Arbeitsunfähigkeitsbescheinigung eingereicht.'],
              ['Betriebsrat', 'Dann ist der Vorwurf schwer haltbar. Reichen Sie eine Gegendarstellung ein — die ist in die Personalakte aufzunehmen.'],
              ['Mitarbeiterin', 'Und wenn trotzdem gekündigt wird?'],
              ['Betriebsrat', 'Vor einer verhaltensbedingten Kündigung ist in der Regel eine wirksame Abmahnung nötig. Lässt die sich entkräften, hat eine Kündigung kaum Bestand.']
            ]),
            exercises: exerciseList([
              exInput('Der gewählte Interessenvertretung der Beschäftigten im Betrieb heißt der ___________.', 'Betriebsrat'),
              exInput('Eine förmliche schriftliche Verwarnung heißt die ___________.', 'Abmahnung'),
              exSelect('<span class="de">Die Frist ist einzuhalten</span> bedeutet:', 'The deadline must be met', ['The deadline can be extended', 'The deadline must be met', 'The deadline was met']),
              exSelect('<span class="de">Die Kündigung lässt sich anfechten</span> bedeutet:', 'The dismissal can be challenged', ['The dismissal must be challenged', 'The dismissal can be challenged', 'The dismissal has been challenged']),
              exInput('Formell umschreiben: <em>Man muss die Unterlagen einreichen.</em> → Die Unterlagen ___________ einzureichen.', 'sind'),
              exInput('Passiv: <em>Man muss die Kündigung schriftlich aussprechen.</em> → Die Kündigung muss schriftlich ___________ werden.', 'ausgesprochen'),
              exSelect('Ein Tarifvertrag wird ausgehandelt zwischen:', 'Gewerkschaft und Arbeitgeberverband', ['Arbeitnehmer und Chef', 'Gewerkschaft und Arbeitgeberverband', 'Betriebsrat und Kunden']),
              exSelect('Nach wie vielen Monaten greift der Kündigungsschutz in der Regel?', 'nach sechs Monaten', ['nach drei Monaten', 'nach sechs Monaten', 'nach zwölf Monaten'])
            ])
          },
          {
            icon: '🌐', title: 'Remote and international teams',
            explanation:
              '<p>Distributed work has given German offices a layer of vocabulary that did not exist fifteen years ago, much of it English — ' +
              '<span class="de">das Homeoffice</span>, <span class="de">hybrid</span>, <span class="de">das Onboarding</span> — sitting inside completely German grammar. ' +
              'Note that <span class="de">Homeoffice</span> in German means <em>working from home</em>, not the British government department.</p>' +
              '<p>The register of internal communication is where B2 writers most often slip. A message to a colleague you say <span class="de">du</span> to is still written German: ' +
              'no fillers, full sentences, a greeting and a sign-off. German colleagues read a bare „ok" as curt in a way that is hard to recover from.</p>' +
              '<p>This is also where <strong>Funktionsverbgefüge</strong> live — fixed noun+verb pairs like <span class="de">zur Verfügung stellen</span> or <span class="de">in Frage stellen</span> ' +
              'that function as a single verb. They cannot be assembled logically; you learn them as units. Using a few correctly is one of the clearest B2 markers in writing, ' +
              'and getting the preposition wrong is one of the most visible errors.</p>',
            vocab: vocabTable([
              ['das Homeoffice', 'working from home'],
              ['hybrides Arbeiten', 'hybrid working'],
              ['die Präsenzpflicht', 'obligation to be on site'],
              ['die Kernarbeitszeit', 'core hours'],
              ['die Zeitverschiebung', 'time difference'],
              ['die Absprache', 'the arrangement, the agreement'],
              ['sich abstimmen mit', 'to coordinate with'],
              ['der Austausch', 'the exchange, the contact'],
              ['die Erreichbarkeit', 'availability, being reachable'],
              ['das Missverständnis', 'the misunderstanding'],
              ['die Rücksprache', 'consultation'],
              ['die Schnittstelle', 'the interface, the point of contact'],
              ['der Austauschbedarf', 'the need for exchange'],
              ['die Eigenverantwortung', 'personal responsibility'],
              ['die Verbindlichkeit', 'reliability, bindingness'],
              ['das Onboarding', 'onboarding'],
              ['die Führungskraft', 'the manager'],
              ['die Belegschaft', 'the workforce'],
              ['interkulturell', 'intercultural'],
              ['der Umgangston', 'the tone people use with each other']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Funktionsverbgefüge.</strong> The noun carries the meaning, the verb is nearly empty. Learn the whole phrase, preposition included:</p>' +
              formTable('', ['Funktionsverbgefüge', 'Plain verb', 'English'], [
                ['zur Verfügung stellen', 'geben', 'to make available'],
                ['zur Verfügung stehen', '—', 'to be available'],
                ['in Frage stellen', 'bezweifeln', 'to call into question'],
                ['in Kontakt treten mit', 'kontaktieren', 'to get in touch with'],
                ['Rücksicht nehmen auf', '—', 'to show consideration for'],
                ['in Anspruch nehmen', 'nutzen', 'to make use of, to claim'],
                ['zur Sprache bringen', 'ansprechen', 'to raise (a topic)'],
                ['in Kauf nehmen', 'akzeptieren', 'to accept (a drawback)'],
                ['eine Entscheidung treffen', 'entscheiden', 'to take a decision'],
                ['Kritik üben an', 'kritisieren', 'to criticise'],
                ['in Betracht ziehen', 'erwägen', 'to take into consideration'],
                ['Bezug nehmen auf', 'sich beziehen auf', 'to refer to']
              ]) +
              '<p class="note">These belong to <strong>formal written</strong> German. In speech the plain verb is normal and the Funktionsverbgefüge sounds pompous — <span class="de">Ich entscheide das morgen</span>, not <span class="de">Ich treffe morgen eine Entscheidung darüber</span>.</p>' +
              '<div class="example-box">' +
              'Wir <strong>stellen</strong> Ihnen die Unterlagen bis Freitag <strong>zur Verfügung</strong>.<br>' +
              'Bitte <strong>nehmen Sie Rücksicht auf</strong> die Zeitverschiebung.<br>' +
              'Ich möchte das Thema in der nächsten Sitzung <strong>zur Sprache bringen</strong>.' +
              '</div>' +
              '</div>',
            dialogs: dialogBox('Nachricht an das Team', [
              ['Anna', 'Hallo zusammen, ich stelle euch die überarbeitete Präsentation bis morgen Mittag zur Verfügung.'],
              ['Anna', 'Bitte nehmt Rücksicht darauf, dass Marek in Vancouver sitzt — Termine vor 16 Uhr unserer Zeit sind für ihn nachts.'],
              ['Marek', 'Danke für die Rücksicht. Ich würde gern noch einen Punkt zur Sprache bringen: Die Deadline am 14. halte ich für zu knapp.'],
              ['Anna', 'Verstanden. Dann ziehen wir eine Verschiebung in Betracht und stimmen uns am Donnerstag ab.']
            ]),
            exercises: exerciseList([
              exInput('Formell: <em>Wir geben Ihnen die Unterlagen.</em> → Wir stellen Ihnen die Unterlagen zur ___________.', 'Verfügung'),
              exInput('Formell: <em>Ich bezweifle das.</em> → Ich stelle das in ___________.', 'Frage'),
              exInput('Formell: <em>Bitte berücksichtigen Sie die Zeitverschiebung.</em> → Bitte nehmen Sie ___________ auf die Zeitverschiebung.', 'Rücksicht'),
              exInput('Formell: <em>Ich möchte das Thema ansprechen.</em> → Ich möchte das Thema zur ___________ bringen.', 'Sprache'),
              exSelect('<span class="de">etwas in Kauf nehmen</span> bedeutet:', 'einen Nachteil akzeptieren', ['etwas kaufen', 'einen Nachteil akzeptieren', 'etwas ablehnen']),
              exSelect('<span class="de">eine Entscheidung treffen</span> — welches Verb passt?', 'treffen', ['machen', 'treffen', 'nehmen', 'geben']),
              exSelect('<span class="de">Homeoffice</span> bedeutet im Deutschen:', 'von zu Hause arbeiten', ['das Innenministerium', 'von zu Hause arbeiten', 'das Chefbüro']),
              exSelect('In welchem Kontext passt ein Funktionsverbgefüge am besten?', 'in einer formellen E-Mail', ['im Gespräch mit Freunden', 'in einer formellen E-Mail', 'in einer SMS'])
            ])
          },
          {
            icon: '🎤', title: 'Presenting and handling objections',
            explanation:
              '<p>A German professional presentation is expected to be <strong>signposted</strong>. You say what you are going to do, you mark each transition, and you say when you have finished. ' +
              'This is not padding — listeners use those markers to follow, and in the B2 speaking exam the examiner is explicitly listening for them.</p>' +
              '<p>The structure that is always safe: greet and name your topic → announce the structure → point one, two, three, each with evidence → conclusion → hand over. ' +
              'Four minutes is the usual exam length, which is about 500 words. That is shorter than people expect, so three points is the maximum that fits.</p>' +
              '<p>The part people prepare least is the <strong>objection</strong>. You will be contradicted, and in German professional settings that is normal rather than hostile — direct disagreement is not a personal attack. ' +
              'What is marked is whether you can acknowledge the objection, answer it, and keep your position: <span class="de">Das ist ein berechtigter Einwand. Allerdings zeigt die Erfahrung, dass …</span></p>',
            vocab: vocabTable([
              ['Ich möchte heute über … sprechen', 'Today I would like to talk about …'],
              ['Mein Vortrag gliedert sich in drei Teile', 'My talk is in three parts'],
              ['Zunächst … dann … abschließend', 'First … then … finally'],
              ['Ich komme nun zum zweiten Punkt', 'I now come to the second point'],
              ['Das führt mich zu der Frage, ob …', 'That brings me to the question of whether …'],
              ['Wie die Zahlen zeigen, …', 'As the figures show, …'],
              ['Besonders auffällig ist, dass …', 'What is particularly striking is that …'],
              ['Lassen Sie mich das an einem Beispiel verdeutlichen', 'Let me illustrate that with an example'],
              ['Zusammenfassend lässt sich festhalten', 'To sum up, we can note'],
              ['Vielen Dank für Ihre Aufmerksamkeit', 'Thank you for your attention'],
              ['Das ist ein berechtigter Einwand', 'That is a fair objection'],
              ['Da haben Sie insofern recht, als …', 'You are right to the extent that …'],
              ['Dem möchte ich entgegenhalten, dass …', 'To that I would reply that …'],
              ['Dazu kann ich im Moment nichts sagen', 'I cannot say anything about that at the moment'],
              ['Darauf komme ich gleich zurück', 'I will come back to that shortly'],
              ['der Einwand', 'the objection'],
              ['die Rückfrage', 'the follow-up question'],
              ['der Vortrag', 'the talk, the presentation'],
              ['die Gliederung', 'the structure, the outline'],
              ['das Fazit', 'the conclusion']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Conceding and holding your ground</strong> is a two-move pattern. The first move is genuine — it must name what is right about the objection — and the second move turns:</p>' +
              '<ul class="goals">' +
              '<li><span class="de"><strong>Da haben Sie insofern recht, als</strong> die Umstellung Zeit kostet. <strong>Allerdings</strong> amortisiert sie sich nach etwa einem Jahr.</span></li>' +
              '<li><span class="de"><strong>Das ist ein berechtigter Einwand.</strong> <strong>Dem möchte ich jedoch entgegenhalten, dass</strong> die Erfahrung anderer Betriebe dagegen spricht.</span></li>' +
              '<li><span class="de"><strong>Zwar</strong> ist das Risiko real, <strong>aber</strong> es lässt sich durch eine Pilotphase begrenzen.</span></li>' +
              '</ul>' +
              '<p>Note the word order after <span class="de">allerdings</span>, <span class="de">jedoch</span> and <span class="de">dennoch</span>: they occupy first position, so the <strong>verb comes immediately after</strong> them — ' +
              '<span class="de">Allerdings <u>amortisiert</u> sie sich …</span>, never <span class="de">Allerdings sie amortisiert sich</span>. That single error is extremely common and very audible.</p>' +
              '<p class="note">If you genuinely do not know the answer, the professional move is to say so and offer a follow-up: <span class="de">Dazu kann ich im Moment nichts Belastbares sagen — ich schicke Ihnen die Zahlen bis morgen nach.</span> That scores better than improvising.</p>' +
              '</div>',
            dialogs: dialogBox('Nach dem Vortrag — die Diskussion', [
              ['Kollege', 'Sie sagen, die Umstellung rechne sich. Aber die Anfangsinvestition ist doch erheblich.'],
              ['Vortragende', 'Da haben Sie insofern recht, als die Kosten im ersten Jahr deutlich steigen. Allerdings amortisieren sie sich nach unseren Berechnungen innerhalb von vierzehn Monaten.'],
              ['Kollege', 'Und wenn die Annahmen nicht stimmen?'],
              ['Vortragende', 'Das ist ein berechtigter Einwand. Deshalb schlage ich eine Pilotphase in einer Abteilung vor, bevor wir eine Entscheidung für das ganze Haus treffen.'],
              ['Kollegin', 'Gibt es Zahlen aus vergleichbaren Betrieben?'],
              ['Vortragende', 'Dazu kann ich im Moment nichts Belastbares sagen. Ich stelle Ihnen die Vergleichsdaten bis Freitag zur Verfügung.']
            ]),
            exercises: exerciseList([
              exInput('Gliederung ankündigen: Mein Vortrag ___________ sich in drei Teile.', 'gliedert'),
              exInput('Einen Einwand anerkennen: Das ist ein ___________ Einwand.', 'berechtigter'),
              exSelect('Welche Wortstellung ist richtig?', 'Allerdings amortisiert sie sich schnell.', ['Allerdings sie amortisiert sich schnell.', 'Allerdings amortisiert sie sich schnell.', 'Allerdings sich amortisiert sie schnell.']),
              exSelect('Warum? Weil <span class="de">allerdings</span> …', 'Position 1 besetzt, also folgt direkt das Verb', ['eine Konjunktion wie „und" ist', 'Position 1 besetzt, also folgt direkt das Verb', 'immer am Satzende steht']),
              exInput('Sie wissen die Antwort nicht. Professionell: Darauf komme ich gleich ___________.', 'zurück'),
              exSelect('Wie viele Hauptpunkte passen in einen Vier-Minuten-Vortrag?', 'etwa drei', ['etwa zehn', 'etwa drei', 'etwa sieben']),
              exInput('Abschluss: Vielen Dank für Ihre ___________.', 'Aufmerksamkeit'),
              exSelect('Direkter Widerspruch in einer deutschen Besprechung gilt als:', 'normal und nicht persönlich gemeint', ['sehr unhöflich', 'normal und nicht persönlich gemeint', 'nur unter Freunden möglich'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: nominal style, diplomatic Konjunktiv II, employment-law vocabulary, Funktionsverbgefüge and presentation language together.</p>',
        exercises: exerciseList([
          exInput('Nominalstil: <em>weil die Kosten gestiegen sind</em> → ___________ der gestiegenen Kosten', 'aufgrund|wegen'),
          exInput('Die Zahl der Beschäftigten stieg ___________ 200 auf 240.', 'von'),
          exInput('Der Anteil sank ___________ fünf Prozentpunkte.', 'um'),
          exInput('Diplomatisch: <em>Das geht nicht.</em> → Das ___________ leider schwierig.', 'wäre'),
          exInput('Formell: <em>Man muss die Frist einhalten.</em> → Die Frist ___________ einzuhalten.', 'ist'),
          exInput('Wir stellen Ihnen die Unterlagen zur ___________.', 'Verfügung'),
          exInput('Ich stelle diese Behauptung in ___________.', 'Frage'),
          exInput('Bitte nehmen Sie ___________ auf die Zeitverschiebung.', 'Rücksicht'),
          exSelect('Welcher Satz ist richtig?', 'Allerdings sinken die Kosten langfristig.', ['Allerdings die Kosten sinken langfristig.', 'Allerdings sinken die Kosten langfristig.', 'Allerdings sinkt die Kosten langfristig.']),
          exSelect('<span class="de">Die Kündigung lässt sich anfechten</span> drückt aus:', 'eine Möglichkeit', ['eine Pflicht', 'eine Möglichkeit', 'ein Verbot']),
          exSelect('Der Betriebsrat hat Rechte der:', 'Mitbestimmung', ['Mitbestimmung', 'Kündigung', 'Besteuerung']),
          exInput('Ein Vertrag ohne Enddatum heißt ___________.', 'unbefristet'),
          exSelect('<span class="de">jemandem entgegenkommen</span> heißt:', 'einen Kompromiss anbieten', ['widersprechen', 'einen Kompromiss anbieten', 'kündigen']),
          exInput('Einen Einwand anerkennen: Das ist ein ___________ Einwand.', 'berechtigter')
        ]),

        reading: {
          intro: 'A workplace report — the register you meet in company intranets and trade press. Watch the <strong>nominal style</strong> and the <strong>Funktionsverbgefüge</strong>; both are doing visible work here.',
          words: 340, minutes: 9,
          text: readingText('Wenn das Team über drei Zeitzonen verteilt ist', [
            'Nach dem Ende der pandemiebedingten Ausnahmeregelungen haben viele Unternehmen ihre Regelungen zum mobilen Arbeiten überarbeitet. Das Ergebnis ist selten eine Rückkehr zur vollständigen Präsenzpflicht, sondern meist ein hybrides Modell mit zwei bis drei festen Bürotagen.',
            'Die Gründe dafür sind weniger ideologisch als praktisch. Zum einen hat sich gezeigt, dass die Produktivität im Homeoffice bei klar definierten Aufgaben nicht sinkt. Zum anderen stellt die Bindung neuer Mitarbeiterinnen und Mitarbeiter die Betriebe vor Probleme: Wer ausschließlich remote eingearbeitet wird, verlässt das Unternehmen statistisch früher.',
            'Besonders anspruchsvoll ist die Situation in international verteilten Teams. Bei einer Zeitverschiebung von neun Stunden lässt sich kein gemeinsamer Arbeitstag herstellen. Erfolgreiche Teams nehmen deshalb eine Verschiebung ihrer Abläufe in Kauf: Entscheidungen werden schriftlich dokumentiert, Besprechungen auf ein Minimum reduziert und Zuständigkeiten so geschnitten, dass niemand auf die Rückmeldung eines schlafenden Kollegen warten muss.',
            'Führungskräfte stellt das vor eine neue Aufgabe. Kontrolle über Anwesenheit ist nicht mehr möglich; an ihre Stelle tritt die Vereinbarung von Ergebnissen. Eine Studie der Hans-Böckler-Stiftung weist allerdings darauf hin, dass diese Umstellung häufig unvollständig bleibe: Viele Betriebe hätten zwar die Präsenzpflicht gelockert, die Erwartung ständiger Erreichbarkeit aber beibehalten. Beschäftigte berichteten infolgedessen von längeren Arbeitstagen als vor der Umstellung.',
            'Der Betriebsrat ist bei all dem kein Randthema. Regelungen zu Arbeitszeit und Erreichbarkeit unterliegen der Mitbestimmung; eine Betriebsvereinbarung ist in der Regel erforderlich. Wo sie fehlt, entstehen genau die Graubereiche, über die später gestritten wird.'
          ], 'Fachbeitrag, fiktiv — im Stil der deutschen Personalfachpresse'),
          glossary: vocabTable([
            ['die Ausnahmeregelung', 'the exceptional arrangement'],
            ['das mobile Arbeiten', 'mobile / remote working'],
            ['die Präsenzpflicht', 'obligation to be on site'],
            ['die Bindung', 'retention (of staff)'],
            ['einarbeiten', 'to induct, to train in'],
            ['in Kauf nehmen', 'to accept (a drawback)'],
            ['die Zuständigkeit', 'the area of responsibility'],
            ['die Rückmeldung', 'the response, the feedback'],
            ['die Betriebsvereinbarung', 'the works agreement'],
            ['der Graubereich', 'the grey area'],
            ['infolgedessen', 'as a result'],
            ['unterliegen + Dativ', 'to be subject to']
          ]),
          questions: exerciseList([
            exSelect('Wie haben die meisten Unternehmen ihre Regelungen überarbeitet?', 'Sie haben ein hybrides Modell eingeführt.', ['Sie sind zur vollen Präsenzpflicht zurückgekehrt.', 'Sie haben ein hybrides Modell eingeführt.', 'Sie arbeiten jetzt vollständig remote.']),
            exTF('Laut Text sinkt die Produktivität im Homeoffice bei klar definierten Aufgaben.', false),
            exSelect('Welches Problem nennt der Text bei rein remote eingearbeiteten Beschäftigten?', 'Sie verlassen das Unternehmen statistisch früher.', ['Sie arbeiten langsamer.', 'Sie verlassen das Unternehmen statistisch früher.', 'Sie fordern höhere Gehälter.']),
            exSelect('Wie gehen erfolgreiche internationale Teams mit der Zeitverschiebung um?', 'Sie dokumentieren schriftlich und reduzieren Besprechungen.', ['Sie legen einen gemeinsamen Arbeitstag fest.', 'Sie dokumentieren schriftlich und reduzieren Besprechungen.', 'Sie arbeiten alle nach deutscher Zeit.']),
            exSelect('Welche Kritik äußert die Studie der Hans-Böckler-Stiftung?', 'Die Präsenzpflicht wurde gelockert, die Erwartung ständiger Erreichbarkeit blieb.', ['Die Produktivität sei gesunken.', 'Die Präsenzpflicht wurde gelockert, die Erwartung ständiger Erreichbarkeit blieb.', 'Die Betriebe hätten zu viele Besprechungen.']),
            exTF('Regelungen zur Arbeitszeit unterliegen der Mitbestimmung des Betriebsrats.', true),
            exInput('Im vierten Absatz steht die Studie im Konjunktiv („bleibe", „hätten"). Warum? Antworte auf Englisch.', 'because the text is reporting the study\'s claims|it is indirect speech|the writer reports and does not endorse the claim|reported speech', 'one short sentence', 'en'),
            exInput('Finde im dritten Absatz das Funktionsverbgefüge, das „einen Nachteil akzeptieren" bedeutet. (drei Wörter)', 'in Kauf nehmen|nehmen in Kauf'),
            exInput('Welches Wort im Text bedeutet „als Folge davon"?', 'infolgedessen')
          ])
        },

        listening: {
          title: 'Teambesprechung — neue Homeoffice-Regelung',
          intro: 'An internal meeting about a new hybrid policy. Listen <strong>once</strong>, then answer. The transcript is there to check afterwards.',
          lines: [
            ['Teamleiterin', 'Guten Morgen. Ich würde gern die neue Regelung zum mobilen Arbeiten zur Sprache bringen, bevor sie nächsten Monat in Kraft tritt.'],
            ['Teamleiterin', 'Vorgesehen sind künftig zwei feste Bürotage pro Woche, Dienstag und Donnerstag.'],
            ['Jonas', 'Darf ich kurz nachfragen? Gilt das auch für Kolleginnen und Kollegen, die nicht in der Stadt wohnen?'],
            ['Teamleiterin', 'Für Beschäftigte mit einem Anfahrtsweg von mehr als neunzig Minuten sieht die Betriebsvereinbarung eine Ausnahme vor. Ein Bürotag reicht dann.'],
            ['Petra', 'Ich halte zwei feste Tage für zu starr. Könnten wir das nicht im Team selbst abstimmen?'],
            ['Teamleiterin', 'Da haben Sie insofern recht, als starre Tage für Projektarbeit ungünstig sind. Allerdings war genau die freie Wahl das Problem: Im letzten Quartal waren an manchen Tagen zwei Personen im Büro, an anderen vierzehn.'],
            ['Jonas', 'Und wie ist das mit der Erreichbarkeit geregelt?'],
            ['Teamleiterin', 'Das ist der wichtigste Punkt. Die Kernzeit liegt zwischen zehn und fünfzehn Uhr. Außerhalb dieser Zeit besteht ausdrücklich keine Pflicht zu antworten — auch nicht abends.'],
            ['Petra', 'Das steht so in der Vereinbarung?'],
            ['Teamleiterin', 'Schriftlich, ja. Der Betriebsrat hat darauf bestanden.'],
            ['Marek', 'Für mich in Vancouver fällt die Kernzeit aber mitten in die Nacht.'],
            ['Teamleiterin', 'Richtig, deshalb gilt für die internationalen Standorte eine eigene Absprache. Ich stelle Ihnen allen das Dokument heute Nachmittag zur Verfügung — Rückmeldungen bitte bis Freitag.']
          ],
          questions: exerciseList([
            exSelect('Wie viele feste Bürotage sind vorgesehen?', 'zwei', ['einer', 'zwei', 'drei']),
            exInput('An welchen beiden Wochentagen?', 'dienstag und donnerstag|dienstag, donnerstag'),
            exSelect('Wer bekommt eine Ausnahme?', 'Wer mehr als 90 Minuten Anfahrtsweg hat', ['Wer Kinder hat', 'Wer mehr als 90 Minuten Anfahrtsweg hat', 'Wer im Ausland arbeitet']),
            exSelect('Welches Problem nennt die Teamleiterin bei freier Wahl der Bürotage?', 'Die Zahl der Anwesenden schwankte stark.', ['Die Leute kamen gar nicht mehr.', 'Die Zahl der Anwesenden schwankte stark.', 'Die Produktivität sank.']),
            exInput('Wann liegt die Kernzeit? (von … bis …, in Zahlen)', '10 bis 15|zehn bis fünfzehn|10-15|von 10 bis 15'),
            exTF('Außerhalb der Kernzeit müssen die Beschäftigten abends auf Nachrichten antworten.', false),
            exSelect('Wer hat auf die schriftliche Erreichbarkeitsregel bestanden?', 'der Betriebsrat', ['die Geschäftsführung', 'der Betriebsrat', 'die Gewerkschaft']),
            exSelect('Was gilt für die internationalen Standorte?', 'eine eigene Absprache', ['dieselbe Kernzeit', 'eine eigene Absprache', 'keine Regelung']),
            exInput('Bis wann sollen die Rückmeldungen kommen?', 'bis freitag|freitag')
          ])
        },

        writing: {
          title: 'Formelle E-Mail — Antrag auf eine Ausnahme',
          textType: 'Formelle E-Mail an die Personalabteilung',
          minWords: 120, maxWords: 160, minutes: 30,
          expect: ['formal-opening', 'formal-closing', 'politeness', 'arguments', 'nominal'],
          task: '<p>In Ihrem Betrieb gilt ab nächstem Monat eine Präsenzpflicht von zwei Bürotagen pro Woche (Dienstag und Donnerstag).</p>' +
            '<p>Ihr Anfahrtsweg beträgt 80 Minuten pro Strecke, und Sie betreuen dienstags nachmittags ein Familienmitglied. ' +
            'Schreiben Sie eine E-Mail an die Personalabteilung (Frau Dr. Wagner) und beantragen Sie eine Ausnahmeregelung.</p>',
          plainTask: 'Write a formal e-mail in German (120–160 words) to the HR department (Frau Dr. Wagner) requesting an exception to a new rule requiring two office days per week (Tuesday and Thursday). The writer commutes 80 minutes each way and cares for a family member on Tuesday afternoons. The e-mail must: use a correct formal salutation and sign-off; state the reason for writing; give the two reasons for the request; make a concrete alternative proposal; ask for a reply by a date. Register: formal written German, Sie-form throughout, no spoken fillers.',
          bullets: [
            'Nennen Sie <strong>den Grund</strong> Ihres Schreibens im ersten Satz.',
            'Begründen Sie den Antrag mit <strong>beiden</strong> Umständen (Anfahrtsweg und Betreuung).',
            'Machen Sie einen <strong>konkreten Alternativvorschlag</strong> — nicht nur eine Bitte um Befreiung.',
            'Bitten Sie höflich um eine <strong>Antwort bis zu einem Datum</strong>.',
            'Durchgehend <strong>Sie</strong>-Form, korrekte Anrede und Grußformel.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Anrede', 'Sehr geehrte Frau Dr. Wagner, <span class="note">(Komma, danach klein weiter)</span>'],
            ['Grund nennen', 'ich wende mich an Sie, weil … · hiermit beantrage ich … · mit Bezug auf die neue Regelung …'],
            ['Begründen', 'Der Grund dafür ist, dass … · Hinzu kommt, dass … · Aufgrund meines Anfahrtswegs von 80 Minuten …'],
            ['Vorschlagen', 'Ich schlage daher vor, … · Wäre es möglich, dass … · Alternativ könnte ich …'],
            ['Höflich bitten', 'Ich wäre Ihnen sehr dankbar, wenn … · Könnten Sie mir bis zum 15. Mai Bescheid geben?'],
            ['Schluss', 'Für Rückfragen stehe ich Ihnen gerne zur Verfügung. · Vielen Dank im Voraus.'],
            ['Grußformel', 'Mit freundlichen Grüßen <span class="note">(kein Komma danach)</span>']
          ]),
          criteria: [
            'Anrede korrekt: „Sehr geehrte Frau Dr. Wagner," mit Komma, danach klein weitergeschrieben.',
            'Der Grund des Schreibens steht im ersten Satz, nicht erst am Ende.',
            'Beide Begründungen sind genannt — Anfahrtsweg UND Betreuung.',
            'Ich mache einen konkreten Alternativvorschlag, nicht nur eine Bitte.',
            'Ich bitte um eine Antwort bis zu einem bestimmten Datum.',
            'Durchgehend Sie-Form, keine Umgangssprache, keine Abkürzungen wie „z.B." im Fließtext.',
            'Grußformel „Mit freundlichen Grüßen" ohne Komma, darunter der Name.',
            'Ich liege zwischen 120 und 160 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Feierabend is real.</strong> German working culture draws a hard line at the end of the day, and <span class="de">Feierabend</span> — a word with no English equivalent — names it. ' +
          'Calling a colleague at 19:30 about something that can wait is a minor transgression, not a sign of commitment. Several large firms switch off internal mail servers out of hours.</p>' +
          '<p><strong>Holiday is taken, not banked.</strong> The statutory minimum is 20 days on a five-day week; most contracts give 25–30, and taking them is expected. ' +
          'A colleague going away for three uninterrupted weeks in August is normal, and their work is covered by a <span class="de">Vertretung</span> rather than waiting for them.</p>' +
          '<p><strong>Being ill is a legal status, not a favour.</strong> You report sick (<span class="de">sich krankmelden</span>) and, depending on the contract, submit an ' +
          '<span class="de">Arbeitsunfähigkeitsbescheinigung</span> — usually from the third day, sometimes the first. Your pay continues for up to six weeks (<span class="de">Lohnfortzahlung</span>). ' +
          'Working while signed off is not admirable; it can invalidate your insurance cover.</p>' +
          '<p><strong>Directness is not rudeness.</strong> German professional feedback states the problem plainly. <span class="de">Das funktioniert so nicht</span> is a judgement about the work, not about you, ' +
          'and the absence of softening is not coldness. Conversely, British-style understatement often fails to register as criticism at all.</p>' +
          '<p><strong>Du or Sie at work</strong> varies by sector rather than by age: startups, agencies and most tech companies are <span class="de">du</span> from the first day, ' +
          'while banks, insurers, law firms, public administration and traditional manufacturing stay <span class="de">Sie</span>. Follow what you are offered, and do not switch upward on your own.</p>' +
          '<p><strong>The Arbeitszeugnis code.</strong> German employers must give a written reference and it must be benevolent in tone — which has produced a coded language where mild praise is damning. ' +
          '<span class="de">Stets zu unserer vollsten Zufriedenheit</span> is the top grade; <span class="de">zu unserer Zufriedenheit</span> alone is roughly a C; ' +
          '<span class="de">Er bemühte sich stets</span> means the effort was there and the results were not. If you receive one, have it read by someone who knows the code.</p>',

        recap: [
          { group: '📈 Zahlen und Trends', rows: [
            ['der Anstieg', 'the rise'],
            ['der Rückgang', 'the decline'],
            ['die Zunahme', 'the increase'],
            ['die Abnahme', 'the decrease'],
            ['der Anteil', 'the share, the proportion'],
            ['der Durchschnitt', 'the average'],
            ['die Quote', 'the rate'],
            ['die Arbeitslosenquote', 'the unemployment rate'],
            ['die Fluktuation', 'staff turnover'],
            ['rückläufig', 'declining'],
            ['stetig', 'steady'],
            ['geringfügig', 'marginal'],
            ['im Vergleich zu', 'compared with'],
            ['auffällig', 'striking, notable']
          ] },
          { group: '🤝 Verhandeln', rows: [
            ['das Gehalt', 'the salary'],
            ['die Gehaltsvorstellung', 'salary expectation'],
            ['verhandeln über', 'to negotiate about'],
            ['entgegenkommen', 'to meet someone halfway'],
            ['einen Kompromiss schließen', 'to reach a compromise'],
            ['sich einigen auf', 'to agree on'],
            ['in Aussicht stellen', 'to hold out the prospect of'],
            ['auf etwas bestehen', 'to insist on something'],
            ['der Spielraum', 'room for manoeuvre'],
            ['die Rahmenbedingungen', 'the general conditions'],
            ['unbefristet', 'permanent (contract)'],
            ['die Befristung', 'the fixed term'],
            ['die Gleitzeit', 'flexitime'],
            ['die Weiterbildung', 'further training']
          ] },
          { group: '⚖️ Arbeitsrecht', rows: [
            ['der Arbeitsvertrag', 'the employment contract'],
            ['der Tarifvertrag', 'the collective agreement'],
            ['der Betriebsrat', 'the works council'],
            ['die Mitbestimmung', 'co-determination'],
            ['die Gewerkschaft', 'the trade union'],
            ['die Probezeit', 'the probation period'],
            ['die Kündigungsfrist', 'the notice period'],
            ['der Kündigungsschutz', 'protection against dismissal'],
            ['die Abmahnung', 'the formal written warning'],
            ['die Abfindung', 'the severance payment'],
            ['die Lohnfortzahlung', 'continued payment when ill'],
            ['der Urlaubsanspruch', 'the holiday entitlement'],
            ['die Elternzeit', 'parental leave'],
            ['der Mindestlohn', 'the minimum wage'],
            ['die Betriebsvereinbarung', 'the works agreement']
          ] },
          { group: '🌐 Zusammenarbeit', rows: [
            ['das Homeoffice', 'working from home'],
            ['die Präsenzpflicht', 'obligation to be on site'],
            ['die Kernarbeitszeit', 'core hours'],
            ['die Zeitverschiebung', 'the time difference'],
            ['sich abstimmen mit', 'to coordinate with'],
            ['die Absprache', 'the arrangement'],
            ['die Erreichbarkeit', 'availability'],
            ['die Rückmeldung', 'the response, the feedback'],
            ['die Zuständigkeit', 'the area of responsibility'],
            ['die Eigenverantwortung', 'personal responsibility'],
            ['die Führungskraft', 'the manager'],
            ['der Umgangston', 'the tone between people'],
            ['der Feierabend', 'the end of the working day']
          ] },
          { group: '🧰 Funktionsverbgefüge', rows: [
            ['zur Verfügung stellen', 'to make available'],
            ['zur Verfügung stehen', 'to be available'],
            ['in Frage stellen', 'to call into question'],
            ['in Kontakt treten mit', 'to get in touch with'],
            ['Rücksicht nehmen auf', 'to show consideration for'],
            ['in Anspruch nehmen', 'to make use of'],
            ['zur Sprache bringen', 'to raise a topic'],
            ['in Kauf nehmen', 'to accept a drawback'],
            ['eine Entscheidung treffen', 'to take a decision'],
            ['Kritik üben an', 'to criticise'],
            ['in Betracht ziehen', 'to take into consideration'],
            ['Bezug nehmen auf', 'to refer to']
          ] },
          { group: '🎤 Vortrag und Einwand', rows: [
            ['der Vortrag', 'the talk'],
            ['die Gliederung', 'the outline'],
            ['der Einwand', 'the objection'],
            ['die Rückfrage', 'the follow-up question'],
            ['das Fazit', 'the conclusion'],
            ['berechtigt', 'justified, fair'],
            ['entgegenhalten', 'to counter, to reply'],
            ['verdeutlichen', 'to illustrate, to make clear'],
            ['zusammenfassend', 'summing up'],
            ['die Aufmerksamkeit', 'the attention']
          ] }
        ],

        sentences: [
          { de: 'Wir stellen Ihnen die Unterlagen zur Verfügung', en: 'We will make the documents available to you' },
          { de: 'Bitte nehmen Sie Rücksicht auf die Zeitverschiebung', en: 'Please take the time difference into account' },
          { de: 'Das ist ein berechtigter Einwand', en: 'That is a fair objection' },
          { de: 'Die Frist ist unbedingt einzuhalten', en: 'The deadline must absolutely be met' },
          { de: 'Mein Vortrag gliedert sich in drei Teile', en: 'My talk is in three parts' },
          { de: 'Ich möchte das Thema zur Sprache bringen', en: 'I would like to raise the topic' }
        ]
      },

      { // ===== B2 UNIT 3 — written out in full =====
        title: '🧪 Unit 3 — Science, Research and Evidence',
        subject: 'Wissenschaft und Forschung',
        canDo: ['Read a research summary and say what it does and does not show',
                'Describe figures and distinguish a correlation from a cause',
                'Unpack and produce extended participial attributes',
                'Calibrate how strongly you claim something, in both directions'],
        grammarFocus: ['Partizip I and II as attributes', 'Extended participial attributes and their relative clauses',
                       'Gerundivum: zu + Partizip I', 'Vorgangspassiv vs Zustandspassiv', 'Hedging adverbs and subjective modals'],
        topics: [
          {
            icon: '🔬', title: 'Reading a research summary',
            explanation:
              '<p>A German <span class="de">Abstract</span> has four moves, always in the same order, and recognising them lets you read a paper you do not fully understand: ' +
              '<strong>Fragestellung</strong> (what was asked), <strong>Methode</strong> (how it was investigated), <strong>Ergebnisse</strong> (what was found), ' +
              '<strong>Diskussion und Limitationen</strong> (what it does <em>not</em> show).</p>' +
              '<p>The fourth move is the one learners skip and examiners test. German academic writing is explicit about its own limits — ' +
              '<span class="de">Die Ergebnisse sind aufgrund der geringen Stichprobengröße nur eingeschränkt verallgemeinerbar</span> is a normal sentence, not an admission of failure. ' +
              'A B2 reading question very often asks what the study <em>cannot</em> prove.</p>' +
              '<p>The verbs do precise work and are not interchangeable. <span class="de">beweisen</span> (to prove) is rare and strong; <span class="de">belegen</span> (to substantiate) is the normal claim; ' +
              '<span class="de">nahelegen</span> (to suggest) and <span class="de">darauf hindeuten</span> (to indicate) are deliberately weaker. ' +
              'Swapping one for another changes what the author is asserting.</p>',
            vocab: vocabTable([
              ['die Studie', 'the study'],
              ['die Untersuchung', 'the investigation'],
              ['die Fragestellung', 'the research question'],
              ['die Stichprobe', 'the sample'],
              ['die Probanden', 'the test subjects, the participants'],
              ['die Erhebung', 'the data collection, the survey'],
              ['die Befragung', 'the survey (of people)'],
              ['die Kontrollgruppe', 'the control group'],
              ['die Längsschnittstudie', 'the longitudinal study'],
              ['der Zusammenhang', 'the connection, the relationship'],
              ['das Ergebnis', 'the result'],
              ['die Aussagekraft', 'the explanatory power, how much it tells us'],
              ['die Limitation', 'the limitation'],
              ['repräsentativ', 'representative'],
              ['signifikant', 'significant (statistically)'],
              ['belastbar', 'robust, reliable'],
              ['verallgemeinerbar', 'generalisable'],
              ['begutachtet', 'peer-reviewed'],
              ['die Fachzeitschrift', 'the academic journal'],
              ['die Replikation', 'the replication']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>The strength scale.</strong> These verbs are a ladder, and German readers hear every rung:</p>' +
              formTable('', ['Verb', 'Strength', 'Example'], [
                ['<strong>beweisen</strong>', 'strongest — rare in practice', 'Die Studie <strong>beweist</strong>, dass …'],
                ['<strong>belegen</strong> / <strong>nachweisen</strong>', 'strong, standard claim', 'Die Daten <strong>belegen</strong> einen Zusammenhang.'],
                ['<strong>zeigen</strong>', 'neutral', 'Die Ergebnisse <strong>zeigen</strong>, dass …'],
                ['<strong>nahelegen</strong>', 'weaker — suggests', 'Die Befunde <strong>legen nahe</strong>, dass …'],
                ['<strong>hindeuten auf</strong>', 'weakest — indicates', 'Die Zahlen <strong>deuten darauf hin</strong>, dass …'],
                ['<strong>widerlegen</strong>', 'refutes', 'Die Replikation <strong>widerlegt</strong> den Befund.']
              ]) +
              '<div class="example-box"><strong>Ein Abstract in vier Zügen:</strong><br>' +
              '<em>Fragestellung:</em> Die vorliegende Studie untersucht, ob sich Schlafdauer auf die Lernleistung auswirkt.<br>' +
              '<em>Methode:</em> Befragt und getestet wurden 312 Studierende über einen Zeitraum von sechs Monaten.<br>' +
              '<em>Ergebnisse:</em> Es zeigte sich ein signifikanter Zusammenhang zwischen Schlafdauer und Testergebnis.<br>' +
              '<em>Limitation:</em> Da die Teilnahme freiwillig erfolgte, ist die Stichprobe nicht repräsentativ; kausale Schlüsse sind nicht zulässig.</div>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Wie heißt die Gruppe der untersuchten Personen? Die ___________.', 'Stichprobe'),
              exInput('Wie heißen die Teilnehmenden an einem Experiment? Die ___________.', 'Probanden'),
              exSelect('Welches Verb ist am stärksten?', 'beweisen', ['hindeuten auf', 'nahelegen', 'beweisen', 'zeigen']),
              exSelect('Welches Verb ist am schwächsten?', 'hindeuten auf', ['belegen', 'hindeuten auf', 'nachweisen', 'beweisen']),
              exSelect('„Die Stichprobe ist nicht repräsentativ" heißt:', 'Die Ergebnisse gelten nicht für alle', ['Die Studie ist falsch', 'Die Ergebnisse gelten nicht für alle', 'Es gab zu wenige Fragen']),
              exInput('Eine Studie, die über Jahre dieselben Personen begleitet, ist eine ___________.', 'Längsschnittstudie'),
              exInput('Von Fachkolleginnen geprüft heißt auf Deutsch: ___________.', 'begutachtet'),
              exSelect('Welcher Teil eines Abstracts sagt, was die Studie NICHT zeigt?', 'die Limitationen', ['die Fragestellung', 'die Methode', 'die Limitationen'])
            ])
          },
          {
            icon: '📊', title: 'Correlation is not cause',
            explanation:
              '<p>This is the single most useful thing in the unit, both for the exam and outside it. German distinguishes carefully between ' +
              '<span class="de">ein Zusammenhang</span> (a relationship — two things move together) and <span class="de">eine Ursache</span> (a cause — one produces the other), ' +
              'and the grammar for each is different.</p>' +
              '<p>A relationship is stated with <span class="de">Es besteht ein Zusammenhang zwischen A und B</span> or <span class="de">A geht mit B einher</span>. ' +
              'A cause needs <span class="de">A führt zu B</span>, <span class="de">A verursacht B</span> or <span class="de">A ist auf B zurückzuführen</span>. ' +
              'Writing the second when the data only supports the first is a content error that a B2 examiner will mark, not a style preference.</p>' +
              '<p>The standard disclaimer is worth learning whole: <span class="de">Daraus lässt sich jedoch nicht schließen, dass …</span> — ' +
              '„from this, however, it cannot be concluded that …". The usual culprit is a <span class="de">Drittvariable</span>: ' +
              'ice cream sales and drownings rise together because of a third thing, the weather.</p>',
            vocab: vocabTable([
              ['der Zusammenhang', 'the relationship, the connection'],
              ['die Korrelation', 'the correlation'],
              ['die Ursache', 'the cause'],
              ['die Wirkung', 'the effect'],
              ['die Kausalität', 'causality'],
              ['die Scheinkorrelation', 'the spurious correlation'],
              ['die Drittvariable', 'the third variable'],
              ['einhergehen mit', 'to go hand in hand with'],
              ['führen zu', 'to lead to'],
              ['verursachen', 'to cause'],
              ['zurückführen auf', 'to attribute to'],
              ['sich auswirken auf', 'to have an effect on'],
              ['beeinflussen', 'to influence'],
              ['bedingen', 'to condition, to bring about'],
              ['zunehmen', 'to increase'],
              ['abnehmen', 'to decrease'],
              ['doppelt so viele wie', 'twice as many as'],
              ['jeder dritte', 'one in three'],
              ['ein Drittel', 'a third'],
              ['der Mittelwert', 'the mean, the average value']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Two families of sentence, and they are not interchangeable:</strong></p>' +
              formTable('', ['Only a relationship', 'A genuine cause'], [
                ['Es besteht ein Zusammenhang zwischen A und B.', 'A führt zu B.'],
                ['A geht mit B einher.', 'A verursacht B.'],
                ['Je mehr A, desto mehr B.', 'B ist auf A zurückzuführen.'],
                ['A und B treten gemeinsam auf.', 'A wirkt sich auf B aus.'],
                ['Die Daten deuten auf einen Zusammenhang hin.', 'Die Daten belegen einen kausalen Effekt.']
              ]) +
              '<p><strong>je … desto</strong> links two comparatives. Its word order catches people out: ' +
              'the <span class="de">je</span> half is a subordinate clause (verb last), and the <span class="de">desto</span> half puts the verb straight after the comparative.</p>' +
              '<div class="example-box">' +
              '<strong>Je</strong> länger die Schlafdauer <u>war</u>, <strong>desto</strong> besser <u>waren</u> die Testergebnisse.<br>' +
              '<span class="note">je + Komparativ … Verb am Ende | desto + Komparativ + Verb + Subjekt</span><br><br>' +
              'Daraus <strong>lässt sich</strong> jedoch <strong>nicht schließen</strong>, dass mehr Schlaf bessere Noten verursacht — ' +
              'möglicherweise lernen ausgeruhte Menschen ohnehin anders.' +
              '</div>' +
              '<p class="note">Proportions: <span class="de">jeder dritte Befragte</span> (one in three — singular!), <span class="de">ein Drittel der Befragten</span>, ' +
              '<span class="de">doppelt so viele wie</span>, <span class="de">um 20 Prozent</span> (by) vs <span class="de">auf 20 Prozent</span> (to).</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Nur ein Zusammenhang: Es ___________ ein Zusammenhang zwischen Schlaf und Leistung.', 'besteht'),
              exInput('Eine echte Ursache: Rauchen ___________ zu Herzkrankheiten.', 'führt'),
              exSelect('Welcher Satz behauptet eine Ursache?', 'Lärm verursacht Stress.', ['Lärm und Stress gehen miteinander einher.', 'Lärm verursacht Stress.', 'Es besteht ein Zusammenhang zwischen Lärm und Stress.']),
              exSelect('Zwei Dinge steigen gemeinsam, aber wegen eines dritten Faktors. Das ist eine:', 'Scheinkorrelation', ['Kausalität', 'Scheinkorrelation', 'Replikation']),
              exInput('Der klassische Vorbehalt: Daraus lässt sich nicht ___________, dass …', 'schließen'),
              exSelect('<span class="de">Je länger die Pause war, ___ besser war das Ergebnis.</span>', 'desto', ['desto', 'als', 'wie']),
              exSelect('Welche Wortstellung stimmt?', 'Je mehr er lernte, desto besser wurden die Noten.', ['Je mehr er lernte, desto die Noten wurden besser.', 'Je mehr er lernte, desto besser wurden die Noten.', 'Je mehr lernte er, desto besser die Noten wurden.']),
              exInput('„one in three respondents" auf Deutsch: ___________ dritte Befragte', 'jeder'),
              exSelect('Der Anteil stieg ___ 20 Prozent (von 15 auf 20).', 'auf', ['um', 'auf', 'bei'])
            ])
          },
          {
            icon: '🧩', title: 'Participles as attributes',
            explanation:
              '<p>German can pack a whole relative clause in front of the noun, and academic and journalistic prose does it constantly. ' +
              'This is the construction that makes a B2 reader slow down, and once you can unpack it you read much faster.</p>' +
              '<p>Start with the simple pair. <strong>Partizip I</strong> (<span class="de">steigend</span>) is active and ongoing: <span class="de">die steigenden Kosten</span> — the costs that <em>are rising</em>. ' +
              '<strong>Partizip II</strong> (<span class="de">gestiegen</span>) is completed, and with transitive verbs passive: <span class="de">die gestiegenen Kosten</span> — the costs that <em>have risen</em>; ' +
              '<span class="de">die untersuchte Gruppe</span> — the group that <em>was studied</em>. Same noun, different time and voice.</p>' +
              '<p>Then the extended version: everything that would sit in the relative clause is pushed between the article and the participle — ' +
              '<span class="de">die <u>in den letzten Jahren stark</u> gestiegenen Kosten</span>. To read it, find the article, jump to the noun, then unpack backwards: ' +
              '<em>die Kosten, die in den letzten Jahren stark gestiegen sind</em>.</p>',
            vocab: formTable('', ['Partizipialattribut', 'Relativsatz', 'English'], [
              ['die <strong>steigenden</strong> Kosten', 'die Kosten, die steigen', 'the rising costs'],
              ['die <strong>gestiegenen</strong> Kosten', 'die Kosten, die gestiegen sind', 'the costs that have risen'],
              ['die <strong>untersuchte</strong> Gruppe', 'die Gruppe, die untersucht wurde', 'the group that was studied'],
              ['der <strong>vorliegende</strong> Bericht', 'der Bericht, der vorliegt', 'the present report'],
              ['die <strong>befragten</strong> Personen', 'die Personen, die befragt wurden', 'the people surveyed'],
              ['die <strong>zu lösende</strong> Aufgabe', 'die Aufgabe, die gelöst werden muss', 'the task to be solved'],
              ['die <strong>nicht zu unterschätzende</strong> Gefahr', 'die Gefahr, die nicht unterschätzt werden darf', 'the danger not to be underestimated']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Unpacking an extended attribute — a method that always works:</strong></p>' +
              '<ul class="goals">' +
              '<li>1. Find the <strong>article</strong> and the <strong>noun</strong> it belongs to. Everything between them is the attribute.</li>' +
              '<li>2. Turn the participle into a relative clause: Partizip I → active (<em>die steigen</em>), Partizip II → <em>…, die … wurden / sind</em>.</li>' +
              '<li>3. Hang the rest of the material back on, in the same order.</li>' +
              '</ul>' +
              '<div class="example-box">' +
              '<strong>die</strong> in den letzten Jahren stark <strong>gestiegenen Kosten</strong><br>' +
              '→ <strong>die Kosten</strong>, <strong>die</strong> in den letzten Jahren stark <strong>gestiegen sind</strong><br><br>' +
              '<strong>das</strong> von der Kommission im Juni <strong>vorgelegte Gutachten</strong><br>' +
              '→ <strong>das Gutachten</strong>, <strong>das</strong> von der Kommission im Juni <strong>vorgelegt wurde</strong>' +
              '</div>' +
              '<p><strong>The Gerundivum</strong> — <span class="de">zu</span> + Partizip I — means <em>must</em> or <em>can be done</em>, passively:</p>' +
              '<ul class="goals">' +
              '<li><span class="de">die zu lösende Aufgabe</span> = die Aufgabe, die gelöst werden muss</li>' +
              '<li><span class="de">die zu erwartenden Folgen</span> = die Folgen, die erwartet werden können</li>' +
              '</ul>' +
              '<p class="note">Produce the short ones (<em>die steigenden Kosten</em>) freely. The long ones are worth being able to <em>read</em> at B2; at C1 you will build them yourself.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Relativsatz: <em>die steigenden Kosten</em> → die Kosten, die ___________', 'steigen'),
              exInput('Relativsatz: <em>die befragten Personen</em> → die Personen, die befragt ___________', 'wurden'),
              exSelect('<span class="de">die untersuchte Gruppe</span> bedeutet:', 'die Gruppe, die untersucht wurde', ['die Gruppe, die untersucht', 'die Gruppe, die untersucht wurde', 'die Gruppe, die untersuchen wird']),
              exSelect('Was ist der Unterschied zwischen <em>die steigenden</em> und <em>die gestiegenen</em> Kosten?', 'steigend = sie steigen gerade; gestiegen = sie sind schon gestiegen', ['Es gibt keinen Unterschied', 'steigend = sie steigen gerade; gestiegen = sie sind schon gestiegen', 'steigend = Vergangenheit; gestiegen = Gegenwart']),
              exInput('Partizipialattribut: <em>die Kosten, die stark gestiegen sind</em> → die stark ___________ Kosten', 'gestiegenen'),
              exInput('Gerundivum: <em>die Aufgabe, die gelöst werden muss</em> → die zu ___________ Aufgabe', 'lösende'),
              exSelect('<span class="de">die zu erwartenden Folgen</span> bedeutet:', 'die Folgen, die erwartet werden können', ['die Folgen, die wir erwarten wollen', 'die Folgen, die erwartet werden können', 'die Folgen, die erwartet haben']),
              exInput('Entpacke: <em>das von der Kommission vorgelegte Gutachten</em> → das Gutachten, das von der Kommission vorgelegt ___________', 'wurde'),
              exSelect('Wo steht das Nomen in einem erweiterten Partizipialattribut?', 'ganz am Ende', ['ganz am Anfang', 'ganz am Ende', 'in der Mitte'])
            ])
          },
          {
            icon: '⚗️', title: 'Explaining methods: the passive',
            explanation:
              '<p>Scientific German describes <em>what was done</em>, not <em>who did it</em>, so the methods section is almost entirely passive. ' +
              'Two passives matter, and learners often use one where the other is needed.</p>' +
              '<p><strong>Vorgangspassiv</strong> (werden + Partizip II) describes the <em>process</em>: <span class="de">Die Proben werden gekühlt.</span> — they are being cooled. ' +
              '<strong>Zustandspassiv</strong> (sein + Partizip II) describes the <em>resulting state</em>: <span class="de">Die Proben sind gekühlt.</span> — they are in a cooled state. ' +
              'The test is simple: can you add <em>gerade</em> (currently)? <span class="de">Die Tür wird gerade geöffnet</span> works; <span class="de">Die Tür ist gerade geöffnet</span> changes the meaning to „is open right now".</p>' +
              '<p>In the past, the Vorgangspassiv takes <span class="de">worden</span> and not <span class="de">geworden</span>: <span class="de">Die Daten sind erhoben worden</span> (perfect) or ' +
              '<span class="de">Die Daten wurden erhoben</span> (simple past, normal in a methods section). ' +
              'And when you want to leave out the agent — which you almost always do in science — you simply omit the <span class="de">von</span>-phrase.</p>',
            vocab: vocabTable([
              ['erheben', 'to collect (data)'],
              ['auswerten', 'to evaluate, to analyse'],
              ['durchführen', 'to carry out'],
              ['untersuchen', 'to investigate'],
              ['messen', 'to measure'],
              ['vergleichen', 'to compare'],
              ['aufzeichnen', 'to record'],
              ['überprüfen', 'to verify, to check'],
              ['das Verfahren', 'the procedure, the method'],
              ['die Methode', 'the method'],
              ['das Experiment', 'the experiment'],
              ['die Messung', 'the measurement'],
              ['die Hypothese', 'the hypothesis'],
              ['die Annahme', 'the assumption'],
              ['bestätigen', 'to confirm'],
              ['widerlegen', 'to refute'],
              ['anschließend', 'subsequently'],
              ['zunächst', 'first, initially'],
              ['abschließend', 'finally'],
              ['randomisiert', 'randomised']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['', 'Vorgangspassiv (process)', 'Zustandspassiv (state)'], [
                ['Präsens', 'Die Daten <strong>werden erhoben</strong>.', 'Die Daten <strong>sind erhoben</strong>.'],
                ['Präteritum', 'Die Daten <strong>wurden erhoben</strong>.', 'Die Daten <strong>waren erhoben</strong>.'],
                ['Perfekt', 'Die Daten <strong>sind erhoben worden</strong>.', 'Die Daten <strong>sind erhoben gewesen</strong>. <span class="note">(rare)</span>'],
                ['Meaning', 'something is happening / happened', 'something is / was already done']
              ]) +
              '<div class="example-box">' +
              '<strong>Zunächst</strong> <u>wurden</u> 312 Studierende per Zufall in zwei Gruppen <u>eingeteilt</u>. ' +
              '<strong>Anschließend</strong> <u>wurde</u> bei beiden Gruppen die Schlafdauer <u>erhoben</u>. ' +
              'Die Daten <u>wurden</u> mit einem statistischen Verfahren <u>ausgewertet</u>; die Auswertung <u>ist</u> inzwischen <u>abgeschlossen</u>.' +
              '</div>' +
              '<p>Three alternatives to the passive that keep the agent out of the sentence — vary them so a long methods section does not become a wall of <em>wurde</em>:</p>' +
              '<ul class="goals">' +
              '<li><strong>man</strong> — <span class="de">Man erhob die Daten …</span> (less formal)</li>' +
              '<li><strong>sich lassen</strong> — <span class="de">Der Effekt lässt sich messen.</span> = can be measured</li>' +
              '<li><strong>sein + zu</strong> — <span class="de">Der Effekt ist zu messen.</span> = must / can be measured</li>' +
              '</ul>' +
              '<p class="note">With a modal verb the passive goes <em>infinitive</em> + <span class="de">werden</span>: <span class="de">Die Daten müssen erhoben werden</span>, never <em>müssen erhoben wurden</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Vorgangspassiv: <em>Man erhebt die Daten.</em> → Die Daten ___________ erhoben.', 'werden'),
              exInput('Präteritum: <em>Man erhob die Daten.</em> → Die Daten ___________ erhoben.', 'wurden'),
              exInput('Perfekt: Die Daten sind erhoben ___________.', 'worden'),
              exSelect('„Die Proben sind gekühlt" beschreibt:', 'einen Zustand', ['einen Vorgang', 'einen Zustand', 'die Zukunft']),
              exSelect('„Die Proben werden gekühlt" beschreibt:', 'einen Vorgang', ['einen Vorgang', 'einen Zustand', 'die Vergangenheit']),
              exSelect('Welcher Satz ist richtig?', 'Die Daten müssen erhoben werden.', ['Die Daten müssen erhoben wurden.', 'Die Daten müssen erhoben werden.', 'Die Daten werden müssen erhoben.']),
              exInput('Passivalternative: <em>Der Effekt kann gemessen werden.</em> → Der Effekt ___________ sich messen.', 'lässt'),
              exInput('Passivalternative: <em>Der Effekt muss gemessen werden.</em> → Der Effekt ist ___________ messen.', 'zu')
            ])
          },
          {
            icon: '🗣️', title: 'Hedging: how sure are you?',
            explanation:
              '<p>Academic German is not hedged by timidity but by <strong>precision</strong>: every claim is calibrated to what the evidence allows, and the calibration is done with small words. ' +
              'Two failure modes are equally marked down — overclaiming (<span class="de">Das beweist, dass …</span> from a single survey) and underclaiming (hedging so much that no position is left).</p>' +
              '<p>The adverbs form a scale. <span class="de">offenbar</span> and <span class="de">anscheinend</span> mean „it seems" and are about what the speaker has <em>observed</em>; ' +
              '<span class="de">vermutlich</span>, <span class="de">wahrscheinlich</span> and <span class="de">möglicherweise</span> are about <em>probability</em>; ' +
              '<span class="de">angeblich</span> is about <em>someone else\'s</em> claim and carries doubt; <span class="de">zweifellos</span> and <span class="de">eindeutig</span> are strong commitment.</p>' +
              '<p>The modal verbs do the same job in a different register: <span class="de">Er <strong>dürfte</strong> recht haben</span> (probably), <span class="de">Er <strong>könnte</strong> recht haben</span> (possibly), ' +
              '<span class="de">Er <strong>muss</strong> recht haben</span> (the evidence leaves no other conclusion). ' +
              'Note that <span class="de">müssen</span> here is a claim about <em>certainty</em>, not obligation — a classic source of misreading.</p>',
            vocab: formTable('', ['Certainty', 'Adverb', 'Modal verb'], [
              ['≈ 100 %', 'zweifellos · eindeutig · zweifelsfrei', 'Er <strong>muss</strong> recht haben.'],
              ['≈ 80 %', 'sicherlich · mit hoher Wahrscheinlichkeit', 'Er <strong>dürfte</strong> recht haben.'],
              ['≈ 60 %', 'vermutlich · wahrscheinlich', 'Er <strong>wird</strong> wohl recht haben.'],
              ['≈ 40 %', 'möglicherweise · eventuell · womöglich', 'Er <strong>könnte</strong> recht haben.'],
              ['observed, not verified', 'offenbar · anscheinend · scheinbar*', 'Er <strong>scheint</strong> recht zu haben.'],
              ['someone else\'s claim', 'angeblich · vorgeblich', 'Er <strong>soll</strong> recht haben.'],
              ['≈ 0 %', 'keinesfalls · auf keinen Fall', 'Er <strong>kann</strong> nicht recht haben.']
            ]) + '<p class="note">*<em>scheinbar</em> means „only apparently, but not really" — <em>anscheinend</em> means „it looks that way, and probably is". Easy to confuse, and the meaning flips.</p>',
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Subjective vs objective modals.</strong> The same verb means two different things depending on whether it describes the world or your judgement of it:</p>' +
              formTable('', ['', 'Objective (what is required / possible)', 'Subjective (how sure I am)'], [
                ['<strong>müssen</strong>', 'Er muss arbeiten. — he has to', 'Er muss krank sein. — he must be ill (I am sure)'],
                ['<strong>können</strong>', 'Er kann schwimmen. — he is able to', 'Er kann der Täter sein. — he may be the culprit'],
                ['<strong>dürfen</strong>', 'Er darf gehen. — he is allowed to', 'Er dürfte recht haben. — he is probably right'],
                ['<strong>sollen</strong>', 'Er soll arbeiten. — he is supposed to', 'Er soll krank sein. — he is said to be ill'],
                ['<strong>wollen</strong>', 'Er will gehen. — he wants to', 'Er will nichts gewusst haben. — he claims he knew nothing']
              ]) +
              '<p>The subjective use is recognisable by its <strong>infinitive perfect</strong> for past reference: ' +
              '<span class="de">Er <strong>muss</strong> den Fehler <strong>gemacht haben</strong>.</span> — he must have made the mistake. ' +
              'A past obligation would use <em>musste</em>, never this form.</p>' +
              '<div class="example-box">' +
              'Die Daten <strong>legen nahe</strong>, dass Schlafmangel die Leistung <strong>beeinträchtigen dürfte</strong>. ' +
              'Ein kausaler Zusammenhang <strong>lässt sich</strong> daraus allerdings <strong>nicht zweifelsfrei ableiten</strong>.' +
              '</div>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('„Er muss krank sein" (subjektiv) bedeutet:', 'Ich bin sicher, dass er krank ist.', ['Er hat die Pflicht, krank zu sein.', 'Ich bin sicher, dass er krank ist.', 'Er will krank sein.']),
              exSelect('„Er dürfte recht haben" bedeutet:', 'Er hat wahrscheinlich recht.', ['Er darf recht haben.', 'Er hat wahrscheinlich recht.', 'Er hat sicher unrecht.']),
              exSelect('„Er soll krank sein" bedeutet:', 'Man sagt, dass er krank ist.', ['Er muss krank bleiben.', 'Man sagt, dass er krank ist.', 'Er ist sicher krank.']),
              exSelect('Welches Adverb drückt die höchste Sicherheit aus?', 'zweifellos', ['möglicherweise', 'vermutlich', 'zweifellos', 'angeblich']),
              exSelect('Welches Adverb markiert die Behauptung eines anderen, an der man zweifelt?', 'angeblich', ['angeblich', 'eindeutig', 'sicherlich']),
              exInput('Subjektiv, Vergangenheit: Er muss den Fehler gemacht ___________.', 'haben'),
              exSelect('<span class="de">scheinbar</span> bedeutet:', 'nur dem Anschein nach, in Wirklichkeit nicht', ['offenbar, wahrscheinlich ja', 'nur dem Anschein nach, in Wirklichkeit nicht', 'ganz sicher']),
              exSelect('Eine einzelne Umfrage belegt eine Ursache. Der Fehler ist:', 'Übertreibung — die Aussage ist stärker als die Daten', ['zu vorsichtig formuliert', 'Übertreibung — die Aussage ist stärker als die Daten', 'ein Grammatikfehler'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: reading a research summary, correlation versus cause, participial attributes, passive in methods sections and hedging together.</p>',
        exercises: exerciseList([
          exInput('Die Studie ___________ nahe, dass Bewegung die Stimmung verbessert. (schwach)', 'legt'),
          exInput('Nur ein Zusammenhang: Es ___________ ein Zusammenhang zwischen A und B.', 'besteht'),
          exInput('Je mehr er lernte, ___________ besser wurden die Noten.', 'desto'),
          exInput('Entpacke: <em>die stark gestiegenen Kosten</em> → die Kosten, die stark gestiegen ___________', 'sind'),
          exInput('Gerundivum: <em>die Aufgabe, die gelöst werden muss</em> → die zu ___________ Aufgabe', 'lösende'),
          exInput('Vorgangspassiv Präteritum: Die Daten ___________ ausgewertet.', 'wurden'),
          exInput('Perfekt: Die Messung ist durchgeführt ___________.', 'worden'),
          exSelect('„Die Proben sind gekühlt" ist:', 'Zustandspassiv', ['Vorgangspassiv', 'Zustandspassiv', 'Aktiv']),
          exSelect('„Er muss die Prüfung bestanden haben" (subjektiv) heißt:', 'Er hat sie sicher bestanden.', ['Er musste sie bestehen.', 'Er hat sie sicher bestanden.', 'Er will sie bestehen.']),
          exSelect('Welches Verb behauptet am meisten?', 'beweisen', ['andeuten', 'nahelegen', 'beweisen', 'hindeuten auf']),
          exSelect('Eine Stichprobe, die nicht für alle gilt, ist nicht:', 'repräsentativ', ['signifikant', 'repräsentativ', 'randomisiert']),
          exSelect('Wo steht das Nomen im erweiterten Partizipialattribut?', 'am Ende', ['am Anfang', 'am Ende', 'in der Mitte']),
          exInput('Dritte Variable, die einen falschen Zusammenhang erzeugt: die ___________.', 'Drittvariable'),
          exSelect('<span class="de">jeder dritte Befragte</span> bedeutet:', 'one in three respondents', ['a third of the respondents together', 'one in three respondents', 'the third respondent'])
        ]),

        reading: {
          intro: 'A science-journalism piece about a sleep study. It is deliberately written with <strong>hedging</strong>: pay attention to what the author claims, what the author only suggests, and what the author says the study cannot show.',
          words: 360, minutes: 9,
          text: readingText('Macht Schlaf klüger? Was die Studie wirklich zeigt', [
            'Wer ausreichend schläft, lernt besser — diese Aussage gehört zu den am häufigsten zitierten Befunden der Gesundheitsforschung. Eine neue Untersuchung der Universität Freiburg, an der 312 Studierende über sechs Monate teilgenommen haben, scheint sie nun erneut zu bestätigen. Bei genauerem Hinsehen ist das Bild allerdings differenzierter.',
            'Die Teilnehmenden protokollierten ihre Schlafdauer mit einem Armband und absolvierten monatlich einen standardisierten Lerntest. Es zeigte sich ein signifikanter Zusammenhang: Je länger die durchschnittliche Schlafdauer, desto besser fielen die Testergebnisse aus. Studierende mit mehr als sieben Stunden Schlaf erreichten im Schnitt rund zwölf Prozent höhere Werte als jene mit weniger als sechs Stunden.',
            'Die Autorinnen und Autoren warnen jedoch selbst vor voreiligen Schlüssen. Da die Teilnahme freiwillig erfolgte, sei die Stichprobe nicht repräsentativ; wer sich für eine Schlafstudie meldet, interessiere sich vermutlich ohnehin stärker für Gesundheit und Leistung. Zudem seien Lebensumstände wie Nebenjobs oder Prüfungsstress, die sowohl den Schlaf als auch die Leistung beeinflussen dürften, nicht kontrolliert worden. Ein ursächlicher Effekt lasse sich daher nicht belegen, die Befunde legten ihn allenfalls nahe.',
            'Unabhängige Fachleute sehen das ähnlich. Eine Schlafmedizinerin, die an der Studie nicht beteiligt war, nennt die Ergebnisse „plausibel, aber nicht beweiskräftig". Aussagekräftig wäre erst ein Experiment, bei dem zufällig ausgewählte Gruppen unterschiedlich lange schlafen — was aus ethischen und praktischen Gründen schwer durchzuführen sei.',
            'Was bleibt? Die Studie liefert keinen Beweis, aber ein weiteres Indiz in einer Reihe übereinstimmender Beobachtungen. Dass ausgeruhte Menschen besser lernen, ist wahrscheinlich; wie groß der Anteil des Schlafs daran ist, bleibt offen.'
          ], 'Wissenschaftsjournalismus, fiktiv — im Stil der deutschen Qualitätspresse'),
          glossary: vocabTable([
            ['die Teilnehmenden', 'the participants'],
            ['protokollieren', 'to record, to log'],
            ['standardisiert', 'standardised'],
            ['signifikant', 'statistically significant'],
            ['voreilig', 'premature, hasty'],
            ['ursächlich', 'causal'],
            ['beweiskräftig', 'conclusive, probative'],
            ['aussagekräftig', 'meaningful, telling'],
            ['das Indiz', 'the indication, the piece of circumstantial evidence'],
            ['differenziert', 'nuanced'],
            ['allenfalls', 'at most, at best'],
            ['ohnehin', 'in any case']
          ]),
          questions: exerciseList([
            exSelect('Was hat die Studie untersucht?', 'Den Zusammenhang zwischen Schlafdauer und Lernleistung', ['Den Einfluss von Ernährung auf den Schlaf', 'Den Zusammenhang zwischen Schlafdauer und Lernleistung', 'Den Effekt von Schlafmitteln']),
            exInput('Wie viele Studierende haben teilgenommen und wie lange? (Zahl + Dauer)', '312 über sechs monate|312 sechs monate|312 studierende, sechs monate|312 in sechs monaten|312 über 6 monate'),
            exTF('Die Studie hat bewiesen, dass mehr Schlaf bessere Leistungen verursacht.', false),
            exSelect('Warum ist die Stichprobe laut den Autoren nicht repräsentativ?', 'Die Teilnahme war freiwillig.', ['Es waren zu wenige Personen.', 'Die Teilnahme war freiwillig.', 'Sie waren alle über 30.']),
            exSelect('Welche mögliche Drittvariable nennt der Text?', 'Nebenjobs und Prüfungsstress', ['Alter und Geschlecht', 'Nebenjobs und Prüfungsstress', 'Ernährung und Sport']),
            exSelect('Was wäre laut der Schlafmedizinerin wirklich aussagekräftig?', 'Ein Experiment mit zufällig zugeteilten Gruppen', ['Eine größere Umfrage', 'Ein Experiment mit zufällig zugeteilten Gruppen', 'Eine zweite Studie derselben Art']),
            exInput('Mit welchem Verb im Text wird die schwächste Aussage über den Effekt gemacht? („die Befunde ___ ihn allenfalls nahe")', 'legten'),
            exInput('Warum steht im dritten Absatz der Konjunktiv I („sei", „seien", „lasse")? Antworte auf Englisch.', 'because it reports what the authors say|it is indirect speech|the journalist reports the authors\' claims|reported speech', 'one short sentence', 'en'),
            exSelect('Welches Fazit zieht der Text?', 'Ein Indiz, aber kein Beweis', ['Ein klarer Beweis', 'Ein Indiz, aber kein Beweis', 'Ein Widerspruch zu früheren Studien'])
          ])
        },

        listening: {
          title: 'Radiobeitrag — Wie liest man eine Studie?',
          intro: 'A science radio segment with a researcher. Listen <strong>once</strong>, then answer; the transcript is for checking afterwards.',
          lines: [
            ['Moderator', 'Jede Woche erscheint eine neue Studie, die angeblich etwas beweist — vom Kaffee bis zum Schlaf. Frau Dr. Bergmann, wie liest man so etwas richtig?'],
            ['Bergmann', 'Zuerst würde ich nach der Stichprobe fragen: Wie viele Personen, wie wurden sie ausgewählt, und für wen gelten die Ergebnisse überhaupt?'],
            ['Moderator', 'Und dann?'],
            ['Bergmann', 'Dann nach der Art des Zusammenhangs. Sehr oft wird aus einer Korrelation eine Ursache gemacht. Dass zwei Dinge gleichzeitig auftreten, heißt noch lange nicht, dass das eine das andere verursacht.'],
            ['Moderator', 'Haben Sie ein Beispiel?'],
            ['Bergmann', 'Das klassische ist die Eiscreme: Im Sommer steigt der Eisverkauf, und gleichzeitig ertrinken mehr Menschen. Eis macht aber niemanden ertrinken — beides hängt am warmen Wetter.'],
            ['Moderator', 'Worauf achten Sie noch?'],
            ['Bergmann', 'Auf die Wortwahl. Steht da „beweist", ist Skepsis angebracht; seriöse Autoren schreiben eher „legt nahe" oder „deutet darauf hin". Und: Gibt es eine Kontrollgruppe?'],
            ['Moderator', 'Was ist mit der Zahl der Teilnehmenden? Je mehr, desto besser?'],
            ['Bergmann', 'Nicht automatisch. Eine große, aber verzerrte Stichprobe kann schlechter sein als eine kleine, gut ausgewählte. Entscheidend ist, ob sie repräsentativ ist.'],
            ['Moderator', 'Ihr wichtigster Rat an Leserinnen und Leser?'],
            ['Bergmann', 'Fragen Sie sich bei jeder Schlagzeile: Was zeigt die Studie tatsächlich, und was wird nur daraus gemacht? Meistens liegt zwischen beidem ein deutlicher Abstand.']
          ],
          questions: exerciseList([
            exSelect('Wonach würde Frau Dr. Bergmann zuerst fragen?', 'nach der Stichprobe', ['nach dem Autor', 'nach der Stichprobe', 'nach dem Preis der Studie']),
            exTF('Wenn zwei Dinge gleichzeitig auftreten, verursacht das eine automatisch das andere.', false),
            exSelect('Welches Beispiel nennt sie für eine Scheinkorrelation?', 'Eisverkauf und Ertrinken', ['Kaffee und Schlaf', 'Eisverkauf und Ertrinken', 'Sport und Gewicht']),
            exInput('Was ist die gemeinsame Ursache in ihrem Beispiel? (ein Wort)', 'wetter|das wetter|warmes wetter|das warme wetter'),
            exSelect('Auf welche Wörter in einer Studie soll man achten?', 'auf starke Verben wie „beweist"', ['auf Fremdwörter', 'auf starke Verben wie „beweist"', 'auf die Länge des Titels']),
            exSelect('Welche Formulierung klingt seriöser?', 'legt nahe', ['beweist', 'legt nahe', 'ist sicher']),
            exSelect('Was sagt sie über sehr große Stichproben?', 'Sie können schlechter sein, wenn sie verzerrt sind.', ['Sie sind immer besser.', 'Sie können schlechter sein, wenn sie verzerrt sind.', 'Sie sind nutzlos.']),
            exInput('Welche Gruppe sollte es laut ihr geben? (ein Wort)', 'kontrollgruppe|eine kontrollgruppe'),
            exSelect('Was ist ihr wichtigster Rat?', 'Fragen, was die Studie wirklich zeigt', ['Keine Studien mehr zu lesen', 'Fragen, was die Studie wirklich zeigt', 'Nur große Studien zu glauben'])
          ])
        },

        writing: {
          title: 'Zusammenfassung — Eine Studie darstellen',
          textType: 'Zusammenfassung eines Zeitungsartikels (sachlich, indirekte Rede)',
          minWords: 150, maxWords: 200, minutes: 40,
          expect: ['indirect', 'passive', 'conclusion'],
          task: '<p>Sie haben den Artikel <em>„Macht Schlaf klüger? Was die Studie wirklich zeigt"</em> gelesen (Lesen, diese Einheit).</p>' +
            '<p>Schreiben Sie eine <strong>Zusammenfassung</strong> für Ihren Studiengang. Geben Sie wieder, was die Studie untersucht hat, wie sie vorging, was sie fand — und was sie <strong>nicht</strong> zeigen kann.</p>',
          plainTask: 'Write a factual summary in German (150–200 words) of a science-journalism article about a sleep study (312 students, six months, sleep tracked by wristband, monthly standardised learning test; significant link between sleep duration and test scores — about 12 percent higher for more than seven hours; authors warn the sample is voluntary and not representative, that confounders like part-time jobs and exam stress were not controlled, so no causal effect can be shown; an independent sleep physician calls the results plausible but not conclusive and says only a randomised experiment would be telling). The summary must: open with a standard summary sentence naming the article and topic; describe the method; report the result; state the limitations; use indirect speech (Konjunktiv I or II) for the authors\' and experts\' claims; contain no personal opinion and no "ich". Register: neutral, formal, present tense for the frame.',
          bullets: [
            'Beginnen Sie mit dem <strong>Standardsatz</strong>: „In dem Artikel … geht es um …"',
            'Beschreiben Sie die <strong>Methode</strong> (Stichprobe, Dauer, Messung) — Passiv ist hier ideal.',
            'Nennen Sie das <strong>Ergebnis</strong> mit der Zahl.',
            'Nennen Sie die <strong>Einschränkungen</strong> — das ist der wichtigste Teil.',
            'Geben Sie Aussagen der Autoren und der Expertin in <strong>indirekter Rede</strong> wieder.',
            'Keine eigene Meinung, kein „ich".'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Einleiten', 'In dem Artikel „…" geht es um … · Der Text thematisiert … · Der Autor geht der Frage nach, ob …'],
            ['Methode', 'Untersucht <strong>wurden</strong> 312 Studierende … · Die Daten <strong>wurden</strong> über sechs Monate <strong>erhoben</strong>.'],
            ['Ergebnis', 'Es zeigte sich ein signifikanter Zusammenhang zwischen … · Die Befunde belegen / legen nahe …'],
            ['Einschränken', 'Die Autoren weisen darauf hin, die Stichprobe <strong>sei</strong> nicht repräsentativ. · Ein ursächlicher Effekt <strong>lasse sich</strong> nicht belegen.'],
            ['Expertin zitieren', 'Eine unabhängige Fachfrau nenne die Ergebnisse „plausibel". · So die Expertin, <strong>sei</strong> …'],
            ['Schluss', 'Zusammenfassend lässt sich festhalten, dass … · Die Studie liefert somit kein Beweis, sondern ein Indiz.']
          ]),
          criteria: [
            'Der erste Satz nennt Artikel und Thema („In dem Artikel … geht es um …").',
            'Die Methode ist beschrieben: wer, wie viele, wie lange, wie gemessen.',
            'Das Ergebnis steht mit der konkreten Zahl.',
            'Die Einschränkungen sind genannt: nicht repräsentativ UND nicht kontrollierte Drittvariablen UND keine Kausalität.',
            'Aussagen anderer stehen in Konjunktiv I (oder II, wenn I nicht eindeutig ist).',
            'Der Rahmen („Der Artikel thematisiert …") steht im Indikativ Präsens.',
            'Keine eigene Meinung, kein „ich", keine Wertung wie „interessant".',
            'Ich liege zwischen 150 und 200 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Germany\'s research landscape is divided by function.</strong> Universities do teaching and research tied to chairs; the <span class="de">Max-Planck-Gesellschaft</span> does basic research, ' +
          'the <span class="de">Fraunhofer-Gesellschaft</span> applied research with industry, the <span class="de">Helmholtz-Gemeinschaft</span> large-scale infrastructure, and the <span class="de">Leibniz-Gemeinschaft</span> a middle band. ' +
          'Knowing which institute a study comes from tells you what kind of claim it is likely to make.</p>' +
          '<p><strong>The doctorate carries real weight.</strong> A German academic title is part of the name in formal address: <span class="de">Frau Dr. Bergmann</span>, <span class="de">Herr Prof. Dr. Weber</span>. ' +
          'Leaving it out in a first e-mail to a professor is read as careless rather than modern. Austria goes further and uses titles almost everywhere.</p>' +
          '<p><strong>Plagiarism scandals shaped the culture.</strong> Several high-profile ministers lost their offices after their doctoral theses were found to contain unattributed passages. ' +
          'As a result, <span class="de">Quellenangaben</span> are taken very seriously, and universities routinely run submitted work through detection software. ' +
          'Paraphrasing is fine; paraphrasing without a source is not.</p>' +
          '<p><strong>The skeptical reader is the default.</strong> German science journalism and academic writing both assume a reader who will ask what the data cannot show, ' +
          'which is why the Limitationen section is a fixed part of the genre and not an apology. A paper without one looks overconfident, not strong.</p>' +
          '<p><strong>Open access is a live policy question.</strong> <span class="de">Open Access</span> mandates for publicly funded research and the DEAL agreements with large publishers have been among the most visible science-policy debates, ' +
          'and the phrase <span class="de">Wissenschaftsfreiheit</span> — a right written into the Grundgesetz — is invoked in them constantly.</p>' +
          '<p><strong>Everyday faith in statistics is lower than you would expect.</strong> Germans are often described as trusting expertise, but the habit of asking <span class="de">Wer hat das bezahlt?</span> ' +
          'about a study is just as common — and a good reflex to bring to your own reading.</p>',

        recap: [
          { group: '🔬 Studie und Methode', rows: [
            ['die Studie', 'the study'],
            ['die Untersuchung', 'the investigation'],
            ['die Fragestellung', 'the research question'],
            ['die Stichprobe', 'the sample'],
            ['die Probanden', 'the test subjects'],
            ['die Teilnehmenden', 'the participants'],
            ['die Erhebung', 'the data collection'],
            ['die Befragung', 'the survey'],
            ['die Kontrollgruppe', 'the control group'],
            ['die Längsschnittstudie', 'the longitudinal study'],
            ['das Verfahren', 'the procedure'],
            ['die Hypothese', 'the hypothesis'],
            ['randomisiert', 'randomised'],
            ['begutachtet', 'peer-reviewed']
          ] },
          { group: '📊 Zusammenhang und Ursache', rows: [
            ['der Zusammenhang', 'the relationship'],
            ['die Korrelation', 'the correlation'],
            ['die Ursache', 'the cause'],
            ['die Wirkung', 'the effect'],
            ['die Scheinkorrelation', 'the spurious correlation'],
            ['die Drittvariable', 'the third variable'],
            ['einhergehen mit', 'to go hand in hand with'],
            ['führen zu', 'to lead to'],
            ['verursachen', 'to cause'],
            ['zurückführen auf', 'to attribute to'],
            ['sich auswirken auf', 'to have an effect on'],
            ['beeinflussen', 'to influence'],
            ['ursächlich', 'causal'],
            ['je … desto', 'the more … the more']
          ] },
          { group: '📏 Aussagestärke', rows: [
            ['beweisen', 'to prove'],
            ['belegen', 'to substantiate'],
            ['nachweisen', 'to demonstrate'],
            ['nahelegen', 'to suggest'],
            ['hindeuten auf', 'to indicate'],
            ['widerlegen', 'to refute'],
            ['bestätigen', 'to confirm'],
            ['repräsentativ', 'representative'],
            ['signifikant', 'significant'],
            ['belastbar', 'robust'],
            ['verallgemeinerbar', 'generalisable'],
            ['aussagekräftig', 'meaningful'],
            ['das Indiz', 'the indication']
          ] },
          { group: '🎚️ Vorsicht und Gewissheit', rows: [
            ['zweifellos', 'undoubtedly'],
            ['eindeutig', 'clearly'],
            ['vermutlich', 'presumably'],
            ['wahrscheinlich', 'probably'],
            ['möglicherweise', 'possibly'],
            ['offenbar', 'evidently'],
            ['anscheinend', 'apparently'],
            ['scheinbar', 'only seemingly'],
            ['angeblich', 'allegedly'],
            ['allenfalls', 'at most'],
            ['ohnehin', 'in any case'],
            ['Er dürfte recht haben.', 'He is probably right.'],
            ['Er muss krank sein.', 'He must be ill.']
          ] },
          { group: '⚗️ Methode beschreiben', rows: [
            ['erheben', 'to collect (data)'],
            ['auswerten', 'to evaluate'],
            ['durchführen', 'to carry out'],
            ['untersuchen', 'to investigate'],
            ['messen', 'to measure'],
            ['aufzeichnen', 'to record'],
            ['protokollieren', 'to log'],
            ['überprüfen', 'to verify'],
            ['zunächst', 'first'],
            ['anschließend', 'subsequently'],
            ['abschließend', 'finally'],
            ['die Annahme', 'the assumption'],
            ['voreilig', 'premature'],
            ['differenziert', 'nuanced']
          ] }
        ],

        sentences: [
          { de: 'Die Daten wurden über sechs Monate erhoben', en: 'The data were collected over six months' },
          { de: 'Ein ursächlicher Effekt lässt sich nicht belegen', en: 'A causal effect cannot be demonstrated' },
          { de: 'Je länger er schlief, desto besser waren die Ergebnisse', en: 'The longer he slept, the better the results' },
          { de: 'Die Studie legt einen Zusammenhang nahe', en: 'The study suggests a connection' },
          { de: 'Die Stichprobe ist nicht repräsentativ', en: 'The sample is not representative' },
          { de: 'Er dürfte recht haben', en: 'He is probably right' }
        ]
      },

      U('🌍 Unit 4 — Globalisation and Economy', 'Globalisierung und Wirtschaft', [
        t('🚢', 'Trade and supply chains', 'Explaining dependence and risk'),
        t('🏦', 'Economic basics in German', 'Inflation, Konjunktur, Wachstum'),
        t('⚖️', 'Winners and losers', 'Structuring a balanced analysis'),
        t('🏷️', 'Consumption and ethics', 'Lieferkettengesetz, Fair Trade'),
        t('✍️', 'An analytical essay', 'Thesis, argument, counter-argument, conclusion')
      ], ['Analyse an economic issue in writing', 'Present a balanced argument with a clear conclusion'],
         ['Causal and consecutive clauses: sodass, infolgedessen', 'Genitive constructions in formal style']),

      U('🖥️ Unit 5 — Digitalisation and AI', 'Digitalisierung', [
        t('🤖', 'AI in public debate', 'Hype, risk, regulation'),
        t('🔐', 'Data protection', 'DSGVO in plain German'),
        t('👥', 'Work and automation', 'Which jobs change, and how'),
        t('🧠', 'Algorithms and bias', 'Explaining a complex idea simply'),
        t('🗣️', 'A panel-style discussion', 'Moderating and summarising others')
      ], ['Explain a technical topic to a non-expert', 'Moderate and summarise a group discussion'],
         ['Concessive and restrictive connectors: zwar, allerdings, insofern', 'Modal particles in argument']),

      U('🏛️ Unit 6 — Politics and Civil Society', 'Politik und Gesellschaft', [
        t('🗳️', 'The political system of Germany', 'Bundestag, Länder, Koalition'),
        t('📣', 'Protest and participation', 'Demonstration, Petition, Lobby'),
        t('📰', 'Reading political commentary', 'Separating argument from rhetoric'),
        t('⚖️', 'Rights and the constitution', 'Grundgesetz in outline'),
        t('💬', 'Debating a contested issue', 'Rules for a fair debate')
      ], ['Follow and discuss political commentary', 'Defend a position against counter-arguments'],
         ['Konzessivsätze: obwohl, auch wenn, selbst wenn', 'Rhetorical questions', 'Emphasis structures']),

      U('🎭 Unit 7 — Art, Literature and Film', 'Kunst, Literatur und Film', [
        t('📖', 'Reading a literary excerpt', 'Narrative voice, atmosphere, subtext'),
        t('🎬', 'Analysing a film scene', 'Image, sound, effect'),
        t('🖼️', 'Describing a work of art', 'Vocabulary of form and impression'),
        t('✍️', 'Writing a review', 'Description, interpretation, judgement'),
        t('🗣️', 'Recommending and criticising', 'Nuanced evaluative language')
      ], ['Interpret a literary or film excerpt', 'Write a nuanced review'],
         ['Figurative language and metaphor', 'Präteritum in literary narration', 'Subjective modal verbs']),

      U('🧠 Unit 8 — Psychology and Behaviour', 'Psychologie und Verhalten', [
        t('🪞', 'Identity and self-image', 'Nuanced personal description'),
        t('👥', 'Group behaviour', 'Konformität, Vorurteil, Rollenerwartung'),
        t('🧩', 'Motivation and habit', 'Explaining why people act as they do'),
        t('💬', 'Communication styles', 'Direct vs. indirect, and German directness'),
        t('✍️', 'A reflective text', 'Writing about your own experience analytically')
      ], ['Explain human behaviour with reasons and examples', 'Write an analytical reflection'],
         ['Nominal style vs. verbal style', 'Correlative connectors: nicht nur … sondern auch', 'Complex noun phrases']),

      U('🌱 Unit 9 — Environment and Policy', 'Umweltpolitik', [
        t('🌡️', 'Climate policy instruments', 'CO₂-Preis, Subvention, Verbot'),
        t('⚖️', 'Conflicting interests', 'Economy vs. ecology as a structured conflict'),
        t('🏗️', 'Energy transition', 'Energiewende vocabulary and debate'),
        t('📊', 'Evaluating a proposal', 'Criteria, effectiveness, cost'),
        t('✍️', 'A position paper', 'Formal written argument')
      ], ['Evaluate a policy proposal against criteria', 'Write a formal position paper'],
         ['Conditional and concessive combinations', 'Formal passive constructions', 'Comparative argument structures']),

      U('🧳 Unit 10 — Migration, Identity and Belonging', 'Migration und Identität', [
        t('🌐', 'Migration in numbers and stories', 'Statistics and personal narrative'),
        t('🗣️', 'Language and identity', 'Multilingualism, accent, belonging'),
        t('🏛️', 'Integration policy', 'Debate vocabulary without clichés'),
        t('💬', 'Discrimination and respect', 'Talking about it carefully in German'),
        t('✍️', 'A personal-analytical essay', 'Combining experience and argument')
      ], ['Discuss migration with nuance and evidence', 'Combine personal narrative and analysis'],
         ['Emphasis and focus particles: sogar, gerade, nur', 'Left-dislocation and topicalisation']),

      U('⚖️ Unit 11 — Law, Ethics and Dilemmas', 'Recht und Ethik', [
        t('📜', 'Legal German in outline', 'Reading a paragraph of law'),
        t('🤔', 'Ethical dilemmas', 'Structuring a moral argument'),
        t('🧾', 'Formal complaint and appeal', 'Widerspruch with full justification'),
        t('⚔️', 'Rights in conflict', 'Freedom vs. security as a debate'),
        t('🗣️', 'Arguing a hypothetical case', 'Konjunktiv II at full stretch')
      ], ['Argue an ethical position rigorously', 'Write a formal appeal with justification'],
         ['Konjunktiv II in the past: hätte … gemacht', 'Irrealis of comparison: als ob / als wenn', 'Legal-register nominalisation']),

      U('🏥 Unit 12 — Health, Ageing and Care', 'Gesundheit und Alter', [
        t('👵', 'Demographic change', 'Explaining a long-term trend'),
        t('🏠', 'Care and family', 'Pflege, Angehörige, Generationenvertrag'),
        t('🧬', 'Medical ethics', 'Consent, limits, allocation of resources'),
        t('🧘', 'Prevention and responsibility', 'Individual vs. society'),
        t('🗣️', 'A consultation role-play', 'Complex, high-stakes conversation')
      ], ['Discuss a complex social-health issue', 'Handle a demanding professional conversation'],
         ['Complex attributive constructions', 'Future II for assumptions', 'Consecutive clauses']),

      U('🎓 Unit 13 — Academic and Professional Writing', 'Wissenschaftliches Schreiben', [
        t('🧱', 'Text types and their structure', 'Essay, Stellungnahme, Bericht, Protokoll'),
        t('🔗', 'Academic cohesion', 'Reference, hedging, signposting'),
        t('📚', 'Citing and paraphrasing', 'Avoiding plagiarism in German conventions'),
        t('✂️', 'Editing for register', 'Turning spoken German into written German'),
        t('✍️', 'A 300-word Stellungnahme', 'Full draft with self-correction')
      ], ['Write a 300-word formal text with correct register', 'Paraphrase and cite a source'],
         ['Register shift: verbal ↔ nominal', 'Impersonal academic constructions', 'Connector inventory, formal']),

      U('🧾 Unit 14 — B2 Review and Exam Practice', 'Wiederholung und Prüfungstraining', [
        t('👂', 'Listening — lectures and discussions', 'Note-taking under time'),
        t('📖', 'Reading — long and detailed texts', 'Including gap-fill grammar'),
        t('✍️', 'Writing — Forumsbeitrag and formal letter', 'Both exam tasks timed'),
        t('🗣️', 'Speaking — presentation and discussion', 'With a partner, timed'),
        t('🧩', 'Grammar checklist', 'Everything B2 in one page')
      ], ['Complete a full B2 exam under time', 'Self-assess against the B2 criteria'],
         ['Full B2 grammar review']),
    ]
  };
})();
