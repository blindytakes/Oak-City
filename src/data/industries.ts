// Industry landing page data. Each industry is hand-written, not templated,
// so Google doesn't flag this as thin programmatic SEO.

export interface IndustryData {
  slug: string;
  displayName: string;
  shortName: string; // for headlines, e.g. "restaurant"
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string; // italicized/colored portion
  heroSub: string;
  stat: { number: string; label: string };
  problems: Array<{ title: string; desc: string }>;
  ourApproach: { eyebrow: string; headline: string; desc: string };
  capabilities: Array<{ icon: string; title: string; desc: string }>;
  faq: Array<{ q: string; a: string }>;
  exampleBusinessTypes: string[]; // shown in footer / cross-references
}

export const industries: IndustryData[] = [
  {
    slug: "restaurants",
    displayName: "Restaurants",
    shortName: "restaurant",
    metaTitle: "Restaurant Website Design in Raleigh, NC | Oak City Media",
    metaDescription:
      "Custom restaurant websites for Raleigh and the Triangle. Online ordering, reservations, Google Business optimization, professional food photography. 14 days from call to live.",
    heroEyebrow: "Websites for Raleigh restaurants",
    heroHeadline: "Websites that",
    heroHeadlineAccent: "get butts in seats.",
    heroSub:
      "Your food is great. Your website shouldn't be the reason people choose somewhere else. We build restaurant sites that make people hungry — and help them order, book, and find you in seconds.",
    stat: {
      number: "77%",
      label:
        "of diners check a restaurant's website before they decide to eat there",
    },
    problems: [
      {
        title: "Your menu is a 4MB PDF.",
        desc: "Slow to load, impossible to read on a phone, and a nightmare to update every time you 86 a dish. People give up before they even see what you serve.",
      },
      {
        title: "Your photos were taken at 6pm on an iPhone.",
        desc: "Dark, blurry, unappetizing. Meanwhile the chain down the street has professional food photography — and they're getting your business.",
      },
      {
        title: "You're invisible on Google Maps.",
        desc: "No structured data, no review strategy, no Google Business optimization. When someone searches \"best [your food] near me,\" you don't exist.",
      },
    ],
    ourApproach: {
      eyebrow: "How we do it differently",
      headline: "Built by people who actually eat out.",
      desc: "We don't just drop your menu on a template and call it done. We build restaurant sites that understand how people decide where to eat — on their phone, fast, and usually hungry. Every pixel is tuned for the moment someone is about to pick somewhere.",
    },
    capabilities: [
      {
        icon: "📱",
        title: "Live-editable menus",
        desc: "Update your menu in 2 minutes from your phone. Add specials, mark items as sold out, change prices — no web developer, no hourly charge.",
      },
      {
        icon: "📸",
        title: "Professional food photography",
        desc: "We come to your restaurant and shoot your food the way it actually looks. Homepage hero, menu thumbnails, social media — the full set.",
      },
      {
        icon: "🍽️",
        title: "Online ordering + reservations",
        desc: "Deep integration with Toast, Square, ChowNow, Resy, OpenTable — or we build you a custom flow that skips the fees entirely.",
      },
      {
        icon: "📍",
        title: "Google Business mastery",
        desc: "We optimize your Google Business profile alongside your site so you show up in the map pack when locals search \"restaurants near me.\"",
      },
      {
        icon: "⭐",
        title: "Review funnel",
        desc: "Happy customers get walked to Google. Unhappy ones get walked to you first. Your average rating climbs, your reputation compounds.",
      },
      {
        icon: "📸",
        title: "Instagram sync",
        desc: "Your latest posts pull onto your site automatically. Your site always looks current — even if you never log in.",
      },
    ],
    faq: [
      {
        q: "Can I update the menu myself?",
        a: "Yes. We give you a simple dashboard — most clients learn it in 2 minutes. Add specials, change prices, mark items as sold out, all from your phone.",
      },
      {
        q: "What if I already use Toast or Square for ordering?",
        a: "We integrate directly with whatever you're using. Your site can show your live menu and handle ordering without you changing any of your back-of-house systems.",
      },
      {
        q: "Do you actually do the food photography?",
        a: "Yes. It's included in our Growth tier or higher. We come to your restaurant, shoot your hero dishes, and deliver edited photos ready for web and social.",
      },
      {
        q: "How long does it take?",
        a: "14 days from signed contract to live site. We've built this fast on purpose — you shouldn't have to wait three months to stop losing business.",
      },
    ],
    exampleBusinessTypes: [
      "Fine dining",
      "Fast casual",
      "Bars & breweries",
      "Food trucks",
      "Coffee shops",
      "Bakeries",
    ],
  },
  {
    slug: "law-firms",
    displayName: "Law Firms",
    shortName: "law firm",
    metaTitle: "Law Firm Website Design in Raleigh, NC | Oak City Media",
    metaDescription:
      "Websites for Raleigh law firms that convert visitors into consultations. Live chat, practice area SEO, case results display. Built in 14 days.",
    heroEyebrow: "Websites for Raleigh law firms",
    heroHeadline: "Sites that turn clicks into",
    heroHeadlineAccent: "consultations.",
    heroSub:
      "79% of legal consumers hire the first attorney who responds. Your website should be closing cases, not making them wait. We build law firm sites that load in under a second and convert.",
    stat: {
      number: "79%",
      label:
        "of legal consumers hire the first attorney who responds to their inquiry",
    },
    problems: [
      {
        title: "Your site takes 6 seconds to load.",
        desc: "Half your potential clients bounce before your homepage even finishes rendering. Every second of delay is a case lost to the firm down the street.",
      },
      {
        title: "Your practice areas are buried.",
        desc: "Google can't rank what users can't find. If someone is searching \"personal injury attorney Raleigh,\" they should land on that exact page — not your homepage.",
      },
      {
        title: "No live chat, no after-hours capture.",
        desc: "Accidents happen at 11pm. Legal questions don't wait for office hours. If your site doesn't respond at night, a competitor's will.",
      },
    ],
    ourApproach: {
      eyebrow: "How we do it differently",
      headline: "Built like you're closing, not publishing.",
      desc: "A law firm website isn't a brochure — it's a lead machine. We build every page around one goal: turning the person who just Googled their legal problem into a booked consultation on your calendar. Fast pages. Clear calls to action. Chat that actually captures.",
    },
    capabilities: [
      {
        icon: "⚡",
        title: "Sub-second load times",
        desc: "Your pages load in under a second, mobile or desktop. No spinners, no blank screens, no bounce. Speed is a feature.",
      },
      {
        icon: "💬",
        title: "Live chat + AI intake",
        desc: "24/7 chat that qualifies leads, captures contact info, and routes urgent matters to you immediately. Every lead gets a first response in seconds.",
      },
      {
        icon: "📋",
        title: "Online consultation booking",
        desc: "Clients pick a time, answer qualifying questions, and land on your calendar. No back-and-forth emails. No missed opportunities.",
      },
      {
        icon: "⚖️",
        title: "Practice area pages that rank",
        desc: "Each practice area gets its own optimized page targeting specific search intent. Instead of one homepage, you rank for 10 high-intent queries.",
      },
      {
        icon: "🏆",
        title: "Case results & verdicts",
        desc: "A dedicated section that turns wins into social proof. Real results, properly anonymized — the single strongest trust signal on a law firm site.",
      },
      {
        icon: "🔒",
        title: "Confidential contact forms",
        desc: "Forms that feel secure because they are. Encrypted, clearly labeled as confidential, and structured to pre-qualify before it hits your inbox.",
      },
    ],
    faq: [
      {
        q: "Have you built law firm sites before?",
        a: "Yes — Keibler Law Group in Raleigh is in our portfolio. We understand the regulatory sensitivities, the ethics rules around testimonials and case results, and the conversion mechanics specific to legal.",
      },
      {
        q: "Can the live chat actually replace intake staff?",
        a: "Not entirely, but it covers the gaps. It handles initial qualification 24/7, captures contact info, and flags urgent matters immediately. Your paralegal follows up — instead of missing the lead entirely.",
      },
      {
        q: "Will it comply with state bar advertising rules?",
        a: "Yes. We know the rules around testimonials, specialization claims, and case result disclosures. Every page we build follows them.",
      },
      {
        q: "How long does it take?",
        a: "14 days from signed contract to live site. Practice area pages, case results section, live chat, and full SEO setup all included.",
      },
    ],
    exampleBusinessTypes: [
      "Personal injury",
      "Family law",
      "Estate planning",
      "Business / corporate",
      "Criminal defense",
      "Real estate",
    ],
  },
  {
    slug: "dentists",
    displayName: "Dental Practices",
    shortName: "dental practice",
    metaTitle: "Dental Website Design in Raleigh, NC | Oak City Media",
    metaDescription:
      "Websites for Raleigh dentists that fill your chair. Online booking, insurance display, before/after galleries, team photography. 14 days from start to live.",
    heroEyebrow: "Websites for Raleigh dentists",
    heroHeadline: "Dental sites that",
    heroHeadlineAccent: "fill your chair.",
    heroSub:
      "Patients pick their dentist the same way they pick a restaurant — on their phone, in under two minutes. Give them a reason to pick you. We build dental sites that convert browsers into booked appointments.",
    stat: {
      number: "88%",
      label:
        "of patients research a practice online before booking their first appointment",
    },
    problems: [
      {
        title: "No online booking.",
        desc: "The practice down the road lets patients book with three taps. Yours says \"call during business hours.\" Guess which one wins the appointment?",
      },
      {
        title: "Insurance info is hidden.",
        desc: "It's the first question every new patient has. If it's not answered on your homepage, they close the tab and try someone else.",
      },
      {
        title: "Stock photos of strangers smiling.",
        desc: "Patients hire dentists based on trust. If the photos on your site could be anyone's, your practice could be anyone's too.",
      },
    ],
    ourApproach: {
      eyebrow: "How we do it differently",
      headline: "Built for patients, not for you.",
      desc: "Most dental sites are built around what the practice wants to say. We build around what patients need to know — starting with the four questions every new patient asks: Do you take my insurance? Can I book online? What does your office look like? Can I trust you? Answer those four things in 10 seconds and you've already won.",
    },
    capabilities: [
      {
        icon: "📅",
        title: "Online appointment booking",
        desc: "Integrates with your practice management software. Patients book in 60 seconds — no phone tag, no voicemail, no lost leads.",
      },
      {
        icon: "🦷",
        title: "Insurance panel display",
        desc: "The most-asked question, answered upfront. Clear list of accepted insurance on every page. Instant trust signal for new patients.",
      },
      {
        icon: "📸",
        title: "Team + facility photography",
        desc: "We photograph your actual team and your actual office. No stock photos. Patients get to know you before they walk in the door.",
      },
      {
        icon: "✨",
        title: "Before/after galleries",
        desc: "For cosmetic and orthodontic work. HIPAA-compliant, patient-approved, and the single highest-converting element on a dental site.",
      },
      {
        icon: "⭐",
        title: "Review integration",
        desc: "Google reviews pulled live onto your site. Patient-generated social proof, refreshed automatically. No fake testimonials, just real ones.",
      },
      {
        icon: "📝",
        title: "Digital new-patient forms",
        desc: "Patients fill out paperwork before they arrive. Your front desk stops being a bottleneck. Your intake time drops by half.",
      },
    ],
    faq: [
      {
        q: "Will it integrate with my practice management software?",
        a: "Most likely yes — Dentrix, Eaglesoft, Open Dental, Curve Dental, we've worked with all of them. We map your booking flow to whatever system you use.",
      },
      {
        q: "How does the before/after gallery work with HIPAA?",
        a: "We only use photos with signed patient releases, and we build in an approval workflow so nothing goes live without sign-off. It's the single most persuasive element on your site — worth doing right.",
      },
      {
        q: "Do you do the team photography?",
        a: "Yes. Included in our Growth tier. We come to your practice, shoot your team and facility, and deliver edited photos that actually look like your office.",
      },
      {
        q: "How long until it's live?",
        a: "14 days. Online booking, insurance display, team photos, reviews integration — the full build.",
      },
    ],
    exampleBusinessTypes: [
      "General dentistry",
      "Cosmetic dentistry",
      "Orthodontics",
      "Pediatric dentistry",
      "Oral surgery",
      "Periodontics",
    ],
  },
  {
    slug: "home-services",
    displayName: "Home Services",
    shortName: "home services business",
    metaTitle: "Home Services Website Design in Raleigh, NC | Oak City Media",
    metaDescription:
      "Websites for Raleigh HVAC, plumbing, electrical, and landscaping companies. Click-to-call, service area maps, emergency banners, financing display. 14-day turnaround.",
    heroEyebrow: "Websites for Raleigh home services pros",
    heroHeadline: "Websites that make your",
    heroHeadlineAccent: "phone ring.",
    heroSub:
      "When a pipe bursts at 11pm, people don't scroll — they click the first result that loads. Make sure that's you. We build home services sites with one job: getting the call.",
    stat: {
      number: "76%",
      label:
        "of people who search for a local service call the business within 24 hours",
    },
    problems: [
      {
        title: "Click-to-call is buried.",
        desc: "Emergency customers won't hunt for your phone number. If it's not in the top-right corner, big enough to tap with cold hands, they're calling someone else.",
      },
      {
        title: "Your service area is a mystery.",
        desc: "\"Serving the Triangle\" isn't good enough. Someone in Apex wants to know — specifically — if you come to their zip code before they waste a call.",
      },
      {
        title: "Your Google listing beats your website.",
        desc: "Which is great, except you don't own your Google listing the way you own your site. One algorithm change and your leads disappear.",
      },
    ],
    ourApproach: {
      eyebrow: "How we do it differently",
      headline: "Built for the person with a problem right now.",
      desc: "Home services customers aren't browsing. They have a broken water heater, a dead AC, a power outage, overgrown hedges. They need you now. Every page we build is optimized for that moment — big phone number, clear service area, emergency-ready, financing shown upfront.",
    },
    capabilities: [
      {
        icon: "📞",
        title: "Click-to-call everywhere",
        desc: "Sticky header, floating button, every section footer, every service page. Your phone number is always one tap away. No hunting.",
      },
      {
        icon: "🗺️",
        title: "Service area map + zip lookup",
        desc: "Visual map of your service area plus a zip code checker. Customers confirm coverage in 5 seconds — no wasted calls on your end.",
      },
      {
        icon: "🚨",
        title: "Emergency service banner",
        desc: "Toggle an after-hours emergency banner on and off by time of day. Premium rates, clear expectations, captured leads that would've gone to a competitor.",
      },
      {
        icon: "💳",
        title: "Financing display",
        desc: "Partner with a financing provider? We show rates and terms upfront on every estimate page. Jobs close faster when the \"how do I pay\" question is already answered.",
      },
      {
        icon: "📸",
        title: "Before / after galleries",
        desc: "For roofing, landscaping, remodels, deep cleans — the work speaks for itself when you show it. Sortable by service, searchable by area.",
      },
      {
        icon: "⭐",
        title: "Review aggregation",
        desc: "Google, Yelp, Angi, BBB — pulled together onto your site. One-stop trust signal for customers deciding who to call.",
      },
    ],
    faq: [
      {
        q: "What trades do you work with?",
        a: "HVAC, plumbing, electrical, roofing, landscaping, cleaning, pest control, pool service — anything where customers have an urgent need and call-tracking matters.",
      },
      {
        q: "Can we track calls from the site?",
        a: "Yes. We set up call tracking so you know exactly which leads came from the website vs. Google Business vs. paid ads. You stop guessing which marketing actually works.",
      },
      {
        q: "What about emergency / after-hours?",
        a: "We build the banner with toggle controls. Flip it on at 5pm, off at 8am. Premium rates shown clearly. Emergency leads captured instead of lost.",
      },
      {
        q: "How long until it's live?",
        a: "14 days from contract to live. Service area map, click-to-call, emergency banner, financing, galleries, and review aggregation — all included.",
      },
    ],
    exampleBusinessTypes: [
      "HVAC",
      "Plumbing",
      "Electrical",
      "Roofing",
      "Landscaping",
      "Cleaning services",
    ],
  },
];

export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}

// Named export consumed by app/sitemap.ts
export const industrySlugs: string[] = industries.map((i) => i.slug);
