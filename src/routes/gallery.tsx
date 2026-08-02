import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import gCourt from "@/assets/gallery-court.jpg";
import gTrad from "@/assets/gallery-trad.jpg";
import gWhite from "@/assets/gallery-white.jpg";
import gReception from "@/assets/gallery-reception.jpg";
import { PageHero } from "@/components/site/page-hero";
import { Ornament } from "@/components/site/ornaments";

const TITLE = "Our Wedding Gallery — SoChi2026 Digital Album";
const DESC =
  "A premium digital wedding album: pre-wedding, court registry, traditional engagement and white wedding photographs of Queeneth and Chigozie.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: g1, alt: "Pre-wedding portrait at golden hour", category: "Pre-Wedding", w: 1024, h: 1280 },
  { src: g3, alt: "Pre-wedding walk along a palm lined path", category: "Pre-Wedding", w: 1280, h: 960 },
  { src: g4, alt: "A romantic pre-wedding moment together", category: "Pre-Wedding", w: 1024, h: 1280 },
  { src: gCourt, alt: "Signing the marriage register at the registry", category: "Court / Registry", w: 1024, h: 1280 },
  { src: g2, alt: "Portrait after the registry ceremony", category: "Court / Registry", w: 1024, h: 1024 },
  { src: gTrad, alt: "Traditional engagement in royal blue and gold attire", category: "Traditional / Engagement", w: 1024, h: 1280 },
  { src: g5, alt: "Family and friends at the traditional celebration", category: "Traditional / Engagement", w: 1280, h: 960 },
  { src: gWhite, alt: "The couple at the altar during the white wedding", category: "White Wedding", w: 1280, h: 960 },
  { src: gReception, alt: "First dance at the wedding reception", category: "White Wedding", w: 1280, h: 960 },
];

const FILTERS = ["All", "Pre-Wedding", "Court / Registry", "Traditional / Engagement", "White Wedding"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const shown = PHOTOS.filter((p) => filter === "All" || p.category === filter);
  const current = active === null ? undefined : shown[active];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our digital wedding album"
        intro="Every stage of the journey — pre-wedding, registry, traditional and the white wedding."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-10" />

        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => {
                setFilter(f);
                setActive(null);
              }}
              className={[
                "rounded-sm border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] transition-all duration-300",
                filter === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-accent/35 text-muted-foreground hover:border-accent hover:text-accent",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-6xl columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {shown.map((p, i) => (
            <button
              key={`${p.alt}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full break-inside-avoid overflow-hidden rounded-sm border border-accent/35 shadow-[var(--shadow-luxe)] reveal-up"
              aria-label={`Open ${p.alt}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                width={p.w}
                height={p.h}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-royal-deep/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 text-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[85vh] max-w-full rounded-sm border border-accent/40 object-contain"
          />
        </div>
      ) : null}
    </>
  );
}
