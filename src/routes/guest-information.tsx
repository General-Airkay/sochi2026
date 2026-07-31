import { createFileRoute } from "@tanstack/react-router";
import { BedDouble, Bus, CarFront, CloudSun, Hotel, PhoneCall } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Guest Information — SoChi2026";
const DESC = "Accommodation, transportation, parking, hotels, weather, FAQs and contacts for our wedding guests.";

export const Route = createFileRoute("/guest-information")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/guest-information" },
    ],
    links: [{ rel: "canonical", href: "/guest-information" }],
  }),
  component: GuestInfo,
});

const CARDS = [
  { icon: BedDouble, title: "Accommodation", body: "A list of recommended guest houses near Choba will be shared here." },
  { icon: Bus, title: "Transportation", body: "Guests are kindly requested to make their own transportation arrangements to and from the venue, as no shuttle or transportation service will be provided." },
  { icon: CarFront, title: "Parking", body: "Secured parking is available within the venue premises." },
  { icon: Hotel, title: "Nearby Hotels", body: "Helena Hotels and other nearby options within five minutes of the venue." },
  { icon: CloudSun, title: "Weather", body: "Late August in Port Harcourt is warm and humid with occasional rain. A light umbrella is wise." },
  { icon: PhoneCall, title: "Contact", body: `Please reach our planning team on ${WEDDING.phones[0]} for any questions.` },
];

const FAQS = [
  { q: "What time should I arrive?", a: "Please arrive by 9:30 AM. The ceremony begins at 10:00 AM prompt." },
  { q: "Can I bring a guest?", a: "Kindly indicate the number of guests on your RSVP so we can reserve seats." },
  { q: "Are children welcome?", a: "Yes, children are welcome. Please supervise them diligently during the ceremony." },
  { q: "Is there a dress code?", a: "Formal attire in our colours: turquoise, royal blue, leaf green, gold or white." },
  { q: "Where do I park?", a: "Parking is available at the venue with attendants on hand to direct you." },
];

function GuestInfo() {
  return (
    <>
      <PageHero
        eyebrow="Guest Information"
        title="Everything you need to know"
        intro="Practical details to make your visit smooth and joyful."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article key={c.title} className="luxe-card p-8">
              <c.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl">{c.title}</h2>
              <div className="gold-rule mt-3 w-16" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked" />
          <Accordion type="single" collapsible className="mt-8">
            {FAQS.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-accent/30">
                <AccordionTrigger className="text-left font-serif text-lg hover:text-accent">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
