const team = [
  {
    name: 'Hamza Raza',
    role: 'AI & Backend Platform Engineer',
    badge: 'Previously at Google · Android OS Engineering',
    points: [
      '9+ years scalable backend systems and AI-native platforms',
      'Android OS: deployed across 3.9 billion devices globally',
      'Multi-agent AI, distributed systems, cloud-native infrastructure',
    ],
    featured: true,
  },
  {
    name: 'Ali Wahab',
    role: 'AI & Full-Stack Product Engineer',
    badge: 'End-to-End Product Builder',
    points: [
      'Full-stack across frontend, backend, and cloud infrastructure',
      'AI-native platforms, LLM orchestration, vector DB architecture',
      'Production-ready delivery from first sprint to go-live',
    ],
    featured: false,
  },
  {
    name: 'Technical Delivery Director',
    role: 'Engagement Lead & Architecture',
    badge: 'Senior Oversight',
    points: [
      'Owns discovery-to-deployment for every engagement',
      'Direct founder contact throughout — not a project manager',
      'Fintech and regulated platform delivery background',
    ],
    featured: false,
  },
  {
    name: 'UX & Product Lead',
    role: 'Product Strategy & Interface Design',
    badge: 'Design Authority',
    points: [
      'All screens approved before a single line of code is written',
      'Validates product decisions directly with founders',
      'Web, mobile, and regulated-sector UX',
    ],
    featured: false,
  },
  {
    name: 'Corporate & Regulatory Lead',
    role: 'TruVis Corporate Services',
    badge: 'TruVis International Services',
    points: [
      'Manages the parallel corporate setup and regulatory track',
      'Architecture aligned to compliance from Week 1',
      'UAE, UK, EU, US, Africa — all major jurisdictions',
    ],
    featured: false,
  },
]

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 px-8 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(10,126,232,0.07) 0%, transparent 60%), #0D1B2E',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-eyebrow text-brand-cyan">The Delivery Team</span>
          <h2
            className="font-montserrat font-extrabold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            The same engineers who scope
            <br />
            your product in Week 1 deploy it in Week 6.
          </h2>
          <p className="text-lg text-white/55 leading-[1.7] max-w-[580px]">
            No offshore sub-teams. No account manager layer. Named engineers.
            Direct access. Full accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map(({ name, role, badge, points, featured }) => (
            <div
              key={name}
              className={`border border-t-[3px] rounded-b-lg px-7 py-8 transition-all duration-200 ${
                featured
                  ? 'border-brand-cyan/20 border-t-brand-cyan bg-azure/[0.06]'
                  : 'border-white/[0.07] border-t-azure bg-white/[0.04] hover:bg-white/[0.07] hover:border-t-brand-cyan'
              }`}
            >
              <div className="font-montserrat font-extrabold text-[18px] text-white mb-1">
                {name}
              </div>
              <div className="text-[13px] font-semibold text-azure mb-2">{role}</div>
              <span className="inline-block text-[11px] text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 rounded font-semibold mb-5">
                {badge}
              </span>
              <ul className="space-y-1.5">
                {points.map((pt) => (
                  <li key={pt} className="text-[13.5px] text-white/60 pl-4 relative leading-snug">
                    <span className="absolute left-0 text-azure">–</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#contact" className="btn-white btn-lg">
            Schedule a Briefing →
          </a>
        </div>
      </div>
    </section>
  )
}
