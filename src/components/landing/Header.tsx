import Image from "next/image"
import Link from "next/link"
import { Mail, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { brand, navItems } from "@/config/brand"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/logo-innova.jpeg"
            alt="Logo Innova America"
            width={164}
            height={80}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="#contacto">
              <Mail />
              Contacto
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="mt-8 flex flex-col gap-6">
              <Image src="/logo-innova.jpeg" alt={brand.shortName} width={150} height={72} className="h-11 w-auto object-contain" />
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-base font-medium text-foreground">
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="#contacto">Solicitar contacto</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
