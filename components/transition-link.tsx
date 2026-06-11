"use client"

import { runPageTransition } from "@/components/page-transition"

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

/**
 * Internal link that plays the GSAP curtain transition before navigating.
 * Use only for same-origin app routes.
 */
export function TransitionLink({ href, className, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        // Allow new-tab / modifier clicks to behave normally.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
        e.preventDefault()
        runPageTransition(href)
      }}
    >
      {children}
    </a>
  )
}
