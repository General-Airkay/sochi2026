import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";

const TITLE = "Wedding Party — SoChi2026";
const DESC = "Meet the bride, groom, chief bridesmaid, best man, bridesmaids, groomsmen and parents.";

export const Route = createFileRoute("/wedding-party")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/wedding-party" },
    ],
    links: [{ rel: "canonical", href: "/wedding-party" }],
  }),
  component: WeddingParty,
});

type Person = { name: string; role: string };

const GROUPS: { heading: string; note: string; people: Person[] }[] = [
  {
    heading: "The Couple",
    note: "The two hearts at the centre of the celebration.",
    people: [
      { name: "Queeneth Sotonye", role: "The Bride" },
      { name: "Chigozie Godbless", role: "The Groom" },
    ],
  },
  {
    heading: "Standing Closest",
    note: "Placeholder names — replace with your chosen party.",
    people: [
      { name: "Name Placeholder", role: "Chief Bridesmaid" },
      { name: "Name Placeholder", role: "Best Man" },
    ],
  },
  {
    heading: "Bridesmaids",
    note: "Placeholder names.",
    people: [
      { name: "Name Placeholder", role: "Bridesmaid" },
      { name: "Name Placeholder", role: "Bridesmaid" },
      { name: "Name Placeholder", role: "Bridesmaid" },
      { name: "Name Placeholder", role: "Bridesmaid" },
    ],
  },
  {
    heading: "Groomsmen",
    note: "Placeholder names.",
    people: [
      { name: "Name Placeholder", role: "Groomsman" },
      { name: "Name Placeholder", role: "Groomsman" },
      { name: "Name Placeholder", role: "Groomsman" },
      { name: "Name Placeholder", role: "Groomsman" },
    ],
  },
  {
    heading: "Our Parents",
    note: "With gratitude for their love and prayers.",
    people: [
      { name: "Mr. & Mrs. Placeholder", role: "Parents of the Bride" },
      { name: "Mr. & Mrs. Placeholder", role: "Parents of the Groom" },
    ],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .filter((c) => /[A-Za-z]/.test(c))
    .slice(0, 2)
    .map((c) => c.toUpperCase())
    .join("");
}

function WeddingParty() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Party"
        title="The ones walking with us"
        intro="Family and friends who have carried us with love, prayer and laughter."
      />

      <div className="px-4 py-20">
        <Ornament className="mb-12" />
        <div className="mx-auto max-w-5xl space-y-20">
          {GROUPS.map((g) => (
            <section key={g.heading}>
              <SectionHeading title={g.heading} subtitle={g.note} />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {g.people.map((p, i) => (
                  <article key={`${g.heading}-${i}`} className="luxe-card p-6 text-center">
                    <div
                      className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-accent/50 font-serif text-2xl text-accent"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 25%, color-mix(in oklab, var(--turquoise) 22%, transparent), transparent 70%)",
                      }}
                      aria-hidden="true"
                    >
                      {initials(p.name) || "SC"}
                    </div>
                    <h3 className="mt-5 font-serif text-xl">{p.name}</h3>
                    <p className="eyebrow mt-2 text-[0.58rem]">{p.role}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
