"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollSectionProps {
    children: React.ReactNode
    className?: string
    effect?: "parallax" | "scale" | "reveal" | "fade"
    direction?: "up" | "down" | "left" | "right"
    speed?: number
}

export function ScrollSection({
    children,
    className,
    effect = "fade",
    direction = "up",
    speed = 0.5
}: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // Parallax Effect
    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

    // Scale Effect
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
    const opacityScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    // Reveal Effect (Clip Path)
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.4],
        ["inset(100% 0 0 0)", "inset(0 0 0 0)"]
    )

    const getMotionProps = () => {
        switch (effect) {
            case "parallax":
                return { style: { y } }
            case "scale":
                return { style: { scale, opacity: opacityScale } }
            case "reveal":
                return { style: { clipPath } }
            case "fade":
            default:
                return {
                    initial: { opacity: 0, y: direction === "up" ? 50 : direction === "down" ? -50 : 0, x: direction === "left" ? 50 : direction === "right" ? -50 : 0 },
                    whileInView: { opacity: 1, y: 0, x: 0 },
                    viewport: { once: true, margin: "-100px" },
                    transition: { duration: 0.8, ease: "easeOut" }
                }
        }
    }

    return (
        <motion.div
            ref={ref}
            className={cn("relative", className)}
            {...getMotionProps()}
        >
            {children}
        </motion.div>
    )
}
