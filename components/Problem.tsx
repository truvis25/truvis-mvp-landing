const problems = [
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
]

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="section-eyebrow">Why Most MVPs Fail</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            The agency delivered.
            <br />
            The product did not.
          </h2>
          <p className="section-intro">
            Most MVP failures are process failures — not technology failures. These are the three
            patterns we have been called in to fix, more times than we should have needed to.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ number, title, body }) => (
            <div
              key={number}
              className="border border-divider border-t-[3px] border-t-azure rounded-b-lg p-9 transition-all duration-200 hover:shadow-[0_12px_40px_rgba(2,48,89,0.08)] hover:-translate-y-0.5"
            >
              <span className="font-montserrat font-bold text-[11px] tracking-[2px] uppercase text-azure mb-4 block">
                {number}
              </span>
              <h3 className="font-montserrat font-bold text-[19px] text-navy leading-[1.3] mb-4">
                {title}
              </h3>
              <p className="text-[15px] text-slate-500 leading-[1.75]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
