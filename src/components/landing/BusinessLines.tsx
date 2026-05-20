import { businessLines } from "@/data/institutional"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/landing/SectionHeading"

export function BusinessLines() {
  return (
    <section className="border-y bg-muted/35 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Líneas de negocio"
          title="Productos y soluciones para operaciones industriales."
          description="Una oferta preparada para proyectos que requieren desempeño, respuesta técnica y documentación clara."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {businessLines.map((line) => (
            <Card key={line.title} className="rounded-lg border-border/80 bg-white shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex size-12 items-center justify-center rounded-md bg-primary text-white">
                  <line.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-innova-black">{line.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{line.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
