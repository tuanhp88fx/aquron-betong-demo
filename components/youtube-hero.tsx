"use client"

import { isPlaceholderId } from "@/lib/media"

type Props = {
  youtubeId: string
  posterUrl?: string
  title?: string
}

/**
 * Hero video tự phát + loop + tắt tiếng, dùng để thay thẻ <video> nền.
 * - iframe được scale to hơn khung (scale 1.35) rồi center crop để bắt chước object-fit: cover.
 * - pointer-events: none để khách không click vào logo/title YouTube.
 * - Có poster image phía dưới, fallback nếu iframe chưa load xong.
 */
export function YoutubeHero({ youtubeId, posterUrl, title }: Props) {
  const placeholder = isPlaceholderId(youtubeId)
  const src = placeholder
    ? ""
    : `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1`

  return (
    <div className="absolute inset-0 overflow-hidden">
      {posterUrl ? (
        // Poster phía dưới iframe, lộ ra trong vài trăm ms đầu trước khi YouTube buffer xong.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterUrl}
          alt={title ?? ""}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          loading="eager"
        />
      ) : null}

      {placeholder ? (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1a] text-center text-xs uppercase tracking-[0.3em] text-white/60">
          [Chưa cấu hình YouTube ID cho hero video]
        </div>
      ) : (
        <iframe
          // 16:9 video scale lên 135% để fill khung 4:5; có thể tinh chỉnh theo aspect thực tế.
          className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[180%] -translate-x-1/2 -translate-y-1/2"
          src={src}
          title={title ?? "Video nền"}
          loading="eager"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  )
}
