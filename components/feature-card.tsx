"use client"

import { GlassCard } from "@/components/glass-card"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: any
  title: string
  description: string
  features?: string[]
  href?: string
}

export function FeatureCard({ icon: Icon, title, description, features, href }: FeatureCardProps) {
  return (
    <GlassCard className="h-full p-8 flex flex-col group" hover tilt glow>
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border border-primary/10 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7 text-primary transition-colors duration-300" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{description}</p>

      {features && (
        <ul className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <Link href={href} className="mt-auto inline-block">
          <div className="flex items-center text-primary font-medium group/link">
            <span className="mr-2 group-hover/link:mr-3 transition-all duration-300">Learn more</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </div>
        </Link>
      )}
    </GlassCard>
  )
}
