"use client"

import { useEffect, useRef } from "react"

type Props = {
  youtubeId: string
  title: string
}

declare global {
  interface Window {
    YT?: any
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiPromise: Promise<void> | null = null

function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.YT && window.YT.Player) return Promise.resolve()
  if (apiPromise) return apiPromise

  apiPromise = new Promise<void>((resolve) => {
    const prev = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      document.head.appendChild(tag)
    }
  })
  return apiPromise
}

/**
 * Vertical YouTube short: autoplay, muted, controls hidden, looped forever
 * via the IFrame API (more reliable than loop=1 for Shorts).
 */
export function YoutubeLoopShort({ youtubeId, title }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false

    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT?.Player) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          playsinline: 1,
          modestbranding: 1,
          loop: 1,
          playlist: youtubeId,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute()
            e.target.playVideo()
          },
          onStateChange: (e: any) => {
            // 0 = ended -> force replay for guaranteed infinite loop
            if (e.data === 0) {
              e.target.seekTo(0)
              e.target.playVideo()
            }
          },
        },
      })
    })

    return () => {
      cancelled = true
      try {
        playerRef.current?.destroy?.()
      } catch {
        /* noop */
      }
    }
  }, [youtubeId])

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.25rem] bg-black">
      <div ref={containerRef} title={title} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
