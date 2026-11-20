"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import type { GalleryCategory, GalleryIcon } from "@/content/gallery";
import { Logo } from "./Logo";

/**
 * The gallery: one slim sticky bar (logo, category tabs, close) and, below it, the active
 * category's photos stacked at full screen width with a one-line caption each.
 * The active tab lives in the URL (?tab=hotel) so a category can be linked to directly.
 */
export function GalleryView({ categories }: { categories: GalleryCategory[] }) {
  const router = useRouter();
  const params = useSearchParams();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeId = categories.some((c) => c.id === params.get("tab")) ? params.get("tab")! : categories[0].id;
  const active = categories.find((c) => c.id === activeId)!;

  const select = (id: string) => {
    router.replace(`/gallery?tab=${id}`, { scroll: false });
    window.scrollTo({ top: 0 });
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (i + step + categories.length) % categories.length;
    tabs.current[next]?.focus();
    select(categories[next].id);
  };

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-hair bg-night/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center gap-1 px-2 py-3 sm:gap-4 sm:px-4 md:gap-8 md:px-14 md:py-4">
          <Link href="/" aria-label="WAYNE — home" className="hidden min-h-11 shrink-0 items-center sm:flex">
            <Logo className="h-4 w-auto" />
          </Link>
          <div role="tablist" aria-label="Gallery categories" className="flex min-w-0 flex-1 justify-between sm:justify-center md:gap-2">
            {categories.map((c, i) => {
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="gallery-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(c.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`relative flex min-h-12 min-w-0 flex-1 flex-col items-center justify-center gap-1 px-0.5 transition-colors sm:flex-none sm:px-2 duration-300 md:flex-row md:gap-2.5 md:px-4 ${
                    selected ? "text-ink" : "text-ink/45 hover:text-ink/80"
                  }`}
                >
                  <CategoryIcon icon={c.icon} />
                  <span className="text-[8.5px] font-medium uppercase tracking-[0.08em] sm:text-[9px] sm:tracking-[0.16em] md:text-[11px] md:tracking-[0.22em]">
                    {c.label}
                  </span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-2 -bottom-[13px] h-px bg-fire transition-opacity duration-300 md:-bottom-[17px] ${
                      selected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <Link
            href="/"
            aria-label="Close gallery"
            className="flex size-10 shrink-0 items-center justify-center text-ink/70 sm:size-11 transition-colors hover:text-fire"
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </Link>
        </div>
      </div>

      <div id="gallery-panel" role="tabpanel" aria-labelledby={`tab-${activeId}`} className="flex flex-col gap-2 pb-16 md:gap-3 md:pb-24">
        {active.photos.map((photo, i) => (
          <figure key={`${activeId}-${i}`}>
            <div
              className="relative w-full bg-[#03050b]"
              style={{
                aspectRatio: `${photo.src.width} / ${photo.src.height}`,
                maxHeight: photo.src.height > photo.src.width ? "100svh" : undefined,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="100vw"
                placeholder="blur"
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
            <figcaption className="mx-auto flex max-w-[1440px] items-baseline gap-4 px-4 pb-6 pt-3 text-sm text-ink/70 md:px-14">
              <span className="shrink-0 whitespace-nowrap text-[11px] tabular-nums tracking-[0.2em] text-muted">
                {String(i + 1).padStart(2, "0")} / {String(active.photos.length).padStart(2, "0")}
              </span>
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export function CategoryIcon({ icon }: { icon: GalleryIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "size-5 shrink-0",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (icon) {
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V6l6-3v18M10 21V9h10v12M3 21h18M13 12h1M17 12h1M13 15h1M17 15h1M13 18h1M17 18h1M6.5 9h1M6.5 12h1M6.5 15h1" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <circle cx="8" cy="15" r="4" />
          <path d="M11 12l8-8M16 7l2 2M14 9l2 2" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...common}>
          <path d="M5 11V8a2 2 0 012-2h10a2 2 0 012 2v3M3 13a2 2 0 014 0v2h10v-2a2 2 0 014 0v4H3v-4zM5 17v2M19 17v2" />
        </svg>
      );
    case "crown":
      return (
        <svg {...common}>
          <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 10H5L3 8zM5 21h14" />
        </svg>
      );
    case "waves":
      return (
        <svg {...common}>
          <path d="M3 9c2 0 2-1.5 4.5-1.5S9.5 9 12 9s2.5-1.5 4.5-1.5S19 9 21 9M3 14c2 0 2-1.5 4.5-1.5S9.5 14 12 14s2.5-1.5 4.5-1.5S19 14 21 14M3 19c2 0 2-1.5 4.5-1.5S9.5 19 12 19s2.5-1.5 4.5-1.5S19 19 21 19" />
        </svg>
      );
  }
}
