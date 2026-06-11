"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type Props = {
  children: React.ReactNode
  className?: string
}

/**
 * Hero entrance: stagger direct children up + fade on mount.
 * Respects prefers-reduced-motion.
 */
export function HeroIntro({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      gsap.set(el.children, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        opacity: 0,
        y: 36,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
