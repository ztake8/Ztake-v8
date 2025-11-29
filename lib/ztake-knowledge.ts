// Ztake Knowledge Base - Comprehensive Product Information
export const ztakeKnowledge = {
    company: {
        name: "Ztake",
        description: "India's leading payment infrastructure provider",
        baseUrl: "https://api.ztake.in/",
        support: "support@ztake.in",
        sales: "https://pay.ztake.in/contact",
        website: "https://pay.ztake.in"
    },

    products: {
        payouts: {
            name: "Ztake Payouts",
            description: "Send money instantly to any bank account, UPI ID, or wallet in India",
            features: [
                "Instant Transfers - Send money 24/7 with IMPS",
                "Bulk Payouts - Process thousands of payouts in one go",
                "Multiple Modes - Support for NEFT, IMPS, RTGS, and UPI",
                "99.9% Uptime - Reliable infrastructure with automatic failover",
                "Real-time Status - Get instant updates via webhooks"
            ],
            transferModes: {
                imps: "Instant transfers 24/7, up to ₹5 lakhs",
                neft: "Batch transfers during banking hours",
                rtgs: "For amounts above ₹2 lakhs",
                upi: "Send to any UPI ID instantly"
            },
            pricing: "Starting at ₹2 per transaction",
            endpoints: ["Initiate Payout", "Fetch Balance", "Fetch Transaction Status"]
        },

        upiCollection: {
            name: "Scale UPI (PG Collection)",
            description: "Accept UPI payments with India's most reliable payment gateway",
            features: [
                "High success rate (>95%)",
                "Instant settlements",
                "UPI Intent support",
                "QR code generation",
                "Smart retry logic"
            ]
        },

        verification: {
            name: "Verification Stack",
            description: "KYC, Bank Verification, and identity verification APIs",
            features: [
                "Bank Account Verification",
                "PAN Verification",
                "Aadhaar Verification",
                "GST Verification",
                "Real-time verification"
            ]
        },

        billPayments: {
            name: "BBPS (Bill Payments)",
            description: "25+ categories of bill payments API",
            categories: [
                "Electricity bills",
                "Water bills",
                "Gas bills",
                "DTH recharge",
                "Mobile recharge",
                "Rent payments",
                "And 20+ more categories"
            ]
        }
    },

    gettingStarted: {
        steps: [
            "Complete your KYC and get API credentials",
            "Add funds to your virtual account",
            "Integrate using our API (RESTful, JSON)",
            "Set up webhooks for status updates",
            "Go live and start transacting"
        ],
        documentation: "https://docs.ztake.in",
        postman: "Available - Run in Postman collection"
    },

    keyFeatures: [
        "99.9% uptime guarantee",
        "Real-time webhooks",
        "Comprehensive API documentation",
        "24/7 support",
        "Competitive pricing with volume discounts",
        "Developer-friendly RESTful API",
        "Postman collection available",
        "Instant fund settlements"
    ]
}

// Q&A Knowledge Base
export const qaDatabase = [
    {
        keywords: ["what is", "about ztake", "who are you"],
        answer: "Ztake is India's leading payment infrastructure provider. We offer Payouts, UPI Collection, Verification Stack, and Bill Payment APIs. Our infrastructure is built for scale, reliability, and speed with 99.9% uptime."
    },
    {
        keywords: ["payouts", "send money", "transfer"],
        answer: "Ztake Payouts enables instant money transfers via IMPS (24/7, up to ₹5L), NEFT, RTGS (₹2L+), and UPI. We support bulk payouts with real-time status updates via webhooks. Pricing starts at ₹2 per transaction."
    },
    {
        keywords: ["upi", "payment gateway", "collection", "accept payments"],
        answer: "Our Scale UPI product offers high success rates (>95%), instant settlements, UPI Intent support, and QR code generation. Perfect for accepting payments from customers."
    },
    {
        keywords: ["verification", "kyc", "bank verify"],
        answer: "Our Verification Stack provides real-time verification for Bank Accounts, PAN, Aadhaar, GST, and more. All verifications are instant and API-driven."
    },
    {
        keywords: ["bill payment", "bbps", "recharge"],
        answer: "Our BBPS API covers 25+ categories including electricity, water, gas, DTH, mobile recharge, and rent payments. All bill payments are instant."
    },
    {
        keywords: ["pricing", "cost", "fees", "charges"],
        answer: "Payouts start at ₹2 per transaction. We offer volume discounts for high-volume customers. Contact our sales team at https://pay.ztake.in/contact for custom pricing."
    },
    {
        keywords: ["api", "integrate", "documentation"],
        answer: "Our RESTful API is available at https://api.ztake.in/. Complete documentation is at https://docs.ztake.in. We also provide a Postman collection for easy testing."
    },
    {
        keywords: ["support", "help", "contact"],
        answer: "For support, email us at support@ztake.in. For sales inquiries, visit https://pay.ztake.in/contact. We're here 24/7 to help!"
    },
    {
        keywords: ["webhook", "callback", "notification"],
        answer: "We provide real-time webhooks for all transaction status updates. You can configure webhook URLs in your dashboard to receive instant notifications."
    },
    {
        keywords: ["start", "getting started", "begin", "onboard"],
        answer: "To get started: 1) Complete KYC and get API credentials, 2) Add funds to your virtual account, 3) Integrate using our API docs, 4) Set up webhooks, 5) Go live! Visit https://docs.ztake.in for detailed guides."
    },
    {
        keywords: ["imps", "neft", "rtgs"],
        answer: "IMPS: Instant 24/7 transfers up to ₹5L. NEFT: Batch transfers during banking hours. RTGS: For amounts above ₹2L. All modes supported in Ztake Payouts."
    },
    {
        keywords: ["uptime", "reliability", "sla"],
        answer: "We guarantee 99.9% uptime with automatic failover. Our infrastructure is built for enterprise-grade reliability and scale."
    }
]

export function findAnswer(question: string): string {
    const lowerQ = question.toLowerCase()

    // Find matching Q&A
    for (const qa of qaDatabase) {
        if (qa.keywords.some(kw => lowerQ.includes(kw))) {
            return qa.answer
        }
    }

    // Default response
    return `I can help you with information about Ztake's products:
  
• **Payouts** - Instant money transfers via IMPS, NEFT, RTGS, UPI
• **UPI Collection** - Accept payments with high success rates
• **Verification Stack** - KYC, Bank, PAN, Aadhaar verification
• **Bill Payments** - 25+ categories of bill payments

For detailed documentation, visit https://docs.ztake.in
Need support? Email support@ztake.in`
}
