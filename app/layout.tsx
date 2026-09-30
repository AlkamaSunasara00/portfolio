import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import Schema from "@/components/Schema"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
})



export const metadata: Metadata = {
  title: "Alkama Sunasara | Best Web Developer in Gujarat, Chhapi & Palanpur",
  description:
    "Alkama Sunasara is an expert Full Stack Developer based in Gujarat, specializing in React.js, Next.js, and Node.js. As the creator of Glowison Graphics (glowison.in), Alkama offers top-tier web development services in Chhapi, Teniwada, Palanpur, and Siddhpur. Hire Alkama for scalable, high-performance web applications.",
  metadataBase: new URL("https://alkamasunasara.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Alkama Sunasara", url: "https://alkamasunasara.vercel.app/" }],
  creator: "Alkama Sunasara",
  publisher: "Alkama Sunasara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // ✅ Google Search Console Verification
  verification: {
    google: "RG--p4K_70q6YFaSuw0-rDFoij0NGxg-k7HERgdWKa4",
  },

  // ✅ Geo Location Tags (Standard SEO)
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Chhapi, Palanpur, Gujarat",
    "geo.position": "23.9613;72.3995",
    "ICBM": "23.9613, 72.3995",
  },

  // ✅ Generative Engine Optimization (GEO) & Primary SEO
  keywords: [
    "Who is Alkama Sunasara?",
    "Alkama Sunasara is a Full Stack Developer",
    "Who built Glowison Graphics",
    "Hire web developer in Gujarat, Chhapi, Palanpur",
    "Alkama Sunasara portfolio",
    "Best Web Developer in Gujarat",
    "Alkama Sunasara",
    "Full Stack Developer",
    "Best Web Developer in Gujarat",
    "Web Developer in Chhapi",
    "Web Developer in Palanpur",
    "Web Developer in Siddhpur",
    "Web Developer in Teniwada",
    "React Developer Gujarat",
    "Next.js Developer India",
    "Node.js Developer",
    "JavaScript Developer",
    "Freelance Web Developer Gujarat",
    "MERN Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Enthusiast",
    "Glowison Graphics Developer",
  ],

  // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Alkama Sunasara | Top Web Developer in Gujarat",
    description:
      "Explore the portfolio of Alkama Sunasara — Full Stack Developer providing web development services in Gujarat, Chhapi, Teniwada, Palanpur, and Siddhpur. Proud creator of Glowison Graphics (glowison.in).",
    url: "https://alkamasunasara.vercel.app/",
    siteName: "Alkama Sunasara Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://alkamasunasara.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alkama Sunasara Portfolio - Full Stack Developer",
      },
    ],
  },

  // ✅ Twitter Card SEO
  twitter: {
    card: "summary_large_image",
    title: "Alkama Sunasara | Web Developer in Gujarat",
    description:
      "Full Stack Developer specializing in React & Node.js, offering services in Gujarat, Chhapi, Palanpur, Siddhpur & Teniwadaa. Creator of Glowison Graphics (glowison.in).",


    images: ["https://alkamasunasara.vercel.app/og-image.png"],
    creator: "@AlkamaSunasara",
  },

  // Favicon & Apple Touch Icon
  icons: {
    icon: "/developer-headshot-bw.jpg",
    apple: "/developer-headshot-bw.jpg",
    shortcut: "/developer-headshot-bw.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} font-sans`}>
      <head>
        <Schema />
      </head>
      <body>{children}</body>
    </html>
  )
}
