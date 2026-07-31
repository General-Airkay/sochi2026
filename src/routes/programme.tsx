import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Ornament } from "@/components/site/ornaments";

const TITLE = "Programme of Events — SoChi2026";
const DESC = "The order of service and celebration schedule for 29 August 2026.";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/programme" },
    ],
    links: [{ rel: "canonical", href: "/programme" }],
  }),
  component: Programme,
});

const SCHEDULE = [
  { time: "9:30 AM", title: "Arrival", note: "Guests are seated. Please arrive early." },
  { time: "10:00 AM", title: "Opening Prayer", note: "The service begins prompt." },
  { time: "10:10 AM", title: "Processional", note: "Entrance of the bridal train." },
  { time: "10:30 AM", title: "Marriage Ceremony", note: "Exchange of vows and rings." },
  { time: "11:30 AM", title: "Signing of the Register", note: "Witnessed by both families." },
  { time: "12:00 PM", title: "Photography", note: "Family and group photographs." },
  { time: "1:00 PM", title: "Reception", note: "Immediately after, same venue." },
  { time: "1:45 PM", title: "Toast", note: "A toast to the newlyweds." },
  { time: "2:15 PM", title: "Cake Cutting", note: "Sweet moments together." },
  { time: "2:45 PM", title: "Dance", note: "Celebration on the floor." },
  { time: "4:00 PM", title: "Vote of Thanks", note: "Gratitude from both families." },
  { time: "4:30 PM", title: "Departure", note: "Safe travels and God's blessings." },
];

function Programme() {
  return (
    <>
      <PageHero
        eyebrow="Programme of Events"
        title="The order of our day"
        intro="A guide to how the celebration unfolds. Times are approximate except the 10:00 AM prompt start."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-14" />
        <ol className="relative mx-auto max-w-3xl border-l border-accent/40 pl-8 sm:pl-12">
          {SCHEDULE.map((s) => (
            <li key={s.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.05rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-accent sm:-left-[3.05rem]"
                style={{ boxShadow: "0 0 0 4px color-mix(in oklab, var(--gold) 22%, transparent)" }}
              />
              <p className="eyebrow text-[0.58rem]">{s.time}</p>
              <h2 className="mt-2 font-serif text-2xl">{s.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
