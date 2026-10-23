import Image from "next/image";
import Link from "next/link";
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
import { Split } from "@/components/Split";
import { StatRow } from "@/components/StatRow";
import { home } from "@/content/home";
import { condoShort } from "@/content/legal";
import { stats } from "@/content/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const { hero, building, hotel, residences, penthouses, amenities, development, inquire } = home;
  return (
    <>
      <PageHero
        tall
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleMuted="none"
        intro={hero.intro}
        image={images.wholeNight}
        imageAlt={hero.imageAlt}
        objectPosition="50% 45%"
      />

      {/* (01) The building */}
      <section>
        <Container className="grid gap-10 py-28 md:py-40 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{building.label}</Label>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="font-display text-[clamp(1.75rem,3.6vw,3rem)] font-light leading-[1.18] tracking-[-0.01em]">
                {building.statement}
              </p>
            </Reveal>
            <Reveal className="mt-20 md:mt-24" delay={120}>
              <StatRow stats={stats} />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* (02) Hotel */}
      <Split
        id="hotel"
        label={hotel.label}
        title={hotel.title}
        body={hotel.body}
        cta={hotel.cta}
        image={images.lobbyLounge}
        imageAlt={hotel.imageAlt}
        objectPosition="50% 50%"
      />

      {/* (03) Residences */}
      <section id="residences" className="pt-28 md:pt-44">
        <Container>
          <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <Label className="mb-6">{residences.label}</Label>
              <Heading lines={residences.title} className="text-[clamp(2.75rem,6vw,4.5rem)] leading-none" />
            </div>
            <div className="max-w-[380px]">
              <p className="text-base leading-[1.75] text-ink/75">{residences.body}</p>
              <Link href={residences.cta.href} className="link-line mt-6">
                {residences.cta.label}
              </Link>
            </div>
          </div>
          <Gallery
            renders={[
              "Render · Residence living room, evening",
              "Render · Kitchen detail, stone + brass",
              "Render · Balcony, South Tower",
            ]}
          />
        </Container>
      </section>

      {/* (04) Penthouses */}
      <div className="mt-28 md:mt-44">
        <FullBleed
          id="penthouses"
          label={penthouses.label}
          title={penthouses.title}
          body={penthouses.body}
          cta={penthouses.cta}
          image={images.towerNight}
          imageAlt={penthouses.imageAlt}
          objectPosition="50% 45%"
        >
          <p className="max-w-[560px] text-[11px] leading-relaxed text-muted">{condoShort}</p>
        </FullBleed>
      </div>

      {/* (05) Amenities */}
      <section id="amenities" className="pt-28 md:pt-44">
        <Container>
          <Label className="mb-6">{amenities.label}</Label>
          <Reveal>
            <h2 className="mb-16 max-w-[900px] text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] md:mb-20">
              {amenities.title}
            </h2>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3 md:gap-4">
            {amenities.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Placeholder label={item.render} className="h-[340px] md:h-[440px]" />
                <h3 className="mb-2 mt-6 text-[28px] font-light">{item.title}</h3>
                <p className="text-[15px] leading-[1.7] text-ink/70">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-6 border-t border-line pt-7 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-12 gap-y-3 text-[13px] uppercase tracking-[0.18em] text-muted">
              {amenities.strip.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Link href={amenities.cta.href} className="link-line self-start">
              {amenities.cta.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* (06) Development teaser */}
      <section id="development" className="mt-28 border-t border-hair bg-navy md:mt-44">
        <Container className="flex flex-col gap-16 py-28 md:py-36 lg:flex-row lg:gap-[72px]">
          <div className="lg:flex-1">
            <Label className="mb-6">{development.label}</Label>
            <h2 className="mb-8 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.05]">{development.title}</h2>
            <p className="mb-10 text-base leading-[1.75] text-ink/75">{development.body}</p>
            <FactList items={development.facts} />
            <Link
              href={development.cta.href}
              className="mt-10 inline-flex min-h-11 items-center border border-fire px-7 py-[18px] text-xs font-medium uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-fire hover:text-night"
            >
              {development.cta.label}
            </Link>
          </div>
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:min-h-[520px] lg:flex-[1.6]">
            <Image
              src={images.wholeDay}
              alt={development.imageAlt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <InquirySection title={inquire.title} intro={inquire.intro} />
    </>
  );
}
