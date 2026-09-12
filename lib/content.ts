export const siteMeta = {
  name: "Codeshub",
  url: "https://codeshub.in",
  email: "contact@codeshub.in",
  phoneIntl: "+917841951305",
  phoneDisplay: "+91 78419 51305",
  region: "India",
  sameAs: [
    "https://www.linkedin.com/company/codeshubit/",
    "https://www.instagram.com/codeshub.in/",
    "https://www.facebook.com/profile.php?id=61594363167517",
  ],
};

export interface Service {
  slug: string;
  name: string;
  description: string;
  startingAt: string;
  items: string[];
  details: string[];
  useCases: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    slug: "custom-software",
    name: "Custom Software Development",
    description:
      "Bespoke desktop and web applications engineered around your exact workflows - not a configurable off-the-shelf tool.",
    startingAt: "₹1,50,000",
    items: ["Web & desktop apps", "Automation & tooling", "Integrations", "Legacy modernization"],
    details: [
      "Off-the-shelf products force your process to fit their feature list. Custom software is the opposite: we design and build applications around the exact way your team works, then change them as your business changes. Every build starts with discovery, so we understand the workflow we are automating before we write a line of code.",
      "We build internal tools, client portals, order and inventory systems, and back-office applications that remove manual effort. Because we own the full stack, you get one team accountable for the result - not a hand-off between agencies and contractors.",
      "Typical engagements start with a written statement of work that names the workflow, the users, and the success metric. We then build in small working increments so you can use and react to the system as it takes shape, instead of waiting for a big-bang launch. Deliverables include documentation, tests, deployment, and a handover your team can actually maintain - or we stay on as your ongoing development partner.",
      "Who benefits? Growing companies whose process is bending around off-the-shelf tools, internal teams drowning in manual data entry, and departments held hostage by legacy systems nobody understands. A typical build runs two to four months: discovery and schema design up front, then fortnightly release cycles where you see working software on real data. We cover the parts teams forget - role-based access, audit logging, data migration from the old spreadsheets or systems, and importing years of history cleanly. On handover you get the source, tests, deployment pipeline, and a playbook for the hundred small questions that follow a launch. If you do not have an in-house team yet, our engineers become your team: we run the sprints, keep the roadmap, and hand over knowledge without drama.",
    ],
    useCases: [
      "Internal operations dashboards",
      "Order, inventory & CRM systems",
      "Client portals & self-service apps",
      "Legacy system modernization",
      "Workflow & document automation",
    ],
    technologies: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Python", "Docker"],
  },
  {
    slug: "websites",
    name: "Website & Web App Development",
    description:
      "Fast, accessible marketing sites and full web applications built to convert visitors and carry real workloads.",
    startingAt: "₹50,000",
    items: ["Marketing sites", "Web applications", "Headless & CMS", "Performance & SEO"],
    details: [
      "A website is your first impression and often your first filter of leads, so speed and clarity are not optional. We build fast, accessible marketing sites that score well on Core Web Vitals and rank for the searches that matter to your business. Content teams can update pages themselves through a simple CMS.",
      "When your needs grow past information, we extend the same codebase into a web application with dashboards, accounts, payments, or whatever your product demands. The result is one site that scales from brochure to product without a rebuild.",
      "Every site ships with technical SEO baked in - fast static pages, one clear headline hierarchy, descriptive metadata, and an audit trail of on-page changes for your content team. We benchmark load time and Core Web Vitals before and after launch, so 'faster' is measured, not assumed.",
      "Who is this for? Early-stage founders who need a credible company site fast, established businesses replacing an outdated website, and teams that want to publish content without depending on developers. A typical build is three to six weeks: strategy and copy outline in week one, design and build across weeks two to four, then SEO touches - structured data, sitemap, canonical URLs - and launch monitoring in the final week. We wire analytics and conversion events ourselves, so 'how many leads came from here' has a real answer from day one. For content-heavy businesses we connect a headless CMS that maps to your existing roles, and for web applications we extend the same codebase instead of starting over. The recurring outcome: the site you ship is one you can actually maintain and grow.",
    ],
    useCases: [
      "Marketing & company websites",
      "Landing pages & campaign sites",
      "Portfolio & content sites",
      "Client portals & web apps",
      "Headless CMS setups",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Sanity", "TypeScript", "SEO / CWV optimization"],
  },
  {
    slug: "mobile",
    name: "Android / iOS App Development",
    description:
      "Native-quality mobile experiences delivered with React Native and Flutter so one team ships both platforms.",
    startingAt: "₹1,00,000",
    items: ["React Native", "Flutter", "Cross-platform SDKs", "App Store releases"],
    details: [
      "Shipping two native apps doubles your cost and slows your roadmap. We build with React Native and Flutter, so one codebase ships to both the App Store and Google Play with native feel and performance - including gestures, push notifications, offline sync, and app store compliance.",
      "We handle the full lifecycle: architecture, UI, backend integration, store submissions, and the analytics that tell you whether the app is actually being used. For businesses with an existing platform, we can also build a companion app that talks to your current APIs.",
      "Before launch we review every screen against accessibility and platform guidelines, and we plan submissions so approval delays never become launch delays. After release, analytics dashboards show which screens convert, where users drop off, and what the next version should improve.",
      "Who is this for? Service businesses taking bookings, logistics teams running field operations, and existing platforms that need a companion app. A typical build runs six to twelve weeks: screen and flow validation first, a working alpha on both stores in the middle, then a production beta before launch. We make the decisions that quietly decide whether an app succeeds - which states to cache offline, how push permissions are handled on both platforms, and how sign-in works so a user who uninstalls and returns still has their data. We also plan store listings, screenshots, and release notes as part of the build, because an app that cannot be found or trusted does not ship for long. If you already have a backend, the app connects to your existing APIs; if not, we build the mobile backend too, so you never manage two vendors for one product.",
    ],
    useCases: [
      "Customer apps & booking apps",
      "Field worker & delivery apps",
      "On-demand service apps",
      "Companion apps for existing platforms",
      "Ride, event & scheduling apps",
    ],
    technologies: ["React Native", "Flutter", "Expo", "Firebase", "App Store / Play Store"],
  },
  {
    slug: "saas",
    name: "SaaS Development",
    description:
      "End-to-end subscription products from a thin MVP to a multi-tenant platform with billing and analytics.",
    startingAt: "₹2,50,000",
    items: ["Multi-tenant architecture", "Billing & subscriptions", "Auth & roles", "Usage analytics"],
    details: [
      "A SaaS product lives or dies on its architecture. We structure every build as multi-tenant from day one, so each customer gets isolated data and billing without a rewrite later. You start with a focused MVP that reaches paying users fast, then add capabilities as revenue supports them.",
      "Beyond the code, we wire in the parts that make a SaaS actually run: subscription billing, role-based access, usage analytics, and onboarding. Our own products - LaunchPad, ClientHub, and PulseBoard - are built on the same approach we use for client projects, so the advice is grounded in production reality.",
      "A build usually flows through a thin MVP to collect real signal, then weekly feature releases driven by usage data rather than roadmap guesswork. We also set up the operational layer a launched product needs: error tracking, uptime monitoring, support hand-off, and the billing recovery flows that protect revenue.",
      "Who is this for? Founders validating a subscription idea, teams spinning an internal tool into a product, and agencies reselling white-label software. A typical engagement is four to six months from MVP to launch: scope and pricing model first, the multi-tenant core and billing second, then the first sixty days of real usage - where we cut features that die and sharpen the ones that live. We plan for success too: limits that protect you from outlier customers, index and query design that survives growth, and the compliance touches (terms, privacy, data handling) that investors and procurement teams ask about. The product you ship is architected to survive the moment it stops being your secret.",
    ],
    useCases: [
      "Multi-tenant SaaS platforms",
      "Subscription billing & plans",
      "White-label products",
      "Marketplaces & two-sided platforms",
      "SaaS MVPs heading to launch",
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "Auth / RBAC"],
  },
  {
    slug: "paas",
    name: "PaaS Development",
    description:
      "Internal developer platforms and deployment tooling that let your teams ship software instead of fighting infrastructure.",
    startingAt: "₹2,00,000",
    items: ["Deployment pipelines", "Internal platforms", "CI/CD", "Infrastructure as code"],
    details: [
      "When every deploy is a manual ritual and every environment is a snowflake, shipping slows to a crawl. Internal developer platforms and clean CI/CD pipelines bring the self-service experience your team needs: review apps, one-command deploys, and environments that are reproducible.",
      "We build on infrastructure as code so your stack is versioned, reviewable, and rollbackable. Whether you are on AWS, GCP, or Azure, the outcome is the same - your team spends its energy on features, not on moving releases through a spreadsheet of steps.",
      "Security and cost controls come with the platform, not as an afterthought: least-privilege permissions, staged rollouts, alerting on cost and error budgets, and documented runbooks for incident response. The result is a platform your team trusts enough to deploy to every day.",
    ],
    useCases: [
      "CI/CD pipeline setup",
      "Self-service staging environments",
      "Internal developer portals",
      "GitHub Actions / GitLab CI automation",
      "Infrastructure as code & IaC reviews",
    ],
    technologies: ["AWS", "GCP", "Azure", "Terraform", "Docker", "GitHub Actions", "Kubernetes"],
  },
  {
    slug: "api-backend",
    name: "API & Backend Development",
    description:
      "Reliable, documented APIs and services that become the backbone your product and partners depend on.",
    startingAt: "₹80,000",
    items: ["REST & GraphQL", "Event-driven services", "Database design", "Documentation"],
    details: [
      "The backend is where products get fast or fragile. We design APIs that are consistent, documented, and versioned, with database schemas that survive growth. Whether you need a REST or GraphQL surface for a mobile app, a web dashboard, or third-party partners, you get a service built to be depended on.",
      "For systems that need to react in real time - order events, notifications, data pipelines - we use event-driven architecture that keeps services decoupled and recoverable. Every API ships with tests, monitoring, and documentation your frontend and partners can actually use.",
      "We also design the contracts with your other systems in mind: idempotency for payments, retry and backoff for webhooks, rate limits for public surfaces, and versioning that lets you evolve endpoints without breaking clients. A well-structured backend is the cheapest insurance you can buy for every other part of the product.",
    ],
    useCases: [
      "Product backends & APIs",
      "Payment & webhook integrations",
      "Real-time & event-driven services",
      "Data pipelines & ETL",
      "Third-party API integrations",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST", "Kafka / queues"],
  },
  {
    slug: "ai-ml",
    name: "AI/ML Solutions",
    description:
      "Applied AI you can actually use - customer-facing chatbots, workflow automation, and predictive analytics wired into your products and operations.",
    startingAt: "₹1,50,000",
    items: ["Chatbots & virtual agents", "Workflow automation", "Predictive analytics", "Search & RAG", "Computer vision"],
    details: [
      "Most businesses do not need a research project - they need AI that plugs into a workflow and returns measurable value. We build customer-facing chatbots that answer from your own knowledge base, automate document-heavy processes, and add predictive models that forecast demand, churn, or maintenance needs.",
      "Where accuracy matters, we ground models with retrieval-augmented generation over your data instead of relying on generic answers. Where privacy matters, we deploy on your infrastructure. The work starts with a clear problem statement, not a pile of data - so the ROI is visible from the first release.",
      "Every project opens with a small proof of value on your real data: a working prototype in one to two weeks that we evaluate against a baseline, so you see the lift before committing to a full build. We handle the production details too - evaluation sets, fallback answers, human-in-the-loop review, and guardrails that keep output safe.",
      "Who is this for? Support and sales teams that want a chatbot answering from their own knowledge, operations drowning in documents and invoices, and planners who want forecasts on top of data they already collect. We steer projects toward the three highest-ROI patterns - conversational agents grounded in your content, document and invoice automation, and demand or churn prediction - and away from open-ended 'give us data and see what happens' engagements. You get a proof of value in the first two weeks, measured against a baseline that existed before we started, so every rupee spent has a visible effect. Production concerns - hallucination guardrails, human review queues, rollback, and cost per request - are engineered in, not discovered after launch.",
    ],
    useCases: [
      "Support & sales chatbots",
      "Document & invoice processing automation",
      "Demand & churn prediction",
      "Semantic search over knowledge bases",
      "Quality inspection with computer vision",
    ],
    technologies: ["Python", "LangChain", "LLM APIs", "Pinecone / vector DBs", "scikit-learn", "PyTorch"],
  },
  {
    slug: "cloud",
    name: "Cloud & Deployment",
    description:
      "Secure, cost-efficient infrastructure on AWS, GCP, and Azure with observability and scaling baked in.",
    startingAt: "₹50,000",
    items: ["AWS / GCP / Azure", "Containerization", "Monitoring & alerts", "Cost optimization"],
    details: [
      "We take working code and turn it into infrastructure that is secure, observable, and cheap to run. That means containerized deployments, managed databases with backups, and monitoring that alerts the right person before users notice a problem - not after.",
      "Most teams overpay their first cloud bill. We review existing spend, right-size resources, and put cost guardrails in place. The goal is simple: reliable uptime at a price your business model can actually sustain.",
      "We do the boring-but-important hardening alongside the migration: backups with tested restores, encrypted storage, network isolation, and documented access review. You finish with infrastructure your auditor is happy about and your developers are happy to use.",
      "Who is this for? Teams running on a self-managed server with no disaster plan, startups whose cloud bill grows faster than revenue, and products heading into compliance-heavy sales cycles. We start with an audit that answers three questions: where are we exposed, where are we overpaying, and what happens if a node dies on a Friday night. From there we build the infrastructure that saves careers - automated backups with quarterly restore tests, monitoring that alerts the right person at 2am, least-privilege permissions, and runbooks that survive the person who built it. Most audits pay for themselves within an invoice cycle; we routinely cut cloud spend by twenty to forty percent without touching reliability. Every deployment lands on infrastructure as code, so the environment you test in is byte-for-byte the environment you ship to, and the whole stack can be rebuilt from a repo in minutes instead of from someone's memory.",
    ],
    useCases: [
      "Production deployment setup",
      "Cloud migration & consolidation",
      "Monitoring, alerts & on-call tooling",
      "Cost reduction on cloud bills",
      "Security & backup hardening",
    ],
    technologies: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Cloudflare", "Datadog / Grafana"],
  },
  {
    slug: "maintenance",
    name: "Maintenance & Support",
    description:
      "Ongoing care for the products you already run - patches, features, uptime, and a team on call when it matters.",
    startingAt: "₹15,000/mo",
    items: ["SLA-backed support", "Bug fixes & patches", "Feature upgrades", "24/7 monitoring"],
    details: [
      "Software is never finished - it needs patching, upgrading, and care. We offer SLA-backed support plans that cover bug fixes, security patches, dependency upgrades, and small feature requests, so your product does not rot while you focus on the business.",
      "Every plan includes monitoring of uptime and performance, with the team notified before customers feel an issue. You get predictable monthly pricing, a named engineer who knows your system, and a clear channel when something breaks.",
      "We also keep a prioritized backlog so every report is triaged, sized, and transparent - you see what will be fixed this week versus next, and you can bump priorities when the business needs shift. Quarterly roadmaps turn maintenance from a cost into the continuation of your product strategy.",
    ],
    useCases: [
      "Ongoing support & bug fixes",
      "Security & dependency patching",
      "Small feature development",
      "Uptime & performance monitoring",
      "Emergency incident response",
    ],
    technologies: ["Monitoring stacks", "CI/CD", "Security patching", "Alerting & on-call"],
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

export interface Faq {
  question: string;
  answer: string;
}

export const servicesFaqs: Faq[] = [
  {
    question: "How much does custom software development cost in India?",
    answer:
      "Bespoke applications typically start at ₹1,50,000 and scale with scope, complexity, and team size. Websites start at ₹50,000, mobile apps at ₹1,00,000, and SaaS platforms at ₹2,50,000. Every engagement is scoped to your problem first - you'll get an exact fixed-price quote before we start, not a surprise at the end.",
  },
  {
    question: "How long does it take to build a website or web app?",
    answer:
      "A marketing website usually ships in 3-6 weeks. Full web applications and SaaS products typically take 8-16 weeks depending on scope, with working increments shipped throughout - you're never waiting months to see anything.",
  },
  {
    question: "Can you build a SaaS platform from idea to launch?",
    answer:
      "Yes. We structure every SaaS build as multi-tenant from day one, cover billing, authentication, roles and analytics, and launch a focused MVP first so you reach paying users quickly. Our own products (LaunchPad, ClientHub, PulseBoard) use the same playbook.",
  },
  {
    question: "Do you work with existing codebases and teams?",
    answer:
      "We regularly take over, extend, or modernize existing systems, and we fit into teams with existing engineers. For maintenance we offer SLA-backed plans starting at ₹15,000/mo covering bug fixes, security patches, and small features.",
  },
  {
    question: "What does the engagement process look like?",
    answer:
      "It starts with a free consult and written scope, then moves through build, launch, and support. No deposit for unnecessary discovery work - you'll know the plan, timeline, and price before we write code.",
  },
];

export const contactFaqs: Faq[] = [
  {
    question: "How do I get a quote for my project?",
    answer:
      "Send the enquiry form or email us at contact@codeshub.in with a rough description of what you need. We'll review it, ask any clarifying questions, and come back with an approach and a fixed-price quote.",
  },
  {
    question: "Do you take on small projects?",
    answer:
      "Yes. We regularly handle focused builds - landing pages, small web apps, API integrations, and automation - alongside larger product engagements. If a project is too small for us, we'll tell you honestly and point you to the right path.",
  },
  {
    question: "Can you help with an existing project, not just greenfield builds?",
    answer:
      "Yes. We take over existing codebases, fix and extend systems, modernize legacy applications, and offer SLA-backed maintenance starting at ₹15,000/mo.",
  },
  {
    question: "How soon will I hear back after enquiring?",
    answer:
      "We review every enquiry personally and reply to the contact details you provide. For urgent projects, call us on the number shown or message us on WhatsApp and we'll respond faster.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "custom-software-development-cost-india-2026",
    title: "How Much Does Custom Software Development Cost in India in 2026?",
    excerpt:
      "Realistic starting prices for websites, web apps, mobile apps, and SaaS in India - and the factors that actually move the number.",
    category: "Business & Pricing",
    date: "2026-08-20",
    readTime: "6 min",
    body: [
      "The most common question we get is also the one with the widest range of answers: how much does custom software development cost in India? The honest answer is somewhere between 'a marketing site you can ship this month' and 'a platform you'll fund for a year.' This guide gives you real starting points and the factors that move them.",
      "For a marketing website, expect roughly ₹50,000 and up, depending on the number of pages, content model, and integrations. Web applications start around ₹1,00,000 and scale with complexity - dashboards, user accounts, payments, and third-party integrations each add scope worth planning for. Mobile apps typically start at ₹1,00,000 when built cross-platform, and SaaS products from ₹2,50,000 because they carry architecture decisions (multi-tenancy, billing, auth) from day one.",
      "What actually moves the price? First, scope and specificity. Vague requirements always cost more because discovery and rework fill the gap. Second, integration count - every external system you plug into needs understanding, testing, and maintenance. Third, the quality bar: accessibility, performance budgets, tests, and documentation are not optional extras; they are the difference between software that works and software that lasts.",
      "Our advice is the same for every enquiry: start with the problem, not the feature list. Tell us what you're trying to automate, serve, or sell. You'll get a fixed-price quote before any code is written, and a plan that tells you what it costs to ship something real rather than something that looks finished.",
    ],
  },
  {
    slug: "saas-development-roadmap-idea-to-multi-tenant",
    title: "SaaS Development Roadmap: From Idea to Multi-Tenant Platform",
    excerpt:
      "The architecture and sequencing decisions that turn a SaaS idea into a product that survives its first paying customers.",
    category: "SaaS",
    date: "2026-07-28",
    readTime: "7 min",
    body: [
      "Most SaaS products fail for the same reason: they build too much before they have users, or too little before they have scaling problems. The fix is sequencing. Start with the smallest product that solves one painful job for a specific kind of customer, and structure the code so it can grow without a rewrite.",
      "The most important early decision is multi-tenancy. Shared database, shared schema with a tenant column, or schema-per-tenant each trade simplicity against isolation. For most products, shared schema with careful indexing gets you to thousands of customers. The mistakes that hurt later are usually in data modeling and access control - make tenant isolation explicit in every query from the first commit.",
      "Billing is normally the second big decision. Stripe-style subscription handling covers plans, trials, invoices, and failed-payment recovery if you model it once and centralize. Auth and roles come next: email/password plus social logins cover 90% of products, and role-based permissions are simpler to add early than to retrofit onto user data.",
      "Finally, instrument from day one. Usage analytics, event tracking, and error monitoring are not post-launch chores. They are how you decide what to build next. A SaaS that knows which features actually get used ships faster because it stops guessing.",
    ],
  },
  {
    slug: "choosing-mobile-app-development-company",
    title: "Choosing a Mobile App Development Company: What to Look For",
    excerpt:
      "Seven practical checks before you hire a mobile app team - from portfolios and platform choices to post-launch support.",
    category: "Mobile",
    date: "2026-07-10",
    readTime: "5 min",
    body: [
      "A mobile app is a long-term relationship with a codebase, not a one-time purchase. Choosing the team is the highest-leverage decision you'll make, so check more than a glossy portfolio.",
      "First, platform strategy. A responsible team will tell you when native isn't needed and when cross-platform (React Native or Flutter) is the honest choice - not silently double your cost with two native codebases, and not force a web app into an app-shaped box.",
      "Second, look for opinions about the store lifecycle. Release, review, and update processes are as important as the build. Third, ask who owns quality: automated tests, crash monitoring, and performance budgets should all have named owners.",
      "Finally, ask about the future. Apps need maintenance, OS updates, and feature releases. Teams that plan for post-launch support - or hand you clean, documented code you can maintain in-house - are the ones worth signing. If a company has nothing to say about what happens after launch, that's your answer.",
    ],
  },
  {
    slug: "software-internship-india-guide",
    title: "How to Land a Software Development Internship in India: A Practical Guide",
    excerpt:
      "What actually moves the needle when applying for software internships - and how to build a portfolio that gets you a yes.",
    category: "Careers",
    date: "2026-06-25",
    readTime: "6 min",
    body: [
      "Every application season, the same story repeats: students apply to dozens of internships with the same resume and no portfolio, and hear nothing. The fix isn't more applications - it's fewer, better ones, backed by proof you can build.",
      "Your GitHub and projects matter more than your GPA in most hiring decisions. One finished project - deployed, documented, and honest about its trade-offs - beats five tutorial repos any week. Pick something real: a tool your college can use, an automation for your own workflow, a clone of a product you admire rebuilt from scratch.",
      "Next, write applications like a developer. Show the problem your project solves, the decisions you made, and what you'd do differently. That thinking matters more than buzzwords. A short, specific note about why you want to work on real client work - rather than coursework alone - stands out.",
      "At Codeshub, our internships are project-based: you build a real, shippable assignment under mentorship. Applications are open on the careers page all year. Start the project first - the application becomes much easier once you have something to show.",
    ],
  },
  {
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter: Which Should You Choose in 2026?",
    excerpt:
      "A pragmatic comparison of React Native and Flutter for Indian product teams - hiring, performance, and codebase longevity.",
    category: "Mobile",
    date: "2026-06-08",
    readTime: "8 min",
    body: [
      "React Native and Flutter both ship real apps for both platforms, and both have large enough ecosystems that either can work. The decision comes down to your team and your long-term maintenance, not benchmarks that both frameworks pass these days.",
      "React Native wins on JavaScript talent and shared code with the web. If your team already works in React, or your product is a React web app that needs a mobile companion, the learning curve is near zero and you share types, logic, and sometimes even UI. Flutter wins on design consistency: its widget system renders identically everywhere, which helps when pixel fidelity is a core requirement.",
      "For most Indian product teams, the deciding factors are hiring and existing code. React Native skills are easier to hire for because React developers are abundant. Flutter's Dart talent pool is smaller but growing, and the tooling is excellent. Both handle native modules, push notifications, and offline storage.",
      "Our default is React Native unless a project's design demands Flutter's rendering consistency. But the framework is far less important than the codebase behind it - tests, CI, and disciplined architecture matter more than the choice of canvas.",
    ],
  },
  {
    slug: "ai-in-business-chatbots-automation-predictive-analytics",
    title: "AI in Business: Chatbots, Workflow Automation and Predictive Analytics That Pay For Themselves",
    excerpt:
      "Where applied AI actually returns money in real businesses - and the three use cases that ship fastest.",
    category: "AI",
    date: "2026-05-19",
    readTime: "7 min",
    body: [
      "AI headlines are everywhere, but the question that matters is narrower: where does AI return measurable money in a business this quarter? In our experience, three use cases pay for themselves fastest.",
      "First, support and sales chatbots grounded in your own knowledge base. Retrieval-augmented generation answers from your documents instead of hallucinating from a generic model. A chatbot that resolves the ten most common support tickets, or answers product questions at 2am, reduces load on people who should be handling complex cases.",
      "Second, workflow automation on document-heavy processes. Invoice extraction, form processing, and approval routing are pattern-matching tasks where models are now reliably better and faster than manual data entry - and the savings are direct headcount hours.",
      "Third, predictive analytics on data you already have: demand forecasting for inventory, churn scoring for retention, or maintenance prediction for equipment. These don't need perfectly clean data or a research team. A focused model trained on a narrow, well-understood signal beats a broad, impressive one every time.",
    ],
  },
  {
    slug: "launchpad-delivery-tracking-retrospective",
    title: "What We Learned Building LaunchPad: A Project Delivery Retrospective",
    excerpt:
      "Case study retrospective on LaunchPad - how we scoped, built, and shipped our agency delivery-tracking product.",
    category: "Case Study",
    date: "2026-04-30",
    readTime: "6 min",
    body: [
      "LaunchPad started as a reaction to our own pain: agencies juggle tickets, milestones, and client expectations across disconnected tools, and project status ends up living in someone's head. We decided to build the tool we wanted - milestone-based roadmaps, client-ready status snapshots, and time-and-budget burn-down.",
      "Scoping was the hard part. The temptation was a full project-management suite, which we didn't need and couldn't differentiate. We held to a narrow first release: one agency, one roadmap, one status view. Everything else waited for the 'ask for it twice' rule - a feature had to be requested twice by real users before earning a place.",
      "The build taught us that client-facing status is a communication product as much as a data product. The hardest engineering was making 'where are we actually' honest - drawing attention to scope changes and buffer consumption rather than hiding them. That honesty is the feature our users name first.",
      "Shipped and live, LaunchPad runs on the same playbook we take to client work: multi-tenant from day one, billing and roles wired early, usage analytics from the first week. The retrospective sharpened it - constraint is what makes a product sharp.",
    ],
  },
  {
    slug: "website-redesign-roi-nordhavn-case-study",
    title: "Website Redesign ROI: The Nordhavn Studio Case Study",
    excerpt:
      "How rebuilding a slow template site into a fast, editorial portfolio changed lead quality - and what it took to get there.",
    category: "Case Study",
    date: "2026-04-12",
    readTime: "5 min",
    body: [
      "Nordhavn Studio's old site was doing the opposite of its purpose: a slow template that ranked poorly, said nothing about the quality of the work, and failed to capture qualified leads. The brief was simple - make the work look like the work - but the execution took discipline.",
      "The first decision was static-first rendering: ship HTML fast, then enhance. Core Web Vitals scores landed in the high 90s, which matters for both users and ranking. The second was editorial layout design that let the portfolio breathe, built on a content model the studio's own team could update without engineers.",
      "The third was treating the redesign as a lead-generation system, not a brochure. Clear paths to enquiry, case-study detail pages, and conversation-nudging copy targeted at the studio's actual buyers changed the shape of incoming leads.",
      "The result, twelve months in, is what a good redesign should be measured on: performance scores in the high 90s, growing organic traffic from a content focus, and doubled qualified enquiry completions. The lesson generalizes - redesigns earn ROI when they're built around a conversion goal, not a visual refresh.",
    ],
  },
];


