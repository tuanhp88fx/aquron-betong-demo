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
  ["150mm", "khả năng ngấm sâu vào bê tông theo tài liệu"],
  ["4–5m²/L", "định mức tham khảo tùy độ rỗng/độ ngấm"],
  ["72h", "thời gian chờ tham khảo với bê tông cũ trước lớp phủ"],
  ["15 năm", "bảo hành chống thấm cho bê tông mới nếu thi công đúng quy trình"],
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

const videos = [
  { src: "/videos/project/7799149296493.mp4", title: "Video giới thiệu sản phẩm" },
  { src: "/videos/project/7799149300226.mp4", title: "Video thi công phun thực tế" },
  { src: "/videos/project/7799162070987.mp4", title: "Video test chống thấm/khóa ẩm" },
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

const pdfImages = [
  {
    src: "/images/pdf/aquron-page-01.jpg",
    title: "Tài liệu kỹ thuật AQURON 2000",
    text: "Trang giới thiệu sản phẩm, mô tả công dụng, thông số và hướng dẫn thi công.",
  },
  {
    src: "/images/pdf/aquron-page-02.jpg",
    title: "Phương pháp xử lý tối ưu cho bê tông",
    text: "Hình ảnh nhận diện sản phẩm và thông điệp chống thấm từ bên trong.",
  },
  {
    src: "/images/pdf/aquron-page-03.jpg",
    title: "Cơ chế colloidal silica hydrogel",
    text: "Minh họa cơ chế kiểm soát ẩm, phản ứng trong lỗ rỗng bê tông và ngấm sâu.",
  },
  {
    src: "/images/pdf/aquron-page-04.jpg",
    title: "Công dụng & số liệu thử nghiệm",
    text: "Các nhóm lợi ích: đóng rắn, chống thấm, khóa ẩm, tăng cứng, giảm bụi.",
  },
  {
    src: "/images/pdf/aquron-page-05.jpg",
    title: "Một số công trình tham khảo",
    text: "Các ví dụ dự án bãi đỗ, cầu cảng, kho và công trình bê tông quốc tế.",
  },
  {
    src: "/images/pdf/aquron-page-06.jpg",
    title: "Quy trình thi công",
    text: "Điều kiện thi công, chuẩn bị bề mặt, định mức, thời gian khô và lưu ý an toàn.",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1f2a24]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f6f2ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-serif text-2xl font-semibold tracking-tight text-[#114234]">
            AQURON 2000
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#385047] md:flex">
            <a href="#loi-ich">Lợi ích</a>
            <a href="#ung-dung">Ứng dụng</a>
            <a href="#hinh-anh">Hình ảnh</a>
            <a href="#video">Video</a>
            <a href="#thi-cong">Thi công</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
          <a
            href="tel:0904128909"
            className="rounded-full bg-[#114234] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0b2f25]"
          >
            Gọi tư vấn
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,111,86,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(171,129,63,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-full border border-[#114234]/20 bg-white/60 px-4 py-2 text-sm font-semibold text-[#114234]">
              Xử lý bê tông tối ưu • Thi công bằng cách phun
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.96] tracking-tight text-[#143c31] md:text-7xl">
              Chống thấm, khóa ẩm và tăng bền bê tông từ bên trong.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5e56]">
              AQURON 2000 là hóa chất dạng phun gốc colloidal silica hydrogel, xử lý bề mặt bê tông để tăng cứng, kiểm soát ẩm, liên kết phân tử và chống thấm cho bê tông mới hoặc cũ.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#video" className="rounded-full bg-[#114234] px-6 py-3 text-center font-semibold text-white shadow-lg shadow-[#114234]/20 hover:bg-[#0b2f25]">
                Xem khu vực video
              </a>
              <a href="#lien-he" className="rounded-full border border-[#114234]/25 bg-white/70 px-6 py-3 text-center font-semibold text-[#114234] hover:bg-white">
                Nhận tư vấn hạng mục
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/55 p-4 shadow-2xl shadow-black/10 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#173f35] text-white">
              <img
                src="/images/pdf/aquron-page-02.jpg"
                alt="AQURON 2000 - phương pháp xử lý tối ưu cho bê tông"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a15] via-[#071a15]/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-[#f4d28a]">Concrete protection</p>
                <h2 className="mt-3 font-serif text-5xl leading-none">AQURON 2000</h2>
                <p className="mt-3 text-white/80">Hình ảnh lấy trực tiếp từ tài liệu kỹ thuật PDF.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loi-ich" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Lợi ích chính</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Một lần xử lý, hướng tới tuổi thọ bê tông lâu dài.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#143c31]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#58675f]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="ung-dung" className="bg-[#123c31] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e1bf78]">Ứng dụng</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">Phù hợp nhiều hạng mục bê tông trong nhà và ngoài trời.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Giải pháp phù hợp cho các hạng mục cần kiểm soát ẩm, tăng độ bền bề mặt và kéo dài tuổi thọ kết cấu bê tông.
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
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9b763a]">Hình ảnh từ tài liệu PDF</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Tư liệu kỹ thuật, công dụng và công trình tham khảo.</h2>
          <p className="mt-4 leading-7 text-[#58675f]">Các hình ảnh được chọn lọc từ tài liệu kỹ thuật AQURON 2000, giúp khách hàng nắm nhanh cơ chế xử lý, phạm vi ứng dụng và hiệu quả thực tế của sản phẩm.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pdfImages.map((image) => (
            <article key={image.src} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="aspect-[3/4] overflow-hidden bg-[#e7dcc7]">
                <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#143c31]">{image.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#65726c]">{image.text}</p>
              </div>
            </article>
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
            <p className="mt-4 leading-7 text-[#58675f]">Tổng hợp các video giúp đối tác quan sát trực quan cách sản phẩm được ứng dụng trên bề mặt bê tông, từ chuẩn bị hiện trường đến xử lý và kiểm tra sau thi công.</p>
          </div>
          <a href="#lien-he" className="rounded-full bg-[#114234] px-6 py-3 text-center font-semibold text-white">Tư vấn qua Zalo/Điện thoại</a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <article key={video.src} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
              <div className="bg-black">
                <video
                  className="aspect-video h-full w-full object-cover"
                  src={video.src}
                  controls
                  preload="metadata"
                  playsInline
                />
              </div>
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
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#143c31] md:text-5xl">Phun đúng kỹ thuật để sản phẩm thẩm thấu tối đa.</h2>
            <p className="mt-5 leading-7 text-[#58675f]">Quy trình cần được thực hiện bởi đội thi công nắm rõ đặc tính bề mặt bê tông, điều kiện thời tiết và yêu cầu hoàn thiện sau xử lý.</p>
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
          <h2 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Gửi ảnh hiện trạng bê tông để được tư vấn hướng xử lý phù hợp.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Đội ngũ tư vấn sẽ đánh giá hiện trạng bề mặt, mục tiêu chống thấm hoặc kiểm soát ẩm, từ đó đề xuất quy trình xử lý phù hợp cho từng hạng mục.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="tel:0904128909" className="rounded-full bg-white px-7 py-3 font-bold text-[#0d2e25]">Gọi 0904 128 909</a>
            <a href="mailto:chau@itsv.com.vn" className="rounded-full border border-white/25 px-7 py-3 font-bold text-white">Gửi email tư vấn</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071a15] px-5 py-8 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">
          <p>© AQURON 2000. Giải pháp xử lý bê tông, kiểm soát ẩm và chống thấm từ bên trong.</p>
          <p>Tư vấn giải pháp cho từng hạng mục công trình.</p>
        </div>
      </footer>
    </main>
  )
}
