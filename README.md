# 🥨 Deutschkurs — A1 bis C2 (draft)

A static German course in the same shape as the Japanese study app: a sidebar
course outline, short lesson pages, a culture page and a vocabulary recap per
unit, and a mixed checkpoint after every three units.

**Status: draft, content in progress.** The structure, all six levels, every unit
subject and topic, and the whole exercise/checkpoint engine are in place.

| | |
| --- | --- |
| **Written in full** | **B2 Units 1–3** — 5 lessons each plus unit practice, reading, listening, writing, flashcards, culture and recap (210 questions)<br>**A1 Units 1–2** — the same full set (122 questions) |
| **Outline only** | Everything else — those pages say so rather than pretending |

## Run it

```bash
./serve.sh
```

Then open <http://localhost:8010/>. Progress is stored in the browser
(IndexedDB with a localStorage mirror), per address — so keep the port.

`serve.sh` runs `server.py`, which serves the files *and* forwards writing-judge
requests to the Anthropic API. A plain `python3 -m http.server` still works for
everything except AI correction.

## Explanations in English or in German

The **Erklärung** switch in the top bar flips every lesson explanation between
English and German. The German is not a translation exercise in disguise — each
text is written at the German level of the course it belongs to: A1 German is
short present-tense sentences and everyday words, B2 German is the real register
(Nominalstil, Konjunktiv, subordinate clauses). The reading and listening intros
switch too. The choice is remembered.

The German lives in `data/explain-de.js`, keyed level → unit → topic index:

```js
window.DE_TEXT = {
  a1: { 0: { topics: [html, html, …], reading: html, listening: html } },
  b2: { 0: { … }, 1: { … } }
};
```

Anything without a German version falls back to English with a visible
"deutsche Fassung fehlt noch" tag, so a half-written unit never shows a blank.
**When you write a new unit, add its German entry alongside it.**

What does *not* switch yet: the grammar blocks, dialogues and culture notes stay
as written (they are mostly German examples with short English notes), and the
interface labels stay English apart from the lesson explanation heading.

## Every unit has the same twelve-page spine

| Page | What it is |
| --- | --- |
| Lessons (5) | explanation · vocabulary · grammar · dialogue · drills |
| 📝 Übungen | mixed practice over the whole unit, separate from the lesson drills |
| 📖 Lesen | a level-appropriate text with comprehension questions |
| 🎧 Hören | a dialogue read aloud by the browser voice, with questions and a hidden transcript |
| ✍️ Schreiben | a writing task, marked by AI against the CEFR criteria for the level |
| 🃏 Karteikarten | flashcards, built automatically from the recap |
| 🏛️ Landeskunde | culture notes |
| 🧾 Wortschatz | vocabulary recap, feeds the flashcards and the checkpoints |

Question counts scale with level: A1–A2 roughly 4–5 per skill page, B1 5–6,
B2 7–8, C1–C2 8+.

## Correcting your writing — no API key required

Two things run on every writing task, and only the second needs a model.

### 1. The offline check — always, free, no account

`checker.js` runs in the browser and reports on what can be measured without
understanding meaning: length against the task, paragraph count, sentence
length and variety, how many different connectors you used, repeated words,
spoken-register slips in a formal text, `das`/`dass` confusion, missing commas
before subordinate clauses, missing capitals on nouns, English intrusions —
and whether the things the task asked for are actually present.

That last one is driven by `writing.expect` in the unit data:

```js
expect: ['opinion', 'arguments', 'examples', 'counter', 'conclusion', 'indirect']
```

Available keys are in `CHECKER.EXPECTATIONS`: opinion, arguments, examples,
counter, conclusion, indirect, politeness, passive, nominal, formal-opening,
formal-closing, informal-opening — and for beginner tasks greeting, self-intro,
thanks, farewell, spelling. Thresholds scale by level — B2 is asked for 4
different connectors and 3 paragraphs, A1 for 1 and 1.

At A1 and A2 the checker deliberately stays quiet about short sentences and
repeated "Ich…" openings: for a beginner those are the target, not a flaw. A
spelled-out name (`S-C-H-M-I-D-T`) is not mistaken for the English word "I".

It cannot tell you whether your argument is any good. It says so on the page.

Two rules keep it honest, learned the hard way: register words match as **whole
words** (so `halt` is flagged but `festhalten` is not), and common function words
(`nicht`, `dass`, `auch`…) are never reported as "repeated". A learning tool that
flags correct German teaches the wrong thing, so when adding a pattern, test it
against real words that merely *contain* it.

### 2. AI correction — five routes, two of which need no key

Marked against the CEFR descriptors for the level; the per-level rubric is in
`judge.js` (`LEVEL_SPEC`), so an A1 text is not marked against C1 German. The
model gets the unit, its grammar focus, the text type and the expected length,
and returns five criterion scores, corrections with reasons, strengths, next
steps and a rewritten version.

| Route | Needs a key? | Notes |
| --- | --- | --- |
| **Copy & paste** | **no** | The page builds the whole marking prompt. Paste it into Gemini, ChatGPT or Claude in your browser, paste the answer back, and it renders like any other feedback. Uses the subscription you already pay for. |
| **Local model (Ollama)** | **no** | `ollama serve`, then pick a model. Nothing leaves the machine. Marks grammar reasonably, meaning less well. |
| **Key on disk** | yes | `ANTHROPIC_API_KEY`, `GEMINI_API_KEY` or `OPENAI_API_KEY` in `deutsch-kurs/.env` — `server.py` also reads `../backend/.env`. The key never reaches the browser. `.env` is gitignored. |
| **Key in the browser** | yes | Quickest. Stored in local storage, so anything in that browser profile can read it. Anthropic, Gemini or any OpenAI-compatible endpoint. |
| **None** | — | Only the offline check runs. Nothing is sent anywhere. |

