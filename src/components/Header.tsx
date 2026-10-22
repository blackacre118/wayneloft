"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { site } from "@/content/site";

const FORM_PAGES = ["/", "/hotel", "/residences", "/amenities", "/development"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;
  const inquireHref = FORM_PAGES.includes(pathname) ? "#inquire" : "/#inquire";
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500 ease-luxe ${
        solid
          ? "border-b border-hair bg-night/90 py-4 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6 md:py-8"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 md:px-14">
        <Link href="/" aria-label="WAYNE — home" className="flex min-h-11 items-center" onClick={close}>
          <Logo priority className="h-4 w-auto md:h-5" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-10 text-xs uppercase tracking-[0.24em]">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="hover:text-fire aria-[current=page]:text-fire"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={inquireHref}
            className="hidden border border-ink/35 px-5 py-3.5 text-xs uppercase tracking-[0.24em] transition-colors duration-300 hover:border-fire hover:text-fire sm:inline-block"
          >
            Inquire
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="flex min-h-11 min-w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-7">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-500 ease-luxe ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-500 ease-luxe ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-night px-6 pb-10 pt-12 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  ref={i === 0 ? firstLink : undefined}
                  href={item.href}
                  onClick={close}
                  className="block py-2 font-display text-4xl font-light tracking-tight hover:text-fire"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={inquireHref} onClick={close} className="link-line mt-10">
            Inquire
          </Link>
        </nav>
        <p className="label mt-16 text-muted">
          {site.address} · {site.neighborhood} · Detroit
        </p>
      </div>
    </header>
  );
}
