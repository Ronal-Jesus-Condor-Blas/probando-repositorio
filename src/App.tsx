import {
  ArrowRight,
  BarChart3,
  Check,
  CircleDollarSign,
  Clock3,
  Layers3,
  MessageSquareText,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: Layers3,
    title: "Arquitectura de secciones",
    description: "Hero, beneficios, prueba social y CTA conectados con una narrativa clara.",
  },
  {
    icon: BarChart3,
    title: "Enfoque en conversión",
    description: "Cada bloque empuja al visitante hacia una acción sin saturar la pantalla.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza inmediata",
    description: "Métricas, proceso y garantías visibles para reducir dudas desde el primer scroll.",
  },
]

const metrics = [
  ["42%", "más leads calificados"],
  ["18 h", "para lanzar una campaña"],
  ["3.2x", "mejor lectura del embudo"],
]

const workflow = [
  "Brief estratégico",
  "Wireframe de conversión",
  "UI con shadcn/ui",
  "Deploy y ajustes finales",
]

const testimonials = [
  {
    name: "Camila Torres",
    role: "Growth Lead",
    quote: "La landing se sintió lista para vender desde el primer día. Clara, rápida y con una estética muy cuidada.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    name: "Diego Salas",
    role: "Founder",
    quote: "Pasamos de explicar demasiado a mostrar valor en segundos. El cambio en percepción fue enorme.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
]

const trustItems = [
  { icon: Clock3, label: "Entrega rápida" },
  { icon: CircleDollarSign, label: "ROI medible" },
  { icon: MessageSquareText, label: "Copy directo" },
]

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-media" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(246,189,96,0.32),transparent_32%)]" aria-hidden="true" />

        <header className="container relative z-10 flex items-center justify-between py-5">
          <a href="/" className="flex items-center gap-3 text-white">
            <span className="flex size-10 items-center justify-center rounded-md bg-white text-slate-950">
              <Sparkles className="size-5" />
            </span>
            <span className="text-sm font-semibold">Northstar Studio</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-white/78 md:flex">
            <a href="#beneficios" className="hover:text-white">
              Beneficios
            </a>
            <a href="#proceso" className="hover:text-white">
              Proceso
            </a>
            <a href="#testimonios" className="hover:text-white">
              Clientes
            </a>
          </nav>
          <Button variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white">
            Agenda demo
          </Button>
        </header>

        <div className="container relative z-10 grid min-h-[86vh] items-center gap-10 pb-16 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-20 lg:pt-14">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-5 bg-white/88 text-slate-950 backdrop-blur">
              <Sparkles className="mr-1 size-3.5" />
              Landing premium con shadcn/ui
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white drop-shadow-sm sm:text-6xl lg:text-7xl">
              Northstar Studio
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Una landing moderna para servicios digitales que explica valor en segundos, genera confianza y convierte visitas en conversaciones reales.
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
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/82">
              {trustItems.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 backdrop-blur">
                  <item.icon className="size-4 text-amber-200" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/24 bg-white/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-md border bg-background p-4">
              <div className="flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium">Embudo activo</p>
                  <p className="text-sm text-muted-foreground">Campaña Mayo 2026</p>
                </div>
                <Badge className="w-fit">En vivo</Badge>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-3">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-md border bg-muted/40 p-3">
                    <p className="text-2xl font-semibold">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-md border bg-card p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">Score de conversión</p>
                    <p className="text-xs text-muted-foreground">Después del rediseño</p>
                  </div>
                  <p className="text-2xl font-semibold text-primary">91</p>
                </div>
                <div className="mt-4 h-2 rounded-full bg-muted">
                  <div className="h-2 w-[91%] rounded-full bg-primary" />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {workflow.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border bg-card p-3">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
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

      <section className="border-y bg-card py-5">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-muted-foreground">
          <span>Vite</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>shadcn/ui</span>
          <span>Vercel</span>
        </div>
      </section>

      <section id="beneficios" className="bg-background py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline">Beneficios</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Un diseño que se entiende rápido y se siente confiable.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              La landing combina estructura comercial, componentes shadcn y una dirección visual sobria para verse premium sin perder claridad.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
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

      <section id="proceso" className="bg-secondary/55 py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge variant="outline">Proceso</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
              Diseñada para moverse rápido sin perder calidad.
            </h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Cada entrega incluye estrategia, interfaz, responsive y despliegue. El resultado es una página lista para enseñar, medir y mejorar.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-medium">
              <Star className="size-4 fill-accent text-accent" />
              Promedio 4.9/5 en satisfacción de clientes
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflow.map((item, index) => (
              <Card key={item}>
                <CardContent className="p-5">
                  <div className="mb-5 flex size-10 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    {index + 1}
                  </div>
                  <p className="font-medium">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {index === 0 && "Definimos la promesa, audiencia y acción principal."}
                    {index === 1 && "Ordenamos la historia para que el visitante avance sin fricción."}
                    {index === 2 && "Usamos patrones consistentes, accesibles y fáciles de mantener."}
                    {index === 3 && "Publicamos, validamos rendimiento y dejamos una base escalable."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonios" className="bg-background py-16">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Badge variant="secondary">Prueba social</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
                Se ve premium, pero sigue siendo fácil de usar.
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                El objetivo no es decorar: es que el visitante entienda por qué confiar, qué obtiene y qué debe hacer después.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-5 leading-7 text-muted-foreground">“{testimonial.quote}”</p>
                    <Separator className="my-5" />
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-foreground py-14 text-background">
        <div className="container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-background/70">Listo para lanzar</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-normal">
              Convierte visitas en conversaciones reales.
            </h2>
          </div>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            Empezar ahora
            <Zap />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default App
