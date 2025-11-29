"use client"

import { useEffect, useRef, useState } from 'react'

class SoundManager {
    private audioContext: AudioContext | null = null
    private clickBuffer: AudioBuffer | null = null
    private enabled: boolean = true
    private initialized: boolean = false

    constructor() {
        // Check localStorage for user preference
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('sounds_enabled')
            this.enabled = saved !== 'false'
        }
    }

    async init() {
        if (this.initialized) return

        try {
            // Create AudioContext on first user interaction
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

            // Fetch and decode audio
            const response = await fetch('/sounds/click.wav')
            const arrayBuffer = await response.arrayBuffer()
            this.clickBuffer = await this.audioContext.decodeAudioData(arrayBuffer)

            this.initialized = true
        } catch (error) {
            console.warn('Failed to initialize sound effects:', error)
        }
    }

    play() {
        if (!this.enabled || !this.audioContext || !this.clickBuffer) return

        try {
            const source = this.audioContext.createBufferSource()
            const gainNode = this.audioContext.createGain()

            source.buffer = this.clickBuffer
            gainNode.gain.value = 0.3 // 30% volume

            source.connect(gainNode)
            gainNode.connect(this.audioContext.destination)

            source.start(0)
        } catch (error) {
            // Silently fail - don't interrupt user experience
        }
    }

    setEnabled(enabled: boolean) {
        this.enabled = enabled
        if (typeof window !== 'undefined') {
            localStorage.setItem('sounds_enabled', enabled.toString())
        }
    }

    isEnabled() {
        return this.enabled
    }
}

// Global singleton
let soundManager: SoundManager | null = null

export function useSoundEffects() {
    const [isEnabled, setIsEnabled] = useState(true)
    const managerRef = useRef<SoundManager | null>(null)

    useEffect(() => {
        if (!managerRef.current) {
            if (!soundManager) {
                soundManager = new SoundManager()
            }
            managerRef.current = soundManager
            setIsEnabled(soundManager.isEnabled())
        }
    }, [])

    const playClick = () => {
        managerRef.current?.play()
    }

    const initSounds = async () => {
        await managerRef.current?.init()
    }

    const toggleSounds = () => {
        const newState = !isEnabled
        setIsEnabled(newState)
        managerRef.current?.setEnabled(newState)
    }

    return {
        playClick,
        initSounds,
        toggleSounds,
        isEnabled
    }
}
