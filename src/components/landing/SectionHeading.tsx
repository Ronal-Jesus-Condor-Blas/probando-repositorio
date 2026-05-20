import { Badge } from "@/components/ui/badge"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Badge variant="outline" className="border-primary/25 bg-primary/5 text-primary">
        {eyebrow}
      </Badge>
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
    </div>
  )
}
