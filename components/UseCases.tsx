import RichHeading from '@/components/RichHeading'
import type { UseCasesSectionContent } from '@/lib/landing-page/types'

interface UseCasesProps {
  content: UseCasesSectionContent
}

export default function UseCases({ content }: UseCasesProps) {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
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

        <div className="grid md:grid-cols-2 gap-6">
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
              {content.notRightTitle}
            </div>
            <ul className="space-y-0">
              {content.notFor.map((item) => (
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
