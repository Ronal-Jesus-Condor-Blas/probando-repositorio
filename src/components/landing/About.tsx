import { Factory, Target, Users } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/landing/SectionHeading"

const points = [
  { title: "Soluciones industriales", icon: Factory },
  { title: "Enfoque técnico", icon: Target },
  { title: "Relación institucional", icon: Users },
] as const

export function About() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Una empresa industrial orientada a confianza, desempeño y continuidad."
            description="INNOVA INDUSTRIES AMERICA SAC atiende necesidades de minería, construcción y manufactura mediante productos químicos, aditivos, fibras, polímeros y soluciones técnicas para procesos industriales."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {points.map((point) => (
              <Card key={point.title} className="rounded-lg border-primary/10 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <point.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-innova-black">{point.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
