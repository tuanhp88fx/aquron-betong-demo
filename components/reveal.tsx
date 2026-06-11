"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type Props = {
  children: React.ReactNode
  /** Animate direct children with a stagger instead of the wrapper itself. */
  stagger?: boolean
  /** Vertical offset (px) the element starts from. */
  y?: number
  delay?: number
  className?: string
}

/**
 * Reveal-on-scroll wrapper using GSAP + ScrollTrigger.
 * - useLayoutEffect + immediate gsap.set hides targets before the browser
 *   paints, so there is no flash of already-visible content on load.
 * - start "top 85%" reveals each block as it scrolls into view, not early.
 * Respects prefers-reduced-motion (no motion, just visible).
 */
export function Reveal({ children, className, stagger = false, y = 40, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = stagger ? el.children : el

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      // Hide immediately (before paint) to avoid the flash-then-reveal glitch.
      gsap.set(targets, { opacity: 0, y })

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      })
    }, el)

    // Refresh after layout settles (fonts/images/iframes shift the page).
    const refresh = () => ScrollTrigger.refresh()
    const t1 = window.setTimeout(refresh, 300)
    const t2 = window.setTimeout(refresh, 1200)
    window.addEventListener("load", refresh)

    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      window.removeEventListener("load", refresh)
      ctx.revert()
    }
  }, [stagger, y, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
