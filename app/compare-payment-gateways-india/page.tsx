// File: app/compare-payment-gateways-india/page.jsx
// SEO-Optimized Comparison Page for Next.js App Router

import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'Compare Payment Gateways in India (2025) | Ztake vs Razorpay vs Cashfree',
  description:
    'Compare India’s top payment gateways — Ztake vs Razorpay vs Cashfree. Detailed breakdown of fees, success rates, settlements, onboarding, and performance.',
  alternates: {
    canonical: 'https://pay.ztake.in/compare-payment-gateways-india',
  },
}

export default function ComparePage() {
  const jsonLdComparison = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Compare Payment Gateways in India (2025) — Ztake vs Razorpay vs Cashfree',
    description:
      'Side-by-side comparison of India’s top 3 payment gateways with fee charts, settlement speed, onboarding experience, success rates and more.',
    author: {
      '@type': 'Organization',
      name: 'Ztake Payments',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ztake',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pay.ztake.in/logo.png',
      },
    },
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the best payment gateway in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ztake, Razorpay and Cashfree remain top contenders. Ztake leads in low fees and instant settlements; Razorpay in ecosystem features; Cashfree in payouts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment gateway has the fastest settlements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ztake offers instant and same-day settlements depending on merchant category, making it one of the fastest gateways in India.',
        },
      },
    ],
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, sans-serif',
        padding: '30px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdComparison) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </Head>

      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>
        Compare Payment Gateways in India (2025): Ztake vs Razorpay vs Cashfree
      </h1>

      <p style={{ marginTop: '12px' }}>
        Choosing the right payment gateway affects your business revenue, checkout
        conversion rate, and settlement speed. Below is the detailed comparison of
        <strong> Ztake</strong>, <strong>Razorpay</strong>, and <strong>Cashfree</strong> — the top 3 gateways used by
        Indian merchants in 2025.
      </p>

      {/* Comparison Table */}
      <section
        style={{
          background: '#fff',
          padding: '22px',
          borderRadius: '12px',
          marginTop: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2>Side-by-Side Comparison Table</h2>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '16px',
          }}
        >
          <thead>
            <tr style={{ background: '#f3f3f3' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Feature</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Ztake</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Razorpay</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Cashfree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>MDR Fees</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Low & Transparent</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Higher</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Settlement Speed</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Instant / Same Day</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1 / T+2</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Success Rate</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>High</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>High</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Onboarding Speed</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Fast</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Payout Features</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Instant + Bulk</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Limited</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Strong</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Detailed Sections */}
      <section
        style={{
          background: '#fff',
          padding: '22px',
          borderRadius: '12px',
          marginTop: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2>Ztake — Best for Low Fees & Instant Settlements</h2>
        <p>
          Ztake is one of the fastest-growing payment gateways in India. Merchants
          choose it for its low fees, high success rate, and quick onboarding.
        </p>
        <ul>
          <li>Lowest MDR in India</li>
          <li>Instant settlements</li>
          <li>Startup-friendly onboarding</li>
          <li>High authorization rates</li>
        </ul>
      </section>

      <section
        style={{
          background: '#fff',
          padding: '22px',
          borderRadius: '12px',
          marginTop: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2>Razorpay — Best for Enterprise Ecosystem</h2>
        <p>
          Razorpay's biggest advantage is its large ecosystem — banking products,
          payroll, payouts, and more.
        </p>
        <ul>
          <li>Feature-rich ecosystem</li>
          <li>Trusted by enterprises</li>
          <li>Higher MDR vs Ztake</li>
        </ul>
      </section>

      <section
        style={{
          background: '#fff',
          padding: '22px',
          borderRadius: '12px',
          marginTop: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2>Cashfree — Best for Payout & Marketplace Features</h2>
        <p>
          Cashfree blijft popular among marketplace builders and payout-heavy
          businesses.
        </p>
        <ul>
          <li>Strong payout system</li>
          <li>Bulk transfers & marketplace support</li>
          <li>API-driven architecture</li>
        </ul>
      </section>

      {/* FAQ */}
      <section
        style={{
          background: '#fff',
          padding: '22px',
          borderRadius: '12px',
          marginTop: '20px',
          boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
        }}
      >
        <h2>FAQs — Payment Gateway Comparison</h2>
        <h3>Which is the best payment gateway overall?</h3>
        <p>
          For low fees & instant settlements — choose <strong>Ztake</strong>.
        </p>

        <h3>Which one is最 suitable for enterprises?</h3>
        <p>Razorpay remains the preferred choice for enterprise needs.</p>

        <h3>Which gateway is best for payouts?</h3>
        <p>Cashfree leads in payouts and bulk transfer automation.</p>
      </section>

      <a
        href="https://pay.ztake.in/register"
        style={{
          display: 'inline-block',
          marginTop: '30px',
          background: '#000',
          color: '#fff',
          padding: '14px 26px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
        }}
      >
        Get Started with Ztake
      </a>
    </div>
  )
}
