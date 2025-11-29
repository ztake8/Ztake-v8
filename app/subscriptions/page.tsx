"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { BarChart3, Clock, Users, TrendingUp } from 'lucide-react'

export default function Subscriptions() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Subscription Management"
        description="Manage recurring billing and subscription plans with automated dunning and retention"
      >
        <PillButton variant="default" size="lg" href="/contact">
          Start Recurring Billing
        </PillButton>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Clock, title: "Flexible Billing", desc: "Support monthly, quarterly, and annual billing cycles" },
              { icon: Users, title: "Customer Portal", desc: "Let customers manage their subscriptions themselves" },
              { icon: TrendingUp, title: "Smart Dunning", desc: "Automated retry logic for failed payments" },
              { icon: BarChart3, title: "Analytics", desc: "Track churn, MRR, and lifetime value" }
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
