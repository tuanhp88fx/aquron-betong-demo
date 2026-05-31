export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6">
      <section className="max-w-xl text-center space-y-5">
        <div className="inline-flex rounded-full border border-white/15 px-4 py-1 text-sm text-white/70">
          Website đang tạm khóa
        </div>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Chống Thấm Luân
        </h1>
        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          Trang giới thiệu sản phẩm và hướng dẫn xử lý chống thấm đang được hoàn thiện thêm trước khi mở lại chính thức.
        </p>
        <p className="text-sm text-white/50">
          Vui lòng quay lại sau. Cảm ơn bạn đã ghé thăm.
        </p>
      </section>
    </main>
  )
}
