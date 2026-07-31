import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding";

export function LoadingVeil() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden={done}
      role="status"
      aria-live="polite"
      className={[
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-royal-gradient",
        "transition-opacity duration-700",
        done ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className="absolute h-56 w-56 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 68%)",
          animation: "glow-pulse 2.6s ease-in-out infinite",
        }}
      />
      <span className="relative font-script text-5xl shimmer-gold">{WEDDING.hashtag}</span>
      <span className="relative mt-4 text-[0.6rem] uppercase tracking-[0.4em] text-ivory/70">
        Solemnization of Holy Matrimony
      </span>
      <span className="sr-only">Loading</span>
    </div>
  );
}
