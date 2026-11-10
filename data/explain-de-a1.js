/* =========================================================
   Deutsche Erklärungen — A1, Units 3–18.
   Loaded after explain-de.js. Same shape as there:
   DE_TEXT.a1[unit] = { reading, listening, topics: [html, …] }
   Short, simple A1 German: present tense, everyday words.
   A slot that already has a text (e.g. the café lesson) is kept.
   ========================================================= */
(function () {
  var D = window.DE_TEXT = window.DE_TEXT || {};
  D.a1 = D.a1 || {};
  function unit(u, o) {
    var x = D.a1[u] = D.a1[u] || { topics: [] };
    x.topics = x.topics || [];
    if (o.reading) x.reading = o.reading;
    if (o.listening) x.listening = o.listening;
    o.topics.forEach(function (h, i) { if (h && !x.topics[i]) x.topics[i] = h; });
  }

  /* ---------- Unit 3 — Sich vorstellen ---------- */
  unit(2, {
    reading: '<p>Drei kurze Vorstellungen aus einem Sprachcafé. Lesen Sie: Wie heißen die Personen? Wie alt sind sie? Woher kommen sie? Was machen sie?</p>',
    listening: '<p>Der erste Tag im Sprachkurs. Die Teilnehmer stellen sich vor. Hören Sie: Name, Herkunft und Beruf.</p>',
    topics: [
      '<p>Für den Namen gibt es zwei Sätze: <strong>Ich heiße Sıla.</strong> oder <strong>Ich bin Sıla.</strong> Formell sagt man auch: <strong>Mein Name ist Yılmaz.</strong></p>' +
      '<p>Für das Alter benutzt man <strong>sein</strong>: <strong>Ich bin 25 Jahre alt.</strong> Man kann auch kurz sagen: <em>Ich bin 25.</em> Achtung: Man sagt nicht „Ich habe 25 Jahre“.</p>' +
      '<p>Die Fragen sind: <strong>Wie heißt du? / Wie heißen Sie?</strong> und <strong>Wie alt bist du? / Wie alt sind Sie?</strong></p>' +
      '<p>Das Verb <strong>sein</strong> ist unregelmäßig: ich bin, du bist, er/sie ist, wir sind, ihr seid, sie/Sie sind.</p>',

      '<p>Woher kommen Sie? Man antwortet mit <strong>aus</strong>: <strong>Ich komme aus Deutschland / aus Italien.</strong> Einige Länder haben einen Artikel: <em>aus der Türkei, aus der Schweiz, aus dem Iran, aus den USA</em>.</p>' +
      '<p>Wo wohnen Sie? Man antwortet mit <strong>in</strong>: <strong>Ich wohne in Hamburg.</strong></p>' +
      '<p>Für die Nationalität gibt es oft zwei Formen: <em>der Deutsche / die Deutsche, der Türke / die Türkin</em>. Man sagt: <strong>Ich bin Türkin.</strong> – ohne Artikel.</p>',

      '<p>Für Sprachen benutzt man <strong>sprechen</strong>: <strong>Ich spreche Türkisch, Englisch und ein bisschen Deutsch.</strong> Sprachen schreibt man groß: <em>Deutsch, Arabisch, Spanisch</em>.</p>' +
      '<p>Achtung: <strong>sprechen</strong> ändert den Vokal: ich spreche, <strong>du sprichst, er spricht</strong>.</p>' +
      '<p>Wie gut? <em>sehr gut, gut, ein bisschen, nicht so gut</em>. Die erste Sprache ist die <strong>Muttersprache</strong>. Die Frage ist: <strong>Welche Sprachen sprichst du?</strong></p>',

      '<p>Für den Beruf sagt man: <strong>Ich bin Lehrerin.</strong> oder <strong>Ich arbeite als Lehrerin.</strong> Ohne Artikel! Nicht: „Ich bin eine Lehrerin“.</p>' +
      '<p>Viele Berufe haben eine männliche und eine weibliche Form: <em>der Lehrer – die Lehrerin, der Student – die Studentin</em>.</p>' +
      '<p>Die Fragen sind: <strong>Was machst du? / Was sind Sie von Beruf?</strong> Studenten sagen: <strong>Ich studiere Medizin.</strong></p>',

      '<p>Im Gespräch fragt man zurück. Das ist höflich. Kurz sagt man: <strong>Und du? / Und Sie?</strong></p>' +
      '<p>Die wichtigsten Fragewörter sind: <strong>Wie?</strong> (Name), <strong>Wer?</strong> (Person), <strong>Woher?</strong> (Herkunft), <strong>Wo?</strong> (Wohnort), <strong>Was?</strong> (Beruf).</p>' +
      '<p>Bei einer W-Frage steht das Fragewort am Anfang und das Verb an Position 2: <em>Woher <strong>kommst</strong> du?</em> Die Endungen der Verben sind: ich -e, du -st, er/sie -t, wir -en, ihr -t, sie/Sie -en.</p>'
    ]
  });

  /* ---------- Unit 4 — Zahlen, Uhrzeit und Datum ---------- */
  unit(3, {
    reading: '<p>Ein kurzer Wochenplan. Lesen Sie: Welche Tage? Welche Uhrzeiten? Welche Preise und welches Datum?</p>',
    listening: '<p>Ein Anruf bei einer Sprachschule. Hören Sie: Wann beginnt der Kurs? Um wie viel Uhr? Was kostet er? Wie ist die Telefonnummer?</p>',
    topics: [
      '<p>Die Zahlen von 0 bis 12 muss man lernen: null, eins, zwei … zwölf. Von 13 bis 19 sagt man die Zahl + <strong>-zehn</strong>: <em>dreizehn, vierzehn</em>. Achtung: <em>sechzehn, siebzehn</em>.</p>' +
      '<p>Ab 21 sagt man die Zahl <strong>umgekehrt</strong>: zuerst die Einer, dann die Zehner, mit <strong>und</strong>: 21 = <strong>einundzwanzig</strong>, 35 = <em>fünfunddreißig</em>.</p>' +
      '<p>Die Zehner: zwanzig, dreißig (mit ß!), vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig. 100 = hundert, 1000 = tausend.</p>',

      '<p>Es gibt zwei Arten, die Uhrzeit zu sagen. <strong>Offiziell</strong> (Bahn, Radio): 14.30 Uhr = <em>vierzehn Uhr dreißig</em>.</p>' +
      '<p><strong>Im Alltag</strong> sagt man: <em>Viertel nach zwei</em> (2.15), <em>halb drei</em> (2.30), <em>Viertel vor drei</em> (2.45). Achtung: <strong>halb drei</strong> ist 2.30, nicht 3.30!</p>' +
      '<p>Die Frage ist: <strong>Wie spät ist es?</strong> oder <strong>Wie viel Uhr ist es?</strong> Für einen Termin sagt man <strong>um</strong>: <em>Der Kurs beginnt um 9 Uhr.</em></p>',

      '<p>Die Wochentage sind alle maskulin: <em>der Montag, der Dienstag … der Sonntag</em>. Die Monate auch: <em>der Januar … der Dezember</em>.</p>' +
      '<p>Wichtig sind die Präpositionen: <strong>am</strong> + Tag (<em>am Montag</em>), <strong>im</strong> + Monat oder Jahreszeit (<em>im Mai, im Sommer</em>), <strong>um</strong> + Uhrzeit (<em>um 8 Uhr</em>).</p>' +
      '<p>Die vier Jahreszeiten sind der Frühling, der Sommer, der Herbst und der Winter.</p>',

      '<p>Für das Datum braucht man die <strong>Ordnungszahlen</strong>: der erste, der zweite, der dritte, der vierte … der zwanzigste. Bis 19 kommt <strong>-te</strong> dazu, ab 20 <strong>-ste</strong>.</p>' +
      '<p><strong>Heute ist der 3. Mai.</strong> – man sagt: <em>der dritte Mai</em>. Mit „am“: <strong>Ich habe am 3. Mai Geburtstag.</strong> – <em>am dritten Mai</em>.</p>' +
      '<p>Man schreibt das Datum so: Tag.Monat.Jahr – <em>03.05.2026</em>. Die Frage ist: <strong>Wann hast du Geburtstag?</strong></p>',

      '<p>Telefonnummern sagt man oft in Paaren oder Zahl für Zahl: <em>0176 / 34 52 18</em>. Am Telefon sagt man oft <strong>zwo</strong> für 2, dann gibt es keine Verwechslung mit drei.</p>' +
      '<p>Preise sagt man mit Euro und Cent: 3,50 € = <strong>drei Euro fünfzig</strong>. Euro hat keinen Plural: <em>zehn Euro</em>.</p>' +
      '<p>Bei Adressen steht die Hausnummer <strong>nach</strong> der Straße und die Postleitzahl <strong>vor</strong> der Stadt: <em>Bahnhofstraße 5, 10115 Berlin</em>.</p>'
    ]
  });

  /* ---------- Unit 5 — Familie und Menschen ---------- */
  unit(4, {
    reading: '<p>Ein kurzer Text über eine Familie. Lesen Sie: Wie heißen die Personen? Wie alt sind sie? Was machen sie und wo wohnen sie?</p>',
    listening: '<p>Zwei Kolleginnen sprechen über ihre Familien. Hören Sie: Geschwister, Familienstand und Haustiere.</p>',
    topics: [
      '<p>Die Familienwörter kommen oft in Paaren: <strong>der Vater – die Mutter</strong>, <strong>der Bruder – die Schwester</strong>, <strong>der Sohn – die Tochter</strong>.</p>' +
      '<p>Es gibt auch Wörter für Gruppen: <strong>die Eltern</strong> (Vater und Mutter), <strong>die Geschwister</strong> (Brüder und Schwestern), <strong>die Großeltern</strong>. Im Alltag sagt man <em>Oma</em> und <em>Opa</em>.</p>' +
      '<p>Für „mein“ gilt: maskulin und neutral <strong>mein</strong> (<em>mein Bruder, mein Kind</em>), feminin und Plural <strong>meine</strong> (<em>meine Schwester, meine Eltern</em>). Genauso: dein/deine, sein/seine, ihr/ihre.</p>',

      '<p>Mit <strong>haben</strong> sagt man, wen man hat: <strong>Ich habe einen Bruder.</strong> Das ist Akkusativ. Nur der maskuline Artikel ändert sich: <em>ein Bruder → einen Bruder</em>. Feminin und neutral bleiben gleich: <em>eine Schwester, ein Kind</em>.</p>' +
      '<p>Man hat keine Geschwister? Dann sagt man <strong>kein</strong>: <em>keinen Bruder, keine Schwester, kein Kind, keine Geschwister</em>. Die Endungen sind wie bei <em>ein</em>.</p>' +
      '<p>Ohne Geschwister sagt man: <strong>Ich bin Einzelkind.</strong></p>',

      '<p>Für den Familienstand gibt es diese Wörter: <strong>ledig</strong> (nicht verheiratet), <strong>verheiratet</strong>, <strong>geschieden</strong>, <strong>verwitwet</strong>. Man sagt: <em>Ich bin verheiratet.</em></p>' +
      '<p>Kinder: <strong>Ich habe zwei Kinder.</strong> Achtung, der Plural: <em>ein Kind – zwei Kinder</em>.</p>' +
      '<p>Für den Partner sagt man <em>mein Mann, meine Frau, mein Freund, meine Freundin</em>. Und: Ein Mann hat <strong>seinen</strong> Namen, eine Frau hat <strong>ihren</strong> Namen – <em>sein Name / ihr Name</em>.</p>',

      '<p>Personen beschreibt man mit <strong>sein</strong> + Adjektiv. Das Adjektiv hat dann keine Endung: <em>Er ist groß. Sie ist nett.</em></p>' +
      '<p>Mit <strong>sehr</strong> oder <strong>ein bisschen</strong> macht man das Adjektiv stärker oder schwächer: <em>Sie ist sehr freundlich. Er ist ein bisschen ruhig.</em></p>' +
      '<p>Für Haare und Augen benutzt man <strong>haben</strong>: <em>Sie hat lange Haare. Er hat blaue Augen.</em> Lernen Sie diese Sätze als Ganzes.</p>',

      '<p>Bei Haustieren ist es wie bei der Familie: <strong>Ich habe einen Hund.</strong> (der Hund → einen Hund) <strong>Wir haben eine Katze.</strong> (die Katze → eine Katze)</p>' +
      '<p>Der Name des Tiers: <strong>Mein Hund heißt Bello.</strong> Kein Tier? <strong>Ich habe kein Haustier.</strong></p>' +
      '<p>Das allgemeine Wort ist <strong>das Haustier</strong>. Andere Tiere: der Vogel, der Fisch, das Pferd.</p>'
    ]
  });

  /* ---------- Unit 6 — Essen und Trinken ---------- */
  unit(5, {
    reading: '<p>Eine Speisekarte von einem Café. Lesen Sie: Welche Gerichte und Getränke gibt es? Was kostet das?</p>',
    listening: '<p>Zwei Freunde bestellen im Restaurant. Hören Sie: Was essen und trinken sie? Wie viel bezahlen sie?</p>',
    topics: [
      '<p>Es gibt drei Mahlzeiten: <strong>das Frühstück</strong>, <strong>das Mittagessen</strong> und <strong>das Abendessen</strong>. In vielen Familien ist das warme Essen mittags. Abends isst man oft <strong>Abendbrot</strong>: Brot, Käse, Wurst und Salat.</p>' +
      '<p>Die Verben sind: <strong>frühstücken</strong>, <strong>zu Mittag essen</strong>, <strong>zu Abend essen</strong>. Die Uhrzeit sagt man mit <strong>um</strong>: <em>Ich frühstücke um sieben Uhr.</em></p>' +
      '<p>Achtung: <strong>essen</strong> und <strong>nehmen</strong> sind unregelmäßig: <em>du isst, er isst; du nimmst, er nimmt</em>.</p>',

      '<p>Lernen Sie die Lebensmittel in Gruppen, wie im Supermarkt: <strong>Obst</strong>, <strong>Gemüse</strong>, <strong>Getränke</strong>, <strong>Milchprodukte</strong>, <strong>Fleisch</strong> und <strong>Backwaren</strong>.</p>' +
      '<p>Lernen Sie immer den Artikel mit: <em>die Banane, die Tomate, der Kaffee, der Tee, das Wasser, die Milch</em>. Viele Wörter mit <strong>-e</strong> am Ende sind feminin.</p>' +
      '<p><strong>Obst</strong> und <strong>Gemüse</strong> sind Singular: <em>Ich esse viel Obst.</em></p>',

      '<p>Für ein Nomen benutzt man <strong>mögen</strong>: <strong>Ich mag Käse.</strong> Für eine Tätigkeit benutzt man <strong>gern</strong> nach dem Verb: <strong>Ich esse gern Käse.</strong></p>' +
      '<p><strong>gern</strong> hat drei Stufen: <strong>gern – lieber – am liebsten</strong>. <em>Ich trinke gern Tee, aber lieber Kaffee. Am liebsten trinke ich Kakao.</em></p>' +
      '<p>Nicht verwechseln: <strong>Ich mag Pizza</strong> (allgemein) und <strong>Ich möchte eine Pizza</strong> (jetzt, höflich). Nein sagt man so: <em>Ich mag keinen Fisch. Ich esse nicht gern Fisch.</em></p>',

      null,

      '<p>Viele Lebensmittel kauft man in einer Menge: <strong>eine Flasche Wasser</strong>, <strong>ein Stück Kuchen</strong>, <strong>ein Kilo Äpfel</strong>. Achtung: Es gibt kein Wort für „of“. Das Lebensmittel kommt direkt danach.</p>' +
      '<p>Gramm, Kilo und Liter bleiben im Singular: <em>zwei Kilo, 500 Gramm</em>. Feminine Behälter haben einen Plural: <em>zwei Flaschen, drei Tassen</em>.</p>' +
      '<p>Die Frage ist <strong>Wie viel?</strong> für Dinge ohne Plural (<em>Wie viel Milch?</em>) und <strong>Wie viele?</strong> für Dinge mit Plural (<em>Wie viele Eier?</em>).</p>'
    ]
  });

  /* ---------- Unit 7 — Einkaufen und Preise ---------- */
  unit(6, {
    reading: '<p>Ein Prospekt vom Supermarkt mit den Angeboten der Woche. Lesen Sie: Welche Produkte, welche Preise, welche Tage?</p>',
    listening: '<p>Eine Kundin kauft in der Drogerie ein und bezahlt. Hören Sie: Was kauft sie? Was kostet es? Wie bezahlt sie?</p>',
    topics: [
      '<p>In Deutschland gibt es viele kleine Geschäfte. Brot kauft man in der <strong>Bäckerei</strong>, Medikamente in der <strong>Apotheke</strong>, Shampoo und Zahnpasta in der <strong>Drogerie</strong> – nicht in der Apotheke! Lebensmittel kauft man im <strong>Supermarkt</strong>.</p>' +
      '<p>Wohin? <strong>in + Akkusativ</strong>: <em>Ich gehe in den Supermarkt / in die Bäckerei.</em> Wo? <strong>in + Dativ</strong>: <em>Ich kaufe im Supermarkt / in der Bäckerei ein.</em></p>' +
      '<p>Am Sonntag sind fast alle Geschäfte <strong>geschlossen</strong>.</p>',

      '<p>Die Frage nach dem Preis ist: <strong>Was kostet das?</strong> oder <strong>Wie viel kostet das?</strong> Bei mehreren Dingen: <em>Was kosten die Äpfel?</em></p>' +
      '<p>Man sagt Preise so: 3,50 € = <em>drei Euro fünfzig</em>. 0,99 € = <em>neunundneunzig Cent</em>.</p>' +
      '<p>Mit <strong>welcher / welche / welches</strong> wählt man aus. Die Endungen sind wie bei der/die/das: <em>Welcher Pullover? Welche Tasche? Welches Handy?</em> Im Akkusativ: <em>Welchen Pullover nimmst du?</em> Die Reaktion: <em>Das ist (zu) teuer. Das ist billig / günstig.</em></p>',

      '<p>Auf dem Einkaufszettel stehen Dinge im <strong>Akkusativ</strong>, denn man <em>kauft</em> oder <em>braucht</em> etwas: <strong>Ich brauche einen Käse, eine Gurke und ein Brot.</strong></p>' +
      '<p>Nur maskulin ändert sich: <strong>der → den, ein → einen, kein → keinen</strong>. Feminin, neutral und Plural bleiben gleich.</p>' +
      '<p>Diese Verben haben einen Akkusativ: <em>kaufen, brauchen, haben, nehmen, suchen, finden, möchten, es gibt</em>.</p>',

      '<p>An der Kasse hört man oft drei Fragen: <strong>Haben Sie eine Kundenkarte?</strong> <strong>Bar oder mit Karte?</strong> <strong>Brauchen Sie den Kassenbon?</strong></p>' +
      '<p>Bargeld ist in Deutschland noch wichtig. Manchmal steht da: <em>Nur Barzahlung</em>.</p>' +
      '<p>Die Verkäufer benutzen den <strong>Imperativ mit Sie</strong>: Das Verb steht am Anfang, dann kommt <em>Sie</em>: <strong>Zahlen Sie bitte hier. Geben Sie bitte Ihre PIN ein.</strong></p>',

      '<p>Gibt es ein Problem? Sagen Sie es kurz: <strong>Das ist kaputt. Das funktioniert nicht. Die Hose passt nicht.</strong></p>' +
      '<p>Dann sagen Sie, was Sie möchten: <strong>Kann ich das umtauschen?</strong> <strong>Ich möchte das zurückgeben.</strong> Bringen Sie den Kassenbon mit!</p>' +
      '<p><strong>umtauschen</strong> und <strong>zurückgeben</strong> sind trennbar: <em>Ich tausche die Hose um.</em> Mit einem Modalverb bleibt das Verb zusammen am Ende: <em>Ich möchte die Hose umtauschen.</em></p>'
    ]
  });

  /* ---------- Unit 8 — Wohnen ---------- */
  unit(7, {
    reading: '<p>Drei kurze Wohnungsanzeigen. Lesen Sie: Wie groß ist die Wohnung? Was kostet sie? In welchem Stock ist sie? Was gibt es?</p>',
    listening: '<p>Sıla zeigt einem Freund ihre neue Wohnung. Hören Sie: Welche Zimmer gibt es? Wo stehen die Möbel?</p>',
    topics: [
      '<p>Viele Zimmer enden auf <strong>-zimmer</strong>: <em>das Wohnzimmer, das Schlafzimmer, das Kinderzimmer, das Arbeitszimmer</em>. Das letzte Wort bestimmt den Artikel – darum ist es immer <strong>das</strong>.</p>' +
      '<p>Andere Räume: <em>die Küche, das Bad, der Flur, der Balkon, der Keller, der Garten</em>.</p>' +
      '<p>So beschreibt man die Wohnung: <strong>Meine Wohnung hat drei Zimmer.</strong> oder <strong>Es gibt einen Balkon.</strong> Nach <em>es gibt</em> kommt der Akkusativ: <em>einen Balkon, eine Küche, ein Bad, keinen Garten</em>.</p>',

      '<p><strong>Die Möbel</strong> ist immer Plural. Lernen Sie die Möbel mit Artikel: <em>der Tisch, der Stuhl, der Schrank, das Sofa, das Bett, die Lampe</em>.</p>' +
      '<p>So beschreibt man ein Zimmer: <em>Im Wohnzimmer gibt es ein Sofa, einen Tisch und zwei Sessel.</em> Die Meinung: <em>Das Sofa ist bequem. Der Schrank ist alt.</em></p>' +
      '<p>Wichtig: Das Pronomen hat das gleiche Genus wie das Nomen. <strong>der Tisch → er</strong>, <strong>die Lampe → sie</strong>, <strong>das Bett → es</strong>. Ein Tisch ist im Deutschen „er“!</p>',

      '<p>Wo ist etwas? Dann benutzt man diese Präpositionen mit <strong>Dativ</strong>: <em>in, an, auf, unter, über, neben, zwischen, hinter, vor</em>.</p>' +
      '<p>Im Dativ ändern sich die Artikel: <strong>der/das → dem</strong>, <strong>die → der</strong>, Plural <strong>die → den</strong>. <em>Das Buch liegt auf dem Tisch. Die Lampe steht neben der Couch.</em></p>' +
      '<p>Kurzformen: <strong>in dem = im</strong>, <strong>an dem = am</strong>. Und drei Verben: <strong>stehen</strong> (aufrecht), <strong>liegen</strong> (flach), <strong>hängen</strong> (an der Wand).</p>',

      '<p>In deutschen Städten mieten die meisten Menschen eine Wohnung. Das Geld pro Monat ist die <strong>Miete</strong>. <strong>Kaltmiete</strong> ist nur die Miete. <strong>Warmmiete</strong> ist Miete + <strong>Nebenkosten</strong> (Heizung, Wasser, Müll). Strom zahlt man oft extra.</p>' +
      '<p>Vor dem Einzug zahlt man eine <strong>Kaution</strong>. Der Vermieter vermietet die Wohnung, der Mieter wohnt dort.</p>' +
      '<p>Eine <strong>WG</strong> ist eine Wohngemeinschaft: Mehrere Personen wohnen zusammen. <em>Ich wohne in einer WG / in einer Wohnung / in einem Haus.</em></p>',

      '<p>In Wohnungsanzeigen gibt es viele Abkürzungen. Die wichtigsten sind:</p>' +
      '<ul class="goals"><li><strong>2 ZKB</strong> = 2 Zimmer, Küche, Bad</li><li><strong>qm / m²</strong> = Quadratmeter</li><li><strong>KM / WM / NK</strong> = Kaltmiete / Warmmiete / Nebenkosten</li><li><strong>EG / OG / DG</strong> = Erdgeschoss / Obergeschoss / Dachgeschoss</li><li><strong>EBK</strong> = Einbauküche</li><li><strong>ab sofort</strong> = jetzt frei</li></ul>' +
      '<p>Tipp: In Deutschland hat eine Wohnung oft keine Küche. <em>Mit EBK</em> ist ein Vorteil.</p>'
    ]
  });

  /* ---------- Unit 9 — Tagesablauf ---------- */
  unit(8, {
    reading: '<p>Ein Blog über den Tag einer Krankenschwester. Lesen Sie: Wann macht sie was? Wie oft?</p>',
    listening: '<p>Zwei Studenten vergleichen ihren Tag. Hören Sie: Uhrzeiten und wie oft sie etwas machen.</p>',
    topics: [
      '<p>Beschreiben Sie Ihren Tag mit Uhrzeiten: <em>Um sieben Uhr stehe ich auf.</em> Steht die Zeit am Anfang, bleibt das Verb auf <strong>Position 2</strong>. Das Subjekt kommt dann nach dem Verb: <em>Um acht <strong>fahre</strong> ich zur Arbeit.</em></p>' +
      '<p>Diese Wörter helfen bei der Reihenfolge: <strong>zuerst, dann, danach, später, zum Schluss</strong>. Auch sie stehen auf Position 1: <em>Dann <strong>dusche</strong> ich.</em></p>' +
      '<p>Mit <strong>-s</strong> bedeuten Tageszeiten „jeden Tag“: <em>morgens, mittags, abends, nachts</em>.</p>',

      '<p>Viele Verben haben eine Vorsilbe, die man trennt: <em>aufstehen, einkaufen, anrufen, fernsehen, mitkommen</em>. Im Satz steht das Verb auf Position 2 und die <strong>Vorsilbe am Ende</strong>: <em>Ich <strong>stehe</strong> um sieben <strong>auf</strong>.</em> Das ist die <strong>Satzklammer</strong>.</p>' +
      '<p>Mit einem Modalverb bleibt das Verb zusammen am Ende: <em>Ich muss um sieben <strong>aufstehen</strong>.</em></p>' +
      '<p>Woran erkennt man trennbare Verben? Man betont die Vorsilbe: <em>AUFstehen, EINkaufen</em>. <strong>be-, ver-, er-, ent-</strong> trennt man nie: <em>Ich besuche dich. Ich verstehe.</em></p>',

      '<p>Diese Wörter sagen, wie oft: <strong>immer – oft – manchmal – selten – nie</strong>. Sie stehen meistens nach dem Verb: <em>Ich trinke oft Kaffee.</em> Oder auf Position 1: <em>Manchmal koche ich.</em></p>' +
      '<p>Regelmäßig: <strong>jeden Tag, jede Woche, jedes Jahr</strong> (Akkusativ). Oder ein Tag mit <strong>-s</strong>: <em>montags, sonntags</em>.</p>' +
      '<p>Zählen: <em>einmal, zweimal, dreimal pro Woche</em>. Die Frage ist: <strong>Wie oft …?</strong></p>',

      '<p>Manche Verben brauchen ein <strong>Reflexivpronomen</strong>, denn man macht die Aktion mit sich selbst: <strong>Ich wasche mich.</strong> <strong>Ich ziehe mich an.</strong> Im Englischen sagt man oft kein Pronomen, aber im Deutschen braucht man es.</p>' +
      '<p>Die Pronomen sind: <strong>mich, dich, sich, uns, euch, sich</strong>. Für er, sie, es und Sie heißt es immer <strong>sich</strong>.</p>' +
      '<p>Wichtige Verben: <em>sich waschen, sich anziehen, sich kämmen, sich beeilen, sich fühlen, sich freuen</em>. <em>Wie fühlst du dich? – Ich fühle mich gut.</em></p>',

      '<p>Für die Freizeit benutzt man <strong>am</strong>: <em>am Abend, am Wochenende, am Sonntag</em>. Viele Aktivitäten gehen mit <strong>gehen + Infinitiv</strong>: <em>Ich gehe schwimmen / einkaufen / spazieren.</em></p>' +
      '<p>Für Pläne in der Zukunft benutzt man einfach das <strong>Präsens</strong> + ein Zeitwort: <em>Am Samstag besuche ich meine Eltern.</em></p>' +
      '<p>Gegensatz: <strong>unter der Woche</strong> (Montag bis Freitag) und <strong>am Wochenende</strong>. Nach der Arbeit hat man <strong>Feierabend</strong>.</p>'
    ]
  });

  /* ---------- Unit 10 — Freizeit und Hobbys ---------- */
  unit(9, {
    reading: '<p>Aushänge am Schwarzen Brett im Freizeitzentrum. Lesen Sie: Welche Aktivität? Welcher Tag? Welche Uhrzeit? Was kostet es?</p>',
    listening: '<p>Zwei Freunde suchen einen Termin für eine Aktivität. Hören Sie: Was, wann und wo?</p>',
    topics: [
      '<p>Manche Sportarten sind ein Verb: <em>schwimmen, wandern, joggen, tanzen, klettern</em>. Ballspiele und Instrumente gehen mit <strong>spielen</strong>: <em>Fußball spielen, Gitarre spielen</em>. Andere sind feste Ausdrücke: <em>Rad fahren, Yoga machen, ins Fitnessstudio gehen</em>.</p>' +
      '<p>Die Frage ist: <strong>Was machst du in deiner Freizeit?</strong> Antworten Sie mit <strong>gern</strong>: <em>Ich schwimme gern.</em></p>' +
      '<p>Achtung, unregelmäßig: <em>fahren → du fährst, er fährt; laufen → du läufst, er läuft</em>.</p>',

      '<p>Für Medien braucht man diese Verben: <em>Musik hören, einen Film sehen, ein Buch lesen, eine Serie streamen, ins Kino gehen</em>. <strong>lesen</strong> und <strong>sehen</strong> ändern den Vokal: <em>du liest, er liest; du siehst, er sieht</em>.</p>' +
      '<p>Die Meinung sagt man mit <strong>finden</strong> + Akkusativ + Adjektiv: <strong>Ich finde den Film spannend.</strong> <em>den Film, die Serie, das Buch</em>.</p>' +
      '<p>Mit <strong>Lieblings-</strong> sagt man „favourite“: <em>mein Lieblingsfilm, meine Lieblingsband</em>.</p>',

      '<p>Modalverben geben dem Satz eine Bedeutung: <strong>können</strong> (Fähigkeit), <strong>wollen</strong> (Wunsch), <strong>müssen</strong> (Pflicht). Das Modalverb steht auf Position 2, das zweite Verb steht als Infinitiv am <strong>Ende</strong>: <em>Ich <strong>kann</strong> gut <strong>schwimmen</strong>.</em></p>' +
      '<p>Bei <em>ich</em> und <em>er/sie/es</em> gibt es keine Endung: <em>ich kann, er kann; ich will, er will; ich muss, er muss</em>.</p>' +
      '<p>Achtung: <strong>Ich muss nicht arbeiten</strong> bedeutet „Ich brauche nicht zu arbeiten“. Und <strong>will</strong> bedeutet „möchte“, nicht „werde“!</p>',

      '<p>Für eine Verabredung fragt man zuerst: <strong>Hast du am Samstag Zeit?</strong> Dann macht man einen Vorschlag: <strong>Wollen wir ins Kino gehen?</strong> <strong>Hast du Lust auf einen Kaffee?</strong> <strong>Lass uns tanzen gehen!</strong></p>' +
      '<p>Dann fragt man nach Zeit und Ort: <em>Wann treffen wir uns? Wo treffen wir uns?</em></p>' +
      '<p>Im Satz steht die Zeit meistens vor dem Ort: <em>Wir treffen uns <strong>um sieben</strong> <strong>vor dem Kino</strong>.</em></p>',

      '<p>Ja sagen: <strong>Gern! Gute Idee! Das passt mir gut.</strong> Nein sagt man höflich mit <strong>leider</strong> und einem Grund: <em>Leider kann ich nicht. Ich muss arbeiten.</em></p>' +
      '<p>Den Grund kann man mit <strong>denn</strong> oder <strong>weil</strong> verbinden. Nach <em>denn</em> bleibt die Wortstellung normal: <em>…, denn ich <strong>muss</strong> arbeiten.</em> Nach <em>weil</em> steht das Verb am <strong>Ende</strong>: <em>…, weil ich arbeiten <strong>muss</strong>.</em></p>' +
      '<p>Machen Sie einen neuen Vorschlag, das ist freundlich: <em>Aber am Sonntag habe ich Zeit. Vielleicht ein anderes Mal?</em></p>'
    ]
  });

  /* ---------- Unit 11 — Wege und Orte ---------- */
  unit(10, {
    reading: '<p>Eine Nachricht mit einer Wegbeschreibung. Lesen Sie und folgen Sie dem Weg: Wo steigt man aus? Wo biegt man ab?</p>',
    listening: '<p>Ein Reisender kauft eine Fahrkarte. Hören Sie: Ziel, Uhrzeit, Gleis und Preis.</p>',
    topics: [
      '<p>Lernen Sie die Orte in der Stadt mit Artikel. Der Artikel ist wichtig für den Weg: <strong>der Bahnhof → zum Bahnhof</strong>, <strong>das Museum → zum Museum</strong>, <strong>die Post → zur Post</strong>.</p>' +
      '<p><strong>zum</strong> = zu dem (maskulin, neutral), <strong>zur</strong> = zu der (feminin). Nach <em>zu</em> kommt immer Dativ.</p>' +
      '<p>Was gibt es in der Stadt? <em>In meiner Stadt gibt es einen Bahnhof, ein Rathaus und viele Cafés.</em></p>',

      '<p>Beginnen Sie höflich: <strong>Entschuldigung</strong> oder <strong>Entschuldigen Sie</strong>. Dann gibt es drei Fragen: <strong>Wo ist der Bahnhof?</strong> <strong>Wie komme ich zum Bahnhof?</strong> <strong>Gibt es hier eine Apotheke?</strong></p>' +
      '<p>Antworten: <em>Das ist nicht weit, nur fünf Minuten zu Fuß.</em> oder <em>Das ist weit. Nehmen Sie den Bus.</em></p>' +
      '<p>Sie verstehen nicht? <em>Können Sie das bitte wiederholen?</em> Die Person weiß es nicht: <em>Tut mir leid, ich bin nicht von hier.</em></p>',

      '<p>Den Weg beschreibt man mit dem <strong>Imperativ</strong>. Zu fremden Personen sagt man die Sie-Form: <strong>Gehen Sie geradeaus. Biegen Sie links ab.</strong> Zu Freunden die du-Form: <strong>Geh geradeaus! Nimm den Bus!</strong></p>' +
      '<p>Die du-Form: Man nimmt die du-Form im Präsens ohne <em>-st</em> und ohne <em>du</em>: <em>du nimmst → nimm</em>. Aber: <em>du fährst → fahr</em> (ohne Umlaut).</p>' +
      '<p>Wichtige Wörter: <em>geradeaus, links, rechts, an der Ecke, an der Ampel, an der Kreuzung, gegenüber, bis zum / bis zur</em>.</p>',

      '<p>Verkehrsmittel gehen mit <strong>mit + Dativ</strong>: <em>mit dem Bus, mit der U-Bahn, mit dem Zug</em>. Aber: <strong>zu Fuß</strong>.</p>' +
      '<p>Wichtige trennbare Verben: <strong>einsteigen, aussteigen, umsteigen</strong>. <em>Sie steigen am Hauptbahnhof um.</em></p>' +
      '<p>Wohin? <strong>nach</strong> für Städte und Länder (<em>nach Berlin</em>) und <em>nach Hause</em>; <strong>zu</strong> für Orte und Personen (<em>zum Arzt, zu meiner Freundin</em>); <strong>bei</strong> für „im Haus von“ (<em>bei meiner Oma</em>).</p>',

      '<p>Am Schalter oder am Automaten wählt man die Fahrkarte: <em>Einzelfahrkarte, Tageskarte, Monatskarte</em>. Für längere Reisen: <strong>einfach</strong> oder <strong>hin und zurück</strong>.</p>' +
      '<p>So fragt man: <strong>Eine Fahrkarte nach Köln, bitte. Hin und zurück.</strong> Dann hört man vielleicht: <em>Erste oder zweite Klasse?</em></p>' +
      '<p>Fragen zur Verbindung: <em>Wann fährt der nächste Zug? Von welchem Gleis? Muss ich umsteigen?</em> Bei Bus und Bahn muss man die Fahrkarte oft <strong>entwerten</strong>.</p>'
    ]
  });

  /* ---------- Unit 12 — Körper und Gesundheit ---------- */
  unit(11, {
    reading: '<p>Ein Beipackzettel von Tabletten. Lesen Sie: Wofür sind die Tabletten? Wie viele, wann und wie nimmt man sie?</p>',
    listening: '<p>Ein Patient ruft in der Arztpraxis an. Hören Sie: Was tut weh? Wann ist der Termin?</p>',
    topics: [
      '<p>Bei den Körperteilen sind die Artikel schwer. Maskulin: <em>der Kopf, der Arm, der Bauch, der Rücken, der Fuß, der Hals</em>. Feminin: <em>die Hand, die Nase, die Schulter</em>. Neutral: <em>das Auge, das Ohr, das Bein, das Knie</em>.</p>' +
      '<p>Viele Körperteile hat man zweimal. Lernen Sie den Plural: <em>die Augen, die Ohren, die Hände, die Füße, die Beine, die Zähne</em>.</p>' +
      '<p>Im Deutschen sagt man oft den Artikel statt „mein“: <em>Ich wasche mir die Hände.</em></p>',

      '<p>Es gibt zwei Muster. Erstens: <strong>Ich habe … -schmerzen</strong>: <em>Kopfschmerzen, Bauchschmerzen, Rückenschmerzen</em>. Das Wort ist immer Plural.</p>' +
      '<p>Zweitens: <strong>… tut weh</strong>. Der Körperteil ist das Subjekt: <em>Mein Kopf tut weh. Meine Füße tun weh.</em> Oft steht die Person im <strong>Dativ</strong>: <strong>Mir tut der Kopf weh.</strong> Die Dativpronomen sind: <em>mir, dir, ihm, ihr, uns, euch, ihnen, Ihnen</em>.</p>' +
      '<p>Andere Krankheiten: <em>Ich habe Fieber / Husten / Schnupfen / eine Erkältung / die Grippe. Mir ist schlecht.</em> Zu kranken Personen sagt man: <strong>Gute Besserung!</strong></p>',

      '<p>Man geht zuerst zum <strong>Hausarzt</strong>. Man ruft an: <strong>Ich möchte einen Termin machen.</strong> In der Praxis zeigt man die <strong>Versichertenkarte</strong>.</p>' +
      '<p>Der Arzt fragt: <strong>Was fehlt Ihnen?</strong> und <strong>Seit wann?</strong> Man antwortet mit <strong>seit + Dativ</strong>: <em>seit gestern, seit zwei Tagen, seit einer Woche</em>.</p>' +
      '<p>Achtung: Mit <em>seit</em> benutzt man das Präsens: <em>Ich habe seit Montag Husten.</em> Für den Arbeitgeber bekommt man eine <strong>Krankmeldung</strong>.</p>',

      '<p>Der Arzt gibt Anweisungen mit dem <strong>Imperativ mit Sie</strong>: <em>Nehmen Sie die Tabletten dreimal täglich. Trinken Sie viel Tee. Bleiben Sie im Bett.</em></p>' +
      '<p>Was hat der Arzt gesagt? Dafür benutzt man <strong>sollen</strong>: <strong>Der Arzt sagt, ich soll im Bett bleiben.</strong> <em>sollen</em> bedeutet: Eine andere Person will das.</p>' +
      '<p>Einen eigenen Rat gibt man mit <strong>solltest</strong>: <em>Du solltest zum Arzt gehen.</em> Wie bei allen Modalverben steht das zweite Verb am Ende: <em>ich soll, du sollst, er soll</em>.</p>',

      '<p>Manche Medikamente bekommt man nur mit <strong>Rezept</strong> vom Arzt. Einfache Medikamente kauft man ohne Rezept in der <strong>Apotheke</strong>: <em>Haben Sie etwas gegen Kopfschmerzen?</em></p>' +
      '<p>Im <strong>Notfall</strong> ruft man <strong>112</strong> (Krankenwagen, Feuerwehr) oder <strong>110</strong> (Polizei). Nachts und am Wochenende hilft der Bereitschaftsdienst unter <strong>116 117</strong>.</p>' +
      '<p>Kurze Sätze für den Notfall: <em>Hilfe! Rufen Sie einen Krankenwagen! Es gab einen Unfall. Er ist verletzt.</em></p>'
    ]
  });

  /* ---------- Unit 13 — Kleidung und Farben ---------- */
  unit(12, {
    reading: '<p>Eine Produktbeschreibung aus einem Online-Shop und eine Bewertung. Lesen Sie: Farben, Größen, Preise und Meinungen.</p>',
    listening: '<p>Ein Kunde sucht Kleidung für eine Hochzeit. Hören Sie: Was, welche Farbe, welche Größe, welcher Preis?</p>',
    topics: [
      '<p>Lernen Sie die Kleidung mit Artikel. Maskulin: <em>der Pullover, der Rock, der Mantel, der Schuh</em>. Feminin: <em>die Hose, die Jacke, die Bluse, die Mütze</em>. Neutral: <em>das Hemd, das Kleid, das T-Shirt</em>.</p>' +
      '<p>Was trägt man? Man benutzt <strong>tragen</strong> (<em>du trägst, er trägt</em>) oder <strong>anhaben</strong>: <em>Sie trägt ein Kleid. Er hat eine Jacke an.</em> Die Kleidung steht im Akkusativ: <em>einen Mantel</em>.</p>' +
      '<p>Für das Anziehen benutzt man die reflexiven Verben: <em>sich anziehen, sich ausziehen, sich umziehen</em>.</p>',

      '<p>Die Farben sind: <em>rot, blau, grün, gelb, schwarz, weiß, grau, braun, orange, lila, rosa</em>. Mit <strong>hell-</strong> und <strong>dunkel-</strong> macht man neue Farben: <em>hellblau, dunkelgrün</em>.</p>' +
      '<p>Nach <strong>sein</strong> hat die Farbe keine Endung: <em>Der Pullover ist rot.</em> Vor einem Nomen hat sie eine Endung. Lernen Sie diese Ausdrücke: <em>ein rotes Kleid, eine blaue Hose, ein schwarzer Mantel</em>.</p>' +
      '<p>Muster: <em>gestreift, kariert, gepunktet, einfarbig, bunt</em>. Die Frage ist: <strong>Welche Farbe hat …?</strong></p>',

      '<p>Die Frage ist: <strong>Welche Größe haben Sie?</strong> – <em>Ich habe Größe 38. Ich habe Schuhgröße 41.</em></p>' +
      '<p>Passt die Kleidung? Man sagt <strong>passen</strong>: <em>Die Hose passt gut.</em> Probleme sagt man mit <strong>zu</strong>: <em>zu klein, zu groß, zu eng, zu weit, zu lang, zu kurz</em>.</p>' +
      '<p>Für einen Vergleich nimmt man <strong>-er</strong>: <em>klein → kleiner, billig → billiger</em>. Manche bekommen einen Umlaut: <em>groß → größer, lang → länger</em>. Wichtig: <strong>gut → besser</strong>. Nach dem Vergleich kommt <strong>als</strong>: <em>Die Jacke ist billiger als der Mantel.</em></p>',

      '<p>Im Geschäft sagt man: <strong>Ich suche einen Pullover.</strong> <strong>Haben Sie das in Blau?</strong> <strong>Kann ich das anprobieren?</strong> <strong>Wo sind die Umkleidekabinen?</strong></p>' +
      '<p>Mit <strong>dieser / diese / dieses</strong> zeigt man auf eine Sache. Die Endungen sind wie bei der/die/das: <em>Dieser Pullover ist schön. Ich nehme diesen Pullover.</em> (Akkusativ maskulin: <em>-en</em>)</p>' +
      '<p>Sie möchten nur schauen? <em>Danke, ich schaue nur.</em> Und am Ende: <em>Ich nehme ihn / sie / es.</em></p>',

      '<p>Es gibt drei Muster. <strong>Das sieht gut aus.</strong> (<em>aussehen</em> ist trennbar.) <strong>Das steht dir gut.</strong> (Die Farbe oder die Form passt zu dir.) <strong>Das gefällt mir.</strong> (Ich finde das schön.)</p>' +
      '<p>Bei <strong>stehen</strong> und <strong>gefallen</strong> steht die Person im <strong>Dativ</strong>: <em>Die Farbe steht dir. Der Rock gefällt mir nicht.</em> Die Sache ist das Subjekt. Bei Plural ist das Verb Plural: <em>Die Schuhe gefallen mir.</em></p>' +
      '<p>Nützliche Adjektive: <em>schick, elegant, bequem, modisch, altmodisch, sportlich</em>.</p>'
    ]
  });

  /* ---------- Unit 14 — Wetter und Jahreszeiten ---------- */
  unit(13, {
    reading: '<p>Ein Wetterbericht für das Wochenende. Lesen Sie: Wie ist das Wetter in den Regionen? Wie warm wird es?</p>',
    listening: '<p>Zwei Freunde planen einen Ausflug und sehen auf das Wetter. Hören Sie: Wie wird das Wetter? Was machen sie?</p>',
    topics: [
      '<p>Sätze über das Wetter beginnen fast immer mit <strong>es</strong>. Es gibt drei Muster: <strong>es + Verb</strong> (<em>Es regnet. Es schneit.</em>), <strong>es ist + Adjektiv</strong> (<em>Es ist sonnig / kalt / windig.</em>) und <strong>es gibt + Nomen</strong> (<em>Es gibt ein Gewitter.</em>).</p>' +
      '<p>Viele Adjektive kommen von Nomen mit <strong>-ig</strong>: <em>die Sonne → sonnig, der Wind → windig, der Nebel → neblig</em>.</p>' +
      '<p>Die Frage ist: <strong>Wie ist das Wetter?</strong> Für die Temperatur: <strong>Es sind 18 Grad.</strong> Achtung: mit einer Zahl sagt man <em>sind</em>.</p>',

      '<p>Die vier Jahreszeiten sind maskulin: <em>der Frühling, der Sommer, der Herbst, der Winter</em>.</p>' +
      '<p>Jahreszeiten und Monate gehen mit <strong>im</strong>: <em>im Sommer, im Januar</em>. Tage gehen mit <strong>am</strong>: <em>am Montag</em>. Uhrzeiten gehen mit <strong>um</strong>: <em>um 8 Uhr</em>.</p>' +
      '<p>So beschreibt man eine Jahreszeit: <em>Im Herbst ist es oft neblig und die Blätter sind bunt. Im Winter fahren viele Leute Ski.</em></p>',

      '<p>Ein Wetterbericht benutzt kurze Sätze: <em>Am Vormittag sonnig, am Nachmittag Regenschauer. Höchstwerte 22 Grad.</em></p>' +
      '<p>Für die Zukunft benutzt man meistens das <strong>Präsens</strong> + ein Zeitwort: <em>Morgen regnet es.</em> Auch <strong>werden</strong> ist oft: <strong>Es wird kälter.</strong> <em>Morgen wird es sonnig.</em></p>' +
      '<p><strong>werden</strong> ist unregelmäßig: <em>ich werde, du wirst, er wird</em>. Temperaturen: <em>plus / minus 5 Grad, unter null</em>.</p>',

      '<p>Wetter und Pläne verbindet man mit <strong>wenn</strong>. <em>wenn</em> beginnt einen <strong>Nebensatz</strong>. Im Nebensatz steht das Verb am <strong>Ende</strong>: <em>…, wenn es <strong>regnet</strong>.</em></p>' +
      '<p>Steht der wenn-Satz am Anfang, dann ist er Position 1. Das Verb vom Hauptsatz kommt direkt danach: <strong>Wenn es regnet, bleiben wir zu Hause.</strong> Zwei Verben stehen am Komma zusammen.</p>' +
      '<p><em>weil</em> und <em>dass</em> funktionieren genauso. Sie lernen sie auf A2.</p>',

      '<p>Deutschland, Österreich und die Schweiz haben vier Jahreszeiten, aber es gibt Unterschiede. Im <strong>Norden</strong>, an der Nordsee und an der Ostsee, ist es windig und mild, und es regnet viel. Im <strong>Süden</strong> und in den <strong>Alpen</strong> sind die Winter kälter und es gibt mehr Schnee.</p>' +
      '<p>Für den Vergleich benutzt man <strong>-er + als</strong>: <em>Im Süden ist es im Sommer wärmer als im Norden.</em></p>' +
      '<p>Achtung: <strong>der See</strong> ist ein See (Wasser im Land), <strong>die See</strong> ist das Meer. Wo? <em>am Meer, an der Küste, in den Bergen</em>.</p>'
    ]
  });

  /* ---------- Unit 15 — Arbeit und Beruf ---------- */
  unit(14, {
    reading: '<p>Eine Stellenanzeige. Lesen Sie: Welche Stelle? Welche Arbeitszeiten? Was muss man können? Wie bewirbt man sich?</p>',
    listening: '<p>Zwei neue Kollegen treffen sich in der Kantine. Hören Sie: Beruf, seit wann und Arbeitszeiten.</p>',
    topics: [
      '<p>Fast jeder Beruf hat eine männliche und eine weibliche Form. Die weibliche Form hat meistens <strong>-in</strong>: <em>der Lehrer → die Lehrerin</em>. Manchmal kommt ein Umlaut dazu: <em>der Arzt → die Ärztin, der Koch → die Köchin</em>.</p>' +
      '<p>Wichtig: Beim Beruf gibt es <strong>keinen Artikel</strong>: <strong>Ich bin Lehrerin.</strong> Auch nach <strong>als</strong>: <em>Er arbeitet als Koch.</em></p>' +
      '<p>Arbeitsorte: <em>im Büro, in der Schule, im Krankenhaus, in einer Firma</em>. Bei einer Firma: <em>bei Siemens, bei der Post</em>.</p>',

      '<p>Die höfliche Frage ist: <strong>Was machen Sie beruflich?</strong> Die Arbeitszeit sagt man mit <strong>von … bis</strong>: <em>Ich arbeite von 9 bis 17 Uhr, von Montag bis Freitag.</em></p>' +
      '<p>Wie lange schon? Mit <strong>seit + Dativ</strong>: <em>Ich arbeite seit drei Jahren bei der Firma.</em> Das Verb steht im Präsens.</p>' +
      '<p>Aufgaben: <em>Ich schreibe E-Mails, telefoniere mit Kunden und plane Projekte.</em> Andere Ausdrücke: <em>Vollzeit, Teilzeit, Schichtdienst, Homeoffice</em>. Im Satz gilt: erst die Zeit, dann wie, dann der Ort: <em>Ich fahre jeden Tag mit dem Bus ins Büro.</em></p>',

      '<p>Ein deutscher <strong>Lebenslauf</strong> ist meistens eine Tabelle. Das Neueste steht oben. Typische Teile sind: <em>Persönliche Daten, Berufserfahrung, Ausbildung, Sprachkenntnisse, Kenntnisse, Hobbys</em>.</p>' +
      '<p>Das Datum schreibt man mit Zahlen: <em>09/2021 – heute</em> oder <em>seit 09/2021</em>. Sprachen beschreibt man so: <em>Deutsch: A1, Englisch: fließend, Türkisch: Muttersprache</em>.</p>' +
      '<p>Mit dem Lebenslauf und einem Brief schreibt man eine <strong>Bewerbung</strong>.</p>',

      '<p>Am Telefon sagt man in der Firma den Firmennamen und den Nachnamen: <em>Firma Schulz, Meier, guten Tag.</em> Wenn Sie anrufen: <em>Guten Tag, hier ist Yılmaz von der Firma SoftTec.</em></p>' +
      '<p>So fragt man nach einer Person: <strong>Kann ich bitte mit Frau Berger sprechen?</strong> Antworten: <em>Einen Moment, ich verbinde. Sie ist leider nicht da. Kann ich etwas ausrichten?</em></p>' +
      '<p>Eine Nachricht: <em>Kann sie mich bitte zurückrufen?</em> Am Ende sagt man am Telefon <strong>Auf Wiederhören!</strong> – nicht „Auf Wiedersehen“.</p>',

      '<p>Small Talk bei der Arbeit ist meistens kurz und freundlich. Gute Themen sind das Wochenende, der Urlaub, das Wetter, Essen und Sport. Über Geld, Politik und Religion spricht man mit Kollegen oft nicht.</p>' +
      '<p>Typische Sätze: <em>Wie war dein Wochenende? Na, alles gut? Wohin fährst du im Urlaub?</em> Am Freitag: <strong>Schönes Wochenende!</strong> – Antwort: <strong>Gleichfalls!</strong></p>' +
      '<p><strong>du</strong> oder <strong>Sie</strong>? Das hängt von der Firma ab. Im Zweifel sagt man zuerst <em>Sie</em>. Dann fragt jemand: <em>Wollen wir uns duzen?</em></p>'
    ]
  });

  /* ---------- Unit 16 — Termine und kurze Nachrichten ---------- */
  unit(15, {
    reading: '<p>Zwei Nachrichten: eine Terminbestätigung von einer Arztpraxis und eine Nachricht von einer Freundin. Lesen Sie: Datum, Uhrzeit und was die Personen möchten.</p>',
    listening: '<p>Ein Anrufer muss einen Termin beim Bürgeramt verschieben. Hören Sie: der alte und der neue Termin.</p>',
    topics: [
      '<p>Für offizielle Termine benutzt man das höfliche <strong>möchte</strong>: <strong>Ich möchte einen Termin vereinbaren.</strong> Die andere Person fragt: <em>Wann passt es Ihnen?</em> oder: <em>Geht es am Dienstag um 10 Uhr?</em></p>' +
      '<p>Antworten: <em>Ja, das passt mir gut.</em> oder <em>Da kann ich leider nicht. Geht es auch später?</em> Bei <strong>passen</strong> steht die Person im Dativ: <em>Passt Ihnen Montag?</em></p>' +
      '<p>Das Datum sagt man mit Ordnungszahlen: <em>am 3. März = am dritten März</em>. Zum Schluss wiederholt man den Termin: <em>Also am Dienstag, dem 5. Mai, um 10 Uhr.</em></p>',

      '<p>Einen Termin auf einen anderen Tag legen: <strong>Ich möchte meinen Termin verschieben.</strong> Einen Termin nicht machen: <strong>Ich muss meinen Termin leider absagen.</strong> Sagen Sie immer kurz den Grund und entschuldigen Sie sich: <em>Es tut mir leid, ich bin krank.</em></p>' +
      '<p><strong>absagen</strong> und <strong>zusagen</strong> sind trennbar: <em>Ich sage den Termin ab.</em> <strong>verschieben</strong> ist nicht trennbar: <em>Ich verschiebe den Termin auf Freitag.</em></p>' +
      '<p>In Deutschland sagt man einen Termin mindestens <strong>24 Stunden</strong> vorher ab.</p>',

      '<p>E-Mails haben feste Anfänge und Schlüsse. <strong>Formell:</strong> <em>Sehr geehrte Frau Berger, / Sehr geehrter Herr Klein, / Sehr geehrte Damen und Herren,</em> … <em>Mit freundlichen Grüßen</em>. <strong>Informell:</strong> <em>Liebe Anna, / Lieber Tom, / Hallo Tom,</em> … <em>Liebe Grüße</em>.</p>' +
      '<p>Nach der Anrede mit Komma schreibt man das erste Wort <strong>klein</strong> (außer Nomen und <em>Sie</em>).</p>' +
      '<p>In formellen E-Mails benutzt man <strong>Sie, Ihnen, Ihr</strong> – immer groß. Eine gute E-Mail hat: Grund, Bitte, Dank und Gruß.</p>',

      '<p>Nachrichten an Freunde sind kurz und locker. Typische Abkürzungen: <strong>LG</strong> (liebe Grüße), <strong>VG</strong> (viele Grüße), <strong>vllt</strong> (vielleicht), <strong>kp</strong> (kein Problem), <strong>ca.</strong> (circa).</p>' +
      '<p>Man schreibt auch, wie man spricht: <em>hab</em> (habe), <em>gibt’s</em> (gibt es). Oft fehlt das Subjekt: <em>Komme 10 Min später. Bin gleich da!</em></p>' +
      '<p>Achtung: Das ist nur für Freunde. An Lehrer, Vermieter oder neue Kollegen schreibt man ganze Sätze.</p>',

      '<p>Formulare gibt es überall: beim Amt, im Kurs, in der Bibliothek. Die Felder sind fast immer gleich: <em>Vorname, Nachname, Geburtsdatum, Geburtsort, Staatsangehörigkeit, Straße, Hausnummer, PLZ (Postleitzahl), Wohnort, Telefon, E-Mail, Datum, Unterschrift</em>.</p>' +
      '<p>Das Datum schreibt man <strong>Tag.Monat.Jahr</strong>: <em>03.04.1999</em>. In der Adresse steht die Hausnummer <strong>nach</strong> der Straße und die PLZ <strong>vor</strong> der Stadt: <em>Lindenstraße 12, 20095 Hamburg</em>.</p>' +
      '<p>Andere Felder: <em>Familienstand, Geschlecht, Beruf</em>. <em>Bitte in Druckbuchstaben</em> bedeutet: in großen Buchstaben schreiben.</p>'
    ]
  });

  /* ---------- Unit 17 — Reisen und Urlaub ---------- */
  unit(16, {
    reading: '<p>Eine Buchungsbestätigung von einer Pension. Lesen Sie: Daten, Zimmer, Preis und Hausregeln.</p>',
    listening: '<p>Ein Gast beschwert sich an der Rezeption. Hören Sie: Was ist das Problem? Was ist die Lösung?</p>',
    topics: [
      '<p>Pläne für die Zukunft sagt man im <strong>Präsens</strong> mit einem Zeitwort: <em>Im August fahre ich nach Italien. Nächste Woche fliegen wir nach Wien.</em></p>' +
      '<p>Wohin? Es gibt vier Präpositionen. <strong>nach</strong> für Städte und die meisten Länder: <em>nach Berlin, nach Spanien</em>. <strong>in + Akkusativ</strong> für Länder mit Artikel und für Gebiete: <em>in die Türkei, in die Schweiz, in die Berge</em>. <strong>an + Akkusativ</strong> für Wasser: <em>ans Meer, an den See</em>. <strong>zu</strong> für Personen: <em>zu meiner Tante</em>.</p>' +
      '<p>Andere Fragen: <em>Wie lange? – zwei Wochen. Mit wem? – mit meiner Familie. Womit? – mit dem Zug.</em></p>',

      '<p>Im Hotel fragt man: <strong>Haben Sie noch ein Zimmer frei?</strong> Dann sagt man, welches Zimmer: <em>ein Einzelzimmer, ein Doppelzimmer, mit Dusche, mit Frühstück</em>.</p>' +
      '<p>Die Daten sagt man mit <strong>vom … bis zum …</strong>: <em>vom 3. bis zum 7. Mai</em> = <em>vom dritten bis zum siebten Mai</em>. Oder: <em>für drei Nächte</em>.</p>' +
      '<p>Nützliche Fragen: <em>Was kostet das Zimmer pro Nacht? Ist das Frühstück inklusive? Gibt es WLAN?</em></p>',

      '<p>Am Bahnhof hört man: <strong>Gleis</strong>, <strong>Abfahrt</strong>, <strong>Ankunft</strong> und oft <strong>Verspätung</strong>: <em>Der Zug hat 20 Minuten Verspätung.</em> Fährt der Zug nicht, dann <strong>fällt er aus</strong>.</p>' +
      '<p>Am Flughafen: <em>der Abflug, das Gepäck, das Handgepäck, die Bordkarte, die Passkontrolle</em>.</p>' +
      '<p>Regeln sagt man mit <strong>dürfen</strong>: <em>Hier darf man nicht rauchen.</em> <em>ich darf, du darfst, er darf</em>. Achtung: <strong>nicht dürfen</strong> = verboten, aber <strong>nicht müssen</strong> = nicht nötig.</p>',

      '<p>Typische Aktivitäten im Urlaub: <em>eine Stadtführung machen, Sehenswürdigkeiten besichtigen, ins Museum gehen, am Strand liegen, wandern, Fotos machen</em>.</p>' +
      '<p>Wichtig ist der Unterschied <strong>Wohin?</strong> und <strong>Wo?</strong>: Wohin? = Akkusativ (<em>Wir gehen an den Strand.</em>). Wo? = Dativ (<em>Wir liegen am Strand.</em>).</p>' +
      '<p>Empfehlungen: <em>Man kann dort gut wandern. Du musst unbedingt das Museum besuchen! Es lohnt sich.</em></p>',

      '<p>Sagen Sie das Problem in einem kurzen Satz: <em>Mein Koffer ist nicht da. Ich habe den Zug verpasst. Das Zimmer ist schmutzig. Die Heizung funktioniert nicht.</em></p>' +
      '<p>Bitten Sie höflich um Hilfe: <em>Können Sie mir helfen? Was kann ich jetzt machen? Ich möchte ein anderes Zimmer.</em></p>' +
      '<p>Wohin geht man? Verlorene Sachen: <strong>Fundbüro</strong>. Diebstahl: <strong>Polizei</strong>. Pass verloren: <strong>Botschaft</strong> oder <strong>Konsulat</strong>.</p>'
    ]
  });

  /* ---------- Unit 18 — Über die Vergangenheit sprechen ---------- */
  unit(17, {
    reading: '<p>Ein Tagebucheintrag über einen besonderen Tag. Lesen Sie: Was ist passiert? In welcher Reihenfolge? Wie war der Tag?</p>',
    listening: '<p>Zwei Kollegen sprechen über einen Urlaub. Hören Sie: Wohin, wie, was hat er gemacht und was war das Problem?</p>',
    topics: [
      '<p>Beim Sprechen benutzt man für die Vergangenheit meistens das <strong>Perfekt</strong>. Es hat zwei Teile: <strong>haben</strong> (oder <em>sein</em>) auf Position 2 und das <strong>Partizip II</strong> am <strong>Ende</strong>: <em>Ich <strong>habe</strong> gestern Pizza <strong>gegessen</strong>.</em> Das ist wieder eine Satzklammer.</p>' +
      '<p>Die meisten Verben haben <strong>haben</strong>: alle Verben mit Akkusativ (<em>kaufen, essen, sehen</em>) und viele andere (<em>arbeiten, schlafen, spielen</em>).</p>' +
      '<p>Zeitwörter für die Vergangenheit: <em>gestern, letzte Woche, am Wochenende, vor zwei Tagen</em>.</p>',

      '<p>Einige Verben haben das Perfekt mit <strong>sein</strong>. Sie haben keinen Akkusativ und beschreiben eine <strong>Bewegung von A nach B</strong> (<em>gehen, fahren, fliegen, kommen, aufstehen</em>) oder eine <strong>Veränderung</strong> (<em>einschlafen, aufwachen, werden</em>). Auch <strong>sein</strong> und <strong>bleiben</strong> haben <em>sein</em>.</p>' +
      '<p>Beispiele: <em>Ich <strong>bin</strong> nach Berlin <strong>gefahren</strong>. Sie <strong>ist</strong> zu Hause <strong>geblieben</strong>.</em></p>' +
      '<p>Test: Gibt es eine Bewegung von A nach B oder eine Veränderung? Dann <em>sein</em>. Sonst <em>haben</em>. Achtung: <em>Ich habe geschlafen</em>, aber <em>Ich bin eingeschlafen</em>.</p>',

      '<p><strong>Regelmäßige Verben:</strong> <em>ge- + Stamm + -t</em>: <em>machen → gemacht, kaufen → gekauft</em>. Endet der Stamm auf -t oder -d, dann <em>-et</em>: <em>arbeiten → gearbeitet</em>.</p>' +
      '<p><strong>Unregelmäßige Verben:</strong> <em>ge- + Stamm + -en</em>, oft mit anderem Vokal. Diese Formen muss man lernen: <em>essen → gegessen, trinken → getrunken, schreiben → geschrieben</em>.</p>' +
      '<p><strong>Die ge-Regel:</strong> Bei trennbaren Verben steht <em>ge</em> in der Mitte: <em>eingekauft, aufgestanden</em>. Verben mit <em>be-, ver-, er-, ent-</em> und Verben auf <em>-ieren</em> haben <strong>kein ge-</strong>: <em>besucht, verstanden, studiert, telefoniert</em>.</p>',

      '<p>Für <strong>sein</strong> und <strong>haben</strong> benutzt man fast immer das <strong>Präteritum</strong>, nicht das Perfekt: <strong>Ich war gestern krank.</strong> <strong>Wir hatten keine Zeit.</strong></p>' +
      '<p>Die Formen sind: <em>war, warst, war, waren, wart, waren</em> und <em>hatte, hattest, hatte, hatten, hattet, hatten</em>. <em>ich</em> und <em>er/sie/es</em> sind gleich.</p>' +
      '<p>Auch die Modalverben benutzt man oft im Präteritum: <em>ich konnte, ich musste, ich wollte</em>. Und: <strong>es gab</strong> = Präteritum von <em>es gibt</em>.</p>',

      '<p>Eine gute Geschichte verbindet alles: <strong>war / hatte</strong> für die Situation, das <strong>Perfekt</strong> für die Aktionen und Wörter für die <strong>Reihenfolge</strong>: <em>zuerst, dann, danach, später, am Abend, zum Schluss</em>.</p>' +
      '<p>Denken Sie an die Position 2: <em>Dann <strong>sind</strong> wir ins Kino gegangen.</em> Das Partizip steht immer am Ende, auch in langen Sätzen.</p>' +
      '<p>Zum Schluss sagen Sie, wie es war: <em>Es war super / langweilig / anstrengend. Das hat Spaß gemacht.</em></p>'
    ]
  });
})();
