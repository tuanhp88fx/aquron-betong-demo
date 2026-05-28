import type { Metadata } from "next";
import Link from "next/link";
import { newsItems } from "./data";

export const metadata: Metadata = {
  title: "Tin tức hoạt động | Chống Thấm Nano Công Nghệ Úc",
  description:
    "Cập nhật công trình thực tế, mẹo thi công và tin tức hoạt động của đội Chống Thấm Nano Công Nghệ Úc.",
};

const items = newsItems;

export default function TinTucPage() {
  return (
    <main className="bg-[#fdfbf6] text-[#1a1a1a]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <nav className="mb-6 text-sm text-[#1a1a1a]/60">
          <Link href="/" className="hover:text-[#c8102e]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <span>Tin tức hoạt động</span>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8102e]">
            Cập nhật mới
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Tin tức hoạt động
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4d5e56]">
            Công trình thực tế, mẹo thi công và những hoạt động mới nhất của đội Chống Thấm Nano Công Nghệ Úc.
          </p>
        </header>

        {items.length === 0 ? (
          <div className="rounded-2xl border border-[#c8102e]/20 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#1a1a1a]">
              Sắp có nội dung mới
            </p>
            <p className="mt-2 text-base text-[#4d5e56]">
              Anh em ghé lại sau, mình đang cập nhật tin tức công trình và hoạt động thường xuyên ở đây.
            </p>
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/tin-tuc/${item.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-sm transition hover:border-[#c8102e]/30 hover:shadow-md"
                >
                  {item.youtubeId ? (
                    <div className="aspect-[9/16] w-full overflow-hidden bg-black sm:aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}`}
                        title={item.title}
                        className="h-full w-full pointer-events-none"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : item.cover ? (
                    <div className="aspect-[16/9] w-full overflow-hidden bg-[#fdf2f3]">
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="h-full w-full object-cover transition group-hover:scale-[1.02]"
                      />
                    </div>
                  ) : null}
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8102e]">
                      {item.date}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold leading-snug text-[#1a1a1a]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-[#4d5e56]">
                      {item.summary}
                    </p>
                    <p className="mt-4 text-sm font-bold text-[#c8102e]">
                      Xem chi tiết ảnh/video →
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
