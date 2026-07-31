import { createFileRoute } from "@tanstack/react-router";
import dresscode from "@/assets/dresscode.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";

const TITLE = "Dress Code — SoChi2026";
const DESC = "Our wedding colours: turquoise blue, royal blue, leaf green, gold and white. Outfit inspiration for guests.";

export const Route = createFileRoute("/dress-code")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/dress-code" },
    ],
    links: [{ rel: "canonical", href: "/dress-code" }],
  }),
  component: DressCode,
});

const COLOURS = [
  { name: "Turquoise Blue", hex: "#18B7D8" },
  { name: "Royal Blue", hex: "#0D2D7A" },
  { name: "Leaf Green", hex: "#2E6B34" },
  { name: "Gold", hex: "#C99A19" },
  { name: "White", hex: "#FFFFFF" },
];

function DressCode() {
  return (
    <>
      <PageHero
        eyebrow="Dress Code"
        title="Dressed in our colours"
        intro="Formal and elegant, please. Choose any of our five wedding colours — and shine with us."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <SectionHeading eyebrow="Colour Palette" title="Our wedding colours" />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {COLOURS.map((c) => (
            <article key={c.name} className="luxe-card overflow-hidden text-center">
              <div
                className="h-28 w-full border-b border-accent/30"
                style={{ backgroundColor: c.hex }}
                aria-hidden="true"
              />
              <div className="p-5">
                <h3 className="font-serif text-lg">{c.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.hex}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading
            eyebrow="Inspiration"
            title="Outfit ideas"
            subtitle="Lace, satin, brocade and aso-oke in our palette — with gold accessories to finish the look."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
              <img
                src={dresscode}
                alt="Flat lay of turquoise, royal blue and green fabrics with gold accessories"
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-xs text-muted-foreground">
                Fabrics and accessories in our palette.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
              <img
                src={gallery2}
                alt="Couple in traditional royal blue and gold attire"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
              <figcaption className="px-5 py-4 text-xs text-muted-foreground">
                Traditional attire in royal blue and gold.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
