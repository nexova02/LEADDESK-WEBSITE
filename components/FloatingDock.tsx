"use client";

import Dock from "./Dock";
import { Home, Compass, PlayCircle, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const AUTH_ROUTES = ["/register"];

export default function FloatingDock() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide dock on auth pages
  if (!mounted || AUTH_ROUTES.includes(pathname)) return null;

  const items = [
    { icon: <Home size={22} />, label: "Home", href: "/" },
    { icon: <Compass size={22} />, label: "Features", href: "/#features" },
    { icon: <PlayCircle size={22} />, label: "Launch Video", href: "/#launch-video" },
    { icon: <Mail size={22} />, label: "Contact", href: "/#contact" }
  ];

  return <Dock items={items} />;
}

