"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FORM_PAGES = ["/", "/hotel", "/residences", "/amenities", "/development"];

/**
 * Phone-only floating Inquire button. Appears once the visitor scrolls past the hero and steps
 * aside while the inquiry form or the footer is on screen.
 */
export function MobileCta() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = [document.getElementById("inquire"), document.querySelector("footer")].filter(
      (el): el is HTMLElement => !!el,
    );
    const visible = new Set<Element>();
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setBlocked(visible.size > 0);
    });
    targets.forEach((t) => io.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [pathname]);

  const show = pastHero && !blocked;
  const href = FORM_PAGES.includes(pathname) ? "#inquire" : "/#inquire";

  return (
    <div
      className={`fixed inset-x-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 transition-[opacity,transform] duration-500 ease-luxe md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Link
        href={href}
        tabIndex={show ? 0 : -1}
        aria-hidden={!show}
        className="flex min-h-14 items-center justify-between border border-ink/15 bg-ink px-6 text-xs font-medium uppercase tracking-[0.28em] text-night shadow-[0_12px_40px_rgb(0_0_0/0.45)]"
      >
        Inquire
        <span aria-hidden className="h-px w-10 bg-fire" />
      </Link>
    </div>
  );
}
