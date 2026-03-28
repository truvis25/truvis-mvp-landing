const milestones = [
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
]

const packages = [
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
    accent: 'border-l-navy',
  },
  {
    title: 'Corporate & Regulatory Track',
    amount: 'Scoped separately',
    items: [
      'Confirmed after Week 1 regulatory assessment',
      'Corporate entity formation — 17+ jurisdictions',
      'Regulatory pathway mapping and application support',
      'Compliance framework design',
      'UAE (ADGM, DIFC, CBUAE) · UK FCA · US · Africa',
      'Runs in parallel — build is not delayed',
    ],
    accent: 'border-l-azure',
  },
]

export default function Pricing() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-eyebrow">Engagement Structure</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            Fixed price. Defined scope.
            <br />
            No billing surprises.
          </h2>
          <p className="section-intro">
            Scope agreed in writing in Week 1. Price fixed before build begins. The only thing that
            changes the price is a change to the agreed scope — which requires written approval
            from both parties.
          </p>
        </div>

        {/* Milestone cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {milestones.map(({ pct, trigger, desc }) => (
            <div
              key={trigger}
              className="bg-stripe border border-divider border-t-[4px] border-t-navy rounded-b-lg px-7 py-9"
            >
              <div className="font-montserrat font-black text-[42px] text-navy leading-none mb-2">
                {pct}
              </div>
              <div className="text-[13px] font-semibold text-azure uppercase tracking-wide mb-3">
                {trigger}
              </div>
              <p className="text-[14px] text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Package details */}
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map(({ title, amount, items, accent }) => (
            <div key={title} className={`bg-stripe border-l-4 ${accent} px-9 py-9`}>
              <h3 className="font-montserrat font-bold text-[17px] text-navy mb-1">{title}</h3>
              <div className="font-montserrat font-black text-[26px] text-navy mb-5">{amount}</div>
              <ul className="space-y-0">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-charcoal pl-4 py-2.5 border-b border-divider last:border-b-0 relative leading-snug"
                  >
                    <span className="absolute left-0 text-azure">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
