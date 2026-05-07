"use client";

import { useEffect, useRef } from "react";
import CalendlyButton from "./CalendlyButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-vex-black"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(204,255,0,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center pt-32 pb-20">
        {/* Badge */}
        <div
          className="animate-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-10"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
            Built exclusively for PMU clinics
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-8"
          style={{
            fontSize: "clamp(3rem, 9vw, 8.5rem)",
            transitionDelay: "100ms",
          }}
        >
          The Operating
          <br />
          System for{" "}
          <span
            className="text-[#CCFF00]"
            style={{
              textShadow:
                "0 0 40px rgba(204,255,0,0.5), 0 0 80px rgba(204,255,0,0.2)",
            }}
          >
            Permanent
          </span>
          <br />
          Makeup Clinics.
        </h1>

        {/* Subheadline */}
        <p
          className="animate-on-scroll max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-12"
          style={{ transitionDelay: "200ms" }}
        >
          Stop missing calls, losing past clients, and drowning in review management.{" "}
          <span className="text-white/90 font-medium">VEXLO automates everything</span> so you can
          focus on your art.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ transitionDelay: "300ms" }}
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#CCFF00] text-black font-heading font-black text-sm uppercase tracking-widest rounded-sm hover:bg-[#BFFF00] transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.5)]"
          >
            Get Started for $97/mo
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <CalendlyButton className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-heading font-bold text-sm uppercase tracking-widest rounded-sm hover:border-white/50 hover:bg-white/5 transition-all duration-200 cursor-pointer">
            Book a Demo
          </CalendlyButton>
        </div>

        {/* Trust line */}
        <div
          className="animate-on-scroll flex items-center justify-center gap-2 text-white/40 text-sm"
          style={{ transitionDelay: "400ms" }}
        >
          <svg className="w-4 h-4 text-[#CCFF00]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Pays for itself after one recovered no-show.</span>
        </div>

        {/* Stats bar */}
        <div
          className="animate-on-scroll mt-20 grid grid-cols-3 divide-x divide-white/10 border border-white/10 rounded-sm bg-white/2"
          style={{ transitionDelay: "500ms" }}
        >
          {[
            { value: "500+", label: "PMU Clinics Running" },
            { value: "3.2×", label: "Average Revenue Increase" },
            { value: "98%", label: "Client Retention Rate" },
          ].map((stat) => (
            <div key={stat.label} className="py-6 px-4">
              <div
                className="text-2xl md:text-3xl font-heading font-black text-[#CCFF00] mb-1"
                style={{ textShadow: "0 0 20px rgba(204,255,0,0.4)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-white/40 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  );
}
