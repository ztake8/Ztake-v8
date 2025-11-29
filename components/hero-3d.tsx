"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"

export function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll()

    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -150])
    const rotate = useTransform(scrollY, [0, 500], [0, 10])
    const scale = useTransform(scrollY, [0, 300], [1, 0.9])

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-glow delay-700" />
            </div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                            <span className="text-sm font-medium text-primary">Next-Gen Payment Infrastructure</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                            Payments made <br />
                            <span className="text-gradient">Limitless.</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                            Accept payments globally with the fastest, most secure gateway.
                            Designed for scale, engineered for speed.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2"
                            >
                                Get Started <ArrowRight className="w-4 h-4" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full border border-input bg-background/50 backdrop-blur-sm font-semibold hover:bg-accent transition-all"
                            >
                                Contact Sales
                            </motion.button>
                        </div>

                        <div className="pt-8 flex items-center gap-8 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary" />
                                <span className="text-sm">PCI DSS Level 1</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-sm">99.99% Uptime</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3D Visuals */}
                    <motion.div
                        style={{ y: y1, rotateX: rotate, scale }}
                        className="relative h-[600px] w-full hidden lg:block perspective-1000"
                    >
                        {/* Main Card */}
                        <motion.div
                            initial={{ opacity: 0, rotateY: -30, z: -100 }}
                            animate={{ opacity: 1, rotateY: -15, z: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[560px] glass-card p-8 flex flex-col justify-between border-white/20 shadow-2xl"
                            style={{ rotateY: -15, rotateX: 5 }}
                        >
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground font-mono">CURRENT BALANCE</p>
                                    <p className="text-2xl font-bold tracking-tight">$124,500.00</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="h-32 w-full rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-white/10 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-full h-16 bg-primary/20 blur-xl rounded-full animate-pulse" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Card Number</span>
                                        <span className="font-mono">**** 4242</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Expires</span>
                                        <span className="font-mono">12/28</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements */}
                        <motion.div
                            style={{ y: y2 }}
                            className="absolute top-20 right-10 p-4 glass-panel rounded-2xl flex items-center gap-3 animate-float"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <ArrowRight className="w-5 h-5 -rotate-45" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Payment Received</p>
                                <p className="text-sm font-bold">+$4,250.00</p>
                            </div>
                        </motion.div>

                        <motion.div
                            style={{ y: y1 }}
                            className="absolute bottom-40 left-0 p-4 glass-panel rounded-2xl flex items-center gap-3 animate-float delay-700"
                        >
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Global Reach</p>
                                <p className="text-sm font-bold">140+ Currencies</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
