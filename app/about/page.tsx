"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Users, Target, Zap } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="About Ztake"
        description="Building the future of digital payments in India and beyond"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Target, title: "Our Mission", desc: "Empower businesses of all sizes to accept payments securely and efficiently" },
              { icon: Zap, title: "Our Vision", desc: "Create a world where payment acceptance is simple, secure, and accessible to all" },
              { icon: Users, title: "Our Values", desc: "Trust, Innovation, and Customer-first approach in everything we do" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <GlassCard className="p-8 text-center h-full" glow hover>
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <GlassCard className="p-12 mb-16" glow>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Ztake Payments was founded to solve the payment processing challenges faced by Indian businesses.
                  We recognized that existing solutions were either too complex or too expensive for startups and SMEs.
                </p>
                <p>
                  Today, Ztake powers thousands of businesses processing millions of transactions daily.
                  Our platform has helped merchants increase their success rates, reduce fraud, and grow their businesses.
                </p>
                <p>
                  We continue to innovate and expand our offerings to meet the evolving needs of our customers.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-8 text-center">Key Statistics</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "10K+", label: "Active Merchants" },
                { value: "₹500Cr+", label: "Transactions Processed" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "180+", label: "Payment Methods" }
              ].map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <GlassCard className="p-8 text-center" hover>
                    <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
