"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { PillButton } from "@/components/pill-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ScrollRevealScale } from "@/components/scroll-reveal"
import { ArrowRight, Check, Zap, Shield, Globe, Smartphone, CreditCard, TrendingUp, CheckCircle, Clock, Sparkles } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

// Dynamic imports for heavy client components
const InteractiveCursor = dynamic(() => import("@/components/interactive-cursor").then(mod => mod.InteractiveCursor), {
  ssr: false,
  loading: () => null
})

const CertificationsBadge = dynamic(() => import("@/components/certifications-badge").then(mod => mod.CertificationsBadge), {
  ssr: false,
  loading: () => null
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate shorter loading time for better UX/Performance perception
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced from 2000ms

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background z-50 fixed inset-0">
        <div className="relative flex flex-col items-center">
          <div className="relative w-24 h-24 mb-8">
            {/* Pulsing glow behind logo */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse-glow" />
            <Image
              src="/zt-logo.svg"
              alt="Ztake Loading"
              width={96}
              height={96}
              className="w-full h-full relative z-10 animate-bounce-subtle drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]"
              priority
            />
          </div>
          <div className="w-48 h-1 bg-muted/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent animate-loading-bar" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <InteractiveCursor />

      <Navbar />

      {/* Hero Section - Apple Style with proper top padding */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh opacity-40 dark:opacity-20" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float opacity-50 sm:opacity-100" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-float opacity-50 sm:opacity-100" style={{ animationDelay: '2s' }} />

        <div className="relative z-20 max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass-dark mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Next-Gen Payment Infrastructure</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Payments made <br />
              <span className="gradient-text animate-text-glow">Limitless.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Accept payments globally with the fastest, most secure gateway.
              Designed for scale, engineered for speed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-primary text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 whitespace-nowrap">
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-light dark:glass-dark font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                  Contact Sales
                </button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <div className="relative z-20 mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border/40 pt-12">
            {[
              { label: "Active Merchants", value: "10K+" },
              { label: "Processed", value: "₹500Cr+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Global Currencies", value: "100+" }
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={200 + (idx * 100)}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/70 font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Minimal & Powerful */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Everything you need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete payment infrastructure for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Secure Payments",
                desc: "Bank-grade encryption with PCI DSS Level 1 compliance",
                glow: "glow-cyan"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Process payments in milliseconds with 99.9% uptime",
                glow: "glow-purple"
              },
              {
                icon: TrendingUp,
                title: "Smart Analytics",
                desc: "Real-time insights to grow your business faster",
                glow: "glow-magenta"
              },
              {
                icon: CheckCircle,
                title: "Easy Integration",
                desc: "RESTful APIs with comprehensive documentation",
                glow: "glow-cyan"
              },
              {
                icon: Shield,
                title: "Fraud Protection",
                desc: "AI-powered fraud detection and prevention",
                glow: "glow-purple"
              },
              {
                icon: Clock,
                title: "Instant Settlements",
                desc: "Get your money faster with instant payouts",
                glow: "glow-magenta"
              }
            ].map((feature, idx) => (
              <ScrollRevealScale key={idx} delay={idx * 100}>
                <div className={`glass-ios p-8 hover:${feature.glow} animate-pulse-glow`}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollRevealScale>
            ))}
          </div>
        </div>
      </section>

      {/* Apple iMessage Style Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Trusted by Businesses</h2>
            <p className="text-xl text-muted-foreground">See what our customers have to say</p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "CTO at TechStart Solutions",
                message: "Ztake has revolutionized our payment processing. The integration was seamless and the support team is exceptional.",
                initials: "RK",
                color: "from-cyan-500 to-blue-500"
              },
              {
                name: "Priya Sharma",
                role: "Operations Manager at E-commerce Plus",
                message: "Outstanding service and reliability. Our transaction success rate has improved significantly since switching to Ztake.",
                initials: "PS",
                color: "from-purple-500 to-pink-500",
                align: "right"
              },
              {
                name: "Amit Patel",
                role: "Founder at Digital Ventures",
                message: "The analytics dashboard provides incredible insights. Ztake is definitely the best payment gateway we have used.",
                initials: "AP",
                color: "from-green-500 to-emerald-500"
              }
            ].map((testimonial, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <div className={`flex ${testimonial.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-lg ${testimonial.align === 'right' ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-flex items-start gap-3 ${testimonial.align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`bg-gradient-to-br ${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <div className={`bg-white dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/30 ${testimonial.align === 'right' ? 'rounded-tr-sm' : 'rounded-tl-sm'}`}>
                          <p className="text-lg leading-relaxed mb-4">{testimonial.message}</p>
                        </div>
                        <div className={`mt-2 px-2 ${testimonial.align === 'right' ? 'text-right' : 'text-left'}`}>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal & Elegant */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass-ios p-16 relative overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent" />

              <div className="relative z-10 text-center">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of businesses already using Ztake to process their payments securely and efficiently
                </p>

                <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link href="/contact">
                    <button className="group px-6 py-3 md:px-10 md:py-5 rounded-full gradient-primary text-white font-semibold text-sm md:text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                      <span className="flex items-center gap-2">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="px-6 py-3 md:px-10 md:py-5 rounded-full glass-light dark:glass-dark font-semibold text-sm md:text-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CertificationsBadge />
      <Footer />
    </div>
  )
}
