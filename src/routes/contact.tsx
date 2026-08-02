import { createFileRoute } from "@tanstack/react-router";
import { Camera, Facebook, Instagram, Mail, MessageCircle, PartyPopper, Phone, Users } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";
import { WEDDING } from "@/lib/wedding";

const TITLE = "Stay Connected — SoChi2026 Wedding Appreciation";
const DESC =
  "Stay connected with Queeneth and Chigozie after the wedding: share photos, vendor enquiries, family contact and future celebrations.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function waLink(phone: string) {
  const intl = `234${phone.replace(/^0/, "")}`;
  return `https://wa.me/${intl}?text=${encodeURIComponent(
    "Hello! Congratulations on SoChi2026 — I'd love to stay connected."
  )}`;
}

const SECTIONS = [
  {
    icon: Camera,
    title: "Share Additional Wedding Photos",
    body: "Did you capture a moment we haven't seen yet? Please send your photos and videos by WhatsApp or email — we would love to add them to our album.",
  },
  {
    icon: PartyPopper,
    title: "Vendor Enquiries",
    body: "Loved the decor, the food, the music or the photography? Reach out and we will gladly share the contacts of the wonderful vendors who served us.",
  },
  {
    icon: Users,
    title: "Family Contact",
    body: "For family matters and follow-ups from either side, our family representatives remain available on the numbers listed here.",
  },
  {
    icon: MessageCircle,
    title: "Future Celebrations",
    body: "Housewarming, anniversaries and the celebrations still to come — stay close, and we will make sure you hear about them first.",
  },
];

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Stay Connected"
        intro="The wedding day has passed, but the friendship continues. Thank you for celebrating with us — we would love to keep hearing from you."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <SectionHeading
          eyebrow="With Gratitude"
          title="Our door is always open"
          subtitle="Thank you for every call, message and kind word before, during and after our wedding. Here is how to reach us going forward."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {SECTIONS.map((s) => (
            <article key={s.title} className="luxe-card p-8">
              <s.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl">{s.title}</h2>
              <div className="gold-rule mt-3 w-16" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading eyebrow="Phone & WhatsApp" title="Call or message us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WEDDING.phones.map((p) => (
              <article key={p} className="luxe-card p-7">
                <p className="eyebrow text-[0.56rem]">Contact Line</p>
                <p className="mt-2 font-serif text-3xl tracking-wide">{p}</p>
                <div className="gold-rule mt-4 w-16" />
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={`tel:+234${p.replace(/^0/, "")}`}
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-accent px-5 text-[0.64rem] uppercase tracking-[0.2em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" /> Call
                  </a>
                  <a
                    href={waLink(p)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-leaf px-5 text-[0.64rem] uppercase tracking-[0.2em] text-leaf transition-colors hover:bg-leaf hover:text-primary-foreground"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
          <article className="luxe-card p-8">
            <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl">Email</h2>
            <div className="gold-rule mt-3 w-16" />
            <p className="mt-4 text-sm text-muted-foreground">
              Send photos, notes and well wishes
            </p>
            <a
              href={`mailto:${WEDDING.email}`}
              className="mt-3 inline-block border-b border-accent pb-1 text-sm text-accent"
            >
              {WEDDING.email}
            </a>
          </article>

          <article className="luxe-card p-8">
            <h2 className="font-serif text-2xl">Relive the celebration</h2>
            <div className="gold-rule mt-3 w-16" />
            <p className="mt-4 text-sm text-muted-foreground">
              Your photos and posts live on under #{WEDDING.hashtag}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram (placeholder)"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook (placeholder)"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
