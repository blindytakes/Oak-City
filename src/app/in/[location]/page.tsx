import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import LocationLanding from "@/components/LocationLanding";
import {
  getLocation,
  getAllLocationSlugs,
} from "@/data/locations";

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((location) => ({ location }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    return { title: "Not found — Oak City Media" };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) {
    notFound();
  }

  // JSON-LD LocalBusiness schema with areaServed — the single biggest local SEO
  // signal after Google Business Profile
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Oak City Media",
    description: location.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rolesville",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: location.shortName,
      containedInPlace: {
        "@type": "State",
        name: "North Carolina",
      },
    },
    url: `https://oakcitymedia.com/in/${location.slug}`,
    priceRange: "$$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Nav />
      <LocationLanding location={location} />
    </>
  );
}
