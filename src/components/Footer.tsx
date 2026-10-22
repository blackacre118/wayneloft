import Link from "next/link";
import { Logo } from "./Logo";
import { EqualHousingIcon } from "./EqualHousingIcon";
import { site } from "@/content/site";
import { footerDisclaimer } from "@/content/legal";

export function Footer() {
  return (
    <footer className="border-t border-hair px-6 pb-10 pt-16 md:px-14">
      <div className="mx-auto max-w-[1328px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Logo className="h-4 w-auto" />
          <div className="grid gap-8 text-xs uppercase tracking-[0.18em] text-muted sm:grid-cols-3 sm:gap-16">
            <address className="not-italic leading-6">
              {site.address}
              <br />
              {site.neighborhood} · {site.city}
            </address>
            <p className="leading-6">
              A Blackacre development
              <br />
              {site.developer}
            </p>
            <ul className="flex flex-col leading-6">
              {site.footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-fire">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-hair pt-8 md:flex-row md:items-start md:gap-10">
          <div className="flex shrink-0 items-center gap-3 text-muted">
            <EqualHousingIcon className="h-7 w-7" />
            <span className="text-[11px] uppercase tracking-[0.18em]">Equal Housing Opportunity</span>
          </div>
          <p className="max-w-4xl text-xs leading-relaxed text-muted">
            {footerDisclaimer} See{" "}
            <Link href="/legal" className="underline underline-offset-4 hover:text-fire">
              disclosures
            </Link>
            .
          </p>
        </div>
        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-muted/80">
          © {new Date().getFullYear()} {site.developer}
        </p>
      </div>
    </footer>
  );
}
