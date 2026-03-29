import RichHeading from '@/components/RichHeading'
import { splitLines } from '@/lib/landing-page/helpers'
import type { CtaSectionContent } from '@/lib/landing-page/types'

interface CTAProps {
  content: CtaSectionContent
}

export default function CTA({ content }: CTAProps) {
  const descriptionLines = splitLines(content.description)
  const officeParts = splitLines(content.officeLine.split('·').join('\n'))

  return (
    <section
      id="contact"
      className="relative section-shell overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,126,232,0.08) 0%, transparent 70%), #0D1B2E',
      }}
    >
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      <div className="relative section-container">
        <div className="section-header reveal max-w-[760px]">
          {/* Left: copy */}
          <div>
            <span className="section-eyebrow text-brand-cyan">{content.eyebrow}</span>
            <RichHeading
              as="h2"
              className="font-montserrat font-black text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
              text={content.title}
            />
            <p className="text-[18px] text-white/60 leading-relaxed mb-8 max-w-[460px]">
              {descriptionLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < descriptionLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>

            <div className="space-y-3 mb-10">
              {content.bullets.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" />
                  <span className="text-sm text-brand-cyan font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button type="button" data-open-modal data-cta="final" className="btn-white btn-lg mb-10">
              Schedule a Briefing →
            </button>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[13px] text-white/30 leading-relaxed">
                {officeParts.map((part, index) => (
                  <span key={`${part}-${index}`}>
                    {part}
                    {index < officeParts.length - 1 ? ' · ' : null}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
