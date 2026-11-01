import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

/**
 * Editorial gallery. Desktop: one large panel with smaller ones stacked beside it.
 * Phone: a swipeable row that snaps image to image, with the next one peeking in.
 */
export function Gallery({ renders }: { renders: readonly string[] }) {
  const [first, ...rest] = renders;
  if (!rest.length) {
    return (
      <Reveal>
        <Placeholder label={first} className="h-[380px] md:h-[560px]" />
      </Reveal>
    );
  }
  return (
    <Reveal>
      <div className="snap-row md:hidden" aria-label="Gallery — swipe for more">
        {renders.map((r) => (
          <Placeholder key={r} label={r} sizes="85vw" className="h-[440px] w-[85%] shrink-0 snap-center" />
        ))}
      </div>
      <div className="hidden gap-4 md:grid md:grid-cols-12">
        <Placeholder label={first} className="col-span-7 h-[560px]" />
        <div className="col-span-5 grid gap-4">
          {rest.slice(0, 2).map((r) => (
            <Placeholder key={r} label={r} />
          ))}
        </div>
        {rest.slice(2).map((r) => (
          <Placeholder key={r} label={r} className="col-span-12 h-[440px]" />
        ))}
      </div>
    </Reveal>
  );
}
