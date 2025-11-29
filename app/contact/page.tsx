"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { GlassCard } from "@/components/glass-card";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from "react";
import { cn } from "@/lib/utils";

const COUNTRIES = [
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
];

const PRODUCTS = [
  "Payment Gateway",
  "Payouts",
  "Business Banking",
  "Virtual Accounts",
  "Quick Funding",
  "Merchant Partners",
  "Partnership Programme",
  "BBPS",
  "Financial Management",
  "International Gateway",
  "Investments",
  "Bank Account Opening"
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      countryCode: selectedCountry.code,
      subject: selectedProduct, // Mapping product to subject for API compatibility
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    } else {
      setError("Failed to send message. Please try again.");
    }
  }

  const inputClasses = "w-full px-5 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 shadow-sm hover:bg-white/10 hover:border-white/20"

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30">
      <Navbar />

      <PageHeader
        title="Get in Touch"
        description="Our team is here to help you succeed with Ztake Payments"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Mail, title: "Sales", value: "sales@ztake.in" },
              { icon: Phone, title: "Phone", value: "+91 9220592512" },
              { icon: Mail, title: "Support", value: "support@ztake.in" }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="glass-ios p-8 text-center h-full group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground group-hover:text-cyan-400 transition-colors">{item.value}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="glass-ios p-8 sm:p-12 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl font-bold mb-2 relative z-10">Send us a Message</h2>
              <p className="text-muted-foreground mb-10 relative z-10">We'd love to hear from you. Fill out the form below.</p>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted-foreground">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted-foreground">Country</label>
                    <div className="relative">
                      <select
                        value={COUNTRIES.indexOf(selectedCountry)}
                        onChange={(e) => setSelectedCountry(COUNTRIES[parseInt(e.target.value)])}
                        className={cn(inputClasses, "appearance-none cursor-pointer pr-10")}
                      >
                        {COUNTRIES.map((country, idx) => (
                          <option key={idx} value={idx} className="bg-gray-900 text-white">
                            {country.flag} {country.name} ({country.code})
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</div>
                    </div>
                  </div>

                  <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium ml-1 text-muted-foreground">Phone Number</label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium border-r border-white/10 pr-3">
                        {selectedCountry.code}
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="98765 43210"
                        required
                        maxLength={15}
                        inputMode="numeric"
                        className={cn(inputClasses, "pl-20")}
                        onInput={(e: any) => {
                          e.target.value = e.target.value.replace(/\D/g, '');
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1 text-muted-foreground">I'm interested in</label>
                  <div className="relative">
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className={cn(inputClasses, "appearance-none cursor-pointer pr-10")}
                    >
                      {PRODUCTS.map((product, idx) => (
                        <option key={idx} value={product} className="bg-gray-900 text-white">
                          {product}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground text-xs">▼</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1 text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your requirements..."
                    rows={5}
                    required
                    className={cn(inputClasses, "resize-none")}
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
                  disabled={loading}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                {success && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 font-medium text-center animate-fadeIn flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 font-medium text-center animate-fadeIn">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
