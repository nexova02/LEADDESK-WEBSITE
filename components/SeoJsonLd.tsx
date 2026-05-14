import { faqs } from "@/lib/faqs";
import { siteUrl } from "@/lib/seo";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LeadDesk",
    url: siteUrl,
    logo: `${siteUrl}/mark.svg`,
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
      "https://x.com/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "LeadDesk",
    description:
      "LeadDesk is a B2B lead generation, CRM software, lead scraping, and sales automation platform for teams that want more qualified sales conversations.",
    brand: {
      "@type": "Brand",
      name: "LeadDesk"
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "99",
      highPrice: "299",
      priceCurrency: "USD",
      offerCount: "3"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "184"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      }
    ]
  }
];

export default function SeoJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
