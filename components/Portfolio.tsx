import CmsImage from '@/components/CmsImage'
import RichHeading from '@/components/RichHeading'
import type { PortfolioSectionContent } from '@/lib/landing-page/types'

interface PortfolioProps {
  content: PortfolioSectionContent
}

export default function Portfolio({ content }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
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

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide rounded-tl-lg">
                  Project
                </th>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide">
                  Scale &amp; Category
                </th>
                <th className="bg-navy text-white font-montserrat text-[13px] font-bold text-left px-6 py-4 tracking-wide rounded-tr-lg hidden lg:table-cell">
                  Relevance to Your Build
                </th>
              </tr>
            </thead>
            <tbody>
              {content.items.map(({ name, category, scale, relevance, logo }, i) => (
                <tr key={`${name}-${i}`} className={i % 2 === 0 ? 'bg-white' : 'bg-stripe'}>
                  <td className="px-6 py-5 border-b border-divider align-top">
                    <CmsImage
                      value={logo}
                      width={48}
                      height={48}
                      sizes="48px"
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <span className="font-bold text-navy text-[15px] block mb-0.5">{name}</span>
                    <span className="text-[12px] text-slate-400">{category}</span>
                  </td>
                  <td className="px-6 py-5 border-b border-divider align-top">
                    <span className="text-[14px] text-brand-teal font-semibold">{scale}</span>
                  </td>
                  <td className="px-6 py-5 border-b border-divider align-top text-[14px] text-charcoal leading-relaxed hidden lg:table-cell">
                    {relevance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
