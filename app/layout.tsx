import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Schema from "@/components/Schema"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Alkama Sunasara - Full Stack Developer",
  description:
    "Alkama Sunasara — Full Stack Developer skilled in React.js, Node.js, Express, MySQL, and UI/UX. I build modern, fast, and scalable web applications.",
  
  // ✅ Google Search Console Verification
  verification: {
    google: "RG--p4K_70q6YFaSuw0-rDFoij0NGxg-k7HERgdWKa4",
  },

  // ✅ Primary SEO
  keywords: [
    "Alkama Sunasara",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer India",
    "MERN Developer",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Web Developer",
  ],

  // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    title: "Alkama Sunasara - Full Stack Developer",
    description:
      "Explore the portfolio of Alkama Sunasara — Full Stack Developer specializing in React, Node.js, and modern web technologies.",
    url: "https://alkamasunasara.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://alkamasunasara.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alkama Sunasara Portfolio",
      },
    ],
  },

  // ✅ Twitter Card SEO
  twitter: {
    card: "summary_large_image",
    title: "Alkama Sunasara - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React & Node.js. Check out my projects and skills.",
    images: ["https://alkamasunasara.vercel.app/og-image.png"],
  },

  // Favicon
  icons: {
    icon: "/developer-headshot-bw.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <Schema/>
      <body>{children}</body>
    </html>
  )
}
