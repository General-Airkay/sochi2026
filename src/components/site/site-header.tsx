import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WEDDING } from "@/lib/wedding";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { MusicToggle } from "@/components/site/music-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        className={[
          "transition-all duration-500",
          scrolled
            ? "border-b border-accent/30 bg-background/85 backdrop-blur-lg"
            : "border-b border-transparent bg-gradient-to-b from-royal-deep/60 to-transparent",
        ].join(" ")}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3"
        >
          <Link to="/" className="group mr-2 flex shrink-0 items-baseline gap-2">
            <span
              className={[
                "font-script text-2xl leading-none transition-colors",
                scrolled ? "text-gold-gradient" : "shimmer-gold",
              ].join(" ")}
            >
              {WEDDING.hashtag}
            </span>
          </Link>

          <ul className="hidden items-center gap-3.5 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={[
                    "relative whitespace-nowrap text-[0.62rem] uppercase tracking-[0.14em] transition-colors",
                    scrolled ? "text-foreground/80" : "text-ivory/85",
                    "hover:text-accent data-[status=active]:text-accent",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <MusicToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 text-accent xl:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[75vh] overflow-y-auto border-b border-accent/30 bg-background/97 px-4 pb-6 pt-2 backdrop-blur-xl xl:hidden"
      >
        <ul className="grid grid-cols-2 gap-2">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="block rounded-sm border border-accent/25 px-3 py-3 text-xs uppercase tracking-[0.16em] text-foreground/85 transition-colors hover:border-accent hover:text-accent data-[status=active]:border-accent data-[status=active]:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
