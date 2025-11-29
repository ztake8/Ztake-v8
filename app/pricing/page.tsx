"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { CheckCircle } from 'lucide-react'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Simple, Transparent Pricing"
        description="No setup fees. No monthly charges. Pay only for transactions processed."
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Plan */}
            <ScrollReveal delay={0} className="h-full">
              <GlassCard className="p-8 h-full flex flex-col" hover>
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">2%</div>
                  <p className="text-muted-foreground">Per transaction</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "All payment methods",
                    "Instant settlements",
                    "24/7 Support",
                    "Basic analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <PillButton variant="outline" size="lg" href="/contact" className="w-full">
                  Get Started
                </PillButton>
              </GlassCard>
            </ScrollReveal>

            {/* Professional Plan */}
            <ScrollReveal delay={200} className="h-full">
              <GlassCard className="p-8 h-full flex flex-col border-primary/50 relative overflow-hidden" glow tilt>
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-xl text-xs font-bold tracking-wider">
                  POPULAR
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">1.5%</div>
                  <p className="text-muted-foreground">Per transaction</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "All payment methods",
                    "T+0 settlements",
                    "Priority support",
                    "Advanced analytics"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <PillButton variant="default" size="lg" href="/contact" className="w-full">
                  Get Started
                </PillButton>
              </GlassCard>
            </ScrollReveal>

            {/* Enterprise Plan */}
            <ScrollReveal delay={400} className="h-full">
              <GlassCard className="p-8 h-full flex flex-col" hover>
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <p className="text-muted-foreground">Volume-based pricing</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {[
                    "Custom features",
                    "Dedicated support",
                    "Custom integrations",
                    "SLA guarantee"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <PillButton variant="outline" size="lg" href="/contact" className="w-full">
                  Contact Sales
                </PillButton>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
