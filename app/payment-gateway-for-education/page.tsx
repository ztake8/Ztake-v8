// File: app/payment-gateway-for-education/page.jsx
// Next.js App Router SEO Page – Payment Gateway for Education India (2025)

import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Payment Gateway for Education in India (2025) | Ztake – Fees, Admissions, EMI, UPI Intent",
  description:
    "Looking for the best payment gateway for education institutions in India? Ztake supports fee payments, admission charges, EMI options, UPI Intent, and automated reconciliation.",
  alternates: {
    canonical: "https://pay.ztake.in/payment-gateway-for-education",
  },
};

export default function EducationPaymentGateway() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ztake Education Payment Gateway",
    description:
      "Ztake provides a secure and high-success payment gateway for schools, colleges, coaching centers, and EdTech platforms including EMI, UPI, cards, and automated fee reconciliation.",
    brand: "Ztake",
    url: "https://pay.ztake.in/payment-gateway-for-education",
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which is the best payment gateway for education in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ztake is one of the best payment gateways for education due to high success rates, EMI fee options, UPI Intent support, and automated reconciliation for fee collections.",
        },
      },
      {
        "@type": "Question",
        name: "Does Ztake support EMI and installment fee payments?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Ztake supports card EMIs, bank EMIs, and split fee payments for institutions and EdTech platforms.",
        },
      },
    ],
  };

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px", fontFamily: "system-ui" }}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </Head>

      <h1 style={{ fontSize: "32px", fontWeight: "700" }}>
        Best Payment Gateway for Education in India (2025) – Ztake
      </h1>

      <p style={{ marginTop: "12px" }}>
        Schools, colleges, institutes, tuition centers, and EdTech platforms need a <strong>secure, reliable, high-success payment system</strong> to manage tuition fees, admission payments, course purchases, and subscription learning. Ztake is designed for smooth, scalable education payments.
      </p>

      {/* WHY EDUCATION NEEDS SPECIAL PAYMENT HANDLING */}
      <section style={{ background: "#fff", padding: "22px", borderRadius: "12px", marginTop: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <h2>Why Education Institutions Need a Payment Gateway</h2>
        <ul>
          <li>Monthly / term-wise / yearly fees must be collected efficiently</li>
          <li>Parents need UPI, card, EMI, and netbanking options</li>
          <li>Institutes require automated receipts and reconciliation</li>
          <li>Refunds and cancellations must be simple</li>
          <li>Secure payments are crucial for parents & institutions</li>
        </ul>
      </section>

      {/* WHY ZTAKE */}
      <section style={{ background: "#fff", padding: "22px", borderRadius: "12px", marginTop: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <h2>Why Ztake Is the Best Payment Gateway for Education</h2>
        <p>Ztake simplifies payments for institutions and parents.</p>
        <ul>
          <li>High success UPI Intent for parents & students</li>
          <li>Supports EMI for big annual/term fees</li>
          <li>Instant refunds for cancellations</li>
          <li>Dashboard + automated reconciliation for institutions</li>
          <li>UPI, Cards, NetBanking, Wallets, EMI supported</li>
          <li>Bulk fee upload + collection links</li>
        </ul>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "#fff", padding: "22px", borderRadius: "12px", marginTop: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <h2>Education Payment Gateway Comparison (2025)</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "16px" }}>
          <thead>
            <tr style={{ background: "#f3f3f3" }}>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Gateway</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>EMI Support</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>UPI Success Rate</th>
              <th style={{ padding: "12px", border: "1px solid #ddd" }}>Education Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Ztake</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Yes (Card + Bank)</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>90–97%</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Full</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Razorpay</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Yes</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>80–90%</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Partial</td>
            </tr>
            <tr>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Cashfree</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Limited</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>75–85%</td>
              <td style={{ padding: "12px", border: "1px solid #ddd" }}>Moderate</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: "#fff", padding: "22px", borderRadius: "12px", marginTop: "20px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
        <h2>FAQs – Education Payment Gateway India</h2>

        <h3>Does Ztake support school & college fee payments?</h3>
        <p>Yes. Ztake supports fees, admissions, hostel, transport, and all recurring payments.</p>

        <h3>Can Ztake handle large-volume fee collections?</h3>
        <p>Yes. Bulk fee upload and automated reconciliation make high-volume collection easy.</p>

        <h3>Does Ztake support EdTech platforms?</h3>
        <p>Yes. Perfect for course purchases, online classes, exam prep apps, LMS platforms and more.</p>
      </section>

      <a
        href="https://pay.ztake.in/register"
        style={{
          display: "inline-block",
          marginTop: "30px",
          background: "#000",
          color: "#fff",
          padding: "14px 26px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Start Education Payments with Ztake
      </a>
    </div>
  );
}
