import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VEXLO — The Operating System for PMU Clinics",
  description:
    "Stop missing calls, losing past clients, and drowning in review management. VEXLO automates everything so you can focus on your art.",
  keywords: "PMU clinic software, permanent makeup booking, salon automation, GHL SaaS, review management",
  openGraph: {
    title: "VEXLO — The Operating System for PMU Clinics",
    description: "Automate your PMU clinic. More bookings, fewer no-shows, 5-star reputation on autopilot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-vex-black text-vex-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
