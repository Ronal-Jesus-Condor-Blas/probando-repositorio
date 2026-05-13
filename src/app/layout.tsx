import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Northstar Studio",
  description: "Landing dark premium construida con Next.js y shadcn/ui.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
