import { Link } from "@tanstack/react-router";
import { NAV_LINKS, WEDDING } from "@/lib/wedding";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-royal-gradient px-4 pb-10 pt-14 text-center">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-40 w-[36rem] opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="font-script text-4xl shimmer-gold">{WEDDING.hashtag}</p>
        <p className="mx-auto mt-4 max-w-lg font-serif text-lg italic leading-relaxed text-ivory/90">
          “Thank you for being part of our love story.”
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ivory/75">
          Our hearts are full because of your love, prayers and support.
        </p>
        <div className="gold-rule mx-auto mt-8 w-40" />

        <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-ivory/60">
          Married {WEDDING.dateLabel} · {WEDDING.city}
        </p>
        <p className="mt-2 text-xs text-ivory/50">
          Copyright © 2026 {WEDDING.hashtag}.
        </p>
        <p className="mt-2 text-xs text-ivory/50">
          Made with love by{" "}
          <a
            href="https://myweddingwebsite.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-2 transition-colors"
          >
            HTS Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
