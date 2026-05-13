import { ArrowRight, BarChart3, Check, Layers3, Play, ShieldCheck, Sparkles, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Layers3,
    title: "Sistema visual",
    description: "Componentes consistentes, secciones modulares y estilos preparados para escalar.",
  },
  {
    icon: BarChart3,
    title: "Conversión clara",
    description: "Jerarquía pensada para explicar valor, mostrar prueba social y llevar al registro.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza desde el inicio",
    description: "Bloques de resultados, seguridad y garantías para reducir fricción en la decisión.",
  },
]

const metrics = [
  ["42%", "más leads calificados"],
  ["18 h", "para lanzar una campaña"],
  ["3.2x", "mejor lectura del embudo"],
]

const plans = ["Auditoría inicial", "Diseño de landing", "Implementación shadcn", "Optimización post-lanzamiento"]

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 hero-media" aria-hidden="true" />
        <div className="container relative grid min-h-[92vh] items-center gap-10 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-5 bg-white/86 text-foreground backdrop-blur">
              <Sparkles className="mr-1 size-3.5" />
              Landing premium con shadcn/ui
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Northstar Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Una landing moderna para vender servicios digitales con una interfaz limpia, rápida y preparada para captar prospectos desde el primer vistazo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-white/90">
                Solicitar demo
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
                <Play />
                Ver propuesta
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/24 bg-white/88 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-md border bg-background p-4">
              <div className="flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-sm font-medium">Embudo activo</p>
                  <p className="text-sm text-muted-foreground">Campaña Mayo 2026</p>
                </div>
                <Badge>En vivo</Badge>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-md border bg-muted/40 p-3">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {plans.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border bg-card p-3">
                    <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-3 flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <feature.icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="leading-6">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge variant="outline">Proceso</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">Diseñada para moverse rápido sin perder calidad.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              La estructura combina copy directo, componentes reutilizables y un ritmo visual sobrio para negocios que necesitan verse confiables desde el primer día.
            </p>
          </div>
          <Card>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2">
              {["Brief estratégico", "Wireframe de conversión", "UI con shadcn", "Entrega responsive"].map((item, index) => (
                <div key={item} className="rounded-md border bg-background p-4">
                  <div className="mb-4 flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    {index + 1}
                  </div>
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t py-12">
        <div className="container flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Listo para lanzar</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-normal">Convierte visitas en conversaciones reales.</h2>
          </div>
          <Button size="lg">
            Empezar ahora
            <Zap />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
