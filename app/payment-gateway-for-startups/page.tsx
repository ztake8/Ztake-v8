// File: app/payment-gateway-for-startups/page.jsx
// Next.js App Router SEO page for Payment Gateway for Startups

import React from 'react'
import Head from 'next/head'

export const metadata = {
  title: 'Best Payment Gateway for Startups in India (2025) | Ztake – Fast, Low-Fee, High Success',
  description:
    'Looking for the best payment gateway for startups in India? Ztake offers low fees, instant settlements, fast onboarding, and high success rates — ideal for new businesses.',
  alternates: {
    canonical: 'https://pay.ztake.in/payment-gateway-for-startups',
  },
}

export default function StartupGateway() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Ztake Startup Payment Gateway',
    description:
      'Ztake is the ideal payment gateway for startups, offering low MDR, instant settlements, fast onboarding, and high approval rates.',
    brand: 'Ztake',
    url: 'https://pay.ztake.in/payment-gateway-for-startups',
  }

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which payment gateway is best for startups in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ztake is one of the best payment gateways for startups in India due to low fees, instant settlements, fast onboarding and strong support.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do startups get lower fees with Ztake?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Ztake offers a startup-friendly MDR structure with no hidden charges and low settlement fees.',
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
        Best Payment Gateway for Startups in India (2025) – Ztake
      </h1>

      <p style={{ marginTop: '12px' }}>
        Startups need a payment gateway that is <strong>fast, affordable, secure, and easy to onboard</strong>. Ztake is designed specifically to support
        new businesses with low fees, instant settlements and a high success rate.
      </p>

      {/* WHY STARTUPS NEED A SPECIAL GATEWAY */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}>
        <h2>Why Startups Need a Different Kind of Payment Gateway</h2>
        <ul>
          <li>Low MDR to reduce early-stage costs</li>
          <li>Instant settlements to maintain cash flow</li>
          <li>High success rates to increase conversions</li>
          <li>No long onboarding delays</li>
          <li>24×7 support for technical issues</li>
        </ul>
      </section>

      {/* WHY ZTAKE */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}>
        <h2>Why Ztake Is the Best Payment Gateway for Startups</h2>
        <p>Ztake is startup-focused and built for scalability.</p>
        <ul>
          <li>Fast onboarding — go live within hours</li>
          <li>Lowest MDR fees for new businesses</li>
          <li>Instant or same-day settlements</li>
          <li>High approval & success rate</li>
          <li>Simple integration with API & plugins</li>
        </ul>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}>
        <h2>Startup-Friendly Gateway Comparison</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
          <thead>
            <tr style={{ background: '#f3f3f3' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Gateway</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Startup Support</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Fees (MDR)</th>
              <th style={{ padding: '12px', border: '1px solid #ddd' }}>Settlement Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Ztake</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Excellent</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Low</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Instant</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Razorpay</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Good</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1 / T+2</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Cashfree</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Moderate</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>Medium</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>T+1</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '22px', borderRadius: '12px', marginTop: '20px', boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}>
        <h2>FAQs – Payment Gateway for Startups</h2>

        <h3>Does Ztake support new businesses?</h3>
        <p>Yes. Ztake is designed to help startups go live quickly with low MDR.</p>

        <h3>How fast is onboarding?</h3>
        <p>Most merchants get activated within hours.</p>

        <h3>Can startups get instant settlement?</h3>
        <p>Yes. Ztake offers real-time settlement options depending on merchant category.</p>
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
        Register Now — Startup-Friendly Payment Gateway
      </a>
    </div>
  )
}
