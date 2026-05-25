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
  metadataBase: new URL("https://www.chongthamnano.com"),
  title: "Chống thấm nano chuẩn công nghệ Úc | AQURON 2000, CONQOR, Waterpel",
  description:
    "Chống thấm nano chuẩn công nghệ Úc: thấm sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên không bong tróc. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard cho hầm, tầng hầm, bể nước, hố thang máy. Hotline 0904 128 909.",
  keywords: [
    "chống thấm nano",
    "chống thấm công nghệ Úc",
    "AQURON 2000",
    "AQURON 7000",
    "CONQOR",
    "Waterpel",
    "Silguard",
    "chống thấm bê tông",
    "chống thấm hầm",
    "chống thấm tầng hầm",
    "chống thấm bể nước",
    "chống thấm hố thang máy",
  ],
  alternates: {
    canonical: "https://www.chongthamnano.com/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://www.chongthamnano.com/",
    siteName: "Chống thấm nano",
    title: "CHỐNG THẤM NANO CHUẨN CÔNG NGHỆ ÚC",
    description:
      "Thấm sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard cho hầm, bể nước, hố thang máy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "OpenClaw",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
