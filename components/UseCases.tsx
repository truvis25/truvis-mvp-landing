import RichHeading from '@/components/RichHeading'
import type { UseCasesSectionContent } from '@/lib/landing-page/types'

interface UseCasesProps {
  content: UseCasesSectionContent
}

export default function UseCases({ content }: UseCasesProps) {
  return (
    <section className="section-shell bg-ice">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <RichHeading
            as="h2"
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            text={content.title}
          />
          <p className="section-intro">
            {content.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 reveal">
          {/* Right fit */}
          <div className="bg-white border border-divider rounded-lg p-10">
            <div className="font-montserrat font-extrabold text-[16px] text-navy mb-7 pb-4 border-b-2 border-azure">
              {content.rightTitle}
            </div>
            <ul className="space-y-0">
              {content.rightFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-divider last:border-b-0 text-[15px] leading-snug"
                >
                  <span className="text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not right */}
          <div className="bg-stripe border border-divider rounded-lg p-10">
            <div className="font-montserrat font-extrabold text-[16px] text-slate-500 mb-7 pb-4 border-b-2 border-divider">
              {content.notRightTitle}
            </div>
            <ul className="space-y-0">
              {content.notFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-divider last:border-b-0 text-[15px] leading-snug"
                >
                  <span className="text-slate-400 flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m18 6-12 12" />
                      <path d="m6 6 12 12" />
                    </svg>
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
