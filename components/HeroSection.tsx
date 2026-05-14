"use client";

import Image from "next/image";
import { ArrowDown, PlayCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ButtonLink from "@/components/ButtonLink";
import { Reveal } from "@/components/Motion";

const metrics = [
  { value: "42%", label: "more qualified replies" },
  { value: "3.4x", label: "faster lead research" },
  { value: "10k+", label: "teams supported" }
];

export default function HeroSection() {
  return (
    <section className="grain overflow-hidden pt-28 md:pt-32 relative z-0">
      <div className="section-shell flex flex-col items-center text-center pt-10 pb-16 relative z-10">
        <Reveal className="flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold leading-[1.1] text-ink-1000 md:text-7xl lg:text-[5rem] tracking-tight mt-4">
            Turn Prospects Into Customers, Faster Than Ever
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-ink-800">
            LeadDesk puts your entire outreach workflow in one place, from first contact to booked call.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <ButtonLink href="#contact" variant="light-primary">
              Start Free Trial
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="light-secondary" icon={false}>
              <PlayCircle aria-hidden="true" size={17} />
              See How It Works
            </ButtonLink>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center">
                <p className="text-3xl sm:text-4xl font-bold text-ink-1000">{metric.value}</p>
                <p className="mt-1 text-sm font-semibold text-ink-700">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative w-full max-w-[1400px] mx-auto mt-8 flex flex-col gap-8 z-20">
          <div className="relative group w-full">
            {/* Glowing blur effect behind the image */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-b from-white/20 to-transparent opacity-70 blur-3xl transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
            
            {/* Glassmorphic container */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl md:p-4">
              <Image
                src="/Screenshot 2026-05-08 042409.png"
                alt="LeadDesk lead generation CRM dashboard with sales automation analytics"
                width={2400}
                height={1600}
                priority
                className="h-auto w-full rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Animated Growth Graph */}
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-ink-300 bg-ink-50 p-8 shadow-strong">
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-ink-1000 flex items-center gap-2">
                  <TrendingUp size={24} /> Lead Generation Growth
                </h3>
                <p className="text-base text-ink-700 mt-2">Weekly active prospects generated</p>
              </div>
              <div className="bg-ink-100 px-6 py-3 rounded-full text-base font-bold border border-ink-300 text-ink-1000 shadow-inner">
                +420%
              </div>
            </div>
            
            <div className="h-40 relative w-full">
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none" className="overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,1)" />
                  </linearGradient>
                  <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                
                <motion.path 
                  d="M 0 130 C 100 120, 150 90, 250 80 C 350 70, 400 30, 500 10 L 500 150 L 0 150 Z"
                  fill="url(#fillGrad)"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />

                <motion.path 
                  d="M 0 130 C 100 120, 150 90, 250 80 C 350 70, 400 30, 500 10"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {[
                  { cx: 0, cy: 130, delay: 0 },
                  { cx: 250, cy: 80, delay: 1 },
                  { cx: 500, cy: 10, delay: 2 }
                ].map((pt, i) => (
                  <motion.circle 
                    key={i}
                    cx={pt.cx} 
                    cy={pt.cy} 
                    r="8" 
                    fill="#fff"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: pt.delay }}
                    className="drop-shadow-lg"
                  />
                ))}
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="section-shell flex justify-center pb-10">
        <a
          href="#problems"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink-700 hover:text-ink-1000"
        >
          Scroll
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
