import RichHeading from '@/components/RichHeading'
import type { SolutionSectionContent } from '@/lib/landing-page/types'

interface SolutionProps {
  content: SolutionSectionContent
}

export default function Solution({ content }: SolutionProps) {
  return (
    <section className="py-24 px-8 bg-ice">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.pillars.map(({ icon, title, body }) => (
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
