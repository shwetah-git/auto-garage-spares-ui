import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <ContactCTA />
      <Footer />
    </main>
  )
}
