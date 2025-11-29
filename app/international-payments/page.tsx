"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PillButton } from "@/components/pill-button"
import { Globe, DollarSign, Zap, Shield, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function InternationalPayments() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Global Payment Gateway"
        description="Accept international payments in over 100+ currencies from all major international cards"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Simplify global transactions and expand your reach worldwide, effortlessly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PillButton variant="default" size="lg" href="/contact">
              Get Started
            </PillButton>
            <PillButton variant="outline" size="lg" href="/contact">
              Contact Sales
            </PillButton>
          </div>
        </div>
      </PageHeader>

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Currencies Supported" },
              { value: "200+", label: "Countries Supported" },
              { value: "T+2", label: "Settlement Cycle" },
              { value: "99.9%", label: "Success Rate" }
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accept payments globally with Ztake's International Payment Gateway
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Card Acceptance", desc: "Accept payments seamlessly globally from any Visa, Mastercard, Maestro, and Amex cards", features: ["3DS 2.0 authentication", "Secure global transactions", "Multi-card support", "Instant verification"] },
              { icon: DollarSign, title: "100+ Currencies", desc: "Support for major currencies across the globe", features: ["USD, EUR, GBP, JPY", "Asian currencies", "Emerging market support", "Real-time rates"] },
              { icon: CheckCircle2, title: "Address Verification", desc: "Boost transaction success rates for USA and Canada with AVS", features: ["AVS integration", "Higher approval rates", "Fraud prevention", "Automatic validation"] },
              { icon: Zap, title: "Frictionless Checkout", desc: "Experience smooth authentication checkout for international transactions", features: ["Quick checkout flow", "Minimal friction", "Mobile optimized", "One-click payments"] },
              { icon: Shield, title: "FIRC Compliance", desc: "Ensure hassle-free international shipping controls", features: ["Monthly FIRC reports", "Tax compliance", "Export documentation", "Regulatory support"] },
              { icon: TrendingUp, title: "High Success Rates", desc: "Achieve over 75% higher success rate on secure transactions", features: ["Advanced routing", "Smart retries", "Conversion optimization", "Risk management"] }
            ].map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                  features={feature.features}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Suitable for All Businesses</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accept international payments and expand your reach worldwide
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "E-commerce", desc: "Expand your online business globally by meeting the international demand for your products. Transcend borders and facilitate seamless transactions worldwide.", items: ["Global market access", "Multi-currency pricing", "Cross-border transactions"] },
              { title: "Travel & Hospitality", desc: "Enable seamless booking and payment experiences for international travelers with instant currency conversion and settlement.", items: ["Booking integration", "Instant settlements", "24/7 support"] },
              { title: "SaaS & Software", desc: "Collect recurring payments from international customers with flexible billing and subscription management.", items: ["Recurring billing", "Subscription management", "Flexible billing cycles"] },
              { title: "Digital Services", desc: "Accept payments from customers worldwide for digital products, courses, and services with automatic delivery.", items: ["Instant delivery", "Automated workflows", "Global reach"] }
            ].map((useCase, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <GlassCard className="p-8 h-full flex flex-col" glow hover>
                  <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {useCase.desc}
                  </p>
                  <ul className="space-y-3">
                    {useCase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Lowest International Payment Charges</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No setup, maintenance, or hidden fees. Pay only for actual transactions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { type: "Visa & Mastercard", rate: "2.99%", desc: "Per transaction" },
              { type: "PayPal", rate: "Varies", desc: "Standard payment gateway rates" },
              { type: "American Express", rate: "2.95%", desc: "Per transaction" }
            ].map((plan, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <GlassCard className="p-8 text-center h-full" glow hover>
                  <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                    <span className="text-sm font-semibold text-primary">{plan.type}</span>
                  </div>
                  <div className="text-4xl font-bold mb-4">{plan.rate}</div>
                  <p className="text-muted-foreground">{plan.desc}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <GlassCard className="p-8" glow>
              <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
              <p className="text-muted-foreground mb-6">
                Custom pricing designed for enterprises with dedicated account manager, early access to features, and discounted rates.
              </p>
              <PillButton variant="default" href="/contact">Contact Sales</PillButton>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Currencies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Supported Currencies</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accept payments in 100+ currencies and receive settlement in INR
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "SGD", "HKD", "INR", "MYR"].map((currency, idx) => (
              <ScrollReveal key={currency} delay={idx * 50}>
                <GlassCard className="p-4 text-center hover:bg-primary/10 transition-colors cursor-default" glow>
                  <p className="font-semibold">{currency}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <GlassCard className="p-12 text-center" glow tilt>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Accept International Payments?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start expanding your business globally today
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <PillButton variant="default" size="lg" href="/contact">
                  Get Started
                </PillButton>
                <PillButton variant="outline" size="lg" href="/docs">
                  View Documentation
                </PillButton>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
