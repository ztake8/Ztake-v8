"use client"

import { GlassCard } from "@/components/glass-card"
import { Quote } from 'lucide-react'
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <GlassCard className="h-full p-8 flex flex-col relative group" hover glow>
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        <Quote className="w-16 h-16 text-primary rotate-180" />
      </div>

      <div className="mb-6 relative z-10">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Quote className="w-5 h-5 text-primary" />
        </div>
        <p className="text-lg text-foreground/90 leading-relaxed italic">"{quote}"</p>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-lg font-bold text-muted-foreground">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}, <span className="text-primary">{company}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
