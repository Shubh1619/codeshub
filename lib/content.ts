export interface Service {
  slug: string;
  name: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software",
    name: "Custom Software Development",
    description:
      "Bespoke desktop and web applications engineered around your exact workflows - not a configurable off-the-shelf tool.",
    items: ["Web & desktop apps", "Automation & tooling", "Integrations", "Legacy modernization"],
  },
  {
    slug: "websites",
    name: "Website & Web App Development",
    description:
      "Fast, accessible marketing sites and full web applications built to convert visitors and carry real workloads.",
    items: ["Marketing sites", "Web applications", "Headless & CMS", "Performance & SEO"],
  },
  {
    slug: "mobile",
    name: "Android / iOS App Development",
    description:
      "Native-quality mobile experiences delivered with React Native and Flutter so one team ships both platforms.",
    items: ["React Native", "Flutter", "Cross-platform SDKs", "App Store releases"],
  },
  {
    slug: "saas",
    name: "SaaS Development",
    description:
      "End-to-end subscription products from a thin MVP to a multi-tenant platform with billing and analytics.",
    items: ["Multi-tenant architecture", "Billing & subscriptions", "Auth & roles", "Usage analytics"],
  },
  {
    slug: "paas",
    name: "PaaS Development",
    description:
      "Internal developer platforms and deployment tooling that let your teams ship software instead of fighting infrastructure.",
    items: ["Deployment pipelines", "Internal platforms", "CI/CD", "Infrastructure as code"],
  },
  {
    slug: "api-backend",
    name: "API & Backend Development",
    description:
      "Reliable, documented APIs and services that become the backbone your product and partners depend on.",
    items: ["REST & GraphQL", "Event-driven services", "Database design", "Documentation"],
  },
  {
    slug: "ai-ml",
    name: "AI/ML Solutions",
    description:
      "Practical applied AI - classification, retrieval, and LLM pipelines wired into products where they add measurable value.",
    items: ["LLM applications", "Search & RAG", "Computer vision", "Predictive models"],
  },
  {
    slug: "cloud",
    name: "Cloud & Deployment",
    description:
      "Secure, cost-efficient infrastructure on AWS, GCP, and Azure with observability and scaling baked in.",
    items: ["AWS / GCP / Azure", "Containerization", "Monitoring & alerts", "Cost optimization"],
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    description:
      "Ongoing care for the products you already run - patches, features, uptime, and a team on call when it matters.",
    items: ["SLA-backed support", "Bug fixes & patches", "Feature upgrades", "24/7 monitoring"],
  },
];

export const offerings = [
  { name: "Software Development", href: "/services#custom-software" },
  { name: "Website Development", href: "/services#websites" },
  { name: "Mobile App Development", href: "/services#mobile" },
  { name: "SaaS Products", href: "/services#saas" },
  { name: "PaaS Solutions", href: "/services#paas" },
  { name: "Careers & Internships", href: "/careers" },
];

export const buildStrip = [
  "Software",
  "Websites",
  "Mobile Apps",
  "SaaS",
  "PaaS",
  "AI Solutions",
];

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  features: string[];
  tags: string[];
  accent: string;
  cta: string;
  href: string;
}

