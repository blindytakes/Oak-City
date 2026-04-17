import Link from "next/link";
import type { IndustryData } from "@/data/industries";
import { locations } from "@/data/locations";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  industry: IndustryData;
}

export default function IndustryLanding({ industry }: Props) {
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
            right: "-10%",
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
              {industry.heroEyebrow}
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
            {industry.heroHeadline}{" "}
            <span className="gradient-text">{industry.heroHeadlineAccent}</span>
          </h1>

          <p
            className="max-w-[620px] mb-10 text-text-secondary"
            style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            {industry.heroSub}
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
              Grade Your Current Site
            </Link>
          </div>

          {/* Stat bar */}
          <div className="mt-14 max-w-[640px] border-t border-border pt-8">
            <div className="flex items-start gap-6">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  letterSpacing: "-2px",
                }}
              >
                {industry.stat.number}
              </div>
              <div
                className="flex-1 pt-2 text-text-secondary"
                style={{ fontSize: "1rem", lineHeight: 1.5 }}
              >
                {industry.stat.label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEMS ═══════════ */}
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
                color: "var(--color-danger)",
              }}
            >
              <span
                className="w-6 h-px inline-block"
                style={{ background: "var(--color-danger)" }}
              />
              What&apos;s broken
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-4 max-w-[780px]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Most {industry.shortName} websites are losing business.
              <br />
              <span style={{ color: "var(--color-text-muted)" }}>
                Here&apos;s why yours might be too.
              </span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {industry.problems.map((p, i) => (
              <ScrollReveal key={p.title} delay={i}>
                <div
                  className="h-full p-7 rounded-2xl border"
                  style={{
                    background: "var(--color-danger-bg)",
                    borderColor: "rgba(214,69,69,0.15)",
                  }}
                >
                  <div
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--color-danger)",
                      fontWeight: 600,
                    }}
                  >
                    Problem {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="mb-3 text-text-primary"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-text-secondary"
                    style={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                  >
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OUR APPROACH ═══════════ */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
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
                  {industry.ourApproach.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal>
                <h2
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-1.5px",
                  }}
                >
                  {industry.ourApproach.headline}
                </h2>
              </ScrollReveal>
              <ScrollReveal>
                <p
                  className="text-text-secondary"
                  style={{ fontSize: "1.1rem", lineHeight: 1.75 }}
                >
                  {industry.ourApproach.desc}
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industry.capabilities.map((c, i) => (
                <ScrollReveal key={c.title} delay={i % 2}>
                  <div
                    className="h-full p-6 rounded-2xl bg-bg-white border border-border-light transition-all hover:-translate-y-0.5 hover:border-accent-border hover:shadow-[0_8px_25px_rgba(42,140,110,0.08)]"
                  >
                    <div className="text-2xl mb-3">{c.icon}</div>
                    <h3
                      className="mb-2 text-text-primary"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="text-text-secondary"
                      style={{ fontSize: "0.875rem", lineHeight: 1.55 }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
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
              Common questions
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="mb-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4.5vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Questions we hear from every {industry.shortName} owner.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {industry.faq.map((item, i) => (
              <ScrollReveal key={item.q} delay={i % 2}>
                <details
                  className="group py-6 border-b border-border-light last:border-b-0"
                  style={{ borderColor: "var(--color-border-light)" }}
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer text-text-primary list-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.q}
                    <span
                      className="text-accent transition-transform group-open:rotate-45 text-2xl font-light ml-4"
                      style={{ lineHeight: 1 }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-text-secondary"
                    style={{ fontSize: "1rem", lineHeight: 1.7 }}
                  >
                    {item.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CROSS-LINKS (LOCATIONS SERVED) ═══════════ */}
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
              Serving the full Triangle
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
              {industry.displayName} across the Triangle.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 max-w-[780px] mx-auto">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/in/${loc.slug}`}
                  className="px-5 py-3 bg-bg-white border border-border rounded-full text-sm no-underline transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {industry.shortName === "law firm"
                    ? "Law firms"
                    : industry.displayName}{" "}
                  in {loc.shortName} →
                </Link>
              ))}
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
              Ready for a {industry.shortName} site that actually works?
            </h2>
            <p
              className="max-w-[580px] mx-auto mb-9"
              style={{
                fontSize: "1.15rem",
                color: "#B8B4AB",
                lineHeight: 1.5,
              }}
            >
              14 days from signed contract to live site. Hand-coded, mobile-first,
              and built around your customers — not a template.
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
            © 2026 Oak City Media · Raleigh, NC
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
            <a
              href="mailto:hello@oakcitymedia.com"
              className="text-text-muted text-sm no-underline hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
