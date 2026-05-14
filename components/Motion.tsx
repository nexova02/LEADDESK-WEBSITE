"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type RevealProps = ComponentPropsWithoutRef<"div"> &
  MotionProps & {
    children: ReactNode;
    delay?: number;
  };

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const MotionDiv = motion.div;
