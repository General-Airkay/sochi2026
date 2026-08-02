import { useEffect, useState, type FormEvent, type ReactNode } from "react";

// Simple client-side password gate.
// Not real security (the password lives in the shipped JS bundle) — this is
// meant to keep casual visitors out before the wedding, not to protect
// sensitive data.
const SITE_PASSWORD = "*sochi2026#";
const STORAGE_KEY = "sochi2026-unlocked";

export function PasswordGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "true") setUnlocked(true);
    setChecked(true);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value === SITE_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  // Avoid flashing the gate before we've checked localStorage on mount.
  if (!checked) return null;

  if (unlocked) return <>{children}</>;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-border bg-card p-8 text-center shadow-sm"
      >
        <h1 className="font-serif text-2xl text-foreground">SoChi2026</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page is private. Enter the password to continue.
        </p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          className="mt-6 w-full rounded-md border border-input bg-background px-3 py-2 text-center text-sm text-foreground outline-none focus:ring-2 focus:ring-primary"
          placeholder="Password"
        />
        {error && (
          <p className="mt-2 text-sm text-destructive">Incorrect password, try again.</p>
        )}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
