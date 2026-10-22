import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { Gallery } from "@/components/Gallery";
import { Heading } from "@/components/Heading";
import { InquirySection } from "@/components/InquirySection";
import { Label } from "@/components/Label";
import { PageHero } from "@/components/PageHero";
import { Placeholder } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Split } from "@/components/Split";
import { hotel } from "@/content/hotel";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: hotel.meta.title,
  description: hotel.meta.description,
  alternates: { canonical: "/hotel" },
};

export default function HotelPage() {
  const { hero, arrival, rooms, levels, dining, operator } = hotel;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        image={images.lobbyLounge}
        imageAlt="The lobby: black marble, brass arches and glass-globe chandeliers"
        objectPosition="50% 55%"
      />

      {/* Arrival & lobby */}
      <section>
        <Container className="grid gap-10 py-28 md:py-40 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{arrival.label}</Label>
          <div className="lg:col-span-9">
            <Reveal>
              <Heading lines={arrival.title} className="mb-10 text-[clamp(2.75rem,6vw,4.5rem)] leading-none" />
              <p className="max-w-2xl font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-light leading-[1.45] text-ink/85">
                {arrival.body}
              </p>
            </Reveal>
          </div>
        </Container>
        <Container>
          <Reveal className="grid gap-4 md:grid-cols-12">
            <Placeholder label={arrival.render} className="h-[460px] md:col-span-8 md:h-[680px]" />
            <Placeholder label={arrival.render2} className="h-[320px] md:col-span-4 md:h-[680px]" />
          </Reveal>
        </Container>
      </section>

      {/* Rooms */}
      <section className="pt-28 md:pt-44">
        <Container>
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Label className="mb-6">{rooms.label}</Label>
              <Heading lines={rooms.title} className="text-[clamp(2.75rem,6vw,4.5rem)] leading-none" />
            </div>
            <p className="max-w-[380px] text-base leading-[1.75] text-ink/75">{rooms.body}</p>
          </div>
          <Gallery renders={rooms.gallery} />
        </Container>
      </section>

      {/* Levels */}
      <section className="pt-28 md:pt-44">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{levels.label}</Label>
          <Reveal className="lg:col-span-9">
            <FactList items={levels.items} />
          </Reveal>
        </Container>
      </section>

      {/* Dining */}
      <div className="mt-28 md:mt-44">
        <Split reverse label={dining.label} title={dining.title} body={dining.body} cta={dining.cta} render={dining.render} />
      </div>

      {/* Operator */}
      <section>
        <Container className="grid gap-10 py-28 md:py-40 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{operator.label}</Label>
          <Reveal className="lg:col-span-6">
            <h2 className="mb-6 text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.05]">{operator.title}</h2>
            <p className="mb-8 max-w-xl text-base leading-[1.75] text-ink/75">{operator.body}</p>
            <Link href={operator.cta.href} className="link-line">
              {operator.cta.label}
            </Link>
          </Reveal>
        </Container>
      </section>

      <InquirySection title={["Stay", "close."]} intro="Hotel operators, events and future guests." defaultRole="operator" />
    </>
  );
}
