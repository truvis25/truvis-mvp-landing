import RichHeading from '@/components/RichHeading'
import type { ProblemSectionContent } from '@/lib/landing-page/types'

interface ProblemProps {
  content: ProblemSectionContent
}

export default function Problem({ content }: ProblemProps) {
  return (
    <section id="problem" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <RichHeading
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            text={content.title}
            as="h2"
          />
          <p className="section-intro">
            {content.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.patterns.map(({ number, title, body }) => (
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
