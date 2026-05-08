import { Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Reveal } from "@/components/Motion";

const testimonials = [
  {
    quote:
      "LeadDesk gave our reps one clear view of research, CRM notes, and outreach. We replaced three tools and booked more qualified calls in the first month.",
    author: "Maya Chen",
    title: "VP Sales, Northline Systems"
  },
  {
    quote:
      "The lead scoring and qualification workflow helped our small team focus on accounts that were actually ready to talk. The time savings were immediate.",
    author: "Aaron Patel",
    title: "Founder, SignalStack"
  },
  {
    quote:
      "We needed a cold outreach software platform that managers and reps would both use. LeadDesk is clean, fast, and built around the reality of daily sales work.",
    author: "Olivia Grant",
    title: "Revenue Operations Lead, Basefield"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="bg-ink-100 py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Customer proof"
            title="What Our Customers Say"
            description="Sales teams use LeadDesk to simplify their B2B lead generation workflow, reduce manual admin, and turn outreach into booked conversations."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-ink-300 bg-ink-50 p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-strong">
                <div className="mb-6 flex gap-1 text-ink-1000" aria-label="5 out of 5 rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-lg font-semibold leading-8 text-ink-1000">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-ink-1000 text-sm font-bold text-ink-50">
                    {testimonial.author
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold text-ink-1000">{testimonial.author}</p>
                    <p className="text-sm font-semibold text-ink-700">{testimonial.title}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
