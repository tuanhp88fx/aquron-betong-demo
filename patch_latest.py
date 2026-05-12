from pathlib import Path
p=Path('app/page.tsx')
s=p.read_text(encoding='utf-8')
import re
s=re.sub(r'cta: "[^"]+"', 'cta: "Tìm hiểu thêm"', s)
s=s.replace('AQURON 2000\n          </a>', 'Chống thấm Luân\n          </a>', 1)
s=s.replace('href="tel:0904128909"', 'href="tel:0944209157"')
s=s.replace('Gọi tư vấn', 'Gọi Luân 0944 209 157')
s=s.replace('Xử lý bê tông tối ưu • Tự phun dễ dàng', 'Hệ sản phẩm chống thấm • Tư vấn bởi Luân')
s=s.replace('Chống thấm bê tông dễ làm, không cần thuê thợ chuyên nghiệp.', 'Đủ giải pháp chống thấm: từ bê tông, tường, sàn đến thiết bị thi công.')
s=s.replace('AQURON 2000 là hóa chất dạng phun gốc colloidal silica hydrogel. Chỉ cần làm sạch bề mặt, làm ẩm và phun đều 2 lớp; người chưa có kinh nghiệm vẫn có thể thi công đúng hướng dẫn cho các hạng mục nhỏ.', 'Từ AQURON 2000, AQURON 7000, CONQOR, Waterpel, Silguard đến MagicGrip/Barracuda — chọn đúng sản phẩm theo bề mặt và hạng mục. Hotline: Luân chống thấm 0944 209 157.')
s=s.replace('Nhận báo giá nhanh', 'Gọi Luân chống thấm')
s=s.replace('Nhận tư vấn hạng mục', '0944 209 157')
needle='''            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5e56]">
              Từ AQURON 2000, AQURON 7000, CONQOR, Waterpel, Silguard đến MagicGrip/Barracuda — chọn đúng sản phẩm theo bề mặt và hạng mục. Hotline: Luân chống thấm 0944 209 157.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">'''
insert='''            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5e56]">
              Từ AQURON 2000, AQURON 7000, CONQOR, Waterpel, Silguard đến MagicGrip/Barracuda — chọn đúng sản phẩm theo bề mặt và hạng mục. Hotline: Luân chống thấm 0944 209 157.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {products.slice(0, 8).map((product) => (
                <span key={product} className="rounded-full border border-[#114234]/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#114234]">{product}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">'''
s=s.replace(needle, insert, 1)
p.write_text(s, encoding='utf-8')
