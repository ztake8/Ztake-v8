"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { Users, Zap, Globe } from 'lucide-react'

export default function Careers() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Join Our Team"
        description="Help us build the future of digital payments in India"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Users, title: "Great Team", desc: "Work with talented engineers, designers, and product managers" },
              { icon: Zap, title: "Fast Growth", desc: "Opportunity to grow your skills and career rapidly" },
              { icon: Globe, title: "Impact", desc: "Build products that impact millions of businesses" }
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
            <GlassCard className="p-12" glow>
              <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
              <div className="space-y-6">
                {[
                  { title: 'Senior Backend Engineer', dept: 'Engineering' },
                  { title: 'Frontend Engineer (React)', dept: 'Engineering' },
                  { title: 'Product Manager', dept: 'Product' },
                  { title: 'Sales Executive', dept: 'Sales' },
                ].map((job, i) => (
                  <div key={i} className="flex items-center justify-between pb-6 border-b border-white/10 last:border-0 group">
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-muted-foreground">{job.dept}</p>
                    </div>
                    <PillButton variant="outline" href="/contact">Apply</PillButton>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
