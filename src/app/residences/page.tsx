import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { FullBleed } from "@/components/FullBleed";
import { Gallery } from "@/components/Gallery";
import { Heading } from "@/components/Heading";
import { InquirySection } from "@/components/InquirySection";
import { Label } from "@/components/Label";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { condoShort } from "@/content/legal";
import { residences } from "@/content/residences";
import { images } from "@/lib/images";
import Link from "next/link";

export const metadata: Metadata = {
  title: residences.meta.title,
  description: residences.meta.description,
  alternates: { canonical: "/residences" },
};

export default function ResidencesPage() {
  const { hero, apartments, living, penthouses, inquire } = residences;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        render="Render · Residence living room at night, city view"
      />

      {/* Apartments */}
      <section className="pt-28 md:pt-40">
        <Container>
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Label className="mb-6">{apartments.label}</Label>
              <Heading lines={apartments.title} className="text-[clamp(2.75rem,6vw,4.5rem)] leading-none" />
            </div>
            <p className="max-w-[400px] text-base leading-[1.75] text-ink/75">{apartments.body}</p>
          </div>
          <Gallery renders={apartments.gallery} />
        </Container>
      </section>

      {/* Resident life */}
      <section className="pt-28 md:pt-44">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{living.label}</Label>
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:col-span-9">
            {living.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 80} className="border-t border-line pt-6">
                <h3 className="mb-2 text-[28px] font-light">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-ink/70">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Penthouse collection */}
      <div className="mt-28 md:mt-44">
        <FullBleed
          id="penthouses"
          label={penthouses.label}
          title={penthouses.title}
          body={penthouses.body}
          cta={penthouses.cta}
          image={images.exteriorNight}
          imageAlt={penthouses.imageAlt}
          objectPosition="22% 0%"
        />
      </div>
      <section>
        <Container className="grid gap-12 py-24 md:py-32 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <FactList items={penthouses.details} />
            <p className="mt-8 text-xs leading-relaxed text-muted">
              {condoShort}{" "}
              <Link href="/legal#condominium" className="underline underline-offset-4 hover:text-fire">
                Full condominium disclosures
              </Link>
              .
            </p>
          </div>
          <Reveal className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {penthouses.gallery.map((r) => (
              <Placeholder key={r} label={r} className="h-[360px] md:h-[480px]" />
            ))}
          </Reveal>
        </Container>
      </section>

      <InquirySection title={inquire.title} intro={inquire.intro} defaultRole="penthouse">
        <p className="mt-8 max-w-sm text-[11px] leading-relaxed text-muted">{condoShort}</p>
      </InquirySection>
    </>
  );
}
