"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type Phase = "night" | "day";

/** How long each phase holds before the next dissolve, and how long the dissolve takes. */
const CYCLE_MS = 8000;

/**
 * Day image layered over the hero's night image. It dissolves in and out on its own until the
 * visitor picks Night or Day, which stops the cycle. With reduced motion it starts on night and
 * never cycles; the toggle still works.
 */
export function DayNight({ day, objectPosition }: { day: StaticImageData; objectPosition: string }) {
  const [phase, setPhase] = useState<Phase>("night");
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setPhase((p) => (p === "night" ? "day" : "night")), CYCLE_MS);
    return () => window.clearInterval(id);
  }, [auto]);

  const choose = (p: Phase) => {
    setAuto(false);
    setPhase(p);
  };

  return (
    <>
      <div
        aria-hidden
        className={`absolute inset-0 -z-20 transition-opacity duration-[3000ms] ease-in-out motion-reduce:duration-500 ${
          phase === "day" ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={day}
          alt=""
          fill
          placeholder="blur"
          sizes="100vw"
          className="hero-scale object-cover"
          style={{ objectPosition }}
        />
      </div>

      {/* Small sun/moon control in the hero's bottom-right corner, clear of the headline and intro. */}
      <div
        role="group"
        aria-label="Time of day"
        className="absolute bottom-4 right-4 z-10 flex items-center md:bottom-6 md:right-10"
      >
        {(["night", "day"] as const).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={phase === p}
            aria-label={p === "night" ? "Show at night" : "Show in daylight"}
            title={p === "night" ? "Night" : "Day"}
            onClick={() => choose(p)}
            className={`flex size-10 items-center justify-center transition-colors duration-300 ${
              phase === p ? "text-ink" : "text-ink/35 hover:text-ink/80"
            }`}
          >
            {p === "night" ? <MoonIcon /> : <SunIcon />}
          </button>
        ))}
      </div>
    </>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
