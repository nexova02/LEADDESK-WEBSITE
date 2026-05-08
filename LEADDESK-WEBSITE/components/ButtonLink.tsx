import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "light-primary" | "light-secondary" | "dark-primary" | "dark-secondary";
  icon?: boolean;
};

const variants = {
  "light-primary":
    "glow-button border-transparent",
  "light-secondary":
    "bg-transparent text-white border-white hover:bg-white/10",
  "dark-primary":
    "glow-button border-transparent",
  "dark-secondary":
    "bg-transparent text-white border-white hover:bg-white/10"
};

export default function ButtonLink({
  href,
  children,
  variant = "light-primary",
  icon = true
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] ${variants[variant]}`}
    >
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={16} strokeWidth={2.5} /> : null}
    </Link>
  );
}
