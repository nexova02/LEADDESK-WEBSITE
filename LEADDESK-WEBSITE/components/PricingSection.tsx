import { Check } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const plans = [
  {
    name: "Starter",
    price: "$99",
    detail: "per month",
    description: "For founders and small teams launching focused lead generation.",
    features: ["1,000 leads per month", "CRM pipeline board", "Email outreach sequences", "Basic analytics", "CSV import and export"],
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    price: "$299",
    detail: "per month",
    description: "For sales teams that need automation, reporting, and collaboration.",
    features: ["10,000 leads per month", "Advanced lead scoring", "Team assignments", "Calendar booking sync", "Priority support"],
    cta: "Get Started Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "annual plans",
    description: "For revenue organizations with compliance and workflow needs.",
    features: ["Custom lead volume", "Dedicated onboarding", "API access", "Role-based permissions", "Security review support"],
    cta: "Book Demo"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-ink-950 py-24 text-ink-50 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Simple Pricing for Every Stage"
            description="Choose the sales automation platform tier that matches your pipeline. Each plan includes the essentials for lead generation, CRM software, and automated email outreach."
            dark
          />
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.08}>
              <article
                className={`relative flex h-full flex-col rounded-2xl border bg-ink-900 p-7 shadow-medium transition duration-300 hover:-translate-y-2 hover:shadow-strong ${
                  plan.popular ? "border-ink-50 lg:scale-[1.03]" : "border-ink-800"
                }`}
              >
                {plan.popular ? (
                  <p className="absolute right-5 top-5 rounded-full border border-ink-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                    Most Popular
                  </p>
                ) : null}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 text-sm leading-6 text-ink-300">{plan.description}</p>
                <div className="mt-8 flex items-end gap-2">
                  <p className="text-5xl font-bold">{plan.price}</p>
                  <p className="pb-2 text-sm font-semibold text-ink-300">{plan.detail}</p>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-semibold text-ink-200">
                      <Check className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="#contact" variant="dark-primary">
                    {plan.cta}
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
