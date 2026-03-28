const projects = [
  {
    name: 'Android OS · Google',
    category: 'Enterprise · OS Engineering',
    scale: '3.9 billion devices globally',
    relevance:
      'The gold standard of production systems engineering. Architecture decisions made here operate at planetary scale.',
  },
  {
    name: 'M Mind · Search Engine',
    category: 'Backend · High Throughput',
    scale: '130M+ records · sub-50ms latency',
    relevance:
      'High-throughput, low-latency backend design at production scale. Directly relevant to any data-intensive MVP.',
  },
  {
    name: 'Kaaf.ai · AI Platform',
    category: 'AI-Native · LLM',
    scale: 'Vector DB + LLM orchestration',
    relevance:
      'Production AI architecture: vector database pipeline with real-world inference requirements. Not a demo environment.',
  },
  {
    name: 'Proximus · Telecom',
    category: 'Infrastructure · Regulated',
    scale: 'Millions of users · Belgium',
    relevance:
      'National-scale regulated infrastructure. Compliance-aware backend design at carrier scale.',
  },
  {
    name: 'Energy Monitoring',
    category: 'Real-Time · Multi-Jurisdiction',
    scale: 'KSA · Azerbaijan · Morocco',
    relevance:
      'Multi-jurisdiction real-time analytics. Cross-border regulated delivery with distinct compliance environments.',
  },
  {
    name: 'TapMad · OTT Streaming',
    category: 'Consumer Platform · Scale',
    scale: 'National scale · Pakistan',
    relevance:
      'Platform transformation: streaming backend performance and scalability at consumer product scale.',
  },
  {
    name: 'Rhithm Analytics · EdTech',
    category: 'Regulated Data · Privacy',
    scale: 'Privacy-first · Institutional',
    relevance:
      'Compliance-aware data architecture with privacy by design — the same approach applied to all regulated-sector MVPs.',
  },
  {
    name: 'Aravenda · Commerce',
    category: 'Multi-Vendor · Transactions',
    scale: 'Multi-vendor · Optimised',
    relevance:
      'End-to-end commerce platform with payment processing, vendor management, and transaction infrastructure.',
  },
  {
    name: 'Janbaz · Sports Booking',
    category: 'Real-Time · Analytics',
    scale: 'Real-time · Analytics engine',
    relevance:
      'Live booking infrastructure with concurrent availability management and performance reporting at scale.',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-eyebrow">Selected Portfolio</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            Built before. At scale.
            <br />
            Across sectors.
          </h2>
          <p className="section-intro">
            Nine production systems — not prototypes — across AI, telecom, enterprise, streaming,
            commerce, and regulated data infrastructure.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide rounded-tl-lg">
                  Project
                </th>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide">
                  Scale &amp; Category
                </th>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide rounded-tr-lg hidden lg:table-cell">
                  Relevance to Your Build
                </th>
              </tr>
            </thead>
            <tbody>
              {projects.map(({ name, category, scale, relevance }, i) => (
                <tr key={name} className={i % 2 === 0 ? 'bg-white' : 'bg-stripe'}>
                  <td className="px-6 py-5 border-b border-divider align-top">
                    <span className="font-bold text-navy text-[15px] block mb-0.5">{name}</span>
                    <span className="text-[12px] text-slate-400">{category}</span>
                  </td>
                  <td className="px-6 py-5 border-b border-divider align-top">
                    <span className="text-[14px] text-brand-teal font-semibold">{scale}</span>
                  </td>
                  <td className="px-6 py-5 border-b border-divider align-top text-[14px] text-charcoal leading-relaxed hidden lg:table-cell">
                    {relevance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
