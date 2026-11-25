"""Build the practice bank from the extracted PDF text.

Usage: python3 tools/build_bank.py <pdftotext-layout.txt> <out_dir> [chapter ...]
Chapters default to 7 (Quantitative Aptitude). 1 = Data Interpretation, 2 = Logical Reasoning,
3 = Attitude & Leadership, 4 = Computer Knowledge, 5 = English, 6 = General Awareness, 8 = Spatial Aptitude.
If data/figures/map.json exists (see extract_figures.py), each question gets its chart images.
Writes one JS file per PDF sub-topic (data/bank/7-62.js ...) and data/bank/index.js.
"""
import json
import os
import re
import sys
from collections import OrderedDict

src, out = sys.argv[1], sys.argv[2]
chapters = sys.argv[3:] or ['7']
# Optional: PREFIX=G SECTION=gate FIGMAP=... for a second book (ids become G8.1.1 etc.)
PREFIX = os.environ.get('PREFIX', '')
SECTION_OVERRIDE = os.environ.get('SECTION')
SECTION = {'1': 'di', '2': 'reasoning', '3': 'general', '4': 'general', '5': 'english', '6': 'general', '7': 'quant', '8': 'reasoning'}
FIG_MAP = os.environ.get('FIGMAP') or os.path.join(os.path.dirname(os.path.abspath(out)), 'figures', 'map.json')
figures = json.load(open(FIG_MAP)) if os.path.exists(FIG_MAP) else {}
t = open(src, encoding='utf-8').read()

TAG_LINE = re.compile(r'^\s*[a-z0-9&-]+(?:\s+[a-z0-9&-]+)*\s*$')
TRAILING_TAGS = re.compile(r'\s+(?:cat|nielit|gate|tcs)[a-z]*\d{4}\S*(?:\s+[a-z0-9&-]+)*\s*$')
NEXT_HEAD = re.compile(r'\s*\d+\.\d+\s+[A-Z][A-Za-z&\s]+\(\d+\)\s*$')

groups = OrderedDict()
names = {}
for ch in chapters:
    hm0 = re.search(r'\n\s*' + ch + r' {20,}[^\n]*\(\d+\)\s*\n', t)
    start = hm0.start()
    end = t.index('Answer Keys', start)
    body = t[start:end]
    keys = dict(re.findall(r'(' + ch + r'\.\d+\.\d+)\s+(\S+)', t[end:end + 60000]))
    for part in re.split(r'\n\s*(?=' + ch + r'\.\d+\.\d+ )', body):
        m = re.match(r'\s*(' + ch + r'\.(\d+))\.(\d+) (.*)', part)
        if not m:
            continue
        sub, qid = PREFIX + m.group(1), f'{PREFIX}{m.group(1)}.{m.group(3)}'
        lines = part.replace('\f', '').replace('top☝', '').replace('Answer key ☟', '').split('\n')
        head = re.sub(r'^\s*\d+\.\d+\.\d+ ', '', lines[0]).strip()
        name, source, rest = None, '', ''
        hm = re.match(r'([A-Z][A-Za-z&\s]+?): (.*)', head)
        if hm and not sub.endswith('.0'):
            name, rest = hm.group(1).strip(), hm.group(2)
        else:
            rest = head
        sm = re.match(r'(.*?\|\s*Question:\s*\S+)\s*(.*)', rest)
        if sm:
            source, rest = sm.group(1).replace('| Question:', 'Q').strip(), sm.group(2)
        text_lines = [rest] + lines[1:]
        cleaned = []
        for ln in text_lines:
            if TAG_LINE.match(ln) and ('-' in ln or re.search(r'\d{4}', ln) or len(ln.split()) <= 3):
                continue
            ln = NEXT_HEAD.sub('', ln)
            ln = TRAILING_TAGS.sub('', ln)
            cleaned.append(ln.rstrip())
        text = re.sub(r'\n\s*\n+', '\n', '\n'.join(cleaned)).strip()
        text = re.sub(r'[ \t]{3,}', '   ', text)
        text = NEXT_HEAD.sub('', text).strip()
        if not text:
            continue
        key = keys.get(qid[len(PREFIX):])
        if key in (None, 'Q-Q', 'X'):
            key = None
        figure = bool(re.search(r'\b(table|graph|chart|figure|diagram|shown below|given below)\b', text, re.I))
        if name:
            names.setdefault(sub, name)
        entry = {'id': qid, 'source': source, 'text': text, 'key': key, 'figure': figure}
        if qid in figures:
            entry['images'] = figures[qid]
            entry['figure'] = False
        groups.setdefault(sub, []).append(entry)

names['7.0'] = 'Mixed questions'
names['2.0'] = 'Mixed reasoning questions'
names.update({'4.0': 'Mixed computer questions', '5.0': 'Mixed English questions', '6.0': 'Mixed general awareness', '6.6': 'Computer Knowledge (GA)', '5.7': 'Logical Reasoning (English)', '5.6': 'Logic Puzzles (English)', '8.1': 'Direction Sense (spatial)', '8.3': 'Sequences (spatial)'})
names.update({'7.1': 'Year 2019', '7.50': 'LCM & HCF', '7.82': 'Sequences & Series', '7.96': 'TCS Digital'})
index = []
for sub, qs in groups.items():
    fname = sub.replace('.', '-')
    with open(f'{out}/{fname}.js', 'w', encoding='utf-8') as f:
        f.write(f'APT.addBank({json.dumps(sub)}, {json.dumps(qs, ensure_ascii=False, indent=1)});\n')
    index.append({'id': sub, 'section': SECTION_OVERRIDE or SECTION.get(sub.split('.')[0]), 'title': names.get(sub, sub), 'count': len(qs), 'keyed': sum(1 for q in qs if q['key'])})
idx_path = f'{out}/index.js'
if os.path.exists(idx_path):
    old = open(idx_path, encoding='utf-8').read()
    old = json.loads(old[old.index('(') + 1:old.rindex(')')])
    built = {b['id'] for b in index}
    keep = [b for b in old if b['id'] not in built and (b['id'].startswith(PREFIX) is False if PREFIX else b['id'][0].isalpha())]
    index = keep + index
index.sort(key=lambda b: (b['section'] or '', b['title']))
with open(f'{out}/index.js', 'w', encoding='utf-8') as f:
    f.write('APT.setBankIndex(' + json.dumps(index, ensure_ascii=False, indent=1) + ');\n')
print(len(index), 'sub-topics,', sum(b['count'] for b in index), 'questions,', sum(b['keyed'] for b in index), 'with keys')
