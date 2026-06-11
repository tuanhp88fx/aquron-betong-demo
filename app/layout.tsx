import type React from "react"
import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const GA_MEASUREMENT_ID = "G-R2M2R4TD0C"

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
  title: "Chống thấm nano - Chống thấm Úc - Nano Úc | AQURON 2000, CONQOR",
  description:
    "Chống thấm nano công nghệ Úc (nano Úc): hoạt chất nano thấm sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên không bong tróc. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard - chống thấm Úc cho hầm, tầng hầm, bể nước, hố thang máy. Hotline 0904 128 909.",
  keywords: [
    "chống thấm nano",
    "chống thấm úc",
    "chống thấm Úc",
    "nano úc",
    "nano Úc",
    "chống thấm công nghệ Úc",
    "chống thấm nano công nghệ Úc",
    "chống thấm nano Úc",
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
    siteName: "Chống thấm nano - Công nghệ Úc",
    title: "CHỐNG THẤM NANO - CHỐNG THẤM ÚC - NANO ÚC",
    description:
      "Chống thấm nano công nghệ Úc thấm sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong. Hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard cho hầm, bể nước, hố thang máy.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "OpenClaw",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Chống Thấm Nano Công Nghệ Úc",
  alternateName: [
    "Chống thấm nano",
    "Chống thấm Úc",
    "Nano Úc",
    "Chống thấm nano Úc",
    "AQURON Việt Nam",
  ],
  url: "https://www.chongthamnano.com",
  logo: "https://www.chongthamnano.com/icon.png",
  telephone: "+84904128909",
  sameAs: ["https://www.facebook.com/ChongThamNanoUc"],
  description:
    "Chống thấm nano công nghệ Úc (nano Úc) - hoạt chất silica thấm sâu vào mao mạch bê tông, khóa lỗ rỗng từ bên trong, không tạo màng nên không bong tróc. Phân phối hệ AQURON 2000/7000, CONQOR, Waterpel, Silguard tại Việt Nam.",
  areaServed: "VN",
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Chống thấm nano - Chống thấm Úc",
  url: "https://www.chongthamnano.com",
  inLanguage: "vi-VN",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.chongthamnano.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AQURON 2000 - Chống thấm nano công nghệ Úc",
  alternateName: ["Chống thấm nano Úc", "Nano Úc AQURON 2000"],
  brand: { "@type": "Brand", name: "AQURON (Australia)" },
  category: "Chống thấm nano",
  countryOfOrigin: "AU",
  description:
    "Hydrogel colloidal silica công nghệ Úc, thấm sâu tới 150mm vào bê tông, khóa lỗ rỗng từ bên trong - không tạo màng nên không bong tróc. Dùng cho hầm, tầng hầm, bể nước, hố thang máy, sân thượng, nhà vệ sinh.",
  image: "https://www.chongthamnano.com/aquron-2000-banner.jpg",
  url: "https://www.chongthamnano.com",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <PageTransition />
        {children}
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
