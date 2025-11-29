"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { PageHeader } from "@/components/page-header"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. Purpose of This Policy",
      content: "The purpose of this Policy is to establish clear rules regarding refunds & cancellations, responsibilities of merchants and customers, Ztake's limited role as a payment facilitator, procedures for initiating and processing refunds, conditions for allowing or denying refunds, timelines, charges, and settlement treatments. Ztake maintains full compliance with RBI, NPCI, banking, and card network guidelines."
    },
    {
      title: "2. Role of Ztake",
      content: "Ztake operates solely as a Payment Aggregator / Payment Facilitator and does not sell any product or service to customers. All refund decisions are entirely the responsibility of the Merchant. Ztake cannot force a merchant to approve or deny a refund unless required by law, court order, bank mandate, card network rules, or risk/fraud triggers. Ztake facilitates the refund process only after the Merchant approves the refund."
    },
    {
      title: "3. Merchant Responsibility",
      content: "Merchants must clearly display their own Refund, Return, Replacement, and Cancellation policy on their website, mobile app, checkout flow, and product pages. Merchants are solely responsible for investigating refund requests, approving or rejecting claims, communicating outcomes to customers, and providing documentary proof during disputes. Ztake may impose penalties, holds, or risk reserves on merchants with excessive refund/chargeback ratios."
    },
    {
      title: "4. Types of Refunds",
      content: "Full Refund: Returned when the merchant cancels or reverses the entire transaction amount. Partial Refund: Returned when the merchant refunds only a portion of the transaction amount. Auto-Refund: Triggered due to payment failures such as bank downtime, card failure, or double debit without transaction confirmation. Chargeback-Related Refund: Initiated by the customer through their issuing bank."
    },
    {
      title: "5. Timelines for Refund Processing",
      content: "Once the Merchant approves a refund on the Ztake dashboard, Ztake processes it within Instant to 24 hours for UPI, T+1 to T+3 working days for Cards & Netbanking, and up to 7 working days for complex or high-risk cases. Customer bank credit timelines: UPI refunds take Instant to 48 hours, Debit/Credit Cards take 5–7 working days, and Netbanking takes 2–4 working days."
    },
    {
      title: "6. Conditions for Refund Eligibility",
      content: "A refund may be issued if there is a duplicate payment, failed transaction but amount debited, payment made to incorrect merchant (verified case), merchant-approved refund request, overcharge or incorrect amount charged, merchant service/product non-delivery, or regulatory or bank-directed refund. Refunds cannot be issued for customer change of mind (unless merchant policy allows), merchant policy denial, digital goods already downloaded/used, or fraudulent refund requests."
    },
    {
      title: "7. Refund Process (Step-by-Step)",
      content: "Step 1: Customer raises refund request by contacting Merchant directly. Step 2: Merchant verifies claim and reviews evidence. Step 3: Merchant approves or denies request and communicates to customer. Step 4: Merchant triggers refund on Ztake dashboard. Step 5: Ztake processes refund with banking partners. Step 6: Customer receives money credited to the same payment method."
    },
    {
      title: "8. Chargebacks & Bank Disputes",
      content: "Customers may raise a dispute directly with their bank. Ztake forwards all chargeback notifications to Merchants. Merchants must provide proof within defined timelines (usually 48–72 hours). Failure to respond results in automatic chargeback loss. Ztake may recover chargeback amount, penalties, fees, and legal costs from the Merchant's settlements."
    },
    {
      title: "9. No Liability Clause",
      content: "Ztake is not liable for merchant denial of refund, delays caused by banks or card networks, issues with product delivery or service fulfillment, customer dissatisfaction, or quality/warranty of merchant goods. Ztake only facilitates payments and refund routing and is not responsible for the underlying merchant services."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      <PageHeader
        title="Refund & Cancellation Policy"
        description="This Refund & Cancellation Policy is issued by Ztake Fintech Private Limited and governs the rules, processes, responsibilities, and terms related to refunds, cancellations, reversals, and disputes for all transactions processed through Ztake's payment infrastructure."
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
              <h3 className="text-2xl font-bold mb-4 text-foreground">Need Help with a Refund?</h3>
              <p className="text-foreground/80 mb-6">
                For any questions or concerns regarding our refund policy, please reach out to our support team:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Email</p>
                  <a href="mailto:support@ztake.in" className="text-primary hover:text-primary/80 transition-colors">support@ztake.in</a>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Care Team</p>
                  <a href="mailto:care@ztake.in" className="text-primary hover:text-primary/80 transition-colors">care@ztake.in</a>
                </div>
                <div className="p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <p className="text-sm text-muted-foreground mb-2 font-semibold">Website</p>
                  <a href="https://www.ztake.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">www.ztake.in</a>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
