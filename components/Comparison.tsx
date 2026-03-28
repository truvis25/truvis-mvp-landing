const rows = [
  {
    agency: "Builds what's in the brief. Does not challenge it.",
    truvis: 'Challenges the brief before building. Discovery exists to catch the assumptions that cause rebuilds.',
  },
  {
    agency: 'Discovery is optional. Billing starts immediately.',
    truvis: 'Discovery is Week 1. Scope and architecture agreed in writing. No build begins without sign-off.',
  },
  {
    agency: 'Builds for demonstrations. Production performance not guaranteed.',
    truvis: 'Production-specification from day one. Architecture designed for real usage, not demo conditions.',
  },
  {
    agency: 'Offshore team. Unpredictable access. Account manager layer.',
    truvis: 'Named senior engineers throughout. Direct contact. You speak to the people building your product.',
  },
  {
    agency: 'Regulatory context is explicitly out of scope.',
    truvis: 'Regulatory requirements shape the architecture from Week 1. No gap for the founder to manage.',
  },
  {
    agency: 'Post-launch support quoted separately. Premium rates.',
    truvis: '30-day post-launch support included. Production issues: 4-hour response guarantee.',
  },
  {
    agency: 'Fixed price eroded by scope change billing.',
    truvis: 'Fixed price on the agreed scope. Changes costed and approved before any additional work proceeds.',
  },
]

export default function Comparison() {
  return (
    <section className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="section-eyebrow">Differentiation</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            Not another agency.
            <br />
            A different model entirely.
          </h2>
        </div>

        <div className="overflow-x-auto mt-10">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-7 py-5 font-montserrat font-bold text-sm tracking-wide text-white bg-slate-500 rounded-tl-lg w-1/2">
                  Typical Agency Model
                </th>
                <th className="text-left px-7 py-5 font-montserrat font-bold text-sm tracking-wide text-white bg-navy rounded-tr-lg w-1/2">
                  TruVis Tech Model
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ agency, truvis }, i) => (
                <tr key={i}>
                  <td
                    className={`px-7 py-5 text-[14px] text-slate-500 leading-relaxed border-b border-divider align-top ${
                      i % 2 === 0 ? 'bg-white' : 'bg-stripe'
                    }`}
                  >
                    {agency}
                  </td>
                  <td
                    className={`px-7 py-5 text-[14px] text-charcoal font-medium leading-relaxed border-b border-divider align-top ${
                      i % 2 === 0 ? 'bg-tech-tint' : 'bg-[#d8ecfd]'
                    }`}
                  >
                    {truvis}
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
