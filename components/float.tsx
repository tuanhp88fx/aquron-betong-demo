"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Props = {
  children: React.ReactNode
  className?: string
  /** Float distance in px. */
  amplitude?: number
  /** One full up/down cycle duration in seconds. */
  duration?: number
}

/**
 * Gentle infinite floating motion (yoyo). Respects prefers-reduced-motion.
 */
export function Float({ children, className, amplitude = 12, duration = 3 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: amplitude,
        duration,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }, el)

    return () => ctx.revert()
  }, [amplitude, duration])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
