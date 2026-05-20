import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.innovaindustriesperu.com"),
  title: {
    default: "INNOVA INDUSTRIES AMERICA SAC",
    template: "%s | Innova America",
  },
  description:
    "Soluciones industriales, aditivos, fibras, polímeros y químicos para minería, construcción y manufactura en Perú.",
  keywords: [
    "Innova Industries America",
    "aditivos para concreto",
    "fibras para shotcrete",
    "polímeros industriales",
    "soluciones químicas industriales",
    "minería",
    "construcción",
  ],
  openGraph: {
    title: "INNOVA INDUSTRIES AMERICA SAC",
    description:
      "Empresa industrial orientada a calidad, soporte técnico y soluciones para minería, construcción y manufactura.",
    url: "https://www.innovaindustriesperu.com",
    siteName: "Innova America",
    locale: "es_PE",
    type: "website",
  },
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
