/* B2 — Vantage.
   Units 1–6 are written out in full — lessons, unit practice, reading, listening,
   writing (AI-marked) and the recap that feeds flashcards and checkpoints.
   Units 7–14 are still outline only. */
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

      { // ===== B2 UNIT 4 — written out in full =====
        title: '🌍 Unit 4 — Globalisation and Economy',
        subject: 'Globalisierung und Wirtschaft',
        canDo: ['Explain a chain of cause and consequence in a supply chain',
                'Describe economic trends with formal vocabulary and genitive constructions',
                'Weigh winners against losers in a balanced way',
                'Discuss ethical responsibility in trade with a clear position'],
        grammarFocus: ['Consecutive clauses: sodass, so … dass, infolgedessen', 'Genitive constructions in formal style: aufgrund, trotz, während + Genitiv',
                       'Contrast structures: einerseits … andererseits, zum einen … zum anderen', 'Zu-Infinitiv and Modal + Passiv in ethical debates'],
        topics: [
          {
            icon: '🚢', title: 'Trade and supply chains',
            explanation:
              '<p>Modern trade runs on dependence. A German car can contain parts from a dozen countries, and the chain behind it is only as strong as its weakest link. ' +
              'Three words carry most of the meaning: <span class="de">die Lieferkette</span> is the whole chain, <span class="de">der Engpass</span> is the point where it narrows, ' +
              'and <span class="de">die Abhängigkeit</span> describes how far a firm or a country relies on a single source.</p>' +
              '<p>To explain a cause and its consequence, German has two main tools, and both are B2 essentials. <span class="de">sodass</span> joins two clauses into one sentence: ' +
              'the consequence follows the comma and the verb goes to the end. <span class="de">infolgedessen</span> (or <span class="de">daher</span>, <span class="de">deshalb</span>) starts a new main clause, ' +
              'so the verb comes straight after it and the subject follows the verb.</p>' +
              '<p>A third pattern is <span class="de">so … dass</span> with an adjective in between: <span class="de">Die Abhängigkeit war so groß, dass …</span> — the dependence was so great that …</p>',
            vocab: vocabTable([
              ['die Lieferkette', 'the supply chain'],
              ['der Engpass', 'the bottleneck, the shortage'],
              ['die Abhängigkeit', 'the dependence'],
              ['der Lieferant', 'the supplier'],
              ['das Vorprodukt', 'the intermediate product, the component'],
              ['die Ausfuhr', 'the export'],
              ['die Einfuhr', 'the import'],
              ['der Zoll / die Zölle', 'the customs duty / the duties'],
              ['die Verwundbarkeit', 'the vulnerability'],
              ['die Diversifizierung', 'diversification'],
              ['verlagern', 'to relocate'],
              ['lahmlegen', 'to paralyse, to bring to a standstill'],
              ['stillstehen', 'to be at a standstill'],
              ['verzögern', 'to delay'],
              ['sich verlassen auf', 'to rely on'],
              ['der Ausfall', 'the failure, the outage'],
              ['gesperrt', 'closed, blocked'],
              ['verflechten', 'to interlink'],
              ['die Reserve', 'the reserve, the buffer'],
              ['eng verflochten', 'closely interlinked']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Pattern', 'Structure', 'Example'], [
                ['<strong>sodass</strong>', 'Nebensatz — verb at the end', 'Der Hafen war gesperrt, <strong>sodass</strong> die Preise stiegen.'],
                ['<strong>infolgedessen / daher</strong>', 'Hauptsatz — verb in second place', 'Der Hafen war gesperrt. <strong>Infolgedessen stiegen</strong> die Preise.'],
                ['<strong>so … dass</strong>', 'Nebensatz after an adjective or adverb', 'Die Abhängigkeit war <strong>so groß, dass</strong> ein Ausfall alles lahmlegte.'],
                ['<strong>aufgrund / infolge + Genitiv</strong>', 'preposition, formal style', '<strong>Aufgrund des Streiks</strong> verzögerte sich die Lieferung.']
              ]) +
              '<div class="example-box">' +
              'Die Zulieferer lieferten zu spät. <strong>Infolgedessen</strong> <u>stand</u> das Werk eine Woche lang <u>still</u>.<br>' +
              '<span class="note">infolgedessen = Adverb → Verb auf Platz 2, Subjekt danach</span><br><br>' +
              'Der Hafen war gesperrt, <strong>sodass</strong> die Lieferungen <u>ausblieben</u>.<br>' +
              '<span class="note">sodass = Nebensatz → Verb ans Ende</span>' +
              '</div>' +
              '<p class="note">Do not confuse <span class="de">sodass</span> (consequence) with <span class="de">damit</span> (purpose: <em>so that … in order to</em>). ' +
              '<span class="de">Der Hafen war gesperrt, damit niemand hineinkam</span> means the closure was <em>intended</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Der Hafen war gesperrt, ___________ die Preise stiegen.', 'sodass'),
              exInput('Die Zulieferer waren spät dran. ___________ fehlten Bauteile.', 'Infolgedessen'),
              exSelect('Welche Wortstellung stimmt?', 'Der Hafen war gesperrt, sodass die Preise stiegen.', ['Der Hafen war gesperrt, sodass stiegen die Preise.', 'Der Hafen war gesperrt, sodass die Preise stiegen.', 'Der Hafen war gesperrt, sodass die Preise, stiegen.']),
              exSelect('Die Abhängigkeit war ___ groß, ___ ein Ausfall alles lahmlegte.', 'so … dass', ['so … dass', 'zu … damit', 'als … sodass']),
              exSelect('„Engpass" bedeutet:', 'a bottleneck, a shortage', ['a surplus', 'a bottleneck, a shortage', 'a customs duty']),
              exInput('Die Ausfuhr ist das Gegenteil der ___________. (ein Wort)', 'Einfuhr'),
              exSelect('Welche Präposition mit Genitiv bedeutet „because of" (formal)?', 'aufgrund', ['aufgrund', 'damit', 'sodass']),
              exSelect('Welches Wort steht für „to relocate production"?', 'verlagern', ['verlagern', 'verzögern', 'verflechten'])
            ])
          },
          {
            icon: '🏦', title: 'Economic basics in German',
            explanation:
              '<p>Business news uses a small set of economic terms again and again, and most of them are compounds you can take apart. ' +
              '<span class="de">die Konjunktur</span> is the business cycle, and an <span class="de">Aufschwung</span> is an upswing. A <span class="de">Rezession</span> is a downturn, ' +
              'and economists usually speak of one when output shrinks for two quarters in a row. <span class="de">die Inflation</span> measures rising prices, and what matters for a household is the <span class="de">Kaufkraft</span> — ' +
              'what the wage can actually buy.</p>' +
              '<p>In formal writing, the same ideas are often written with genitive constructions instead of <span class="de">von</span> plus dative. Compare ' +
              '<span class="de">die Entwicklung <strong>der Wirtschaft</strong></span> with <span class="de">die Entwicklung <em>von der Wirtschaft</em></span>: the first is the standard style of reports and newspapers. ' +
              'The genitive also follows a family of prepositions: <span class="de">aufgrund</span>, <span class="de">infolge</span>, <span class="de">wegen</span>, <span class="de">trotz</span>, <span class="de">während</span>.</p>',
            vocab: vocabTable([
              ['die Konjunktur', 'the business cycle, the economic situation'],
              ['der Aufschwung', 'the upswing, the boom'],
              ['die Rezession', 'the recession'],
              ['das Wachstum', 'the growth'],
              ['die Inflation', 'the inflation'],
              ['die Kaufkraft', 'purchasing power'],
              ['die Arbeitslosenquote', 'the unemployment rate'],
              ['die Nachfrage', 'the demand'],
              ['die Binnennachfrage', 'domestic demand'],
              ['der Mittelstand', 'small and medium-sized businesses'],
              ['die Erwerbsperson', 'member of the labour force'],
              ['steigen / sinken', 'to rise / to fall'],
              ['schrumpfen', 'to shrink'],
              ['sich erholen', 'to recover'],
              ['sich abschwächen', 'to weaken, to slow down'],
              ['trotz', 'despite (+ Genitiv)'],
              ['während', 'during, while (+ Genitiv / Konjunktion)'],
              ['wegen', 'because of (+ Genitiv)']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Genitive in formal German.</strong> The genitive article and ending do the job that <em>of the</em> does in English:</p>' +
              formTable('', ['Gender', 'Genitive article', 'Example'], [
                ['masculine / neuter', '<strong>des</strong> (noun + -(e)s)', 'die Inflation <strong>des Landes</strong> · die Lage <strong>eines Unternehmens</strong>'],
                ['feminine', '<strong>der</strong> (noun unchanged)', 'die Entwicklung <strong>der Wirtschaft</strong>'],
                ['plural', '<strong>der</strong> (noun + -n where the plural has it)', 'die Zahlen <strong>der Erwerbspersonen</strong>']
              ]) +
              '<div class="example-box">' +
              '<strong>Trotz des Wachstums</strong> blieb die Arbeitslosenquote hoch.<br>' +
              '<strong>Während der Krise</strong> sank die Nachfrage deutlich.<br>' +
              '<strong>Wegen der Inflation</strong> ging die Kaufkraft zurück.' +
              '</div>' +
              '<p class="note">Careful with <span class="de">wegen</span>: in spoken German it often takes the dative (<span class="de">wegen dem Wetter</span>), but in formal writing the genitive is the standard.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('Die Inflation ___ Landes ist gestiegen. (Genitiv von „das Land")', 'des', ['des', 'dem', 'der']),
              exInput('Trotz ___________ (das Wachstum) blieb die Arbeitslosigkeit hoch.', 'des Wachstums'),
              exInput('Während ___________ (die Krise) sank die Nachfrage deutlich.', 'der Krise'),
              exSelect('„die Entwicklung der Wirtschaft" statt „die Entwicklung von der Wirtschaft" ist:', 'formeller', ['umgangssprachlich', 'formeller', 'falsch']),
              exSelect('„Rezession" bedeutet:', 'output shrinking for two quarters in a row', ['sustained rising prices', 'output shrinking for two quarters in a row', 'a surplus in trade']),
              exSelect('Die Kaufkraft sinkt, wenn:', 'die Preise schneller steigen als die Löhne', ['die Preise schneller steigen als die Löhne', 'die Löhne schneller steigen als die Preise', 'die Arbeitslosigkeit sinkt']),
              exInput('Die Arbeitslosenquote ist der Anteil der ___________ an den Erwerbspersonen.', 'Arbeitslosen'),
              exSelect('Welche Form ist richtig?', 'Wegen der Inflation', ['Wegen die Inflation', 'Wegen der Inflation', 'Wegen den Inflation'])
            ])
          },
          {
            icon: '⚖️', title: 'Winners and losers',
            explanation:
              '<p>A balanced analysis does not just list pros and cons; it shows who gains and who loses, and it keeps the two sides in one sentence where they belong together. ' +
              'German has a set of contrast structures for this. <span class="de">einerseits … andererseits</span> sets two sides against each other, ' +
              '<span class="de">zum einen … zum anderen</span> lists them, and <span class="de">während</span> or <span class="de">im Gegensatz zu</span> put two facts in direct contrast.</p>' +
              '<p>The important thing is the structure, not just the words. <span class="de">einerseits</span> and <span class="de">andererseits</span> each take a main clause, so the verb comes second after both. ' +
              'If you want to introduce a conclusion after the balance, <span class="de">Unter dem Strich</span> (on balance) or <span class="de">Letztlich</span> (ultimately) work well.</p>',
            vocab: vocabTable([
              ['der Vorteil', 'the advantage'],
              ['der Nachteil', 'the disadvantage'],
              ['die Chance', 'the opportunity'],
              ['das Risiko', 'the risk'],
              ['der Gewinner / die Gewinnerin', 'the winner'],
              ['der Verlierer / die Verliererin', 'the loser'],
              ['die Ungleichheit', 'inequality'],
              ['der Wohlstand', 'prosperity'],
              ['die Arbeitsplätze', 'the jobs'],
              ['betroffen sein', 'to be affected'],
              ['profitieren von', 'to benefit from'],
              ['leiden unter', 'to suffer from'],
              ['abwägen', 'to weigh up'],
              ['das Gegenargument', 'the counter-argument'],
              ['Unter dem Strich', 'on balance'],
              ['letztlich', 'ultimately'],
              ['im Gegensatz zu', 'in contrast to'],
              ['gleichzeitig', 'at the same time']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Structure', 'Position of verb', 'Example'], [
                ['<strong>einerseits … andererseits</strong>', 'verb 2nd after each', '<strong>Einerseits sinken</strong> die Preise, <strong>andererseits verlieren</strong> Industrieregionen Jobs.'],
                ['<strong>zum einen … zum anderen</strong>', 'verb 2nd after each', '<strong>Zum einen profitieren</strong> Verbraucher, <strong>zum anderen</strong> leidet der Mittelstand.'],
                ['<strong>während</strong> (contrast)', 'verb at the end', 'Während die Exporte <strong>stiegen</strong>, <strong>schwächelte</strong> der Binnenmarkt.'],
                ['<strong>im Gegensatz zu</strong> + Dativ', 'preposition', '<strong>Im Gegensatz zu den Exporten</strong> schwächelte der Binnenmarkt.']
              ]) +
              '<p class="note">Do not use <span class="de">während</span> as a plain „and": it always signals a contrast or two things at the same time. ' +
              'For a plain reason, use <span class="de">weil</span> or <span class="de">da</span>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Zum einen sinken die Preise. Zum ___________ verlieren Arbeitsplätze in der Industrie.', 'anderen'),
              exInput('Einerseits profitieren Verbraucher, ___________ leidet der Mittelstand.', 'andererseits'),
              exSelect('„Während die Exporte stiegen, sank die Binnennachfrage." — Während ist hier:', 'a contrast (while)', ['a reason (since)', 'a contrast (while)', 'a condition (if)']),
              exSelect('Welcher Satz drückt einen Gegensatz aus?', 'Im Gegensatz zu den Exporten schwächelte der Binnenmarkt.', ['Der Binnenmarkt schwächelte, weil die Exporte stiegen.', 'Im Gegensatz zu den Exporten schwächelte der Binnenmarkt.', 'Infolgedessen stiegen die Exporte.']),
              exSelect('Welches Wort leitet die Schlussbilanz ein?', 'Unter dem Strich', ['Zum einen', 'Unter dem Strich', 'Einerseits']),
              exSelect('Wie sagt man „to benefit from" auf Deutsch?', 'profitieren von', ['leiden unter', 'profitieren von', 'abwägen']),
              exSelect('„Die Entwicklung ist positiv, ___ die Risiken bleiben." Welche Konjunktion passt am besten?', 'jedoch', ['jedoch', 'damit', 'sodass'])
            ])
          },
          {
            icon: '🏷️', title: 'Consumption and ethics',
            explanation:
              '<p>Trade is not only about prices. Since 2023, large German companies have been required to check their suppliers for human-rights and environmental risks under the ' +
              '<span class="de">Lieferkettensorgfaltspflichtengesetz</span>, known in short as the <span class="de">Lieferkettengesetz</span>. The debate around it shows the vocabulary of responsibility: ' +
              'a company <span class="de">übernimmt Verantwortung</span> for its suppliers, <span class="de">verpflichtet sich</span> to certain standards, and must be <span class="de">transparent</span> about what it finds.</p>' +
              '<p>Ethical claims in German often use the <strong>zu-Infinitiv</strong> with a verb of obligation or intention: <span class="de">Die Unternehmen sind verpflichtet, die Standards einzuhalten.</span> ' +
              'Note the position: with a separable verb, <em>zu</em> goes between the prefix and the stem — <span class="de">einzuhalten</span>, <span class="de">durchzuführen</span>. ' +
              'And a modal with the passive combines as usual: <span class="de">Die Standards müssen kontrolliert werden.</span></p>',
            vocab: vocabTable([
              ['die Verantwortung', 'the responsibility'],
              ['die Lieferkette', 'the supply chain'],
              ['die Menschenrechte', 'human rights'],
              ['die Umweltstandards', 'environmental standards'],
              ['die Sorgfaltspflicht', 'the duty of care, due diligence'],
              ['das Siegel', 'the seal, the label'],
              ['die Kennzeichnung', 'the labelling'],
              ['die Transparenz', 'transparency'],
              ['der Verbraucher', 'the consumer'],
              ['fairer Handel', 'fair trade'],
              ['nachhaltig', 'sustainable'],
              ['einhalten', 'to comply with, to observe'],
              ['kontrollieren', 'to check, to control'],
              ['sich verpflichten', 'to commit oneself'],
              ['übernehmen', 'to take on'],
              ['unabhängig', 'independent'],
              ['glaubwürdig', 'credible']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>zu-Infinitiv with obligation verbs.</strong> Use <em>zu</em> with verbs and adjectives of obligation, intention or commitment:</p>' +
              formTable('', ['Pattern', 'Example'], [
                ['verpflichtet sein / sich verpflichten, zu + Infinitiv', 'Sie <strong>verpflichten sich</strong>, Umweltstandards <strong>einzuhalten</strong>.'],
                ['die Aufgabe / Pflicht, etwas zu tun', 'Es ist ihre Pflicht, die Zulieferer <strong>zu prüfen</strong>.'],
                ['Modal + Passiv', 'Die Standards <strong>müssen kontrolliert werden</strong>. (not: <em>müssen kontrolliert wurden</em>)'],
                ['separable verb: zu in the middle', 'ein<strong>zu</strong>halten · durch<strong>zu</strong>führen · auf<strong>zu</strong>decken']
              ]) +
              '<p class="note">With a separable verb the <em>zu</em> sits inside the verb, never in front of it: <span class="de">Sie versuchen, die Regeln einzuhalten</span> — not <em>zu einhalten</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Das Gesetz zu Sorgfaltspflichten in Lieferketten heißt kurz: das ___________.', 'Lieferkettengesetz'),
              exSelect('Welche Form stimmt? „Sie verpflichten sich, Umweltstandards ___________."', 'einzuhalten', ['einhalten', 'einzuhalten', 'einzuhaltend']),
              exSelect('„nachhaltig" bedeutet:', 'sustainable, long-lasting', ['cheap', 'sustainable, long-lasting', 'local']),
              exSelect('Welcher Satz verwendet Modal + Passiv korrekt?', 'Die Standards müssen kontrolliert werden.', ['Die Standards müssen kontrolliert wurden.', 'Die Standards müssen kontrolliert werden.', 'Die Standards werden müssen kontrolliert.']),
              exInput('Ein Zeichen, das faire Produktion bestätigt, nennt man ein ___________.', 'Siegel'),
              exSelect('Welche Form ist richtig? Es ist unsere Pflicht, die Zulieferer ___________.', 'zu prüfen', ['prüfen', 'zu prüfen', 'prüfen zu'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: supply-chain cause and consequence, genitive constructions, contrast structures and ethical obligation.</p>',
        exercises: exerciseList([
          exInput('Die Lieferung kam spät, ___________ das Werk stillstand.', 'sodass'),
          exInput('Die Abhängigkeit war ___________ groß, dass ein Ausfall alles lahmlegte.', 'so'),
          exInput('___________ der Krise sank die Nachfrage. (article + noun, Genitiv)', 'Während'),
          exInput('Trotz ___________ (das Wachstum) stieg die Arbeitslosigkeit.', 'des'),
          exInput('Die Inflation ___________ Landes steigt. (Genitiv von „das Land")', 'des'),
          exSelect('Welches Wort bedeutet „in contrast to"?', 'im Gegensatz zu', ['im Gegensatz zu', 'infolgedessen', 'unter dem Strich']),
          exInput('Einerseits steigt der Wohlstand, ___________ wächst die Ungleichheit.', 'andererseits'),
          exSelect('Welche Präposition mit Genitiv passt? „___ des Exports stiegen die Gewinne."', 'Aufgrund', ['Aufgrund', 'Damit', 'Bis']),
          exInput('Sie verpflichten sich, Umweltstandards ___________ (einhalten).', 'einzuhalten'),
          exSelect('„Verantwortung übernehmen" bedeutet:', 'to take on responsibility', ['to avoid responsibility', 'to take on responsibility', 'to pay a fine']),
          exSelect('Welches Verb steht für „to relocate"?', 'verlagern', ['verlagern', 'verzögern', 'verflechten']),
          exSelect('„Das Gerät ist gesperrt" bedeutet:', 'blocked, closed', ['blocked, closed', 'on sale', 'delivered']),
          exInput('Ein Gesetz gegen Menschenrechtsverletzungen in Lieferketten heißt kurz: das ___________.', 'Lieferkettengesetz')
        ]),

        reading: {
          intro: 'An economics column about a supply-chain problem. Read for the <strong>cause-and-consequence</strong> links and for the balance the author tries to strike.',
          words: 330, minutes: 8,
          text: readingText('Lieferketten: Wie viel Sicherheit kostet Abhängigkeit?', [
            'Ein Container, der im Hafen von Rotterdam feststeckt, ist für die meisten Verbraucher unsichtbar. Erst wenn im Supermarkt die Regale leer bleiben oder ein Autohersteller die Produktion drosselt, wird deutlich, wie eng die Lieferketten der Gegenwart miteinander verflochten sind. Die Pandemie und der Krieg in der Ukraine haben diese Verwundbarkeit eindrucksvoll vor Augen geführt.',
            'Ökonomen sprechen von einer Abhängigkeit, die lange als Vorteil galt. Solange Vorprodukte billig und verlässlich aus Asien kamen, lohnte es sich kaum, Zulieferer in der Nähe aufzubauen. Die Folge war eine hohe Effizienz, aber auch eine geringe Reserve: Fällt ein einzelner Knotenpunkt aus, steht oft die ganze Produktion still.',
            'Die Antwort der Unternehmen heißt inzwischen oft Diversifizierung. Statt auf einen Lieferanten setzen sie auf mehrere, und manche verlagern Teile der Fertigung zurück nach Europa oder nach Mexiko. Das verteuert die Produktion, weshalb Kritiker warnen, die Globalisierung werde nicht zurückgedreht, sondern nur teurer. Befürworter halten dagegen, dass Resilienz einen Preis habe, der sich lohne.',
            'Ob sich die Umstellung auszahlt, hängt laut einer aktuellen Branchenumfrage stark von der Größe des Betriebs ab. Während Chemiekonzerne ihre Lager bereits erweitert haben, bleibt der Mittelstand oft bei knappen Beständen, weil ihm das Kapital fehlt. Die Ökonomin Anja Sommer fasst es so zusammen: „Große Konzerne können sich Sicherheit leisten, kleine Betriebe müssen sie sich erst erarbeiten."'
          ], 'Wirtschaftskolumne, fiktiv — im Stil der deutschen Wirtschaftspresse'),
          glossary: vocabTable([
            ['die Lieferkette', 'the supply chain'],
            ['drosseln', 'to throttle, to reduce'],
            ['verflechten', 'to interlink'],
            ['die Verwundbarkeit', 'the vulnerability'],
            ['das Vorprodukt', 'the component'],
            ['der Knotenpunkt', 'the node, the hub'],
            ['die Resilienz', 'resilience'],
            ['die Umstellung', 'the change, the switch'],
            ['knapp', 'scarce, tight'],
            ['die Bestände', 'the stocks, the inventory'],
            ['sich leisten', 'to afford']
          ]),
          questions: exerciseList([
            exSelect('Was bleibt für die meisten Verbraucher unsichtbar?', 'der Container im Hafen', ['die Preise der Autos', 'der Container im Hafen', 'die Löhne im Mittelstand']),
            exInput('Welche zwei Ereignisse nennt der Text als Beispiele für die Verwundbarkeit? (zwei Wörter)', 'Pandemie und Krieg|die Pandemie und der Krieg|Pandemie und der Krieg'),
            exTF('Früher lohnte es sich für Firmen meist, Zulieferer in der Nähe aufzubauen.', false),
            exSelect('Was ist laut Text der Nachteil der hohen Effizienz?', 'eine geringe Reserve', ['eine geringe Reserve', 'hohe Kosten', 'zu viele Zulieferer']),
            exInput('Wie nennt man es, wenn Unternehmen auf mehrere Lieferanten setzen? (Fremdwort)', 'Diversifizierung'),
            exSelect('Was kritisieren Kritiker an der Rückverlagerung?', 'Sie macht die Produktion teurer.', ['Sie macht die Produktion teurer.', 'Sie ist gesetzlich verboten.', 'Sie erhöht die Arbeitslosigkeit im Ausland.']),
            exSelect('Was antworten die Befürworter?', 'Resilienz habe einen Preis, der sich lohne.', ['Globalisierung sei nicht mehr nötig.', 'Resilienz habe einen Preis, der sich lohne.', 'Lieferketten seien unwichtig.']),
            exInput('Warum fehlt dem Mittelstand oft die Reserve? Weil ihm das ___________ fehlt. (ein Wort)', 'Kapital'),
            exSelect('Welche Aussage über Chemiekonzerne stimmt laut Text?', 'Sie haben ihre Lager bereits erweitert.', ['Sie haben ihre Lager bereits erweitert.', 'Sie haben die Produktion ganz eingestellt.', 'Sie haben keine Lieferanten mehr.'])
          ])
        },

        listening: {
          title: 'Wirtschaftsradio — Lieferketten im Mittelstand',
          intro: 'A short interview with a supply-chain consultant. Listen <strong>once</strong>, then answer; the transcript is for checking afterwards.',
          lines: [
            ['Moderator', 'Frau Lehmann, Sie beraten Mittelständler bei ihren Lieferketten. Was hat sich seit der Pandemie geändert?'],
            ['Lehmann', 'Vor allem das Bewusstsein. Früher wurde nur nach dem Preis eingekauft. Heute fragen die Firmen auch, woher die Vorprodukte kommen und wie lange sie unterwegs sind.'],
            ['Moderator', 'Und das Lieferkettengesetz? Viele Betriebe klagen über Bürokratie.'],
            ['Lehmann', 'Das stimmt, für kleine Firmen ist der Aufwand erheblich. Dabei verlangt das Gesetz vor allem, dass man die Risiken kennt und reagiert, wenn es Verstöße gibt.'],
            ['Moderator', 'Was raten Sie einem Betrieb mit zwanzig Beschäftigten?'],
            ['Lehmann', 'Zunächst die wichtigsten Zulieferer kartieren. Dann sollte man mit zwei oder drei Lieferanten sprechen, bevor man ganz wechselt. Das senkt das Risiko, ohne die Kosten zu verdoppeln.'],
            ['Moderator', 'Verbraucher wollen aber vor allem billig einkaufen.'],
            ['Lehmann', 'Das ist der Konflikt. Aber ich beobachte, dass Kunden bereit sind, mehr zu zahlen, wenn sie die Herkunft nachvollziehen können. Transparenz ist inzwischen ein Verkaufsargument.'],
            ['Moderator', 'Gibt es ein Siegel, dem man vertrauen kann?'],
            ['Lehmann', 'Siegel helfen, aber man sollte genau hinschauen, wer sie vergibt. Nicht jedes Label hält einer unabhängigen Kontrolle stand.']
          ],
          questions: exerciseList([
            exSelect('Was hat sich laut Lehmann vor allem verändert?', 'Das Bewusstsein für die Herkunft der Vorprodukte', ['Die Löhne', 'Das Bewusstsein für die Herkunft der Vorprodukte', 'Die Zahl der Lieferanten']),
            exTF('Das Lieferkettengesetz verlangt laut Lehmann vor allem, dass Unternehmen ihre Risiken kennen.', true),
            exSelect('Wie empfindet Lehmann den Aufwand für kleine Firmen?', 'erheblich', ['gering', 'erheblich', 'unbedeutend']),
            exInput('Zunächst die wichtigsten Zulieferer ___________. (ein Verb, Fachbegriff)', 'kartieren'),
            exSelect('Warum rät sie, mit mehreren Lieferanten zu sprechen?', 'um das Risiko zu senken', ['um die Kosten zu verdoppeln', 'um das Risiko zu senken', 'um Bürokratie zu vermeiden']),
            exTF('Lehmann sagt, Kunden zahlen nie mehr für faire Produkte.', false),
            exSelect('Was ist laut Lehmann inzwischen ein Verkaufsargument?', 'Transparenz', ['der niedrige Preis', 'Transparenz', 'ein Gütesiegel allein']),
            exSelect('Worauf sollte man bei Siegeln achten?', 'wer sie vergibt und ob eine unabhängige Kontrolle stattfindet', ['ob sie bunt sind', 'wer sie vergibt und ob eine unabhängige Kontrolle stattfindet', 'wie teuer sie sind'])
          ])
        },

        writing: {
          title: 'Erörterung — Abhängigkeit oder Autarkie?',
          textType: 'Analytische Erörterung (Argumentation mit Gegenargument und Fazit)',
          minWords: 220, maxWords: 280, minutes: 45,
          expect: ['arguments', 'counter', 'conclusion', 'nominal'],
          task: '<p>Die Regierung diskutiert, ob Deutschland bei wichtigen Gütern wie Medikamenten, Halbleitern und Energie unabhängiger von einzelnen Ländern werden sollte.</p>' +
            '<p>Schreiben Sie eine <strong>Erörterung</strong> zu der Frage: <em>Sollte Deutschland seine Abhängigkeit von einzelnen Ländern bei wichtigen Gütern verringern, auch wenn das teurer wird?</em></p>' +
            '<p>Stellen Sie die Argumente beider Seiten dar, nehmen Sie <strong>begründet</strong> Stellung und ziehen Sie ein Fazit.</p>',
          plainTask: 'Write an analytical essay in German (220–280 words) on whether Germany should reduce its dependence on single countries for key goods such as medicines, semiconductors and energy, even if this is more expensive. Present arguments on both sides, include at least one counter-argument to your own position, and end with a clear conclusion.',
          bullets: [
            'Beginnen Sie mit einer <strong>Einleitung</strong>: Thema nennen und die Leitfrage formulieren.',
            'Stellen Sie <strong>Pro-Argumente</strong> und <strong>Contra-Argumente</strong> in je einem Absatz dar.',
            'Entwickeln Sie mindestens ein Argument mit einem <strong>Beispiel</strong> (z. B. Medikamente, Halbleiter).',
            'Schreiben Sie ein <strong>Gegenargument</strong> zu Ihrer eigenen Position und entkräften Sie es.',
            'Schließen Sie mit einem <strong>Fazit</strong>, das Ihre Position klar nennt.',
            'Sachlich bleiben: kein „ich finde, dass …" als Dauerformel, sondern begründete Aussagen.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Einleiten', 'Die Frage, ob … , gewinnt angesichts der Lage an Bedeutung. · Im Mittelpunkt steht die Frage, …'],
            ['Pro-Argument', 'Ein wesentlicher Vorteil liegt in der <strong>Versorgungssicherheit</strong>. · Für eine größere Unabhängigkeit spricht die <strong>Verringerung des Risikos</strong>.'],
            ['Contra-Argument', 'Gegen eine solche Politik spricht die <strong>Verteuerung</strong> der Produktion. · Kritiker verweisen auf <strong>den Verlust von Effizienz</strong>.'],
            ['Gegenargument', 'Zwar ist dieser Einwand ernst zu nehmen, doch … · Dennoch lässt sich entgegnen, dass …'],
            ['Schluss', 'Abschließend lässt sich festhalten, dass … · Unter dem Strich überwiegt meines Erachtens …']
          ]),
          criteria: [
            'Die Einleitung nennt das Thema und die Leitfrage.',
            'Es gibt Argumente für UND gegen die Position.',
            'Mindestens ein Argument ist mit einem konkreten Beispiel belegt.',
            'Ein Gegenargument zur eigenen Position wird genannt und entkräftet.',
            'Das Fazit nennt die eigene Position klar und begründet sie.',
            'Verbindungen wie einerseits / andererseits, zum einen / zum anderen, sodass oder infolgedessen sind korrekt gebaut.',
            'Der Stil ist sachlich: Nominalstil wo passend (z. B. die Verringerung der Abhängigkeit).',
            'Ich liege zwischen 220 und 280 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Germany is a trading nation by necessity.</strong> With few raw materials of its own, the country exports machinery, cars and chemicals and imports much of its energy and many inputs, so the debate about dependence is an old one.</p>' +
          '<p><strong>The Mittelstand is the backbone.</strong> Many of the world-market leaders in niche products are medium-sized family firms, often called <span class="de">Hidden Champions</span>. ' +
          'They are the businesses for which a single broken supply link can be most dangerous, because they lack the reserves of a large group.</p>' +
          '<p><strong>The social market economy is the frame.</strong> The <span class="de">Soziale Marktwirtschaft</span>, associated with Ludwig Erhard, combines free markets with social protection and co-determination. ' +
          'Unions and employers negotiate wages through <span class="de">Tarifverträge</span>, and that tradition shapes how companies talk about fairness in their supply chains.</p>' +
          '<p><strong>Ethics has become a legal duty.</strong> The <span class="de">Lieferkettengesetz</span> turned responsibility for suppliers into a legal obligation for large firms, while the <span class="de">Fair-Trade-Siegel</span> remains voluntary. ' +
          'In German debates, the question you hear most is <span class="de">Wer kontrolliert die Kontrolleure?</span> — who checks the checkers — which is a good reflex when you read any certificate.</p>' +
          '<p><strong>Consumers are caught between price and principle.</strong> Surveys often show more willingness to pay for ethical products than sales figures suggest, and German supermarkets have reacted with labels, reduced-sugar ranges and clearer origin information.</p>',

        recap: [
          { group: '🚢 Handel und Lieferketten', rows: [
            ['die Lieferkette', 'the supply chain'],
            ['der Engpass', 'the bottleneck'],
            ['die Abhängigkeit', 'the dependence'],
            ['der Lieferant', 'the supplier'],
            ['das Vorprodukt', 'the component'],
            ['die Ausfuhr', 'the export'],
            ['die Einfuhr', 'the import'],
            ['der Zoll', 'the customs duty'],
            ['die Verwundbarkeit', 'the vulnerability'],
            ['die Diversifizierung', 'diversification'],
            ['verlagern', 'to relocate'],
            ['lahmlegen', 'to paralyse'],
            ['verzögern', 'to delay'],
            ['sodass', 'so that (consequence)'],
            ['infolgedessen', 'as a consequence']
          ] },
          { group: '🏦 Wirtschaft', rows: [
            ['die Konjunktur', 'the business cycle'],
            ['der Aufschwung', 'the upswing'],
            ['die Rezession', 'the recession'],
            ['das Wachstum', 'the growth'],
            ['die Inflation', 'the inflation'],
            ['die Kaufkraft', 'purchasing power'],
            ['die Arbeitslosenquote', 'the unemployment rate'],
            ['die Nachfrage', 'the demand'],
            ['die Binnennachfrage', 'domestic demand'],
            ['der Mittelstand', 'small and medium-sized businesses'],
            ['schrumpfen', 'to shrink'],
            ['sich erholen', 'to recover'],
            ['trotz / wegen / während + Genitiv', 'despite / because of / during']
          ] },
          { group: '⚖️ Abwägen', rows: [
            ['der Vorteil', 'the advantage'],
            ['der Nachteil', 'the disadvantage'],
            ['die Chance', 'the opportunity'],
            ['das Risiko', 'the risk'],
            ['die Ungleichheit', 'inequality'],
            ['der Wohlstand', 'prosperity'],
            ['profitieren von', 'to benefit from'],
            ['leiden unter', 'to suffer from'],
            ['das Gegenargument', 'the counter-argument'],
            ['im Gegensatz zu', 'in contrast to'],
            ['einerseits … andererseits', 'on the one hand … on the other'],
            ['zum einen … zum anderen', 'firstly … secondly'],
            ['Unter dem Strich', 'on balance']
          ] },
          { group: '🏷️ Verantwortung und Konsum', rows: [
            ['die Verantwortung', 'the responsibility'],
            ['das Lieferkettengesetz', 'the supply-chain act'],
            ['die Menschenrechte', 'human rights'],
            ['die Umweltstandards', 'environmental standards'],
            ['das Siegel', 'the seal, the label'],
            ['die Transparenz', 'transparency'],
            ['der Verbraucher', 'the consumer'],
            ['nachhaltig', 'sustainable'],
            ['einhalten', 'to comply with'],
            ['übernehmen', 'to take on'],
            ['sich verpflichten', 'to commit oneself'],
            ['unabhängig', 'independent']
          ] }
        ],

        sentences: [
          { de: 'Der Hafen war gesperrt, sodass die Preise stiegen', en: 'The port was closed, so prices rose' },
          { de: 'Infolgedessen stand das Werk eine Woche still', en: 'As a consequence, the plant stood still for a week' },
          { de: 'Trotz des Wachstums blieb die Arbeitslosigkeit hoch', en: 'Despite the growth, unemployment stayed high' },
          { de: 'Im Gegensatz zu den Exporten schwächelte der Binnenmarkt', en: 'In contrast to exports, the domestic market weakened' },
          { de: 'Unter dem Strich überwiegen die Vorteile', en: 'On balance, the advantages outweigh the disadvantages' },
          { de: 'Die Unternehmen sind verpflichtet, die Standards einzuhalten', en: 'Companies are obliged to comply with the standards' }
        ]
      },

      { // ===== B2 UNIT 5 — written out in full =====
        title: '🖥️ Unit 5 — Digitalisation and AI',
        subject: 'Digitalisierung',
        canDo: ['Explain a technical topic such as AI or algorithms to a non-expert',
                'Discuss data protection rights in German with the right terms',
                'Argue both sides of the automation debate, conceding points without giving up your own',
                'Summarise a panel discussion accurately, attributing each position to its speaker'],
        grammarFocus: ['Concessive connectors: zwar … aber, allerdings', 'Restrictive connectors: insofern, soweit',
                       'Konjunktiv II in hypothetical scenarios', 'Explaining simply: mit anderen Worten, vereinfacht gesagt'],
        topics: [
          {
            icon: '🤖', title: 'AI in public debate',
            explanation:
              '<p>Public debate about artificial intelligence swings between hype and alarm, and German news reporting has its own vocabulary for both. ' +
              '<span class="de">Künstliche Intelligenz</span> (KI) is the umbrella term; a <span class="de">Sprachmodell</span> is the kind that produces text, and a <span class="de">Regulierung</span> is the set of rules that governs it. ' +
              'An <span class="de">Hype</span> is an exaggerated wave of enthusiasm, and <span class="de">Desinformation</span> means false information spread on purpose.</p>' +
              '<p>Balanced German argument relies on the <strong>concessive</strong> pattern. <span class="de">Zwar</span> concedes a point, and <span class="de">aber</span> (or <span class="de">allerdings</span>) turns to the counter-point. ' +
              'This lets you be fair to the other side without weakening your own position: you give the strength of the argument first, then show its limit.</p>',
            vocab: vocabTable([
              ['die Künstliche Intelligenz (KI)', 'artificial intelligence (AI)'],
              ['das Sprachmodell', 'the language model'],
              ['die Regulierung', 'the regulation'],
              ['der Hype', 'the hype'],
              ['die Desinformation', 'deliberate disinformation'],
              ['die Fehleinschätzung', 'the misjudgement'],
              ['überschätzen', 'to overestimate'],
              ['unterschätzen', 'to underestimate'],
              ['ersetzen', 'to replace'],
              ['zugänglich', 'accessible'],
              ['fehleranfällig', 'prone to errors'],
              ['die Chance', 'the opportunity'],
              ['das Risiko', 'the risk'],
              ['die Gefahr', 'the danger'],
              ['einordnen', 'to classify, to put into context'],
              ['verantwortungsvoll', 'responsible'],
              ['der Nutzen', 'the benefit, the use'],
              ['die Grenze', 'the limit']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Connector', 'Position', 'Example'], [
                ['<strong>zwar … aber</strong>', 'zwar: verb 2nd · aber: starts the second clause', '<strong>Zwar ist</strong> KI schnell, <strong>aber</strong> fehleranfällig.'],
                ['<strong>zwar … jedoch</strong>', 'the same frame, more formal', '<strong>Zwar wirkt</strong> der Hype übertrieben, <strong>jedoch</strong> sind die Risiken real.'],
                ['<strong>allerdings</strong>', 'adverb: verb 2nd, after a full sentence', 'Die Technik ist nützlich. <strong>Allerdings gibt es</strong> Grenzen.'],
                ['<strong>obwohl</strong>', 'subordinate: verb at the end', '<strong>Obwohl</strong> die Technik nützlich ist, <strong>bleiben</strong> Risiken.']
              ]) +
              '<div class="example-box">' +
              '<strong>Zwar</strong> <u>können</u> Sprachmodelle schnell Texte erstellen, <strong>aber</strong> sie <u>machen</u> häufig sachliche Fehler.<br>' +
              '<span class="note">zwar: Verb auf Platz 2 · aber: neuer Hauptsatz mit Verb auf Platz 2</span>' +
              '</div>' +
              '<p class="note">Do not put <span class="de">zwar</span> alone at the start of a sentence without a counter-part; a German reader waits for the <span class="de">aber</span> and marks the sentence as unfinished.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('___________ ist die Technik nützlich, aber sie hat auch Grenzen. (Konzessiv-Partikel)', 'Zwar'),
              exInput('Die Technik ist nützlich. ___________ gibt es Risiken. (Adverb)', 'Allerdings'),
              exSelect('Welcher Satz ist korrekt gebaut?', 'Zwar ist KI schnell, aber fehleranfällig.', ['Zwar ist KI schnell, aber fehleranfällig.', 'Zwar ist KI schnell, fehleranfällig.', 'Zwar ist KI schnell, weil fehleranfällig.']),
              exSelect('„Hype" bedeutet:', 'an exaggerated wave of enthusiasm', ['a technical error', 'an exaggerated wave of enthusiasm', 'a legal rule']),
              exInput('Ein Modell, das Texte erzeugt, nennt man ein ___________.', 'Sprachmodell'),
              exSelect('„Desinformation" bedeutet:', 'deliberately false information', ['deliberately false information', 'a data protection right', 'a technical standard']),
              exSelect('Was bedeutet „überschätzen"?', 'to overestimate', ['to overestimate', 'to underestimate', 'to replace'])
            ])
          },
          {
            icon: '🔐', title: 'Data protection (DSGVO)',
            explanation:
              '<p>The <span class="de">Datenschutz-Grundverordnung</span> (DSGVO) applies across the EU and is the reference point for almost every German debate about data. ' +
              'Its key term is <span class="de">personenbezogene Daten</span>: any information that can be linked to a specific person. A company may process them only with a legal basis, most often a <span class="de">Einwilligung</span> (consent), ' +
              'and only for the purpose it stated. This is the principle of <span class="de">Zweckbindung</span>.</p>' +
              '<p>People have rights over their data: the <span class="de">Recht auf Auskunft</span> (to know what is stored), the <span class="de">Recht auf Löschung</span> (to have it deleted) and the right to object. ' +
              'Germans take this seriously partly because of history: the Federal Constitutional Court first described a <span class="de">Recht auf informationelle Selbstbestimmung</span> in 1983, in a judgment about a census.</p>' +
              '<p>Two small connectors do the careful work in legal German. <span class="de">insofern</span> means <em>in this respect</em> and points back to a condition: <span class="de">Die Regel gilt insofern, als …</span>. ' +
              '<span class="de">soweit</span> means <em>as far as</em> and limits a claim: <span class="de">Soweit Daten personenbezogen sind, gilt die DSGVO.</span></p>',
            vocab: vocabTable([
              ['die Datenschutz-Grundverordnung (DSGVO)', 'the GDPR'],
              ['personenbezogene Daten', 'personal data'],
              ['die Einwilligung', 'the consent'],
              ['die Zweckbindung', 'purpose limitation'],
              ['die Verarbeitung', 'the processing'],
              ['das Recht auf Auskunft', 'the right of access'],
              ['das Recht auf Löschung', 'the right to erasure'],
              ['der Widerspruch', 'the objection'],
              ['die Speicherung', 'the storage'],
              ['das Bußgeld', 'the fine'],
              ['der Verantwortliche', 'the controller (person responsible)'],
              ['die Weitergabe', 'the passing on, the disclosure'],
              ['einwilligen', 'to consent'],
              ['zustimmen', 'to agree'],
              ['verlangen', 'to demand'],
              ['sich beziehen auf', 'to refer to'],
              ['insofern', 'in this respect'],
              ['soweit', 'as far as']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Word', 'Meaning', 'Example'], [
                ['<strong>insofern</strong>', 'in this respect (adverb, verb 2nd)', 'Die Daten sind personenbezogen; <strong>insofern gilt</strong> die DSGVO.'],
                ['<strong>insofern … als</strong>', 'in so far as (a limit)', 'Die Regel gilt <strong>insofern, als</strong> Daten gespeichert werden.'],
                ['<strong>soweit</strong>', 'as far as (subordinate, verb at the end)', 'Die DSGVO gilt, <strong>soweit</strong> personenbezogene Daten <strong>verarbeitet werden</strong>.']
              ]) +
              '<p class="note">Passive with a modal is common in the DSGVO: <span class="de">Daten dürfen nur für den festgelegten Zweck verarbeitet werden.</span> Remember: the modal goes at the end as an infinitive, and the passive infinitive is <em>verarbeitet werden</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Informationen über eine bestimmte Person sind ___________ Daten.', 'personenbezogene'),
              exSelect('„Einwilligung" bedeutet:', 'consent', ['a fine', 'consent', 'a contract']),
              exSelect('Das Recht zu erfahren, welche Daten gespeichert sind, heißt:', 'Recht auf Auskunft', ['Recht auf Löschung', 'Recht auf Auskunft', 'Recht auf Widerspruch']),
              exInput('Die DSGVO gilt, ___________ personenbezogene Daten verarbeitet werden. (als weit wie)', 'soweit'),
              exSelect('„insofern" bedeutet hier:', 'in this respect', ['in this respect', 'in spite of this', 'nevertheless']),
              exInput('Daten dürfen nur für den festgelegten Zweck genutzt werden. Das nennt man ___________.', 'Zweckbindung'),
              exSelect('Welche Form ist richtig? „Daten dürfen nur ___ werden."', 'verarbeitet', ['verarbeitet', 'verarbeiten', 'verarbeitet worden']),
              exSelect('Wer gilt rechtlich als „Verantwortlicher"?', 'die Stelle, die über Zweck und Mittel entscheidet', ['die betroffene Person', 'die Stelle, die über Zweck und Mittel entscheidet', 'das Finanzamt'])
            ])
          },
          {
            icon: '👥', title: 'Work and automation',
            explanation:
              '<p>Almost every debate about automation returns to the same question: which jobs change, and who gets the new ones? German employers talk about a <span class="de">Fachkräftemangel</span>, a shortage of skilled workers, ' +
              'while unions focus on people whose <span class="de">Routinetätigkeiten</span> — tasks that follow the same pattern each day — are most at risk. The usual answers are <span class="de">Weiterbildung</span> (further training) and <span class="de">Umschulung</span> (retraining for a different job).</p>' +
              '<p>A debate like this is full of hypotheticals, and German expresses them with the <strong>Konjunktiv II</strong>. Compare: <span class="de">Wenn Maschinen Routinearbeit übernehmen, müssen viele Menschen umlernen.</span> describes a likely outcome, ' +
              'while <span class="de">Wenn Maschinen Routinearbeit übernähmen, müssten viele Menschen umlernen.</span> is the speculative version — the same idea, marked as imagined. ' +
              'In the Konjunktiv II, <em>müssen</em> becomes <em>müssten</em> and <em>können</em> becomes <em>könnten</em>.</p>',
            vocab: vocabTable([
              ['die Automatisierung', 'automation'],
              ['der Fachkräftemangel', 'the shortage of skilled workers'],
              ['die Routinetätigkeit', 'the routine task'],
              ['die Weiterbildung', 'further training'],
              ['die Umschulung', 'retraining'],
              ['die Qualifikation', 'the qualification, skill'],
              ['der Arbeitsplatz / die Stelle', 'the job'],
              ['Stellen streichen', 'to cut jobs'],
              ['Stellen schaffen', 'to create jobs'],
              ['umlernen', 'to retrain, to learn anew'],
              ['die Beschäftigten', 'the employees'],
              ['die Gewerkschaft', 'the trade union'],
              ['die Arbeitgeber', 'the employers'],
              ['die Tätigkeit', 'the activity, the job'],
              ['sich wandeln', 'to change, to transform'],
              ['verdrängen', 'to displace'],
              ['finanzieren', 'to finance'],
              ['die Lücke', 'the gap']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Realis (likely)', 'Irrealis (imagined)', 'Meaning'], [
                ['Wenn Maschinen … übernehmen, <strong>müssen</strong> viele umlernen.', 'Wenn Maschinen … übernähmen, <strong>müssten</strong> viele umlernen.', 'likely vs imagined'],
                ['Wenn es Weiterbildung gibt, <strong>können</strong> Menschen wechseln.', 'Gäbe es mehr Weiterbildung, <strong>könnten</strong> Menschen wechseln.', 'possible vs hypothetical'],
                ['Wenn die Betriebe sparen, <strong>bleibt</strong> der Plan Theorie.', 'Sparten die Betriebe, <strong>bliebe</strong> der Plan Theorie.', 'the same condition, imagined']
              ]) +
              '<p class="note">Konjunktiv II with <em>würde</em> is always available, but in formal writing the <em>-e</em> forms (<em>übernähmen, gäbe, bliebe</em>) are preferred when they are clear. For the strong verbs, use the simple past stem plus umlaut where it exists.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('Welche Form passt? „Wenn Maschinen Routinearbeit übernähmen, ___ viele Menschen umlernen."', 'müssten', ['müssen', 'müssten', 'mussten']),
              exInput('„Gäbe es mehr Weiterbildung, ___________ Menschen leichter wechseln." (können, Konjunktiv II)', 'könnten'),
              exSelect('„Fachkräftemangel" bedeutet:', 'a shortage of skilled workers', ['a shortage of skilled workers', 'a surplus of teachers', 'a strike in a factory']),
              exSelect('Was ist eine Routinetätigkeit?', 'eine Aufgabe, die immer nach dem gleichen Schema abläuft', ['eine Aufgabe, die immer nach dem gleichen Schema abläuft', 'eine kreative Aufgabe', 'eine Aufgabe ohne Bezahlung']),
              exInput('Ein Lernen für einen neuen Beruf, oft nach einer Pause im Berufsleben, nennt man ___________.', 'Umschulung'),
              exSelect('„Stellen streichen" bedeutet:', 'to cut jobs', ['to create jobs', 'to cut jobs', 'to train staff']),
              exSelect('Welche Form stimmt? Sparten die Betriebe, ___ der Plan Theorie.', 'bliebe', ['bleibt', 'bliebe', 'geblieben'])
            ])
          },
          {
            icon: '🧠', title: 'Algorithms and bias',
            explanation:
              '<p>A complex idea becomes clear when you can explain it in German without jargon. The standard tools are the phrases that <em>signal</em> a simplification: ' +
              '<span class="de">vereinfacht gesagt</span> (put simply), <span class="de">mit anderen Worten</span> (in other words), <span class="de">das heißt</span> (that is). Use them before the simpler version, not after the complicated one.</p>' +
              '<p>An <span class="de">Algorithmus</span> is a fixed sequence of steps for solving a task, like a recipe. A learning system builds its rules from an <span class="de">Datensatz</span>, a set of examples. ' +
              'If those examples reflect past discrimination, the system repeats it: this is <span class="de">Voreingenommenheit</span>, or bias. Where a system\'s reasoning cannot be followed at all, it is called a <span class="de">Blackbox</span>.</p>' +
              '<p>A good explanation uses a comparison and a relative clause: <span class="de">Ein Algorithmus ist ein Rezept, das Schritt für Schritt beschreibt, wie man zu einem Ergebnis kommt.</span></p>',
            vocab: vocabTable([
              ['der Algorithmus', 'the algorithm'],
              ['der Datensatz', 'the dataset'],
              ['die Voreingenommenheit / Verzerrung', 'bias'],
              ['diskriminieren', 'to discriminate'],
              ['benachteiligen', 'to disadvantage'],
              ['nachvollziehbar', 'understandable, traceable'],
              ['transparent', 'transparent'],
              ['die Blackbox', 'the black box'],
              ['die Fehlerquote', 'the error rate'],
              ['gewichten', 'to weight'],
              ['vereinfacht gesagt', 'put simply'],
              ['mit anderen Worten', 'in other words'],
              ['das heißt', 'that is'],
              ['das Beispiel', 'the example'],
              ['vergleichbar mit', 'comparable to'],
              ['sich vorstellen', 'to imagine']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Explaining something simply, in four moves:</strong></p>' +
              '<ul class="goals">' +
              '<li>1. Name the thing: <span class="de">Ein Algorithmus ist …</span></li>' +
              '<li>2. Give the simple version: <span class="de">vereinfacht gesagt, …</span> / <span class="de">mit anderen Worten, …</span></li>' +
              '<li>3. Compare it with something familiar: <span class="de">ähnlich wie ein Kochrezept</span> or <span class="de">man kann sich das vorstellen wie …</span></li>' +
              '<li>4. Say why it matters: <span class="de">Das ist wichtig, weil …</span></li>' +
              '</ul>' +
              '<div class="example-box">' +
              'Ein Algorithmus ist eine feste Folge von Schritten. <strong>Vereinfacht gesagt</strong> ist er wie ein Kochrezept: <strong>man</strong> folgt den Anweisungen, <strong>bis</strong> das Ergebnis fertig ist. ' +
              'Das ist wichtig, <strong>weil</strong> auch eine schlechte Anleitung ein falsches Ergebnis liefert.' +
              '</div>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('Ein Algorithmus ist vereinfacht gesagt:', 'eine feste Folge von Schritten zur Lösung einer Aufgabe', ['ein Computerprogramm mit Bildern', 'eine feste Folge von Schritten zur Lösung einer Aufgabe', 'eine Art Datenbank']),
              exInput('Wenn ein System Gruppen systematisch benachteiligt, spricht man von ___________. (Fachwort, Voreingenommenheit)', 'Voreingenommenheit|Verzerrung|Bias'),
              exSelect('„nachvollziehbar" bedeutet:', 'understandable, traceable', ['understandable, traceable', 'forgettable', 'unavailable']),
              exInput('Die Beispiele, mit denen ein System lernt, heißen ___________.', 'Datensatz'),
              exSelect('„Mit anderen Worten" leitet ein:', 'eine einfachere Erklärung', ['einen Gegensatz', 'eine einfachere Erklärung', 'eine Zeitangabe']),
              exInput('Ein System, dessen Denkweg niemand erklären kann, nennt man eine ___________.', 'Blackbox'),
              exSelect('Welcher Satz erklärt einfach?', 'Ein Algorithmus ist wie ein Kochrezept: Schritt für Schritt.', ['Ein Algorithmus ist ein Modul der Heuristik.', 'Ein Algorithmus ist wie ein Kochrezept: Schritt für Schritt.', 'Algorithmen sind obsolet.'])
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: concessive connectors, data-protection terms, Konjunktiv II for scenarios and simple explanations.</p>',
        exercises: exerciseList([
          exInput('___________ ist KI schnell, aber fehleranfällig. (Konzessiv)', 'Zwar'),
          exInput('Die Regel gilt ___________, als Daten gespeichert werden. (insofern … als)', 'insofern'),
          exSelect('Welche Konjunktion passt? „Die Technik ist nützlich, ___ sie hat Grenzen." (Gegensatz)', 'aber', ['aber', 'damit', 'sodass']),
          exInput('Informationen über eine bestimmte Person sind ___________ Daten.', 'personenbezogene'),
          exInput('Die DSGVO gilt, ___________ personenbezogene Daten verarbeitet werden. (soweit)', 'soweit'),
          exSelect('Welches Recht verlangt die Löschung von Daten?', 'Recht auf Löschung', ['Recht auf Auskunft', 'Recht auf Löschung', 'Recht auf Zustimmung']),
          exInput('Wenn Maschinen Routinearbeit übernähmen, ___________ viele Menschen umlernen. (müssen, Konjunktiv II)', 'müssten'),
          exSelect('„Fachkräftemangel" bedeutet:', 'a shortage of skilled workers', ['a shortage of skilled workers', 'a surplus of teachers', 'a strike']),
          exInput('Vereinfacht gesagt ist ein Algorithmus eine feste Folge von ___________.', 'Schritten|Schritte'),
          exSelect('„Mit anderen Worten" leitet ein:', 'eine einfachere Erklärung', ['einen Gegensatz', 'eine einfachere Erklärung', 'einen Zeitpunkt']),
          exInput('Ein System, das Gruppen systematisch ___________ (benachteiligen, Präsens, 3. Person Singular: „es …"), ist voreingenommen.', 'benachteiligt'),
          exSelect('„Stellen streichen" bedeutet:', 'to cut jobs', ['to create jobs', 'to cut jobs', 'to train staff'])
        ]),

        reading: {
          intro: 'A feature on automated decisions in banking. Read for the <strong>concessive</strong> structures: the author grants a point, then limits it.',
          words: 340, minutes: 8,
          text: readingText('Wer entscheidet, wenn der Computer entscheidet?', [
            'Wenn ein Bankberater heute einen Kredit ablehnt, steckt oft ein Algorithmus dahinter. Er berechnet aus Hunderten von Merkmalen eine Zahl, die die Kreditwürdigkeit abbildet, und der Berater folgt ihr meist. Das spart Zeit und scheint objektiv zu sein. Ob es gerecht ist, ist eine andere Frage.',
            'Das Problem liegt in den Daten. Ein System lernt aus vergangenen Entscheidungen, und wenn diese Entscheidungen Vorurteile enthielten, übernimmt das Modell sie. Mehrere Untersuchungen haben gezeigt, dass Bewerbungssysteme Frauen seltener zu Gesprächen einluden, weil sie auf Lebensläufe aus der Vergangenheit trainiert waren. Die Technik hat die Ungleichheit also nicht erfunden, sondern fortgeschrieben.',
            'Die Hersteller entgegnen, man könne Verzerrungen herausrechnen. Das ist zwar möglich, allerdings nur dann, wenn man weiß, wonach man sucht. Hinzu kommt ein zweites Problem: Viele Modelle sind so komplex, dass selbst Entwickler nicht genau erklären können, warum sie zu einem Ergebnis kommen. Man spricht dann von einer Blackbox.',
            'Juristen fordern deshalb ein Recht auf eine verständliche Begründung. Insofern ist die Debatte weniger eine über Technik als über Verantwortung: Wer eine Entscheidung trifft, muss sie erklären können — auch dann, wenn ein Computer den größten Teil der Arbeit erledigt hat.'
          ], 'Wirtschaftsfeature, fiktiv — im Stil der deutschen Qualitätspresse'),
          glossary: vocabTable([
            ['das Merkmal', 'the characteristic, the feature'],
            ['die Kreditwürdigkeit', 'creditworthiness'],
            ['objektiv', 'objective'],
            ['das Vorurteil', 'the prejudice'],
            ['fortschreiben', 'to carry forward, to perpetuate'],
            ['entgegnen', 'to reply, to counter'],
            ['herausrechnen', 'to filter out (by calculation)'],
            ['die Begründung', 'the justification, the reasoning'],
            ['der größte Teil', 'the largest part'],
            ['erledigen', 'to complete, to handle']
          ]),
          questions: exerciseList([
            exSelect('Was berechnet der Algorithmus laut Text?', 'eine Zahl, die die Kreditwürdigkeit abbildet', ['einen Zinssatz für jeden Kunden', 'eine Zahl, die die Kreditwürdigkeit abbildet', 'den Wohnort des Kunden']),
            exTF('Der Berater folgt dem Algorithmus meist nicht.', false),
            exInput('Woran liegt das Problem laut Text? (ein Wort)', 'Daten'),
            exSelect('Was zeigt das Beispiel der Bewerbungssysteme?', 'Frauen wurden seltener eingeladen.', ['Frauen wurden seltener eingeladen.', 'Männer wurden seltener eingeladen.', 'Bewerbungen wurden nie gelesen.']),
            exSelect('Was bedeutet „die Technik hat die Ungleichheit fortgeschrieben"?', 'Sie hat sie übernommen und weitergeführt.', ['Sie hat sie erfunden.', 'Sie hat sie übernommen und weitergeführt.', 'Sie hat sie beendet.']),
            exInput('Man muss wissen, wonach man ___________, um Verzerrungen herauszurechnen. (suchen)', 'sucht'),
            exSelect('Warum ist eine Blackbox problematisch?', 'Niemand kann genau erklären, wie das Ergebnis zustande kommt.', ['Sie ist zu teuer.', 'Niemand kann genau erklären, wie das Ergebnis zustande kommt.', 'Sie ist verboten.']),
            exTF('Juristen fordern eine verständliche Begründung von Entscheidungen.', true),
            exSelect('Was ist laut Text die eigentliche Frage der Debatte?', 'Wer für eine Entscheidung verantwortlich ist', ['Wie schnell Computer rechnen', 'Wer für eine Entscheidung verantwortlich ist', 'Ob Banken Kredite vergeben'])
          ])
        },

        listening: {
          title: 'Podiumsdiskussion — KI und Arbeit',
          intro: 'Excerpt from a panel discussion with a union representative and a researcher. Listen <strong>once</strong>, then answer; the transcript is for checking afterwards.',
          lines: [
            ['Moderatorin', 'Herr Brandt, Sie vertreten Beschäftigte im Maschinenbau. Ist KI eine Bedrohung für Arbeitsplätze?'],
            ['Brandt', 'Zwar wird es viele neue Tätigkeiten geben, allerdings nicht automatisch für dieselben Menschen. Wer heute Routinearbeit macht, braucht eine echte Chance zur Umschulung.'],
            ['Moderatorin', 'Frau Dr. Kessler, sehen Sie das ähnlich?'],
            ['Kessler', 'Teilweise. Insofern hat Herr Brandt recht, als die Übergänge schwierig sind. Aber die Geschichte zeigt, dass Technik mehr Berufe verändert als vernichtet.'],
            ['Brandt', 'Das ist mir zu einfach. Die Geschichte hilft den Menschen nicht, die heute ihre Stelle verlieren.'],
            ['Moderatorin', 'Wie sollte die Politik reagieren?'],
            ['Kessler', 'Vor allem mit Weiterbildung, und zwar früh. Wer erst kündigt und dann umlernt, ist meist zu spät dran.'],
            ['Brandt', 'Das klingt gut, kostet aber Geld. Wer zahlt die Weiterbildung, wenn die Betriebe sparen?'],
            ['Kessler', 'Da stimme ich zu: Ohne Finanzierung bleibt jeder Plan Theorie. Das ist für mich die eigentliche Lücke.'],
            ['Moderatorin', 'Vielen Dank. Fassen wir zusammen: Weiterbildung ist nötig, über das Geld wird gestritten.']
          ],
          questions: exerciseList([
            exSelect('Was ist Brandts Hauptsorge?', 'Dass die neuen Stellen nicht automatisch denselben Menschen zugutekommen', ['Dass Computer zu teuer sind', 'Dass die neuen Stellen nicht automatisch denselben Menschen zugutekommen', 'Dass es zu viele Bücher gibt']),
            exSelect('Was hält Kessler für besonders wichtig?', 'Weiterbildung, und zwar früh', ['Weiterbildung, und zwar früh', 'Kündigungen', 'weniger Technik']),
            exTF('Kessler meint, Technik vernichte mehr Berufe, als sie verändere.', false),
            exSelect('Womit ist Brandt nicht einverstanden?', 'mit dem Verweis auf die Geschichte', ['mit dem Verweis auf die Geschichte', 'mit der Weiterbildung', 'mit dem Wort Automatisierung']),
            exInput('Welches Problem nennt Kessler am Ende als Lücke? (ein Wort)', 'Finanzierung'),
            exSelect('Worauf haben sich beide offenbar geeinigt?', 'Weiterbildung ist nötig.', ['Die KI soll verboten werden.', 'Weiterbildung ist nötig.', 'Der Staat soll alles bezahlen.']),
            exSelect('Was sagt Kessler über Umschulung erst nach einer Kündigung?', 'Man ist meist zu spät dran.', ['Man ist meist zu spät dran.', 'Sie ist die beste Lösung.', 'Sie wird vom Staat verboten.']),
            exInput('Wann, sagt Kessler, sollte man mit Weiterbildung beginnen? (ein Wort)', 'früh')
          ])
        },

        writing: {
          title: 'Zusammenfassung — Eine Podiumsdiskussion',
          textType: 'Zusammenfassung einer Diskussion (indirekte Rede, sachlich)',
          minWords: 180, maxWords: 230, minutes: 35,
          expect: ['indirect', 'conclusion', 'nominal'],
          task: '<p>Sie haben die Podiumsdiskussion <em>„KI und Arbeit"</em> gehört (Hören, diese Einheit).</p>' +
            '<p>Schreiben Sie eine <strong>Zusammenfassung</strong> für Ihre Kolleginnen und Kollegen. Geben Sie die Position jeder Person in <strong>indirekter Rede</strong> wieder und schließen Sie mit dem Punkt, in dem sich alle einig sind, und dem Punkt, in dem sie es nicht sind.</p>',
          plainTask: 'Write a neutral summary in German (180–230 words) of a panel discussion on AI and work. A union representative argues that retraining chances are not automatically offered to the people whose routine jobs are at risk. A researcher says history shows technology changes more jobs than it destroys, but agrees that the transitions are hard, argues for early further training and admits that financing is the real gap. Report each position in indirect speech, and end with what the speakers agree on and where they disagree.',
          bullets: [
            'Beginnen Sie mit dem Standardsatz: „In der Podiumsdiskussion ging es um …"',
            'Geben Sie jede Position mit <strong>Konjunktiv I</strong> wieder, zum Beispiel: Herr Brandt sagt, …',
            'Benennen Sie den <strong>Punkt der Einigung</strong> und den <strong>Punkt des Streits</strong>.',
            'Keine eigene Meinung, kein „ich".',
            'Nominalstil wo passend: „die Verringerung der Arbeitsplätze", „die Notwendigkeit der Weiterbildung".'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Einleiten', 'In der Podiumsdiskussion ging es um … · Die Teilnehmenden diskutierten die Frage, …'],
            ['Position', 'Herr Brandt <strong>sehe</strong> die Gefahr … · Frau Dr. Kessler <strong>halte</strong> die Geschichte für aufschlussreich.'],
            ['Konzession', 'Zwar <strong>räume</strong> er ein, dass … · Sie <strong>gebe</strong> zu, dass die Übergänge schwierig <strong>seien</strong>.'],
            ['Einigung', 'Einigkeit bestand darin, dass … · Alle Beteiligten <strong>hielten</strong> Weiterbildung für notwendig.'],
            ['Streit', 'Uneinigkeit herrschte bei der Frage der Finanzierung · Umstritten blieb, wer die Kosten <strong>trage</strong>.'],
            ['Schluss', 'Abschließend lässt sich festhalten, dass … · Offen blieb, …']
          ]),
          criteria: [
            'Der erste Satz nennt das Thema und die Runde.',
            'Jede Person ist mit ihrer Position genannt (Moderation nicht vergessen, aber kurz).',
            'Die Positionen stehen in indirekter Rede; Konjunktiv I ist korrekt gebildet.',
            'Konzessionen (zwar … aber) sind korrekt wiedergegeben.',
            'Der Punkt der Einigung und der Punkt des Streits sind genannt.',
            'Keine eigene Meinung, kein „ich", keine Wertung.',
            'Ich liege zwischen 180 und 230 Wörtern.'
          ]
        },

        culture:
          '<p><strong>Germany came late to digital administration.</strong> Many citizens still hand in paper forms, and the <span class="de">Onlinezugangsgesetz</span> (OZG) was passed to force public services online. ' +
          'Progress has been slower than the law intended, which is a common joke in German news about the <span class="de">Digitalisierung</span> of government.</p>' +
          '<p><strong>Privacy is a national reflex.</strong> A 1983 census triggered a Constitutional Court ruling that gave citizens a right to decide what happens to their data. ' +
          'That history explains why German debates about data protection are often sharper than in other countries, and why a privacy setting or a consent banner is rarely treated as a formality.</p>' +
          '<p><strong>Industry is the centre of the automation debate.</strong> The term <span class="de">Industrie 4.0</span> describes factories that connect machines and data. ' +
          'Many small and medium-sized firms are still catching up, and that gap is at the heart of the discussion about training and the <span class="de">Fachkräftemangel</span>.</p>' +
          '<p><strong>Social partners shape the outcome.</strong> Unions and employers negotiate training and change through collective agreements, so new technology is usually discussed as a matter of <span class="de">Mitbestimmung</span> (co-determination) rather than as something handed down by management.</p>',

        recap: [
          { group: '🤖 KI-Debatte', rows: [
            ['die Künstliche Intelligenz', 'artificial intelligence'],
            ['das Sprachmodell', 'the language model'],
            ['die Regulierung', 'the regulation'],
            ['der Hype', 'the hype'],
            ['die Desinformation', 'deliberate disinformation'],
            ['die Fehleinschätzung', 'the misjudgement'],
            ['überschätzen', 'to overestimate'],
            ['unterschätzen', 'to underestimate'],
            ['fehleranfällig', 'prone to errors'],
            ['die Gefahr', 'the danger'],
            ['zwar … aber', 'admittedly … but'],
            ['allerdings', 'however, though']
          ] },
          { group: '🔐 Daten und Recht', rows: [
            ['die Datenschutz-Grundverordnung', 'the GDPR'],
            ['personenbezogene Daten', 'personal data'],
            ['die Einwilligung', 'the consent'],
            ['die Zweckbindung', 'purpose limitation'],
            ['die Verarbeitung', 'the processing'],
            ['das Recht auf Auskunft', 'the right of access'],
            ['das Recht auf Löschung', 'the right to erasure'],
            ['der Widerspruch', 'the objection'],
            ['das Bußgeld', 'the fine'],
            ['insofern', 'in this respect'],
            ['soweit', 'as far as']
          ] },
          { group: '👥 Arbeit und Automatisierung', rows: [
            ['die Automatisierung', 'automation'],
            ['der Fachkräftemangel', 'the shortage of skilled workers'],
            ['die Routinetätigkeit', 'the routine task'],
            ['die Weiterbildung', 'further training'],
            ['die Umschulung', 'retraining'],
            ['die Qualifikation', 'the qualification'],
            ['Stellen streichen', 'to cut jobs'],
            ['Stellen schaffen', 'to create jobs'],
            ['die Gewerkschaft', 'the trade union'],
            ['verdrängen', 'to displace'],
            ['die Lücke', 'the gap']
          ] },
          { group: '🧠 Algorithmen erklären', rows: [
            ['der Algorithmus', 'the algorithm'],
            ['der Datensatz', 'the dataset'],
            ['die Voreingenommenheit', 'bias'],
            ['diskriminieren', 'to discriminate'],
            ['nachvollziehbar', 'understandable, traceable'],
            ['die Blackbox', 'the black box'],
            ['die Fehlerquote', 'the error rate'],
            ['vereinfacht gesagt', 'put simply'],
            ['mit anderen Worten', 'in other words'],
            ['das heißt', 'that is']
          ] }
        ],

        sentences: [
          { de: 'Zwar ist die Technik nützlich, aber sie hat Grenzen', en: 'Admittedly the technology is useful, but it has limits' },
          { de: 'Die Regel gilt insofern, als Daten gespeichert werden', en: 'The rule applies in so far as data is stored' },
          { de: 'Daten dürfen nur für den festgelegten Zweck verarbeitet werden', en: 'Data may only be processed for the stated purpose' },
          { de: 'Wenn Maschinen Routinearbeit übernähmen, müssten viele umlernen', en: 'If machines took over routine work, many would have to retrain' },
          { de: 'Vereinfacht gesagt ist ein Algorithmus ein Rezept', en: 'Put simply, an algorithm is a recipe' },
          { de: 'Die Finanzierung ist die eigentliche Lücke', en: 'Financing is the real gap' }
        ]
      },

      { // ===== B2 UNIT 6 — written out in full =====
        title: '🏛️ Unit 6 — Politics and Civil Society',
        subject: 'Politik und Gesellschaft',
        canDo: ['Explain how the German political system works, in German',
                'Describe ways citizens can take part and what each one can achieve',
                'Tell a commentary apart from a report and name its rhetorical moves',
                'Defend a position against counter-arguments using concessive structures'],
        grammarFocus: ['Passive in political descriptions', 'Verbs with prepositions: sich einsetzen für, sich wenden gegen',
                       'Konzessivsätze: obwohl, auch wenn, selbst wenn', 'Emphasis and rhetorical questions'],
        topics: [
          {
            icon: '🗳️', title: 'The political system of Germany',
            explanation:
              '<p>The Federal Republic is a parliamentary democracy, and most of its institutions are easier to understand once you know which one does what. ' +
              'The <span class="de">Bundestag</span> is the parliament that is elected directly by the people, and it elects the <span class="de">Bundeskanzler</span> (chancellor). ' +
              'The <span class="de">Bundesrat</span> represents the sixteen <span class="de">Länder</span> through their state governments. Federal laws almost always need the Bundesrat, so the Länder have real influence.</p>' +
              '<p>Because no party usually wins an absolute majority, governments are formed as a <span class="de">Koalition</span>. The parties write a <span class="de">Koalitionsvertrag</span>, a long agreement that sets out the programme. ' +
              'Everyone outside the government is the <span class="de">Opposition</span>, and its job is to criticise, to propose alternatives and to check the government.</p>',
            vocab: vocabTable([
              ['der Bundestag', 'the federal parliament'],
              ['der Bundesrat', 'the Federal Council (the Länder)'],
              ['der Bundeskanzler / die Bundeskanzlerin', 'the federal chancellor'],
              ['das Land / die Länder', 'the federal state(s)'],
              ['die Koalition', 'the coalition'],
              ['der Koalitionsvertrag', 'the coalition agreement'],
              ['die Opposition', 'the parties not in government'],
              ['die Wahlperiode', 'the term of office'],
              ['der Gesetzentwurf', 'the draft bill'],
              ['beschließen', 'to pass, to resolve'],
              ['zustimmen', 'to approve'],
              ['die Mehrheit', 'the majority'],
              ['der Abgeordnete / die Abgeordnete', 'the member of parliament'],
              ['die Landesregierung', 'the state government'],
              ['wählen', 'to elect'],
              ['laut', 'according to (+ Dativ)'],
              ['gemäß', 'in accordance with (+ Dativ)'],
              ['die Fünf-Prozent-Hürde', 'the five-percent threshold']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Passive in institutional descriptions.</strong> German political texts describe what institutions do with the passive, because the institution is the agent and the sentence is about the process:</p>' +
              formTable('', ['Active (the actor is named)', 'Passive (the process is named)'], [
                ['Der Bundestag wählt den Kanzler.', '<strong>Der Kanzler wird</strong> vom Bundestag <strong>gewählt</strong>.'],
                ['Der Bundesrat stimmt dem Gesetz zu.', '<strong>Das Gesetz muss</strong> vom Bundesrat <strong>gebilligt werden</strong>.'],
                ['Die Parteien beschließen den Vertrag.', '<strong>Der Vertrag wird</strong> von den Parteien <strong>beschlossen</strong>.']
              ]) +
              '<p><strong>laut</strong> and <strong>gemäß</strong> introduce a source in formal writing: <span class="de">laut Grundgesetz</span> (according to the Basic Law), <span class="de">gemäß Artikel 63</span> (in accordance with Article 63). Both take the dative.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Der Kanzler ___________ vom Bundestag gewählt.', 'wird'),
              exSelect('„Die Opposition" bedeutet:', 'the parties not in government', ['the parties not in government', 'the government spokesperson', 'the federal court']),
              exInput('Die Vertretung der Länder im Bund heißt ___________.', 'Bundesrat'),
              exSelect('„laut Grundgesetz" bedeutet:', 'according to the Basic Law', ['against the Basic Law', 'according to the Basic Law', 'despite the Basic Law']),
              exSelect('Welche Form passt? „Gesetze ___ heute im Bundestag beschlossen."', 'werden', ['werden', 'wurden', 'worden']),
              exInput('Eine Regierung aus mehreren Parteien heißt ___________.', 'Koalition'),
              exSelect('Wie lange dauert eine Wahlperiode des Bundestages in der Regel?', 'vier Jahre', ['vier Jahre', 'zwei Jahre', 'sechs Jahre'])
            ])
          },
          {
            icon: '📣', title: 'Protest and participation',
            explanation:
              '<p>Germans have several formal ways to take part between elections, and the vocabulary is worth knowing precisely. A <span class="de">Demonstration</span> is protected by the Versammlungsfreiheit (Article 8 of the Basic Law). ' +
              'A <span class="de">Petition</span> is a written request to the Bundestag, protected by the Petitionsrecht (Article 17). A <span class="de">Bürgerinitiative</span> is a group of citizens who campaign for a local issue. ' +
              'A <span class="de">Lobby</span> or a <span class="de">Verband</span> represents the interests of an industry or a group, usually with a permanent office in Berlin.</p>' +
              '<p>Campaigning verbs take fixed prepositions, and these are the ones you must learn with the verb: <span class="de">sich einsetzen <strong>für</strong></span> (to campaign for) takes the accusative, ' +
              '<span class="de">sich wenden <strong>gegen</strong></span> (to oppose) takes the accusative, and <span class="de">sich beschweren <strong>über</strong></span> (to complain about) also takes the accusative.</p>',
            vocab: vocabTable([
              ['die Demonstration', 'the demonstration'],
              ['die Versammlungsfreiheit', 'the freedom of assembly'],
              ['die Petition', 'the petition'],
              ['das Petitionsrecht', 'the right of petition'],
              ['die Bürgerinitiative', 'the citizens\' initiative (local)'],
              ['der Volksentscheid', 'the referendum (Länder level)'],
              ['die Lobby / der Verband', 'the lobby / the association'],
              ['das Anliegen', 'the concern, the request'],
              ['sich engagieren', 'to get involved'],
              ['sich einsetzen für', 'to campaign for'],
              ['sich wenden gegen', 'to oppose'],
              ['sich beschweren über', 'to complain about'],
              ['die Forderung', 'the demand'],
              ['fordern', 'to demand'],
              ['aufmerksam machen auf', 'to draw attention to'],
              ['die Unterschrift', 'the signature'],
              ['unterstützen', 'to support']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Verb + preposition', 'Case', 'Example'], [
                ['sich einsetzen <strong>für</strong>', 'Akkusativ', 'Sie setzen sich <strong>für bessere Schulen</strong> ein.'],
                ['sich wenden <strong>gegen</strong>', 'Akkusativ', 'Die Bürger wenden sich <strong>gegen die Pläne</strong>.'],
                ['sich beschweren <strong>über</strong>', 'Akkusativ', 'Er beschwert sich <strong>über den Lärm</strong>.'],
                ['sich engagieren <strong>in</strong>', 'Dativ', 'Viele engagieren sich <strong>in der Bürgerinitiative</strong>.']
              ]) +
              '<p class="note">In a question with a preposition verb, the pronoun is a <em>da</em>-compound: <span class="de">Wofür setzt du dich ein?</span> — <span class="de">Dafür</span> (for it), <span class="de">dagegen</span> (against it).</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Ich setze mich ___________ bessere Schulen ein. (Präposition)', 'für'),
              exInput('Die Bürger wenden sich ___________ die Kürzungen. (Präposition)', 'gegen'),
              exSelect('Wie heißt das Recht, sich schriftlich an den Bundestag zu wenden?', 'Petitionsrecht', ['Versammlungsfreiheit', 'Petitionsrecht', 'Meinungsfreiheit']),
              exSelect('Welche Form der Beteiligung gibt es nur auf Landesebene?', 'Volksentscheid', ['Volksentscheid', 'Bundesrat', 'Petition']),
              exInput('Eine Gruppe von Bürgern, die sich vor Ort für ein Anliegen einsetzt, nennt man eine ___________.', 'Bürgerinitiative'),
              exSelect('„Lobby" bedeutet im politischen Alltag:', 'Interessenvertretung', ['Interessenvertretung', 'Parlamentsgebäude', 'Wahlkampf']),
              exSelect('Welche Präposition passt? „Er beschwert sich ___ den Lärm."', 'über', ['über', 'für', 'gegen'])
            ])
          },
          {
            icon: '📰', title: 'Reading political commentary',
            explanation:
              '<p>The first skill in political reading is telling a <span class="de">Bericht</span> (report, which describes what happened) from a <span class="de">Kommentar</span> (commentary, which gives the author\'s judgement). ' +
              'Both can appear on the same page, and a commentary is often disguised as a report. Look for <span class="de">Wertungen</span>: words that judge rather than describe, such as <em>skandalös</em>, <em>mutig</em> or <em>endlich</em>.</p>' +
              '<p>Commentaries use rhetorical tools to make a point stick. A <span class="de">Metapher</span> makes an image out of a situation: <span class="de">Die Koalition steckt in der Sackgasse</span>. ' +
              'A <span class="de">Pauschalisierung</span> lumps people together: <span class="de">die Politiker</span>. A <span class="de">Suggestivfrage</span> presents its own answer as a question. ' +
              '<span class="de">Ironie</span> says the opposite of what it means. Noticing these tools is what lets you separate the argument from the rhetoric.</p>',
            vocab: vocabTable([
              ['der Kommentar', 'the commentary'],
              ['der Bericht', 'the report'],
              ['die Wertung', 'the judgement, the evaluation'],
              ['die Metapher', 'the metaphor'],
              ['die Pauschalisierung', 'generalisation'],
              ['die Suggestivfrage', 'the leading question'],
              ['die Ironie', 'irony'],
              ['die Polemik', 'polemic'],
              ['der Standpunkt', 'the point of view'],
              ['die Sackgasse', 'the dead end'],
              ['die Blockade', 'the blockade, the deadlock'],
              ['der Kompromiss', 'the compromise'],
              ['skandalös', 'scandalous'],
              ['mutig', 'bold, courageous'],
              ['die Behauptung', 'the claim'],
              ['belegen', 'to back up with evidence'],
              ['zuspitzen', 'to sharpen, to exaggerate'],
              ['ausweichen', 'to evade']
            ]),
            grammar:
              '<div class="grammar-point">' +
              '<p><strong>Emphasis structures</strong> that commentaries use to signal what matters most:</p>' +
              formTable('', ['Structure', 'Meaning', 'Example'], [
                ['<strong>Es ist nicht zu bestreiten, dass …</strong>', 'It cannot be denied that …', 'Es ist nicht zu bestreiten, dass die Lage ernst ist.'],
                ['<strong>Gerade das ist …</strong>', 'That is precisely …', '<strong>Gerade das ist</strong> das Problem.'],
                ['<strong>Das Entscheidende ist, dass …</strong>', 'The decisive thing is that …', 'Das Entscheidende ist, dass niemand Verantwortung übernimmt.']
              ]) +
              '<p class="note">A rhetorical question presents its own answer: <span class="de">Wer soll das bezahlen?</span> does not want information; it means <em>nobody can pay for this</em>.</p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('Welche Textsorte enthält persönliche Wertungen?', 'Kommentar', ['Bericht', 'Kommentar', 'Protokoll']),
              exInput('„Die Koalition steckt in der Sackgasse" ist eine ___________. (Bildsprache)', 'Metapher'),
              exSelect('Was ist eine Suggestivfrage?', 'eine Frage, die schon die gewünschte Antwort nahelegt', ['eine echte Umfrage', 'eine Frage, die schon die gewünschte Antwort nahelegt', 'eine Frage ohne Antwort']),
              exSelect('„Pauschalisierung" bedeutet:', 'generalisation, lumping together', ['generalisation, lumping together', 'a precise statistic', 'a legal decision']),
              exInput('Wer ein Argument mit beißendem Spott lächerlich macht, benutzt ___________. (Ironie)', 'Ironie'),
              exSelect('„Es ist nicht zu bestreiten, dass …" ist eine Form der:', 'Betonung', ['Betonung', 'Entschuldigung', 'Frage']),
              exSelect('Welches Wort ist eine Wertung, kein neutraler Begriff?', 'skandalös', ['Gesetz', 'Bundestag', 'skandalös'])
            ])
          },
          {
            icon: '⚖️', title: 'Rights and the constitution',
            explanation:
              '<p>The <span class="de">Grundgesetz</span> was adopted in 1949 after the Nazi dictatorship, and its first article is its most famous: <span class="de">Die Würde des Menschen ist unantastbar.</span> ' +
              'Several rights matter for political life. Article 3 guarantees equality before the law, Article 5 protects freedom of opinion, press and broadcasting, Article 8 protects freedom of assembly, and Article 17 gives the right of petition.</p>' +
              '<p>Argument often turns on <strong>concession</strong>: you grant that something is true, and then show that it does not change the conclusion. German uses three conjunctions for this, and they are not interchangeable. ' +
              '<span class="de">obwohl</span> states a fact that is surprising (<em>although</em>). <span class="de">auch wenn</span> concedes a condition that may or may not apply (<em>even if</em>). ' +
              '<span class="de">selbst wenn</span> is the strongest, hypothetical version (<em>even if, in the extreme case</em>).</p>',
            vocab: vocabTable([
              ['das Grundgesetz', 'the Basic Law (German constitution)'],
              ['die Menschenwürde', 'human dignity'],
              ['unantastbar', 'inviolable'],
              ['die Gleichheit vor dem Gesetz', 'equality before the law'],
              ['die Meinungsfreiheit', 'freedom of opinion'],
              ['die Pressefreiheit', 'freedom of the press'],
              ['die Versammlungsfreiheit', 'freedom of assembly'],
              ['das Recht', 'the right, the law'],
              ['schützen', 'to protect'],
              ['garantieren', 'to guarantee'],
              ['verletzen', 'to violate'],
              ['einschränken', 'to restrict'],
              ['obwohl', 'although (a fact)'],
              ['auch wenn', 'even if (a real condition)'],
              ['selbst wenn', 'even if (hypothetical, strongest)'],
              ['zugestehen', 'to concede'],
              ['das Argument', 'the argument']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Conjunction', 'Meaning', 'Example'], [
                ['<strong>obwohl</strong>', 'although — a fact', '<strong>Obwohl das Gesetz umstritten ist</strong>, wird es verabschiedet.'],
                ['<strong>auch wenn</strong>', 'even if — a real possibility', '<strong>Auch wenn es regnet</strong>, findet die Demo statt.'],
                ['<strong>selbst wenn</strong>', 'even if — the extreme case', '<strong>Selbst wenn</strong> der Bundesrat zustimmt, bleibt die Frage offen.']
              ]) +
              '<p class="note">All three send the verb to the end of the subordinate clause. The main clause then starts with the verb: <span class="de">Obwohl das Gesetz umstritten ist, <strong>wird</strong> es verabschiedet.</span></p>' +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exSelect('Welche Konjunktion passt? „___ das Gesetz nicht verabschiedet wird, bleibt die Debatte offen." (der extremste Fall)', 'Selbst wenn', ['Obwohl', 'Selbst wenn', 'Damit']),
              exInput('Obwohl das Gesetz umstritten ist, ___________ es verabschiedet. (Verb auf Platz 2)', 'wird'),
              exSelect('Welcher Satz ist korrekt?', 'Obwohl das Gesetz umstritten ist, wird es verabschiedet.', ['Obwohl das Gesetz umstritten ist, es wird verabschiedet.', 'Obwohl das Gesetz umstritten ist, wird es verabschiedet.', 'Obwohl das Gesetz umstritten, ist es wird verabschiedet.']),
              exSelect('Welcher Artikel des Grundgesetzes schützt die Meinungsfreiheit?', 'Artikel 5', ['Artikel 1', 'Artikel 5', 'Artikel 17']),
              exInput('Die Würde des Menschen ist ___________ (Art. 1). (unverletzlich, „nicht zu verletzen")', 'unantastbar'),
              exSelect('Welche Konjunktion drückt eine echte Möglichkeit aus?', 'auch wenn', ['obwohl', 'auch wenn', 'damit'])
            ])
          },
          {
            icon: '💬', title: 'Debating a contested issue',
            explanation:
              '<p>A fair debate has rules that German speakers take seriously: let others finish, answer the argument rather than the person, and name your sources. ' +
              'Breaking these rules is itself a point against you, and experienced speakers use the rules to expose the other side.</p>' +
              '<p>The structure of a good contribution is simple: state your position, give your reasons, then <em>take up</em> the strongest objection and answer it. ' +
              'The phrase <span class="de">Es geht nicht darum, ob …, sondern darum, wie …</span> is a useful way to shift a debate from whether to how, and <span class="de">Das Entscheidende ist, dass …</span> marks your central point.</p>',
            vocab: vocabTable([
              ['die Debatte', 'the debate'],
              ['der Einwand', 'the objection'],
              ['entkräften', 'to refute, to defuse'],
              ['aussprechen lassen', 'to let someone finish'],
              ['unterbrechen', 'to interrupt'],
              ['die Sachlichkeit', 'objectivity, matter-of-factness'],
              ['die Quelle', 'the source'],
              ['belegen', 'to back up'],
              ['die Position', 'the position'],
              ['Stellung nehmen', 'to take a position'],
              ['abwägen', 'to weigh up'],
              ['das Gegenargument', 'the counter-argument'],
              ['zuhören', 'to listen'],
              ['sich auf etwas einlassen', 'to engage with something']
            ]),
            grammar:
              '<div class="grammar-point">' +
              formTable('', ['Structure', 'Use', 'Example'], [
                ['<strong>Es geht nicht darum, ob …, sondern darum, wie …</strong>', 'shift from whether to how', 'Es geht nicht darum, ob wir handeln, <strong>sondern darum</strong>, wie.'],
                ['<strong>Das Entscheidende ist, dass …</strong>', 'mark your central point', 'Das Entscheidende ist, dass alle beteiligt werden.'],
                ['<strong>Gerade deshalb …</strong>', 'emphasise a reason', 'Gerade deshalb ist die Frage wichtig.']
              ]) +
              '</div>',
            dialogs: '',
            exercises: exerciseList([
              exInput('Es geht nicht darum, ob wir handeln, ___________ darum, wie. (sondern)', 'sondern'),
              exSelect('„Das Entscheidende ist, dass …" leitet ein:', 'die wichtigste Aussage', ['die wichtigste Aussage', 'eine Entschuldigung', 'eine Zeitangabe']),
              exSelect('Welche Regel gehört zu einer fairen Debatte?', 'Man lässt andere ausreden.', ['Man lässt andere ausreden.', 'Man unterbricht die Gegenseite.', 'Man greift die Person an.']),
              exSelect('„Wer soll das bezahlen?" bedeutet in einem Kommentar meist:', 'Die Antwort ist eigentlich eine Aussage: niemand kann es bezahlen.', ['Man möchte die Antwort wissen.', 'Die Antwort ist eigentlich eine Aussage: niemand kann es bezahlen.', 'Es wird eine neue Partei gegründet.']),
              exInput('Einen Einwand zu widerlegen heißt, ihn zu ___________. (entkräften)', 'entkräften')
            ])
          }
        ],

        drillIntro: '<p>Mixed practice over the whole unit: institutions and the passive, campaigning prepositions, reading commentary, concession and fair debate.</p>',
        exercises: exerciseList([
          exInput('Der Kanzler ___________ vom Bundestag gewählt. (Passiv)', 'wird'),
          exInput('Die Länder wirken im ___________ mit. (Vertretung der Länder)', 'Bundesrat'),
          exSelect('„laut Grundgesetz" bedeutet:', 'according to the Basic Law', ['according to the Basic Law', 'against the Basic Law', 'despite the Basic Law']),
          exInput('Ich setze mich ___________ Umweltschutz ein. (Präposition)', 'für'),
          exInput('Die Bürger wenden sich ___________ den Bau der Straße. (Präposition)', 'gegen'),
          exSelect('Welche Form ist ein Recht aus Art. 17?', 'Petitionsrecht', ['Petitionsrecht', 'Versammlungsfreiheit', 'Pressefreiheit']),
          exSelect('„Die Koalition steckt in der Sackgasse" ist eine:', 'Metapher', ['Metapher', 'Statistik', 'Gesetzesfrist']),
          exInput('Wer Menschen pauschal über einen Kamm schert, betreibt ___________.', 'Pauschalisierung'),
          exInput('___________ das Gesetz umstritten ist, wird es verabschiedet. (Tatsache)', 'Obwohl'),
          exSelect('„Selbst wenn …" drückt aus:', 'den extremsten Fall', ['eine Tatsache', 'den extremsten Fall', 'einen Grund']),
          exInput('Es geht nicht darum, ob, ___________ darum, wie. (Gegensatz)', 'sondern'),
          exSelect('Welche Regel ist fair?', 'aussprechen lassen', ['aussprechen lassen', 'unterbrechen', 'die Person angreifen'])
        ]),

        reading: {
          intro: 'A political commentary on a stalled coalition project. Read for the <strong>judgements</strong> the author makes, and for the rhetorical tools that carry them.',
          words: 330, minutes: 8,
          text: readingText('Die Koalition muss liefern', [
            'Es ist nicht zu bestreiten, dass die Regierung seit Monaten in der Sackgasse steckt. Der Gesetzentwurf zur Modernisierung der Verwaltung liegt auf Eis, und jede Seite schiebt die Schuld auf die andere. Gerade das ist das Problem: Die Bürgerinnen und Bürger erwarten Ergebnisse, nicht Schuldzuweisungen.',
            'Man hört immer wieder, die Koalition sei eben zerstritten. Doch wer soll das den Menschen erklären, die seit Jahren auf einen Termin im Bürgeramt warten? Die Verwaltung sei zu langsam, heißt es, und die Politiker sprächen lieber über Symbolik als über Taten. Diese Pauschalisierung hilft niemandem, trifft aber einen wahren Kern.',
            'Natürlich ist Kompromiss das Wesen der Demokratie. Auch wenn sich die Parteien unterschiedlich positionieren, muss am Ende ein Gesetz stehen. Selbst wenn die Opposition den Entwurf ablehnt, bleibt der Regierung die Pflicht, ihn zu Ende zu bringen. Das ist keine Schwäche des Systems, sondern dessen Kern.',
            'Das Entscheidende ist, dass die Koalition ihr Versprechen einlöst. Ob der Entwurf gut ist, darüber lässt sich streiten; dass er überhaupt vorankommt, ist die Mindestanforderung. Wer jetzt weiter blockiert, sollte sich fragen, wofür er eigentlich gewählt wurde.'
          ], 'Politischer Kommentar, fiktiv — im Stil der deutschen Qualitätspresse'),
          glossary: vocabTable([
            ['auf Eis liegen', 'to be on hold'],
            ['die Schuldzuweisung', 'the blame'],
            ['zerstritten', 'divided, at odds'],
            ['die Verwaltung', 'the public administration'],
            ['das Bürgeramt', 'the citizens\' registration office'],
            ['die Symbolik', 'symbolism'],
            ['die Pauschalisierung', 'generalisation'],
            ['sich positionieren', 'to take a stance'],
            ['einlösen', 'to deliver on (a promise)'],
            ['die Mindestanforderung', 'the minimum requirement'],
            ['blockieren', 'to block']
          ]),
          questions: exerciseList([
            exSelect('Worum geht es im Kommentar vor allem?', 'Eine Regierung kommt bei einem Projekt nicht voran.', ['Eine Regierung kommt bei einem Projekt nicht voran.', 'Ein neues Gesetz wird gefeiert.', 'Eine Wahl steht bevor.']),
            exTF('Der Gesetzentwurf zur Verwaltung ist schon in Kraft.', false),
            exSelect('Was erwarten die Bürger laut Kommentar?', 'Ergebnisse statt Schuldzuweisungen', ['Ergebnisse statt Schuldzuweisungen', 'mehr Symbolik', 'weniger Gesetze']),
            exInput('Auf welchen Bereich bezieht sich das Wort „Bürgeramt"? (ein Wort)', 'Verwaltung'),
            exSelect('Welche Textstelle ist eine Pauschalisierung?', '„die Politiker sprächen lieber über Symbolik"', ['„der Gesetzentwurf liegt auf Eis"', '„die Politiker sprächen lieber über Symbolik"', '„am Ende muss ein Gesetz stehen"']),
            exSelect('Was sagt der Kommentar über den Kompromiss?', 'Er ist das Wesen der Demokratie.', ['Er ist das Wesen der Demokratie.', 'Er ist eine Schwäche des Systems.', 'Er ist überflüssig.']),
            exSelect('Welcher Satz hat ein Wort mit Wertung?', 'Die Verwaltung sei zu langsam', ['Der Entwurf hat zwölf Artikel.', 'Die Verwaltung sei zu langsam', 'Die Sitzung war am Dienstag.']),
            exSelect('Welche Frage im Kommentar ist eine Suggestivfrage?', 'Wer soll das den Menschen erklären?', ['Wer soll das den Menschen erklären?', 'Wie lange dauert ein Termin?', 'Was kostet der Entwurf?']),
            exSelect('Was ist laut Kommentar die Mindestanforderung?', 'dass der Entwurf vorankommt', ['dass der Entwurf perfekt ist', 'dass der Entwurf vorankommt', 'dass niemand widerspricht'])
          ])
        },

        listening: {
          title: 'Radiobeitrag — Eine Bürgerinitiative kämpft um ihre Straße',
          intro: 'A local radio report about a citizens\' initiative and a planned road. Listen <strong>once</strong>, then answer; the transcript is for checking afterwards.',
          lines: [
            ['Moderator', 'In Kleinmachnow hat sich eine Bürgerinitiative gegründet, die sich gegen den Bau einer neuen Umgehungsstraße wendet. Frau Schulz, warum?'],
            ['Schulz', 'Die Straße würde direkt an unserem Wohngebiet vorbeiführen. Wir fordern, dass die Stadt Alternativen prüft, bevor sie irgendetwas beschließt.'],
            ['Moderator', 'Die Stadt sagt, die Straße sei nötig, um den Verkehr im Zentrum zu entlasten.'],
            ['Schulz', 'Das bestreiten wir nicht. Aber der Verkehr würde nur verlagert. Gerade deshalb brauchen wir ein Gesamtkonzept und keine Einzelmaßnahme.'],
            ['Moderator', 'Haben Sie Unterstützung aus der Politik?'],
            ['Schulz', 'Einige Stadtverordnete haben sich uns angeschlossen, obwohl ihre Partei den Bau unterstützt. Das zeigt, dass der Streit nicht einfach entlang der Parteigrenzen verläuft.'],
            ['Moderator', 'Wie wollen Sie Ihre Forderung durchsetzen?'],
            ['Schulz', 'Mit einer Unterschriftenliste und mit einer Petition an den Stadtrat. Auch wenn das langsam geht, ist es der legale Weg, und den nutzen wir.'],
            ['Moderator', 'Und wenn der Rat trotzdem beschließt?'],
            ['Schulz', 'Dann prüfen wir, ob ein Bürgerbegehren möglich ist. Das ist das Entscheidende: Die Leute sollen wissen, dass sie gehört werden können.']
          ],
          questions: exerciseList([
            exSelect('Gegen was richtet sich die Bürgerinitiative?', 'den Bau einer Umgehungsstraße', ['den Bau einer Umgehungsstraße', 'eine neue Schule', 'einen Bahnhof']),
            exTF('Frau Schulz bestreitet, dass die Straße den Verkehr entlasten würde.', false),
            exSelect('Was fordert die Initiative zuerst?', 'dass Alternativen geprüft werden', ['dass die Straße sofort gebaut wird', 'dass Alternativen geprüft werden', 'dass die Stadt die Initiative auflöst']),
            exSelect('Warum sagt Schulz „Das zeigt, dass der Streit nicht einfach entlang der Parteigrenzen verläuft"?', 'Auch Politiker einer Partei, die den Bau unterstützt, sind dagegen.', ['Alle Parteien sind gegen die Straße.', 'Auch Politiker einer Partei, die den Bau unterstützt, sind dagegen.', 'Die Stadt hat die Partei verboten.']),
            exInput('Nenne eines der beiden Mittel, die Schulz für den legalen Weg nennt. (ein Wort)', 'Unterschriftenliste|Unterschriften|Petition'),
            exTF('Schulz sagt, der Weg über die Petition sei schnell.', false),
            exSelect('Welche Konjunktion zeigt eine Konzession bei Schulz?', 'auch wenn', ['auch wenn', 'damit', 'sodass']),
            exSelect('Was wäre der nächste Schritt, wenn der Rat trotzdem beschließt?', 'ein mögliches Bürgerbegehren prüfen', ['ein mögliches Bürgerbegehren prüfen', 'die Initiative auflösen', 'die Straße selbst bauen'])
          ])
        },

        writing: {
          title: 'Leserbrief — Zu einem Kommentar Stellung nehmen',
          textType: 'Leserbrief (formell, begründete Meinung, Gegenargument)',
          minWords: 180, maxWords: 230, minutes: 40,
          expect: ['opinion', 'arguments', 'counter', 'conclusion'],
          task: '<p>Sie haben den Kommentar <em>„Die Koalition muss liefern"</em> gelesen (Lesen, diese Einheit).</p>' +
            '<p>Schreiben Sie einen <strong>Leserbrief</strong> an die Redaktion. Nehmen Sie zu einer zentralen Aussage des Kommentars Stellung, begründen Sie Ihre Meinung und gehen Sie auf mindestens <strong>ein Gegenargument</strong> ein.</p>',
          plainTask: 'Write a letter to the editor in German (180–230 words) responding to the commentary "Die Koalition muss liefern". Take a clear position on one central claim, support it with at least two reasons, address one counter-argument the author might raise (for example that coalitions must compromise), and end with a conclusion. Use a formal opening and closing.',
          bullets: [
            'Beginnen Sie mit <strong>Anrede und Bezug</strong>: „Sehr geehrte Damen und Herren, zu Ihrem Kommentar vom … möchte ich …"',
            'Nennen Sie Ihre <strong>Meinung</strong> klar in einem Satz.',
            'Begründen Sie mit mindestens zwei Argumenten; ein Beispiel stärkt jeden Punkt.',
            'Nehmen Sie ein <strong>Gegenargument</strong> ernst und begegnen Sie ihm.',
            'Schließen Sie mit einem Fazit und einer höflichen Schlussformel.'
          ],
          usefulPhrases: formTable('', ['Funktion', 'Redemittel'], [
            ['Bezug', 'Ihr Kommentar „…" hat mich zum Nachdenken gebracht. · Zu Ihrer Aussage, dass …, möchte ich Stellung nehmen.'],
            ['Meinung', 'Meines Erachtens ist … · Ich bin der Auffassung, dass …'],
            ['Argument', 'Ein wesentlicher Grund ist, dass … · Hinzu kommt, dass …'],
            ['Gegenargument', 'Zwar mag man einwenden, dass … · Obwohl dieser Einwand verständlich ist, …'],
            ['Schluss', 'Abschließend bleibt festzuhalten, dass … · Mit freundlichen Grüßen']
          ]),
          criteria: [
            'Anrede und Bezug auf den Kommentar sind korrekt.',
            'Die eigene Meinung ist in einem Satz klar genannt.',
            'Mindestens zwei Argumente sind begründet.',
            'Ein Gegenargument wird genannt und entkräftet oder abgewogen.',
            'Konzessionen (obwohl, auch wenn, selbst wenn) stehen mit korrekter Verbstellung.',
            'Der Ton ist sachlich und höflich; keine Beleidigungen oder Pauschalisierungen.',
            'Ich liege zwischen 180 und 230 Wörtern.'
          ]
        },

        culture:
          '<p><strong>The Grundgesetz is the country\'s civic anchor.</strong> Adopted in 1949 as a response to dictatorship, it is more stable than most constitutions in Europe, and its first article is quoted in almost every serious political debate.</p>' +
          '<p><strong>Coalitions are the normal case.</strong> Since most federal governments are formed by two or more parties, coalition talks can take weeks or months, and the result is a long contract that everyone must defend. ' +
          'Compromise is not a sign of weakness in German politics; a government that cannot agree is treated as a problem to solve.</p>' +
          '<p><strong>The five-percent hurdle matters.</strong> A party must win at least five percent of the vote, or three direct seats, to enter the Bundestag. This keeps the parliament manageable, but it also means smaller movements try to organise outside the parties through citizens\' initiatives and petitions.</p>' +
          '<p><strong>The 1989 demonstrations are part of the memory.</strong> The Monday demonstrations in Leipzig and other cities helped bring down the GDR, and the phrase <span class="de">Wir sind das Volk</span> remains a reference point for what peaceful protest can achieve.</p>' +
          '<p><strong>Protest is seen as a right, not a disturbance.</strong> Demonstrations are routine in German cities, and the Versammlungsfreiheit means a city usually must allow a protest and can only restrict it for a serious reason.</p>',

        recap: [
          { group: '🗳️ Institutionen', rows: [
            ['der Bundestag', 'the federal parliament'],
            ['der Bundesrat', 'the Federal Council'],
            ['das Land / die Länder', 'the federal state(s)'],
            ['die Koalition', 'the coalition'],
            ['der Koalitionsvertrag', 'the coalition agreement'],
            ['die Opposition', 'the opposition'],
            ['die Wahlperiode', 'the term of office'],
            ['der Gesetzentwurf', 'the draft bill'],
            ['die Mehrheit', 'the majority'],
            ['laut / gemäß', 'according to / in accordance with'],
            ['die Fünf-Prozent-Hürde', 'the five-percent threshold']
          ] },
          { group: '📣 Mitwirkung', rows: [
            ['die Demonstration', 'the demonstration'],
            ['die Petition', 'the petition'],
            ['die Bürgerinitiative', 'the citizens\' initiative'],
            ['der Volksentscheid', 'the referendum (Länder)'],
            ['die Lobby / der Verband', 'the lobby / the association'],
            ['das Anliegen', 'the concern'],
            ['sich einsetzen für', 'to campaign for'],
            ['sich wenden gegen', 'to oppose'],
            ['sich beschweren über', 'to complain about'],
            ['die Forderung', 'the demand'],
            ['unterstützen', 'to support']
          ] },
          { group: '📰 Kommentar und Rhetorik', rows: [
            ['der Kommentar', 'the commentary'],
            ['die Wertung', 'the judgement'],
            ['die Metapher', 'the metaphor'],
            ['die Pauschalisierung', 'generalisation'],
            ['die Suggestivfrage', 'the leading question'],
            ['die Ironie', 'irony'],
            ['die Polemik', 'polemic'],
            ['die Sackgasse', 'the dead end'],
            ['der Kompromiss', 'the compromise'],
            ['zuspitzen', 'to sharpen'],
            ['Es ist nicht zu bestreiten, dass …', 'It cannot be denied that …']
          ] },
          { group: '⚖️ Recht und Konzession', rows: [
            ['das Grundgesetz', 'the Basic Law'],
            ['die Menschenwürde', 'human dignity'],
            ['unantastbar', 'inviolable'],
            ['die Meinungsfreiheit', 'freedom of opinion'],
            ['die Versammlungsfreiheit', 'freedom of assembly'],
            ['schützen', 'to protect'],
            ['obwohl', 'although (a fact)'],
            ['auch wenn', 'even if (a real condition)'],
            ['selbst wenn', 'even if (the extreme case)'],
            ['zugestehen', 'to concede'],
            ['entkräften', 'to refute']
          ] }
        ],

        sentences: [
          { de: 'Der Kanzler wird vom Bundestag gewählt', en: 'The chancellor is elected by the Bundestag' },
          { de: 'Ich setze mich für bessere Schulen ein', en: 'I campaign for better schools' },
          { de: 'Die Bürger wenden sich gegen die Kürzungen', en: 'The citizens oppose the cuts' },
          { de: 'Obwohl das Gesetz umstritten ist, wird es verabschiedet', en: 'Although the law is disputed, it will be passed' },
          { de: 'Es geht nicht darum, ob, sondern darum, wie', en: 'It is not about whether, but about how' },
          { de: 'Das Entscheidende ist, dass alle gehört werden', en: 'The decisive thing is that everyone is heard' }
        ]
      },

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
        {
          icon: '🗣️', title: 'Arguing a hypothetical case', note: 'Konjunktiv II at full stretch',
          explanation:
            '<p>Ethical and legal arguments live on hypotheticals: <em>what would have happened if …?</em> <em>What would you have done in his place?</em> This is where the <strong>Konjunktiv II of the past</strong> does its work — and where you need to hear the difference between what <em>was</em> (indicative), what someone <em>claims</em> (Konjunktiv I, Unit 1) and what <em>never happened</em> (Konjunktiv II).</p>' +
            '<p>The past form is built from <strong>hätte / wäre + Partizip II</strong>: <span class="de">Wenn man früher gehandelt hätte, wäre der Schaden geringer gewesen.</span> Both halves of the sentence use it. Pick <span class="de">wäre</span> for <span class="de">sein</span> and verbs of movement or change, <span class="de">hätte</span> for the rest. With a modal verb the pattern becomes <span class="de">hätte … + Infinitiv + Modal</span>: <span class="de">Sie hätten den Vorfall melden müssen.</span></p>' +
            '<p>Two refinements make the argument sound polished. <strong>1. Drop wenn:</strong> put the verb first — <span class="de">Hätte man früher gehandelt, wäre …</span>. <strong>2. als ob / als wenn</strong> describe an imagined comparison: <span class="de">Er tut, als ob er nichts gewusst hätte.</span> or, with the verb moved up, <span class="de">… als hätte er nichts gewusst.</span></p>',
          vocab: vocabTable([
            ['Hätte man früher gehandelt, wäre …', 'Had they acted earlier, … would have been'],
            ['An seiner Stelle hätte ich …', 'In his place I would have …'],
            ['Wäre das Gesetz anders gefasst gewesen, …', 'Had the law been worded differently, …'],
            ['Er tut so, als ob / als wäre …', 'He acts as if …'],
            ['Angenommen, …', 'Suppose …'],
            ['gesetzt den Fall, dass …', 'assuming that …'],
            ['das Dilemma', 'the dilemma'],
            ['die Verantwortung tragen', 'to bear responsibility'],
            ['die Pflicht', 'the duty'],
            ['abwägen', 'to weigh up'],
            ['rechtfertigen', 'to justify'],
            ['fahrlässig', 'negligent']
          ]),
          grammar:
            '<div class="grammar-point">' +
            '<p><strong>Three ways to say the same unreal past condition:</strong></p>' +
            '<div class="example-box">' +
            'Wenn man früher <strong>gehandelt hätte</strong>, <strong>wäre</strong> der Schaden geringer <strong>gewesen</strong>.<br>' +
            '<strong>Hätte</strong> man früher <strong>gehandelt</strong>, <strong>wäre</strong> der Schaden geringer <strong>gewesen</strong>. <span class="note">(without wenn — verb first)</span><br>' +
            'Bei früherem Handeln <strong>wäre</strong> der Schaden geringer <strong>gewesen</strong>. <span class="note">(nominal — formal)</span>' +
            '</div>' +
            '<p><strong>als ob / als wenn / als</strong> — imagined comparison, always Konjunktiv II (or I in formal reports):</p>' +
            '<div class="example-box">' +
            'Er verhält sich, <strong>als ob</strong> er der Chef <strong>wäre</strong>. <span class="note">(verb at the end)</span><br>' +
            'Er verhält sich, <strong>als wäre</strong> er der Chef. <span class="note">(verb right after als)</span>' +
            '</div>' +
            '<p class="note">Do not mix up Konjunktiv II of the past with Perfekt: <span class="de">er hat gehandelt</span> says it happened; <span class="de">er hätte gehandelt</span> says it did <em>not</em>.</p>' +
            '</div>',
          dialogs: dialogBox('Aus einem Seminar — Fall einer Whistleblowerin', [
            ['Dozentin', 'Angenommen, eine Mitarbeiterin entdeckt Betrug in ihrer Firma. Was hätte sie tun müssen?'],
            ['Student A', 'Sie hätte sofort die Behörden informieren müssen. Hätte sie geschwiegen, wäre sie mitschuldig gewesen.'],
            ['Student B', 'Das sehe ich anders. An ihrer Stelle hätte ich zuerst intern nachgefragt.'],
            ['Student A', 'Und wenn man sie dann entlassen hätte?'],
            ['Student B', 'Dann hätte sie sich immer noch an die Öffentlichkeit wenden können.'],
            ['Dozentin', 'Sie argumentieren, als ob es nur eine richtige Lösung gäbe. Genau das ist hier die Frage.']
          ]),
          exercises: exerciseList([
            exInput('Wenn man früher gehandelt ___________, wäre der Schaden geringer gewesen. (haben)', 'hätte'),
            exInput('Without wenn: ___________ man früher gehandelt, wäre der Schaden geringer gewesen. (haben)', 'hätte'),
            exInput('Er tut, als ___________ er nichts gewusst. (haben — Konjunktiv II der Vergangenheit)', 'hätte'),
            exInput('Er verhält sich, als ___________ er der Chef. (sein)', 'wäre'),
            exInput('Sie ___________ den Vorfall melden müssen. (haben, Konjunktiv II der Vergangenheit)', 'hätten'),
            exInput('Wäre sie nicht gewarnt worden, ___________ der Unfall passiert. (sein)', 'wäre'),
            exSelect('Which auxiliary? Wenn er rechtzeitig abgefahren ___, wäre er pünktlich angekommen.', 'wäre', ['wäre', 'hätte']),
            exSelect('„Er sieht aus, als wäre er krank“ means:', 'He looks as if he were ill (maybe he is not).', ['He is ill.', 'He looks as if he were ill (maybe he is not).', 'He was ill yesterday.'])
          ])
        }
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
