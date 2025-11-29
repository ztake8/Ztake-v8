"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { Code, GitBranch, BookOpen, Zap } from 'lucide-react'

export default function Developers() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Built for Developers"
        description="Comprehensive APIs and SDKs with excellent documentation and support"
      >
        <PillButton variant="default" size="lg" href="/docs">
          View API Docs
        </PillButton>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Code, title: "RESTful APIs", desc: "Well-designed APIs with comprehensive documentation" },
              { icon: GitBranch, title: "Multiple SDKs", desc: "JavaScript, Python, Ruby, Java, Go, and more" },
              { icon: BookOpen, title: "Great Docs", desc: "Detailed guides and examples for quick integration" },
              { icon: Zap, title: "Fast Integration", desc: "Get up and running in minutes, not days" }
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Supported Languages</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['JavaScript', 'Python', 'Ruby', 'Java', 'Go', 'PHP'].map((lang, idx) => (
              <ScrollReveal key={lang} delay={idx * 50}>
                <GlassCard className="p-8 text-center" hover glow>
                  <div className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">{lang}</div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
