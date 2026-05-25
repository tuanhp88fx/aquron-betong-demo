import { heroVideo, projectVideos } from "@/lib/media"
import { YoutubeHero } from "@/components/youtube-hero"
import { YoutubeCard } from "@/components/youtube-card"

const benefits = [
  {
    title: "Chống thấm từ bên trong",
    text: "Colloidal silica hydrogel phản ứng trong lòng bê tông, điền đầy mao mạch và hạn chế ẩm dịch chuyển.",
  },
  {
    title: "Khóa ẩm trước khi hoàn thiện sàn",
    text: "Phù hợp cho nền bê tông chuẩn bị sơn phủ, epoxy, polyurethane, vinyl và các vật liệu hoàn thiện khác.",
  },
  {
    title: "Tăng cứng & giảm bụi",
    text: "Tài liệu kỹ thuật ghi nhận cải thiện khả năng chịu mài mòn và giảm bụi bề mặt bê tông.",
  },
  {
    title: "Không tạo màng bề mặt",
    text: "AQURON 2000 thẩm thấu và trở thành một phần của bê tông, không bong tróc như lớp phủ màng thông thường.",
  },
]

const stats = [
  ["15 năm", "bảo hành chống thấm cho bê tông mới nếu thi công đúng quy trình"],
  ["4–5m²/L", "định mức tham khảo, vật tư gọn nên tối ưu chi phí"],
  ["1 người", "có thể tự làm hạng mục nhỏ, không cần thuê thợ chuyên nghiệp"],
  ["150mm", "khả năng ngấm sâu vào bê tông theo tài liệu kỹ thuật"],
]

const products = [
  { name: "AQURON 2000", href: "#hang-muc-aquron-2000" },
  { name: "AQURON 7000", href: "#hang-muc-aquron-7000" },
  { name: "CONQOR B50", href: "#hang-muc-conqor-b50" },
  { name: "PROTECTACRETE W", href: "#hang-muc-protectacrete-w" },
  { name: "SILGUARD", href: "#hang-muc-protectacrete-w" },
  { name: "DPC Cream", href: "#hang-muc-dpc-cream" },
  { name: "Densacrete 150", href: "#hang-muc-densacrete" },
  { name: "Densacrete Lithium Premium", href: "#hang-muc-densacrete" },
]

const scopeTags = [
  { name: "Sân thượng", href: "#hang-muc-aquron-2000" },
  { name: "Mái bê tông", href: "#hang-muc-aquron-2000" },
  { name: "Nhà vệ sinh cũ", href: "#hang-muc-nha-ve-sinh" },
  { name: "Cổ ống / khe nứt", href: "#hang-muc-nha-ve-sinh" },
  { name: "Tường gạch", href: "#hang-muc-dpc-cream" },
  { name: "Chân tường ẩm", href: "#hang-muc-dpc-cream" },
  { name: "Đá / gạch ngoài trời", href: "#hang-muc-protectacrete-w" },
  { name: "Tường ngoài", href: "#hang-muc-protectacrete-w" },
  { name: "Bê tông mới", href: "#hang-muc-conqor-b50" },
  { name: "Tầng hầm / bể", href: "#hang-muc-conqor-b50" },
  { name: "Cầu cảng / ven biển", href: "#hang-muc-aquron-7000" },
  { name: "Sàn bê tông bụi", href: "#hang-muc-densacrete" },
]

