import Link from "next/link";
import type { LocationData } from "@/data/locations";
import { industries, getIndustry } from "@/data/industries";
import { getLocation } from "@/data/locations";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  location: LocationData;
}

export default function LocationLanding({ location }: Props) {
  const featuredIndustries = location.popularIndustries
    .map((slug) => getIndustry(slug))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  const neighborLinks = location.neighboringTowns.map((name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const neighborExists = getLocation(slug);
    return { name, slug: neighborExists ? slug : null };
  });

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-[92vh] flex items-center px-4 md:px-8 pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,250,247,1) 0%, rgba(250,250,247,0.98) 100%)",
          }}
        />
        <div
          className="absolute z-0 pointer-events-none rounded-full"
          style={{
            top: "-15%",
            left: "-10%",
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle at 30% 40%, rgba(42,140,110,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(42,140,110,0.05) 0%, transparent 50%)",
            filter: "blur(60px)",
            animation: "meshFloat 15s ease-in-out infinite",
          }}
        />

        <div className="relative z-1 max-w-[1200px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-7">
            <div className="w-10 h-px bg-accent" />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--color-accent)",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {location.heroEyebrow}
            </span>
          </div>

          <h1
            className="max-w-[900px] mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-2.5px",
            }}
          >
            {location.heroHeadline}{" "}
            <span className="gradient-text">{location.heroHeadlineAccent}</span>
          </h1>

          <p
            className="max-w-[620px] mb-10 text-text-secondary"
            style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            {location.heroSub}
          </p>

          <div className="flex gap-4 items-center flex-wrap">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold no-underline transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(42,140,110,0.25)]"
              style={{ fontSize: "0.95rem" }}
            >
              Start a Project →
            </a>
            <Link
              href="/grade"
              className="inline-flex items-center gap-2 bg-bg-white text-text-primary px-8 py-4 rounded-full font-semibold no-underline border border-border transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
              style={{ fontSize: "0.95rem" }}
            >
              Grade Your Site
            </Link>
          </div>

          {/* Quick facts */}
          <div className="mt-14 flex flex-wrap gap-8 max-w-[700px] border-t border-border pt-8">
            <div>
              <div
                className="mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                }}
              >
                Population
              </div>
              <div
                className="text-text-primary"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                {location.population}
              </div>
            </div>
            <div>
              <div
                className="mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                }}
              >
                Turnaround
              </div>
              <div
                className="text-text-primary"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                14 days
              </div>
            </div>
            <div>
              <div
                className="mb-1"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                }}
              >
                Based in
              </div>
              <div
                className="text-text-primary"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Rolesville, NC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ LOCAL CONTEXT ═══════════ */}
      <section className="bg-bg-white border-t border-b border-border-light py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[840px] mx-auto">
          <ScrollReveal>
            <p
              className="flex items-center gap-3 mb-4"
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
              About {location.shortName}
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Why local matters here.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p
              className="text-text-secondary mb-10"
              style={{ fontSize: "1.15rem", lineHeight: 1.75 }}
            >
              {location.localContext}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {location.whyLocalMatters.map((item, i) => (
              <ScrollReveal key={item.title} delay={i}>
                <div className="h-full p-6 rounded-2xl bg-accent-bg border border-accent-border">
                  <h3
                    className="mb-3 text-text-primary"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-text-secondary"
                    style={{ fontSize: "0.92rem", lineHeight: 1.6 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES SERVED ═══════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p
              className="flex items-center gap-3 mb-4"
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
              Industries we serve
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Who we build for in {location.shortName}.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p
              className="text-text-secondary max-w-[620px] mb-12"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Every industry has its own website conversion mechanics. We&apos;ve
              built specialized approaches for the businesses most common in {location.shortName}.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredIndustries.map((ind, i) => (
              <ScrollReveal key={ind.slug} delay={i % 2}>
                <Link
                  href={`/for/${ind.slug}`}
                  className="group block p-8 rounded-2xl bg-bg-white border border-border-light no-underline transition-all hover:-translate-y-1 hover:border-accent-border hover:shadow-[0_12px_40px_rgba(42,140,110,0.08)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3
                        className="mb-3 text-text-primary"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {ind.displayName}
                      </h3>
                      <p
                        className="text-text-secondary mb-5"
                        style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      >
                        {ind.heroSub.split(".")[0]}.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ind.exampleBusinessTypes.slice(0, 4).map((type) => (
                          <span
                            key={type}
                            className="px-2.5 py-1 rounded-full text-text-muted border border-border-light"
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.7rem",
                              background: "var(--color-bg)",
                            }}
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all group-hover:bg-accent group-hover:text-white"
                      style={{
                        background: "var(--color-accent-bg)",
                        color: "var(--color-accent)",
                      }}
                    >
                      →
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES OVERVIEW ═══════════ */}
      <section className="bg-bg-white border-t border-b border-border-light py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p
              className="flex items-center gap-3 mb-4"
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
              What we offer
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-12 max-w-[780px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Web. Video. Photo. AI.
              <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                One team for {location.shortName} businesses.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01 — WEB",
                title: "Custom websites",
                desc: "Hand-coded, mobile-first sites that load in under a second.",
              },
              {
                num: "02 — VIDEO",
                title: "Video production",
                desc: "Short-form video that brings your business to life.",
              },
              {
                num: "03 — PHOTO",
                title: "Brand photography",
                desc: "Professional photos for your site, socials, and listings.",
              },
              {
                num: "04 — AI",
                title: "AI integration",
                desc: "24/7 chat, smart lead capture, automated booking.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.num} delay={i}>
                <div className="h-full p-6 rounded-2xl bg-bg border border-border-light transition-all hover:-translate-y-0.5 hover:border-accent-border">
                  <div
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.14em",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {s.num}
                  </div>
                  <h3
                    className="mb-2 text-text-primary"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-text-secondary"
                    style={{ fontSize: "0.9rem", lineHeight: 1.55 }}
                  >
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEIGHBORING TOWNS ═══════════ */}
      <section className="py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <p
              className="mb-4"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "2.5px",
                color: "var(--color-accent)",
              }}
            >
              Also serving
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-1px",
              }}
            >
              Neighbors to {location.shortName}.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-[780px] mx-auto">
              {neighborLinks.map((n) =>
                n.slug ? (
                  <Link
                    key={n.name}
                    href={`/in/${n.slug}`}
                    className="px-5 py-3 bg-bg-white border border-border rounded-full text-sm no-underline transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Web design in {n.name} →
                  </Link>
                ) : (
                  <span
                    key={n.name}
                    className="px-5 py-3 bg-bg-white border border-border-light rounded-full text-sm"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {n.name}
                  </span>
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="px-4 md:px-8 py-16">
        <div
          className="relative overflow-hidden max-w-[1100px] mx-auto rounded-[32px] py-16 md:py-20 px-8 md:px-14 text-center text-white"
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
            <h2
              className="mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-2px",
              }}
            >
              Let&apos;s build something in {location.shortName}.
            </h2>
            <p
              className="max-w-[580px] mx-auto mb-9"
              style={{
                fontSize: "1.15rem",
                color: "#B8B4AB",
                lineHeight: 1.5,
              }}
            >
              Free consultation. We&apos;ll drive to you, look at what you&apos;ve
              got, and tell you — honestly — what&apos;s worth fixing.
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
                Book a free call →
              </a>
              <Link
                href="/grade"
                className="px-8 py-4 bg-transparent text-white rounded-full no-underline font-semibold transition-all hover:bg-white/5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                }}
              >
                Grade my current site
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-bg border-t border-border px-4 md:px-8 py-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-muted text-sm">
            © 2026 Oak City Media · Based in Rolesville, NC
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/grade"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              Grade my site
            </Link>
            {industries.slice(0, 2).map((i) => (
              <Link
                key={i.slug}
                href={`/for/${i.slug}`}
                className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
              >
                {i.displayName}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
