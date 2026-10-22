import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { EqualHousingIcon } from "@/components/EqualHousingIcon";
import { Label } from "@/components/Label";
import { DRAFT_NOTICE, legalPage } from "@/content/legal";

export const metadata: Metadata = {
  title: legalPage.meta.title,
  description: legalPage.meta.description,
  alternates: { canonical: "/legal" },
};

export default function LegalPage() {
  return (
    <Container className="pb-28 pt-40 md:pb-40 md:pt-48">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Label tone="fire" className="mb-6">{DRAFT_NOTICE}</Label>
          <h1 className="text-[clamp(3rem,7vw,5rem)] leading-[0.98]">Disclosures.</h1>
          <nav aria-label="Disclosures" className="mt-10">
            <ul className="flex flex-col gap-2 text-sm text-muted">
              {legalPage.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="hover:text-fire">{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-16 lg:col-span-7 lg:col-start-6">
          {legalPage.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line pt-8">
              <h2 className="mb-6 flex items-center gap-4 text-3xl font-light">
                {s.id === "equal-housing" ? <EqualHousingIcon className="h-8 w-8 text-ink/80" /> : null}
                {s.title}
              </h2>
              <div className="flex flex-col gap-5 text-[15px] leading-[1.75] text-ink/80">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Container>
  );
}
