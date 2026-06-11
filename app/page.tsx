import SeoKeywordsStrip from "@/components/seo-keywords-strip"
import { heroVideo, projectVideos } from "@/lib/media"
import { YoutubeHero } from "@/components/youtube-hero"
import { YoutubeCard } from "@/components/youtube-card"
import { YoutubeLoopShort } from "@/components/youtube-loop-short"
import { Reveal } from "@/components/reveal"
import { HeroIntro } from "@/components/hero-intro"
import { Float } from "@/components/float"
import { TransitionLink } from "@/components/transition-link"

const homeSeoKeywords = [
  "chống thấm nano",
  "chống thấm công nghệ Úc",
  "nano Úc",
  "AQURON 2000",
  "chống thấm bê tông",
  "chống thấm tầng hầm",
  "chống thấm bể nước",
  "chống thấm hố thang máy",
]

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
  ["Chịu áp", "kết cấu tự chống thấm, chịu được áp suất thủy tĩnh từ mạch nước ngầm"],
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
  { name: "Hầm ngầm / tầng hầm", href: "#hang-muc-conqor-b50" },
  { name: "Hố thang máy", href: "#hang-muc-conqor-b50" },
  { name: "Bể nước / bể ngầm", href: "#hang-muc-conqor-b50" },
  { name: "Sân thượng", href: "#hang-muc-aquron-2000" },
  { name: "Mái bê tông", href: "#hang-muc-aquron-2000" },
  { name: "Nhà vệ sinh cũ", href: "#hang-muc-nha-ve-sinh" },
  { name: "Cổ ống / khe nứt", href: "#hang-muc-nha-ve-sinh" },
  { name: "Tường gạch", href: "#hang-muc-dpc-cream" },
  { name: "Chân tường ẩm", href: "#hang-muc-dpc-cream" },
  { name: "Đá / gạch ngoài trời", href: "#hang-muc-protectacrete-w" },
  { name: "Tường ngoài", href: "#hang-muc-protectacrete-w" },
  { name: "Bê tông mới", href: "#hang-muc-conqor-b50" },
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
    durability: "Tài liệu nêu hydrogel trở thành một phần của bê tông, không tạo màng bề mặt nên không bong tróc, không phồng rộp.",
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
    surface: "Hầm ngầm, tầng hầm, hố thang máy, bể nước — bê tông mới cần chống thấm từ đầu",
    issue: "Muốn chống thấm ngay trong khối bê tông để chịu được áp suất thủy tĩnh từ mạch nước ngầm, không đợi thấm rồi sửa.",
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
    text: "Tài liệu nêu chống thấm vĩnh viễn, giảm ẩm dịch chuyển; hoạt chất nằm trong mao mạch bê tông nên không bong, không phồng rộp.",
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


const importBrands = [
  {
    brand: "Tech-Dry®",
    logo: "/brands/tech-dry.png",
    company: "Tech Dry Building Protection System Pty Ltd",
    origin: "Melbourne, Victoria, Australia",
    note: "Hệ sản phẩm bảo vệ và chống thấm vật liệu xây dựng."
  },
  {
    brand: "MagicGRIP",
    logo: "/brands/magicgrip.png",
    company: "MagicGRIP International Pty Ltd",
    origin: "Sydney, NSW, Australia",
    note: "Giải pháp phụ trợ thi công và hoàn thiện bề mặt."
  },
  {
    brand: "RussTech",
    logo: "/brands/russtech.png",
    company: "RussTech Inc",
    origin: "Kentucky, United States of America",
    note: "Phụ gia và giải pháp kỹ thuật bê tông từ Mỹ."
  },
  {
    brand: "EMS",
    logo: "/brands/ems.png",
    company: "Environmental Manufacturing Solutions Distribution, LLC",
    origin: "Melbourne, Florida 32904, United States of America",
    note: "Giải pháp sản xuất và phân phối vật liệu chuyên dụng."
  },
  {
    brand: "MARKHAM",
    logo: "/brands/markham.png",
    company: "Markham Global UK, Australia, NZ",
    origin: "43 Niven Street, Onekawa, Napier 4110",
    note: "Thương hiệu AQURON / CONQOR, công nghệ xử lý bê tông thẩm thấu."
  },
]

