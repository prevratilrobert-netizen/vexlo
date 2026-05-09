"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CalendlyButton from "./CalendlyButton";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center cursor-pointer">
            <Image
              src="/logo.webp"
              alt="VEXLO"
              width={120}
              height={40}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CalendlyButton className="inline-flex items-center px-5 py-2.5 bg-[#CCFF00] text-black text-sm font-heading font-bold rounded-sm hover:bg-[#BFFF00] transition-all duration-200 cursor-pointer tracking-wide uppercase">
              Book Demo
            </CalendlyButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white cursor-pointer p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-white/80 hover:text-white transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <CalendlyButton
              className="inline-flex items-center justify-center px-5 py-3 bg-[#CCFF00] text-black text-sm font-heading font-bold rounded-sm hover:bg-[#BFFF00] transition-all cursor-pointer uppercase tracking-wide mt-2"
            >
              Book Demo
            </CalendlyButton>
          </div>
        </div>
      )}
    </nav>
  );
}
