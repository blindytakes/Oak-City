import { NextRequest, NextResponse } from "next/server";

// Proxy to Google PageSpeed Insights so the API key stays server-side.
// Works without a key (lower rate limit). In production set PAGESPEED_API_KEY in .env.local.

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawUrl: unknown = body?.url;
    const rawStrategy: unknown = body?.strategy;

    if (!rawUrl || typeof rawUrl !== "string" || !rawUrl.trim()) {
      return NextResponse.json(
        { error: "Paste a URL to grade." },
        { status: 400 }
      );
    }

    let normalizedUrl = rawUrl.trim();
    if (
      !normalizedUrl.startsWith("http://") &&
      !normalizedUrl.startsWith("https://")
    ) {
      normalizedUrl = "https://" + normalizedUrl;
    }

    // Basic sanity check — reject obvious garbage before we hit Google
    try {
      new URL(normalizedUrl);
    } catch {
      return NextResponse.json(
        { error: "That doesn't look like a valid URL." },
        { status: 400 }
      );
    }

    const strategy =
      rawStrategy === "desktop" || rawStrategy === "mobile"
        ? rawStrategy
        : "mobile";

    const apiKey = process.env.PAGESPEED_API_KEY;
    const keyParam = apiKey ? `&key=${apiKey}` : "";
    const categories =
      "category=performance&category=accessibility&category=best-practices&category=seo";

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      normalizedUrl
    )}&strategy=${strategy}&${categories}${keyParam}`;

    const res = await fetch(apiUrl);

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      const message =
        errBody?.error?.message?.split(".")[0] ||
        "We couldn't analyze that site. Double-check the URL and try again.";
      return NextResponse.json({ error: message }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Something went wrong on our end. Try again?" },
      { status: 500 }
    );
  }
}
