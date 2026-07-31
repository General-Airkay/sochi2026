import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

/**
 * Background instrumental control. Drop an mp3 at `public/music/instrumental.mp3`
 * and it will play; until then the control simply stays idle.
 */
export function MusicToggle() {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onError = () => setAvailable(false);
    el.addEventListener("error", onError);
    return () => el.removeEventListener("error", onError);
  }, []);

  const toggle = async () => {
    const el = ref.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  return (
    <>
      <audio ref={ref} loop preload="none" src="/music/instrumental.mp3" />
      <button
        type="button"
        onClick={toggle}
        disabled={!available}
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 text-accent transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-40"
      >
        {playing ? <Pause className="h-4 w-4" /> : <Music className="h-4 w-4" />}
      </button>
    </>
  );
}
