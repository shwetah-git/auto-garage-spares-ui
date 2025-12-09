import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Zap, PaintBucket, Gauge } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Maintenance",
    description: "Oil changes, filter replacements, fluid checks, and routine inspections",
  },
  {
    icon: Zap,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify and fix engine issues",
  },
  {
    icon: PaintBucket,
    title: "Paint & Bodywork",
    description: "Professional collision repair, dent removal, and custom paint jobs",
  },
  {
    icon: Gauge,
    title: "Brake Service",
    description: "Brake pad replacement, rotor resurfacing, and system inspections",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-card/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
          <p className="text-pretty max-w-2xl text-lg text-foreground/60">
            Comprehensive automotive solutions for all your vehicle needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border bg-background hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-lg bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
