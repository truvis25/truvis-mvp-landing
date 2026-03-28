const pillars = [
  {
    icon: '⟨/⟩',
    title: 'Architecture before code',
    body: 'Week 1 is discovery. Scope and architecture are agreed in writing before a single line of code is written. Every assumption is tested. No build begins without your sign-off.',
  },
  {
    icon: '⚖',
    title: 'Compliance built in from day one',
    body: 'For regulated sectors, legal and compliance requirements shape the architecture in Week 1 — not after launch. No rebuild. No gap for the founder to manage.',
  },
  {
    icon: '◈',
    title: 'Named senior engineers throughout',
    body: 'The same engineers who scope your product in Week 1 deploy it in Week 6. No handoffs. No offshore sub-teams. No account manager layer. Direct contact throughout.',
  },
  {
    icon: '◉',
    title: 'Fixed scope. Fixed price.',
    body: 'Price is agreed before build begins. The only thing that changes the price is a change to the agreed scope — which requires written approval from both parties before any work proceeds.',
  },
]

export default function Solution() {
  return (
    <section className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="section-eyebrow">The TruVis Approach</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            One team. Strategy to deployment.
          </h2>
          <p className="section-intro">
            Most MVP failures are process failures. We have re-engineered the process around four
            non-negotiables that eliminate the gaps other studios leave open.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-divider border-t-[3px] border-t-azure rounded-b-lg p-7 transition-all duration-200 hover:shadow-[0_8px_28px_rgba(10,126,232,0.1)] hover:-translate-y-0.5"
            >
              <span className="text-2xl block mb-4 text-azure font-mono">{icon}</span>
              <h3 className="font-montserrat font-bold text-[15px] text-navy mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-[13.5px] text-slate-500 leading-[1.7]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
