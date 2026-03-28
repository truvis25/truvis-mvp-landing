const weeks = [
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
    label: 'Weeks 3–4',
    title: 'Core Development',
    points: [
      'Sprint-based build',
      'Working demos every 72 hrs',
      'API integrations built',
      'Real product — not reports',
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
      'We find the issues — not your users',
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
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-12">
        <span className="section-eyebrow">The 6-Week Process</span>
        <h2
          className="section-h2"
          style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
        >
          Every week defined.
          <br />
          Every deliverable agreed.
        </h2>
        <p className="section-intro">
          The 6-week timeline is an engineered outcome — not a target. Discovery is mandatory.
          Architecture is agreed before build begins. Design is approved before development starts.
        </p>
      </div>

      {/* Horizontal scrolling strip */}
      <div className="flex overflow-x-auto scrollbar-hide px-8 gap-0 pb-2">
        {weeks.map(({ label, title, points, dark }, i) => (
          <div
            key={label}
            className={`flex-shrink-0 w-[220px] relative border-t-[4px] px-7 py-8 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(2,48,89,0.08)] ${
              dark
                ? 'bg-navy border-t-brand-teal'
                : 'bg-white border-t-azure border-l border-divider first:border-l-0'
            }`}
          >
            <span
              className={`font-montserrat font-bold text-[11px] tracking-[2px] uppercase mb-2.5 block ${
                dark ? 'text-brand-cyan' : 'text-azure'
              }`}
            >
              {label}
            </span>
            <div
              className={`font-montserrat font-extrabold text-[15px] leading-[1.3] mb-5 ${
                dark ? 'text-white' : 'text-navy'
              }`}
            >
              {title}
            </div>
            <ul className="space-y-1.5">
              {points.map((pt) => (
                <li
                  key={pt}
                  className={`text-[13px] leading-snug pl-4 relative ${
                    dark ? 'text-white/70' : 'text-charcoal'
                  }`}
                >
                  <span
                    className={`absolute left-0 ${dark ? 'text-brand-cyan' : 'text-azure'}`}
                  >
                    –
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-8 mt-10">
        <a href="#contact" className="btn-primary btn-lg">
          Schedule a Briefing →
        </a>
      </div>
    </section>
  )
}
