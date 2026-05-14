"use client";

import { useRef, useState, useEffect } from "react";

export default function BorderGlowButton({ children, className = "", onClick, type = "button", disabled = false }: any) {
  const ref = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: "-100%", y: "-100%" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <button
      ref={ref}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`group relative overflow-hidden rounded-xl bg-black p-[1px] transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255,255,255,0.8), transparent 40%)`,
        }}
      />
      <div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black/90 px-6 py-3 text-sm font-bold text-white transition-colors group-hover:bg-black/60 backdrop-blur-md">
        {children}
      </div>
    </button>
  );
}
