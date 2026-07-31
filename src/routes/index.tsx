import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, CalendarDays, MapPin } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Countdown } from "@/components/site/countdown";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";

const TITLE = "SoChi2026 — Queeneth & Chigozie · 29 August 2026";
const DESC =
  "Join Queeneth Sotonye and Chigozie Godbless for their Solemnization of Holy Matrimony on 29 August 2026 at GIC Choba Satellite, Port Harcourt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-20 pt-28">
        <img
          src={heroFloral}
          alt="Blue and cream roses with gold floral ornaments"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklab, var(--royal-deep) 55%, transparent) 20%, color-mix(in oklab, var(--royal-deep) 85%, transparent) 85%)",
          }}
        />

        <div className="relative mx-auto max-w-3xl text-center reveal-up">
          <p className="eyebrow">The Wedding Celebration Of</p>
          <h1 className="mt-5 font-script text-6xl leading-tight shimmer-gold sm:text-8xl">
            {WEDDING.hashtag}
          </h1>
          <div className="gold-rule mx-auto mt-6 w-40" />
          <p className="mt-6 font-serif text-xl tracking-[0.2em] text-ivory/90 uppercase sm:text-2xl">
            Solemnization of Holy Matrimony
          </p>

          <div className="mt-8 flex flex-col items-center gap-2">
            <p className="font-script text-4xl text-gold-gradient sm:text-5xl">{WEDDING.bride}</p>
            <span className="flex items-center gap-3 text-ivory/70">
              <span className="gold-rule w-10" />
              <Heart className="h-4 w-4 text-accent" />
              <span className="gold-rule w-10" />
            </span>
            <p className="font-script text-4xl text-gold-gradient sm:text-5xl">{WEDDING.groom}</p>
          </div>

          <p className="mt-8 font-serif text-lg text-ivory/90">{WEDDING.dateLabel}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.28em] text-ivory/60">
            {WEDDING.timeLabel} · Choba, Port Harcourt
          </p>

          <div className="mt-10">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/our-story"
              className="rounded-sm border border-accent/70 px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Our Story
            </Link>
            <Link
              to="/wedding-details"
              className="rounded-sm border border-accent/70 px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Event Details
            </Link>
            <Link
              to="/rsvp"
              className="rounded-sm bg-gradient-to-r from-[oklch(0.66_0.11_76)] to-[oklch(0.84_0.08_84)] px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              RSVP
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <Ornament />
        <SectionHeading
          eyebrow="With Grateful Hearts"
          title="Two families, one blessing"
          subtitle={WEDDING.verse}
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "The Date",
              lines: [WEDDING.dateLabel, WEDDING.timeLabel],
            },
            {
              icon: MapPin,
              title: "The Venue",
              lines: ["GIC Choba Satellite", "Beside Helena Hotels, Before the Police Station"],
            },
            {
              icon: Heart,
              title: "The Reception",
              lines: ["Immediately after the ceremony", "Same venue"],
            },
          ].map((c) => (
            <article key={c.title} className="luxe-card p-8 text-center">
              <c.icon className="mx-auto h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-2xl">{c.title}</h3>
              <div className="gold-rule mx-auto mt-3 w-16" />
              {c.lines.map((l) => (
                <p key={l} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {l}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-8">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
            <img
              src={gallery3}
              alt="Queeneth and Chigozie walking hand in hand"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div>
            <p className="eyebrow">A Love Story</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              Written in grace, sealed in covenant
            </h2>
            <div className="gold-rule mt-4 w-24" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              From a quiet first hello to a joyful yes, every chapter of our story has carried the
              fingerprints of God. We would be honoured to have you with us as we begin the next one
              together.
            </p>
            <Link
              to="/our-story"
              className="mt-7 inline-block border-b border-accent pb-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent transition-opacity hover:opacity-70"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
