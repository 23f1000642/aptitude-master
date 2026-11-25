"""Extract the chart/table images that belong to each question.

Usage: python3 tools/extract_figures.py <aptitude.pdf> <first_page> <last_page> <out_dir>
Writes <out_dir>/<xref>.jpg for every image and <out_dir>/map.json: {question id: [file, ...]}.
An image belongs to the most recent question header ("1.1.3 ...") above it in reading order.
"""
import json
import os
import re
import sys

import pymupdf

pdf, first, last, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
doc = pymupdf.open(pdf)
HEADER = re.compile(r'^(\d+\.\d+\.\d+)(?:\s|$)')
mapping, saved = {}, set()
map_path = os.path.join(out, 'map.json')
if os.path.exists(map_path):
    mapping = json.load(open(map_path))

current = None
for pno in range(first - 1, last):
    page = doc[pno]
    items = []
    for b in page.get_text('blocks'):
        x0, y0, x1, y1, text = b[:5]
        m = HEADER.match(text.strip())
        if m:
            items.append((y0, x0, 'q', m.group(1)))
    for info in page.get_image_info(xrefs=True):
        if info.get('xref'):
            x0, y0, x1, y1 = info['bbox']
            items.append((y0, x0, 'img', info['xref']))
    for _, _, kind, val in sorted(items):
        if kind == 'q':
            current = val
            continue
        if not current:
            continue
        img = None
        name = None
        for ext in ('jpg', 'jpeg', 'png'):
            if os.path.exists(os.path.join(out, f'{val}.{ext}')):
                name = f'{val}.{ext}'
        if not name:
            img = doc.extract_image(val)
            ext = 'jpg' if img['ext'] in ('jpeg', 'jpg') else img['ext']
            name = f'{val}.{ext}'
            with open(os.path.join(out, name), 'wb') as f:
                f.write(img['image'])
        saved.add(val)
        lst = mapping.setdefault(current, [])
        if name not in lst:
            lst.append(name)

json.dump(mapping, open(map_path, 'w'), indent=0, sort_keys=True)
print(len(mapping), 'questions with figures,', len(saved), 'images on pages', first, '-', last)
