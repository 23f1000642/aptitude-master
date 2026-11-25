// Checks every topic and bank file. Run: node tools/validate.js
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(root, 'js/registry.js'), 'utf8'));
global.APT = window.APT;
const read = (dir) => fs.readdirSync(path.join(root, dir)).filter((f) => f.endsWith('.js'))
  .forEach((f) => eval(fs.readFileSync(path.join(root, dir, f), 'utf8')));
read('data/topics');
read('data/bank');

let problems = 0;
const fail = (msg) => { problems++; console.error('✗', msg); };
const keyOf = {};
Object.values(APT.bank).flat().forEach((q) => { keyOf[q.id] = q.key; });
const L = 'ABCDE';

APT.topics.forEach((t) => {
  ['id', 'title', 'tagline', 'concepts', 'questions', 'pdfTopics'].forEach((k) => { if (!t[k]) fail(`${t.id}: missing ${k}`); });
  t.pdfTopics.forEach((p) => { if (!APT.bankIndex.find((b) => b.id === p)) fail(`${t.id}: unknown bank ${p}`); });
  t.questions.forEach((q, i) => {
    const where = `${t.id} Q${i + 1}${q.pdf ? ' (' + q.pdf + ')' : ''}`;
    if (!q.q || !q.steps || !q.steps.length) fail(`${where}: needs text and steps`);
    if (q.options) {
      if (!(q.answer >= 0 && q.answer < q.options.length)) fail(`${where}: answer index out of range`);
      const k = q.pdf && keyOf[q.pdf];
      if (k && /^[A-E]$/.test(k) && L[q.answer] !== k && !q.keyNote) fail(`${where}: PDF key is ${k}, app says ${L[q.answer]}`);
    } else if (!q.answerText) fail(`${where}: needs answerText`);
  });
});
APT.bankIndex.forEach((b) => {
  if (!APT.bank[b.id]) fail(`bank ${b.id}: file missing`);
  else if (APT.bank[b.id].length !== b.count) fail(`bank ${b.id}: count mismatch`);
});

const solved = APT.topics.reduce((n, t) => n + t.questions.length, 0);
console.log(`${APT.topics.length} topics, ${solved} solved questions, ${APT.bankIndex.length} bank sets`);
console.log(problems ? `${problems} problem(s) found` : 'All good ✓');
process.exit(problems ? 1 : 0);
