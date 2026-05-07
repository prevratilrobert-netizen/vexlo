"use client";

import { useEffect, useRef } from "react";

const tiers = [
  {
    name: "Starter",
    price: "$97",
    period: "/mo",
    tagline: "Perfect for solo PMU artists",
    features: [
      "Professional 15-page SEO website",
      "Online booking system",
      "Dedicated business phone number",
      "Auto call texting (missed call SMS)",
      "5-Star Review Funnel",
      "AI-powered review responses",
      "Live chat widget",
      "Google Business integration",
      "Monthly performance report",
    ],
    cta: "Get Started",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$179",
    period: "/mo",
    tagline: "For clinics ready to scale",
    features: [
      "Everything in Starter, plus:",
      "20-page website with advanced SEO",
      "Reviews-to-Social auto posting",
      "Remarketing campaigns (past clients)",
      "DBR Campaign (50 review requests/day)",
      "Automated booking reminders",
      "No-show & cancellation sequences",
      "SMS & email marketing automation",
      "Priority support",
    ],
    cta: "Most Popular — Start Now",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Elite",
    price: "$249",
    period: "/mo",
    tagline: "Full clinic automation suite",
    features: [
      "Everything in Growth, plus:",
      "Custom brand design & copywriting",
      "Multi-location support",
      "Advanced analytics dashboard",
      "Custom AI chatbot trained on your services",
      "VIP onboarding & setup",
      "Dedicated account manager",
      "Quarterly strategy call",
      "White-glove migration support",
    ],
    cta: "Go Elite",
    highlight: false,
    badge: null,
  },
];

function CheckIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* BG glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(204,255,0,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-6">
            <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
              Transparent Pricing
            </span>
          </div>
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Simple Pricing That
            <br />
            <span className="text-[#CCFF00]" style={{ textShadow: "0 0 30px rgba(204,255,0,0.3)" }}>
              Pays for Itself.
            </span>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 leading-relaxed">
            One recovered no-show covers your monthly fee. Everything after that is pure profit.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`animate-on-scroll relative flex flex-col rounded-sm transition-all duration-300 ${
                tier.highlight
                  ? "border-2 border-[#CCFF00]/60 bg-[#111111] shadow-[0_0_60px_rgba(204,255,0,0.1)]"
                  : "border border-white/8 bg-[#111111] hover:border-white/20"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-5 py-1.5 bg-[#CCFF00] text-black text-xs font-heading font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Tier name */}
                <div className="mb-6">
                  <span className={`text-xs font-medium tracking-widest uppercase ${tier.highlight ? "text-[#CCFF00]" : "text-white/40"}`}>
                    {tier.name}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className="font-heading font-black text-white leading-none"
                    style={{ fontSize: "clamp(3rem, 5vw, 4rem)" }}
                  >
                    {tier.price}
                  </span>
                  <span className="text-white/40 text-lg mb-1">{tier.period}</span>
                </div>
                <p className="text-white/40 text-sm mb-8">{tier.tagline}</p>

                {/* Divider */}
                <div className={`h-px mb-8 ${tier.highlight ? "bg-[#CCFF00]/20" : "bg-white/8"}`} />

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={tier.highlight ? "text-[#CCFF00]" : "text-white/30"}>
                        <CheckIcon />
                      </span>
                      <span
                        className={`text-sm leading-snug ${
                          feature.includes("Everything in")
                            ? "text-white/60 font-medium"
                            : "text-white/55"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`w-full py-3.5 text-center font-heading font-bold text-sm uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer ${
                    tier.highlight
                      ? "bg-[#CCFF00] text-black hover:bg-[#BFFF00] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.5)]"
                      : "border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI callout */}
        <div className="animate-on-scroll mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { stat: "1 no-show recovered", result: "= 1 month paid" },
            { stat: "1 past client returns", result: "= 2+ months paid" },
            { stat: "5 extra bookings/mo", result: "= 10–15× ROI" },
          ].map((item) => (
            <div key={item.stat} className="p-5 rounded-sm border border-white/6 bg-white/2 text-center">
              <div className="font-heading font-bold text-white text-sm mb-1">{item.stat}</div>
              <div className="text-[#CCFF00] text-xs font-medium tracking-wide">{item.result}</div>
            </div>
          ))}
        </div>

        <p className="animate-on-scroll text-center text-white/25 text-xs mt-6">
          No contracts. Cancel anytime. 14-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
