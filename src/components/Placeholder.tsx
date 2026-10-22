import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { renderFiles } from "@/content/renders";

const EXTS = [".jpg", ".jpeg", ".png", ".webp"];
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

/** The uploaded rendering for a label, if one exists in public/images/. Resolved at build time. */
function findRender(label?: string): string | null {
  const base = label ? renderFiles[label] : undefined;
  if (!base) return null;
  for (const ext of EXTS) {
    if (fs.existsSync(path.join(IMAGES_DIR, base + ext))) return `/images/${base}${ext}`;
  }
  return null;
}

/**
 * Rendering slot. Shows the uploaded image named in `content/renders.ts` when present,
 * otherwise a dark panel labelled with what goes there.
 */
export function Placeholder({
  label,
  className = "",
  sizes = "(min-width: 768px) 60vw, 100vw",
}: {
  label?: string;
  className?: string;
  sizes?: string;
}) {
  const alt = label ? label.replace(/^Render · /, "") : "";
  const src = findRender(label);

  if (src) {
    return (
      <div className={`${className.includes("absolute") ? "" : "relative"} overflow-hidden bg-panel ${className}`}>
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt ? `Rendering to come: ${alt}` : "Rendering to come"}
      className={`placeholder-panel flex items-end p-5 md:p-6 ${className}`}
    >
      {label ? (
        <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">{label}</span>
      ) : null}
    </div>
  );
}
