"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { MotionDiv } from "@/components/Motion";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed left-4 right-4 top-6 z-50 mx-auto max-w-5xl rounded-full border border-white/10 bg-black/40 px-6 backdrop-blur-md shadow-2xl lg:left-0 lg:right-0"
      >
        <nav className="flex min-h-16 items-center justify-between" aria-label="Primary">
          <Link href="/" className="flex items-center gap-2 shrink-0 whitespace-nowrap">
            <span className="text-xl font-extrabold tracking-wide text-white">NEXOVA</span>
            <span className="text-xl font-medium tracking-widest text-white/60">LEADDESK</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-zinc-400 transition hover:text-white hover:underline"
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
            className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </nav>
      </MotionDiv>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[100] w-full max-w-sm border-l border-white/10 bg-black/95 p-6 backdrop-blur-xl lg:hidden shadow-2xl flex flex-col"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            
            <div className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-4 text-xl font-bold text-white transition hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-5 text-lg font-bold !text-black"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
