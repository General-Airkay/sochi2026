import { useEffect, useState } from "react";

const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 7.3 + 3) % 98,
  delay: (i * 1.7) % 14,
  duration: 16 + ((i * 3) % 12),
  size: 8 + ((i * 5) % 12),
  drift: (i % 2 === 0 ? 1 : -1) * (30 + ((i * 11) % 90)),
  hue: i % 3,
}));

const COLORS = [
  "color-mix(in oklab, var(--turquoise) 70%, white)",
  "color-mix(in oklab, var(--gold) 65%, white)",
  "color-mix(in oklab, var(--royal) 45%, white)",
];

export function Petals() {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.72,
            background: COLORS[p.hue],
            borderRadius: "60% 10% 60% 10%",
            opacity: 0.55,
            filter: "blur(0.2px)",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
