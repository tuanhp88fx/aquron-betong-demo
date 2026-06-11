"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { usePathname, useRouter } from "next/navigation"
import { gsap } from "gsap"

let externalNavigate: ((href: string) => void) | null = null

/** Trigger the page transition from anywhere (e.g. TransitionLink). */
export function runPageTransition(href: string) {
  if (externalNavigate) externalNavigate(href)
}

/**
 * Full-screen GSAP fade transition between routes.
 * Black background, red text. Fade in -> navigate -> fade out.
 * Mount once in the root layout. Respects prefers-reduced-motion.
 */
export function PageTransition() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()
  const [pending, setPending] = useState<string | null>(null)

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const navigate = useCallback(
    (href: string) => {
      const overlay = overlayRef.current
      if (!overlay || reduce) {
        router.push(href)
        return
      }
      gsap.killTweensOf(overlay)
      gsap.set(overlay, { display: "flex", autoAlpha: 0 })
      gsap.to(overlay, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          setPending(href)
          router.push(href)
        },
      })
    },
    [router, reduce],
  )

  useEffect(() => {
    externalNavigate = navigate
    return () => {
      if (externalNavigate === navigate) externalNavigate = null
    }
  }, [navigate])

  // Reveal new page: fade the overlay out after route change.
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay || reduce) return
    if (pending === null) return

    gsap.killTweensOf(overlay)
    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.55,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(overlay, { display: "none" })
        setPending(null)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <div
      ref={overlayRef}
      aria-hidden
      style={{ display: "none", opacity: 0, visibility: "hidden" }}
      className="pointer-events-none fixed inset-0 z-[100] items-center justify-center bg-black"
    >
      <span className="font-serif text-2xl font-semibold uppercase tracking-[0.3em] text-[#c8102e] md:text-4xl">
        Chống Thấm Nano
      </span>
    </div>
  )
}
