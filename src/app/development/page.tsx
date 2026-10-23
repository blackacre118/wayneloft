import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { Heading } from "@/components/Heading";
import { InquirySection } from "@/components/InquirySection";
import { Label } from "@/components/Label";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StackingPlan } from "@/components/StackingPlan";
import { StatRow } from "@/components/StatRow";
import { development } from "@/content/development";
import { stats } from "@/content/site";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: development.meta.title,
  description: development.meta.description,
  alternates: { canonical: "/development" },
};

export default function DevelopmentPage() {
  const { hero, overview, towers, stacking, site, program, sponsor, timeline, inquire } = development;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        image={images.wholeDay}
        imageAlt="WAYNE in daylight from above: both towers, the glass pool pavilion and the surrounding lots on Sixth Street"
        objectPosition="50% 45%"
      />

      {/* Overview */}
      <section>
        <Container className="grid gap-10 py-28 md:py-40 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{overview.label}</Label>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-light leading-[1.2] tracking-[-0.01em]">
                {overview.statement}
              </p>
            </Reveal>
            <Reveal className="mt-20" delay={100}>
              <StatRow stats={stats} />
            </Reveal>
            <Reveal className="mt-16 grid gap-x-12 md:grid-cols-2" delay={150}>
              <FactList items={overview.facts.slice(0, 4)} />
              <FactList items={overview.facts.slice(4)} className="max-md:border-t-0" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Towers + stacking plan */}
      <section className="border-t border-hair bg-navy">
        <Container className="grid gap-16 py-28 md:py-36 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Label className="mb-10">{towers.label}</Label>
            <div className="flex flex-col gap-12">
              {towers.items.map((t) => (
                <Reveal key={t.name} className="border-t border-line pt-6">
                  <h3 className="text-[32px] font-light">{t.name}</h3>
                  <p className="label mb-4 mt-2 text-fire">{t.spec}</p>
                  <p className="text-[15px] leading-[1.7] text-ink/75">{t.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Label className="mb-4">{stacking.label}</Label>
            <h2 className="mb-12 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05]">{stacking.title}</h2>
            <StackingPlan note={stacking.note} />
          </div>
        </Container>
      </section>

      {/* Site & outlots */}
      <section>
        <Container className="py-28 md:py-40">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Label className="mb-6">{site.label}</Label>
              <Heading lines={site.title} className="text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.02]" />
            </div>
            <p className="max-w-[420px] text-base leading-[1.75] text-ink/75">{site.body}</p>
          </div>
          <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="relative aspect-[16/9] overflow-hidden lg:col-span-8">
              <Image
                src={images.siteAerial}
                alt={site.imageAlt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 66vw, 100vw"
                className="object-cover"
              />
            </div>
            <FactList items={site.parcels} className="self-start lg:col-span-4" />
          </Reveal>
        </Container>
      </section>

      {/* Program */}
      <section className="border-t border-hair">
        <Container className="grid gap-10 py-28 md:py-36 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{program.label}</Label>
          <Reveal className="overflow-x-auto lg:col-span-9">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-[0.2em] text-muted">
                  <th scope="col" className="py-4 pr-6 font-medium">Use</th>
                  <th scope="col" className="py-4 pr-6 font-medium">Location</th>
                  <th scope="col" className="py-4 font-medium">Scale</th>
                </tr>
              </thead>
              <tbody>
                {program.rows.map((r) => (
                  <tr key={r.use} className="border-b border-line">
                    <th scope="row" className="py-[18px] pr-6 font-display text-lg font-light">{r.use}</th>
                    <td className="py-[18px] pr-6 text-ink/80">{r.where}</td>
                    <td className="py-[18px] text-ink/80">{r.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </Container>
      </section>

      {/* Sponsor + timeline */}
      <section className="border-t border-hair bg-navy">
        <Container className="grid gap-20 py-28 md:py-36 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Label className="mb-6">{sponsor.label}</Label>
            <h2 className="mb-6 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05]">{sponsor.title}</h2>
            <p className="max-w-lg text-base leading-[1.75] text-ink/75">{sponsor.body}</p>
          </Reveal>
          <Reveal delay={100}>
            <Label className="mb-6">{timeline.label}</Label>
            <ol className="border-t border-line">
              {timeline.items.map((t, i) => (
                <li key={t.phase} className="flex items-baseline justify-between gap-6 border-b border-line py-[18px] text-sm">
                  <span className="flex items-baseline gap-4">
                    <span className="w-6 text-[11px] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                    {t.phase}
                  </span>
                  <span className="text-right text-ink/80">{t.status}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <InquirySection title={inquire.title} intro={inquire.intro} defaultRole="city" />
    </>
  );
}
