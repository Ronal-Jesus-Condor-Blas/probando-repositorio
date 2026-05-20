import Image from "next/image"
import Link from "next/link"

import { brand, navItems } from "@/config/brand"

export function Footer() {
  return (
    <footer className="border-t bg-innova-black text-white">
      <div className="container grid gap-8 py-10 md:grid-cols-[1fr_auto_auto]">
        <div>
          <Image src="/logo-innova.jpeg" alt={brand.shortName} width={170} height={82} className="h-12 w-auto bg-white object-contain p-1" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Soluciones industriales para minería, construcción y manufactura con enfoque en calidad, soporte técnico y mejora continua.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Enlaces</h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contacto</h3>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>{brand.email}</p>
            <p>{brand.domain}</p>
            <p>INNOVA INDUSTRIES AMERICA SAC</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/55">
        © 2026 INNOVA INDUSTRIES AMERICA SAC. Todos los derechos reservados.
      </div>
    </footer>
  )
}
