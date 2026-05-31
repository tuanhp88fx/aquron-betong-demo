// Cấu hình media ngoài (YouTube) cho website demo.
// Sau khi upload video lên YouTube (Unlisted hoặc Public đều được),
// thay thế các giá trị "REPLACE_*" bằng video id thực (phần sau "v=").
//
// Ví dụ URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> id = "dQw4w9WgXcQ"
//
// Khi giá trị còn là "REPLACE_*", code sẽ render fallback đen kèm nhãn để dễ phát hiện.

export const heroVideo = {
  // Hero video luôn chạy auto loop ở trang chủ (thay cho /videos/hero/easy-application.mp4)
  youtubeId: "REPLACE_HERO_ID",
  posterUrl: "/images/project/z7799161967409_aceef3b57f68e363c127b7e776cbc5b9.jpg",
  caption: "Tự phun dễ dàng",
}

export type ProjectVideo = {
  // YouTube video id (khoảng 11 ký tự sau ?v= trong URL).
  youtubeId: string
  title: string
}

// Danh sách video thực tế trên Page YouTube. Chỉ giữ video đã có id thật;
// các ô còn trống đã được xóa khỏi gallery để trang gọn.
export const projectVideos: ProjectVideo[] = [
  { youtubeId: "va-naC-CEBw", title: "Công trình thực tế dùng công nghệ Nano Úc" },
  { youtubeId: "nHAeQHahSiI", title: "Công trình thực tế dùng công nghệ Nano Úc" },
  { youtubeId: "6u9QkOJX2MM", title: "Công trình thực tế dùng công nghệ Nano Úc" },
  { youtubeId: "XGHisi6-wCg", title: "Nhập hàng ngày 30/5/2026" },
]

export function isPlaceholderId(id: string): boolean {
  return id.startsWith("REPLACE_")
}
