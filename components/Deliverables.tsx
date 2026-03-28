const deliverables = [
  {
    icon: '⟨/⟩',
    title: 'Source Code Repository',
    body: 'Complete Git history under your account from day one. No end-of-project snapshot delivery.',
  },
  {
    icon: '⚡',
    title: 'API Specification',
    body: 'Every endpoint documented. Request/response schemas, authentication, error codes — readable in Swagger.',
  },
  {
    icon: '⬡',
    title: 'Architecture Record',
    body: 'What was built, why it was built that way, and what alternatives were considered.',
  },
  {
    icon: '◈',
    title: 'Database Schema',
    body: 'ER diagram, field annotations, and any compliance-driven schema constraints documented.',
  },
  {
    icon: '☁',
    title: 'Infrastructure',
    body: 'All cloud infrastructure under your credentials. No intermediary access. Our access revoked in writing.',
  },
  {
    icon: '⟳',
    title: 'CI/CD Pipeline',
    body: 'Configured in your environment. Commits to main trigger tests. Approved builds deploy to production.',
  },
  {
    icon: '◉',
    title: 'Monitoring & Alerting',
    body: 'Production monitoring directly accessible to you. Alerts go to you — not filtered through us.',
  },
  {
    icon: '≡',
    title: 'Operational Runbook',
    body: 'Step-by-step: deployment, environment management, backup, and third-party service contacts.',
  },
]

export default function Deliverables() {
  return (
    <section className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-eyebrow">What You Own</span>
          <h2
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            You own everything.
            <br />
            From day one.
          </h2>
          <p className="section-intro">
            At the end of the engagement: a complete, unconditional transfer of every asset built.
            No conditions. No lock-in. Our access formally revoked at close.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliverables.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-divider border-t-[3px] border-t-azure rounded-b-lg px-6 py-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(10,126,232,0.1)]"
            >
              <span className="text-[22px] block mb-3 font-mono text-azure">{icon}</span>
              <h3 className="font-montserrat font-bold text-[14.5px] text-navy mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-[13px] text-slate-400 leading-[1.65]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
