"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.919 17.919 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Professional 15-20 Page Website",
    desc: "SEO-optimized site with online booking, live chat widget, and conversion-focused design. Built and ready on day one.",
    tag: "Website",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "5-Star Funnel",
    desc: "Automated review filtering: 5-star reviews go straight to Google. Any lower stay private for you to handle. Your reputation, protected.",
    tag: "Reputation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: "Auto Call Texting",
    desc: "Missed a call? VEXLO instantly texts back with a booking link. You never lose a lead to voicemail again.",
    tag: "Automation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "Remarketing Campaigns",
    desc: "Automated discounts and rebooking messages sent to past clients on the perfect schedule. Turn cold clients into repeat revenue.",
    tag: "Revenue",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3M9 11.25v1.5M15 11.25v1.5" />
      </svg>
    ),
    title: "Dedicated Business Phone Number",
    desc: "A professional number that keeps your personal line private. Clients call the brand, not your personal cell.",
    tag: "Professional",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V20.25a.75.75 0 001.28.53l3.58-3.58A48.153 48.153 0 0011.25 17c.527 0 1.049-.022 1.567-.06" />
      </svg>
    ),
    title: "DBR Campaign",
    desc: "Database Reactivation: sends 50 review requests per day to past clients. Watch your Google rating climb on autopilot.",
    tag: "Growth",
  },
];

export default function Features() {
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
      id="features"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(204,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/5 mb-6">
            <span className="text-xs font-medium text-[#CCFF00] tracking-widest uppercase">
              Full Feature Suite
            </span>
          </div>
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Everything Your Clinic
            <br />
            <span className="text-[#CCFF00]" style={{ textShadow: "0 0 30px rgba(204,255,0,0.3)" }}>
              Needs in One System.
            </span>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 leading-relaxed">
            Stop paying for 6 different tools that don't talk to each other. VEXLO is the all-in-one
            operating system your clinic actually needs.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="animate-on-scroll group relative p-6 rounded-sm border border-white/8 bg-[#111111] hover:border-[#CCFF00]/25 hover:bg-[#131313] transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-medium text-white/25 tracking-widest uppercase">
                  {f.tag}
                </span>
              </div>

              {/* Icon */}
              <div className="w-11 h-11 flex items-center justify-center rounded-sm border border-white/10 bg-white/4 text-[#CCFF00]/70 group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]/20 group-hover:bg-[#CCFF00]/5 transition-all duration-300 mb-5">
                {f.icon}
              </div>

              <h3 className="font-heading font-bold text-white text-sm leading-snug mb-2">
                {f.title}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-[#CCFF00]/0 group-hover:bg-[#CCFF00]/20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
