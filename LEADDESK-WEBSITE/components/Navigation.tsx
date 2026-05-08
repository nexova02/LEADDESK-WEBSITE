"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MotionDiv } from "@/components/Motion";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-4 right-4 top-6 z-50 mx-auto max-w-5xl rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-md shadow-2xl lg:left-0 lg:right-0"
    >
      <nav className="flex min-h-16 items-center justify-between" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-wide text-white">NEXOVA</span>
          <span className="text-xl font-medium tracking-widest text-white/40">LEADDESK</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-800 transition hover:text-ink-1000 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="glow-button inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-bold transition hover:-translate-y-0.5"
          >
            Start Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink-300 text-ink-1000 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink-200 bg-ink-50 lg:hidden">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-bold text-ink-1000 transition hover:bg-ink-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-ink-1000 px-5 text-sm font-bold text-ink-50"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      ) : null}
    </MotionDiv>
  );
}
