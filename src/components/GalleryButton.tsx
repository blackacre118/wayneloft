"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Sticky shortcut to the gallery, pinned to the middle of the right edge on every page but the gallery. */
export function GalleryButton() {
  const pathname = usePathname();
  if (pathname === "/gallery") return null;
  return (
    <Link
      href="/gallery"
      className="group fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-3 border border-r-0 border-ink/20 bg-night/70 px-2.5 py-4 text-ink/80 backdrop-blur-md transition-colors duration-300 hover:border-fire/60 hover:text-ink md:px-3 md:py-5"
    >
      <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
        <rect x="3" y="3" width="7.5" height="7.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" />
      </svg>
      <span className="text-[10px] font-medium uppercase tracking-[0.28em] [writing-mode:vertical-rl] rotate-180">
        Gallery
      </span>
    </Link>
  );
}
