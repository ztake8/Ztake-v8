"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface PillButtonProps {
  children: ReactNode
  href?: string
  variant?: "default" | "outline" | "ghost" | "glow"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export function PillButton({
  children,
  href,
  variant = "default",
  size = "md",
  className,
  onClick
}: PillButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full relative overflow-hidden group active:scale-95"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105",
    outline: "border border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 hover:scale-105",
    ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-105",
    glow: "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 border border-white/50"
  }

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  }

  const content = (
    <>
      {variant === 'default' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {content}
    </button>
  )
}
