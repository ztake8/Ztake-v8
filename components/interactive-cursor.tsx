"use client"

import { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    color: string
    size: number
}

export function InteractiveCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        // Check if mobile device
        if (window.innerWidth <= 768 || window.matchMedia('(pointer: coarse)').matches) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particles array
        const particles: Array<Particle> = []

        let mouseX = 0
        let mouseY = 0
        let isMoving = false

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX
            mouseY = e.clientY
            isMoving = true

            const createParticle = (x: number, y: number): Particle => {
                const colors = [
                    'hsl(180, 100%, 50%)', // Cyan
                    'hsl(270, 100%, 60%)', // Purple
                    'hsl(320, 100%, 60%)', // Magenta
                    'hsl(210, 100%, 50%)', // Blue
                ]
                return {
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 3 + 1 // Random size between 1 and 4
                }
            }

            // Create particles on mouse move
            for (let i = 0; i < 3; i++) {
                particles.push(createParticle(
                    mouseX + (Math.random() - 0.5) * 20,
                    mouseY + (Math.random() - 0.5) * 20
                ))
            }

            // Limit particles
            if (particles.length > 100) {
                particles.splice(0, particles.length - 100)
            }
        }

        const handleMouseLeave = () => {
            isMoving = false
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        // Animation loop
        const animate = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            let animationFrameId: number

            // Helper function to create a new particle
            const createParticle = (x: number, y: number): Particle => {
                const colors = [
                    'hsl(180, 100%, 50%)', // Cyan
                    'hsl(270, 100%, 60%)', // Purple
                    'hsl(320, 100%, 60%)', // Magenta
                    'hsl(210, 100%, 50%)', // Blue
                ]
                return {
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 3 + 1 // Random size between 1 and 4
                }
            }

            const render = () => {
                // Skip rendering on mobile or if reduced motion is preferred
                if (window.matchMedia('(max-width: 768px)').matches ||
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    animationFrameId = requestAnimationFrame(render) // Keep requesting to check conditions
                    return
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height)

                // Update particles
                for (let i = particles.length - 1; i >= 0; i--) {
                    const particle = particles[i]

                    particle.x += particle.vx
                    particle.y += particle.vy
                    particle.life -= 0.03 // Even faster fade out
                    particle.size -= 0.15

                    if (particle.life <= 0 || particle.size <= 0) {
                        particles.splice(i, 1)
                    } else {
                        ctx.beginPath()
                        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                        // Simplified color rendering for performance
                        ctx.fillStyle = particle.color
                        ctx.globalAlpha = particle.life
                        ctx.fill()
                    }
                }
                ctx.globalAlpha = 1.0 // Reset globalAlpha after drawing particles

                animationFrameId = requestAnimationFrame(render)
            }

            const handleMouseMove = (e: MouseEvent) => {
                // Disable on mobile
                if (window.innerWidth <= 768) return

                // Throttle: only create particle every other frame or so (simple random check)
                if (Math.random() > 0.7) return

                particles.push(createParticle(e.clientX, e.clientY))

                // Optional: Limit particles if needed, though the render loop removes them
                // if (particles.length > 100) {
                //     particles.splice(0, particles.length - 100)
                // }
            }

            // handleMouseLeave is no longer needed as `isMoving` state is removed.
            // const handleMouseLeave = () => {
            //     isMoving = false
            // }

            window.addEventListener('mousemove', handleMouseMove)
            // window.addEventListener('mouseleave', handleMouseLeave) // Removed as it's not used

            // Start animation loop
            animationFrameId = requestAnimationFrame(render)

            return () => {
                window.removeEventListener('resize', resizeCanvas)
                window.removeEventListener('mousemove', handleMouseMove)
                // window.removeEventListener('mouseleave', handleMouseLeave) // Removed
                cancelAnimationFrame(animationFrameId)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
            style={{ opacity: 0.6 }}
        />
    )
}