const productGallery = [
  {
    name: "AQURON 2000",
    tag: "Spray-on hydrogel",
    image: "/products/aquron-2000.jpg",
    text: "Hydrogel colloidal silica công nghệ Úc, phun trực tiếp lên bê tông, thấm sâu tới 150mm. Chống thấm + kiểm soát ẩm bề mặt.",
    href: "#hang-muc-aquron-2000",
  },
  {
    name: "AQURON 7000",
    tag: "Corrosion protection",
    image: "/products/aquron-7000.png",
    text: "Dòng cao cấp chuyên kết cấu hạ tầng, cầu cảng, bãi xe — chặn ion clorua, bảo vệ cốt thép khỏi ăn mòn.",
    href: "#hang-muc-aquron-7000",
  },
  {
    name: "CONQOR B50",
    tag: "Concrete admix",
    image: "/products/conqor-b50.jpg",
    text: "Phụ gia trộn trực tiếp vào bê tông tươi. Chống thấm từ bên trong ngay từ đầu, chịu được áp suất thủy tĩnh cao.",
    href: "#hang-muc-conqor-b50",
  },
  {
    name: "PROTECTACRETE W",
    tag: "Penetrating sealer",
    image: "/products/protectacrete-w.jpg",
    text: "Sealer silane/siloxane gốc nước cho tường gạch, đá, bê tông lộ. Thấm sâu, chống ẩm mao dẫn, không đổi màu bề mặt.",
    href: "#hang-muc-protectacrete-w",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#1f2a24]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#ffffff]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-2">
            <a
              href="tel:0904128909"
              className="rounded-full bg-[#c8102e] px-3 py-1.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#a00d24] md:px-4 md:py-2"
            >
              Gọi 0904 128 909
            </a>
            <a href="#top" className="text-sm font-medium leading-6 text-[#1a1a1a] md:text-sm">
              <span className="block">Công ty TNHH Dịch vụ và Thương mại Quốc Tế Việt • 40 ngõ 20 Cát Linh, P Cát Linh, Q Đống Đa, Hà Nội</span>
            </a>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#3a3a3a] md:flex">
            <a href="#loi-ich">Lợi ích</a>
            <a href="#san-pham">Hạng mục</a>
            <a href="#ung-dung">Ứng dụng</a>
            <a href="#hinh-anh">Tư liệu</a>
            <a href="#video">Video</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-black/10 bg-white text-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,16,46,0.10),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(200,16,46,0.08),transparent_45%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
          <div className="flex flex-col justify-center">
            <HeroIntro className="flex flex-col">
            <div className="mb-5 inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full border border-[#c8102e]/30 bg-[#fff5f6] px-4 py-2 text-sm font-semibold text-[#c8102e]">
              <span>Sản phẩm nhập khẩu 100% từ Mỹ, Úc</span>
              <span className="hidden text-[#c8102e]/45 sm:inline">•</span>
              <span className="inline-flex flex-wrap items-center gap-1.5">
                {importBrands.map((brand) => (
                  <span key={brand.brand} className="inline-flex h-7 items-center gap-1.5 rounded-full border border-[#c8102e]/20 bg-white px-2 py-0.5 text-[11px] font-bold leading-5 text-[#1a1a1a] shadow-sm">
                    <img src={brand.logo} alt={brand.brand} className="max-h-4 max-w-[52px] object-contain" />
                    <span className="hidden sm:inline">{brand.brand}</span>
                  </span>
                ))}
              </span>
            </div>
            <h1 className="font-serif text-5xl font-semibold uppercase leading-[0.96] tracking-tight text-[#1a1a1a] md:text-7xl">
              CHỐNG THẤM NANO CHUẨN CÔNG NGHỆ ÚC.
            </h1>
            <p className="mt-4 max-w-2xl text-base font-medium italic leading-7 text-[#c8102e] md:text-lg">
              Giải pháp thẩm thấu sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong, hạn chế bong tróc và phồng rộp như các lớp phủ bề mặt.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5e56]">
              Chuyên chống thấm hầm, tầng hầm, bể nước, hố thang máy — chịu được áp suất thủy tĩnh cao, ngăn nước rò ngược từ mạch nước ngầm. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard… chọn đúng sản phẩm theo bề mặt và hạng mục, triển khai toàn quốc. Hotline tư vấn: 0904 128 909.
            </p>
            <div className="mt-6 space-y-3">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c8102e]">Theo sản phẩm</p>
                <div className="flex flex-wrap gap-2">
                  {products.map((product) => (
                    <a key={product.name} href={product.href} className="rounded-full border border-[#1a1a1a]/15 bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#1a1a1a] transition hover:border-[#1a1a1a]/35 hover:bg-white hover:shadow-sm">
                      {product.name}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#c8102e]">Theo hạng mục</p>
                <div className="flex flex-wrap gap-2">
                  {scopeTags.map((scope) => (
                    <a key={scope.name} href={scope.href} className="rounded-full border border-[#c8102e]/20 bg-[#fdf2f3]/80 px-3 py-1.5 text-xs font-semibold text-[#c8102e] transition hover:border-[#c8102e]/45 hover:bg-[#ffffff] hover:shadow-sm">
                      {scope.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-stretch gap-3">
              <a
                href="tel:0904128909"
                className="flex items-center justify-center gap-2 rounded-full bg-[#c8102e] px-8 py-4 text-center text-xl font-bold uppercase tracking-wide text-white shadow-md shadow-[#c8102e]/25 hover:bg-[#a00d24] sm:text-2xl"
              >
                <span>Gọi tư vấn:</span>
                <span className="font-bold tracking-wide">0904 128 909</span>
              </a>
              <TransitionLink
                href="/tin-tuc"
                className="flex items-center justify-center rounded-full border-2 border-[#c8102e] bg-white px-8 py-4 text-center text-xl font-bold uppercase tracking-wide text-[#c8102e] shadow-md transition hover:bg-[#c8102e] hover:text-white sm:text-2xl"
              >
                Tin tức hoạt động
              </TransitionLink>
              <TransitionLink
                href="/video-test-chong-nuoc"
                className="flex items-center justify-center rounded-full border-2 border-[#c8102e] bg-white px-8 py-4 text-center text-xl font-bold uppercase tracking-wide text-[#c8102e] shadow-md transition hover:bg-[#c8102e] hover:text-white sm:text-2xl"
              >
                Video test chống nước thực tế
              </TransitionLink>
            </div>
            </HeroIntro>
          </div>

          <div className="relative">
            <Float amplitude={10} duration={4} className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#c8102e]/15 via-transparent to-[#c8102e]/10 blur-2xl" />
            <Reveal y={28} className="relative rounded-[2rem] border border-[#c8102e]/15 bg-white p-4 shadow-2xl shadow-[#c8102e]/10">
              <div className="mb-3 overflow-hidden rounded-[1.25rem]">
                <img
                  src="/tin-tuc-vinh-phuc.png"
                  alt="Chống thấm tại dự án nhà ở xã hội Vĩnh Phúc"
                  className="block h-auto w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <YoutubeLoopShort youtubeId="jfljg0x4lfs" title="Chống thấm tại dự án nhà ở xã hội Vĩnh Phúc 1" />
                <YoutubeLoopShort youtubeId="9onQ5hqS5YE" title="Chống thấm tại dự án nhà ở xã hội Vĩnh Phúc 2" />
              </div>
              <div className="mt-4 flex flex-col gap-1.5 px-2 pb-2">
                <p className="text-xl font-extrabold uppercase tracking-[0.3em] text-[#c8102e] md:text-2xl">Tin tức nổi bật</p>
                <p className="text-base text-[#1a1a1a]/80 md:text-lg">Chống thấm tại dự án nhà ở xã hội Vĩnh Phúc.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      <section id="loi-ich" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Lợi ích chính</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Giá hợp lý, thi công nhanh, nhận triển khai toàn quốc, chống thấm bền lâu nhờ hoạt chất nằm trong mao mạch bê tông.</h2>
        </div>
        <Reveal stagger className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-3xl border border-[#c8102e]/30 bg-[#c8102e] p-6 text-white shadow-sm">
              <p className="font-serif text-4xl font-semibold">{value}</p>
              <p className="mt-2 text-sm leading-6 text-white/78">{label}</p>
            </div>
          ))}
        </Reveal>
        <Reveal stagger className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#58675f]">{item.text}</p>
            </article>
          ))}
        </Reveal>
      </section>

      <section id="san-pham-list" className="mx-auto max-w-7xl px-5 pb-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Dòng sản phẩm chính</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Hệ sản phẩm chống thấm nhập khẩu 100% từ nước ngoài.</h2>
          <p className="mt-4 leading-7 text-[#4d5e56]">Danh mục tập trung các thương hiệu từ Úc và Mỹ như MARKHAM/AQURON, Tech-Dry, MagicGRIP, RussTech và EMS. Mỗi sản phẩm phục vụ một nhu cầu khác nhau: xử lý bề mặt, chống ăn mòn cốt thép, phụ gia bê tông mới, hay sản phẩm sealer thẩm thấu không tạo màng.</p>
        </div>
        <Reveal stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productGallery.map((p) => (
            <a key={p.name} href={p.href} className="group flex flex-col overflow-hidden rounded-3xl border border-[#1a1a1a]/12 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffffff] to-[#fbe9eb] p-5">
                <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">{p.tag}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1a1a1a]">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#4d5e56]">{p.text}</p>
                <span className="mt-4 inline-flex w-fit rounded-full bg-[#c8102e] px-4 py-2 text-xs font-semibold text-white">Xem hạng mục · tư vấn</span>
              </div>
            </a>
          ))}
        </Reveal>
      </section>


      <section id="thuong-hieu" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border border-[#c8102e]/20 bg-[#fff7f8] p-8 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Thương hiệu nhập khẩu</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Sản phẩm chống thấm nhập khẩu 100% từ Úc và Mỹ.</h2>
              <p className="mt-5 leading-7 text-[#58675f]">Nguồn hàng chọn lọc từ các nhà sản xuất nước ngoài, ưu tiên công nghệ thẩm thấu sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong — không tạo màng nên hạn chế bong tróc, phồng rộp như lớp phủ bề mặt.</p>
            </div>
            <div className="grid gap-3">
              {importBrands.map((item) => (
                <article key={item.brand} className="rounded-2xl border border-[#1a1a1a]/10 bg-white p-4 shadow-sm">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <img src={item.logo} alt={item.brand} className="h-8 w-20 object-contain object-left" />
                        <h3 className="text-xl font-bold text-[#1a1a1a]">{item.brand}</h3>
                      </div>
                      <p className="mt-1 text-sm font-medium text-[#4d5e56]">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-[#c8102e] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">{item.origin.includes("United States") ? "Mỹ" : "Úc / NZ"}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#65726c]">{item.origin}</p>
                  <p className="mt-2 text-sm leading-6 text-[#4d5e56]">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="san-pham" className="mx-auto max-w-7xl px-5 pb-20">
        <div className="rounded-[2rem] border border-[#1a1a1a]/10 bg-white/70 p-8 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Hạng mục công trình</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Chọn theo bề mặt cần xử lý, không chọn sản phẩm theo cảm tính.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#58675f]">Từ tài liệu AQURON, CONQOR và Tech-Dry: mỗi hạng mục cần xem bề mặt, nguồn nước, khe nứt/cổ ống, cách thi công và độ bền mong muốn. Bảng dưới giúp chủ nhà chọn nhanh hướng xử lý phù hợp.</p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {workScopes.map((scope) => (
              <article id={scope.id} key={scope.surface} className="scroll-mt-24 rounded-3xl border border-[#1a1a1a]/12 bg-[#ffffff] p-5 shadow-sm transition target:border-[#1a1a1a]/45 target:bg-white target:shadow-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#c8102e] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white">{scope.product}</span>
                  <span className="rounded-full border border-[#1a1a1a]/15 bg-white/70 px-3 py-1 text-xs font-semibold text-[#1a1a1a]">Dễ tư vấn theo hạng mục</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-[#1a1a1a]">{scope.surface}</h3>
                <dl className="mt-4 space-y-3 text-sm leading-6 text-[#4d5e56]">
                  <div>
                    <dt className="font-bold text-[#c8102e]">Vấn đề thường gặp</dt>
                    <dd>{scope.issue}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#c8102e]">Quy trình thi công</dt>
                    <dd>{scope.process}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-[#c8102e]">Độ bền / cơ sở kỹ thuật</dt>
                    <dd>{scope.durability}</dd>
                  </div>
                  <div className="rounded-2xl bg-white/75 p-3 text-[#1a1a1a]">
                    <dt className="font-bold">Ghi chú bán hàng</dt>
                    <dd>{scope.note}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ung-dung" className="bg-[#1a1a1a] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f8b5bc]">Ứng dụng</p>
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Tài liệu kỹ thuật có thể mở</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Tư liệu kỹ thuật, công dụng và công trình tham khảo.</h2>
          <p className="mt-4 leading-7 text-[#58675f]">Mỗi chủ đề bên dưới đã được tách thành file PDF ngắn chỉ gồm vài trang liên quan, không mở cả tài liệu dài. Chủ đề tập trung vào các điểm dễ quảng bá nhất: dễ thi công, chống thấm từ bên trong, độ bền, ngấm sâu, ứng dụng công trình và danh mục sản phẩm.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technicalTopics.map((topic) => (
            <a key={topic.title} href={topic.href} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[3/4] overflow-hidden bg-[#fbe9eb]">
                <img src={topic.src} alt={topic.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a1a1a]">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65726c]">{topic.text}</p>
                <p className="mt-4 inline-flex rounded-full bg-[#1a1a1a]/30 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/40">{topic.cta}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Ảnh thi công thực tế</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projectImages.map((image) => (
              <article key={image.src} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
                <div className="aspect-[4/3] overflow-hidden bg-[#fbe9eb]">
                  <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1a1a1a]">{image.title}</h3>
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
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Khu vực video sản phẩm</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Video sản phẩm, quy trình thi công và hình ảnh công trình thực tế.</h2>
            <p className="mt-4 leading-7 text-[#58675f]">Tổng hợp video giới thiệu sản phẩm, quy trình phun và hình ảnh công trình thực tế. Phần video test chống thấm/khóa ẩm đã được bỏ để trang gọn và tập trung hơn.</p>
          </div>
          <a href="#lien-he" className="rounded-full bg-[#c8102e] px-6 py-3 text-center font-semibold text-white">Tư vấn qua Zalo/Điện thoại</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.youtubeId} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <YoutubeCard youtubeId={video.youtubeId} title={video.title} />
              <div className="p-5">
                <h3 className="font-bold text-[#1a1a1a]">{video.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65726c]">Tư liệu video phục vụ giới thiệu quy trình, hiện trường và khả năng ứng dụng của AQURON 2000 trong thực tế.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="thi-cong" className="border-y border-black/10 bg-white/55 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Quy trình thi công</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a] md:text-5xl">Thi công phun đơn giản, tiết kiệm nhân công và thời gian.</h2>
            <p className="mt-5 leading-7 text-[#58675f]">Tài liệu kỹ thuật nêu định mức khoảng 4–5m²/L tùy độ rỗng bê tông, thường phun tối thiểu 2 lớp. Với bề mặt đủ thấm, thi công AQURON 2000 không yêu cầu phải mài bê tông.</p>
          </div>
          <div className="space-y-4">
            {process.map((item, idx) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-black/10 bg-[#ffffff] p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c8102e] font-bold text-white">{idx + 1}</div>
                <p className="leading-7 text-[#4d5e56]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-[#fbe9eb] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c8102e]">Thông số sản phẩm</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#1a1a1a]">Gốc nước, trong suốt, không VOC.</h2>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {["Dạng: lỏng", "Màu: trong suốt", "Đóng gói: can 20L / IBC 1000L", "Tỷ trọng: 1.09–1.10", "pH: 12±", "Điểm sôi: 110°C", "VOC: Không", "Flammability: Không"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/70 p-4 font-medium text-[#1a1a1a]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lien-he" className="bg-[#111111] px-5 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f8b5bc]">Liên hệ tư vấn</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Gửi ảnh hiện trạng để được tư vấn hướng xử lý phù hợp.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Đội ngũ tư vấn sẽ đánh giá hiện trạng bề mặt, mục tiêu chống thấm hoặc kiểm soát ẩm, từ đó đề xuất quy trình xử lý phù hợp cho từng hạng mục.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0904128909" className="rounded-full bg-white px-7 py-3 font-bold text-[#111111]">Gọi 0904 128 909</a>
            <a href="https://demo-site-three-fawn.vercel.app" className="rounded-full border border-white/25 px-7 py-3 font-bold text-white">Xem tài liệu sản phẩm</a>
          </div>
        </div>
      </section>

      <SeoKeywordsStrip keywords={homeSeoKeywords} />

      <footer className="bg-[#0a0a0a] px-5 py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© AQURON 2000. Giải pháp xử lý bê tông, kiểm soát ẩm và chống thấm từ bên trong.</p>
          <p>Tư vấn và triển khai công trình trên toàn quốc.</p>
        </div>
      </footer>
    </main>
  )
}
