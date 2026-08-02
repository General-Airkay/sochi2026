import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import galleryTrad from "@/assets/gallery-trad.jpg";
import galleryWhite from "@/assets/gallery-white.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";

const TITLE = "Our Story — SoChi2026 Wedding Memories";
const DESC =
  "The journey of Queeneth and Chigozie: from yes to I do, the wedding day, and the new chapter that has begun.";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/our-story" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: OurStory,
});

const CHAPTERS = [
  {
    eyebrow: "Chapter One",
    title: "Our Journey Together",
    image: gallery1,
    w: 1024,
    h: 1280,
    body: "It began with an ordinary hello that quietly became home. Through seasons of growth, prayer and laughter, we learned to choose each other daily — and every step brought us closer to the altar.",
  },
  {
    eyebrow: "Chapter Two",
    title: 'From "Yes" to "I Do"',
    image: galleryTrad,
    w: 1024,
    h: 1280,
    body: "From the evening she said yes, to the traditional rites where two families became one, the months that followed were full of planning, prayer and joyful anticipation. Every detail was touched by love.",
  },
  {
    eyebrow: "Chapter Three",
    title: "The Wedding Day",
    image: galleryWhite,
    w: 1280,
    h: 960,
    body: "On 29 August 2026, surrounded by family and friends, we stood before God and made our vows. The music, the tears, the applause — it was everything we prayed for and so much more.",
  },
  {
    eyebrow: "Chapter Four",
    title: "A New Chapter Begins",
    image: galleryReception,
    w: 1280,
    h: 960,
    body: "Now the celebration settles into everyday life: a home built on faith, shared mornings, quiet evenings and a lifetime of ordinary days made beautiful because we get to share them.",
  },
];

function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A love written in God's time"
        intro="Four chapters that led us to I do — and the beautiful new one that has just begun."
      />

      <div className="px-4 py-20">
        <Ornament className="mb-12" />
        <div className="mx-auto max-w-5xl space-y-20">
          {CHAPTERS.map((c, i) => (
            <article
              key={c.title}
              className={[
                "grid items-center gap-8 md:grid-cols-2",
                i % 2 === 1 ? "md:[&>figure]:order-2" : "",
              ].join(" ")}
            >
              <figure className="overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  width={c.w}
                  height={c.h}
                  className="h-full max-h-[26rem] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
              <div>
                <p className="eyebrow">{c.eyebrow}</p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{c.title}</h2>
                <div className="gold-rule mt-4 w-24" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <Ornament className="mb-12" />
          <SectionHeading
            eyebrow="Appreciation"
            title="We did not walk this road alone"
            subtitle="To our parents, siblings, friends, mentors, church family and every helper along the way — thank you. You prayed, gave, planned, travelled and rejoiced with us. This story is yours too."
          />
          <div className="mx-auto mt-12 max-w-3xl luxe-card p-8 text-center">
            <p className="font-serif text-lg italic leading-relaxed text-muted-foreground">
              “Thank you for every prayer whispered, every gift given, every mile travelled and
              every kind word spoken over our marriage. We carry your love with us into forever.”
            </p>
            <div className="gold-rule mx-auto mt-6 w-24" />
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-accent">
              Queeneth &amp; Chigozie
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
