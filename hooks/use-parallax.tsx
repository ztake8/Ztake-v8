"use client"

import { useEffect, useState } from "react"

interface ParallaxOptions {
    speed?: number
    direction?: "up" | "down"
    disabled?: boolean
}

export function useParallax({ speed = 0.1, direction = "up", disabled = false }: ParallaxOptions = {}) {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        if (disabled) return

        const handleScroll = () => {
            const scrolled = window.scrollY
            const value = scrolled * speed
            setOffset(direction === "up" ? -value : value)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll() // Initial calculation

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [speed, direction, disabled])

    return {
        style: {
            transform: `translate3d(0, ${offset}px, 0)`,
            willChange: "transform",
        },
    }
}
