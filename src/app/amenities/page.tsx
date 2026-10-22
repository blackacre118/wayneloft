import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FactList } from "@/components/FactList";
import { Gallery } from "@/components/Gallery";
import { InquirySection } from "@/components/InquirySection";
import { Label } from "@/components/Label";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Split } from "@/components/Split";
import { amenities } from "@/content/amenities";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: amenities.meta.title,
  description: amenities.meta.description,
  alternates: { canonical: "/amenities" },
};

export default function AmenitiesPage() {
  const { hero, fnb, roof, venue, spaces } = amenities;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        image={images.rooftopAerial}
        imageAlt="The Signal: the South Tower rooftop terrace at dusk, seen from above"
        objectPosition="50% 50%"
      />
      <Split label={fnb.label} title={fnb.title} body={fnb.body} render={fnb.render} />
      <Split reverse label={roof.label} title={roof.title} body={roof.body} render={roof.render} />
      <Split id="venue" label={venue.label} title={venue.title} body={venue.body} cta={venue.cta} render={venue.render} />

      <section className="pt-28 md:pt-44">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Label className="lg:col-span-3">{spaces.label}</Label>
          <Reveal className="lg:col-span-9">
            <FactList items={spaces.items} />
          </Reveal>
        </Container>
        <Container className="mt-16">
          <Gallery renders={spaces.gallery} />
        </Container>
      </section>

      <InquirySection title={["Book", "the top floor."]} intro="Events on Level 23, and everything else." defaultRole="events" />
    </>
  );
}
