"use client";

const CALENDLY_URL = "https://calendly.com/vexlo/vexlo-demo";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function CalendlyButton({ className, children }: Props) {
  const open = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
