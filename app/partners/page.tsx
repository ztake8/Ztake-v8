"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { Users, TrendingUp, Globe } from 'lucide-react'

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Partnership Program"
        description="Grow your business by partnering with Ztake Payments"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, title: "Reseller Program", desc: "Become a Ztake reseller and earn competitive commissions", cta: "Learn More" },
              { icon: TrendingUp, title: "Affiliate Program", desc: "Refer customers and earn recurring commissions", cta: "Join Now" },
              { icon: Globe, title: "Integration Partners", desc: "Integrate Ztake into your platform or app", cta: "Partner With Us" }
            ].map((program, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <GlassCard className="p-8 text-center h-full flex flex-col" glow hover>
                  <program.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {program.desc}
                  </p>
                  <PillButton variant="outline" href="/contact" className="w-full">{program.cta}</PillButton>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <GlassCard className="p-12 text-center" glow tilt>
              <h2 className="text-3xl font-bold mb-4">Why Partner With Ztake?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We provide competitive commissions, marketing support, and a dedicated partner team to help you succeed.
              </p>
              <PillButton variant="default" size="lg" href="/contact">Get Started</PillButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
