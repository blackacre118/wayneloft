import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

/** Editorial gallery grid: one large panel and stacked smaller ones, from the reference residences block. */
export function Gallery({ renders }: { renders: readonly string[] }) {
  const [first, ...rest] = renders;
  return (
    <Reveal className="grid gap-4 md:grid-cols-12">
      <Placeholder label={first} className="h-[380px] md:col-span-7 md:h-[560px]" />
      <div className="grid gap-4 md:col-span-5">
        {rest.slice(0, 2).map((r) => (
          <Placeholder key={r} label={r} className="h-[260px] md:h-auto" />
        ))}
      </div>
      {rest.slice(2).map((r) => (
        <Placeholder key={r} label={r} className="h-[300px] md:col-span-12 md:h-[440px]" />
      ))}
    </Reveal>
  );
}
