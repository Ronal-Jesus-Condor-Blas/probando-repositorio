import Link from "next/link"
import { ArrowRight, FileText, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.92)_45%,rgba(255,255,255,0.62)_70%,rgba(255,255,255,0.35)_100%),url('https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      <div className="container relative grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-3xl">
          <Badge className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/10">
            <ShieldCheck className="mr-1 size-3.5" />
            Soluciones industriales con respaldo técnico
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-innova-black sm:text-5xl lg:text-6xl">
            Calidad industrial para minería, construcción y manufactura.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            INNOVA INDUSTRIES AMERICA SAC desarrolla, fabrica y suministra soluciones químicas e industriales con enfoque técnico, control de calidad y atención local.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contacto">
                Contactar
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/80">
              <Link href="#calidad">
                <FileText />
                Ver comunicados
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-md border-l-4 border-primary bg-white/88 p-7 shadow-lg backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Compromiso corporativo</p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-innova-black">
              Procesos documentados, soporte técnico y mejora continua para operaciones exigentes.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {["Calidad", "Seguridad", "Industria"].map((item) => (
                <div key={item} className="border bg-white px-3 py-4 text-sm font-medium text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