const workScopes = [
  {
    id: "hang-muc-aquron-2000",
    surface: "Sân thượng, mái bê tông lộ thiên",
    issue: "Mưa to thấm xuống trần, nghi cổ ống, chân tường hoặc nền bê tông hút nước.",
    product: "AQURON 2000",
    process: "Xử lý kín cổ ống/khe nứt trước, làm sạch nền bê tông, làm ẩm không đọng nước rồi phun AQURON 2000 2 lớp ướt-trên-ướt.",
    durability: "Tài liệu nêu hydrogel trở thành một phần của bê tông; bê tông mới thi công đúng quy trình có bảo hành chống thấm 15 năm.",
    note: "Hạng mục nhỏ có thể tự làm, không cần thuê thợ nếu nền đã lộ bê tông và làm đúng hướng dẫn.",
  },
  {
    id: "hang-muc-nha-ve-sinh",
    surface: "Nhà vệ sinh cũ, sàn ẩm hoặc thấm xuống tầng dưới",
    issue: "Nước thường đi qua ron gạch, cổ ống, khe nứt hoặc lớp bê tông dưới gạch.",
    product: "AQURON 2000 + xử lý khe/cổ ống phù hợp",
    process: "Xác định đường nước trước; nếu xử lý được tới lớp bê tông thì làm sạch, làm ẩm và phun AQURON 2000. Các khe/cổ ống phải trám kín riêng trước khi phun.",
    durability: "AQURON 2000 không tạo màng bề mặt nên hạn chế bong tróc kiểu lớp phủ; hiệu quả phụ thuộc việc xử lý đúng điểm rò.",
    note: "Phù hợp sửa hạng mục nhỏ khi chủ nhà muốn tự xử lý theo hướng dẫn.",
  },
  {
    id: "hang-muc-dpc-cream",
    surface: "Tường gạch, chân tường bị ẩm và bong sơn",
    issue: "Ẩm mao dẫn từ nền lên làm bong sơn, mốc, xuất hiện muối trắng ở chân tường.",
    product: "DPC Cream",
    process: "Khoan lỗ 12mm theo mạch vữa ngang cách sàn khoảng 150mm, hút sạch bụi rồi bơm kem silane/siloxane vào mạch vữa.",
    durability: "Kem thẩm thấu vào vữa/gạch và tạo lớp chặn ẩm ngang; cần vài ngày để ngấm và khoảng 7 ngày để hoạt hóa hoàn toàn.",
    note: "Dụng cụ phổ thông: máy khoan, mũi 12mm, súng bơm keo và máy hút bụi.",
  },
  {
    id: "hang-muc-protectacrete-w",
    surface: "Đá, gạch, tường ngoài, gạch lát và vật liệu rỗng",
    issue: "Bề mặt hút nước, rêu mốc, phấn hóa hoặc bẩn do nước mưa.",
    product: "PROTECTACRETE W hoặc SILGUARD",
    process: "Bề mặt phải khô sạch, vá nứt trước; phun/quét/lăn cho bão hòa. Bề mặt đứng phun theo dải 30–40cm, lớp sau làm ngay khi lớp trước vừa ngấm.",
    durability: "Sealer thấm vào mao mạch, giảm hút nước nhưng vẫn cho hơi ẩm thoát; đóng rắn từ 24 giờ đến 7 ngày tùy điều kiện.",
    note: "Nên test một góc nhỏ trước vì một số vật liệu có thể sẫm màu nhẹ.",
  },
  {
    id: "hang-muc-conqor-b50",
    surface: "Bê tông mới: bể, tầng hầm, sàn/vách cần chống thấm từ đầu",
    issue: "Muốn chống thấm ngay trong khối bê tông thay vì đợi thấm rồi sửa.",
    product: "CONQOR B50",
    process: "Pha phụ gia vào khoảng 70% lượng nước trộn trước khi thêm xi măng/cốt liệu; trộn đều khoảng 2 phút theo cấp phối.",
    durability: "Phụ gia tạo gel ưa nước trong bê tông, hỗ trợ chống thấm từ bên trong và cải thiện khả năng tự vá vết nứt nhỏ không dịch chuyển.",
    note: "Không thay thế waterstop/khe nối và không vá được vết nứt động.",
  },
  {
    id: "hang-muc-aquron-7000",
    surface: "Cầu cảng, bãi xe, bê tông gần biển hoặc môi trường clorua",
    issue: "Nước và ion clorua xâm nhập gây ăn mòn cốt thép, giảm tuổi thọ kết cấu.",
    product: "AQURON 7000 hoặc Solid Silane",
    process: "Làm sạch bề mặt có khả năng thấm, phun nhiều lớp để đủ liều; ưu tiên AQURON 7000 khi cần kiểm soát clorua trong bê tông.",
    durability: "Tài liệu AQURON 7000 nêu khả năng ngấm 100–150mm, giảm nước thấm dưới áp lực và hỗ trợ chặn ion clorua.",
    note: "Phù hợp công trình yêu cầu độ bền kết cấu hơn là sửa rò nước cục bộ.",
  },
  {
    id: "hang-muc-densacrete",
    surface: "Sàn bê tông nhà xưởng, kho, bãi xe cần tăng cứng và giảm bụi",
    issue: "Sàn bê tông bị bụi, yếu bề mặt, dễ bám bẩn hoặc cần hoàn thiện đánh bóng.",
    product: "Densacrete 150 hoặc Densacrete Lithium Premium",
    process: "Bề mặt bê tông phải sạch, khô và đủ tuổi; phun hoặc lăn đều, giữ bề mặt ướt khoảng 20 phút, xử lý phần hóa chất thừa trước khi khô.",
    durability: "Densifier thẩm thấu để tăng cứng, giảm bụi và hỗ trợ bề mặt bền hơn khi sử dụng; định mức tài liệu nêu khoảng 5–20m²/L hoặc 10–40m²/L tùy dòng và nền.",
    note: "Phù hợp sàn cần bền, sạch, dễ bảo trì hơn; không dùng như thuốc vá rò nước áp lực.",
  },
]

