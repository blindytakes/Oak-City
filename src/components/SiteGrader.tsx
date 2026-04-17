"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Strategy = "mobile" | "desktop";
type Variant = "full" | "teaser";

interface SiteGraderProps {
  variant?: Variant;
  initialUrl?: string;
}

interface LighthouseAudit {
  displayValue?: string;
  score: number | null;
  title: string;
  details?: {
    type?: string;
    overallSavingsMs?: number;
  };
}

interface PageSpeedResponse {
  lighthouseResult: {
    categories: {
      performance: { score: number };
      accessibility: { score: number };
      "best-practices": { score: number };
      seo: { score: number };
    };
    audits: Record<string, LighthouseAudit>;
  };
}

interface ParsedResults {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  cls: string;
  tbt: string;
  fcp: string;
  si: string;
  opportunities: Array<{ title: string; savings: string }>;
}

interface StrategyResults {
  mobile: PageSpeedResponse;
  desktop: PageSpeedResponse;
  url: string;
}

const LOADING_MESSAGES = [
  "Connecting to the server…",
  "Measuring paint timing…",
  "Counting JavaScript bytes…",
  "Checking Core Web Vitals…",
  "Comparing against our benchmark…",
  "Finalizing your report…",
];

const OCM_SCORES = {
  mobile: {
    performance: 98,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
    lcp: "0.8 s",
    cls: "0",
    tbt: "40 ms",
    fcp: "0.6 s",
    si: "1.2 s",
  },
  desktop: {
    performance: 100,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
    lcp: "0.4 s",
    cls: "0",
    tbt: "10 ms",
    fcp: "0.3 s",
    si: "0.5 s",
  },
};

function parseResults(data: PageSpeedResponse): ParsedResults {
  const lr = data.lighthouseResult;
  const cats = lr.categories;
  const audits = lr.audits;
  return {
    performance: Math.round(cats.performance.score * 100),
    accessibility: Math.round(cats.accessibility.score * 100),
    bestPractices: Math.round(cats["best-practices"].score * 100),
    seo: Math.round(cats.seo.score * 100),
    lcp: audits["largest-contentful-paint"]?.displayValue || "—",
    cls: audits["cumulative-layout-shift"]?.displayValue || "—",
    tbt: audits["total-blocking-time"]?.displayValue || "—",
    fcp: audits["first-contentful-paint"]?.displayValue || "—",
    si: audits["speed-index"]?.displayValue || "—",
    opportunities: Object.entries(audits)
      .filter(
        ([, a]) =>
          a.details?.type === "opportunity" &&
          a.score !== null &&
          a.score < 0.9 &&
          (a.details?.overallSavingsMs || 0) > 100
      )
      .sort(
        ([, a], [, b]) =>
          (b.details?.overallSavingsMs || 0) - (a.details?.overallSavingsMs || 0)
      )
      .slice(0, 5)
      .map(([, a]) => ({
        title: a.title,
        savings:
          a.displayValue ||
          (a.details?.overallSavingsMs
            ? `${(a.details.overallSavingsMs / 1000).toFixed(1)} s`
            : ""),
      })),
  };
}

function scoreColor(score: number) {
  if (score >= 90)
    return { text: "#0F5132", ring: "#1F7A4D", bg: "rgba(31,122,77,0.08)" };
  if (score >= 50)
    return { text: "#8B5A0F", ring: "#D08A1A", bg: "rgba(208,138,26,0.10)" };
  return { text: "#8B1538", ring: "#C53055", bg: "rgba(197,48,85,0.08)" };
}

function ScoreRing({
  score,
  size = 170,
  strokeWidth = 8,
  color,
  bg,
  lightText = false,
}: {
  score: number;
  size?: number;
  strokeWidth?: number;
  color: string;
  bg: string;
  lightText?: boolean;
}) {
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bg}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: size * 0.32,
            fontWeight: 700,
            color: lightText ? "white" : color,
            letterSpacing: "-0.02em",
          }}
        >
          {score}
        </span>
      </div>
    </div>
  );
}

