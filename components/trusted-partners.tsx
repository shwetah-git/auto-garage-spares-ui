import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const trustedPartners=[
    {
        title: "VALVOLINE",
        description: "Authorized partner for maintenance, genuine parts and sepcilized care",
      },
      {
        title: "TATA Motors",
        description: "Authorized partner for maintenance, genuine parts and sepcilized care",
      },
      {
        title: "Mahindra",
        description: "Authorized partner for maintenance, genuine parts and sepcilized care",
      },
      {
        title: "L&T",
        description: "Authorized partner for maintenance, genuine parts and sepcilized care",
      },
      {
        title: "BHARATBENZ",
        description: "Authorized partner for maintenance, genuine parts and sepcilized care",
      }
]

export function TrustedPartners() {
    return (
      <section id="trustedPartners" className="py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              We provide authorized care
            </h2>
            <p className="text-pretty max-w-2xl text-lg text-foreground/60">
              Trusted by thousands of drivers for reliable, professional automotive service
            </p>
          </div>
  
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trustedPartners.map((trustedPartner, index) => (
              <Card key={index} className="border-border bg-background/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                    <CardTitle className="text-foreground">{trustedPartner.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/60">{trustedPartner.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }
