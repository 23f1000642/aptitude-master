# Aptitude Master

An interactive study app for **Quantitative Aptitude**, **Data Interpretation** and **Logical Reasoning**. Every topic is taught like a story, then you attempt real exam questions and open a step-by-step solution only after you've tried.

**Live app:** https://23f1000642.github.io/aptitude-master/

## What's inside

| | |
| --- | --- |
| Sections | 3: Quantitative Aptitude, Data Interpretation, Logical Reasoning |
| Topics | 26 (14 quant + 3 DI + 9 reasoning) |
| Solved questions | 220, each with options, steps and the trick used |
| PDF question bank | 3,183 questions from the GATE Overflow aptitude book, in 153 sub-topics, with the book's answer key where it has one (761) |
| Charts | 53 chart images taken from the PDF and shown with their questions |

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
data/topics/*.js        one file per topic: concepts + solved questions (lr-* = reasoning)
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
python3 tools/extract_figures.py aptitude.pdf 6 168 data/figures   # DI pages
python3 tools/build_bank.py apt.txt data/bank 1 2 7   # chapters: 1 = DI, 2 = reasoning, 7 = quant
node tools/validate.js                               # checks every answer against the PDF key
```

## Roadmap

- [x] Quantitative Aptitude
- [x] Logical Reasoning
- [x] Data Interpretation
- [ ] English Language
- [ ] Computer Knowledge & General Awareness

## Credits

Questions are from the GATE Overflow aptitude book (CAT, NIELIT and other exams). Concepts, tricks and step-by-step solutions were written for this app.
