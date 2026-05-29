import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { newsItems } from "../data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = newsItems.find((entry) => entry.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} | Chống Thấm Nano Công Nghệ Úc`,
    description: item.summary,
  };
}

export default function TinTucDetailPage({ params }: Props) {
  const item = newsItems.find((entry) => entry.slug === params.slug);
  if (!item) notFound();

  const gallery = item.gallery?.length ? item.gallery : item.cover ? [item.cover] : [];

  return (
    <main className="bg-[#fdfbf6] text-[#1a1a1a]">
      <article className="mx-auto max-w-5xl px-6 py-16">
        <nav className="mb-6 text-sm text-[#1a1a1a]/60">
          <Link href="/" className="hover:text-[#c8102e]">
            Trang chủ
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tin-tuc" className="hover:text-[#c8102e]">
            Tin tức hoạt động
          </Link>
          <span className="mx-2">/</span>
          <span>{item.title}</span>
        </nav>

        <header className="mb-8">
          {item.date ? (
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8102e]">
              {item.date}
            </p>
          ) : null}
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">
            {item.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#4d5e56]">
            {item.summary}
          </p>
        </header>

        {item.youtubeId ? (
          <section className="mb-8 overflow-hidden rounded-3xl border border-[#1a1a1a]/10 bg-black shadow-sm">
            <div className="aspect-[9/16] w-full sm:aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                title={item.title}
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        ) : null}

        {gallery.length ? (
          <section>
            <div className="grid gap-4 md:grid-cols-2">
              {gallery.map((src, index) => (
                <a
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-sm"
                >
                  <img
                    src={src}
                    alt={`${item.title} - ảnh ${index + 1}`}
                    className="h-full min-h-[240px] w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-10 rounded-2xl border border-[#c8102e]/15 bg-white p-6 shadow-sm">
          <p className="text-base leading-7 text-[#4d5e56]">
            Công nghệ chống thấm nano thẩm thấu sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên hạn chế bong tróc và phồng rộp như lớp phủ bề mặt.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="tel:0904128909"
              className="rounded-full bg-[#c8102e] px-5 py-3 font-semibold text-white hover:bg-[#a00d24]"
            >
              Gọi tư vấn: 0904 128 909
            </a>
            <Link
              href="/tin-tuc"
              className="rounded-full border border-[#1a1a1a]/20 px-5 py-3 font-semibold text-[#1a1a1a] hover:bg-[#fdf2f3]"
            >
              Xem tin khác
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
