import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import SiteGrader from "@/components/SiteGrader";

const services = [
  { icon: "⚡", title: "Custom Websites", desc: "Hand-coded, mobile-first sites that load in under a second. No WordPress, no page builders, no bloat." },
  { icon: "📍", title: "Google Business Setup", desc: "Your Google Business Profile fully optimized so you show up in the map pack when locals search." },
  { icon: "🔍", title: "Local SEO", desc: "Proper structure, meta tags, and schema markup baked in from day one. Google rewards fast, well-built sites." },
  { icon: "📱", title: "Mobile-First Design", desc: "70% of your customers are on their phone. We design for mobile first — not as an afterthought." },
  { icon: "🛡️", title: "Hosting & Maintenance", desc: "Fast, secure hosting included. No plugin updates, no security patches, no headaches." },
  { icon: "📊", title: "Monthly Reports", desc: "Clear, jargon-free reports showing your traffic, rankings, and where your visitors come from." },
];

const wpProblems = [
  { title: "30-50 plugins to maintain", desc: "Each one a security hole and speed killer." },
  { title: "Constant updates required", desc: "WordPress core, theme, and plugins — weekly." },
  { title: "Bloated page sizes", desc: "Your 5-page site carries the weight of a 500-page site." },
  { title: "$200+/month hosting", desc: "For hosting that still manages to be slow." },
  { title: "Looks like everyone else", desc: "Same themes, same layouts, same template." },
];

