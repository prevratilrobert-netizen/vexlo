"use client";

import { useEffect, useRef } from "react";
import CalendlyButton from "./CalendlyButton";

const steps = [
  {
    number: "01",
    title: "Sign Up & Fill Out the Onboarding Form",
    desc: "You pay, we send you a short onboarding form. Share your past client database and a few details about your clinic. That's all we need from you to get started.",
    detail: "Short form • Client database • Done in minutes",
  },
  {
    number: "02",
    title: "We Build Everything for You",
    desc: "Over the next 10-14 days, we handle your entire setup. Website, automations, phone number, review system, all of it. We check in regularly so you always know where things stand.",
    detail: "10-14 day build • Regular check-ins • 100% done for you",
  },
  {
    number: "03",
    title: "Download the LeadConnector App",
    desc: "Your mobile command center. Manage leads, track bookings, respond to messages, and monitor your reviews all in one place, right from your phone.",
    detail: "iOS & Android • Real-time notifications • Everything in one app",
  },
  {
    number: "04",
    title: "We Walk You Through the Finished System",
    desc: "We show you everything we built, explain why we did it, and make sure you understand how the system works. Then we hand you the keys and you're ready to run.",
    detail: "Live walkthrough • Full education • You're in control",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      ref={ref}
      className="relative py-28 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-6">
            <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
              Setup Process
            </span>
          </div>
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Done For You.
            <br />
            <span className="text-white/40">Start to Finish.</span>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 leading-relaxed">
            You fill out a form and download an app. We handle everything else. Your clinic is fully operational in 10-14 days.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="animate-on-scroll relative flex flex-col items-start lg:items-center text-left lg:text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Number bubble */}
                <div className="relative mb-8">
                  <div
                    className="w-14 h-14 rounded-full border-2 border-[#CCFF00]/40 bg-[#CCFF00]/8 flex items-center justify-center"
                    style={{ boxShadow: "0 0 20px rgba(204,255,0,0.15)" }}
                  >
                    <span
                      className="font-heading font-black text-[#CCFF00] text-lg"
                      style={{ textShadow: "0 0 15px rgba(204,255,0,0.5)" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Arrow connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <svg className="w-4 h-4 text-[#CCFF00]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-white text-base leading-snug mb-3">
                  {step.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4">{step.desc}</p>
                <div className="text-[10px] text-[#CCFF00]/60 tracking-widest uppercase font-medium">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-20">
          <CalendlyButton className="inline-flex items-center gap-2 px-8 py-4 bg-[#CCFF00] text-black font-heading font-black text-sm uppercase tracking-widest rounded-sm hover:bg-[#BFFF00] transition-all duration-200 cursor-pointer shadow-[0_0_30px_rgba(204,255,0,0.2)] hover:shadow-[0_0_50px_rgba(204,255,0,0.4)]">
            Get Started Today
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
