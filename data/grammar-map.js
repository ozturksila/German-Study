/* =========================================================
   Grammar by topic — which lessons teach which grammar.

   Each section lists the WRITTEN lessons that teach it, as
   [level, unit index, topic index] (both indices 0-based, as in the
   data files). A lesson may appear in more than one section.

   `guide` (optional) names a study guide in grammar-guides.js. A section
   with a guide shows that one complete explanation instead of lessons
   split by level; its lessons are listed underneath as practice.

   `planned` is a pattern matched against the grammar focus of units
   that are still outline only, so the page can also show what is
   coming at each level. `reference` is the list of reference tables
   still to be written for the section.

   When you write a new lesson, add its [level, unit, topic] here.
   ========================================================= */
window.GRAMMAR_MAP = [
  { id: 'artikel', icon: '🎨', title: 'Artikel und Genus',
    lessons: [['a1', 4, 4], ['a1', 1, 4], ['a1', 5, 1], ['a1', 7, 1], ['a1', 11, 0], ['a1', 12, 0]],
    planned: /\barti(cle|kel)|gender|genus|plural|\bkein/i,
    reference: ['Definite, indefinite and zero article', 'Gender rules and reliable endings', 'Plural formation, all five patterns'] },

  { id: 'kasus', icon: '📦', title: 'Die vier Kasus',
    lessons: [['a1', 4, 1], ['a1', 4, 4], ['a1', 5, 3], ['b2', 3, 1], ['a1', 6, 2], ['a1', 7, 0], ['a1', 7, 2], ['a1', 11, 1], ['a1', 12, 4]],
    planned: /dativ|dative|akkusativ|accusative|genitiv|genitive|\bcases?\b|n-deklination/i,
    reference: ['Nominative, accusative, dative, genitive in one table', 'Which verbs demand which case', 'Pronoun declension'] },

  { id: 'pronomen', icon: '🔤', title: 'Pronomen',
    lessons: [['a1', 0, 3], ['a1', 4, 0], ['a1', 4, 2], ['a1', 7, 1], ['a1', 8, 3], ['a1', 11, 1], ['a1', 12, 3]],
    planned: /pronoun|pronomen|possessive|reflexive|da- and wo-/i,
    reference: ['Personal, possessive, reflexive', 'Demonstrative and indefinite', 'Relative pronouns, all cases', 'da- and wo- compounds'] },

  { id: 'praesens', icon: '⚙️', title: 'Verben — Präsens',
    lessons: [['a1', 2, 0], ['a1', 2, 1], ['a1', 2, 2], ['a1', 2, 3], ['a1', 4, 1], ['a1', 5, 0], ['a1', 8, 1], ['a1', 9, 0], ['a1', 9, 1]],
    planned: /^(?!.*(futur|future|perfekt)).*(present tense|präsens|stem-chang|separable|trennbar|conjugat)/i,
    reference: ['Regular endings', 'Stem-changing verbs: fahren → fährst', 'sein, haben, werden', 'Separable and inseparable prefixes'] },

  { id: 'vergangenheit', icon: '⏮️', title: 'Verben — Vergangenheit',
    lessons: [['a1', 17, 0], ['a1', 17, 1], ['a1', 17, 2], ['a1', 17, 3], ['a1', 17, 4]],
    planned: /^(?!.*konjunktiv).*(perfekt|präteritum|plusquamperfekt|past tense|simple past|participle ii)/i,
    reference: ['Perfekt with haben and sein', 'Participle formation, regular and irregular', 'Präteritum', 'Plusquamperfekt', 'Irregular verb list'] },

  { id: 'konj2', icon: '🌈', title: 'Konjunktiv II',
    lessons: [['a1', 5, 3], ['a2', 4, 4], ['a2', 13, 2], ['a2', 16, 3], ['b1', 6, 3], ['b2', 1, 1], ['b2', 4, 2], ['b2', 10, 4], ['c1', 4, 3], ['c2', 0, 3]],
    guide: 'konj2',
    planned: /konjunktiv ii|konjunktiv in|würde|hätte|wäre|irrealis|unreal|als ob/i,
    reference: [] },

  { id: 'konj1', icon: '📣', title: 'Konjunktiv I und indirekte Rede',
    lessons: [['b2', 0, 0], ['b2', 0, 1], ['b2', 0, 2], ['b2', 0, 3]],
    planned: /konjunktiv i\b|indirect speech|indirekte rede|reported/i,
    reference: ['Konjunktiv I, all persons', 'Tense mapping in indirect speech'] },

  { id: 'zukunft', icon: '🔮', title: 'Futur und Imperativ',
    lessons: [['a1', 6, 3], ['a1', 10, 2], ['a1', 11, 3], ['a1', 13, 2], ['a1', 16, 0]],
    planned: /futur|future|imperativ|imperative/i,
    reference: ['Futur I and II', 'Imperative, all forms'] },

  { id: 'modal', icon: '🎚️', title: 'Modalverben',
    lessons: [['a1', 0, 4], ['a2', 13, 2], ['b2', 0, 2], ['b2', 2, 4], ['c2', 0, 3], ['a1', 5, 2], ['a1', 9, 2], ['a1', 11, 3], ['a1', 15, 0], ['a1', 16, 2]],
    planned: /modal(?! particle)|möchten|mögen/i,
    reference: ['The six modals and their meanings', 'Present, past and Perfekt forms', 'Objective vs. subjective use'] },

  { id: 'passiv', icon: '🔄', title: 'Passiv',
    lessons: [['b2', 1, 2], ['b2', 2, 3], ['b2', 5, 0]],
    planned: /passiv|passive/i,
    reference: ['Vorgangspassiv and Zustandspassiv', 'Passive in every tense', 'Alternatives: man, sich lassen, sein + zu'] },

  { id: 'adjektive', icon: '🏷️', title: 'Adjektive',
    lessons: [['a1', 4, 3], ['b2', 2, 2], ['a1', 12, 1], ['a1', 12, 2], ['a1', 13, 4]],
    planned: /adjectiv|adjektiv|comparative|superlative|komparativ|participles? as|gern \/ lieber/i,
    reference: ['Declension after definite, indefinite and no article', 'Comparative and superlative', 'Extended participial attributes'] },

  { id: 'praepositionen', icon: '📍', title: 'Präpositionen',
    lessons: [['a1', 3, 2], ['b2', 5, 1], ['a1', 6, 0], ['a1', 7, 2], ['a1', 10, 0], ['a1', 10, 3], ['a1', 11, 2], ['a1', 14, 1], ['a1', 16, 0], ['a1', 16, 3]],
    planned: /preposition|präposition/i,
    reference: ['Accusative, dative and two-way prepositions', 'Genitive prepositions', 'Verbs with fixed prepositions'] },

  { id: 'konnektoren', icon: '🔗', title: 'Konnektoren',
    lessons: [['a1', 9, 4], ['a1', 13, 3], ['a1', 17, 4]],
    guide: 'konnektoren',
    planned: /connector|konnektor|conjunction|\bweil\b|\bdass\b|obwohl|je … desto|concessive|consecutive|als \/ wie/i,
    reference: [] },

  { id: 'satzbau', icon: '🧩', title: 'Satzbau und Wortstellung',
    lessons: [['a1', 0, 4], ['a1', 2, 4], ['b2', 0, 3], ['b2', 3, 0], ['b2', 3, 2], ['b2', 3, 3],
              ['b2', 4, 0], ['b2', 4, 1], ['b2', 5, 2], ['b2', 5, 3], ['b2', 5, 4], ['b2', 1, 4],
              ['a1', 8, 0], ['a1', 8, 1], ['a1', 9, 2], ['a1', 9, 3], ['a1', 14, 1]],
    planned: /clause|word order|connector|konnektor|conjunction|verb-final|verb position|\bweil\b|\bdass\b|obwohl|infinitiv|question|negation|je … desto|satz/i,
    reference: ['Position of the verb in every clause type', 'Sentence bracket (Satzklammer)', 'Tekamolo: order of adverbials'] },

  { id: 'stil', icon: '🧱', title: 'Wortbildung und Stil',
    lessons: [['b2', 1, 0], ['b2', 1, 3], ['b2', 2, 0], ['b2', 2, 1], ['b2', 0, 4], ['b2', 4, 3], ['a1', 15, 2], ['a1', 15, 3]],
    planned: /nominal|word formation|wortbildung|compound noun|prefix|suffix|register|funktionsverb|\bstyl|rhetori|idiom/i,
    reference: ['Compound nouns', 'Prefixes and suffixes that change meaning', 'Nominal vs. verbal style', 'Register ladder'] },

  { id: 'aussprache', icon: '🗣️', title: 'Aussprache und Rechtschreibung',
    lessons: [['a1', 1, 0], ['a1', 1, 1], ['a1', 1, 2], ['a1', 1, 3], ['a1', 1, 4]],
    planned: /pronunciation|aussprache|spelling|rechtschreib|\bsounds?\b|intonation|prosody/i,
    reference: ['Alphabet and spelling aloud', 'Vowel length and stress'] },

  { id: 'zahlen', icon: '🔢', title: 'Zahlen, Uhrzeit, Datum',
    lessons: [['a1', 3, 0], ['a1', 3, 1], ['a1', 3, 2], ['a1', 3, 3], ['a1', 3, 4], ['a1', 5, 4], ['a1', 6, 1], ['a1', 15, 4], ['a1', 16, 1]],
    planned: /\bnumbers?\b|ordinal|telling the time|\bdates?\b|uhrzeit/i,
    reference: ['Cardinal and ordinal numbers', 'Official and everyday time'] }
];
