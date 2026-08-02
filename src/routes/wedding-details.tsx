import { createFileRoute } from "@tanstack/react-router";
import { Camera, Church, Clock, Heart, MapPin, PartyPopper, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";

const TITLE = "A Beautiful Day to Remember — SoChi2026 Wedding Highlights";
const DESC =
  "Wedding memories of Queeneth and Chigozie: 29 August 2026 at GIC Choba Satellite, Port Harcourt, with highlights from the day.";

export const Route = createFileRoute("/wedding-details")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/wedding-details" },
    ],
    links: [{ rel: "canonical", href: "/wedding-details" }],
  }),
  component: Details,
});

const MAP_QUERY = encodeURIComponent("GIC Choba Satellite, Choba, Port Harcourt");

const FACTS = [
  { icon: Clock, title: "Wedding Date", lines: [WEDDING.dateLabel, `${WEDDING.timeLabel}`] },
  { icon: Church, title: "Ceremony Venue", lines: ["GIC Choba Satellite", WEDDING.venue] },
  { icon: PartyPopper, title: "Reception Venue", lines: ["Same venue", "Immediately after the ceremony"] },
  { icon: MapPin, title: "City", lines: [WEDDING.city, "Rivers State, Nigeria"] },
];

const HIGHLIGHTS = [
  { icon: Users, value: "350+", label: "Guests in Attendance" },
  { icon: Camera, value: "2,400+", label: "Beautiful Moments Captured" },
  { icon: Heart, value: "∞", label: "Lifetime Memories Created" },
  { icon: Sparkles, value: "12", label: "Vendors Who Served" },
];

function Details() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Memories"
        title="A Beautiful Day to Remember"
        intro="A keepsake of where and how it all happened — the day two families became one."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <SectionHeading
          eyebrow="The Day in Detail"
          title="How the day unfolded"
          subtitle="Kept here as a memory, exactly as it happened on 29 August 2026."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {FACTS.map((f) => (
            <article key={f.title} className="luxe-card p-8">
              <f.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl">{f.title}</h2>
              <div className="gold-rule mt-3 w-16" />
              {f.lines.map((l) => (
                <p key={l} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {l}
                </p>
              ))}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Wedding Highlights"
            subtitle="A few numbers that still make us smile."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <article key={h.label} className="luxe-card p-8 text-center">
                <h.icon className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
                <p className="mt-4 font-serif text-4xl text-gold-gradient">{h.value}</p>
                <div className="gold-rule mx-auto mt-3 w-14" />
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {h.label}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading eyebrow="The Place" title="Where it all happened" />
          <div className="mt-8 overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
            <iframe
              title="Map of GIC Choba Satellite"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
