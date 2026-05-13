"use client"

import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  CircleDollarSign,
  Command,
  FolderKanban,
  LayoutDashboard,
  LineChart,
  MessageSquareText,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const chartData = [
  { month: "Ene", leads: 96, demos: 32 },
  { month: "Feb", leads: 118, demos: 46 },
  { month: "Mar", leads: 142, demos: 58 },
  { month: "Abr", leads: 176, demos: 74 },
  { month: "May", leads: 213, demos: 91 },
  { month: "Jun", leads: 268, demos: 118 },
]

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  demos: {
    label: "Demos",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderKanban, label: "Landing" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Clientes" },
  { icon: Settings2, label: "Ajustes" },
]

const metricCards = [
  {
    label: "Revenue pipeline",
    value: "$12,480",
    change: "+18.2%",
    note: "Proyección mensual",
    icon: CircleDollarSign,
  },
  {
    label: "Demos agendadas",
    value: "118",
    change: "+24%",
    note: "Desde la landing",
    icon: MessageSquareText,
  },
  {
    label: "Conversión",
    value: "9.6%",
    change: "+3.1%",
    note: "Visitante a lead",
    icon: LineChart,
  },
]

const pipelineRows = [
  ["Hero y promesa", "Listo", "98", "Alta"],
  ["Prueba social", "Listo", "91", "Alta"],
  ["CTA principal", "Optimizado", "95", "Crítica"],
  ["Responsive mobile", "Listo", "89", "Media"],
]

const testimonials = [
  {
    name: "Camila Torres",
    role: "Growth Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    quote: "Se siente como un producto serio desde el primer vistazo. Mucho más claro para vender.",
  },
  {
    name: "Diego Salas",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    quote: "El dashboard visual ayudó a explicar valor sin llenar la página de texto.",
  },
]

