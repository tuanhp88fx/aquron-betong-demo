import type { Metadata } from "next";
import Link from "next/link";
import SeoKeywordsStrip from "@/components/seo-keywords-strip";

export const metadata: Metadata = {
  title: "Video test chống nước thực tế | Chống Thấm Nano Công Nghệ Úc",
  description:
    "Tổng hợp video test chống nước thực tế, video thử nghiệm khả năng chống thấm và thẩm thấu của hệ Chống Thấm Nano Công Nghệ Úc.",
};

const videos = [
  {
    title: "Video test chống nước thực tế 01",
    youtubeId: "tVBU-7HIBsk",
  },
  {
    title: "Video test chống nước thực tế 02",
    youtubeId: "rXgwKsTIs-k",
  },
];

const pageSeoKeywords = [
  "video test chống nước",
  "video chống thấm thực tế",
  "test chống nước AQURON",
  "chống thấm nano",
  "chống thấm công nghệ Úc",
];

export default function VideoTestChongNuocPage() {
  return (
    <main className="bg-[#fdfbf6] text-[#1a1a1a]">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <nav className="mb-6 text-sm text-[#1a1a1a]/60">
          <Link href="/" className="hover:text-[#c8102e]">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span>Video test chống nước thực tế</span>
        </nav>

        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c8102e]">Tư liệu thực tế</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold leading-tight md:text-5xl">Video test chống nước thực tế</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4d5e56]">Khu vực này dùng để tổng hợp các video test nước, video thử thực tế và khả năng chống thấm của vật liệu để khách hàng xem nhanh, dễ hiểu.</p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <article key={video.youtubeId} className="overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-white shadow-sm">
              <div className="aspect-[9/16] overflow-hidden bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h2 className="text-base font-semibold text-[#1a1a1a]">{video.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#4d5e56]">
                  Test hoá chất chống thấm thực tế, nước không thể bám lên bề mặt, lấy tay gạt nhẹ là nước trượt đi, bề mặt kho ráo hoàn toàn.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`https://youtube.com/shorts/${video.youtubeId}`} target="_blank" rel="noreferrer" className="rounded-full bg-[#c8102e] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a00d24]">Mở trên YouTube</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SeoKeywordsStrip keywords={pageSeoKeywords} />
    </main>
  );
}