export const products: Product[] = [
  {
    slug: "launchpad",
    name: "LaunchPad",
    tagline: "Project & delivery tracking for client-facing agencies",
    problem:
      "Agencies juggle tickets, milestones, and client expectations across disconnected tools, so scope drifts and status lives in someone's head.",
    features: [
      "Milestone-based roadmaps with buffers",
      "Client-ready status snapshots",
      "Time & budget burn-down",
      "Scope-change log with approvals",
      "Slack + email digest alerts",
    ],
    tags: ["Live", "SaaS", "Agency Ops"],
    accent: "#6d5bff",
    cta: "Request Demo",
    href: "/products#launchpad",
  },
  {
    slug: "clienthub",
    name: "ClientHub",
    tagline: "A white-label portal for sharing work with clients",
    problem:
      "Deliverables get lost in email threads and drive links, making approvals slow and handoff messy for both sides.",
    features: [
      "White-labeled client workspace",
      "Deliverable uploads with versioning",
      "Inline feedback & approvals",
      "Per-client permissions",
      "Audit trail of every change",
    ],
    tags: ["Live", "SaaS", "White-Label"],
    accent: "#22d3ee",
    cta: "Request Demo",
    href: "/products#clienthub",
  },
  {
    slug: "pulseboard",
    name: "PulseBoard",
    tagline: "Real-time uptime & release monitoring for small teams",
    problem:
      "Small dev teams can't afford full observability stacks, but still need to know when a release breaks or a service degrades.",
    features: [
      "Synthetic uptime checks",
      "Release-change markers",
      "Anomaly alerts to Slack",
      "Simple single-service dashboard",
      "14-day free trial, no card",
    ],
    tags: ["Live", "SaaS", "Free Trial"],
    accent: "#f472b6",
    cta: "Start Free Trial",
    href: "/products#pulseboard",
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  result: string;
  accent: string;
  metrics: { value: string; label: string }[];
}

export const caseStudies: CaseStudy[] = [
{
    slug: "fieldmate",
    title: "FieldMate",
    category: "SaaS",
    summary: "Field-service scheduling and dispatch with live technician tracking.",
    problem:
      "Field-service teams schedule jobs on shared spreadsheets and phone calls. Double-bookings, missed windows, and no live view of technician availability or job history are routine.",
    solution:
      "We built a scheduling platform with drag-and-drop dispatch, GPS-checked technician arrival, automatic re-routing on cancellations, and a customer-facing booking portal. A companion mobile app lets technicians claim jobs and log completion notes from the field.",
    technology: ["React", "PostgreSQL", "Node.js", "Mapbox", "Redis", "Docker"],
    result:
      "Dispatch time per job drops from minutes to seconds, double-bookings fall to zero, and technicians regain billable hours every week.",
    accent: "#6d5bff",
    metrics: [
      { value: "400%", label: "less dispatch time per job" },
      { value: "0", label: "double-bookings in operations" },
      { value: "+5h", label: "billable hours / tech / week" },
    ],
  },
  {
    slug: "retailscope",
    title: "RetailScope",
    category: "AI / ML",
    summary: "Demand forecasting that keeps the right products in stock.",
    problem:
      "Retailers over-order popular SKUs and run out of slow movers, tying up cash in dead inventory while losing sales on the items customers actually want.",
    solution:
      "We trained an ensemble of gradient-boosted and time-series models on sales history, weather, and promotions. The forecast feeds a dashboard where buyers see suggested reorder quantities at a glance, and a warehouse API keeps stock levels aligned in real time.",
    technology: ["Python", "scikit-learn", "Prophet", "FastAPI", "PostgreSQL", "AWS"],
    result:
      "Stockout rates fall, dead inventory shrinks, and the cash released from reduced over-ordering funds the next phase of the rollout.",
    accent: "#f472b6",
    metrics: [
      { value: "38%", label: "fewer stockouts" },
      { value: "-20%", label: "dead inventory" },
      { value: "2 yrs", label: "payback on the build" },
    ],
  },
  {
    slug: "ledgerflow",
    title: "LedgerFlow",
    category: "Business Software",
    summary: "Invoice matching and reconciliation without the spreadsheet grind.",
    problem:
      "Finance teams spend days each month matching invoices to purchase orders and chasing discrepancies across spreadsheets.",
    solution:
      "We built a document-processing pipeline that extracts line items from invoices, auto-matches them against purchase orders, flags only genuine exceptions, and posts reconciled batches straight into the existing ERP via API.",
    technology: ["TypeScript", "Node.js", "OCR", "PostgreSQL", "Serverless"],
    result:
      "Month-end close drops from days to hours, and the finance team moves from manual matching to reviewing exceptions.",
    accent: "#22d3ee",
    metrics: [
      { value: "3d → 6h", label: "month-end close" },
      { value: "40h", label: "saved every month" },
      { value: "95%", label: "invoices auto-matched" },
    ],
  },
  {
    slug: "rallypoint",
    title: "RallyPoint",
    category: "Mobile",
    summary: "Class booking and memberships in a single native app.",
    problem:
      "Boutique studios take bookings by phone and text. No-shows are common, members can't manage their own schedules, and class capacity is often wasted.",
    solution:
      "We delivered iOS and Android apps with in-app class booking, automated waitlists, membership management, and push reminders, plus a small admin console where staff manage schedules, passes, and live occupancy.",
    technology: ["React Native", "TypeScript", "Stripe", "Firebase", "Push notifications"],
    result:
      "No-shows fall by nearly half, average attendance per class rises, and members rate the app highly across both stores.",
    accent: "#8b7bff",
    metrics: [
      { value: "-47%", label: "class no-shows" },
      { value: "+24%", label: "average attendance" },
      { value: "4.8★", label: "app store rating" },
    ],
  },
  {
    slug: "nordhavn",
    title: "Nordhavn",
    category: "Web",
    summary: "A fast, conversion-focused site for a design studio.",
    problem:
      "Design studios are let down by slow template sites that rank poorly, do nothing to position premium work, and fail to capture qualified leads.",
    solution:
      "We rebuilt the site as a static-first React project with a case-study portfolio, editorial layouts, and a content model the studio can update itself, with optimized assets served in next-gen formats.",
    technology: ["React", "Sanity CMS", "Tailwind", "Vercel"],
    result:
      "Performance scores land in the high 90s, organic traffic grows, and qualified enquiry completions double.",
    accent: "#f59e0b",
    metrics: [
      { value: "40s → 98", label: "Lighthouse score" },
      { value: "+150%", label: "organic traffic" },
      { value: "2x", label: "enquiry completions" },
    ],
  },
  {
    slug: "opsdeck",
    title: "OpsDeck",
    category: "SaaS",
    summary: "A self-service platform for teams that ship often.",
    problem:
      "Engineers wait on tickets for every environment, service, and pipeline change, and a single platform engineer becomes the bottleneck for shipping.",
    solution:
      "We built a lightweight internal developer platform with self-serve service scaffolds, one-click environment promotion, configurable CI/CD, and observability wired into every new service by default.",
    technology: ["Kubernetes", "Go", "Terraform", "Argo CD", "Prometheus", "Grafana"],
    result:
      "Staging environments spin up in minutes instead of days, the ops ticket queue disappears, and deploy frequency doubles without adding headcount.",
    accent: "#22c55e",
    metrics: [
      { value: "days → min", label: "to spin up an env" },
      { value: "2x", label: "deploy frequency" },
      { value: "0", label: "ops ticket backlog" },
    ],
  },
];

export interface Track {
  name: string;
  description: string;
  stack: string;
}

export const tracks: Track[] = [
  {
    name: "Web Development",
    description:
      "Build responsive, production-grade websites with modern frameworks from wireframe to deploy.",
    stack: "HTML · CSS · JavaScript · React",
  },
  {
    name: "Python",
    description:
      "Automation, backend services, and data scripts - the language that powers most tooling.",
    stack: "Python · FastAPI · SQL · Testing",
  },
  {
    name: "JavaScript",
    description:
      "Master the language of the web - DOM, async patterns, modern syntax, and the toolchain.",
    stack: "JavaScript · TypeScript · Node.js",
  },
  {
    name: "App Development",
    description:
      "Ship a real mobile app to a test device using cross-platform frameworks the industry uses.",
    stack: "React Native · Expo · API integration",
  },
  {
    name: "AI/ML",
    description:
      "Work through applied machine-learning problems - data prep, training, and deployment.",
    stack: "Python · scikit-learn · Jupyter · APIs",
  },
  {
    name: "Full Stack Development",
    description:
      "Own a complete product - database, backend API, and front-end - end to end.",
    stack: "React · Node.js · PostgreSQL · Docker",
  },
];

export const internshipCallouts = [
  {
    title: "Project-based",
    description:
      "You work on a real, shippable assignment - not endless tutorial videos with no output.",
  },
  {
    title: "Certificates of completion",
    description:
      "Receive a verifiable certificate that documents the project you actually built.",
  },
  {
    title: "Live projects",
    description:
      "Where possible, you contribute to live client and product work under mentorship.",
  },
  {
    title: "Mentorship",
    description:
      "A working developer reviews your code, unblocks you, and gives honest feedback.",
  },
];

export const internshipSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Submit the application and tell us what you want to build. No prior experience required - just motivation.",
  },
  {
    step: "02",
    title: "Project assignment",
    description:
      "You're matched to a track and assigned a project sized for your current skill level.",
  },
  {
    step: "03",
    title: "Mentorship",
    description:
      "Work through the build with weekly code reviews, short lessons, and live support from a developer.",
  },
  {
    step: "04",
    title: "Certificate",
    description:
      "Showcase your finished project and earn a certificate verifying what you delivered.",
  },
];

