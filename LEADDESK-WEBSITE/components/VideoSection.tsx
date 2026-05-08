"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { Reveal } from "@/components/Motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="launch-video" className="py-20 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="section-shell flex flex-col items-center">
        <Reveal className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-400 mb-3">Product Demo</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">See LeadDesk in Action</h2>
            <p className="mt-4 text-zinc-400 text-lg">Watch our launch video to see exactly how we automate your entire sales pipeline.</p>
          </div>
          
          <div className="relative group w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-[0_0_50px_rgba(255,255,255,0.05)] cursor-pointer">
            {!isPlaying ? (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 group-hover:bg-zinc-900/30"
                onClick={() => setIsPlaying(true)}
              >
                {/* Minimalist Grid Background for Thumbnail */}
                <div 
                  className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105" 
                  style={{ 
                    backgroundImage: "url('/wope-hero-bottom.png')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center" 
                  }} 
                />
                
                {/* Glowing Play Button */}
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                    <Play size={40} className="text-white ml-2" fill="currentColor" />
                  </div>
                  <span className="text-sm font-bold tracking-widest text-white uppercase drop-shadow-lg">Play Video</span>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <video 
                  className="w-full h-full object-cover" 
                  src="/leaddesk-demo.mp4" 
                  controls 
                  autoPlay 
                  playsInline 
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    // Fallback poster if the video file isn't uploaded yet
                    target.poster = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='black'/%3E%3Ctext x='50%25' y='50%25' font-family='sans-serif' font-size='20' fill='%23555' text-anchor='middle' dominant-baseline='middle'%3EVideo file not found. Ensure it is named leaddesk-demo.mp4 in public folder%3C/text%3E%3C/svg%3E";
                  }}
                />
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/80 p-3 rounded-full border border-white/20 text-white backdrop-blur-md transition-colors"
                  aria-label="Close video"
                >
                  <X size={24} />
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
