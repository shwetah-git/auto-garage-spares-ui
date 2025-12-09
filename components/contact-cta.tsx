import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground" />
      <div className="absolute inset-0 bg-pattern opacity-10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-background sm:text-4xl lg:text-5xl">
                Ready to Get Your Vehicle Serviced?
              </h2>
              <p className="text-pretty text-lg text-background/80">
                Contact us today for a free consultation and get started with premium automotive care.
              </p>
            </div>

            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
              Schedule Appointment
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Phone size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-background">Phone</p>
                <p className="text-background/80">(+91)9860584782</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <Mail size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-background">Email</p>
                <p className="text-background/80">services@atulautomechanicgarage.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                <MapPin size={20} className="text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-background">Location</p>
                <p className="text-background/80">Atul Auto Mechanic Garage, near Bhigwan Bus Stand, Bhigwan, 413130</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