export interface Opening {
  title: string;
  type: "Full-time" | "Part-time" | "Internship";
  location: string;
  description: string;
  stack: string;
  status: string;
}

export const openings: Opening[] = [
  {
    title: "Web Development Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Build responsive, production-grade websites and web applications with modern frameworks from wireframe to deploy.",
    stack: "HTML · CSS · JavaScript · React",
    status: "Open · Applications accepted",
  },
  {
    title: "Python Development Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Automation, backend services, and data-driven tools with the language that powers most tooling.",
    stack: "Python · FastAPI · SQL · Testing",
    status: "Open · Applications accepted",
  },
  {
    title: "JavaScript Development Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Master the language of the web - DOM, async patterns, modern syntax, and the toolchain.",
    stack: "JavaScript · TypeScript · Node.js",
    status: "Open · Applications accepted",
  },
  {
    title: "App Development Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Ship a real mobile app to a test device using cross-platform frameworks the industry uses.",
    stack: "React Native · Expo · API integration",
    status: "Open · Applications accepted",
  },
  {
    title: "AI/ML Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Work through applied machine-learning problems - data prep, training, and deployment.",
    stack: "Python · scikit-learn · Jupyter · APIs",
    status: "Open · Applications accepted",
  },
  {
    title: "Full Stack Development Intern",
    type: "Internship",
    location: "Remote / Hybrid",
    description:
      "Own a complete product - database, backend API, and front-end - end to end.",
    stack: "React · Node.js · PostgreSQL · Docker",
    status: "Open · Applications accepted",
  },
];

export const hiringSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Send in your resume and tell us what you'd like to build. You'll get a straight answer either way.",
  },
  {
    step: "02",
    title: "Review",
    description:
      "We look at your resume, portfolio or GitHub, and how you approach real problems.",
  },
  {
    step: "03",
    title: "Interview",
    description:
      "A practical conversation with the team - no trick questions, just how you think and build.",
  },
  {
    step: "04",
    title: "Start building",
    description:
      "You join a real project with a mentor and start shipping from week one.",
  },
];


