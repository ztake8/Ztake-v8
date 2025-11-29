"use client"

import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { ScrollReveal } from "@/components/scroll-reveal"

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Payment Gateway", href: "/payments" },
      { label: "International Payments", href: "/international-payments" },
      { label: "Subscriptions", href: "/subscriptions" },
      { label: "ZtakeX Banking", href: "/ztakex" },
      { label: "Capital", href: "/capital" },
    ],
  },
  {
    title: "Developers",
    links: [
      { label: "Documentation", href: "https://docs.ztake.in" },
      { label: "API Reference", href: "https://docs.ztake.in" },
      { label: "SDKs", href: "https://docs.ztake.in" },
      { label: "Webhooks", href: "https://docs.ztake.in" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Support", href: "/support" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "API Terms of Use", href: "/api-use" },
      { label: "Security", href: "/security" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background text-foreground pt-24 pb-12 border-t border-border/40">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <ScrollReveal>
              <Link href="/">
                <div className="inline-block cursor-pointer group">
                  <Image
                    src="/ztake-logo.png"
                    alt="Ztake"
                    width={64}
                    height={64}
                    className="w-16 h-16 mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium">
                Empowering modern businesses to get paid instantly with next-gen payment infrastructure.
              </p>
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:sale@ztake.in", label: "Email" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 border border-border/50 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Links */}
          {footerSections.map((section, idx) => (
            <div key={section.title}>
              <ScrollReveal delay={idx * 100}>
                <h3 className="font-bold text-sm mb-6 text-foreground tracking-wide">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={`${section.title}-link-${linkIdx}`}>
                      {link.href.startsWith('http') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                          <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group inline-block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                        >
                          <span className="relative">
                            {link.label}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/40">
          <ScrollReveal delay={500}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground font-medium">
                © {new Date().getFullYear()} Ztake Payments. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground font-medium">
                <span>Made with precision in India</span>
                <span className="hidden md:inline w-1 h-1 rounded-full bg-muted-foreground/30" />
                <a href="mailto:care@ztake.in" className="hover:text-primary transition-colors duration-300">
                  care@ztake.in
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}
