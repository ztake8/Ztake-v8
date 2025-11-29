"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BookOpen, FileText, Code, Zap, Shield, CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function Guides() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <Navbar />

            <PageHeader
                title="Integration Guides"
                description="Step-by-step guides to help you integrate Ztake into your application"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Quick Start Guide */}
                    <ScrollReveal>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
                            <GlassCard className="p-8" glow>
                                <div className="space-y-6">
                                    {[
                                        { icon: CheckCircle, title: "Create Account", desc: "Sign up for a Ztake account at dashboard.ztake.in" },
                                        { icon: Code, title: "Get API Keys", desc: "Navigate to Settings → API Keys and generate your test and live keys" },
                                        { icon: Zap, title: "Install SDK", desc: "Choose your preferred language SDK and install via npm, pip, or gem" },
                                        { icon: Shield, title: "Test Integration", desc: "Use test mode to verify your integration before going live" }
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex gap-4 items-start">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                                                <step.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                <p className="text-muted-foreground">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    </ScrollReveal>

                    {/* Integration Guides */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { icon: Code, title: "Web Integration", desc: "Integrate Ztake into your web application using JavaScript or React", topics: ["Payment Button", "Checkout Flow", "Webhooks", "Error Handling"] },
                            { icon: BookOpen, title: "Mobile Integration", desc: "Build payment flows for iOS and Android applications", topics: ["React Native SDK", "Flutter Plugin", "Native iOS/Android", "Deep Linking"] },
                            { icon: FileText, title: "Backend Integration", desc: "Server-side integration guides for secure payment processing", topics: ["API Authentication", "Create Orders", "Verify Payments", "Refunds"] },
                            { icon: Shield, title: "Security Best Practices", desc: "Ensure your integration follows security standards", topics: ["API Key Management", "Signature Verification", "PCI Compliance", "Data Encryption"] }
                        ].map((guide, idx) => (
                            <ScrollReveal key={idx} delay={idx * 150}>
                                <GlassCard className="p-8 h-full" glow hover>
                                    <guide.icon className="w-12 h-12 mb-4 text-primary" />
                                    <h3 className="text-2xl font-bold mb-3">{guide.title}</h3>
                                    <p className="text-muted-foreground mb-4">{guide.desc}</p>
                                    <div className="space-y-2">
                                        {guide.topics.map((topic, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="https://docs.ztake.in" className="mt-6 inline-flex items-center text-primary font-semibold hover:underline group">
                                        Read More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </GlassCard>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Additional Resources */}
                    <ScrollReveal delay={400}>
                        <div className="mt-16">
                            <GlassCard className="p-8 text-center" glow>
                                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                                <p className="text-muted-foreground mb-6">Our support team is here to assist you with your integration</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact">
                                        <button className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition-transform">
                                            Contact Support
                                        </button>
                                    </Link>
                                    <Link href="https://docs.ztake.in">
                                        <button className="px-6 py-3 rounded-full glass-light dark:glass-dark font-semibold hover:scale-105 transition-transform">
                                            View Full Documentation
                                        </button>
                                    </Link>
                                </div>
                            </GlassCard>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    )
}
