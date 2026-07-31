import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Ornament } from "@/components/site/ornaments";

const TITLE = "RSVP — SoChi2026";
const DESC = "Kindly confirm your attendance for the wedding of Queeneth and Chigozie on 29 August 2026.";

export const Route = createFileRoute("/rsvp")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/rsvp" },
    ],
    links: [{ rel: "canonical", href: "/rsvp" }],
  }),
  component: Rsvp,
});

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(60),
  lastName: z.string().trim().min(1, "Last name is required").max(60),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(25),
  guests: z.coerce.number().int().min(1, "At least one guest").max(10, "Maximum 10 guests"),
  attendance: z.enum(["yes", "no"]),
  meal: z.enum(["standard", "vegetarian", "no-preference"]),
  message: z.string().trim().max(600).optional(),
});

const fieldClass =
  "mt-2 w-full rounded-sm border border-accent/40 bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40";
const labelClass = "eyebrow text-[0.58rem]";

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Rsvp() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState<{ firstName: string; attendance: string } | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof FieldErrors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    // TODO: connect to a backend here — the validated payload is `parsed.data`.
    setSent({ firstName: parsed.data.firstName, attendance: parsed.data.attendance });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <PageHero
        eyebrow="RSVP"
        title="Will you celebrate with us?"
        intro="Kindly respond on or before 1 August 2026 so we can prepare a seat for you."
      />

      <section className="px-4 py-20">
        <Ornament className="mb-12" />

        {sent ? (
          <div className="luxe-card mx-auto max-w-xl p-10 text-center" role="status">
            <Check className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-3xl">Thank you, {sent.firstName}!</h2>
            <div className="gold-rule mx-auto mt-4 w-24" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {sent.attendance === "yes"
                ? "Your response has been recorded. We cannot wait to celebrate with you on 29 August 2026."
                : "Thank you for letting us know. You will be dearly missed, and we appreciate your prayers."}
            </p>
            <button
              type="button"
              onClick={() => setSent(null)}
              className="mt-8 rounded-sm border border-accent px-6 py-3 text-[0.66rem] uppercase tracking-[0.24em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="luxe-card mx-auto max-w-2xl p-8 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="firstName">
                  First Name
                </label>
                <input id="firstName" name="firstName" className={fieldClass} maxLength={60} />
                {errors.firstName ? <p className="mt-1 text-xs text-destructive">{errors.firstName}</p> : null}
              </div>
              <div>
                <label className={labelClass} htmlFor="lastName">
                  Last Name
                </label>
                <input id="lastName" name="lastName" className={fieldClass} maxLength={60} />
                {errors.lastName ? <p className="mt-1 text-xs text-destructive">{errors.lastName}</p> : null}
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" className={fieldClass} maxLength={255} />
                {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} maxLength={25} />
                {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
              </div>
              <div>
                <label className={labelClass} htmlFor="guests">
                  Number of Guests
                </label>
                <input
                  id="guests"
                  name="guests"
                  type="number"
                  min={1}
                  max={10}
                  defaultValue={1}
                  className={fieldClass}
                />
                {errors.guests ? <p className="mt-1 text-xs text-destructive">{errors.guests}</p> : null}
              </div>
              <div>
                <label className={labelClass} htmlFor="attendance">
                  Attendance
                </label>
                <select id="attendance" name="attendance" defaultValue="yes" className={fieldClass}>
                  <option value="yes">Joyfully accepts</option>
                  <option value="no">Regretfully declines</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="meal">
                  Meal Preference
                </label>
                <select id="meal" name="meal" defaultValue="standard" className={fieldClass}>
                  <option value="standard">Standard</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="no-preference">No preference</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Message to the Couple
                </label>
                <textarea id="message" name="message" rows={4} maxLength={600} className={fieldClass} />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-sm bg-gradient-to-r from-[oklch(0.66_0.11_76)] to-[oklch(0.84_0.08_84)] px-6 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Send RSVP
            </button>
          </form>
        )}
      </section>
    </>
  );
}
