import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown({ compact = false }: { compact?: boolean }) {
  const target = new Date(WEDDING.iso).getTime();
  const [time, setTime] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div
      className={compact ? "flex flex-wrap justify-center gap-2" : "flex flex-wrap justify-center gap-3 sm:gap-5"}
      aria-label="Countdown to the wedding day"
      role="timer"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className={[
            "rounded-sm border border-accent/45 bg-ivory/10 backdrop-blur-md text-center",
            compact ? "min-w-14 px-3 py-2" : "min-w-20 px-4 py-4 sm:min-w-24 sm:px-6",
          ].join(" ")}
        >
          <div
            className={[
              "font-serif tabular-nums text-gold-gradient",
              compact ? "text-xl" : "text-3xl sm:text-4xl",
            ].join(" ")}
          >
            {mounted ? String(u.value).padStart(2, "0") : "--"}
          </div>
          <div className={compact ? "eyebrow text-[0.55rem]" : "eyebrow mt-1 text-[0.6rem]"}>{u.label}</div>
        </div>
      ))}
    </div>
  );
}
