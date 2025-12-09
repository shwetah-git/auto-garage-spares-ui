import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { TrustedPartners } from "@/components/trusted-partners"
import SearchPart from "@/components/spare-parts"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Features />
      <ContactCTA />
      <Footer />
      <TrustedPartners />
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <SearchPart />
      </section>
    </main>
  )
}
