"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedGradientBgProps {
    className?: string
    children?: React.ReactNode
}

export function AnimatedGradientBg({ className, children }: AnimatedGradientBgProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let width = window.innerWidth
        let height = window.innerHeight

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
        }

        window.addEventListener("resize", resize)
        resize()

        // Orb configuration
        const orbs = [
            { x: Math.random() * width, y: Math.random() * height, r: 300, color: "rgba(0, 122, 255, 0.15)", vx: 0.5, vy: 0.5 }, // Blue
            { x: Math.random() * width, y: Math.random() * height, r: 400, color: "rgba(88, 86, 214, 0.15)", vx: -0.3, vy: 0.4 }, // Purple
            { x: Math.random() * width, y: Math.random() * height, r: 350, color: "rgba(255, 45, 85, 0.1)", vx: 0.4, vy: -0.3 }, // Pink
            { x: Math.random() * width, y: Math.random() * height, r: 250, color: "rgba(0, 255, 255, 0.1)", vx: -0.5, vy: -0.5 }, // Cyan
        ]

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            orbs.forEach((orb) => {
                // Move orbs
                orb.x += orb.vx
                orb.y += orb.vy

                // Bounce off walls
                if (orb.x < -orb.r || orb.x > width + orb.r) orb.vx *= -1
                if (orb.y < -orb.r || orb.y > height + orb.r) orb.vy *= -1

                // Draw orb
                const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r)
                gradient.addColorStop(0, orb.color)
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2)
                ctx.fill()
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className={cn("relative overflow-hidden", className)}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40"
            />
            <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[80px] pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    )
}
