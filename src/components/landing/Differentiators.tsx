import { differentiators } from "@/data/institutional"
import { SectionHeading } from "@/components/landing/SectionHeading"

export function Differentiators() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <SectionHeading
          eyebrow="Diferenciales"
          title="Capacidades que sostienen una relación técnica de largo plazo."
          description="La propuesta de Innova combina fabricación local, soporte especializado y disciplina de calidad para acompañar decisiones de ingeniería y operación."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border md:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => (
            <div key={item.title} className="bg-white p-6">
              <item.icon className="size-7 text-primary" />
              <h3 className="mt-5 text-base font-semibold text-innova-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
