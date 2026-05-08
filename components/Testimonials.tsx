"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I was losing probably 8-10 calls a week that went to voicemail. With VEXLO's auto-text, every single one of those now gets an instant reply with my booking link. My calendar went from 60% to 95% booked in the first month.",
    name: "Kayla Morrison",
    role: "PMU Artist & Owner",
    clinic: "KM Brows Studio, Austin, TX",
    stars: 5,
    result: "+35% bookings in 30 days",
    initials: "KM",
    color: "#E8B4B8",
  },
  {
    quote:
      "The DBR campaign alone paid for 6 months of VEXLO. We had 400+ past clients just sitting in our database doing nothing. Within 3 weeks of sending review requests, we went from 47 Google reviews to 112. It's insane.",
    name: "Priya Sharma",
    role: "Brow & Lip Artist",
    clinic: "Luxe Ink Studio, Chicago, IL",
    stars: 5,
    result: "65 new Google reviews in 3 weeks",
    initials: "PS",
    color: "#CCFF00",
  },
  {
    quote:
      "I used to spend Sunday evenings replying to reviews and chasing rebookings. VEXLO completely eliminated that. The AI responses sound more professional than what I was writing myself, and past clients just... come back on their own now.",
    name: "Megan Delacroix",
    role: "Microblading Specialist",
    clinic: "The Brow Bar, Miami, FL",
    stars: 5,
    result: "5 hrs/week saved on admin",
    initials: "MD",
    color: "#E8B4B8",
  },
  {
    quote:
      "I was skeptical because I'd tried other 'all-in-one' platforms and they were a nightmare. VEXLO was live in 10 days. The website looks genuinely professional, clients comment on it. And my no-show rate dropped from 22% to under 5%.",
    name: "Tasha Williams",
    role: "PMU Artist & Educator",
    clinic: "Ink by Tasha, Atlanta, GA",
    stars: 5,
    result: "No-show rate: 22% → 4.8%",
    initials: "TW",
    color: "#CCFF00",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="#CCFF00">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
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
      id="testimonials"
      ref={ref}
      className="relative py-28 bg-[#0D0D0D] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-6">
            <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
              Real Results
            </span>
          </div>
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            PMU Artists Are
            <br />
            <span className="text-[#CCFF00]" style={{ textShadow: "0 0 30px rgba(204,255,0,0.3)" }}>
              Thriving With VEXLO.
            </span>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50">
            Don't take our word for it. Here's what's happening in real clinics.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll group relative p-8 rounded-sm border border-white/8 bg-[#111111] hover:border-white/15 hover:bg-[#131313] transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/75 text-sm leading-relaxed mb-8 relative">
                <span className="absolute -top-2 -left-1 text-4xl text-white/10 font-serif leading-none select-none">
                  "
                </span>
                <span className="relative">{t.quote}</span>
              </blockquote>

              {/* Result badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-6 text-xs font-medium tracking-wide"
                style={{
                  borderColor: `${t.color}30`,
                  backgroundColor: `${t.color}08`,
                  color: t.color,
                }}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-heading font-black text-black"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.clinic}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
