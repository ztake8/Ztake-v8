"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface MetricDisplayProps {
  value: string
  label: string
}

export function MetricDisplay({ value, label }: MetricDisplayProps) {
  const { ref, isVisible } = useScrollAnimation()
  const [displayValue, setDisplayValue] = useState("0")

  // Parse the numeric part and suffix
  const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""))
  const prefix = value.match(/^[^0-9]*/)?.[0] || ""
  const suffix = value.match(/[^0-9]*$/)?.[0] || ""

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = numericPart
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4)

      const current = start + (end - start) * ease

      // Format based on decimal places in original value
      const decimals = (value.split('.')[1] || '').length
      const formatted = current.toFixed(decimals > 0 ? 1 : 0)

      setDisplayValue(`${prefix}${formatted}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, value, numericPart, prefix, suffix])

  return (
    <div
      ref={ref as any}
      className={cn(
        "text-center p-8 rounded-[32px] transition-all duration-700",
        "bg-white/5 backdrop-blur-md border border-white/10",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse-glow">
        {displayValue}
      </div>
      <div className="text-lg text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
