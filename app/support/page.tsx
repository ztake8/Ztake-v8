"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MessageCircle, Mail, Phone, HelpCircle } from 'lucide-react'

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Support & Resources"
        description="We're here to help you succeed with Ztake Payments"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: MessageCircle, title: "Live Chat", desc: "Chat with our support team available 24/7" },
              { icon: Mail, title: "Email Support", desc: "support@ztake.in - Response within 2 hours" },
              { icon: Phone, title: "Phone Support", desc: "+91 9220592512 - Available 24/7" },
              { icon: HelpCircle, title: "Help Center", desc: "Browse our comprehensive FAQ and guides" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <GlassCard className="p-8 h-full" glow hover>
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
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
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: 'How do I get started?', a: 'Sign up for an account and follow our integration guide to get started.' },
                  { q: 'What payment methods do you support?', a: 'We support 180+ payment methods including UPI, cards, wallets, and net banking.' },
                  { q: 'What is your uptime guarantee?', a: 'We maintain a 99.9% uptime SLA for all our services.' },
                  { q: 'Is my data secure?', a: 'Yes, we use bank-grade encryption and maintain PCI DSS Level 1 certification.' },
                ].map((faq, i) => (
                  <div key={i} className="pb-6 border-b border-white/10 last:border-0">
                    <h3 className="text-lg font-bold mb-2 text-primary">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
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
