import RichHeading from '@/components/RichHeading'
import { splitLines } from '@/lib/landing-page/helpers'
import type { TeamSectionContent } from '@/lib/landing-page/types'

interface TeamProps {
  content: TeamSectionContent
}

export default function Team({ content }: TeamProps) {
  const introLines = splitLines(content.intro)

  return (
    <section
      id="team"
      className="relative section-shell overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(10,126,232,0.07) 0%, transparent 60%), #0D1B2E',
      }}
    >
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-eyebrow text-brand-cyan">{content.eyebrow}</span>
          <RichHeading
            as="h2"
            className="font-montserrat font-extrabold text-white leading-[1.1] mb-4"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            text={content.title}
          />
          <p className="text-lg text-white/55 leading-[1.7] max-w-[580px]">
            {introLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < introLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        </div>

        <div
          className="reveal mb-10"
          style={{
            background: 'var(--tint)',
            borderLeft: '4px solid var(--navy)',
            padding: '20px 24px',
            color: 'var(--navy)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          One named engineer owns your engagement from Week 1 to Week 6. Not a project manager. Not a
          ticketing system. A person.
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 reveal">
          {content.members.map(({ initials, name, role, badge, oneLiner, points, featured }) => (
            <div
              key={name}
              className={`border border-t-[3px] rounded-b-lg px-7 py-8 transition-all duration-200 ${
                featured
                  ? 'border-brand-cyan/30 border-t-brand-cyan bg-tech-tint'
                  : 'border-divider border-t-azure bg-white hover:border-t-brand-cyan'
              }`}
            >
              <div
                className="w-20 h-20 rounded-full mb-4 border-2 border-azure flex items-center justify-center"
                style={{ background: 'var(--tint)' }}
              >
                <span className="font-montserrat font-bold text-2xl text-navy">{initials || name.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="font-montserrat font-extrabold text-[18px] text-navy mb-1">
                {name}
              </div>
              <div className="font-montserrat text-[13px] font-bold text-azure mb-1.5">{role}</div>
              <span className="inline-block text-[11px] text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 rounded font-semibold mb-5">
                {badge}
              </span>
              {oneLiner ? (
                <p
                  className="text-[14px] italic mb-4"
                  style={{
                    color: 'var(--slate)',
                    borderLeft: '3px solid var(--azure)',
                    paddingLeft: '12px',
                    lineHeight: 1.5,
                  }}
                >
                  {oneLiner}
                </p>
              ) : null}
              <ul className="space-y-1.5">
                {points.map((pt) => (
                  <li key={pt} className="text-[13.5px] text-charcoal pl-4 relative leading-snug">
                    <span className="absolute left-0 text-azure">-</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center reveal">
          <button type="button" data-open-modal data-cta="after-team" className="btn-white btn-lg">
            {content.ctaText}
          </button>
        </div>
      </div>
    </section>
  )
}
