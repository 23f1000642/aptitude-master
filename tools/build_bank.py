"""Build the practice bank from the extracted PDF text.

Usage: python3 tools/build_bank.py <pdftotext-layout.txt> <out_dir>
Writes one JS file per PDF sub-topic (data/bank/7-62.js ...) and data/bank/index.js.
"""
import json
import re
import sys
from collections import OrderedDict

src, out = sys.argv[1], sys.argv[2]
t = open(src, encoding='utf-8').read()
start = t.index('7                                                  Quantitative Aptitude (1760)')
end = t.index('Answer Keys', start)
body = t[start:end]
keys = dict(re.findall(r'(7\.\d+\.\d+)\s+(\S+)', t[end:end + 60000]))

TAG_LINE = re.compile(r'^\s*(\S*\d{4}\S*\s+)?([a-z0-9]+(-[a-z0-9]+)+\s*)+$')
NEXT_HEAD = re.compile(r'\s*7\.\d+ [A-Z][A-Za-z&\s]+\(\d+\)\s*$')

groups = OrderedDict()
names = {}
for part in re.split(r'\n\s*(?=7\.\d+\.\d+ )', body):
    m = re.match(r'\s*(7\.(\d+))\.(\d+) (.*)', part)
    if not m:
        continue
    sub, qid = m.group(1), f'{m.group(1)}.{m.group(3)}'
    first = m.group(4)
    lines = part.replace('\f', '').replace('top☝', '').replace('Answer key ☟', '').split('\n')
    head = re.sub(r'^\s*7\.\d+\.\d+ ', '', lines[0]).strip()
    name, source, rest = None, '', ''
    hm = re.match(r'([A-Z][A-Za-z&\s]+?): (.*)', head)
    if hm and sub != '7.0':
        name, rest = hm.group(1).strip(), hm.group(2)
    else:
        rest = head
    sm = re.match(r'(.*?\|\s*Question:\s*\S+)\s*(.*)', rest)
    if sm:
        source, rest = sm.group(1).replace('| Question:', 'Q').strip(), sm.group(2)
    text_lines = [rest] + lines[1:]
    cleaned = []
    for ln in text_lines:
        if TAG_LINE.match(ln) and ('-' in ln or re.search(r'\d{4}', ln)):
            continue
        ln = NEXT_HEAD.sub('', ln)
        cleaned.append(ln.rstrip())
    text = re.sub(r'\n\s*\n+', '\n', '\n'.join(cleaned)).strip()
    text = re.sub(r'[ \t]{3,}', '   ', text)
    if not text:
        continue
    key = keys.get(qid)
    if key in (None, 'Q-Q', 'X'):
        key = None
    figure = bool(re.search(r'\b(table|graph|chart|figure|diagram|shown below|given below)\b', text, re.I))
    if name:
        names.setdefault(sub, name)
    groups.setdefault(sub, []).append({'id': qid, 'source': source, 'text': text, 'key': key, 'figure': figure})

names['7.0'] = 'Mixed questions'
names.update({'7.1': 'Year 2019', '7.50': 'LCM & HCF', '7.82': 'Sequences & Series', '7.96': 'TCS Digital'})
index = []
for sub, qs in groups.items():
    fname = sub.replace('.', '-')
    with open(f'{out}/{fname}.js', 'w', encoding='utf-8') as f:
        f.write(f'APT.addBank({json.dumps(sub)}, {json.dumps(qs, ensure_ascii=False, indent=1)});\n')
    index.append({'id': sub, 'title': names.get(sub, sub), 'count': len(qs), 'keyed': sum(1 for q in qs if q['key'])})
index.sort(key=lambda b: b['title'])
with open(f'{out}/index.js', 'w', encoding='utf-8') as f:
    f.write('APT.setBankIndex(' + json.dumps(index, ensure_ascii=False, indent=1) + ');\n')
print(len(index), 'sub-topics,', sum(b['count'] for b in index), 'questions,', sum(b['keyed'] for b in index), 'with keys')
