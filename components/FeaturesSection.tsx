import {
  BarChart3,
  DatabaseZap,
  MailCheck,
  PlugZap,
  ShieldCheck,
  Users
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const features = [
  {
    title: "Intelligent Lead Generation",
    points: ["Find B2B prospects by market, role, region, and buying signal.", "Use lead scoring and qualification to prioritize accounts.", "Build targeted lists without switching between research tabs."],
    Icon: DatabaseZap
  },
  {
    title: "Powerful CRM System",
    points: ["Track owners, stages, notes, tasks, and every contact touchpoint.", "Filter pipeline health by source, status, score, or next action.", "Keep small business lead generation organized from day one."],
    Icon: ShieldCheck
  },
  {
    title: "Email Outreach & Automation",
    points: ["Launch personalized cold outreach sequences from one workspace.", "Automate reminders, follow-ups, and reply handling.", "Improve deliverability with focused sending controls."],
    Icon: MailCheck
  },
  {
    title: "Seamless Integrations",
    points: ["Connect Gmail, calendars, forms, enrichment tools, and CRM exports.", "Move data in and out through CSV and clean API-ready structures.", "Support CRM with email automation instead of manual handoffs."],
    Icon: PlugZap
  },
  {
    title: "Advanced Analytics",
    points: ["Measure opens, replies, meetings, conversion rates, and team activity.", "Spot the campaigns and lead sources that create real pipeline.", "Use reporting to improve every outreach cycle."],
    Icon: BarChart3
  },
  {
    title: "Team Collaboration",
    points: ["Assign leads, share context, and protect reps from duplicate outreach.", "Review messaging, notes, and outcomes across the whole sales team.", "Give managers a clean operating system for pipeline coaching."],
    Icon: Users
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-ink-50 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need"
            description="LeadDesk combines lead generation, CRM software, email outreach, and sales pipeline management software in a single grayscale workspace that stays fast, readable, and easy for teams to adopt."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, points, Icon }, index) => (
            <Reveal 
              key={title} 
              delay={index * 0.06}
              className={index >= 3 ? "hidden md:block" : ""}
            >
              <article className="h-full rounded-2xl border border-ink-300 bg-ink-50 p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-ink-800 hover:shadow-strong">
                <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-ink-1000 text-ink-50">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3 className="text-2xl font-bold text-ink-1000">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-ink-700">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-1000" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
