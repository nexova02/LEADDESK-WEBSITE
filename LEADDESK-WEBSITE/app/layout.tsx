import type { Metadata, Viewport } from "next";
import { seoConfig, siteUrl } from "@/lib/seo";
import FloatingDock from "@/components/FloatingDock";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoConfig.title ?? "LeadDesk",
    template: "%s | LeadDesk"
  },
  description: seoConfig.description,
  keywords: [
    "lead generation",
    "sales automation platform",
    "CRM software",
    "lead scraping tool",
    "email outreach platform",
    "B2B lead generation",
    "cold outreach software",
    "lead management system",
    "Google Maps lead scraper",
    "CRM with email automation"
  ],
  authors: [{ name: "LeadDesk" }],
  creator: "LeadDesk",
  publisher: "LeadDesk",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: seoConfig.openGraph?.title,
    description: seoConfig.openGraph?.description,
    siteName: seoConfig.openGraph?.siteName,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "LeadDesk grayscale sales automation dashboard preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "technology"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wope-exact-background">
          <div className="wope-glow-orb" />
          
          <div className="wope-grid-top" />
          <div className="wope-grid-top-mask">
            <div className="wope-top-glow" />
          </div>

          <div className="wope-grid-bottom" />
          <div className="wope-grid-bottom-mask">
            <div className="wope-bottom-ray" />
            <div className="wope-bottom-line" />
          </div>
        </div>
        {children}
        <FloatingDock />
      </body>
    </html>
  );
}
