# Aptitude Master

An interactive study app covering the whole aptitude syllabus: **Quantitative Aptitude**, **Data Interpretation**, **Logical Reasoning**, **English**, **Computer & General Awareness**, and every **GATE General Aptitude PYQ (2010–2026)**. Every topic is taught like a story, then you attempt real exam questions and open a step-by-step solution only after you've tried.

**Live app:** https://23f1000642.github.io/aptitude-master/

## What's inside

| | |
| --- | --- |
| Sections | 6: Quant, Data Interpretation, Logical Reasoning, English, Computer & General Awareness, GATE General Aptitude (PYQ) |
| Topics | 44 (14 quant + 3 DI + 9 reasoning + 6 English + 2 GA + 10 GATE) |
| Solved questions | 726: 297 from the aptitude book + all 429 GATE General Aptitude PYQs, each with options, steps and the trick used |
| PDF question bank | All 5,018 questions from the GATE Overflow aptitude book, in 221 sub-topics, with the book's answer key where it has one (1,173) |
| Figures | 268 images from the aptitude book (shown with their 525 questions) + 63 GATE question crops for charts and diagrams |

### Each topic has three tabs

1. **Concepts**: the story (explained simply), formulas, short tricks, and a "when you see this, do this" pattern table.
2. **Questions**: pick an option and you instantly see right or wrong. The **Show solution** button beside every question opens the full steps.
3. **More from PDF**: the original questions from the book for that topic.

### Other features

- Progress tracking per topic (saved in your browser)
- Bookmarks for revision
- Search across all solved questions
- Dark mode
- Works on mobile
- No build step, no dependencies: plain HTML, CSS and JavaScript

## Which exams the questions come from

Every solved question is from the PDF (GATE Overflow aptitude book, July 2022 edition) and shows its PDF number.

| Exam | Years | Questions in the bank |
| --- | --- | --- |
| CAT (IIM entrance) | 1994 – 2021 (every year) | ~3,780 |
| NIELIT (Scientist B/C/D, Scientific Assistant A) | 2016, 2017, 2019 | ~730 |
| GATE (General Aptitude) | 2014, 2017 | ~12 |
| Others (SBI, UGC NET) | 2017, 2018 | 3 |
| **GATE General Aptitude PYQs** (second PDF: GATE Overflow CSE volume, aptitude chapters only) | 2010 – 2026 (CSE, DA, DS&AI and other papers) | 429, all solved |
| No exam named (practice / doubt questions posted on GATE Overflow) | n/a | ~490 |

### GATE General Aptitude (PYQ) section

| Topic | Questions |
| --- | --- |
| Analytical Aptitude | 48 |
| Spatial Aptitude | 19 |
| Quant: Arithmetic | 50 |
| Quant: Algebra & Numbers | 56 |
| Quant: Geometry & Mensuration | 23 |
| Quant: Data Interpretation | 29 |
| Quant: Probability, Counting & Statistics | 39 |
| Verbal: Grammar & Usage | 30 |
| Verbal: Vocabulary & Analogies | 91 |
| Verbal: Reading & Reasoning | 44 |

Every answer is checked against the book's answer key. Two are flagged with a note in the app: 9.13.1 (the key says 51; direct counting gives 52) and 9.36.2 (marks given to all; Fermat's two-squares theorem gives A).

## Run it locally

Open `index.html` in a browser. That's it.

Or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
index.html              app shell
css/style.css           all styling (light + dark theme)
js/registry.js          global registry the data files add themselves to
js/store.js             progress, bookmarks and theme (localStorage)
js/render.js            small rendering helpers
js/app.js               router, pages, question cards
data/topics/*.js        one file per topic: concepts + solved questions (di-, lr-, en-, gk- prefixes by section)
data/bank/*.js          PDF question bank, one file per sub-topic (loaded on demand)
data/figures/           chart images from the PDF + map.json (question id -> images)
tools/build_bank.py     builds data/bank from the PDF's extracted text
tools/extract_figures.py pulls chart images out of the PDF and maps them to questions
tools/validate.js       checks answers against the PDF key and that every figure exists
```

### Adding a solved question

Add an object to the `questions` array of a topic file in `data/topics/`:

```js
{
  pdf: '7.64.3',              // question number in the PDF (optional)
  level: 'easy',              // easy | medium | hard
  q: 'Question text',
  options: ['666', '660', '720', '726'],
  answer: 3,                  // index of the correct option
  steps: ['Step 1', 'Step 2'],
  trick: 'Optional: the shortcut used',
}
```

For a question without options, use `options: null`, `answerText: '16000'` and optionally `accept: ['16000', '16,000']`.

### Rebuilding the question bank

```bash
pdftotext -layout aptitude.pdf apt.txt
pip install pymupdf
python3 tools/extract_figures.py aptitude.pdf 6 1773 data/figures   # whole book
python3 tools/build_bank.py apt.txt data/bank 1 2 3 4 5 6 7 8       # every chapter
node tools/validate.js                               # checks every answer against the PDF key
```

## Roadmap

- [x] Quantitative Aptitude
- [x] Logical Reasoning
- [x] Data Interpretation
- [x] English Language
- [x] Computer Knowledge & General Awareness
- [ ] More step-by-step solutions for the PDF bank

## Credits

Questions are from the GATE Overflow aptitude book (CAT, NIELIT and other exams). Concepts, tricks and step-by-step solutions were written for this app.
