"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Lock, Eye, AlertCircle } from 'lucide-react'

export default function Security() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Security & Compliance"
        description="Enterprise-grade security to protect your business and customers"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: Shield, title: "Certifications", items: ["PCI DSS Level 1", "ISO 27001", "SOC 2 Type II", "GDPR Compliant"] },
              { icon: Lock, title: "Encryption", items: ["AES-256 Encryption", "TLS 1.3", "End-to-End Encryption", "Tokenization"] },
              { icon: Eye, title: "Monitoring", items: ["24/7 Monitoring", "Real-time Alerts", "Fraud Detection", "Security Audits"] },
              { icon: AlertCircle, title: "Data Protection", items: ["Data Backup", "Disaster Recovery", "Access Controls", "Incident Response"] }
            ].map((sec, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <GlassCard className="p-8 h-full" glow hover>
                  <sec.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{sec.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <GlassCard className="p-12" glow>
              <h2 className="text-3xl font-bold mb-6">Your Data, Your Control</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We take security seriously. Your payment data is encrypted, tokenized, and never stored on our servers.
                We comply with all major security standards and regulations to ensure your business and your customers'
                data is protected.
              </p>
              <p className="text-lg text-muted-foreground">
                For detailed security information, please contact our security team at <a href="mailto:care@ztake.in" className="text-primary hover:underline">care@ztake.in</a>
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
