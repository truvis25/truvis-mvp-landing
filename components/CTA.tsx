import ContactForm from '@/components/ContactForm'

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 px-8 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,126,232,0.08) 0%, transparent 70%), #0D1B2E',
      }}
    >
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <span className="section-eyebrow text-brand-cyan">Next Steps</span>
            <h2
              className="font-montserrat font-black text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              Schedule a
              <br />
              30-minute briefing.
            </h2>
            <p className="text-[18px] text-white/60 leading-relaxed mb-8 max-w-[460px]">
              We&apos;ll tell you within the call whether this engagement is the right fit for your
              situation. If it&apos;s not, we&apos;ll tell you that too — and point you toward what
              would be better.
            </p>

            <div className="space-y-3 mb-10">
              {['30 minutes', 'No commitment', 'Response within 2 business days'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                  <span className="text-sm text-brand-cyan font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[13px] text-white/30 leading-relaxed">
                <strong className="text-white/50">TruVis International Services</strong>
                &nbsp;·&nbsp; Etihad Towers, Abu Dhabi (ADGM)
                &nbsp;·&nbsp; London &nbsp;·&nbsp; New York &nbsp;·&nbsp; Nairobi
                &nbsp;·&nbsp; truvisintl.com
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] p-8">
            <span className="section-eyebrow text-azure">TruVis Tech · Briefing Request</span>
            <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
              Schedule a 30-minute briefing
            </h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              We confirm within 2 business days. A briefing can typically be arranged within
              the same week.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
