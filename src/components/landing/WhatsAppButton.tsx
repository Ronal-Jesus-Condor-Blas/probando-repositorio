import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { brand } from "@/config/brand"

export function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${brand.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
    >
      <MessageCircle className="size-6" />
    </Link>
  )
}
