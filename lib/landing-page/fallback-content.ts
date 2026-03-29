import type {LandingPageData} from './types'

export const fallbackLandingPageData: LandingPageData = {
  seo: {
    title: 'MVP in 6 Weeks | TruVis Tech',
    description:
      'Full-stack MVP development in 6 weeks. Fixed price. Production-ready. For startups in regulated sectors: corporate structure and regulatory pathway in parallel. UAE, UK, US, Africa.',
    ogTitle: 'MVP in 6 Weeks | TruVis Tech',
    ogDescription: 'Full-stack MVP development in 6 weeks. Fixed price. Production-ready.',
    canonicalUrl: undefined,
    ogImage: undefined,
  },
  navbar: {
    brandName: 'TruVis Tech',
    links: [
      {label: 'How It Works', href: '#process'},
      {label: 'Team', href: '#team'},
      {label: 'Portfolio', href: '#portfolio'},
    ],
    ctaText: 'Schedule a 30-Minute Briefing →',
    ctaHref: '#contact',
  },
  hero: {
    eyebrow: 'TruVis Tech · MVP Development',
    title: 'You have 6 weeks.\nWe have done this before.\nProduction-ready.',
    highlightedText: 'Production-ready.',
    description:
      'Full-stack delivery — from product strategy to deployment.\nFixed price. Complete code ownership from day one.',
    subDescription:
      'For founders in regulated sectors: corporate structure and regulatory pathway handled in parallel through TruVis Corporate Services.',
    tags: ['From USD 15,000', '6 weeks', 'Fixed price'],
    ctaText: 'Schedule a 30-Minute Briefing →',
    ctaHref: '#contact',
    disclaimer:
      "We'll tell you within the call whether this is the right fit.\nIf it's not, we'll tell you that too.",
    formEyebrow: 'Briefing Request',
    formTitle: 'Schedule a 30-minute briefing',
    formDescription:
      'We confirm within 2 business days. Briefings typically happen within the same week.',
  },
  proofStats: [
    {stat: 'Google-trained', label: 'Engineers'},
    {stat: '3.9B devices', label: 'Android OS deployment'},
    {stat: '9+ years', label: 'Zero failed production deployments'},
    {stat: '130M+ records', label: 'Production platforms'},
    {stat: 'Founders in 4 continents', label: '17+ jurisdictions'},
  ],
  problem: {
    eyebrow: 'Why Most MVPs Fail',
    title: 'The agency delivered.\nThe product did not.',
    intro:
      'Most MVP failures are process failures — not technology failures. These are the three patterns we have been called in to fix, more times than we should have needed to.',
    patterns: [
      {
        number: 'Pattern 01',
        title: 'The product that only worked in the demo.',
        body: 'Six months in. No API documentation. No test coverage. Architecture that could not scale past 500 users. The agency had been billing since day one. The problem was never the technology — it was the absence of a process and an architect who had done this before.',
      },
      {
        number: 'Pattern 02',
        title: 'Built it. Then discovered it was illegal to launch.',
        body: 'The product was complete. The licensing review found that the architecture did not support the required compliance requirements. Three months of rebuild before it could go live. For any regulated product, compliance architecture is not a layer added after — it is the foundation.',
      },
      {
        number: 'Pattern 03',
        title: 'Four vendors. Zero accountability.',
        body: 'A software agency. A law firm. A compliance consultant. A licensing advisor. Each protecting their own scope. Every handoff creating delay. The founder absorbing the coordination cost while the runway burns. This is the standard configuration — and the one that causes the most unnecessary rebuilds.',
      },
    ],
  },
  process: {
    eyebrow: 'The 6-Week Process',
    title: 'Every week defined.\nEvery deliverable agreed.',
    intro:
      'The 6-week timeline is an engineered outcome — not a target. Discovery is mandatory. Architecture is agreed before build begins. Design is approved before development starts.',
    steps: [
      {
        label: 'Week 1',
        title: 'Discovery & Strategy',
        points: [
          'Scope locked in writing',
          'Architecture agreed',
          'Every assumption tested',
          'Client sign-off required',
        ],
        dark: false,
      },
      {
        label: 'Week 2',
        title: 'Design & Blueprint',
        points: [
          'All screens designed',
          'Architecture finalised',
          'Client approval obtained',
          'No code until approved',
        ],
        dark: false,
      },
      {
        label: 'Week 3',
        title: 'Core Development',
        points: [
          'Sprint-based build',
          'Working demos every 72 hrs',
          'API integrations built',
          'Frontend and backend integrated',
        ],
        dark: false,
      },
      {
        label: 'Week 4',
        title: 'Feature Completion',
        points: [
          'Sprint-based build',
          'Working demos every 72 hrs',
          'API integrations completed',
          'Working product. Not status updates.',
        ],
        dark: false,
      },
      {
        label: 'Week 5',
        title: 'QA & Performance',
        points: [
          'Full functional testing',
          'Load & security review',
          'All issues resolved',
          'We find the issues. Not your users.',
        ],
        dark: false,
      },
      {
        label: 'Week 6',
        title: 'Deploy & Handover',
        points: [
          'Production go-live',
          '3-hour handover session',
          'All access transferred',
          '30-day support begins',
        ],
        dark: true,
      },
    ],
    ctaText: 'Schedule a Briefing →',
    ctaHref: '#contact',
  },
  comparison: {
    eyebrow: 'What Makes This Different',
    title: 'Not another agency.\nA different model entirely.',
    intro: '',
    agencyHeading: 'Typical Agency Model',
    truvisHeading: 'TruVis Tech',
    rows: [
      {
        agency: "Builds what's in the brief. Does not challenge it.",
        truvis:
          'Challenges the brief before building. Discovery exists to catch the assumptions that cause rebuilds.',
      },
      {
        agency: 'Discovery is optional. Billing starts immediately.',
        truvis:
          'Discovery is Week 1. Scope and architecture agreed in writing. No build begins without sign-off.',
      },
      {
        agency: 'Builds for demonstrations. Production performance not guaranteed.',
        truvis:
          'Production-specification from day one. Architecture designed for real usage, not demo conditions.',
      },
      {
        agency: 'Offshore team. Unpredictable access. Account manager layer.',
        truvis:
          'Named senior engineers throughout. Direct contact. You speak to the people building your product.',
      },
      {
        agency: 'Regulatory context is explicitly out of scope.',
        truvis:
          'Regulatory requirements shape the architecture from Week 1. No gap for the founder to manage.',
      },
      {
        agency: 'Post-launch support quoted separately. Premium rates.',
        truvis:
          '30-day post-launch support included. Production-critical issues addressed within 4 hours.',
      },
      {
        agency: 'Fixed price eroded by scope change billing.',
        truvis:
          'Fixed price on the agreed scope. Changes costed and approved before any additional work proceeds.',
      },
    ],
  },
  useCases: {
    eyebrow: 'Who This Is Built For',
    title: 'Designed for a specific situation.',
    intro: 'Being direct about fit protects your time and ours.',
    rightTitle: '✓  Right for this engagement',
    notRightTitle: '✗  Not the right fit',
    rightFor: [
      'Validated concept, ready to build',
      'Needs a production product — not a prototype or wireframe',
      'Any industry — regulated or non-regulated software product',
      'Operating in UAE, UK, EU, US, or Africa',
      'Wants a single accountable partner for tech and corporate structure',
      'Working budget — engagements from USD 15,000',
    ],
    notFor: [
      'Still deciding whether to build',
      'Primary criterion is the lowest possible price',
      'Needs a no-code or template solution',
      'Scope larger than a focused 6-week MVP',
      'Enterprise procurement process or RFP cycle required',
    ],
  },
  deliverables: {
    eyebrow: 'What You Own',
    title: 'You own everything.\nFrom day one.',
    intro:
      'Complete, unconditional transfer of every asset built. No conditions. No lock-in. Our access formally revoked at close. Most firms call this handover. We call it the confirmation that you no longer need us.',
    items: [
      {
        icon: 'sourceCode',
        title: 'Source Code Repository',
        body: 'Complete Git history under your account from day one. No end-of-project snapshot delivery.',
      },
      {
        icon: 'apiSpec',
        title: 'API Specification',
        body: 'Every endpoint documented. Request/response schemas, authentication, error codes — readable in Swagger.',
      },
      {
        icon: 'architecture',
        title: 'Architecture Record',
        body: 'What was built, why it was built that way, and what alternatives were considered.',
      },
      {
        icon: 'database',
        title: 'Database Schema',
        body: 'ER diagram, field annotations, and any compliance-driven schema constraints documented.',
      },
      {
        icon: 'infrastructure',
        title: 'Infrastructure',
        body: 'All cloud infrastructure under your credentials. No intermediary access. Our access revoked in writing.',
      },
      {
        icon: 'pipeline',
        title: 'CI/CD Pipeline',
        body: 'Configured in your environment. Commits to main trigger tests. Approved builds deploy to production.',
      },
      {
        icon: 'monitoring',
        title: 'Monitoring & Alerting',
        body: 'Production monitoring directly accessible to you. Alerts go to you — not filtered through us.',
      },
      {
        icon: 'runbook',
        title: 'Operational Runbook',
        body: 'Step-by-step: deployment, environment management, backup, and third-party service contacts.',
      },
    ],
  },
  team: {
    eyebrow: 'The Delivery Team',
    title: 'The same engineers who scope\nyour product in Week 1 deploy it in Week 6.',
    intro:
      'No offshore sub-teams. No account manager layer. Named engineers.\nDirect access. Full accountability.',
    members: [
      {
        initials: 'HR',
        name: 'Hamza Raza',
        role: 'AI & Backend Platform Engineer',
        badge: 'Previously at Google · Android OS Engineering',
        oneLiner:
          'The engineer who built systems at 3.9B device scale. That standard applies to your product.',
        points: [
          '9+ years scalable backend systems and AI-native platforms',
          'Android OS: deployed across 3.9 billion devices globally',
          'Multi-agent AI, distributed systems, cloud-native infrastructure',
        ],
        featured: true,
        photo: undefined,
      },
      {
        initials: 'AW',
        name: 'Ali Wahab',
        role: 'AI & Full-Stack Product Engineer',
        badge: 'End-to-End Product Builder',
        oneLiner:
          'Full-stack from interface to infrastructure. He has shipped AI products used in production.',
        points: [
          'Full-stack across frontend, backend, and cloud infrastructure',
          'AI-native platforms, LLM orchestration, vector DB architecture',
          'Production-ready delivery from first sprint to go-live',
        ],
        featured: false,
        photo: undefined,
      },
      {
        initials: 'TL',
        name: 'Technical Delivery Director',
        role: 'Engagement Lead & Architecture Oversight',
        badge: 'Senior Oversight',
        oneLiner:
          'Your direct contact from kickoff to go-live. Every decision runs through one person.',
        points: [
          'Owns every engagement from discovery to deployment',
          'Direct founder contact throughout — not a PM layer',
          'Fintech and regulated platform delivery background',
        ],
        featured: false,
        photo: undefined,
      },
      {
        initials: 'UX',
        name: 'UX & Product Lead',
        role: 'Product Strategy & Interface Design',
        badge: 'Design Authority',
        oneLiner:
          'Every screen is approved by you before a single line of code is written.',
        points: [
          'All screens approved before build begins',
          'Validates product decisions directly with founders',
          'Web, mobile, and regulated-sector UX',
        ],
        featured: false,
        photo: undefined,
      },
      {
        initials: 'CR',
        name: 'Corporate & Regulatory Lead',
        role: 'TruVis Corporate Services',
        badge: 'TruVis International Services',
        oneLiner:
          'Your product architecture and your corporate structure, aligned from Week 1.',
        points: [
          'Manages the parallel corporate setup and regulatory track',
          'Architecture aligned to compliance from Week 1',
          'UAE, UK, EU, US, Africa — all major jurisdictions',
        ],
        featured: false,
        photo: undefined,
      },
    ],
    ctaText: 'Schedule a Briefing →',
    ctaHref: '#contact',
  },
  pricing: {
    eyebrow: 'Engagement Structure',
    title: 'Fixed price. Defined scope.\nNo billing surprises.',
    intro:
      'Scope agreed in writing in Week 1. Price fixed before build begins. The only thing that changes the price is a change to the agreed scope — which requires written approval from both parties.',
    milestones: [
      {
        pct: '40%',
        trigger: 'Tranche 1 — Before Week 1',
        desc: 'Engagement confirmed. Kickoff date agreed. Team assigned. Build begins.',
      },
      {
        pct: '40%',
        trigger: 'Tranche 2 — End of Week 2',
        desc: 'Client sign-off on UX/UI design and architecture blueprint confirmed in writing.',
      },
      {
        pct: '20%',
        trigger: 'Tranche 3 — Production Go-Live',
        desc: 'Product deployed. Handover session completed. Access transfer confirmed.',
      },
    ],
    packages: [
      {
        title: 'Technical MVP Build',
        amount: 'From USD 15,000',
        items: [
          'Week 1 discovery and architecture',
          'Full UX/UI design and approval',
          'Full-stack development (6 weeks)',
          'QA, load testing, and security review',
          'Production deployment',
          'Complete technical documentation',
          '30-day post-launch support',
        ],
        accent: 'navy',
      },
      {
        title: 'Corporate & Regulatory Track',
        amount: 'Typically USD 5,000–15,000\nConfirmed after Week 1 assessment',
        items: [
          'Confirmed after Week 1 regulatory assessment',
          'Corporate entity formation — 17+ jurisdictions',
          'Regulatory pathway mapping and application support',
          'Compliance framework design',
          'UAE (ADGM, DIFC, CBUAE) · UK FCA · US · Africa',
          'Runs in parallel — build is not delayed',
        ],
        accent: 'azure',
      },
    ],
  },
  portfolio: {
    eyebrow: 'Selected Portfolio',
    title: 'Built before. At scale.\nAcross sectors.',
    intro:
      'The team building your product has shipped systems used by billions of people. The same standard applies to your MVP.',
    items: [
      {
        name: 'Android OS · Google',
        category: 'Enterprise · OS Engineering',
        scale: '3.9 billion devices globally',
        relevance:
          'The gold standard of production systems engineering. Architecture decisions made here operate at planetary scale.',
        logo: undefined,
      },
      {
        name: 'M Mind · Search Engine',
        category: 'Backend · High Throughput',
        scale: '130M+ records · sub-50ms latency',
        relevance:
          'High-throughput, low-latency backend design at production scale. Directly relevant to any data-intensive MVP.',
        logo: undefined,
      },
      {
        name: 'Kaaf.ai · AI Platform',
        category: 'AI-Native · LLM',
        scale: 'Vector DB + LLM orchestration',
        relevance:
          'Production AI architecture: vector database pipeline with real-world inference requirements. Not a demo environment.',
        logo: undefined,
      },
      {
        name: 'Proximus · Telecom',
        category: 'Infrastructure · Regulated',
        scale: 'Millions of users · Belgium',
        relevance:
          'National-scale regulated infrastructure. Compliance-aware backend design at carrier scale.',
        logo: undefined,
      },
      {
        name: 'Energy Monitoring',
        category: 'Real-Time · Multi-Jurisdiction',
        scale: 'KSA · Azerbaijan · Morocco',
        relevance:
          'Multi-jurisdiction real-time analytics. Cross-border regulated delivery with distinct compliance environments.',
        logo: undefined,
      },
      {
        name: 'TapMad · OTT Streaming',
        category: 'Consumer Platform · Scale',
        scale: 'National scale · Pakistan',
        relevance:
          'Platform transformation: streaming backend performance and scalability at consumer product scale.',
        logo: undefined,
      },
      {
        name: 'Rhithm Analytics · EdTech',
        category: 'Regulated Data · Privacy',
        scale: 'Privacy-first · Institutional',
        relevance:
          'Compliance-aware data architecture with privacy by design — the same approach applied to all regulated-sector MVPs.',
        logo: undefined,
      },
      {
        name: 'Aravenda · Commerce',
        category: 'Multi-Vendor · Transactions',
        scale: 'Multi-vendor · Optimised',
        relevance:
          'End-to-end commerce platform with payment processing, vendor management, and transaction infrastructure.',
        logo: undefined,
      },
      {
        name: 'Janbaz · Sports Booking',
        category: 'Real-Time · Analytics',
        scale: 'Real-time · Analytics engine',
        relevance:
          'Live booking infrastructure with concurrent availability management and performance reporting at scale.',
        logo: undefined,
      },
    ],
  },
  cta: {
    eyebrow: 'How to Begin',
    title: "Let's see if this fits.",
    description:
      "We'll tell you within the call whether this engagement is the right fit for your situation. If it's not, we'll tell you that too — and point you toward what would be better.",
    bullets: ['30 minutes', 'No commitment', 'Response within 2 business days'],
    officeLine:
      'TruVis International Services · Etihad Towers, Abu Dhabi (ADGM) · London · New York · Nairobi · truvisintl.com',
    formEyebrow: 'TruVis Tech · Briefing Request',
    formTitle: 'Schedule a 30-minute briefing',
    formDescription:
      'We confirm within 2 business days. A briefing can typically be arranged within the same week.',
  },
  portfolioDetails: [
    {
      title: 'Android OS / Google',
      built: 'Foundational OS systems powering 3.9B active Android devices.',
      outcome: 'Systems at planetary scale. Zero-defect deployment architecture.',
      linkText: 'View project placeholder link',
      linkHref: '#',
    },
    {
      title: 'M Mind / Search Engine',
      built: 'Search infrastructure processing 130M+ records.',
      outcome: 'Sub-50ms query latency at production load.',
      linkText: 'View project placeholder link',
      linkHref: '#',
    },
    {
      title: 'Kaaf.ai / AI Platform',
      built: 'Vector database + LLM orchestration pipeline.',
      outcome: 'Production AI inference at real-world latency requirements.',
      linkText: 'View project placeholder link',
      linkHref: '#',
    },
  ],
  footer: {
    companyName: 'TruVis Tech',
    tagline: 'is part of TruVis International Services',
    motto: 'Where Trust Creates True Vision',
    copyrightPrefix: 'TruVis International Services. All rights reserved.',
  },
}
