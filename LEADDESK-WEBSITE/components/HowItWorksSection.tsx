import { UploadCloud, WandSparkles, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const steps = [
  {
    number: "01",
    title: "Add Your Leads",
    description:
      "Import a CSV, enrich a list, or build prospects directly inside LeadDesk. The platform organizes company details, contact data, source notes, and lead scoring so reps can understand why each account matters.",
    Icon: UploadCloud
  },
  {
    number: "02",
    title: "AI Writes Emails",
    description:
      "LeadDesk turns prospect context into concise outreach drafts that feel specific without wasting your afternoon. Teams can review, edit, and approve sequences before anything reaches a buyer.",
    Icon: WandSparkles
  },
  {
    number: "03",
    title: "Send, Track, Book",
    description:
      "Launch outreach, monitor replies, sync call bookings, and move qualified opportunities through your sales pipeline management software without losing the thread between tools.",
    Icon: Send
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-ink-1000 py-24 text-ink-50 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="Three Steps to Success"
            description="The workflow is designed for speed: add the right leads, create relevant outreach, then track every reply and meeting in the same place."
            dark
          />
        </Reveal>
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="space-y-6">
            {steps.map(({ number, title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <article className="grid gap-6 rounded-2xl border border-ink-800 bg-ink-950 p-6 shadow-medium md:grid-cols-[72px_1fr] md:p-8">
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-ink-500 bg-ink-50 text-sm font-bold text-ink-1000">
                    {number}
                  </div>
                  <div>
                    <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-ink-800 text-ink-50">
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="mt-4 text-base leading-8 text-ink-300">{description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
