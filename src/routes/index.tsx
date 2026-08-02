import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, CalendarDays, MapPin, Users, HandHeart, Sparkles, Gift, Plane, Camera } from "lucide-react";
import heroFloral from "@/assets/hero-floral.jpg";
import galleryWhite from "@/assets/gallery-white.jpg";
import { MarriedFor } from "@/components/site/married-for";
import { ConfettiBurst } from "@/components/site/confetti-burst";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";

const TITLE = "SoChi2026 Wedding Memories — Thank You for Celebrating With Us";
const DESC =
  "Queeneth & Chigozie said I do on 29 August 2026. A digital keepsake of our wedding memories and a heartfelt thank you to everyone who celebrated with us.";

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

const THANKS = [
  {
    icon: Users,
    title: "To Everyone Who Attended",
    body: "Thank you for showing up, for the laughter in the pews and the dancing at the reception. Your presence turned a ceremony into a celebration.",
  },
  {
    icon: Heart,
    title: "To Our Families",
    body: "Thank you for the years of love that shaped us, and for the countless hours of planning, cooking, hosting and praying that carried this day.",
  },
  {
    icon: Sparkles,
    title: "To Our Friends",
    body: "Thank you for standing beside us, for the errands, the late-night calls and the joy you brought into every corner of the day.",
  },
  {
    icon: Plane,
    title: "To Those Who Travelled Far",
    body: "Thank you to everyone who crossed cities, states and oceans to be with us. We will never forget the distance you covered for our joy.",
  },
  {
    icon: HandHeart,
    title: "For Every Prayer",
    body: "Thank you to those who held us up in prayer long before the day and continue to do so. Heaven heard you, and we are grateful.",
  },
  {
    icon: Gift,
    title: "For Every Gift & Blessing",
    body: "Thank you for the gifts, the financial support and the generosity that blessed our new home in ways words cannot fully capture.",
  },
  {
    icon: Heart,
    title: "For Every Kind Wish",
    body: "Thank you for the messages, calls, posts and quiet blessings sent our way. Every good wish is treasured.",
  },
  {
    icon: Camera,
    title: "To Our Amazing Vendors",
    body: "Thank you to the planners, decorators, photographers, caterers, ushers and musicians whose craft made the day unforgettable.",
  },
];

function Home() {
  return (
    <>
      <ConfettiBurst />

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
          <p className="eyebrow">Mr &amp; Mrs · {WEDDING.dateLabel}</p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-6xl">
            Our Forever Has Begun ❤️
          </h1>
          <div className="gold-rule mx-auto mt-6 w-40" />
          <p className="mt-6 font-serif text-lg italic text-ivory/85 sm:text-xl">
            Thank you for celebrating the beginning of our forever.
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

          <div className="mt-10">
            <MarriedFor />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/gallery"
              className="rounded-sm bg-gradient-to-r from-[oklch(0.66_0.11_76)] to-[oklch(0.84_0.08_84)] px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              View the Album
            </Link>
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
              Wedding Memories
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <Ornament />
        <SectionHeading
          eyebrow="With Grateful Hearts"
          title="Thank you for loving us so well"
          subtitle="Our wedding day came and went in a blur of joy, and every beautiful part of it carried someone's kindness. These words are only a small attempt at gratitude."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THANKS.map((t) => (
            <article key={t.title} className="luxe-card p-7">
              <t.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl">{t.title}</h3>
              <div className="gold-rule mt-3 w-14" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "The Day",
              lines: [WEDDING.dateLabel, `${WEDDING.timeLabel} · Ceremony`],
            },
            {
              icon: MapPin,
              title: "The Place",
              lines: ["GIC Choba Satellite", WEDDING.city],
            },
            {
              icon: Heart,
              title: "The Promise",
              lines: ["A covenant made before God", "And kept for a lifetime"],
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

      <section className="px-4 pb-8 pt-14">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
            <img
              src={galleryWhite}
              alt="Queeneth and Chigozie at the altar on their wedding day"
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
              From a quiet first hello to a joyful I do, every chapter of our story has carried the
              fingerprints of God. Thank you for walking with us to the altar and beyond.
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
