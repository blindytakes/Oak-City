import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import IndustryLanding from "@/components/IndustryLanding";
import {
  getIndustry,
  getAllIndustrySlugs,
} from "@/data/industries";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((industry) => ({ industry }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return { title: "Not found — Oak City Media" };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: "website",
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { industry: slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  // JSON-LD Service schema for local SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Website Design for ${industry.displayName}`,
    description: industry.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "Oak City Media",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rolesville",
        addressRegion: "NC",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "Place",
        name: "Raleigh-Durham Triangle, NC",
      },
    },
    serviceType: `Web Design for ${industry.displayName}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Nav />
      <IndustryLanding industry={industry} />
    </>
  );
}
