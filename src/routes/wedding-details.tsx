import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, Church, Clock, MapPin, Navigation, PartyPopper } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";

const TITLE = "Wedding Details — SoChi2026";
const DESC =
  "Ceremony and reception details for the wedding of Queeneth and Chigozie: 29 August 2026, 10:00 AM at GIC Choba Satellite, Port Harcourt.";

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

const GOOGLE_CALENDAR_URL =
  `https://calendar.google.com/calendar/render?action=TEMPLATE` +
  `&text=${encodeURIComponent("SoChi2026 — Wedding of Queeneth & Chigozie")}` +
  `&dates=20260829T090000Z/20260829T160000Z` +
  `&details=${encodeURIComponent("Solemnization of Holy Matrimony")}` +
  `&location=${encodeURIComponent("GIC Choba Satellite, Beside Helena Hotels, Choba, Port Harcourt")}`;

const MAP_QUERY = encodeURIComponent("GIC Choba Satellite, Choba, Port Harcourt");

function Details() {
  return (
    <>
      <PageHero
        eyebrow="Wedding Details"
        title="Where and when to join us"
        intro="Everything you need to celebrate with us on our special day."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <article className="luxe-card p-8">
            <Church className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl">Church Ceremony</h2>
            <div className="gold-rule mt-3 w-20" />
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-[0.6rem]">Date &amp; Time</dt>
                  <dd className="mt-1 text-muted-foreground">
                    {WEDDING.dateLabel} · {WEDDING.timeLabel}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-[0.6rem]">Venue</dt>
                  <dd className="mt-1 text-muted-foreground">{WEDDING.venue}</dd>
                </div>
              </div>
            </dl>
          </article>

          <article className="luxe-card p-8">
            <PartyPopper className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl">Reception</h2>
            <div className="gold-rule mt-3 w-20" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The reception follows immediately after the ceremony at the same venue. Expect
              worship, laughter, good food and dancing as we celebrate together.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Kindly remain seated for the bridal train procession before the toast.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <SectionHeading eyebrow="Getting There" title="Map &amp; directions" />
          <div className="mt-8 overflow-hidden rounded-sm border border-accent/40 shadow-[var(--shadow-luxe)]">
            <iframe
              title="Map to GIC Choba Satellite"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="luxe-card p-8">
              <Navigation className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-2xl">Driving Directions</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                From the East-West Road, turn towards Choba Satellite. The
                venue is beside Helena Hotels, just before the police station. Signage in royal blue
                and gold will guide you from the junction.
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block border-b border-accent pb-1 text-[0.68rem] uppercase tracking-[0.24em] text-accent"
              >
                Open in Google Maps
              </a>
            </article>

            <article className="luxe-card flex flex-col items-start p-8">
              <CalendarPlus className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-2xl">Save the Date</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Add the ceremony to your calendar so you never miss a moment.
              </p>
              <a
  href={GOOGLE_CALENDAR_URL}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 rounded-sm bg-gradient-to-r from-[oklch(0.66_0.11_76)] to-[oklch(0.84_0.08_84)] px-6 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:scale-105"
>
  Add to Google Calendar
</a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
