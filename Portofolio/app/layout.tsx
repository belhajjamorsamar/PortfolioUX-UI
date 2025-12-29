import type React from "react"
import type { Metadata } from "next"
import { Sora, Inter, DM_Sans } from "next/font/google"
import "./globals.css"

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" })
const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Takoua Zrelli | UI/UX Designer Portfolio",
  description: "Premium UI/UX portfolio of Takoua Zrelli, based in Sousse, Tunisia.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sora.variable} ${inter.variable} ${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
