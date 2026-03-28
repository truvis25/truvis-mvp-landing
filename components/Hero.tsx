import ContactForm from '@/components/ContactForm'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 65% 70% at 75% 50%, rgba(10,126,232,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 15% 80%, rgba(5,175,242,0.05) 0%, transparent 60%), #0D1B2E',
      }}
    >
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <span className="animate-fade-in-up anim-delay-1 section-eyebrow text-brand-cyan">
              TruVis Tech · MVP Development
            </span>

            <h1
              className="animate-fade-in-up anim-delay-2 font-montserrat font-black text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
            >
              Your startup&apos;s MVP.
              <br />
              Built in 6 weeks.
              <br />
              <span className="text-azure">Production-ready.</span>
            </h1>

            <p className="animate-fade-in-up anim-delay-3 text-white/75 leading-relaxed mb-4 max-w-[520px]"
               style={{ fontSize: 'clamp(16px, 2vw, 19px)' }}>
              Full-stack delivery — from product strategy to deployment.
              Fixed price. Complete code ownership from day one.
            </p>

            <p className="animate-fade-in-up anim-delay-3 text-sm text-white/45 leading-relaxed border-l-2 border-azure pl-4 mb-8 max-w-[460px]">
              For founders in regulated sectors: corporate structure and regulatory pathway
              handled in parallel through TruVis Corporate Services.
            </p>

            <div className="animate-fade-in-up anim-delay-4 flex flex-wrap gap-3 mb-10">
              {[
                'From USD 15,000',
                '6 weeks',
                'Fixed price',
              ].map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-4 py-2 border border-brand-cyan/30 rounded bg-brand-cyan/06 text-brand-cyan text-sm font-medium font-inter"
                  style={{ background: 'rgba(5,175,242,0.06)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="animate-fade-in-up anim-delay-5 flex flex-col gap-3 items-start">
              <a href="#contact" className="btn-white btn-lg">
                Schedule a 30-Minute Briefing →
              </a>
              <p className="text-xs text-slate-500 italic">
                We&apos;ll tell you within the call whether this is the right fit.
                If it&apos;s not, we&apos;ll tell you that too.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-fade-in-up anim-delay-6">
            <div className="bg-white rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-8">
              <span className="section-eyebrow text-azure mb-2">Briefing Request</span>
              <h2 className="font-montserrat font-bold text-xl text-navy mb-2">
                Schedule a 30-minute briefing
              </h2>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                We confirm within 2 business days. Briefings typically happen within the same week.
              </p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
