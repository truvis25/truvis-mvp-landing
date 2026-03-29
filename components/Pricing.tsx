import RichHeading from '@/components/RichHeading'
import { splitLines } from '@/lib/landing-page/helpers'
import type { PricingSectionContent } from '@/lib/landing-page/types'

interface PricingProps {
  content: PricingSectionContent
}

export default function Pricing({ content }: PricingProps) {
  return (
    <section className="section-shell bg-white">
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

        {/* Milestone cards */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10 reveal">
          {content.milestones.map(({ pct, trigger, desc }) => (
            <div
              key={trigger}
              className="bg-stripe border border-divider border-t-[4px] border-t-navy rounded-b-lg px-7 py-9"
            >
              <div className="font-montserrat font-black text-[42px] text-navy leading-none mb-2">
                {pct}
              </div>
              <div className="text-[13px] font-semibold text-azure uppercase tracking-wide mb-3">
                {trigger}
              </div>
              <p className="text-[14px] text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="sprint-availability reveal">
          We run three MVP sprints per quarter. <strong>Current availability: APRIL sprint.</strong>
        </div>

        {/* Package details */}
        <div className="grid md:grid-cols-2 gap-6 reveal">
          {content.packages.map(({ title, amount, items, accent }) => (
            <div
              key={title}
              className={`bg-stripe border-l-4 ${
                accent === 'azure' ? 'border-l-azure' : 'border-l-navy'
              } px-9 py-9`}
            >
              <h3 className="font-montserrat font-bold text-[17px] text-navy mb-1">{title}</h3>
              {title === 'Corporate & Regulatory Track' ? (
                <div className="font-inter text-[14px] text-brand-teal mb-5 leading-relaxed">
                  {splitLines(amount).map((line, index, lines) => (
                    <span key={`${line}-${index}`}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="font-montserrat font-black text-[26px] text-navy mb-5">{amount}</div>
              )}
              <ul className="space-y-0">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] text-charcoal pl-4 py-2.5 border-b border-divider last:border-b-0 relative leading-snug"
                  >
                    <span className="absolute left-0 text-azure">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
