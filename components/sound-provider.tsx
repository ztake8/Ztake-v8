"use client"

import { useEffect } from 'react'
import { useSoundEffects } from '@/lib/use-sound-effects'

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const { playClick, initSounds } = useSoundEffects()

    useEffect(() => {
        let initialized = false

        // Initialize on first user interaction (performance optimization)
        const handleFirstInteraction = async () => {
            if (!initialized) {
                initialized = true
                await initSounds()
                // Remove listeners after initialization
                document.removeEventListener('click', handleFirstInteraction)
                document.removeEventListener('keydown', handleFirstInteraction)
            }
        }

        document.addEventListener('click', handleFirstInteraction, { once: true, passive: true })
        document.addEventListener('keydown', handleFirstInteraction, { once: true, passive: true })

        // Global click listener with event delegation
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement

            // Check if target is a clickable element
            const isClickable = target.closest('button, a, [role="button"], [onclick]')

            if (isClickable) {
                playClick()
            }
        }

        // Use capture phase and passive for performance
        document.addEventListener('click', handleClick, { capture: true, passive: true })

        return () => {
            document.removeEventListener('click', handleClick, { capture: true })
            document.removeEventListener('click', handleFirstInteraction)
            document.removeEventListener('keydown', handleFirstInteraction)
        }
    }, [playClick, initSounds])

    return <>{children}</>
}
