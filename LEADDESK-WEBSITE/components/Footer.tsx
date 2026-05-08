import Link from "next/link";
import { Linkedin, Mail, Youtube } from "lucide-react";

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export default function Footer() {
  return (
    <footer className="bg-ink-1000 py-14 text-ink-50">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-wide text-white">NEXOVA</span>
            <span className="text-xl font-medium tracking-widest text-white/40">LEADDESK</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-ink-300">
            LeadDesk is a grayscale-first sales automation platform for B2B lead generation,
            CRM organization, cold outreach, and pipeline clarity.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.linkedin.com/" aria-label="LeadDesk on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-ink-800 transition hover:bg-ink-50 hover:text-ink-1000">
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/" aria-label="LeadDesk on YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-ink-800 transition hover:bg-ink-50 hover:text-ink-1000">
              <Youtube size={18} aria-hidden="true" />
            </a>
            <a href="mailto:hello@leaddesk.example.com" aria-label="Email LeadDesk" className="grid h-10 w-10 place-items-center rounded-full border border-ink-800 transition hover:bg-ink-50 hover:text-ink-1000">
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-ink-400">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm font-semibold text-ink-300 hover:text-ink-50 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-ink-400">Stay Updated</h2>
          <form className="mt-5" aria-label="Newsletter signup">
            <label htmlFor="newsletter" className="text-sm font-bold text-ink-50">
              Newsletter
            </label>
            <div className="mt-3 flex gap-2">
              <input
                id="newsletter"
                type="email"
                placeholder="Email"
                className="min-h-11 min-w-0 flex-1 rounded-full border border-ink-800 bg-ink-950 px-4 text-sm font-semibold text-ink-50 placeholder:text-ink-500 focus:border-ink-50"
              />
              <button type="submit" className="min-h-11 rounded-full bg-ink-50 px-4 text-sm font-bold text-ink-1000 transition hover:bg-ink-150">
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="section-shell mt-12 border-t border-ink-800 pt-6 text-sm font-semibold text-ink-400">
        Copyright 2026 LeadDesk. All rights reserved.
      </div>
    </footer>
  );
}
