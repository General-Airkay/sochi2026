import { useEffect, useState } from "react";

const PIECES = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 3.4 + 6) % 96,
  delay: (i % 7) * 0.12,
  duration: 3.6 + ((i * 7) % 22) / 10,
  size: 5 + ((i * 3) % 7),
  drift: (i % 2 === 0 ? 1 : -1) * (20 + ((i * 13) % 70)),
  hue: i % 4,
}));

const COLORS = [
  "var(--gold)",
  "color-mix(in oklab, var(--turquoise) 80%, white)",
  "color-mix(in oklab, var(--royal) 70%, white)",
  "color-mix(in oklab, var(--leaf) 70%, white)",
];

export function ConfettiBurst() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setOn(true);
    const id = setTimeout(() => setOn(false), 7000);
    return () => clearTimeout(id);
  }, []);

  if (!on) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className="absolute top-[-6vh] block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.8,
            background: COLORS[p.hue],
            borderRadius: "2px",
            opacity: 0.75,
            animation: `petal-fall ${p.duration}s cubic-bezier(0.4, 0, 0.6, 1) ${p.delay}s 1 both`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
