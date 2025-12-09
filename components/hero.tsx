import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-foreground/5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Premium Auto Care & Repair
              </h1>
              <p className="text-pretty text-lg text-foreground/70">
                Expert automotive service with 20+ years of experience. From routine maintenance to complex repairs, we
                keep your vehicle running smoothly.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Book Appointment
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-foreground/60">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">20+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-foreground/60">Emergency Service</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />
            <img
              src="/professional-automotive-garage-mechanic-working-on.jpg"
              alt="Professional mechanic working on car"
              className="relative rounded-2xl object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
    </section>
  )
}
