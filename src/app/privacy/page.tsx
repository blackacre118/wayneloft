import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Label } from "@/components/Label";
import { DRAFT_NOTICE, privacyPage } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPage.meta.title,
  description: privacyPage.meta.description,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="pb-28 pt-40 md:pb-40 md:pt-48">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <Label tone="fire" className="mb-6">{DRAFT_NOTICE}</Label>
          <h1 className="text-[clamp(3rem,7vw,5rem)] leading-[0.98]">Privacy.</h1>
          <p className="mt-6 text-sm text-muted">Effective {privacyPage.updated}</p>
        </div>
        <div className="flex flex-col gap-14 lg:col-span-7 lg:col-start-6">
          {privacyPage.sections.map((s) => (
            <section key={s.title} className="border-t border-line pt-8">
              <h2 className="mb-5 text-2xl font-light">{s.title}</h2>
              <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-ink/80">
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