function App() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_12%_18%,rgba(148,163,184,0.08),transparent_26%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px]">
        <aside className="hidden min-h-screen w-72 border-r bg-sidebar/80 px-4 py-5 backdrop-blur-xl lg:block">
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-10 items-center justify-center rounded-lg border bg-background text-foreground shadow-sm">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Northstar</p>
              <p className="text-xs text-muted-foreground">Conversion OS</p>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-2 rounded-lg border bg-background/60 px-3 py-2 text-sm text-muted-foreground">
            <Search className="size-4" />
            Buscar módulo
            <Command className="ml-auto size-3.5" />
          </div>

          <nav className="mt-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  item.active
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
                {item.active ? <ChevronRight className="ml-auto size-4" /> : null}
              </a>
            ))}
          </nav>

          <Separator className="my-6" />

          <Card className="border-sidebar-border bg-background/55">
            <CardHeader className="p-4">
              <CardTitle className="text-sm">Score de UX</CardTitle>
              <CardDescription>Estado actual de la landing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-4 pt-0">
              <div className="flex items-end justify-between">
                <span className="text-3xl font-semibold">94</span>
                <Badge variant="secondary">Premium</Badge>
              </div>
              <Progress value={94} />
            </CardContent>
          </Card>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b bg-background/82 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 lg:hidden">
                <div className="flex size-9 items-center justify-center rounded-lg border bg-background text-foreground">
                  <Sparkles className="size-4" />
                </div>
                <span className="text-sm font-semibold">Northstar</span>
              </div>
              <Tabs defaultValue="overview" className="hidden md:block">
                <TabsList className="bg-muted/60">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="funnels">Funnels</TabsTrigger>
                  <TabsTrigger value="experiments">Experiments</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="hidden border-border/70 bg-background/60 sm:inline-flex">
                  Ver métricas
                </Button>
                <Button>
                  Lanzar campaña
                  <Rocket />
                </Button>
              </div>
            </div>
          </header>

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <section className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
              <div className="flex min-h-[520px] flex-col justify-between rounded-xl border bg-card/72 p-6 shadow-2xl shadow-black/20 backdrop-blur xl:p-8">
                <div>
                  <Badge className="mb-6 border border-blue-500/20 bg-blue-500/10 text-blue-200 hover:bg-blue-500/10">
                    <Sparkles className="mr-1 size-3.5" />
                    Dark premium shadcn blocks
                  </Badge>
                  <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-normal text-foreground sm:text-5xl xl:text-6xl">
                    Landing que se siente como un producto SaaS de alto nivel.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                    Northstar combina una landing comercial con un dashboard visual para comunicar valor, confianza y momentum en segundos.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg">
                      Solicitar demo
                      <ArrowRight />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-background/50">
                      Ver sistema UX
                    </Button>
                  </div>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    ["42%", "más leads calificados"],
                    ["18 h", "para lanzar"],
                    ["3.2x", "mejor lectura"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-lg border bg-background/55 p-4">
                      <p className="text-2xl font-semibold">{value}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                  {metricCards.map((metric) => (
                    <Card key={metric.label} className="bg-card/72 shadow-xl shadow-black/10">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                            <p className="mt-2 text-3xl font-semibold">{metric.value}</p>
                          </div>
                          <div className="flex size-10 items-center justify-center rounded-lg border bg-background text-blue-300">
                            <metric.icon className="size-5" />
                          </div>
                        </div>
                        <div className="mt-5 flex items-center justify-between text-sm">
                          <span className="font-medium text-blue-300">{metric.change}</span>
                          <span className="text-muted-foreground">{metric.note}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <Card className="bg-card/72 shadow-xl shadow-black/10">
                <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>Total visitors</CardTitle>
                    <CardDescription>Leads y demos generados por la landing.</CardDescription>
                  </div>
                  <Tabs defaultValue="6m">
                    <TabsList className="bg-muted/60">
                      <TabsTrigger value="30d">30 días</TabsTrigger>
                      <TabsTrigger value="3m">3 meses</TabsTrigger>
                      <TabsTrigger value="6m">6 meses</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[280px] w-full">
                    <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                      <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                      <Area
                        dataKey="leads"
                        type="natural"
                        fill="var(--color-leads)"
                        fillOpacity={0.22}
                        stroke="var(--color-leads)"
                        strokeWidth={2}
                      />
                      <Area
                        dataKey="demos"
                        type="natural"
                        fill="var(--color-demos)"
                        fillOpacity={0.16}
                        stroke="var(--color-demos)"
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card className="bg-card/72 shadow-xl shadow-black/10">
                <CardHeader>
                  <CardTitle>Checklist premium</CardTitle>
                  <CardDescription>Lo que mejora la percepción de producto.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    ["Jerarquía visual", 96],
                    ["Confianza comercial", 91],
                    ["Claridad de CTA", 94],
                    ["Responsive", 89],
                  ].map(([label, value]) => (
                    <div key={label} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>{label}</span>
                        <span className="text-muted-foreground">{value}%</span>
                      </div>
                      <Progress value={Number(value)} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
              <Card className="bg-card/72 shadow-xl shadow-black/10">
                <CardHeader>
                  <CardTitle>Pipeline de diseño</CardTitle>
                  <CardDescription>Secciones críticas listas para producción.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Bloque</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Prioridad</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pipelineRows.map(([block, status, score, priority]) => (
                        <TableRow key={block}>
                          <TableCell className="font-medium">{block}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{status}</Badge>
                          </TableCell>
                          <TableCell>{score}</TableCell>
                          <TableCell className="text-muted-foreground">{priority}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className="bg-card/72 shadow-xl shadow-black/10">
                    <CardContent className="p-6">
                      <div className="flex gap-1 text-blue-300">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-5 leading-7 text-muted-foreground">"{testimonial.quote}"</p>
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
            </section>

            <section className="mt-6 rounded-xl border bg-foreground p-6 text-background shadow-2xl shadow-black/20 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <Badge className="border-black/10 bg-black/10 text-background hover:bg-black/10">
                    <ShieldCheck className="mr-1 size-3.5" />
                    Deploy listo en Vercel
                  </Badge>
                  <h2 className="mt-4 text-3xl font-semibold tracking-normal sm:text-4xl">
                    Una landing dark premium, diseñada para verse seria y convertir mejor.
                  </h2>
                </div>
                <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                  Empezar ahora
                  <Zap />
                </Button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
