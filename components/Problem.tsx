"use client";

import { useEffect, useRef } from "react";

const pains = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    pain: "Missed Calls & No-Shows",
    detail:
      "Every unanswered call is a lost booking. No-shows with no follow-up mean empty chairs and wasted prep time — money evaporating silently.",
    cost: "~$250 lost per no-show",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    pain: "Past Clients Gone Cold",
    detail:
      "Your database of past clients is a goldmine you're sitting on. Without automated remarketing, they forget you exist and book someone else.",
    cost: "Thousands in dormant revenue",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    pain: "Drowning in Review Management",
    detail:
      "Manually asking for reviews, responding to each one, monitoring multiple platforms — it's a part-time job that eats hours you don't have.",
    cost: "5+ hours/week wasted",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    pain: "Thin Margins & Operational Drag",
    detail:
      "Juggling separate tools for booking, texting, reviews, and marketing burns money on subscriptions and burns time on context-switching.",
    cost: "$300–600/mo on fragmented tools",
  },
];

export default function Problem() {
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
    <section
      id="problem"
      ref={ref}
      className="relative py-28 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div
            className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8B4B8]/30 bg-[#E8B4B8]/5 mb-6"
          >
            <span className="text-xs font-medium text-[#E8B4B8] tracking-widest uppercase">
              The Reality
            </span>
          </div>
          <h2
            className="animate-on-scroll font-heading font-black text-white leading-none tracking-tighter mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            PMU Clinics Are Leaving
            <br />
            <span className="text-white/40">Money on the Table.</span>
          </h2>
          <p className="animate-on-scroll text-lg text-white/50 leading-relaxed">
            You're exceptional at your craft. But running the business side — that's where clinics
            bleed revenue every single day.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pains.map((item, i) => (
            <div
              key={item.pain}
              className="animate-on-scroll group relative p-8 rounded-sm border border-white/8 bg-[#111111] hover:border-[#CCFF00]/20 hover:bg-[#141414] transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-sm border border-white/10 bg-white/5 text-[#E8B4B8] group-hover:border-[#E8B4B8]/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{item.pain}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{item.detail}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8B4B8]" />
                    <span className="text-xs font-medium text-[#E8B4B8]/80">{item.cost}</span>
                  </div>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/0 to-transparent group-hover:via-[#CCFF00]/30 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="animate-on-scroll mt-16 p-8 rounded-sm border border-[#CCFF00]/20 bg-[#CCFF00]/3 text-center"
        >
          <p className="text-xl md:text-2xl font-heading font-black text-white">
            What if all of this ran{" "}
            <span
              className="text-[#CCFF00]"
              style={{ textShadow: "0 0 20px rgba(204,255,0,0.4)" }}
            >
              automatically?
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