const applications = [
  "Sàn hầm, vách hầm, tầng hầm chịu ẩm",
  "Mái bê tông, sân thượng, khu vực ngoài trời",
  "Sàn bãi đỗ xe, nhà xưởng, kho vận",
  "Cầu cảng, bến cảng, công trình gần môi trường muối biển",
  "Nền bê tông trước khi sơn phủ epoxy/vinyl/polyurethane",
  "Công trình bê tông cũ cần cải tạo và kéo dài tuổi thọ",
]

const process = [
  "Làm sạch bề mặt, loại bỏ bụi bẩn, dầu mỡ, lớp phủ cũ và nước đọng.",
  "Làm ẩm bề mặt để tăng khả năng thẩm thấu, nhưng không để vũng nước.",
  "Phun AQURON 2000 bằng máy phun tạo sương, thường tối thiểu 2 lớp theo hai chiều vuông góc.",
  "Giữ bề mặt bão hòa, không để lớp đầu khô trước khi phun lớp tiếp theo.",
  "Chờ sản phẩm thẩm thấu hoàn toàn trước các bước hoàn thiện; với lớp phủ cần tuân thủ hướng dẫn kỹ thuật.",
]

// Video list đã chuyển sang `lib/media.ts` (YouTube embed). Giữ alias để tương thích với block render bên dưới.
const videos = projectVideos

const _legacyVideosBackup = [
  { src: "/videos/project/7799149296493.mp4", title: "Video giới thiệu sản phẩm" },
  { src: "/videos/project/7799149300226.mp4", title: "Video thi công phun thực tế" },
  { src: "/videos/project/7799162075409.mp4", title: "Video công trình trước & sau xử lý" },
  { src: "/videos/project/7799162157151.mp4", title: "Video giải thích cơ chế hydrogel" },
  { src: "/videos/project/7799164411842.mp4", title: "Video phản hồi khách hàng/công trình" },
  { src: "/videos/project/7799164966224.mp4", title: "Video xử lý bề mặt bê tông" },
  { src: "/videos/project/7799165170485.mp4", title: "Video hiện trường thi công" },
  { src: "/videos/project/7799165255536.mp4", title: "Video kiểm tra bề mặt sau xử lý" },
  { src: "/videos/project/7799165476156.mp4", title: "Video minh họa chống thấm" },
  { src: "/videos/project/7799166005107.mp4", title: "Video ứng dụng công trình" },
  { src: "/videos/project/7799269729921.mp4", title: "Video sản phẩm thực tế" },
]

const projectImages = [
  {
    src: "/images/project/z7799161967409_aceef3b57f68e363c127b7e776cbc5b9.jpg",
    title: "Ảnh sản phẩm / hiện trường 01",
  },
  {
    src: "/images/project/z7799162305872_d7a54ef8249236d04ae41aae79108c01.jpg",
    title: "Ảnh sản phẩm / hiện trường 02",
  },
]

