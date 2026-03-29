import RichHeading from '@/components/RichHeading'
import type { ProcessSectionContent } from '@/lib/landing-page/types'

interface ProcessProps {
  content: ProcessSectionContent
}

export default function Process({ content }: ProcessProps) {
  return (
    <section id="process" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-12">
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

      {/* Horizontal scrolling strip */}
      <div className="flex overflow-x-auto scrollbar-hide px-8 gap-0 pb-2">
        {content.steps.map(({ label, title, points, dark }) => (
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
        <a href={content.ctaHref} className="btn-primary btn-lg">
          {content.ctaText}
        </a>
      </div>
    </section>
  )
}
