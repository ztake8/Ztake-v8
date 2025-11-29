"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ShoppingCart, BookOpen, Briefcase, Building2 } from 'lucide-react'

export default function Solutions() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Industry Solutions"
        description="Tailored payment solutions for different industries"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShoppingCart, title: "E-commerce", desc: "Optimize checkout for maximum conversion rates" },
              { icon: BookOpen, title: "Education", desc: "Manage fees, tuition, and course payments" },
              { icon: Briefcase, title: "SaaS", desc: "Recurring billing and subscription management" },
              { icon: Building2, title: "Enterprises", desc: "Custom solutions and dedicated support" }
            ].map((solution, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.desc}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
