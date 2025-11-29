"use client"

import { useEffect } from 'react'

export function CrispChat() {
    useEffect(() => {
        // Crisp Chat Integration
        window.$crisp = []
        window.CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID" // Replace with actual Crisp ID

        const script = document.createElement('script')
        script.src = 'https://client.crisp.chat/l.js'
        script.async = true
        document.getElementsByTagName('head')[0].appendChild(script)

        // Style the widget with glass effect
        const style = document.createElement('style')
        style.innerHTML = `
      .crisp-client .cc-tlyw .cc-kxkl .cc-1hqb {
        backdrop-filter: blur(24px) saturate(180%) !important;
        background: rgba(255, 255, 255, 0.72) !important;
        border: 1px solid rgba(255, 255, 255, 0.18) !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 0 40px rgba(59, 130, 246, 0.15) !important;
        border-radius: 24px !important;
      }
      
      .crisp-client[data-theme="dark"] .cc-tlyw .cc-kxkl .cc-1hqb {
        background: rgba(18, 18, 20, 0.72) !important;
        border: 1px solid rgba(255, 255, 255, 0.08) !important;
      }

 .crisp-client .cc-unoo .cc-11cc {
        background: linear-gradient(135deg, hsl(217, 91%, 60%) 0%, hsl(210, 100%, 56%) 100%) !important;
        border-radius: 50% !important;
        box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      .crisp-client .cc-unoo .cc-11cc:hover {
        transform: scale(1.1) !important;
        box-shadow: 0 8px 32px rgba(59, 130, 246, 0.5) !important;
      }
    `
        document.head.appendChild(style)

        return () => {
            // Cleanup
            const scripts = document.querySelectorAll('script[src*="crisp.chat"]')
            scripts.forEach(s => s.remove())
            style.remove()
        }
    }, [])

    return null
}

declare global {
    interface Window {
        $crisp: any[]
        CRISP_WEBSITE_ID: string
    }
}
