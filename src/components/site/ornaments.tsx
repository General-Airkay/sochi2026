import divider from "@/assets/floral-divider.jpg";

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto flex max-w-md items-center justify-center ${className}`} aria-hidden="true">
      <img
        src={divider}
        alt=""
        loading="lazy"
        width={1536}
        height={512}
        className="h-16 w-full object-contain mix-blend-multiply opacity-90 dark:opacity-70 dark:mix-blend-screen dark:invert-0"
      />
    </div>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`gold-rule w-full ${className}`} aria-hidden="true" />;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{title}</h2>
      <div className="gold-rule mx-auto mt-4 w-24" />
      {subtitle ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
