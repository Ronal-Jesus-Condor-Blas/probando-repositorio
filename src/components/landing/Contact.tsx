import Link from "next/link"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { brand } from "@/config/brand"

type ContactField = {
  id: string
  label: string
  placeholder: string
  type?: "text" | "email" | "tel"
}

const fields: ContactField[] = [
  { id: "name", label: "Nombre", placeholder: "Nombre y apellido" },
  { id: "company", label: "Empresa", placeholder: "Empresa" },
  { id: "email", label: "Correo", placeholder: "correo@empresa.com", type: "email" },
  { id: "phone", label: "Teléfono", placeholder: "+51 999 999 999", type: "tel" },
  { id: "subject", label: "Asunto", placeholder: "Consulta técnica o institucional" },
] as const

export function Contact() {
  return (
    <section id="contacto" className="bg-white py-20 sm:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contacto</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal text-innova-black sm:text-4xl">
              Converse con nuestro equipo para consultas técnicas o institucionales.
            </h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <a href={`mailto:${brand.email}`} className="hover:text-primary">{brand.email}</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <span>{brand.phoneLabel}</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <span>Dirección y mapa por confirmar</span>
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8 bg-white">
              <Link href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer">
                <MessageCircle />
                Escribir por WhatsApp
              </Link>
            </Button>
          </div>

          <form className="rounded-lg border bg-muted/25 p-5 shadow-sm sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id} className={field.id === "subject" ? "sm:col-span-2" : undefined}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input id={field.id} name={field.id} type={field.type ?? "text"} placeholder={field.placeholder} className="mt-2 bg-white" />
                </div>
              ))}
              <div className="sm:col-span-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Cuéntenos brevemente su requerimiento." className="mt-2 min-h-32 bg-white" />
              </div>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">Enviar consulta</Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Formulario preparado para conectarse a Formspree, Resend, Netlify Forms o una API propia.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
