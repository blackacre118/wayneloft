import { Suspense } from "react";
import { Heading } from "./Heading";
import { InquiryForm } from "./InquiryForm";
import type { Role } from "@/content/inquiry";

export function InquirySection({
  title,
  intro,
  defaultRole,
  children,
}: {
  title: readonly string[];
  intro?: string;
  defaultRole?: Role;
  children?: React.ReactNode;
}) {
  return (
    <section id="inquire" className="scroll-mt-24 border-t border-hair">
      <div className="mx-auto grid max-w-[1328px] gap-14 px-6 py-28 md:px-14 md:py-40 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Heading lines={title} className="text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.98]" />
          {intro ? <p className="mt-8 max-w-sm text-base leading-[1.75] text-ink/75">{intro}</p> : null}
          {children}
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <Suspense fallback={<div className="min-h-[520px]" />}>
            <InquiryForm defaultRole={defaultRole} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
