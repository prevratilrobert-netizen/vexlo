"use client";

import { useEffect, useRef } from "react";
import CalendlyButton from "./CalendlyButton";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="relative py-32 bg-[#0A0A0A] overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Yellow radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(204,255,0,0.1) 0%, rgba(204,255,0,0.03) 40%, transparent 70%)",
          }}
        />

        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
            <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
              Limited spots available this month
            </span>
          </div>

          {/* Headline */}
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-8"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
          >
            Ready to Run Your
            <br />
            Clinic Like a{" "}
            <span
              className="text-[#CCFF00]"
              style={{
                textShadow:
                  "0 0 40px rgba(204,255,0,0.5), 0 0 80px rgba(204,255,0,0.2)",
              }}
            >
              Professional
            </span>
            <br />
            Business?
          </h2>

          {/* Supporting copy */}
          <p
            className="animate-on-scroll max-w-xl mx-auto text-lg text-white/50 leading-relaxed mb-12"
          >
            Join 500+ PMU clinics running on autopilot. More bookings, better reputation,
            zero admin overhead. Starting this week.
          </p>

          {/* CTA */}
          <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CalendlyButton className="group inline-flex items-center gap-3 px-10 py-5 bg-[#CCFF00] text-black font-heading font-black text-base uppercase tracking-widest rounded-sm hover:bg-[#BFFF00] transition-all duration-200 cursor-pointer shadow-[0_0_40px_rgba(204,255,0,0.35)] hover:shadow-[0_0_60px_rgba(204,255,0,0.6)]">
              Book Your Demo Today
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </CalendlyButton>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/15 text-white font-heading font-bold text-sm uppercase tracking-widest rounded-sm hover:border-white/30 hover:bg-white/4 transition-all duration-200 cursor-pointer"
            >
              See Pricing
            </a>
          </div>

          {/* Trust indicators */}
          <div className="animate-on-scroll flex flex-wrap items-center justify-center gap-6 text-white/30 text-xs">
            {[
              "No contracts",
              "14-day money-back guarantee",
              "Live in 48 hours",
              "Cancel anytime",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                {i > 0 && <span className="w-px h-3 bg-white/10" />}
                <svg className="w-3.5 h-3.5 text-[#CCFF00]/60" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/6 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-0">
              <span className="text-xl font-heading font-black tracking-tighter text-white" style={{ letterSpacing: "-0.03em" }}>VE</span>
              <span className="text-xl font-heading font-black tracking-tighter text-[#CCFF00]" style={{ letterSpacing: "-0.03em" }}>X</span>
              <span className="text-xl font-heading font-black tracking-tighter text-white" style={{ letterSpacing: "-0.03em" }}>LO</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-white/30 text-xs">
              {["Privacy Policy", "Terms of Service", "Contact", "Support"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white/60 transition-colors duration-200 cursor-pointer"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-white/20 text-xs">
              © 2025 VEXLO. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
