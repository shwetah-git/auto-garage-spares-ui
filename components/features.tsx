import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Certified Technicians",
    description: "ASE-certified mechanics with extensive training and real-world experience",
  },
  {
    title: "State-of-the-Art Equipment",
    description: "Latest diagnostic tools and technology for accurate repairs",
  },
  {
    title: "Transparent Pricing",
    description: "Clear estimates with no hidden fees. You know exactly what to expect",
  },
  {
    title: "Warranty Coverage",
    description: "2-year warranty on all parts and labor for your peace of mind",
  },
  {
    title: "Quick Turnaround",
    description: "Fast service without compromising on quality. Same-day repairs available",
  },
  {
    title: "Customer Support",
    description: "24/7 emergency roadside assistance for our valued customers",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose our Garage
          </h2>
          <p className="text-pretty max-w-2xl text-lg text-foreground/60">
            Trusted by thousands of drivers for reliable, professional automotive service
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-background/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/60">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
