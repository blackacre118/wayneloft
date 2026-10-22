import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Heading } from "./Heading";
import { Label } from "./Label";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

/** Split image/text section. Image left by default; `reverse` puts it right. */
export function Split({
  id,
  label,
  title,
  body,
  cta,
  image,
  imageAlt = "",
  objectPosition,
  render,
  reverse = false,
  children,
}: {
  id?: string;
  label: string;
  title: readonly string[];
  body: string;
  cta?: { href: string; label: string };
  image?: StaticImageData;
  imageAlt?: string;
  objectPosition?: string;
  render?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className={`flex flex-col lg:min-h-[820px] ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:flex-[1.33]">
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover"
            style={objectPosition ? { objectPosition } : undefined}
          />
        ) : (
          <Placeholder label={render} className="absolute inset-0" />
        )}
      </div>
      <div className="flex flex-col justify-between gap-12 bg-navy px-6 py-20 md:px-[72px] md:py-[120px] lg:flex-1">
        <Label>{label}</Label>
        <Reveal>
          <Heading lines={title} className="mb-8 text-[clamp(2.75rem,6vw,4.5rem)] leading-none" />
          <p className="max-w-[440px] text-[17px] leading-[1.75] text-ink/80">{body}</p>
          {children}
        </Reveal>
        {cta ? (
          <Link href={cta.href} className="link-line self-start">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
