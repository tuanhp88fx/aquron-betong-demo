import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "AQURON 2000 - Chống thấm & xử lý bê tông",
  description:
    "Website demo giới thiệu AQURON 2000: chống thấm, khóa ẩm, tăng cứng và kéo dài tuổi thọ bê tông.",
  generator: "OpenClaw",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
