// File: app/low-fee-payment-gateway/page.jsx
// Next.js 13+ App Router version for Low Fee Payment Gateway SEO Page

import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'Low Fee Payment Gateway in India (2025) | Ztake – Cheapest & Fastest',
  description: 'Looking for a low-fee payment gateway in India? Discover why Ztake offers the lowest MDR, instant settlements, and highest success rates for Indian merchants.',
  alternates: {
    canonical: 'https://pay.ztake.in/low-fee-payment-gateway'
  }
}

export default function LowFeeGateway() {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ztake Payment Gateway",
    "url": "https://pay.ztake.in",
    "logo": "https://pay.ztake.in/logo.png",
    "sameAs": [
      "https://instagram.com/ztake",
      "https://twitter.com/ztake"
    ]
  }

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which payment gateway has the lowest fees in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ztake offers one of the lowest MDR rates in India while maintaining high success rates and instant settlements."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ztake charge hidden fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Ztake follows a transparent pricing model with no hidden onboarding, maintenance, or refund fees."}
      }
    ]
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: '30px', maxWidth: '1100px', margin: '0 auto' }}>

      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </Head>

      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>Low Fee Payment Gateway in India (2025) – Ztake</h1>
      <p style={{ marginTop: '14px' }}>
        Businesses in India lose a major portion of their profit because of high MDR fees charged by popular payment gateways. 
        If you're searching for the <strong>lowest fee payment gateway in India</strong>, you need a platform that offers 
        transparent pricing, instant settlements, and reliable success rates.
      </p>

      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
        <h2>Why Ztake Has the Lowest MDR in India</h2>
        <p>Ztake is designed for both startups and growing businesses that want low per-transaction costs and maximum profitability. Our MDR structure stays transparent and competitive.</p>

        <h3>Benefits of Ztake’s Low Fee Structure</h3>
        <ul>
          <li>Flat & Transparent MDR — No hidden charges</li>
          <li>Instant settlements available</li>
          <li>Perfect for high-volume merchants</li>
          <li>No onboarding fees or yearly maintenance</li>
          <li>Lower refund & dispute handling fees</li>
        </ul>
      </section>

      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
        <h2>Comparison: Ztake vs Razorpay vs Cashfree</h2>
        <p>A quick look at how fee structures differ:</p>
        <ul>
          <li><strong>Ztake:</strong> Lowest MDR, instant payouts</li>
          <li><strong>Razorpay:</strong> Higher MDR + additional fees</li>
          <li><strong>Cashfree:</strong> Competitive but charges extra for features</li>
        </ul>
        <p>Ztake is optimised for cheaper and faster merchant settlements.</p>
      </section>

      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
        <h2>Is Low Fee the Only Factor?</h2>
        <p>No. A reliable gateway must also offer:</p>
        <ul>
          <li>High success rate</li>
          <li>Fast settlement cycle</li>
          <li>Fraud protection</li>
          <li>Easy integration</li>
        </ul>
        <p>Ztake balances cost + performance exceptionally.</p>
      </section>

      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
        <h2>FAQs — Low Fee Payment Gateways</h2>
        <h3>Which payment gateway offers the lowest fees?</h3>
        <p>Ztake offers one of the lowest MDR models with transparent pricing and instant payout options.</p>

        <h3>Does Ztake charge extra for settlements?</h3>
        <p>No. Ztake does not charge hidden settlement fees.</p>
      </section>

      <a href="https://pay.ztake.in/register" style={{ display: 'inline-block', marginTop: '30px', background: '#000', color: '#fff', padding: '14px 26px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Sign Up — Start Accepting Payments</a>
    </div>
  )
}