const technicalTopics = [
  {
    src: "/images/pdf/aquron-page-02.jpg",
    title: "Chống thấm bê tông từ bên trong",
    text: "AQURON 2000 thẩm thấu vào mao mạch bê tông, cố định ẩm và hạn chế nước xâm nhập từ bên ngoài.",
    href: "/docs/topics/chong-tham-tu-ben-trong.pdf",
    cta: "Tìm hiểu thêm",
  },
  {
    src: "/images/pdf/aquron-page-03.jpg",
    title: "Cơ chế hydrogel ngấm sâu tới 150mm",
    text: "Colloidal silica phản ứng trong lỗ rỗng bê tông, tạo hydrogel bền vững và trở thành một phần của bê tông.",
    href: "/docs/topics/co-che-hydrogel-150mm.pdf",
    cta: "Tìm hiểu thêm",
  },
  {
    src: "/images/pdf/aquron-page-04.jpg",
    title: "Độ bền & hiệu quả lâu dài",
    text: "Tài liệu nêu chống thấm vĩnh viễn, giảm ẩm dịch chuyển và bảo hành chống thấm bê tông mới 15 năm khi làm đúng quy trình.",
    href: "/docs/topics/do-ben-bao-hanh-15-nam.pdf",
    cta: "Tìm hiểu thêm",
  },
  {
    src: "/images/pdf/aquron-page-06.jpg",
    title: "Thi công dễ: phun 2 lớp, không cần mài",
    text: "Định mức khoảng 4–5m²/L, thi công bằng máy phun sương; bề mặt đủ thấm thì không cần mài bê tông.",
    href: "/docs/topics/thi-cong-de-dinh-muc.pdf",
    cta: "Tìm hiểu thêm",
  },
  {
    src: "/images/pdf/aquron-page-05.jpg",
    title: "Ứng dụng công trình thực tế",
    text: "Phù hợp tầng hầm, mái, bãi đỗ xe, nhà xưởng, cầu cảng và bề mặt cần hoàn thiện sơn phủ.",
    href: "/docs/topics/ung-dung-cong-trinh.pdf",
    cta: "Tìm hiểu thêm",
  },
  {
    src: "/images/pdf/aquron-page-01.jpg",
    title: "Nhà phân phối & hồ sơ năng lực ITSV",
    text: "ITSV phân phối các sản phẩm Markham/AQURON tại Việt Nam, có thông tin liên hệ và hồ sơ công ty.",
    href: "/docs/topics/danh-muc-san-pham-itsv.pdf",
    cta: "Tìm hiểu thêm",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1f2a24]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f6f2ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-serif text-2xl font-semibold tracking-tight text-[#114234]">
            CHỐNG THẤM CÔNG TRÌNH
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#385047] md:flex">
            <a href="#loi-ich">Lợi ích</a>
            <a href="#san-pham">Hạng mục</a>
            <a href="#ung-dung">Ứng dụng</a>
            <a href="#hinh-anh">Tư liệu</a>
            <a href="#video">Video</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
          <a
            href="tel:0904128909"
            className="rounded-full bg-[#114234] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2f25]"
          >
            Gọi 0904 128 909
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,111,86,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(171,129,63,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-full border border-[#114234]/20 bg-white/60 px-4 py-2 text-sm font-semibold text-[#114234]">
              Hệ sản phẩm chống thấm • Tư vấn đúng hạng mục
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.96] tracking-tight text-[#143c31] md:text-7xl">
              Đủ giải pháp chống thấm: từ bê tông, tường, sàn đến thiết bị thi công.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5e56]">
              Chuyên chống thấm hầm, tầng hầm, bể nước, hố thang máy — chịu được áp suất thủy tĩnh cao, ngăn nước rò ngược từ mạch nước ngầm. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard… chọn đúng sản phẩm theo bề mặt và hạng mục, triển khai toàn quốc. Hotline tư vấn: 0904 128 909.
            </p>
            <div className="mt-6 space-y-3">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b763a]">Theo sản phẩm</p>
                <div className="flex flex-wrap gap-2">
                  {products.map((product) => (
                    <a key={product.name} href={product.href} className="rounded-full border border-[#114234]/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#114234] transition hover:border-[#114234]/35 hover:bg-white hover:shadow-sm">
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9b763a]">Theo hạng mục</p>
                <div className="flex flex-wrap gap-2">
                  {scopeTags.map((scope) => (
                    <a key={scope.name} href={scope.href} className="rounded-full border border-[#9b763a]/20 bg-[#f7ead2]/80 px-3 py-1.5 text-xs font-semibold text-[#7a5a2e] transition hover:border-[#9b763a]/45 hover:bg-[#fff3dc] hover:shadow-sm">
                      {scope.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lien-he" className="rounded-full bg-[#114234] px-6 py-3 text-center font-semibold text-white shadow-lg shadow-[#114234]/20 hover:bg-[#0b2f25]">
                Gọi tư vấn ngay
              </a>
              <a href="tel:0904128909" className="rounded-full border border-[#114234]/25 bg-white/70 px-6 py-3 text-center font-semibold text-[#114234] hover:bg-white">
                0904 128 909
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#173f35] text-white">
              {/* Hero video bây giờ embed từ YouTube. Cấu hình ID tại `lib/media.ts` -> heroVideo.youtubeId */}
              <YoutubeHero
                youtubeId={heroVideo.youtubeId}
                posterUrl={heroVideo.posterUrl}
                title={heroVideo.caption}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071a15] via-[#071a15]/20 to-transparent" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f4d28a]">Video thi công thực tế</p>
                <h2 className="mt-3 font-serif text-5xl leading-none">Tự phun dễ dàng</h2>
                <p className="mt-3 text-white/80">Không cần thuê thợ cho hạng mục nhỏ: làm sạch, làm ẩm, phun đều theo hướng dẫn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loi-ich" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Lợi ích chính</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Giá hợp lý, thi công nhanh, nhận triển khai toàn quốc, độ bền chống thấm lên tới 15 năm.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-[#114234]/15 bg-[#114234] p-6 text-white shadow-sm">
              <p className="font-serif text-4xl font-semibold">{value}</p>
              <p className="mt-2 text-sm leading-6 text-white/78">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#143c31]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#58675f]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="san-pham" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border border-[#114234]/10 bg-white/70 p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Hạng mục công trình</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Chọn theo bề mặt cần xử lý, không chọn sản phẩm theo cảm tính.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#58675f]">Từ tài liệu AQURON, CONQOR và Tech-Dry: mỗi hạng mục cần xem bề mặt, nguồn nước, khe nứt/cổ ống, cách thi công và độ bền mong muốn. Bảng dưới giúp chủ nhà chọn nhanh hướng xử lý phù hợp.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workScopes.map((scope) => (
              <article id={scope.id} key={scope.surface} className="scroll-mt-24 rounded-3xl border border-[#114234]/12 bg-[#f6f2ea] p-5 shadow-sm transition target:border-[#114234]/45 target:bg-white target:shadow-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#114234] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">{scope.product}</span>
                  <span className="rounded-full border border-[#114234]/15 bg-white/70 px-3 py-1 text-xs font-semibold text-[#114234]">Dễ tư vấn theo hạng mục</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#143c31]">{scope.surface}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-6 text-[#4d5e56]">
                  <div>
                    <dt className="font-bold text-[#8a642d]">Vấn đề thường gặp</dt>
                    <dd>{scope.issue}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#8a642d]">Quy trình thi công</dt>
                    <dd>{scope.process}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#8a642d]">Độ bền / cơ sở kỹ thuật</dt>
                    <dd>{scope.durability}</dd>
                  </div>
                  <div className="rounded-2xl bg-white/75 p-3 text-[#114234]">
                    <dt className="font-bold">Ghi chú bán hàng</dt>
                    <dd>{scope.note}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ung-dung" className="bg-[#123c31] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e1bf78]">Ứng dụng</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Phù hợp nhiều hạng mục bê tông trong nhà và ngoài trời.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Giải pháp phù hợp cho các hạng mục cần kiểm soát ẩm, tăng độ bền bề mặt và kéo dài tuổi thọ kết cấu bê tông. Có thể tư vấn vật tư, quy trình và đội thi công cho công trình ở nhiều tỉnh thành trên cả nước.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {applications.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-5 text-white/85">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hinh-anh" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Tài liệu kỹ thuật có thể mở</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Tư liệu kỹ thuật, công dụng và công trình tham khảo.</h2>
          <p className="mt-4 leading-7 text-[#58675f]">Mỗi chủ đề bên dưới đã được tách thành file PDF ngắn chỉ gồm vài trang liên quan, không mở cả tài liệu dài. Chủ đề tập trung vào các điểm dễ quảng bá nhất: dễ thi công, chống thấm từ bên trong, độ bền, ngấm sâu, ứng dụng công trình và danh mục sản phẩm.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalTopics.map((topic) => (
            <a key={topic.title} href={topic.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[3/4] overflow-hidden bg-[#e7dcc7]">
                <img src={topic.src} alt={topic.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#143c31]">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65726c]">{topic.text}</p>
                <p className="mt-4 inline-flex rounded-full bg-[#114234] px-4 py-2 text-sm font-semibold text-white">{topic.cta}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Ảnh thi công thực tế</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projectImages.map((image) => (
              <article key={image.src} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-[#e7dcc7]">
                  <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#143c31]">{image.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#65726c]">Hình ảnh ghi nhận tại hiện trường, phục vụ minh họa quy trình xử lý và hoàn thiện bề mặt bê tông.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Khu vực video sản phẩm</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Video sản phẩm, quy trình thi công và hình ảnh công trình thực tế.</h2>
            <p className="mt-4 leading-7 text-[#58675f]">Tổng hợp video giới thiệu sản phẩm, quy trình phun và hình ảnh công trình thực tế. Phần video test chống thấm/khóa ẩm đã được bỏ để trang gọn và tập trung hơn.</p>
          </div>
          <a href="#lien-he" className="rounded-full bg-[#114234] px-6 py-3 text-center font-semibold text-white">Tư vấn qua Zalo/Điện thoại</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.youtubeId} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <YoutubeCard youtubeId={video.youtubeId} title={video.title} />
              <div className="p-5">
                <h3 className="font-bold text-[#143c31]">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65726c]">Tư liệu video phục vụ giới thiệu quy trình, hiện trường và khả năng ứng dụng của AQURON 2000 trong thực tế.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="thi-cong" className="border-y border-black/10 bg-white/55 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Quy trình thi công</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Thi công phun đơn giản, tiết kiệm nhân công và thời gian.</h2>
            <p className="mt-5 leading-7 text-[#58675f]">Tài liệu kỹ thuật nêu định mức khoảng 4–5m²/L tùy độ rỗng bê tông, thường phun tối thiểu 2 lớp. Với bề mặt đủ thấm, thi công AQURON 2000 không yêu cầu phải mài bê tông.</p>
          </div>
          <div className="space-y-4">
            {process.map((item, idx) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-black/10 bg-[#f6f2ea] p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#114234] font-bold text-white">{idx + 1}</div>
                <p className="leading-7 text-[#4d5e56]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-[#e7dcc7] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#8a642d]">Thông số sản phẩm</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31]">Gốc nước, trong suốt, không VOC.</h2>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {["Dạng: lỏng", "Màu: trong suốt", "Đóng gói: can 20L / IBC 1000L", "Tỷ trọng: 1.09–1.10", "pH: 12±", "Điểm sôi: 110°C", "VOC: Không", "Flammability: Không"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/70 p-4 font-medium text-[#31423a]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lien-he" className="bg-[#0d2e25] px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e1bf78]">Liên hệ tư vấn</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Gửi ảnh hiện trạng để được tư vấn hướng xử lý phù hợp.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Đội ngũ tư vấn sẽ đánh giá hiện trạng bề mặt, mục tiêu chống thấm hoặc kiểm soát ẩm, từ đó đề xuất quy trình xử lý phù hợp cho từng hạng mục.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0904128909" className="rounded-full bg-white px-7 py-3 font-bold text-[#0d2e25]">Gọi 0904 128 909</a>
            <a href="https://demo-site-three-fawn.vercel.app" className="rounded-full border border-white/25 px-7 py-3 font-bold text-white">Xem tài liệu sản phẩm</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071a15] px-5 py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© AQURON 2000. Giải pháp xử lý bê tông, kiểm soát ẩm và chống thấm từ bên trong.</p>
          <p>Tư vấn và triển khai công trình trên toàn quốc.</p>
        </div>
      </footer>
    </main>
  )
}
