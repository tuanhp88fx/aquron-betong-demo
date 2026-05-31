type SeoKeywordsStripProps = {
  keywords: string[]
  className?: string
}

export default function SeoKeywordsStrip({ keywords, className = "" }: SeoKeywordsStripProps) {
  const items = keywords.filter(Boolean)

  if (!items.length) return null

  return (
    <div className={`border-t border-black/10 bg-[#f8f5ef] ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-5 py-4">
        <p className="text-[11px] leading-6 text-[#6b6b6b] md:text-xs">
          {items.map((keyword) => (
            <span key={keyword} className="mr-3 inline-block">
              #{keyword}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
