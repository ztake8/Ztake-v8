"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { ArrowUp, Bot, User, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { GlassCard } from "@/components/glass-card"
import { PillButton } from "@/components/pill-button"

export default function AssistantScreen() {
    const params = useSearchParams()
    const topic = params?.get("topic") || "general"
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        { role: 'assistant', content: '👋 Welcome to Ztake AI Assistant. How can I help you today?' }
    ])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    function pushAssistant(t: string) {
        setMessages(m => [...m, { role: 'assistant', content: t }])
    }

    function pushUser(t: string) {
        setMessages(m => [...m, { role: 'user', content: t }])
    }

    async function sendMessage() {
        if (!input.trim() || isLoading) return
        const q = input.trim()
        pushUser(q)
        setInput('')
        setIsLoading(true)

        // Add temporary loading message
        setMessages(prev => [...prev, { role: 'assistant', content: '', isLoading: true }])

        try {
            const res = await fetch('/api/chat/stream', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: q, userId: null })
            })

            if (!res.ok) {
                const err = await res.json()
                setMessages(prev => {
                    const copy = prev.slice(0, -1)
                    return [...copy, { role: 'assistant', content: 'Error: ' + (err.error || 'unknown') }]
                })
                setIsLoading(false)
                return
            }

            const reader = res.body?.getReader()
            const decoder = new TextDecoder()
            let done = false
            let assistantText = ''

            if (reader) {
                while (!done) {
                    const { value, done: readerDone } = await reader.read()
                    if (readerDone) {
                        done = true
                        break
                    }
                    const chunk = decoder.decode(value, { stream: true })
                    assistantText += chunk

                    setMessages(prev => {
                        const copy = prev.slice(0, -1)
                        return [...copy, { role: 'assistant', content: assistantText }]
                    })
                }
            }

            await fetch('/api/log', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: q, answer: assistantText })
            })
        } catch (e) {
            console.error(e)
            setMessages(prev => {
                const copy = prev.slice(0, -1)
                return [...copy, { role: 'assistant', content: 'Failed to reach chat server.' }]
            })
        } finally {
            setIsLoading(false)
        }
    }

    function handleKey(e: React.KeyboardEvent) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden selection:bg-primary/30">
            <Navbar />

            <div className="flex-1 pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full flex flex-col h-[calc(100vh-100px)]">
                <GlassCard className="flex-1 flex flex-col overflow-hidden border-primary/20 shadow-2xl shadow-primary/5" glow>
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                <Bot className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold flex items-center gap-2">
                                    Ztake AI Assistant
                                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium border border-primary/20">Beta</span>
                                </h1>
                                <p className="text-xs text-muted-foreground">Powered by advanced AI models</p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                        {messages.map((m, i) => (
                            <div key={i} className={cn('flex items-start gap-4 max-w-3xl animate-fadeIn', m.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto')}>
                                <div className={cn(
                                    'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                                    m.role === 'user' ? 'bg-primary text-black' : 'bg-white/10 text-primary'
                                )}>
                                    {m.role === 'user' ? <User className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                                </div>

                                <div className={cn(
                                    'rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-lg backdrop-blur-sm',
                                    m.role === 'user'
                                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                                        : 'bg-white/10 border border-white/10 rounded-tl-none'
                                )}>
                                    {/* @ts-ignore */}
                                    {m.isLoading ? (
                                        <div className="flex gap-1 items-center h-5">
                                            <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    ) : (
                                        <div className="whitespace-pre-wrap">{m.content}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white/5 border-t border-white/10 backdrop-blur-md">
                        <div className="relative flex items-center gap-2 max-w-4xl mx-auto">
                            <input
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKey}
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                                placeholder="Ask about integrations, UPI, payouts..."
                                disabled={isLoading}
                            />
                            <button
                                onClick={sendMessage}
                                disabled={!input.trim() || isLoading}
                                className="absolute right-2 p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
                            >
                                <ArrowUp className="w-5 h-5" />
                            </button>
                        </div>
                        <p className="text-center text-xs text-muted-foreground mt-3">
                            AI can make mistakes. Please verify important information.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </div>
    )
}
