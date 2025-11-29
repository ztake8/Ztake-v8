"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BookOpen, Video, FileText } from 'lucide-react'

export default function Resources() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Resources"
        description="Learn more about payments and grow your business"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Guides", desc: "Step-by-step integration guides and best practices", link: "/assistant?topic=integration-guides", linkText: "Read Guides" },
              { icon: Video, title: "Video Tutorials", desc: "Video tutorials for quick learning", link: "/assistant?topic=video-tutorials", linkText: "Watch Videos" },
              { icon: FileText, title: "Blog", desc: "Industry insights and payment trends", link: "/assistant?topic=blog", linkText: "Read Blog" }
            ].map((resource, idx) => (
              <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                <GlassCard className="p-8 h-full flex flex-col" glow hover>
                  <resource.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {resource.desc}
                  </p>
                  <a
                    href={resource.link}
                    className="text-primary font-semibold hover:underline inline-flex items-center group"
                  >
                    {resource.linkText} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
