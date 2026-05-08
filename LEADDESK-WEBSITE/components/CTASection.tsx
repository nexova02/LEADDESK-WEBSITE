"use client";

import { useState } from "react";
import { LockKeyhole, ShieldCheck, FileCheck2, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { Reveal } from "@/components/Motion";
import BorderGlowButton from "@/components/BorderGlowButton";

const trust = [
  { label: "SSL secured", Icon: LockKeyhole },
  { label: "GDPR ready", Icon: ShieldCheck },
  { label: "SOC 2 aligned", Icon: FileCheck2 }
];

export default function CTASection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [requestType, setRequestType] = useState("Book Demo");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get("email"),
      message: formData.get("message") || "",
      type: requestType,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 border-t border-white/10">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-400">Get in touch</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
              Ready to Transform Your Sales?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Drop your email below to book a demo or make a general enquiry. Our team will get back to you immediately.
            </p>

            <div className="mx-auto mt-10 max-w-xl bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl">
              {status === "success" ? (
                <div className="py-10 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                  <div className="h-16 w-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Request Received!</h3>
                  <p className="mt-2 text-zinc-400">We'll be in touch with you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-sm font-bold text-zinc-300 hover:text-white underline">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="flex gap-2 p-1 bg-black/40 rounded-full border border-white/10">
                    {["Book Demo", "Start Free Trial", "General Enquiry"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setRequestType(type)}
                        className={`flex-1 rounded-full py-2 text-xs font-bold transition ${
                          requestType === type 
                            ? "bg-white text-black shadow-md" 
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="mt-2">
                    <label className="sr-only" htmlFor="email">Work email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your work email"
                      className="w-full min-h-12 rounded-xl border border-white/10 bg-black/50 px-5 text-sm font-semibold text-white placeholder:text-zinc-500 transition focus:border-white focus:outline-none"
                    />
                  </div>

                  {requestType === "General Enquiry" && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="sr-only" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help?"
                        rows={3}
                        className="w-full rounded-xl border border-white/10 bg-black/50 p-5 text-sm font-semibold text-white placeholder:text-zinc-500 transition focus:border-white focus:outline-none resize-none"
                      />
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-sm font-bold bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                      <AlertCircle size={16} /> Something went wrong. Please try again.
                    </div>
                  )}

                  <BorderGlowButton
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 w-full min-h-12"
                  >
                    {status === "loading" ? "Submitting..." : `Submit ${requestType} Request`}
                  </BorderGlowButton>
                </form>
              )}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-zinc-400 bg-black/20 w-max mx-auto px-5 py-2 rounded-full border border-white/5 backdrop-blur-md">
              <Mail size={14} className="text-zinc-300" />
              <span>Or contact us directly at:</span>
              <a href="mailto:nexova02@gmail.com" className="font-bold text-white hover:underline">nexova02@gmail.com</a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {trust.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-zinc-300 backdrop-blur-md"
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
