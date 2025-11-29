"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function APITermsOfUse() {
  const sections = [
    {
      title: "1. Purpose & Scope of Ztake APIs",
      content: "Ztake APIs enable You to collect payments via UPI, Cards, Netbanking, Wallets, initiate payouts & settlements, verify bank accounts and identity data, retrieve transaction logs, receive webhook notifications, generate tokens and manage users, and access merchant dashboards programmatically. APIs must be used solely for legitimate business operations approved by Ztake."
    },
    {
      title: "2. API Credentials & Security Requirements",
      content: "You are responsible for securing API Keys, Access Tokens, and Secrets. Credentials must never be shared publicly, embedded in client-side code, or stored insecurely. If You suspect key leakage, You must immediately rotate Your keys, inform Ztake, and review access logs. You must implement HTTPS, secure storage, authentication layers, and IP whitelisting. Failure to follow security practices may result in API suspension."
    },
    {
      title: "3. Permitted Uses of API",
      content: "You may use Ztake APIs to process legitimate customer payments, integrate Ztake into Your website/app, automate backend payment workflows, use sandbox for development, create secure server-side integrations, and receive webhook event notifications. All uses must be compliant with Indian laws and Ztake's policies."
    },
    {
      title: "4. Prohibited Uses of API",
      content: "You must NOT use APIs for fraudulent, illegal, or unauthorized activities, process payments for prohibited business categories (gambling, drugs, pornography), misuse or overload Ztake servers, share or resell Ztake APIs without permission, conduct reverse engineering or decompilation, use APIs in client-side frontend code, tamper with transactions or responses, or use APIs for transaction laundering. Violations will result in immediate termination and legal action."
    },
    {
      title: "5. Rate Limits & Performance",
      content: "Ztake APIs include rate limits to ensure platform stability. You agree to respect published rate limits, avoid sending bulk API requests unnecessarily, use batching wherever allowed, and implement retry logic with exponential backoff. Repeated rate limit abuse may result in throttling or suspension."
    },
    {
      title: "6. Webhooks Management",
      content: "You must provide a secure HTTPS webhook URL and validate Ztake signatures on all events. Duplicate webhook events must be handled idempotently. Failure to acknowledge events may lead to retries or webhook disabling. Webhooks may include events such as Payment Success/Failure, Refund Status, Payout Status, Settlement Alerts, KYC Changes, and Fraud Flags. You are responsible for securing Your webhook server."
    },
    {
      title: "7. Data Usage & Privacy",
      content: "All data received via APIs must be used only for business purposes approved by Ztake. You must comply with Ztake's Privacy Policy & Indian data protection laws. You may not store card details, raw Aadhaar, PINs, passwords, or sensitive information. User data cannot be sold, rented, or used for profiling without consent. Ztake reserves the right to audit Your data usage practices."
    },
    {
      title: "8. API Suspension & Termination",
      content: "Ztake may suspend or terminate API access without notice if fraud is detected, API misuse occurs, risk policies are violated, prohibited items are sold, chargeback fraud increases, KYC is invalid or expired, or regulatory or bank orders require action. Access may be permanently revoked for severe violations."
    },
    {
      title: "9. Intellectual Property & Compliance",
      content: "All API documentation, SDKs, code samples, and systems are proprietary assets of Ztake. You may not copy, distribute, modify, or sell these assets. You must comply with all RBI Regulations, IT Act 2000, PMLA 2002, data protection laws, NPCI Guidelines, and card network rules. Non-compliance may lead to suspension."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="API Terms of Use"
        description="These API Terms of Use govern the use of Ztake's APIs, SDKs, Webhooks, developer tools, authentication systems, and integration frameworks."
      >
        <div className="text-sm text-muted-foreground mt-4">Last Updated: 21/11/2024</div>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, idx) => (
            <ScrollReveal key={idx} delay={idx * 50}>
              <GlassCard
                className="p-6 md:p-8 border-l-4 border-primary/50 hover:border-primary transition-all duration-300 group"
                hover
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-foreground/80 leading-relaxed">
                  {section.content}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={450}>
            <GlassCard className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30" glow>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Developer Support & Resources</h3>
              <p className="text-foreground/80 mb-6">
                Get started with Ztake APIs and access comprehensive documentation, code samples, and technical support:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="font-semibold text-foreground mb-2">Developer Support</p>
                  <a href="mailto:dev@ztake.in" className="text-primary hover:text-primary/80 transition-colors">dev@ztake.in</a>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="font-semibold text-foreground mb-2">Tech Support</p>
                  <a href="mailto:support@ztake.in" className="text-primary hover:text-primary/80 transition-colors">support@ztake.in</a>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="font-semibold text-foreground mb-2">Compliance Team</p>
                  <a href="mailto:compliance@ztake.in" className="text-primary hover:text-primary/80 transition-colors">compliance@ztake.in</a>
                </div>
              </div>
              <p className="text-sm text-foreground/70 pt-6 border-t border-white/10">
                Ztake Fintech Private Limited | Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India – 201305
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
