// Location landing page data. Each location gets genuinely local context,
// not a Mad-Libs substitution, so Google treats these as real pages.

export interface LocationData {
  slug: string;
  displayName: string; // "Raleigh, NC"
  shortName: string; // "Raleigh"
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSub: string;
  localContext: string; // 2-3 sentences about the area
  population: string; // "~470,000"
  whyLocalMatters: Array<{ title: string; desc: string }>;
  neighboringTowns: string[]; // free text names, linked to location pages if slug exists
  popularIndustries: string[]; // industry slugs from industries.ts
}

export const locations: LocationData[] = [
  {
    slug: "raleigh",
    displayName: "Raleigh, NC",
    shortName: "Raleigh",
    metaTitle: "Web Design in Raleigh, NC | Oak City Media",
    metaDescription:
      "Custom websites for Raleigh businesses. Hand-coded, mobile-first, built to rank. Serving downtown, North Raleigh, and the full Triangle. 14-day turnaround.",
    heroEyebrow: "Web design in the capital",
    heroHeadline: "Raleigh websites, built by people who",
    heroHeadlineAccent: "actually live here.",
    heroSub:
      "We're based in Rolesville, we drive to downtown Raleigh for lunch, and we know the difference between a Cameron Village boutique and a North Hills flagship. When we say \"local,\" we mean it.",
    localContext:
      "Raleigh is the economic engine of the Triangle — state capital, NC State's home, a booming tech corridor, and one of the fastest-growing metros in the country. Small businesses here compete for attention in a city that keeps adding new residents every month. A site that ranks on Google and loads fast isn't optional anymore — it's survival.",
    population: "~470,000",
    whyLocalMatters: [
      {
        title: "We know the neighborhoods.",
        desc: "Five Points, Cameron Village, North Hills, Downtown, Brier Creek, Garner-adjacent — each has its own customer base and its own rhythm. We write copy that actually speaks to who walks into your store.",
      },
      {
        title: "We know what's growing.",
        desc: "The explosion in North Raleigh, the Fayetteville Street renaissance, the Dix Park effect on Boylan Heights — we're tracking where new customers are coming from, and we build sites to catch them.",
      },
      {
        title: "We meet in person.",
        desc: "No Zoom-only relationships. We'll come to your business, shoot your space, meet your team, and understand what you do — so the site we build actually sounds like you.",
      },
    ],
    neighboringTowns: [
      "Wake Forest",
      "Rolesville",
      "Durham",
      "Cary",
      "Apex",
      "Garner",
    ],
    popularIndustries: ["restaurants", "law-firms", "dentists", "home-services"],
  },
  {
    slug: "wake-forest",
    displayName: "Wake Forest, NC",
    shortName: "Wake Forest",
    metaTitle: "Web Design in Wake Forest, NC | Oak City Media",
    metaDescription:
      "Custom websites for Wake Forest businesses. Built by neighbors in Rolesville. Fast, mobile-first, and optimized for North Raleigh's fastest-growing town.",
    heroEyebrow: "Web design in Wake Forest",
    heroHeadline: "Websites for the",
    heroHeadlineAccent: "fastest-growing town in Wake County.",
    heroSub:
      "Wake Forest is booming — new restaurants on White Street, new subdivisions every month, new small businesses chasing all that new money. If your website still looks like it did in 2018, you're losing the new neighbors to competitors who figured it out.",
    localContext:
      "Wake Forest has nearly doubled in population over the past 15 years, and the small business scene on White Street and around the historic downtown has exploded with it. The demographic is young-family-professional with real disposable income — but they're demanding. They expect a website that works on their phone, loads instantly, and makes booking easy. Anything less and they drive to North Raleigh.",
    population: "~50,000",
    whyLocalMatters: [
      {
        title: "We're 10 minutes away.",
        desc: "Based in Rolesville, which is practically Wake Forest. We can be at your shop on White Street in 15 minutes. No remote-only agency is showing up to shoot your grand opening.",
      },
      {
        title: "We know the audience.",
        desc: "Young families moving up from Raleigh. Long-timers who remember when Capital was still two lanes. A college town vibe thanks to Southeastern Seminary. We write for all of them.",
      },
      {
        title: "We track the new zip codes.",
        desc: "The Heritage, Traditions, Holding Village, Austin Creek — we know which developments are coming online and when, and we optimize your Google Business listing to catch those new residents the minute they search.",
      },
    ],
    neighboringTowns: ["Rolesville", "Raleigh", "Youngsville", "Franklinton"],
    popularIndustries: ["restaurants", "home-services", "dentists", "law-firms"],
  },
  {
    slug: "rolesville",
    displayName: "Rolesville, NC",
    shortName: "Rolesville",
    metaTitle: "Web Design in Rolesville, NC | Oak City Media",
    metaDescription:
      "Custom websites for Rolesville businesses, built by your neighbors. Based in Rolesville. Fast, mobile-first websites for the fastest-growing small town in the Triangle.",
    heroEyebrow: "Web design in Rolesville",
    heroHeadline: "We're based in Rolesville.",
    heroHeadlineAccent: "We know you by name.",
    heroSub:
      "This is our home. We live here, shop here, and care about this town. If you own a business in Rolesville and want a website built by someone who's actually going to see you at Lowes every weekend, we should talk.",
    localContext:
      "Rolesville has quietly become one of the fastest-growing small towns in North Carolina — population more than doubled in the last decade, with more subdivisions breaking ground every season. That growth means opportunity for local business, but also competition. Getting found by new neighbors before they default to \"Raleigh\" in their Google search is the whole game.",
    population: "~11,000 and climbing fast",
    whyLocalMatters: [
      {
        title: "We literally live here.",
        desc: "Oak City Media is based in Rolesville. We're not a Raleigh agency pretending to serve \"the Triangle.\" If you're in town, we're neighbors — and we prefer it that way.",
      },
      {
        title: "We know the growth corridors.",
        desc: "The Highway 96 expansion, the new rooftops along Burlington Mills, the Heritage Village build-out — we track where the new customers are landing and help your business show up first when they search.",
      },
      {
        title: "We'll shake your hand before we code.",
        desc: "No Zoom kickoff. We come to your business, have a coffee, and understand what you actually do before we write a single line. That's how websites end up sounding like the owner, not like an agency template.",
      },
    ],
    neighboringTowns: ["Wake Forest", "Raleigh", "Youngsville"],
    popularIndustries: ["home-services", "restaurants", "dentists", "law-firms"],
  },
  {
    slug: "durham",
    displayName: "Durham, NC",
    shortName: "Durham",
    metaTitle: "Web Design in Durham, NC | Oak City Media",
    metaDescription:
      "Custom websites for Durham businesses. Mobile-first, fast, and built to rank in the Bull City's competitive local market. Serving all of Durham and Research Triangle.",
    heroEyebrow: "Web design in the Bull City",
    heroHeadline: "Durham websites with",
    heroHeadlineAccent: "taste and teeth.",
    heroSub:
      "Durham has a style of its own — creative, independent, unapologetic. A WordPress template from 2017 doesn't fit here. We build sites that look like Durham feels: bold, thoughtful, and unmistakably yours.",
    localContext:
      "Durham is the Triangle's creative and technical soul — Duke, RTP, a food scene that punches way above its weight, and a small business culture that takes design seriously. The bar is high. Customers here can tell a template from the real thing in three seconds, and they reward businesses that invest in presentation.",
    population: "~290,000",
    whyLocalMatters: [
      {
        title: "We build for Durham taste.",
        desc: "This isn't a market for generic. Whether you're on Ninth Street, downtown by the Pit, or in South Square, your customers expect a site with intention. Every design choice earns its place.",
      },
      {
        title: "We know the ecosystem.",
        desc: "The RTP spillover, the Duke staff economy, the downtown revival, Fullsteam's corner of the world — we build websites that speak to wherever your customers actually spend their time.",
      },
      {
        title: "We compete with Durham standards.",
        desc: "Durham has some of the best small-business design in the state. We build at that level. If your site doesn't look like it belongs next to Cocoa Cinnamon and Rose's, we start over until it does.",
      },
    ],
    neighboringTowns: ["Chapel Hill", "Raleigh", "Cary", "Hillsborough"],
    popularIndustries: ["restaurants", "home-services", "dentists", "law-firms"],
  },
];

export function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

// Named export consumed by app/sitemap.ts
export const locationSlugs: string[] = locations.map((l) => l.slug);
