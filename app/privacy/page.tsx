"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "purpose",
      title: "1. Purpose & Vision",
      content: `At Ztake, privacy is not a legal requirement — it is a core engineering rule. Every product, algorithm, interface, and workflow is built on the foundation of privacy-by-design and security-by-default.

This Policy explains:
• What data we collect
• Why we collect it
• How we secure it
• When we share it
• What control you have
• What rights you can exercise
• How we keep accountability inside Ztake
• How to contact us anytime

Ztake commits to minimum data, maximum protection, and absolute clarity.`,
    },
    {
      id: "data-collect",
      title: "2. Data We Collect",
      subsections: [
        {
          title: "2.1 Contact Information",
          items: ["Full Name", "Email Address", "Mobile Number", "Business Name", "Billing & Registered Address"],
        },
        {
          title: "2.2 Financial Information",
          content: `Required for payments, settlements, payouts, refunds, and identity mapping:`,
          items: [
            "Bank Account Number",
            "IFSC Code",
            "UPI ID",
            "Debit/Credit Card Tokenized Information",
            "Virtual Payment Addresses",
            "Settlement Profiles",
            "Chargeback Records",
          ],
          note: "We never store raw card numbers. All card information is tokenized as per RBI & PCI-DSS norms.",
        },
        {
          title: "2.3 Identification Information",
          content: `Collected solely for compliance:`,
          items: [
            "PAN",
            "Aadhaar (masked)",
            "GST Details",
            "Certificate of Incorporation",
            "Business Proof",
            "User Photograph",
            "IP-Verified E-Sign Records",
            "Device-Synced E-mandate Identity Data",
          ],
        },
        {
          title: "2.4 Transaction Information",
          items: [
            "Payment ID",
            "Merchant Name",
            "Amount",
            "Time & Date",
            "Payment Method",
            "Transaction Status",
            "Location Derived From Transaction",
            "Settlement Logs",
            "Refund & Dispute Notes",
          ],
        },
        {
          title: "2.5 Technical, Device & Log Data",
          items: [
            "IP Address",
            "Browser & OS Details",
            "Device Model & Type",
            "Timezone & Language",
            "Screen Resolution",
            "App Crash Logs",
            "API Usage Logs",
            "Geolocation (only if required to comply with RBI risk monitoring)",
          ],
        },
        {
          title: "2.6 Behavioral, Risk & Fraud Signals",
          content: `To maintain platform safety and detect suspicious patterns:`,
          items: ["Velocity Checks", "Login Patterns", "OTP Failure Rate", "Multiple Device Sign-ins", "High-risk Transaction Flags", "AML/CTRM Indicators"],
        },
      ],
    },
    {
      id: "why-collect",
      title: "3. Why We Collect Data",
      content: `Every dataset serves a legally compliant and functional purpose:
• To process payments, payouts, settlements, refunds, and verifications
• To perform KYC / AML checks required by law
• To prevent fraud, identity theft, or unauthorized access
• To monitor system performance and improve reliability
• To comply with RBI, NPCI, IT Act 2000, Aadhaar Act, and other regulations
• To personalize dashboards and generate actionable insights
• To provide customer support via phone, chat, or email

Ztake never sells your data. We use it only to deliver secure and compliant financial infrastructure.`,
    },
    {
      id: "legal-basis",
      title: "4. Legal Basis for Processing",
      content: `We process your data based on:
• Consent: When you sign up or complete verification
• Contractual necessity: Critical for payments and settlements
• Legal obligation: RBI, NPCI, tax, and compliance audits
• Legitimate interest: Security, fraud prevention, and service improvement`,
    },
    {
      id: "how-use",
      title: "5. How We Use Your Data",
      subsections: [
        {
          title: "5.1 Operational Use",
          items: ["Payment processing", "Automated settlements", "Identity verification", "Payout routing", "Dashboard analytics", "Ledger synchronization", "Order-to-transaction mapping"],
        },
        {
          title: "5.2 Security & Protection",
          items: ["Fraud detection algorithms", "Suspicious activity flags", "Risk patterning", "Enforcement of MFA & device locks", "API abuse monitoring"],
        },
        {
          title: "5.3 Communication",
          items: ["Transactional alerts", "Security notifications", "Account verification", "Important service updates", "Customer service responses"],
          note: "We do not send marketing messages without your explicit opt-in.",
        },
      ],
    },
    {
      id: "sharing",
      title: "6. Data Sharing & Disclosure",
      subsections: [
        {
          title: "6.1 With Service Providers",
          items: [
            "Payment Networks (NPCI, Card Networks)",
            "Banks & Financial Institutions",
            "Verification Providers (PAN/Aadhaar validation)",
            "Cloud Providers (ISO-certified & India-region servers)",
            "SMS/Email Communication Partners",
          ],
        },
        {
          title: "6.2 With Regulatory & Law-Enforcement Bodies",
          content: `Only when legally required, including:`,
          items: ["RBI", "Enforcement Directorate (ED)", "State Police Departments", "Income Tax Authorities", "Court Orders & Summons"],
        },
        {
          title: "6.3 Never Shared For",
          items: ["Advertising", "Selling user profiles", "Third-party marketing", "Data monetization"],
          note: "Ztake strictly prohibits any unauthorized data resale or lateral sharing.",
        },
      ],
    },
    {
      id: "retention",
      title: "7. Data Retention",
      content: `We retain data only for required durations:
• Transaction Data → 8 years (RBI regulation)
• KYC Documents → As per governing laws
• Logs & Risk Signals → Minimum necessary for audits
• Deleted Accounts → Permanently purged within 90 days

When retention ends, data is irreversibly destroyed.`,
    },
    {
      id: "security",
      title: "8. Data Storage & Security",
      content: `Ztake follows international-grade security standards:
• ISO/IEC 27001
• PCI DSS Level 1
• SOC 2 Type II
• AES-256 Data Encryption
• TLS 1.3 Network Encryption
• HSM-Backed Tokenization

Additional layers include:
• Zero-Trust Infrastructure
• Multi-Factor Authentication
• Database Field-Level Encryption
• Continuous Penetration Testing
• AI-Driven Fraud Monitoring
• 24/7 Security Operation Centre

We treat your data with the highest possible security, at every level.`,
    },
    {
      id: "rights",
      title: "9. Your Rights",
      subsections: [
        {
          title: "9.1 Right to Access",
          content: "You may request a copy of your personal data.",
        },
        {
          title: "9.2 Right to Correction",
          content: "You may request corrections for inaccurate data.",
        },
        {
          title: "9.3 Right to Withdraw Consent",
          content: "Contact us at care@ztake.in to revoke or modify consent.",
        },
        {
          title: "9.4 Right to Deletion",
          content: "You may request deletion of your Ztake account and stored data (unless legally required to retain it).",
        },
        {
          title: "9.5 Right to Processing Information",
          content: "You may ask how, where, and why we process your data.",
        },
        {
          title: "9.6 Right to Object & Restrict Processing",
          content: "You may request limitations on specific data usage unless required legally.",
        },
      ],
    },
    {
      id: "cookies",
      title: "10. Cookies & Tracking",
      content: `Ztake uses:
• Essential Cookies
• Security Cookies
• Session Tokens
• API Authentication Cookies
• Machine Learning-Based Fraud Markers

No advertising cookies, no behavioral tracking for marketing, and no external trackers are used.`,
    },
    {
      id: "children",
      title: "11. Children's Privacy",
      content: "Ztake services are intended for individuals above 18 years. We do not knowingly collect data from minors.",
    },
    {
      id: "transfers",
      title: "12. International Data Transfers",
      content: `If data is transferred internationally for processing or compliance, it is done under:
• Binding Corporate Rules
• Standard Contractual Clauses
• RBI circulars & Indian data-localization mandates`,
    },
    {
      id: "changes",
      title: "13. Policy Changes",
      content: "Ztake may update this Policy. Major updates will be communicated via email or dashboard notification.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Privacy Policy"
        description="At Ztake, privacy is not a legal requirement — it is a core engineering rule. We're committed to transparency, precision, and futuristic financial-data governance."
      >
        <div className="text-sm text-muted-foreground mt-4">Last Updated: 21/11/2024</div>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal>
            <GlassCard className="p-8 md:p-12" hover>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Ztake Fintech Private Limited ("Ztake", "Company", "We", "Us", "Our") operates as a Payment Aggregator and provides payouts, KYV/KYC verification, risk monitoring, identity validation, and settlement infrastructure to e-commerce platforms, educational institutions, financial service providers, digital marketplaces, and enterprise partners.
                </p>
                <p>
                  <strong>Our Registered Office:</strong> Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India.
                </p>
                <p>
                  By accessing or using any Ztake website, mobile app, API, dashboard, SDK, partner portal, web-hooks, or affiliated services ("Services"), You ("User", "You", "Your") acknowledge, understand, and agree to the practices described in this Policy.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>

          {sections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 50}>
              <GlassCard className="p-8 md:p-12" hover>
                <h2 className="text-3xl font-bold mb-6 text-foreground">{section.title}</h2>

                {section.content && <p className="text-foreground leading-relaxed whitespace-pre-wrap mb-6">{section.content}</p>}

                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="border-l-2 border-primary/30 pl-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">{subsection.title}</h3>
                        {subsection.content && <p className="text-foreground mb-3">{subsection.content}</p>}
                        {subsection.items && (
                          <ul className="space-y-2 text-foreground">
                            {subsection.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {subsection.note && <p className="text-muted-foreground text-sm mt-4 italic">{subsection.note}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={200}>
            <GlassCard className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border border-primary/30" glow>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Us</h2>
              <p className="text-foreground mb-8 text-lg">For all privacy-related concerns, please reach out to us:</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2">Email</p>
                  <p className="text-foreground font-medium">care@ztake.in</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2">Phone</p>
                  <p className="text-foreground font-medium">+91 9220592512</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2">Website</p>
                  <p className="text-foreground font-medium">www.ztake.in</p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg bg-primary/10 border-l-4 border-primary">
                <p className="text-foreground">
                  <strong>Ztake Fintech Private Limited</strong>
                  <br />
                  Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India.
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
