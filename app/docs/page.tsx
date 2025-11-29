"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code, BookOpen, GitBranch } from 'lucide-react'

export default function Docs() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Documentation"
        description="Everything you need to integrate Ztake Payments into your application"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Code, title: "API Reference", desc: "Comprehensive REST API documentation with examples in multiple languages", link: "https://docs.ztake.in", linkText: "View API Docs" },
              { icon: BookOpen, title: "Guides", desc: "Step-by-step integration guides for web, mobile, and custom implementations", link: "/docs/guides", linkText: "Read Guides" },
              { icon: GitBranch, title: "SDKs & Tools", desc: "Official SDKs for JavaScript, Python, Ruby, Java, and Go with example projects", link: "/docs/sdks", linkText: "Browse SDKs" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <GlassCard className="p-8 h-full flex flex-col" glow hover>
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {item.desc}
                  </p>
                  <a href={item.link} className="text-primary font-semibold hover:underline inline-flex items-center group">
                    {item.linkText} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <GlassCard className="p-12" glow>
              <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
              <div className="space-y-8">
                {[
                  { title: "1. Get Your API Keys", desc: "Sign up for a Ztake account and generate your API keys from the dashboard" },
                  { title: "2. Install SDKs", desc: "Install the Ztake SDK for your platform (JavaScript, Python, etc.)" },
                  { title: "3. Integrate Payment Flow", desc: "Follow our guides to integrate the payment checkout into your application" },
                  { title: "4. Test & Deploy", desc: "Use test keys to verify your integration, then go live with production keys" }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title.substring(3)}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
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