const portfolio = [
  { title: "Keibler Law Group", desc: "Modern site for a local law practice", tags: ["Web", "Design", "SEO"], color: "from-[#E8EDF4] to-[#D4DCE8]", accent: "#7baaf7", live: true },
  { title: "Triangle Landscaping Co.", desc: "Lead-gen site with brand photography", tags: ["Web", "Photo", "Lead Gen"], color: "from-[#E4EDE8] to-[#D0DDD5]", accent: "#81c784", live: false },
  { title: "The Smoke Shack BBQ", desc: "Website, menu video, and food photography", tags: ["Web", "Video", "Photo"], color: "from-[#EDE8E4] to-[#DDD5CC]", accent: "#e8a84c", live: false },
  { title: "Rolesville Family Dental", desc: "Appointment site with team headshots", tags: ["Web", "Photo", "Booking"], color: "from-[#E8E4ED] to-[#D5CCDD]", accent: "#ce93d8", live: false },
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(170deg, rgba(250,250,247,0.97) 0%, rgba(250,250,247,0.88) 35%, rgba(250,250,247,0.5) 100%), url('https://images.unsplash.com/photo-1568732333411-4be05f659919?w=1800&q=80&fit=crop') center/cover no-repeat" }} />
        <div className="absolute z-0 pointer-events-none rounded-full" style={{ top: "-20%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle at 30% 40%, rgba(42,140,110,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(42,140,110,0.05) 0%, transparent 50%)", filter: "blur(60px)", animation: "meshFloat 15s ease-in-out infinite" }} />

        <div className="relative z-1 max-w-[1200px] mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            <div className="w-10 h-px bg-accent" />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: 500, color: "var(--color-accent)", letterSpacing: "1px", textTransform: "uppercase" }}>Raleigh, NC</span>
          </div>

          <h1 className="max-w-[800px] mb-7 opacity-0 animate-[fadeUp_0.8s_ease_0.4s_forwards]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-3px" }}>
            Your business,<br /><span className="gradient-text">pixel perfect.</span>
          </h1>

          <p className="max-w-[500px] mb-10 text-text-secondary opacity-0 animate-[fadeUp_0.8s_ease_0.6s_forwards]" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", lineHeight: 1.75 }}>
            Websites, video, photography, and AI for local businesses across the Triangle. No templates. No WordPress. Everything hand-crafted, from the code to the camera — with intelligence built in.
          </p>

          <div className="flex gap-4 items-center flex-wrap opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold no-underline transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(42,140,110,0.25)]" style={{ fontSize: "0.95rem" }}>Start a Project →</a>
            <a href="#work" className="inline-flex items-center gap-2 bg-bg-white text-text-primary px-8 py-4 rounded-full font-semibold no-underline border border-border transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5" style={{ fontSize: "0.95rem" }}>See Our Work</a>
          </div>

          <div className="mt-14 py-5 border-t border-b border-border overflow-hidden opacity-0 animate-[fadeUp_0.8s_ease_1s_forwards]">
            <div className="flex gap-8 w-max" style={{ animation: "marquee 30s linear infinite" }}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {["Web Design", "Video Production", "Brand Photography", "AI Integration", "Local SEO", "Google Business", "Social Content"].map((item) => (
                    <span key={`${i}-${item}`} className="flex items-center gap-8 whitespace-nowrap text-text-muted uppercase tracking-wider" style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", fontWeight: 600 }}>
                      {item}<span className="text-accent text-[0.4rem]">◆</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SITE GRADER TEASER ===== */}
      <SiteGrader variant="teaser" />

      {/* ===== FOUR PILLARS ===== */}
      <div className="bg-bg-white border-t border-b border-border-light py-16 md:py-28 px-4 md:px-8" id="services">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
              <span className="w-6 h-px bg-accent inline-block" />What We Do
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>
              Web. Video. Photo. AI.<br />One team. One vision.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-secondary max-w-[560px] mb-12" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              Your restaurant doesn&apos;t just need a website. It needs video, photos, and a site smart enough to answer your customers at 2am. We build all of it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {[
              { num: "01 — WEB", title: "Custom Websites", desc: "Hand-coded, mobile-first sites that load in under a second. No WordPress, no page builders, no bloat.", items: ["100% custom code", "Mobile-first responsive design", "Google Business + local SEO", "Hosting & maintenance included"], bg: "from-[#E3F0EC] to-[#C8E2D8]", visual: "code" },
              { num: "02 — VIDEO", title: "Video Production", desc: "Short-form video that brings your business to life. Homepage heroes, social clips, Google Business video tours.", items: ["30-60 second brand videos", "Social media content", "Google Business video", "Professional editing & color"], bg: "from-[#E8EDF5] to-[#D0D9EB]", visual: "play" },
              { num: "03 — PHOTO", title: "Brand Photography", desc: "Professional photos for your site, Google listing, social profiles, and menus. No more blurry iPhone shots.", items: ["Interior & exterior shots", "Food & product photography", "Team headshots", "Optimized for web & social"], bg: "from-[#F0EBE3] to-[#E2D8C8]", visual: "lens" },
              { num: "04 — AI", title: "AI That Works For You", desc: "Your website stops being a brochure and starts being your smartest employee. Answering questions, booking appointments, capturing leads — even while you sleep.", items: ["24/7 AI chat for customer questions", "Smart lead qualification", "Automated appointment booking", "AI-powered SEO content"], bg: "from-[#EDE3F0] to-[#D8C8E2]", visual: "ai" },
            ].map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i} className="h-full">
                <div className="bg-bg border border-border-light rounded-[20px] overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-accent-border h-full">
                  <div className={`h-[200px] relative overflow-hidden bg-gradient-to-br ${pillar.bg}`}>
                    <span className="absolute top-4 left-6 text-[rgba(0,0,0,0.25)]" style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "2px" }}>{pillar.num}</span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-50">
                      {pillar.visual === "code" && (
                        <div className="w-[70%] text-left">
                          {[60, 85, 45, 70, 55, 75].map((w, j) => (
                            <div key={j} className="h-1 rounded mb-1.5 opacity-45" style={{ width: `${w}%`, background: j % 3 === 0 ? "#2A8C6E" : j % 3 === 1 ? "#5BAABD" : "#E8A84C" }} />
                          ))}
                        </div>
                      )}
                      {pillar.visual === "play" && (
                        <div className="w-16 h-16 border-2 border-[rgba(42,140,110,0.3)] rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 ml-1" style={{ borderLeft: "18px solid rgba(42,140,110,0.5)", borderTop: "11px solid transparent", borderBottom: "11px solid transparent" }} />
                        </div>
                      )}
                      {pillar.visual === "lens" && (
                        <div className="w-[60px] h-[60px] border-[3px] border-[rgba(0,0,0,0.15)] rounded-full relative">
                          <div className="absolute top-1/2 left-1/2 w-[30px] h-[30px] border-2 border-[rgba(0,0,0,0.1)] rounded-full -translate-x-1/2 -translate-y-1/2" />
                        </div>
                      )}
                      {pillar.visual === "ai" && (
                        <div className="flex flex-col gap-2 w-[65%]">
                          <div className="bg-[rgba(0,0,0,0.08)] rounded-xl rounded-bl-sm px-3 py-2 self-start" style={{ maxWidth: "80%" }}>
                            <div className="flex gap-1.5 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-[rgba(0,0,0,0.2)] animate-pulse" />
                              <div className="w-1.5 h-1.5 rounded-full bg-[rgba(0,0,0,0.2)] animate-pulse" style={{ animationDelay: "0.2s" }} />
                              <div className="w-1.5 h-1.5 rounded-full bg-[rgba(0,0,0,0.2)] animate-pulse" style={{ animationDelay: "0.4s" }} />
                            </div>
                          </div>
                          <div className="bg-[rgba(42,140,110,0.15)] rounded-xl rounded-br-sm px-3 py-2 self-end" style={{ maxWidth: "85%" }}>
                            <div className="h-2 w-16 rounded bg-[rgba(42,140,110,0.25)] mb-1" />
                            <div className="h-2 w-12 rounded bg-[rgba(42,140,110,0.18)]" />
                          </div>
                          <div className="bg-[rgba(0,0,0,0.08)] rounded-xl rounded-bl-sm px-3 py-2 self-start" style={{ maxWidth: "70%" }}>
                            <div className="h-2 w-20 rounded bg-[rgba(0,0,0,0.12)] mb-1" />
                            <div className="h-2 w-14 rounded bg-[rgba(0,0,0,0.08)]" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.3px" }}>{pillar.title}</h3>
                    <p className="text-text-muted text-sm mb-5" style={{ lineHeight: 1.65 }}>{pillar.desc}</p>
                    <ul className="list-none flex flex-col gap-1.5">
                      {pillar.items.map((item) => (
                        <li key={item} className="text-text-secondary text-[0.82rem] flex items-center gap-2">
                          <span className="text-accent text-xs">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SPEED COMPARISON ===== */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-[1200px] mx-auto" id="speed">
        <ScrollReveal>
          <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
            <span className="w-6 h-px bg-accent inline-block" />The Speed Gap
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>
            Your competitors&apos; sites are <span className="text-danger">costing them</span> customers.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-text-secondary max-w-[560px] mb-12" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Most local business websites take 5-8 seconds to load. More than half of visitors leave before they see anything.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { type: "slow", label: "Typical WordPress Site", title: "Your competitor", metrics: [{ l: "Load time", v: "6.2s", w: 95 }, { l: "Page size", v: "4.8 MB", w: 85 }, { l: "Requests", v: "87", w: 90 }], score: 38 },
            { type: "fast", label: "Oak City Media Site", title: "What we build", metrics: [{ l: "Load time", v: "0.4s", w: 8 }, { l: "Page size", v: "145 KB", w: 5 }, { l: "Requests", v: "6", w: 7 }], score: 98 },
          ].map((card, i) => (
            <ScrollReveal key={card.type} delay={i}>
              <div className={`rounded-2xl p-9 ${card.type === "slow" ? "bg-danger-bg border border-[rgba(214,69,69,0.1)]" : "bg-accent-bg border border-accent-border"}`}>
                <p className={`mb-4 ${card.type === "slow" ? "text-danger" : "text-accent"}`} style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px" }}>{card.label}</p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "1.25rem" }}>{card.title}</h3>
                {card.metrics.map((m) => (
                  <div key={m.l}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-text-muted text-[0.82rem]">{m.l}</span>
                      <span className={card.type === "slow" ? "text-danger" : "text-accent"} style={{ fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.85rem" }}>{m.v}</span>
                    </div>
                    <div className="h-[5px] rounded bg-[rgba(0,0,0,0.05)] mb-4 overflow-hidden">
                      <div className={`h-full rounded speed-bar-fill ${card.type === "slow" ? "bg-danger" : "bg-accent"}`} style={{ "--bar-width": `${m.w}%` } as React.CSSProperties} />
                    </div>
                  </div>
                ))}
                <div className="flex items-baseline gap-2 mt-6 pt-5 border-t border-[rgba(0,0,0,0.05)]">
                  <span className={card.type === "slow" ? "text-danger" : "text-accent"} style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", fontWeight: 800, lineHeight: 1 }}>{card.score}</span>
                  <span className="text-text-muted text-xs leading-snug">PageSpeed<br />out of 100</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== AI CALLOUT ===== */}
      <div className="bg-bg-white border-t border-b border-border-light py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
                  <span className="w-6 h-px bg-accent inline-block" />AI-Powered
                </p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1.25rem" }}>
                  Your website doesn&apos;t<br />clock out at 5.
                </h2>
                <p className="text-text-secondary mb-6" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  Most business websites just sit there. Ours <strong className="text-text-primary">think</strong>. We embed AI directly into your site so it answers customer questions, qualifies leads, and books appointments — <strong className="text-text-primary">24 hours a day, 7 days a week</strong>, while you focus on running your business.
                </p>
                <p className="text-text-secondary" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>
                  &ldquo;Do you take walk-ins?&rdquo; &ldquo;What are your hours on Sunday?&rdquo; &ldquo;How much is a men&apos;s cut?&rdquo; — your site handles it all instantly, in natural conversation. No chatbot menus. No &ldquo;please hold.&rdquo; Just answers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="bg-bg rounded-[20px] border border-border p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-text-muted text-xs font-medium" style={{ fontFamily: "var(--font-mono)", letterSpacing: "1px" }}>LIVE ON YOUR SITE</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="self-start bg-[rgba(0,0,0,0.04)] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-text-secondary">Hey! Do you guys do color corrections? And how much would that run me?</p>
                  </div>
                  <div className="self-end bg-accent text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm opacity-95">Yes we do! Color corrections start at $85 and typically take about 90 minutes. Want me to find you an open appointment this week?</p>
                  </div>
                  <div className="self-start bg-[rgba(0,0,0,0.04)] rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-text-secondary">That would be great, I&apos;m free Thursday afternoon</p>
                  </div>
                  <div className="self-end bg-accent text-white rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm opacity-95">I&apos;ve got a 2:30 PM slot on Thursday with Sarah. Want me to book that for you?</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-2">
                  <span className="text-[0.7rem] text-text-muted" style={{ fontFamily: "var(--font-mono)" }}>11:47 PM</span>
                  <span className="text-[0.7rem] text-text-muted">· Customer converted while you were asleep</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ===== NO WORDPRESS ===== */}
      <div className="bg-bg-white border-t border-b border-border-light py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
              <span className="w-6 h-px bg-accent inline-block" />No WordPress. Ever.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>
              100% custom code. Zero bloat.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal>
              <div className="flex flex-col gap-3">
                {wpProblems.map((p) => (
                  <div key={p.title} className="bg-bg-white border border-border rounded-xl px-5 py-4 flex gap-3.5 items-start transition-all hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:translate-x-1">
                    <div className="w-7 h-7 bg-danger-bg rounded-lg flex items-center justify-center text-danger font-bold text-xs shrink-0">✕</div>
                    <div>
                      <strong className="block text-sm">{p.title}</strong>
                      <span className="text-text-muted text-xs leading-snug">{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="bg-accent rounded-[20px] p-10 text-white">
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem" }}>Our approach is different.</h3>
                <p className="text-sm opacity-90 leading-relaxed mb-4">Every site we build is written by hand. Clean HTML, CSS, and JavaScript. The result is a site that&apos;s faster, more secure, and uniquely yours.</p>
                <ul className="list-none flex flex-col gap-2.5 mt-5">
                  {["Zero plugins. Zero vulnerabilities.", "No updates to manage. Ever.", "Pages load in under 1 second", "Hosting costs near zero", "Design that's 100% custom to your brand", "Code you own completely"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm opacity-95">
                      <span className="opacity-70 text-xs">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ===== PORTFOLIO ===== */}
      <div className="bg-bg-white border-t border-b border-border-light py-16 md:py-28 px-4 md:px-8" id="work">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
              <span className="w-6 h-px bg-accent inline-block" />Selected Work
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>
              Built for real businesses<br />in the Triangle.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            {portfolio.map((project, i) => (
              <ScrollReveal key={project.title} delay={i % 4}>
                <div className="bg-bg border border-border rounded-2xl overflow-hidden transition-all duration-400 cursor-pointer hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-accent-border group">
                  <div className={`h-[220px] overflow-hidden relative bg-gradient-to-br ${project.color}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="bg-white rounded-lg p-4 w-[60%] h-[60%] shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-2 transition-transform group-hover:scale-[1.03]">
                        <div className="flex gap-1 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                        </div>
                        <div className="h-[8px] rounded bg-[#E0E0E0]" style={{ width: "40%", background: project.accent }} />
                        <div className="h-[5px] rounded bg-[#E0E0E0]" style={{ width: "80%" }} />
                        <div className="h-[5px] rounded bg-[#E0E0E0]" style={{ width: "60%" }} />
                        <div className="h-[5px] rounded bg-[#E0E0E0]" style={{ width: "70%" }} />
                      </div>
                    </div>
                    {project.live && (<span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-[0.6rem] font-bold tracking-wider uppercase">LIVE</span>)}
                  </div>
                  <div className="p-6">
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{project.title}</h3>
                    <p className="text-text-muted text-[0.82rem]">{project.desc}</p>
                    <div className="flex gap-1.5 mt-3 flex-wrap">
                      {project.tags.map((tag) => (<span key={tag} className="bg-accent-bg text-accent px-3 py-1 rounded-full text-[0.68rem] font-semibold">{tag}</span>))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="max-w-[700px] mx-auto mt-14 text-center">
              <p className="text-lg leading-relaxed text-text-secondary italic mb-6 relative" style={{ fontSize: "1.2rem", lineHeight: 1.8 }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-accent opacity-20 pointer-events-none" style={{ fontFamily: "Georgia, serif", fontSize: "4rem" }}>&ldquo;</span>
                The new site looks incredible and loads instantly. We&apos;ve already had new clients mention they found us on Google. Best investment we&apos;ve made for the practice.
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>CK</div>
                <div className="text-left">
                  <div className="font-semibold text-sm">Chase Keibler</div>
                  <div className="text-text-muted text-xs">Keibler Law Group, Raleigh</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ===== PROCESS ===== */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
            <span className="w-6 h-px bg-accent inline-block" />How It Works
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px" }}>
            From conversation to launch<br />in <span className="text-accent">14 days</span>.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {[
            { n: 1, title: "Discovery", desc: "We talk about your business, goals, and what's not working. Free, zero pressure." },
            { n: 2, title: "Create", desc: "Site designed, video shot, photos taken. You get a live preview to review before launch." },
            { n: 3, title: "Launch", desc: "Domain connected, Google indexed, analytics live. Your business is open online." },
            { n: 4, title: "Grow", desc: "Monthly updates, fresh content, and SEO improvements that keep customers coming." },
          ].map((step, i) => (
            <ScrollReveal key={step.n} delay={i} className="text-center py-8 px-5 relative">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-5" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem" }}>{step.n}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, marginBottom: "0.5rem" }}>{step.title}</h3>
              <p className="text-text-muted text-sm" style={{ lineHeight: 1.6 }}>{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <div className="bg-bg-white border-t border-b border-border-light py-16 md:py-28 px-4 md:px-8" id="pricing">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
              <span className="w-6 h-px bg-accent inline-block" />Pricing
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>Honest pricing. No surprises.</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-text-secondary max-w-[560px] mb-12" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>No hidden fees. No &ldquo;request a quote&rdquo; runaround. Here&apos;s what it costs.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tier: "Starter", price: "$1,500", monthly: "+ $79/mo hosting & support", desc: "Custom site for businesses getting started online.", features: ["Custom single-page site", "Mobile-responsive", "Contact form", "Google Business setup", "Basic SEO", "Hosting included"], featured: false },
              { tier: "Growth", price: "$3,500", monthly: "+ $129/mo hosting & maintenance", desc: "Full media package. Most businesses start here.", features: ["Multi-page custom site", "Brand photography session", "30-second hero video", "AI chat widget", "Google Business optimization", "Full SEO setup"], featured: true },
              { tier: "Pro", price: "$6,000", monthly: "+ $199/mo hosting & strategy", desc: "The full package with AI, content, and ongoing strategy.", features: ["Unlimited pages + CMS", "Full photo shoot + brand video", "AI chat + appointment booking", "Smart lead qualification", "Social media content pack", "Quarterly strategy calls"], featured: false },
            ].map((plan, i) => (
              <ScrollReveal key={plan.tier} delay={i}>
                <div className={`bg-bg border rounded-[20px] p-9 relative transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] ${plan.featured ? "border-2 border-accent shadow-[0_0_0_4px_rgba(42,140,110,0.06)]" : "border-border"}`}>
                  {plan.featured && (<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[0.6rem] font-bold tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>MOST POPULAR</span>)}
                  <p className="text-text-muted mb-3" style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px" }}>{plan.tier}</p>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "2.75rem", fontWeight: 800, letterSpacing: "-2px", marginBottom: "0.15rem" }}>{plan.price} <span className="text-text-muted text-sm font-normal tracking-normal">one-time</span></div>
                  <p className="text-accent text-xs font-semibold mb-3">{plan.monthly}</p>
                  <p className="text-text-muted text-sm mb-6" style={{ lineHeight: 1.5 }}>{plan.desc}</p>
                  <ul className="list-none flex flex-col gap-2.5 mb-7">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-2.5 text-text-secondary text-sm leading-snug"><span className="text-accent font-bold shrink-0">✓</span>{f}</li>))}
                  </ul>
                  <a href="#contact" className={`block text-center py-3.5 rounded-full font-semibold text-sm no-underline transition-all ${plan.featured ? "bg-accent text-white hover:bg-accent-light hover:shadow-[0_8px_25px_rgba(42,140,110,0.25)]" : "bg-bg-white border border-border text-text-primary hover:border-accent hover:text-accent"}`}>Get Started{plan.featured ? " →" : ""}</a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ABOUT ===== */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-[1200px] mx-auto" id="about">
        <ScrollReveal>
          <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
            <span className="w-6 h-px bg-accent inline-block" />About
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 800, lineHeight: 1.12, letterSpacing: "-2px", marginBottom: "1rem" }}>Built in the Triangle,<br />for the Triangle.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mt-8">
          <ScrollReveal>
            <div>
              <p className="text-text-secondary mb-5" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>Oak City Media is a one-person studio based in <strong className="text-text-primary">Raleigh, NC.</strong> I started it because local businesses deserve better than a bloated WordPress template, stock photos, and a $200/month hosting bill.</p>
              <p className="text-text-secondary mb-5" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>My background spans <strong className="text-text-primary">data engineering, product marketing, video editing, and web development</strong> — so I don&apos;t just build pretty sites. I build complete media packages that are strategically designed to rank on Google and convert visitors.</p>
              <p className="text-text-secondary" style={{ fontSize: "1.05rem", lineHeight: 1.8 }}>When you work with me, <strong className="text-text-primary">you work with me.</strong> No account managers, no outsourcing, no runaround.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="bg-bg-white border border-border rounded-[20px] p-9">
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "1.25rem" }}>Why businesses choose us</h3>
              <ul className="list-none flex flex-col gap-4">
                {[
                  { icon: "⚡", title: "Speed obsessed", desc: "Sites load in under a second. Not 6. Not 4. Under one." },
                  { icon: "🎬", title: "One team, everything", desc: "Web, video, photo, and AI from one person who gets your brand." },
                  { icon: "💰", title: "Transparent pricing", desc: "Prices on the website. No quote requests. No surprises." },
                  { icon: "📍", title: "Genuinely local", desc: "Based in Raleigh. We know the Triangle because we live here." },
                ].map((v) => (
                  <li key={v.title} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 bg-accent-bg rounded-[10px] flex items-center justify-center text-base shrink-0">{v.icon}</div>
                    <div>
                      <strong className="block text-[0.92rem]">{v.title}</strong>
                      <span className="text-text-muted text-[0.82rem] leading-snug">{v.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <div className="border-t border-border-light py-16 md:py-28 px-4 md:px-8" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F0F7F4 100%)" }} id="contact">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <ScrollReveal>
            <div>
              <p className="flex items-center gap-3 mb-4" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2.5px", color: "var(--color-accent)" }}>
                <span className="w-6 h-px bg-accent inline-block" />Get In Touch
              </p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-2px", marginBottom: "1rem", lineHeight: 1.12 }}>
                Let&apos;s build something<br /><span className="text-accent">your customers love.</span>
              </h2>
              <p className="text-text-secondary mb-8" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>Tell us about your business and what you&apos;re looking for. We&apos;ll get back to you within 24 hours.</p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-text-secondary text-sm"><div className="w-9 h-9 bg-accent-bg rounded-[10px] flex items-center justify-center text-base">📧</div><a href="mailto:hello@oakcitymedia.com" className="text-accent no-underline font-medium">hello@oakcitymedia.com</a></div>
                <div className="flex items-center gap-3 text-text-secondary text-sm"><div className="w-9 h-9 bg-accent-bg rounded-[10px] flex items-center justify-center text-base">📍</div>Raleigh, NC — Serving the Triangle</div>
                <div className="flex items-center gap-3 text-text-secondary text-sm"><div className="w-9 h-9 bg-accent-bg rounded-[10px] flex items-center justify-center text-base">⏱️</div>Typical response within 24 hours</div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-bg border-t border-border px-4 md:px-8 py-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-text-muted text-sm">© 2026 Oak City Media · Raleigh, NC</div>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:hello@oakcitymedia.com" className="text-text-muted text-sm no-underline hover:text-accent transition-colors">Email</a>
          </div>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-99 p-3 bg-bg-white border-t border-border">
        <a href="#contact" className="block text-center bg-accent text-white py-3.5 rounded-full font-bold text-sm no-underline">Get In Touch →</a>
      </div>
    </>
  );
}
