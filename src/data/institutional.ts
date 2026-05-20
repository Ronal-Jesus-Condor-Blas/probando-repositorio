import {
  BadgeCheck,
  Beaker,
  Building2,
  ClipboardCheck,
  Factory,
  FlaskConical,
  Gauge,
  HardHat,
  Layers3,
  Recycle,
  ShieldCheck,
  Wrench,
} from "lucide-react"

export const businessLines = [
  {
    title: "Aditivos para concreto",
    description:
      "Soluciones químicas para desempeño, trabajabilidad y control técnico en proyectos de infraestructura, minería y construcción.",
    icon: Beaker,
  },
  {
    title: "Fibras para concreto y shotcrete",
    description:
      "Refuerzo orientado a aplicaciones exigentes, con soporte para especificaciones técnicas y condiciones de obra.",
    icon: Layers3,
  },
  {
    title: "Polímeros industriales",
    description:
      "Materiales y formulaciones para procesos industriales que requieren consistencia, trazabilidad y respuesta local.",
    icon: FlaskConical,
  },
  {
    title: "Soluciones químicas industriales",
    description:
      "Desarrollo y suministro de productos para manufactura, mantenimiento, tratamiento y operaciones especializadas.",
    icon: Factory,
  },
] as const

export const differentiators = [
  { title: "Fabricación local", description: "Capacidad productiva cercana al mercado peruano.", icon: Building2 },
  { title: "Soporte técnico", description: "Acompañamiento para selección, aplicación y mejora en campo.", icon: Wrench },
  { title: "Control de calidad", description: "Verificación documentada para sostener desempeño y confianza.", icon: ClipboardCheck },
  { title: "Mejora continua", description: "Procesos orientados a eficiencia, seguridad y consistencia.", icon: Gauge },
  { title: "Enfoque minero e industrial", description: "Soluciones pensadas para operaciones de alta exigencia.", icon: HardHat },
] as const

export const qualityTopics = [
  "Política de calidad",
  "Comunicados oficiales",
  "Certificaciones",
  "Seguridad, salud y medio ambiente",
  "Noticias institucionales",
] as const

export const communications = [
  {
    category: "Calidad",
    title: "Política de calidad institucional",
    date: "2026-05-19",
    summary:
      "Compromiso con la fabricación, comercialización y soporte técnico de soluciones industriales bajo criterios de calidad, cumplimiento y mejora continua.",
    icon: BadgeCheck,
  },
  {
    category: "SSOMA",
    title: "Lineamientos de seguridad, salud y medio ambiente",
    date: "2026-05-19",
    summary:
      "Difusión de prácticas internas para promover operaciones responsables, prevención de riesgos y cuidado ambiental en actividades industriales.",
    icon: ShieldCheck,
  },
  {
    category: "Institucional",
    title: "Comunicados oficiales y certificaciones",
    date: "2026-05-19",
    summary:
      "Espacio preparado para publicar certificados, comunicados corporativos, actualizaciones operativas y noticias relevantes de la empresa.",
    icon: Recycle,
  },
] as const