export default function SiteGrader({
  variant = "full",
  initialUrl,
}: SiteGraderProps) {
  const router = useRouter();
  const [url, setUrl] = useState(initialUrl || "");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<StrategyResults | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [strategy, setStrategy] = useState<Strategy>("mobile");
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);
  const hasAutoRun = useRef(false);

  // Rotate loading messages
  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setLoadingMsgIdx((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [loading]);

  // Scroll to results when they land
  useEffect(() => {
    if (results && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [results]);

  const runGrade = async (urlToGrade: string) => {
    let normalizedUrl = urlToGrade.trim();
    if (
      !normalizedUrl.startsWith("http://") &&
      !normalizedUrl.startsWith("https://")
    ) {
      normalizedUrl = "https://" + normalizedUrl;
    }

    setLoading(true);
    setError(null);
    setResults(null);
    setLoadingMsgIdx(0);

    try {
      const [mobileRes, desktopRes] = await Promise.all([
        fetch("/api/grade", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: normalizedUrl, strategy: "mobile" }),
        }),
        fetch("/api/grade", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: normalizedUrl, strategy: "desktop" }),
        }),
      ]);

      if (!mobileRes.ok || !desktopRes.ok) {
        const errRes = !mobileRes.ok ? mobileRes : desktopRes;
        const errData = await errRes.json().catch(() => ({}));
        throw new Error(errData.error || "Couldn't analyze that site.");
      }

      const mobileData: PageSpeedResponse = await mobileRes.json();
      const desktopData: PageSpeedResponse = await desktopRes.json();
      setResults({
        mobile: mobileData,
        desktop: desktopData,
        url: normalizedUrl,
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again?"
      );
    } finally {
      setLoading(false);
    }
  };

  // Auto-run when initialUrl is supplied on the /grade page
  useEffect(() => {
    if (initialUrl && variant === "full" && !hasAutoRun.current) {
      hasAutoRun.current = true;
      runGrade(initialUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    if (variant === "teaser") {
      router.push(`/grade?url=${encodeURIComponent(url.trim())}`);
      return;
    }

    runGrade(url);
  };

  // ────────────────────────────── TEASER ──────────────────────────────
  if (variant === "teaser") {
    return (
      <section className="bg-bg-white border-t border-b border-border-light py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[820px] mx-auto text-center">
          <p
            className="flex items-center justify-center gap-3 mb-5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2.5px",
              color: "var(--color-accent)",
            }}
          >
            <span className="w-6 h-px bg-accent inline-block" />
            Free Tool
          </p>
          <h2
            className="mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-1.5px",
            }}
          >
            Is your current site{" "}
            <span style={{ color: "#D64545", fontStyle: "italic", fontWeight: 700 }}>
              losing you customers?
            </span>
            <br />
            Let&apos;s find out.
          </h2>
          <p
            className="text-text-secondary mb-8 max-w-[620px] mx-auto"
            style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
          >
            Paste your URL. We&apos;ll run Google&apos;s actual PageSpeed benchmark
            and show you — honestly — how your site compares to one we&apos;d ship you
            in 14 days.
          </p>

          <form onSubmit={handleSubmit} className="max-w-[620px] mx-auto">
            <div
              className="flex flex-col sm:flex-row gap-2 p-2 bg-bg-white rounded-2xl border border-border"
              style={{
                boxShadow:
                  "0 20px 50px -20px rgba(42, 140, 110, 0.18), 0 4px 12px -4px rgba(0,0,0,0.04)",
              }}
            >
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourwebsite.com"
                className="flex-1 px-4 py-3.5 text-base bg-transparent outline-none"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-text-primary)",
                }}
              />
              <button
                type="submit"
                disabled={!url.trim()}
                className="px-6 py-3.5 bg-accent text-white rounded-xl font-semibold transition-all hover:bg-accent-dark disabled:bg-border disabled:cursor-not-allowed disabled:text-text-muted whitespace-nowrap"
                style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem" }}
              >
                Grade my site →
              </button>
            </div>
            <p
              className="mt-3 text-text-muted"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              ≈ 20 sec · real data · no email required
            </p>
          </form>
        </div>
      </section>
    );
  }

  // ────────────────────────────── FULL ──────────────────────────────
  const currentResults = results && parseResults(results[strategy]);
  const ocm = results && OCM_SCORES[strategy];
  const displayUrl = results?.url?.replace(/https?:\/\//, "").replace(/\/$/, "");
  const yourColor = currentResults ? scoreColor(currentResults.performance) : null;

  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Soft atmospheric background */}
      <div
        className="absolute z-0 pointer-events-none rounded-full"
        style={{
          top: "-10%",
          right: "-10%",
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle at 30% 40%, rgba(42,140,110,0.06) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(42,140,110,0.04) 0%, transparent 50%)",
          filter: "blur(60px)",
          animation: "meshFloat 15s ease-in-out infinite",
        }}
      />

      <div className="relative z-1 max-w-[1200px] mx-auto">
        {/* ─── HERO ─── */}
        <div className="text-center max-w-[820px] mx-auto">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7"
            style={{
              background: "rgba(42, 140, 110, 0.08)",
              border: "1px solid rgba(42, 140, 110, 0.15)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--color-accent-dark)",
            }}
          >
            <span
              className="w-1.5 h-1.5 bg-accent rounded-full"
              style={{ animation: "pulse 2s infinite" }}
            />
            Free · 20 seconds · No BS
          </div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-2.5px",
            }}
          >
            Your website is{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 700,
                color: "#D64545",
              }}
            >
              losing you money.
            </span>
            <br />
            Let&apos;s prove it.
          </h1>
          <p
            className="text-text-secondary max-w-[620px] mx-auto mb-10"
            style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
          >
            <strong className="text-text-primary font-semibold">
              53% of visitors leave a site that takes more than 3 seconds to load.
            </strong>{" "}
            Paste your URL below. We&apos;ll run Google&apos;s actual benchmark and
            show you — brutally — how much business your site is leaving on the
            table.
          </p>
        </div>

        {/* ─── FORM ─── */}
        <form onSubmit={handleSubmit} className="max-w-[680px] mx-auto mb-4">
          <div
            className="flex flex-col sm:flex-row gap-2 p-2 bg-bg-white rounded-2xl border border-border"
            style={{
              boxShadow:
                "0 24px 60px -20px rgba(42, 140, 110, 0.15), 0 8px 20px -8px rgba(0,0,0,0.04)",
            }}
          >
            <div className="pl-3.5 pr-1 flex items-center text-text-muted">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="yourwebsite.com"
              disabled={loading}
              className="flex-1 px-1 py-3.5 text-lg bg-transparent outline-none"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-text-primary)",
              }}
            />
            <button
              type="submit"
              disabled={loading || !url.trim()}
              className="px-7 py-3.5 bg-accent-dark text-white rounded-xl font-semibold transition-all hover:bg-accent disabled:bg-border disabled:cursor-not-allowed disabled:text-text-muted whitespace-nowrap"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem" }}
            >
              {loading ? "Grading…" : "Grade me →"}
            </button>
          </div>
          <p
            className="text-center mt-3 text-text-muted"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            ≈ 20 sec · real data · no email required
          </p>
        </form>

        {/* Sample URLs — only when idle */}
        {!results && !loading && !error && (
          <div className="max-w-[680px] mx-auto mt-4 mb-20 text-center">
            <div
              className="mb-3 text-text-muted"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Don&apos;t have a site? Test one of these
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {["keiblerlawgroup.com", "wordpress.com", "stripe.com", "linear.app"].map(
                (u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUrl(u)}
                    className="px-3.5 py-1.5 bg-bg-white border border-border rounded-full text-xs transition-all hover:border-accent hover:text-accent"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {u}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* ─── LOADING ─── */}
        {loading && (
          <div className="max-w-[680px] mx-auto mt-12 mb-20 text-center">
            <div className="flex justify-center gap-2 mb-5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 bg-accent rounded-full"
                  style={{
                    animation: "bounce 1.4s infinite ease-in-out",
                    animationDelay: `${i * 0.16}s`,
                  }}
                />
              ))}
            </div>
            <div
              key={loadingMsgIdx}
              className="text-text-secondary"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
              }}
            >
              {LOADING_MESSAGES[loadingMsgIdx]}
            </div>
          </div>
        )}

        {/* ─── ERROR ─── */}
        {error && (
          <div
            className="max-w-[680px] mx-auto mt-8 mb-20 py-4 px-6 text-center rounded-2xl"
            style={{
              background: "var(--color-danger-bg)",
              border: "1px solid rgba(214, 69, 69, 0.2)",
              color: "#8B1538",
              fontSize: "0.95rem",
            }}
          >
            {error}
          </div>
        )}

        {/* ─── RESULTS ─── */}
        {currentResults && ocm && (
          <div ref={resultsRef} className="pt-10">
            {/* Header */}
            <div className="text-center mb-7">
              <div
                className="mb-1.5 text-text-muted"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                The verdict for
              </div>
              <div
                className="mb-7 text-text-primary"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  wordBreak: "break-word",
                }}
              >
                {displayUrl}
              </div>
            </div>

            {/* Cost-of-slow callout */}
            {(() => {
              const perf = currentResults.performance;
              const verdict =
                perf >= 90
                  ? {
                      label: "Solid",
                      tone: "good" as const,
                      headline: "Not bad. But could be better.",
                    }
                  : perf >= 70
                  ? {
                      label: "Mediocre",
                      tone: "warn" as const,
                      headline: "You're leaving money on the table.",
                    }
                  : perf >= 40
                  ? {
                      label: "Struggling",
                      tone: "bad" as const,
                      headline: "Your site is actively costing you customers.",
                    }
                  : {
                      label: "Critical",
                      tone: "bad" as const,
                      headline:
                        "This is a crisis. Your site is hemorrhaging visitors.",
                    };

              const estBounce =
                perf >= 90 ? 18 : perf >= 70 ? 32 : perf >= 50 ? 53 : perf >= 30 ? 75 : 90;

              const colors =
                verdict.tone === "good"
                  ? {
                      bg: "rgba(31,95,68,0.06)",
                      border: "rgba(31,95,68,0.2)",
                      accent: "#1E6B54",
                    }
                  : verdict.tone === "warn"
                  ? {
                      bg: "rgba(208,138,26,0.08)",
                      border: "rgba(208,138,26,0.25)",
                      accent: "#8B5A0F",
                    }
                  : {
                      bg: "rgba(197,48,85,0.08)",
                      border: "rgba(197,48,85,0.25)",
                      accent: "#8B1538",
                    };

              return (
                <div
                  className="max-w-[760px] mx-auto mb-9 py-5 px-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5"
                  style={{
                    background: colors.bg,
                    border: `1.5px solid ${colors.border}`,
                  }}
                >
                  <div
                    className="flex-shrink-0 text-white rounded-lg"
                    style={{
                      padding: "6px 12px",
                      background: colors.accent,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {verdict.label}
                  </div>
                  <div className="flex-1">
                    <div
                      className="mb-1 text-text-primary"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {verdict.headline}
                    </div>
                    <div
                      className="text-text-secondary"
                      style={{ fontSize: "0.9rem", lineHeight: 1.5 }}
                    >
                      Based on your score, an estimated{" "}
                      <strong
                        style={{ color: colors.accent, fontWeight: 700 }}
                      >
                        {estBounce}% of mobile visitors
                      </strong>{" "}
                      bounce before your page finishes loading. That&apos;s money
                      walking away.
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Mobile/Desktop tabs */}
            <div className="flex justify-center mb-10">
              <div
                className="inline-flex p-1 rounded-full"
                style={{ background: "rgba(26,26,26,0.05)" }}
              >
                {(["mobile", "desktop"] as Strategy[]).map((s) => (
                  <button
                    key={s}
                    onClick={() => setStrategy(s)}
                    className="px-5 py-2 rounded-full transition-all capitalize"
                    style={{
                      background: strategy === s ? "white" : "transparent",
                      boxShadow:
                        strategy === s ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color:
                        strategy === s
                          ? "var(--color-text-primary)"
                          : "var(--color-text-muted)",
                    }}
                  >
                    {s === "mobile" ? "📱 Mobile" : "💻 Desktop"}
                  </button>
                ))}
              </div>
            </div>

            {/* Side-by-side cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1040px] mx-auto">
              {/* YOUR SITE */}
              <div
                className="rounded-3xl p-8 md:p-9 border"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  borderColor: "var(--color-border)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  className="mb-1 text-text-muted"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Your site
                </div>
                <div
                  className="mb-7 text-text-primary"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 700,
                    wordBreak: "break-word",
                  }}
                >
                  {displayUrl}
                </div>

                <div className="flex justify-center mb-6">
                  {yourColor && (
                    <ScoreRing
                      score={currentResults.performance}
                      color={yourColor.ring}
                      bg={yourColor.bg}
                    />
                  )}
                </div>
                <div
                  className="text-center mb-6 text-text-muted"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Performance
                </div>

                <div className="grid grid-cols-3 gap-2.5 mb-6">
                  {[
                    { label: "A11y", value: currentResults.accessibility },
                    { label: "Best Pr.", value: currentResults.bestPractices },
                    { label: "SEO", value: currentResults.seo },
                  ].map((m) => {
                    const c = scoreColor(m.value);
                    return (
                      <div
                        key={m.label}
                        className="text-center py-3 px-2 rounded-xl"
                        style={{
                          background: c.bg,
                          border: `1px solid ${c.ring}20`,
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.55rem",
                            fontWeight: 700,
                            color: c.text,
                            lineHeight: 1,
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="mt-1.5 text-text-muted"
                          style={{
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  {[
                    ["Largest Contentful Paint", currentResults.lcp],
                    ["Cumulative Layout Shift", currentResults.cls],
                    ["Total Blocking Time", currentResults.tbt],
                    ["First Contentful Paint", currentResults.fcp],
                    ["Speed Index", currentResults.si],
                  ].map(([label, value], i, arr) => (
                    <div
                      key={label}
                      className="flex justify-between items-center py-3 text-sm"
                      style={{
                        borderBottom:
                          i < arr.length - 1
                            ? "1px solid var(--color-border-light)"
                            : "none",
                      }}
                    >
                      <span className="text-text-secondary">{label}</span>
                      <span
                        className="text-text-primary font-medium"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* OAK CITY MEDIA */}
              <div
                className="relative overflow-hidden rounded-3xl p-8 md:p-9 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #1E6B54 0%, #0F3E2C 100%)",
                  boxShadow: "0 30px 60px -20px rgba(31, 95, 68, 0.4)",
                }}
              >
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: -60,
                    right: -60,
                    width: 200,
                    height: 200,
                    background:
                      "radial-gradient(circle, rgba(76, 194, 143, 0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <div className="relative z-1">
                  <div
                    className="mb-1"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#A8D4BE",
                    }}
                  >
                    Oak City Media · built for speed
                  </div>
                  <div
                    className="mb-7"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                    }}
                  >
                    What you{" "}
                    <em style={{ color: "#6ECFA8", fontWeight: 600 }}>should</em>{" "}
                    score
                  </div>

                  <div className="flex justify-center mb-6">
                    <ScoreRing
                      score={ocm.performance}
                      color="white"
                      bg="rgba(255,255,255,0.12)"
                      lightText
                    />
                  </div>
                  <div
                    className="text-center mb-6"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#A8D4BE",
                    }}
                  >
                    Performance
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 mb-6">
                    {[
                      { label: "A11y", value: ocm.accessibility },
                      { label: "Best Pr.", value: ocm.bestPractices },
                      { label: "SEO", value: ocm.seo },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="text-center py-3 px-2 rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.1)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        <div
                          className="text-white"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.55rem",
                            fontWeight: 700,
                            lineHeight: 1,
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          className="mt-1.5"
                          style={{
                            fontSize: "0.6rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontFamily: "var(--font-mono)",
                            color: "#A8D4BE",
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    {[
                      ["Largest Contentful Paint", ocm.lcp],
                      ["Cumulative Layout Shift", ocm.cls],
                      ["Total Blocking Time", ocm.tbt],
                      ["First Contentful Paint", ocm.fcp],
                      ["Speed Index", ocm.si],
                    ].map(([label, value], i, arr) => (
                      <div
                        key={label}
                        className="flex justify-between items-center py-3 text-sm"
                        style={{
                          borderBottom:
                            i < arr.length - 1
                              ? "1px solid rgba(255,255,255,0.1)"
                              : "none",
                        }}
                      >
                        <span style={{ color: "#A8D4BE" }}>{label}</span>
                        <span
                          className="text-white font-medium"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top issues */}
            {currentResults.opportunities.length > 0 && (
              <div className="max-w-[1040px] mx-auto mt-12">
                <div
                  className="text-center mb-2.5 text-text-muted"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  The biggest leaks
                </div>
                <h2
                  className="text-center mb-7 text-text-primary"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Here&apos;s what&apos;s broken.
                </h2>
                <div
                  className="rounded-2xl border overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    borderColor: "var(--color-border)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {currentResults.opportunities.map((opp, i, arr) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 transition-colors hover:bg-accent-bg"
                      style={{
                        borderBottom:
                          i < arr.length - 1
                            ? "1px solid var(--color-border-light)"
                            : "none",
                      }}
                    >
                      <div
                        className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(42, 140, 110, 0.08)",
                          color: "var(--color-accent-dark)",
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                        }}
                      >
                        {i + 1}
                      </div>
                      <div
                        className="flex-1 text-text-primary"
                        style={{ fontSize: "0.95rem", lineHeight: 1.5 }}
                      >
                        {opp.title}
                      </div>
                      {opp.savings && (
                        <div
                          className="flex-shrink-0 px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(42, 140, 110, 0.08)",
                            border: "1px solid rgba(42, 140, 110, 0.15)",
                            fontSize: "0.7rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--color-accent-dark)",
                            fontWeight: 500,
                          }}
                        >
                          save {opp.savings}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              className="relative overflow-hidden max-w-[860px] mx-auto mt-16 py-14 px-10 rounded-[28px] text-center text-white"
              style={{
                background: "linear-gradient(135deg, #0E0E0E 0%, #1A1A1A 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 20% 50%, rgba(42, 140, 110, 0.3) 0%, transparent 55%), radial-gradient(circle at 85% 100%, rgba(42, 140, 110, 0.2) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-1">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                  style={{
                    background: "rgba(110, 207, 168, 0.12)",
                    border: "1px solid rgba(110, 207, 168, 0.3)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "#6ECFA8",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#6ECFA8",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  Taking 2 new clients this month
                </div>
                <h2
                  className="mb-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: "-0.025em",
                  }}
                >
                  Stop{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "#FF6B8A",
                    }}
                  >
                    losing
                  </span>{" "}
                  customers.
                  <br />
                  Start{" "}
                  <span
                    style={{
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "#6ECFA8",
                    }}
                  >
                    winning
                  </span>{" "}
                  them.
                </h2>
                <p
                  className="max-w-[560px] mx-auto mb-9"
                  style={{
                    fontSize: "1.15rem",
                    color: "#B8B4AB",
                    lineHeight: 1.5,
                  }}
                >
                  We hand-code you a site that loads in under a second, ranks on
                  Google, and turns visitors into paying customers.{" "}
                  <strong className="text-white">14 days from call to live.</strong>
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                  <a
                    href="/#contact"
                    className="px-9 py-4 bg-accent text-white rounded-full no-underline font-bold transition-all hover:bg-accent-dark hover:-translate-y-0.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      boxShadow: "0 10px 30px -10px rgba(42, 140, 110, 0.8)",
                    }}
                  >
                    Fix my site →
                  </a>
                  <a
                    href="/#work"
                    className="px-8 py-4 bg-transparent text-white rounded-full no-underline font-semibold transition-all hover:bg-white/5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    See our work
                  </a>
                </div>
                <div
                  className="mt-7"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "#6E6B64",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                  }}
                >
                  Free consultation · no pressure · raleigh-based
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
