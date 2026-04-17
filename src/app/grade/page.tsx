import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SiteGrader from "@/components/SiteGrader";

export const metadata: Metadata = {
  title: "Free Website Grader — Oak City Media",
  description:
    "Paste your URL and see your site's real Google PageSpeed score in 20 seconds. Free. No email required. Built for local businesses in Raleigh and the Triangle.",
  keywords: [
    "website grader",
    "pagespeed insights",
    "website speed test",
    "free website audit",
    "raleigh web design",
  ],
  openGraph: {
    title: "How fast is your website, really? — Oak City Media",
    description:
      "Run Google's actual PageSpeed benchmark on your site. See what's costing you customers. Free, no email, 20 seconds.",
    type: "website",
  },
};

interface PageProps {
  searchParams: Promise<{ url?: string | string[] }>;
}

export default async function GradePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const rawUrl = params.url;
  const initialUrl =
    typeof rawUrl === "string" && rawUrl.trim().length > 0 ? rawUrl : undefined;

  return (
    <>
      <Nav />
      <SiteGrader variant="full" initialUrl={initialUrl} />
    </>
  );
}
