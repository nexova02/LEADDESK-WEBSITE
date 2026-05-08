import type { NextSeoProps } from "next-seo";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://leaddesk.example.com";

export const seoConfig = {
  title: "LeadDesk | Lead Generation and Sales Automation Platform",
  description:
    "LeadDesk is a lead generation and sales automation platform for CRM, cold outreach, lead scraping, email automation, and B2B pipeline growth.",
  canonical: siteUrl,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "LeadDesk | Lead Generation and Sales Automation Platform",
    description:
      "Generate B2B leads, automate email outreach, manage CRM activity, and book more sales calls from one streamlined platform.",
    siteName: "LeadDesk",
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "LeadDesk grayscale sales automation dashboard preview"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  }
} satisfies NextSeoProps;
