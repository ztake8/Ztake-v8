"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code2, Package, Download, Github, Terminal, BookOpen } from 'lucide-react'
import Link from "next/link"

export default function SDKs() {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
            <Navbar />

            <PageHeader
                title="SDKs & Tools"
                description="Official SDKs and libraries to integrate Ztake in your preferred language"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Official SDKs */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Official SDKs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "JavaScript / Node.js", icon: "JS", version: "v3.0.2", install: "npm install ztake-payments", color: "from-yellow-500 to-yellow-600" },
                                { name: "Python", icon: "PY", version: "v2.1.5", install: "pip install ztake", color: "from-blue-500 to-cyan-500" },
                                { name: "Ruby", icon: "RB", version: "v1.8.3", install: "gem install ztake", color: "from-red-500 to-pink-500" },
                                { name: "PHP", icon: "PHP", version: "v2.0.4", install: "composer require ztake/payments", color: "from-purple-500 to-indigo-500" },
                                { name: "Java", icon: "JAVA", version: "v1.5.2", install: "Maven/Gradle dependency", color: "from-orange-500 to-red-500" },
                                { name: "Go", icon: "GO", version: "v1.3.1", install: "go get github.com/ztake/ztake-go", color: "from-cyan-500 to-blue-500" }
                            ].map((sdk, idx) => (
                                <ScrollReveal key={idx} delay={idx * 100}>
                                    <GlassCard className="p-6 h-full" glow hover>
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sdk.color} flex items-center justify-center text-white font-bold text-sm mb-4`}>
                                            {sdk.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{sdk.name}</h3>
                                        <div className="text-sm text-muted-foreground mb-4">{sdk.version}</div>
                                        <div className="bg-black/20 dark:bg-white/5 rounded-lg p-3 mb-4 font-mono text-xs overflow-x-auto">
                                            <code>{sdk.install}</code>
                                        </div>
                                        <Link href="https://docs.ztake.in" className="w-full">
                                            <button className="w-full px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                                <BookOpen className="w-4 h-4" />
                                                Docs
                                            </button>
                                        </Link>
                                    </GlassCard>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>

                    {/* Developer Tools */}
                    <ScrollReveal>
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">Developer Tools</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: Terminal, title: "CLI Tool", desc: "Command-line interface for managing payments, webhooks, and testing", features: ["Create test payments", "Webhook testing", "Event logs", "API debugging"] },
                                    { icon: Code2, title: "Postman Collection", desc: "Pre-configured API requests for quick testing and exploration", features: ["All API endpoints", "Example requests", "Environment variables", "Response samples"] },
                                    { icon: Package, title: "Plugins & Extensions", desc: "Ready-made integrations for popular platforms", features: ["WordPress/WooCommerce", "Shopify", "Magento", "Custom CMS"] },
                                    { icon: Github, title: "Sample Projects", desc: "Open-source example applications to jumpstart your integration", features: ["E-commerce demo", "Subscription app", "Mobile checkout", "Webhook handler"] }
                                ].map((tool, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 150}>
                                        <GlassCard className="p-8" glow hover>
                                            <tool.icon className="w-12 h-12 mb-4 text-primary" />
                                            <h3 className="text-2xl font-bold mb-3">{tool.title}</h3>
                                            <p className="text-muted-foreground mb-4">{tool.desc}</p>
                                            <div className="space-y-2">
                                                {tool.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </GlassCard>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CTA */}
                    <ScrollReveal>
                        <GlassCard className="p-12 text-center" glow>
                            <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
                            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Choose your preferred SDK and start integrating Ztake payments in minutes
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                                        Get Started
                                    </button>
                                </Link>
                                <Link href="https://docs.ztake.in">
                                    <button className="px-8 py-4 rounded-full glass-light dark:glass-dark font-semibold hover:scale-105 transition-transform">
                                        View Documentation
                                    </button>
                                </Link>
                            </div>
                        </GlassCard>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
        </div>
    )
}
