"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TermsAndConditions() {
  const termsContent = [
    {
      section: "1. Acceptance of Terms",
      items: [
        "By accessing Ztake Services, You confirm that You have read, understood, and agreed to these Terms.",
        "These Terms form a legally binding contract between You and Ztake.",
        "Continued use of the platform shall be considered Your explicit consent to all updates, new clauses, or revisions incorporated in the Terms.",
        "Ztake reserves the right to modify, amend, update, or replace these Terms at any time without prior notice."
      ]
    },
    {
      section: "2. About Ztake",
      items: [
        "Ztake Fintech Private Limited is a company incorporated under the Companies Act, 2013.",
        "Registered Office: Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India – 201305",
        "Ztake operates as a Payment Aggregator, offering payouts, settlements, collections, identity verification, risk analysis, and related services.",
        "Ztake works with regulated financial institutions, partner banks, payment networks, and KYC verification partners."
      ]
    },
    {
      section: "3. Eligibility & Registration Requirements",
      items: [
        "You are at least 18 years of age.",
        "You are an Indian citizen, legal resident, or a legally recognized Indian entity.",
        "You are competent to enter into a legally enforceable contract under the Indian Contract Act, 1872.",
        "You shall provide true, accurate, complete, and updated information during registration.",
        "You shall not impersonate any individual, business, or government entity.",
        "Ztake reserves the right to reject any registration or onboarding request without assigning any reason."
      ]
    },
    {
      section: "4. Payment Processing & Settlements",
      items: [
        "Ztake collects payments for You into a nodal/escrow/settlement account in compliance with RBI regulations.",
        "Settlement will be processed on a T+2 basis, where T = transaction date, subject to banking hours and risk assessment.",
        "Ztake may hold or delay settlements for reasons including chargebacks, risk alerts, suspicious patterns, or regulatory orders.",
        "Ztake may impose rolling reserves, security deposits, or withholding limits based on risk evaluation."
      ]
    },
    {
      section: "5. Prohibited Activities",
      items: [
        "Illegal, unlawful, or unauthorized transactions.",
        "Products/services prohibited by Indian law, RBI, or banks.",
        "Fraudulent, misleading, or deceptive practices.",
        "Money laundering or terrorist financing.",
        "Adult content, escort services, drugs, arms, counterfeit items, gambling, or pyramid schemes.",
        "Attempting to reverse engineer, hack, or disrupt the Ztake platform."
      ]
    },
    {
      section: "6. Service Usage Obligations",
      items: [
        "Maintain strict confidentiality of login credentials.",
        "Integrate Ztake APIs and SDKs as per official documentation.",
        "Comply with all applicable laws including IT Act 2000, KYC norms, and RBI guidelines.",
        "Promptly notify Ztake of any unauthorized access or security breach."
      ]
    },
    {
      section: "7. Fees & Charges",
      items: [
        "Ztake will charge service fees, MDR, platform fees, verification fees, or dispute fees as applicable.",
        "Ztake reserves the right to modify pricing at any time.",
        "All charges are exclusive of taxes unless stated otherwise.",
        "You permit Ztake to auto-debit applicable fees from settlement amounts or wallet balance."
      ]
    },
    {
      section: "8. Refunds, Disputes & Chargebacks",
      items: [
        "All refund decisions shall be made by the Merchant; Ztake is only a facilitator.",
        "For disputes/chargebacks initiated by customers, the Merchant must respond within the required timeline.",
        "Failure to respond may result in loss of dispute by default.",
        "Ztake may debit the disputed amount plus chargeback fees."
      ]
    },
    {
      section: "9. Security & Compliance",
      items: [
        "Ztake implements advanced security measures including PCI DSS Compliance, encryption, and fraud detection.",
        "You must ensure Your website/app follows secure checkout flows and compliance requirements.",
        "Ztake is not responsible for Your website's content, security, or customer disputes."
      ]
    },
    {
      section: "10. Intellectual Property",
      items: [
        "All Ztake trademarks, logos, code, algorithms, dashboards, and UI/UX are proprietary assets.",
        "You may not copy, reproduce, sell, license, or reverse-engineer Ztake's intellectual property without written permission."
      ]
    },
    {
      section: "11. Termination",
      items: [
        "Ztake may terminate or suspend Your access with 30 days' notice.",
        "Immediate termination may occur for illegal activities, fraud, chargeback abuse, or regulatory directives.",
        "Post-termination, pending dues must be cleared and Ztake may hold funds for 180 days for risk assessment."
      ]
    },
    {
      section: "12. Indemnity",
      items: [
        "You agree to indemnify, defend, and hold harmless Ztake from losses, liabilities, claims, or damages arising from Your misuse of Ztake Services, illegal transactions, or violation of these Terms."
      ]
    },
    {
      section: "13. Limitation of Liability",
      items: [
        "Ztake's total liability shall not exceed the fees earned from You in the previous 30 days.",
        "Ztake shall not be liable for loss of profits, loss of business, indirect damages, or data loss.",
        "Ztake does not guarantee uninterrupted availability or error-free performance of the platform."
      ]
    },
    {
      section: "14. Governing Law & Jurisdiction",
      items: [
        "These Terms are governed by the laws of India.",
        "All disputes shall be subject to the exclusive jurisdiction of courts in Noida, Uttar Pradesh.",
        "Arbitration may be conducted under the Arbitration and Conciliation Act, 1996."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Terms & Conditions"
        description="These Terms & Conditions govern all access, interaction, registration, API usage, transactions, and participation in products and services offered by Ztake Fintech Private Limited."
      >
        <div className="text-sm text-muted-foreground mt-4">Last Updated: 21/11/2024</div>
      </PageHeader>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {termsContent.map((section, idx) => (
            <ScrollReveal key={idx} delay={idx * 50}>
              <GlassCard
                className="p-6 md:p-8 border-l-4 border-primary/50 hover:border-primary transition-all duration-300 group"
                hover
              >
                <h2 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {section.section}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3">
                      <span className="text-primary/60 font-bold min-w-fit pt-0.5">•</span>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={600}>
            <GlassCard className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30" glow>
              <h3 className="text-2xl font-bold mb-4 text-foreground">KYC & AML Compliance</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                This Policy outlines the standards, procedures, responsibilities, and controls used by Ztake to verify the identity of users and prevent money laundering, terrorist financing, fraud, and unlawful financial activity in accordance with RBI Master Directions, PMLA 2002, and FATF Recommendations.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                All Ztake documents are authenticated using secure, legally compliant APIs including PAN Verification, Aadhaar Offline Verification, Voter ID/Driving License Validation, Bank Account Verification, and Sanctions Screening.
              </p>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <GlassCard className="mt-8 p-8 border border-primary/30" glow>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact & Support</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Support Email</p>
                  <p className="text-foreground">support@ztake.in</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Care Team</p>
                  <p className="text-foreground">care@ztake.in</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Website</p>
                  <p className="text-foreground">www.ztake.in</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-foreground/70">
                  Ztake Fintech Private Limited | Business Hub, Technology Park, Sector 90, Noida, Uttar Pradesh, India – 201305
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
