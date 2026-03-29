import ContactForm from '@/components/ContactForm'
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

          {/* Right: form */}
          <div className="bg-white rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] p-8">
            <span className="section-eyebrow text-azure">{content.formEyebrow}</span>
            <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
              {content.formTitle}
            </h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              {content.formDescription}
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
