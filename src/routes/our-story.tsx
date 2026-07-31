import { createFileRoute } from "@tanstack/react-router";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { PageHero } from "@/components/site/page-hero";
import { Ornament } from "@/components/site/ornaments";

const TITLE = "Our Story — SoChi2026";
const DESC =
  "How Queeneth and Chigozie met, the proposal, their journey together and what they are looking forward to.";

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
    title: "How We Met",
    image: gallery3,
    w: 1280,
    h: 960,
    body: "Our paths crossed on an ordinary afternoon that turned out to be anything but ordinary. A shared laugh, a long conversation, and a friendship that quietly began to feel like home.",
  },
  {
    eyebrow: "Chapter Two",
    title: "The Proposal",
    image: gallery4,
    w: 1024,
    h: 1280,
    body: "Under soft golden light, with hearts pounding and a ring hidden away, one question changed everything. She said yes, and heaven felt a little closer that evening.",
  },
  {
    eyebrow: "Chapter Three",
    title: "Our Journey",
    image: gallery1,
    w: 1024,
    h: 1280,
    body: "Through seasons of growth, prayer and laughter, we learned to choose each other daily. Every mile of the journey has taught us grace, patience and a deeper kind of love.",
  },
  {
    eyebrow: "Chapter Four",
    title: "Looking Forward",
    image: gallery2,
    w: 1024,
    h: 1024,
    body: "We look ahead with joy to a home built on faith, a family rooted in love, and a lifetime of ordinary days made beautiful because we get to share them.",
  },
];

function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A love written in God's time"
        intro="Four chapters of a story still being written."
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
      </div>
    </>
  );
}
