"use client"

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export function useScrollReveal() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    return { ref, inView }
}

export function ScrollReveal({ children, className = '', delay = 0 }: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const { ref, inView } = useScrollReveal()

    return (
        <div
            ref={ref}
            className={`reveal ${inView ? 'active' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

export function ScrollRevealScale({ children, className = '', delay = 0 }: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const { ref, inView } = useScrollReveal()

    return (
        <div
            ref={ref}
            className={`reveal-scale ${inView ? 'active' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}
