import ContactForm from '@/components/ContactForm'
import RichHeading from '@/components/RichHeading'
import { splitLines } from '@/lib/landing-page/helpers'
import type { HeroContent } from '@/lib/landing-page/types'

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  const descriptionLines = splitLines(content.description)
  const disclaimerLines = splitLines(content.disclaimer)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 65% 70% at 75% 50%, rgba(10,126,232,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 15% 80%, rgba(5,175,242,0.05) 0%, transparent 60%), #0D1B2E',
      }}
    >
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <span className="animate-fade-in-up anim-delay-1 section-eyebrow text-brand-cyan">
              {content.eyebrow}
            </span>

            <RichHeading
              as="h1"
              className="animate-fade-in-up anim-delay-2 font-montserrat font-black text-white leading-[1.08] mb-6"
              text={content.title}
              highlightText={content.highlightedText}
              highlightClassName="text-azure"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)' }}
            />

            <p className="animate-fade-in-up anim-delay-3 text-white/75 leading-relaxed mb-4 max-w-[520px]"
               style={{ fontSize: 'clamp(16px, 2vw, 19px)' }}>
              {descriptionLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < descriptionLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>

            <p className="animate-fade-in-up anim-delay-3 text-sm text-white/45 leading-relaxed border-l-2 border-azure pl-4 mb-8 max-w-[460px]">
              {content.subDescription}
            </p>

            <div className="animate-fade-in-up anim-delay-4 flex flex-wrap gap-3 mb-10">
              {content.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 px-4 py-2 border border-brand-cyan/30 rounded bg-brand-cyan/06 text-brand-cyan text-sm font-medium font-inter"
                  style={{ background: 'rgba(5,175,242,0.06)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="animate-fade-in-up anim-delay-5 flex flex-col gap-3 items-start">
              <a href={content.ctaHref} className="btn-white btn-lg">
                {content.ctaText}
              </a>
              <p className="text-xs text-slate-500 italic">
                {disclaimerLines.map((line, index) => (
                  <span key={`${line}-${index}`}>
                    {line}
                    {index < disclaimerLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="animate-fade-in-up anim-delay-6">
            <div className="bg-white rounded-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] p-8">
              <span className="section-eyebrow text-azure mb-2">{content.formEyebrow}</span>
              <h2 className="font-montserrat font-bold text-xl text-navy mb-2">
                {content.formTitle}
              </h2>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {content.formDescription}
              </p>
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
