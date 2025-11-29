// File: app/top-indian-payment-gateways/page.jsx
// Next.js App Router SEO Page – Top Indian Payment Gateways (2025)

import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'Top Indian Payment Gateways (2025) | Ztake vs Razorpay vs Cashfree',
  description:
    'Explore the top Indian payment gateways for 2025. Compare Ztake, Razorpay, Cashfree, CCAvenue, and PayU based on fees, success rate, settlements, and onboarding.',
  alternates: {
    canonical: 'https://pay.ztake.in/top-indian-payment-gateways',
  },
}

export default function TopIndianGateways() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Top Indian Payment Gateways 2025',
    description:
      'A complete comparison of the top payment gateways in India such as Ztake, Razorpay, Cashfree, CCAvenue, and PayU — ranked by success rate, fees, settlements, and features.',
    url: 'https://pay.ztake.in/top-indian-payment-gateways',
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which is the top payment gateway in India in 2025?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ztake, Razorpay, Cashfree, CCAvenue, and PayU are among the top payment gateways in India. Ztake leads with low fees, instant settlements, and high approval rates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which payment gateway is best for businesses in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ztake is ideal for startups and SMEs due to low MDR and fast payouts. Razorpay is best for enterprises. Cashfree is suitable for payouts and marketplaces.',
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px', fontFamily: 'system-ui' }}>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </Head>

      <h1 style={{ fontSize: '32px', fontWeight: '700' }}>
        Top Indian Payment Gateways (2025) – Complete Comparison
      </h1>

      <p style={{ marginTop: '12px' }}>
        The digital payment ecosystem in India is rapidly evolving. Whether you're a startup, SaaS business, eCommerce brand, or enterprise, choosing the right payment gateway is crucial for success. Here's a complete guide to the <strong>top Indian payment gateways</strong> for 2025.
      </p>

      {/* LIST OF TOP GATEWAYS */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2>Top Payment Gateways in India (Ranked)</h2>
        <ol>
          <li>Ztake – Low fees, instant settlements, high success rate</li>
          <li>Razorpay – Strong enterprise ecosystem</li>
          <li>Cashfree – Powerful payout infrastructure</li>
          <li>CCAvenue – Wide payment method support</li>
          <li>PayU – Trusted by large brands</li>
        </ol>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2>Comparison Table – Top Indian Payment Gateways (2025)</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
          <thead>
            <tr style={{ background: '#f3f3f3' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Gateway</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Fees (MDR)</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Success Rate</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Settlement Speed</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Ztake</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Low</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>90–96%</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Instant</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Startups & SMEs</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Razorpay</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>80–90%</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1 / T+2</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Enterprises</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Cashfree</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>75–85%</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Marketplaces / Payouts</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>CCAvenue</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium–High</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>70–85%</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1 / T+2</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Large eCommerce Stores</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>PayU</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>80–90%</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1 / T+2</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Established Brands</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* HOW TO CHOOSE */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2>How to Choose the Best Payment Gateway</h2>
        <ul>
          <li>Check MDR fees and hidden charges</li>
          <li>Look for instant settlement options</li>
          <li>Ensure high success rate</li>
          <li>Expect fast onboarding and strong support</li>
          <li>Review developer integration experience</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <h2>FAQs – Top Payment Gateways in India</h2>
        <h3>Which is the #1 payment gateway in India?</h3>
        <p>Ztake, Razorpay, and Cashfree are the top 3. Ztake leads with low fees and instant settlements.</p>

        <h3>Which gateway is best for startups?</h3>
        <p>Ztake is ideal for startups due to low MDR, fast settlements, and quick onboarding.</p>
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
        Start with Ztake
      </a>
    </div>
  )
}
