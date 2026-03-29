import RichHeading from '@/components/RichHeading'
import { DeliverableIcon } from '@/components/icons'
import type { DeliverablesSectionContent } from '@/lib/landing-page/types'

interface DeliverablesProps {
  content: DeliverablesSectionContent
}

export default function Deliverables({ content }: DeliverablesProps) {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 reveal">
          {content.items.map(({ icon, title, body }) => (
            <div
              key={title}
              className="bg-white border border-divider border-t-[3px] border-t-azure rounded-b-lg px-6 py-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(10,126,232,0.1)]"
            >
              <span className="block mb-3 text-azure">
                <DeliverableIcon
                  iconKey={icon}
                  className="w-[28px] h-[28px] md:w-[28px] md:h-[28px] max-md:w-6 max-md:h-6"
                />
              </span>
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
