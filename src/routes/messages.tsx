import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament, SectionHeading } from "@/components/site/ornaments";

const TITLE = "Guestbook Messages — SoChi2026";
const DESC = "Leave a congratulatory message for Queeneth and Chigozie in our digital guestbook.";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/messages" },
    ],
    links: [{ rel: "canonical", href: "/messages" }],
  }),
  component: Messages,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(60),
  message: z.string().trim().min(4, "Please write a short message").max(500),
});

type Wish = { name: string; message: string };

const SAMPLE: Wish[] = [
  { name: "Aunty Ngozi", message: "What God has joined together, let no one separate. Congratulations, my darlings!" },
  { name: "Tamuno & Ibiso", message: "Watching your friendship blossom has been such a joy. Wishing you a lifetime of laughter." },
  { name: "The Amadi Family", message: "May your home be filled with peace, plenty and praise. SoChi2026 forever!" },
  { name: "Chidera", message: "From campus days to the altar — God has been faithful. Congratulations!" },
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-accent/40 bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";

function Messages() {
  const [wishes, setWishes] = useState<Wish[]>(SAMPLE);
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [thanks, setThanks] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const next: { name?: string; message?: string } = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as "name" | "message"] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // TODO: connect to a backend here to persist guestbook entries.
    setWishes((w) => [parsed.data, ...w]);
    setThanks(true);
    form.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Guestbook"
        title="Leave us a message"
        intro="Your words become part of our story. Share a prayer, a memory or a blessing."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />

        <form onSubmit={onSubmit} noValidate className="luxe-card mx-auto max-w-2xl p-8 sm:p-10">
          <div>
            <label className="eyebrow text-[0.58rem]" htmlFor="name">
              Your Name
            </label>
            <input id="name" name="name" maxLength={60} className={fieldClass} />
            {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
          </div>
          <div className="mt-5">
            <label className="eyebrow text-[0.58rem]" htmlFor="message">
              Your Message
            </label>
            <textarea id="message" name="message" rows={4} maxLength={500} className={fieldClass} />
            {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
          </div>
          <button
            type="submit"
            className="mt-7 w-full rounded-sm bg-gradient-to-r from-[oklch(0.66_0.11_76)] to-[oklch(0.84_0.08_84)] px-6 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Sign the Guestbook
          </button>
          {thanks ? (
            <p role="status" className="mt-4 text-center text-sm text-accent">
              Thank you — your message has been added below.
            </p>
          ) : null}
        </form>

        <div className="mx-auto mt-20 max-w-5xl">
          <SectionHeading eyebrow="Well Wishes" title="From our loved ones" />
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {wishes.map((w, i) => (
              <article key={`${w.name}-${i}`} className="luxe-card break-inside-avoid p-6">
                <Quote className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="mt-3 font-serif text-lg italic leading-relaxed">{w.message}</p>
                <p className="eyebrow mt-4 text-[0.56rem]">{w.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
