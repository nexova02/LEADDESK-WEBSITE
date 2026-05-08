"use client";

import Dock from "./Dock";
import { Home, Compass, Settings, PlayCircle, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingDock() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = [
    { icon: <Home size={22} />, label: "Home", href: "/" },
    { icon: <Compass size={22} />, label: "Features", href: "/#features" },
    { icon: <PlayCircle size={22} />, label: "Launch Video", href: "/#launch-video" },
    { icon: <Mail size={22} />, label: "Contact", href: "/#contact" }
  ];

  return <Dock items={items} />;
}
