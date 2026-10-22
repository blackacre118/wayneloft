import Image, { type StaticImageData } from "next/image";
import { Heading } from "./Heading";
import { Label } from "./Label";
import { Placeholder } from "./Placeholder";

/** Full-bleed hero: real image when available, otherwise a labelled rendering panel. */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  objectPosition = "50% 40%",
  render,
  as = "h1",
  tall = false,
  titleMuted = "last",
}: {
  eyebrow: string;
  title: readonly string[];
  intro?: string;
  image?: StaticImageData;
  imageAlt?: string;
  objectPosition?: string;
  render?: string;
  as?: "h1" | "h2";
  tall?: boolean;
  titleMuted?: "last" | "none";
}) {
  return (
    <section
      className={`relative isolate flex overflow-hidden ${
        tall ? "min-h-[100svh] md:min-h-[920px]" : "min-h-[78svh] md:min-h-[760px]"
      }`}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="hero-scale -z-20 object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <Placeholder label={render} sizes="100vw" className="absolute inset-0 -z-20 !items-start pt-28 md:pt-32" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[rgb(3_5_11/0.5)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-night/90 to-transparent" />

      <div className="mx-auto mt-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pb-16 pt-40 md:flex-row md:items-end md:justify-between md:gap-10 md:px-14 md:pb-24">
        <div className="max-w-[880px]">
          <Label tone="fire" className="mb-6 !tracking-[0.3em] md:mb-7">
            {eyebrow}
          </Label>
          <Heading
            as={as}
            lines={title}
            muted={titleMuted}
            className="text-[clamp(3rem,9vw,6.5rem)] leading-[0.98] tracking-[-0.025em]"
          />
        </div>
        {intro ? <p className="max-w-[340px] text-base leading-[1.7] text-ink/80">{intro}</p> : null}
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <div aria-hidden className="fire-glow absolute bottom-0 left-6 h-px w-32 bg-fire md:left-14 md:w-44" />
    </section>
  );
}
