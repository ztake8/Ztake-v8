"use client"

import { AnimatedGradientBg } from "@/components/animated-gradient-bg"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description: string
    children?: React.ReactNode
    className?: string
}

export function PageHeader({ title, description, children, className }: PageHeaderProps) {
    return (
        <section className={cn("relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden", className)}>
            <AnimatedGradientBg className="absolute inset-0" />

            <div className="relative max-w-7xl mx-auto z-10 text-center">
                <ScrollReveal animation="fadeInUp">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                        <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                            {title}
                        </span>
                    </h1>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay={200}>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        {description}
                    </p>
                </ScrollReveal>

                {children && (
                    <ScrollReveal animation="fadeInUp" delay={400}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {children}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    )
}
