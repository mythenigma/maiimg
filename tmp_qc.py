from pathlib import Path
import random,re

root=Path(r"C:\Users\chanz\Documents\GitHub\maiimg\blog\en")
files=[p for p in root.glob('*.html') if p.name!='index.html']
random.seed(42)
sample=random.sample(files,10)

def grab(pattern,text):
    m=re.search(pattern,text,re.I|re.S)
    return m.group(1).strip() if m else ''

rows=[]
for p in sample:
    txt=p.read_text(encoding='utf-8')
    title=grab(r'<title>(.*?)</title>',txt)
    desc=grab(r'<meta\s+name="description"\s+content="(.*?)"',txt)
    canonical=grab(r'<link\s+rel="canonical"\s+href="(.*?)"',txt)
    h1=grab(r'<h1>(.*?)</h1>',txt)
    og=grab(r'<meta\s+property="og:title"\s+content="(.*?)"',txt)
    schema='yes' if 'application/ld+json' in txt else 'no'
    tips=[]
    if not (45<=len(title)<=70): tips.append(f"title_len={len(title)}")
    if not (120<=len(desc)<=180): tips.append(f"desc_len={len(desc)}")
    if not canonical.endswith('/'+p.stem): tips.append('canonical_mismatch')
    if not h1: tips.append('missing_h1')
    if not og: tips.append('missing_og_title')
    if schema=='no': tips.append('missing_schema')
    rows.append((p.name,title,desc,h1,canonical,';'.join(tips) if tips else 'OK'))

out=Path(r"C:\Users\chanz\.openclaw\workspace\deliverables\maiimg_en_qc_sample.md")
out.parent.mkdir(parents=True,exist_ok=True)
with out.open('w',encoding='utf-8') as f:
    f.write('# MaiIMG EN Blog 抽样质检（10页）\n\n')
    for r in rows:
        f.write(f"## {r[0]}\n")
        f.write(f"- Title: {r[1]}\n")
        f.write(f"- Description: {r[2]}\n")
        f.write(f"- H1: {r[3]}\n")
        f.write(f"- Canonical: {r[4]}\n")
        f.write(f"- QC: {r[5]}\n\n")
print(out)
