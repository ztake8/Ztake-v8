"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X, LogIn } from 'lucide-react'
import { useTheme } from "@/components/theme-provider"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Payments", href: "/payments" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "ZtakeX", href: "/ztakex" },
  { label: "Capital", href: "/capital" },
  { label: "Developers", href: "/docs" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "backdrop-blur-[60px] bg-white/80 dark:bg-black/80 border-b border-white/20 dark:border-white/10 shadow-lg py-1"
          : "backdrop-blur-[20px] bg-white/60 dark:bg-black/60 border-b border-white/10 dark:border-white/5 py-2"
      )}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12 sm:h-14">

          {/* Logo with ZTAKE text - Smaller & Minimal */}
          <Link href="/">
            <div className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src="/ztake-logo.png"
                  alt="Ztake Logo"
                  width={32}
                  height={32}
                  className="h-6 sm:h-8 w-auto select-none relative z-10 transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
              <span className="text-sm sm:text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">ZTAKE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium cursor-pointer relative overflow-hidden group",
                      "transition-all duration-300",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-foreground/70 hover:text-foreground"
                    )}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-full" />
                    )}
                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full backdrop-blur-[20px] bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/10"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <div className="hidden md:flex items-center space-x-3">
              <Link href="/contact">
                <div className={cn(
                  "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full",
                  "h-10 px-6 text-sm border border-white/10 bg-white/5 backdrop-blur-md",
                  "hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer"
                )}>
                  Contact
                </div>
              </Link>
              <a href="https://ztake.in/login">
                <div className={cn(
                  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full",
                  "h-10 px-6 text-sm relative overflow-hidden group",
                  "bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/25",
                  "hover:shadow-primary/40 hover:scale-105 active:scale-95 cursor-pointer"
                )}>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <LogIn className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Login</span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2.5 rounded-full backdrop-blur-[20px] bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] p-4 transition-all duration-500 ease-in-out origin-top z-50",
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="rounded-[2rem] backdrop-blur-[80px] bg-white/90 dark:bg-black/90 border border-white/20 dark:border-white/10 shadow-2xl overflow-hidden animate-slideUp ring-1 ring-black/5 dark:ring-white/5">
          <div className="p-2 space-y-1">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/")

              return (
                <Link key={link.href} href={link.href}>
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-6 py-4 rounded-[24px] text-base font-medium cursor-pointer transition-all duration-300",
                      "hover:bg-black/5 dark:hover:bg-white/10 active:scale-[0.98]",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80"
                    )}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                  >
                    {link.label}
                  </div>
                </Link>
              )
            })}

            <div className="grid grid-cols-2 gap-2 p-2 mt-2 border-t border-black/5 dark:border-white/5">
              <Link href="/contact">
                <div className={cn(
                  "flex items-center justify-center px-4 py-4 rounded-[24px] text-sm font-medium cursor-pointer transition-all duration-300 text-center",
                  "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 active:scale-95"
                )}>
                  Contact
                </div>
              </Link>
              <a href="https://ztake.in/login">
                <div className={cn(
                  "flex items-center justify-center gap-2 px-4 py-4 rounded-[24px] text-sm font-medium cursor-pointer transition-all duration-300",
                  "bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-lg shadow-primary/20"
                )}>
                  <LogIn className="w-4 h-4" />
                  Login
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
