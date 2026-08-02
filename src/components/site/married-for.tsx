import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding";

function elapsed(from: number) {
  const ms = Math.max(0, Date.now() - from);
  const days = Math.floor(ms / 86400000);
  const start = new Date(from);
  const now = new Date(Math.max(from, Date.now()));
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(0, months);
  return {
    years: Math.floor(months / 12),
    months,
    weeks: Math.floor(days / 7),
    days,
  };
}

export function MarriedFor({ compact = false }: { compact?: boolean }) {
  const from = new Date(WEDDING.iso).getTime();
  const [time, setTime] = useState(() => elapsed(from));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(elapsed(from)), 60000);
    return () => clearInterval(id);
  }, [from]);

  const units = [
    { label: "Years", value: time.years },
    { label: "Months", value: time.months },
    { label: "Weeks", value: time.weeks },
    { label: "Days", value: time.days },
  ];

  return (
    <div className={compact ? "" : "text-center"}>
      <p className={compact ? "eyebrow text-[0.55rem]" : "eyebrow"}>Happily Married For</p>
      <div
        className={[
          "mt-3 flex flex-wrap justify-center",
          compact ? "gap-2" : "gap-3 sm:gap-5",
        ].join(" ")}
        aria-label="Time since our wedding day"
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
              {mounted ? u.value : "--"}
            </div>
            <div className={compact ? "eyebrow text-[0.55rem]" : "eyebrow mt-1 text-[0.6rem]"}>
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
