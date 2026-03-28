const rightFor = [
  'Validated concept, ready to build',
  'Needs a production product — not a prototype or wireframe',
  'Any industry — regulated or non-regulated software product',
  'Operating in UAE, UK, EU, US, or Africa',
  'Wants a single accountable partner for tech and corporate structure',
  'Working budget — engagements from USD 15,000',
]

const notFor = [
  'Still deciding whether to build',
  'Primary criterion is the lowest possible price',
  'Needs a no-code or template solution',
  'Scope larger than a focused 6-week MVP',
  'Enterprise procurement process or RFP cycle required',
]

export default function UseCases() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-eyebrow">Use Cases &amp; Fit</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            Designed for a specific situation.
          </h2>
          <p className="section-intro">
            Being direct about fit protects your time and ours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Right fit */}
          <div className="bg-white border border-divider rounded-lg p-10">
            <div className="font-montserrat font-extrabold text-[16px] text-navy mb-7 pb-4 border-b-2 border-azure">
              ✓ &nbsp;Right for this engagement
            </div>
            <ul className="space-y-0">
              {rightFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-divider last:border-b-0 text-[15px] leading-snug"
                >
                  <span className="text-emerald-600 font-bold text-base flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not right */}
          <div className="bg-stripe border border-divider rounded-lg p-10">
            <div className="font-montserrat font-extrabold text-[16px] text-slate-500 mb-7 pb-4 border-b-2 border-divider">
              ✗ &nbsp;Not the right fit
            </div>
            <ul className="space-y-0">
              {notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-divider last:border-b-0 text-[15px] leading-snug"
                >
                  <span className="text-slate-400 font-bold text-base flex-shrink-0 mt-0.5">
                    ✗
                  </span>
                  <span className="text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
