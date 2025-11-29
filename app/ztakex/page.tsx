"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { Wallet, CreditCard, TrendingUp, Shield } from 'lucide-react'

export default function ZtakeX() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="ZtakeX Business Banking"
        description="Complete banking solutions for businesses - payouts, corporate cards, and more"
      >
        <PillButton variant="default" size="lg" href="/contact">
          Get Business Banking
        </PillButton>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Wallet, title: "Instant Payouts", desc: "Withdraw funds 24/7 with real-time settlements" },
              { icon: CreditCard, title: "Corporate Cards", desc: "Virtual and physical cards for your team" },
              { icon: TrendingUp, title: "Business Analytics", desc: "Deep insights into your cash flow" },
              { icon: Shield, title: "Security", desc: "Enterprise-grade security for your funds" }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
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
