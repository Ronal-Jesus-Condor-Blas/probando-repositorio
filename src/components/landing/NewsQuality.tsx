import { CalendarDays } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { communications, qualityTopics } from "@/data/institutional"
import { SectionHeading } from "@/components/landing/SectionHeading"

export function NewsQuality() {
  return (
    <section id="calidad" className="border-y bg-muted/35 py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Comunicados y Calidad"
          title="Canal institucional para documentación, certificaciones y noticias."
          description="Esta sección queda preparada para publicar contenido estático hoy y migrarlo luego a un CMS sin cambiar la estructura visual."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-innova-black">Categorías institucionales</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {qualityTopics.map((topic) => (
                <Badge key={topic} variant="secondary" className="rounded-md px-3 py-1.5">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {communications.map((item) => (
              <Card key={item.title} className="rounded-lg bg-white shadow-sm">
                <CardContent className="grid gap-5 p-6 sm:grid-cols-[auto_1fr]">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="rounded-md">{item.category}</Badge>
                      <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CalendarDays className="size-4" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-innova-black">{item.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">{item.summary}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
