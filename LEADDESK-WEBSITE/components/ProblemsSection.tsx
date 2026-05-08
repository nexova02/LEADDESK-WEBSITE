import { AlertTriangle, BrainCircuit, Briefcase, Layers, UsersRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const problems = [
  {
    title: "Lead Generation Struggle",
    description:
      "Prospecting across directories, maps, referrals, and old spreadsheets slows the pipeline before a rep even starts selling.",
    Icon: BrainCircuit
  },
  {
    title: "Lead & CRM Chaos",
    description:
      "Contact details, notes, owners, and stages drift apart when a lead management system is not the center of daily work.",
    Icon: Layers
  },
  {
    title: "Manual Outreach Burden",
    description:
      "Personalized email outreach takes hours when every message, follow-up, and status update has to be written by hand.",
    Icon: Briefcase
  }
];

export default function ProblemsSection() {
  return (
    <section id="problems" className="dark-grain bg-ink-950 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Common blockers"
            title="The Challenges Every Business Faces"
            description="Most revenue teams know how to sell, but they are slowed down by fragmented prospect research, disconnected CRM records, and manual follow-up. LeadDesk brings structure to the messy middle between a potential buyer and a booked meeting."
            dark
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map(({ title, description, Icon }, index) => (
            <Reveal key={title} delay={index * 0.07}>
              <article className="h-full rounded-2xl border border-ink-800 bg-ink-850 p-6 text-ink-50 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-ink-500 hover:shadow-strong">
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl border border-ink-700 bg-ink-950">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink-300">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