Pick one with the ⚙️ button on any writing page. The proxy detects which
provider you have a key for:

```
GET  /api/judge  ->  {"ready": true|false, "provider": "anthropic"|"gemini"|"openai"}
POST /api/judge  ->  forwards in that provider's format, returns {"text": …}
```

Set `AI_PROVIDER`, `AI_MODEL` or `OPENAI_BASE_URL` in `.env` to override —
`OPENAI_BASE_URL` also points at LM Studio or vLLM running locally.

## Exam preparation

`exam.html` covers every level: which certificates exist (Goethe, telc, ÖSD,
plus TestDaF and DSH for university entry), what each part contains, how long it
takes, the pass mark, and what to train. Formats change — it says so, and points
at each provider's own Modellsatz.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Hub: six level cards with their subject lists and your progress |
| `course.html` | The course shell — `course.html?level=b1` |
| `grammar.html` | Grammar reference, 12 sections (outline only) |
| `engine.js` | Course engine: pages, navigation, exercises, checkpoints, listening, writing, flashcards |
| `judge.js` | AI writing judge: per-level rubrics, prompt building, five correction routes |
| `checker.js` | Offline writing check — no key, no network, always runs |
| `server.py` | Static server + `/api/judge` proxy that keeps the key on disk |
| `exam.html` | Exam preparation for all six levels |
| `data/explain-de.js` | German versions of the lesson explanations, one per topic |
| `data/exams.js` | telc / Goethe / ÖSD / TestDaF / DSH formats per level |
| `builders.js` | `vocabTable`, `formTable`, `dialogBox`, `exInput`, `exSelect` — loaded before the data files that call them |
| `progress.js` | Shared progress store for all six levels |
| `style.css` | Theme: warm blush paper, plum ink, raspberry / jade / amber |
| `data/a1.js` … `data/c2.js` | One file per level: units, subjects, topics, can-do goals, grammar focus |

## Levels

| Level | Units | Focus |
| --- | --- | --- |
| A1 | 18 | Greetings → present tense, cases, Perfekt · **Units 1–2 written** |
| A2 | 18 | Dative, comparison, adjective endings, Konjunktiv II for politeness |
| B1 | 16 | Connectors, relative clauses, passive, argument |
| B2 | 14 | Indirect speech, participial attributes, formal register |
| C1 | 12 | Style, complex syntax, academic and rhetorical German |
| C2 | 10 | Nuance, irony, specialised registers, native-standard writing |

## No scripts to learn

Unlike the Japanese course there is no kana/kanji layer — German uses the Latin
alphabet. The display switch in its place toggles **der / die / das colouring**:
masculine amber, feminine raspberry, neuter jade, so gender is visible while you
read instead of something you look up later.

## Adding content to a topic

Each topic in `data/<level>.js` starts as an outline entry:

```js
t('🌅', 'Greeting by time of day', 'Guten Morgen / Tag / Abend, Gute Nacht')
```

Fill it in by giving it content fields — the engine switches from the
placeholder to a full lesson page as soon as `explanation` or `exercises` exists:

```js
{
  icon: '🌅', title: 'Greeting by time of day',
  explanation: '<p>…</p>',
  vocab: vocabTable([['Guten Morgen', 'Good morning']]),
  grammar: '<div class="grammar-point">…</div>',
  dialogs: dialogBox('Dialog — im Büro', [['A', 'Guten Morgen!'], ['B', 'Morgen!']]),
  exercises: '<div class="exercise"><ol>' +
    exInput('“Good evening” is:', 'Guten Abend') +
    exSelect('At 8 a.m. you say:', 'Guten Morgen', ['Guten Morgen', 'Guten Abend', 'Gute Nacht']) +
    '</ol></div>'
}
```

Builders available to data files: `vocabTable`, `formTable`, `dialogBox`,
`exInput`, `exSelect`. Alternative answers in `exInput` are separated by `|`.
Umlauts and ß are compared loosely, so `ue oe ae ss` are accepted.

That loose comparison also lowercases, which is wrong when capitalisation *is*
the point (German nouns, formal `Sie`). Pass the case-sensitive flag for those:

```js
exInput('<em>ich trinke kaffee</em> → Ich trinke ___', 'Kaffee', null, 'de', true)
exSelect('Which is correct?', 'Ich lerne Deutsch.', [...], true)
```

For the same reason, never build a multiple choice whose options differ only by
`ß`/`ss` or by an umlaut — the checker folds them together and accepts both.

A unit also takes:

| Field | Shape |
| --- | --- |
| `culture` | HTML |
| `recap` | `[{group, rows: [[de, en], …]}]` — feeds the checkpoints **and the flashcards** |
| `sentences` | `[{de, en}]` — feeds the Satzbau word-order exercise |
| `exercises` | exercise HTML for the unit-practice page |
| `reading` | `{intro, words, minutes, text, glossary, questions}` |
| `listening` | `{title, intro, lines: [[speaker, text], …], questions}` |
| `writing` | `{title, textType, minWords, maxWords, minutes, task, plainTask, bullets, usefulPhrases, criteria}` |

`writing.plainTask` is the version sent to the model — plain prose, no HTML.
Listening needs no audio files: `lines` are read aloud by the browser's German
voice, highlighted line by line.

## Checkpoints

Built from the unit recaps, fresh each time: multiple choice both ways,
**der/die/das**, listening (browser speech, `de-DE`), true-or-false, typing,
Satzbau word order, and matching. Best score per checkpoint is saved.
