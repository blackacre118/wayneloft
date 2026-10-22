import Image from "next/image";
import logoWhite from "../../public/brand/wayne-logo-white.svg";

export function Logo({ className = "h-5 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return <Image src={logoWhite} alt="WAYNE" className={className} priority={priority} unoptimized />;
}
