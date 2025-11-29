"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"
import { useRef, useState } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  tilt?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false, tilt = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -5 // Max 5deg rotation
    const rotateY = ((x - centerX) / centerX) * 5

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    if (!tilt) return
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-[32px] overflow-hidden transition-all duration-500 ease-out",
        "glass-panel",
        hover && "hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1",
        glow && "ring-1 ring-white/50 dark:ring-white/10",
        tilt && "perspective-1000 preserve-3d",
        className,
      )}
      style={tilt ? {
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
      } : undefined}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent dark:from-white/10 dark:via-transparent dark:to-transparent pointer-events-none opacity-50" />

      {/* Reflection Effect */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Glow Effect */}
      {glow && (
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  )
}
