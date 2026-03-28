import CmsImage from '@/components/CmsImage'
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
      className="relative py-24 px-8 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 50% 60% at 85% 20%, rgba(10,126,232,0.07) 0%, transparent 60%), #0D1B2E',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.members.map(({ name, role, badge, points, featured, photo }) => (
            <div
              key={name}
              className={`border border-t-[3px] rounded-b-lg px-7 py-8 transition-all duration-200 ${
                featured
                  ? 'border-brand-cyan/20 border-t-brand-cyan bg-azure/[0.06]'
                  : 'border-white/[0.07] border-t-azure bg-white/[0.04] hover:bg-white/[0.07] hover:border-t-brand-cyan'
              }`}
            >
              <CmsImage
                value={photo}
                width={96}
                height={96}
                sizes="96px"
                className="w-16 h-16 rounded-full object-cover mb-4 border border-white/20"
              />
              <div className="font-montserrat font-extrabold text-[18px] text-white mb-1">
                {name}
              </div>
              <div className="text-[13px] font-semibold text-azure mb-2">{role}</div>
              <span className="inline-block text-[11px] text-brand-cyan border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 rounded font-semibold mb-5">
                {badge}
              </span>
              <ul className="space-y-1.5">
                {points.map((pt) => (
                  <li key={pt} className="text-[13.5px] text-white/60 pl-4 relative leading-snug">
                    <span className="absolute left-0 text-azure">–</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href={content.ctaHref} className="btn-white btn-lg">
            {content.ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}
