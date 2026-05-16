"use client";

import { useEffect, useRef } from "react";

const tiers = [
  {
    name: "Core",
    price: "$97",
    period: "/month",
    tagline: "Everything you need to get started",
    features: [
      "Website hosting & maintenance",
      "Dedicated business phone number",
      "Missed Call Text-Back",
      "Database Reactivation Launch (one-time)",
      "Mobile app to manage leads, track bookings, and see your reviews all in one place",
    ],
    cta: "Get Started",
    stripeUrl: "https://buy.stripe.com/dRm00j9Jndko6sw1lh0VO00",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "$297",
    period: "/month",
    tagline: "For clinics ready to scale",
    features: [
      "Everything in Core, plus:",
      "5-Star Filter Funnel",
      "Client Win-Back Sequences",
      "Mobile app to manage leads, track bookings, and see your reviews all in one place",
    ],
    cta: "Most Popular - Start Now",
    stripeUrl: "https://buy.stripe.com/00weVdbRv8046sw2pl0VO01",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: "$997",
    period: "/month",
    tagline: "Full domination mode",
    features: [
      "Everything in Growth, plus:",
      "Local Visibility Domination System",
      "Mobile app to manage leads, track bookings, and see your reviews all in one place",
    ],
    cta: "Go Pro",
    stripeUrl: "https://buy.stripe.com/7sYcN5cVz1BG18c2pl0VO02",
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-center">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`animate-on-scroll relative flex flex-col rounded-sm transition-all duration-300 ${
                tier.highlight
                  ? "border-2 border-[#CCFF00]/60 bg-[#141414] shadow-[0_0_100px_rgba(204,255,0,0.18)] z-10 lg:-mx-2"
                  : "border border-white/8 bg-[#0E0E0E] hover:border-white/20 opacity-80"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Popular badge */}
              {tier.badge && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <div className="px-5 py-1.5 bg-[#CCFF00] text-black text-xs font-heading font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(204,255,0,0.5)]">
                    {tier.badge}
                  </div>
                </div>
              )}

              <div className={`flex flex-col flex-1 ${tier.highlight ? "p-12" : "p-7"}`}>
                {/* Tier name */}
                <div className="mb-5">
                  <span className={`font-medium tracking-widest uppercase ${tier.highlight ? "text-[#CCFF00] text-sm" : "text-white/40 text-xs"}`}>
                    {tier.name}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1 mb-2">
                  <span
                    className="font-heading font-black text-white leading-none"
                    style={{ fontSize: tier.highlight ? "clamp(3.5rem, 6vw, 5rem)" : "clamp(2.5rem, 4vw, 3.2rem)" }}
                  >
                    {tier.price}
                  </span>
                  <span className={`text-white/40 mb-1 ${tier.highlight ? "text-xl" : "text-base"}`}>{tier.period}</span>
                </div>
                <p className={`text-white/40 mb-8 ${tier.highlight ? "text-base" : "text-sm"}`}>{tier.tagline}</p>

                {/* Divider */}
                <div className={`h-px mb-8 ${tier.highlight ? "bg-[#CCFF00]/20" : "bg-white/8"}`} />

                {/* Features */}
                <ul className={`flex-1 mb-8 ${tier.highlight ? "space-y-4" : "space-y-3"}`}>
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={tier.highlight ? "text-[#CCFF00]" : "text-white/30"}>
                        <CheckIcon />
                      </span>
                      <span
                        className={`leading-snug ${
                          feature.includes("Everything in")
                            ? "text-white/60 font-medium"
                            : "text-white/55"
                        } ${tier.highlight ? "text-sm" : "text-xs"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.stripeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center font-heading font-bold uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer block ${
                    tier.highlight
                      ? "py-4 text-sm bg-[#CCFF00] text-black hover:bg-[#BFFF00] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.5)]"
                      : "py-3 text-xs border border-white/15 text-white hover:border-white/30 hover:bg-white/5"
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
            { stat: "1 no-show recovered (~$500 avg)", result: "= 5x your monthly fee back" },
            { stat: "1 past client reactivated", result: "= $500 on a $97 investment" },
            { stat: "5 extra bookings/mo", result: "= $2,500+ revenue on $97 spent" },
          ].map((item) => (
            <div key={item.stat} className="p-5 rounded-sm border border-white/6 bg-white/2 text-center">
              <div className="font-heading font-bold text-white text-sm mb-1">{item.stat}</div>
              <div className="text-[#CCFF00] text-xs font-medium tracking-wide">{item.result}</div>
            </div>
          ))}
        </div>

        <p className="animate-on-scroll text-center text-white/25 text-xs mt-6">
          No contracts. Cancel anytime. 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
