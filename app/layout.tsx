import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Playfair_Display } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Юридические и бухгалтерские услуги в Узбекистане",
  description: "Комплексные решения для регистрации, сопровождения и защиты интересов физических и юридических лиц",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${playfair.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
