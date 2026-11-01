import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-24 md:px-14 md:pb-32">
        <h1 className="text-[clamp(3rem,9vw,6.5rem)] leading-[0.98]">
          <span className="block">This floor</span>
          <em className="block">doesn’t exist.</em>
        </h1>
        <Link href="/" className="link-line mt-12">Return to the lobby</Link>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line" />
      <div aria-hidden className="fire-glow absolute bottom-0 left-6 h-px w-32 bg-fire md:left-14 md:w-44" />
    </section>
  );
}
