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

      <div
        role="group"
        aria-label="Time of day"
        className="absolute right-6 top-24 z-10 flex border border-ink/30 bg-night/40 backdrop-blur-sm md:right-14 md:top-32"
      >
        {(["night", "day"] as const).map((p) => (
          <button
            key={p}
            type="button"
            aria-pressed={phase === p}
            onClick={() => choose(p)}
            className={`min-h-11 px-4 text-[11px] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
              phase === p ? "bg-ink text-night" : "text-ink/75 hover:text-fire"
            }`}
          >
            {p === "night" ? "Night" : "Day"}
          </button>
        ))}
      </div>
    </>
  );
}
