"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
              <span className="text-lg font-bold text-accent-foreground">⚙️</span>
            </div>
            <span className="hidden text-xl font-bold text-foreground sm:inline">Atul Auto Mechanic Garage</span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#search-part"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Spares
            </a>
            <a
              href="#trustedPartners"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Trusted partners
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <Button className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex">
            Book Service
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="flex flex-col gap-4 py-4 md:hidden">
            <a
              href="#services"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="#search-part"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Spares
            </a>
            <a
              href="#trustedPartners"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Trusted partners
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Why Us
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Book Service</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
