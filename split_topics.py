from pathlib import Path
from pypdf import PdfReader, PdfWriter
base = Path('public/docs/topics')
base.mkdir(parents=True, exist_ok=True)
source = Path(r'H:\dụ án chống thấm\tài liệu kỹ thuật\AQURON 2000 TDS VN Introduction_1.pdf')
profile = Path(r'H:\dụ án chống thấm\tài liệu kỹ thuật\ITSV Company Profile.pdf')

def split(src, pages, out):
    reader = PdfReader(str(src))
    writer = PdfWriter()
    for p in pages:
        if 1 <= p <= len(reader.pages):
            writer.add_page(reader.pages[p-1])
    with open(base / out, 'wb') as f:
        writer.write(f)

split(source, [2,3], 'chong-tham-tu-ben-trong.pdf')
split(source, [3,4], 'co-che-hydrogel-150mm.pdf')
split(source, [4,6], 'do-ben-bao-hanh-15-nam.pdf')
split(source, [6], 'thi-cong-de-dinh-muc.pdf')
split(source, [5], 'ung-dung-cong-trinh.pdf')
split(profile, [1,3,4], 'danh-muc-san-pham-itsv.pdf')
for p in sorted(base.glob('*.pdf')):
    print(p.name, p.stat().st_size)
