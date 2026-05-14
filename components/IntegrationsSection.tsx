import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const integrations = [
  "Gmail",
  "Google Maps",
  "Calendly",
  "HubSpot",
  "Salesforce",
  "Slack",
  "Zapier",
  "Sheets",
  "OpenAI",
  "Gemini"
];

export default function IntegrationsSection() {
  return (
    <section className="bg-ink-50 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Integrations"
            title="Works with 50+ Tools"
            description="LeadDesk fits into the stack you already use. Connect everyday sales tools, enrich account context, and keep lead data moving without burying the team in copy-and-paste work."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
          {integrations.map((integration, index) => (
            <Reveal 
              key={integration} 
              delay={index * 0.04}
              className={index >= 6 ? "hidden md:block" : ""}
            >
              <div className="grid h-24 place-items-center rounded-2xl border border-ink-300 bg-ink-50 px-4 text-center text-lg font-bold text-ink-1000 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink-800 hover:shadow-medium">
                {integration}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
