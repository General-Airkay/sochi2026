import { MarriedFor } from "@/components/site/married-for";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-royal-gradient px-4 pb-14 pt-28 text-center sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-3xl reveal-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">{title}</h1>
        <div className="gold-rule mx-auto mt-5 w-28" />
        {intro ? (
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ivory/80">{intro}</p>
        ) : null}
        <div className="mt-8">
          <MarriedFor compact />
        </div>
      </div>
    </header>
  );
}
