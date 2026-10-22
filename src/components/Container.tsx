export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1328px] px-6 md:px-14 ${className}`}>{children}</div>;
}
