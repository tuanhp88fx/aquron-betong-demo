"use client"

import { isPlaceholderId } from "@/lib/media"

type Props = {
  youtubeId: string
  title: string
}

/**
 * Card video YouTube cho gallery: aspect 16:9, full-bleed iframe, có controls.
 */
export function YoutubeCard({ youtubeId, title }: Props) {
  const placeholder = isPlaceholderId(youtubeId)
  const src = placeholder
    ? ""
    : `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1`

  return (
    <div className="aspect-video w-full bg-black">
      {placeholder ? (
        <div className="flex h-full w-full items-center justify-center bg-[#1a1a1a] text-center text-xs uppercase tracking-[0.3em] text-white/60">
          [Chưa cấu hình YouTube ID]
        </div>
      ) : (
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      )}
    </div>
  )
}
