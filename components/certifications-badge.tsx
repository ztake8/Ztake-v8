"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { Shield, Clock, CheckCircle, Award } from 'lucide-react'

export function CertificationsBadge() {
    const certifications = [
        { icon: Shield, label: "PCI DSS Certified" },
        { icon: Clock, label: "99.9% Uptime SLA" },
        { icon: CheckCircle, label: "24/7 Support" },
        { icon: Award, label: "ISO 27001 Certified" }
    ]

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10 border-y border-border/50">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {certifications.map((cert, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center justify-center gap-3 group cursor-pointer"
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                                        <cert.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    {/* Animated ring */}
                                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100" />
                                </div>
                                <span className="text-sm md:text-base font-semibold text-center text-foreground/90 group-hover:text-foreground transition-colors">
                                    {cert.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
