"use client"

import { useState, useEffect, useRef } from 'react'
import { X, Send, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import useSWR from 'swr'
import Image from 'next/image'

interface Message {
    id: number
    direction: 'user_to_admin' | 'admin_to_user' | 'system'
    text: string
    sent_at: string
    delivered_at?: string | null
    read_at?: string | null
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [userUuid, setUserUuid] = useState<string>('')
    const [isSending, setIsSending] = useState(false)
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Initialize User Session
    useEffect(() => {
        setIsMounted(true)
        let storedUuid = localStorage.getItem('ztake_chat_uuid')
        const storedEmail = localStorage.getItem('ztake_chat_email')

        if (!storedUuid) {
            storedUuid = crypto.randomUUID()
            localStorage.setItem('ztake_chat_uuid', storedUuid)
        }
        setUserUuid(storedUuid)

        // Check if email already submitted
        if (storedEmail) {
            setEmailSubmitted(true)
        }
    }, [])

    // Fetch Messages with SWR (Polling every 3s)
    const { data, mutate } = useSWR(
        userUuid && emailSubmitted ? `/api/chat/history?userUuid=${userUuid}` : null,
        fetcher,
        { refreshInterval: 3000 }
    )

    const messages: Message[] = data?.messages || []

    // Auto-scroll
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isOpen])

    // Mark admin messages as read when user views them
    useEffect(() => {
        if (!isOpen || !userUuid || messages.length === 0) return

        const unreadAdminMessages = messages.filter(
            m => m.direction === 'admin_to_user' && !m.read_at
        )

        if (unreadAdminMessages.length > 0) {
            const messageIds = unreadAdminMessages.map(m => m.id)

            fetch('/api/chat/mark-read', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messageIds, userUuid })
            }).then(() => mutate())
        }
    }, [isOpen, messages, userUuid, mutate])

    const handleEmailSubmit = async (email: string) => {
        setIsConnecting(true)

        try {
            await fetch('/api/chat/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: `User submitted email: ${email}`,
                    userUuid: userUuid,
                    email: email,
                    isEmailSubmission: true
                })
            })

            localStorage.setItem('ztake_chat_email', email)
            setEmailSubmitted(true)

            // Show connecting message
            setTimeout(() => {
                setIsConnecting(false)
                mutate()
            }, 1500)
        } catch (error) {
            console.error('Email submission failed', error)
            setIsConnecting(false)
            alert('Failed to submit email. Please try again.')
        }
    }

    const handleSendMessage = async () => {
        if (!inputValue.trim() || !userUuid) return

        const text = inputValue.trim()
        setInputValue('')
        setIsSending(true)

        // Optimistic Update
        const tempMsg: Message = {
            id: Date.now(),
            direction: 'user_to_admin',
            text: text,
            sent_at: new Date().toISOString()
        }

        mutate({ messages: [...messages, tempMsg] }, false)

        try {
            await fetch('/api/chat/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    userUuid: userUuid
                })
            })
            mutate() // Re-fetch to confirm
        } catch (error) {
            console.error('Send failed', error)
            alert('Failed to send message. Please try again.')
        } finally {
            setIsSending(false)
        }
    }

    if (!isMounted) return null

    return (
        <>
            {/* Minimal Chat Button - Ztake Logo */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-5 right-5 z-50 w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-[32px] saturate-150",
                    "border border-white/30 dark:border-zinc-700/40 shadow-[0_8px_32px_rgba(0,0,0,0.16),0_0_0_1px_rgba(255,255,255,0.1)_inset]",
                    "hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,0,0,0.24),0_0_0_1px_rgba(255,255,255,0.15)_inset]",
                    "group"
                )}
                aria-label="Open chat"
            >
                {isOpen ? (
                    <X className="w-5 h-5 text-zinc-800 dark:text-white transition-transform duration-500 group-hover:rotate-90" />
                ) : (
                    <Image
                        src="/zt-logo.svg"
                        alt="Ztake"
                        width={26}
                        height={26}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                )}
            </button>

            {/* Chat Window - Enhanced Liquid Glass */}
            {isOpen && (
                <div className={cn(
                    "fixed bottom-[4.5rem] right-5 sm:right-5 z-50 w-[90vw] sm:w-[380px] h-[600px] max-h-[80vh] rounded-[28px] flex flex-col overflow-hidden origin-bottom-right",
                    "bg-white/85 dark:bg-zinc-900/85 backdrop-blur-[80px] saturate-150",
                    "border border-white/40 dark:border-zinc-700/50",
                    "shadow-[0_32px_64px_rgba(0,0,0,0.28),0_0_0_1px_rgba(255,255,255,0.12)_inset]",
                    "animate-in slide-in-from-bottom-10 fade-in duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    "before:absolute before:inset-0 before:rounded-[28px] before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none"
                )}>

                    {/* Header - Enhanced Liquid Glass */}
                    <div className="relative p-4 border-b border-white/20 dark:border-zinc-700/30 flex items-center justify-between backdrop-blur-[40px] bg-gradient-to-b from-white/30 to-white/10 dark:from-zinc-800/30 dark:to-zinc-800/10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Image
                                    src="/zt-logo.svg"
                                    alt="Ztake"
                                    width={36}
                                    height={36}
                                    className="relative z-10"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-md" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-zinc-900 dark:text-white">Ztake Support</h3>
                                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                    </span>
                                    Online
                                </p>
                            </div>
                        </div>
                    </div>

                    {!emailSubmitted ? (
                        /* Email Collection View - Enhanced Glass */
                        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-50/80 via-white/60 to-zinc-100/80 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-zinc-950/80 backdrop-blur-[60px]">
                            <div className="w-full max-w-sm space-y-6">
                                <div className="text-center space-y-3">
                                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/20 dark:border-zinc-700/30 shadow-xl">
                                        <Image src="/zt-logo.svg" alt="Ztake" width={48} height={48} />
                                    </div>
                                    <h2 className="text-2xl font-bold bg-gradient-to-br from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
                                        Hey, Welcome to Ztake Payments..!
                                    </h2>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Enter your email to connect with support
                                    </p>
                                </div>

                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        const form = e.target as HTMLFormElement
                                        const input = form.elements.namedItem('email') as HTMLInputElement
                                        const email = input.value.trim()
                                        if (email && email.includes('@')) {
                                            handleEmailSubmit(email)
                                        } else {
                                            alert('Please enter a valid email address')
                                        }
                                    }}
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            required
                                            disabled={isConnecting}
                                            className="w-full px-4 py-3.5 rounded-2xl bg-white/60 dark:bg-zinc-800/60 border border-zinc-300/50 dark:border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-zinc-900 dark:text-white placeholder:text-zinc-400 backdrop-blur-xl shadow-lg transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isConnecting}
                                        className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-blue-400 disabled:to-blue-500 text-white font-semibold rounded-2xl transition-all shadow-[0_8px_24px_rgba(59,130,246,0.35)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.45)] flex items-center justify-center gap-2 backdrop-blur-xl"
                                    >
                                        {isConnecting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Connecting with the Representative...
                                            </>
                                        ) : (
                                            'Continue'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <>
                            {/* Messages - Enhanced iMessage Bubbles */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-br from-zinc-50/50 via-white/30 to-zinc-100/50 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50 backdrop-blur-[40px]">
                                {messages.map((msg) => (
                                    <div
                                        key={msg.id}
                                        className={cn(
                                            "flex",
                                            msg.direction === 'user_to_admin' ? "justify-end" : "justify-start"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "max-w-[75%] px-4 py-2.5 rounded-[20px] text-[15px] leading-relaxed shadow-lg",
                                                msg.direction === 'user_to_admin'
                                                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-[6px] shadow-blue-500/30"
                                                    : "bg-white/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white rounded-tl-[6px] backdrop-blur-[40px] border border-zinc-200/50 dark:border-zinc-700/50"
                                            )}
                                        >
                                            <div className="flex flex-col">
                                                <span>{msg.text}</span>
                                                <div className={cn(
                                                    "text-[10px] mt-1.5 font-medium flex items-center gap-1",
                                                    msg.direction === 'user_to_admin' ? "text-white/70 justify-end" : "text-zinc-500 dark:text-zinc-400"
                                                )}>
                                                    <span>{new Date(msg.sent_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                    {/* Only show ticks on USER'S OWN messages (sent by user) */}
                                                    {msg.direction === 'user_to_admin' && (
                                                        <span className="flex items-center">
                                                            {msg.read_at ? (
                                                                // Double green ticks - Read by admin
                                                                <svg className="w-3.5 h-3.5 text-green-400" viewBox="0 0 16 16" fill="currentColor">
                                                                    <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                    <path d="M15.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-.5-.5.708-.708.146.147 6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                </svg>
                                                            ) : msg.delivered_at ? (
                                                                // Double grey ticks - Delivered but not read
                                                                <svg className="w-3.5 h-3.5 text-white/60" viewBox="0 0 16 16" fill="currentColor">
                                                                    <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                    <path d="M15.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-.5-.5.708-.708.146.147 6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                </svg>
                                                            ) : (
                                                                // Single grey tick - Sent
                                                                <svg className="w-3 h-3 text-white/60" viewBox="0 0 16 16" fill="currentColor">
                                                                    <path d="M13.854 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                                                                </svg>
                                                            )}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input - Enhanced Liquid Glass */}
                            <div className="p-3 bg-white/60 dark:bg-zinc-900/60 border-t border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-[60px]">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="text"
                                        placeholder="iMessage"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        className="flex-1 px-4 py-2.5 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-zinc-300/50 dark:border-zinc-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 backdrop-blur-[40px] shadow-inner"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isSending}
                                        className="p-2.5 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40"
                                    >
                                        {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    )
}
