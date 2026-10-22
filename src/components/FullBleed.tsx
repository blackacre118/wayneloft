import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Heading } from "./Heading";
import { Label } from "./Label";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

/** Full-bleed image with centered statement — the penthouse moment in the reference. */
export function FullBleed({
  id,
  label,
  title,
  body,
  cta,
  image,
  imageAlt = "",
  objectPosition = "50% 50%",
  render,
  children,
}: {
  id?: string;
  label: string;
  title: readonly string[];
  body?: string;
  cta?: { href: string; label: string };
  image?: StaticImageData;
  imageAlt?: string;
  objectPosition?: string;
  render?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="relative isolate flex min-h-[760px] items-center overflow-hidden md:min-h-[900px]">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          placeholder="blur"
          sizes="100vw"
          className="-z-20 object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <Placeholder label={render} sizes="100vw" className="absolute inset-0 -z-20" />
      )}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[rgb(3_5_11/0.62)]" />
      <Reveal className="mx-auto flex max-w-[1328px] flex-col items-center gap-9 px-6 py-32 text-center md:px-14 md:py-40">
        <Label tone="fire" className="!tracking-[0.3em]">
          {label}
        </Label>
        <Heading lines={title} className="text-[clamp(4rem,12vw,7.5rem)] leading-[0.98] tracking-[-0.03em]" />
        {body ? <p className="max-w-[560px] text-lg leading-[1.75] text-ink/80">{body}</p> : null}
        {children}
        {cta ? (
          <Link
            href={cta.href}
            className="mt-4 inline-flex min-h-11 items-center bg-ink px-9 py-5 text-xs font-medium uppercase tracking-[0.28em] text-night transition-colors duration-300 hover:bg-fire hover:text-night"
          >
            {cta.label}
          </Link>
        ) : null}
      </Reveal>
    </section>
  );
}
