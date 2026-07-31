import { createFileRoute } from "@tanstack/react-router";
import { Banknote, Gift, Heart, HandHeart, Home } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament } from "@/components/site/ornaments";

const TITLE = "Gifts & Registry — SoChi2026";
const DESC = "Gift options for Queeneth and Chigozie: bank transfer, wishlist, cash gift, household gifts and prayer support.";

export const Route = createFileRoute("/gifts")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gifts" },
    ],
    links: [{ rel: "canonical", href: "/gifts" }],
  }),
  component: Gifts,
});

const GIFTS = [
  {
    icon: Banknote,
    title: "Bank Transfer",
    body: "Bank Name: Zenith Bank, Account Name: Queeneth & Chigozie, Account Number: 3067876566.",
  },
  {
    icon: Gift,
    title: "Wishlist",
    body: "A curated online wishlist link will be shared here closer to the day.",
  },
  {
    icon: Heart,
    title: "Cash Gift",
    body: "A gift box will be available at the reception for those who prefer to give in person.",
  },
  {
    icon: Home,
    title: "Household Gifts",
    body: "Items for our new home: kitchenware, linens, appliances and dining pieces.",
  },
  {
    icon: HandHeart,
    title: "Prayer Support",
    body: "Above all, your prayers over our marriage are the gift we treasure most.",
  },
];

function Gifts() {
  return (
    <>
      <PageHero
        eyebrow="Gifts"
        title="Your presence is the present"
        intro="Should you wish to bless our new home, here are a few gentle options."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GIFTS.map((g) => (
            <article key={g.title} className="luxe-card p-8">
              <g.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-serif text-2xl">{g.title}</h2>
              <div className="gold-rule mt-3 w-16" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
