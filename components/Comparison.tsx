import RichHeading from '@/components/RichHeading'
import type { ComparisonSectionContent } from '@/lib/landing-page/types'

interface ComparisonProps {
  content: ComparisonSectionContent
}

export default function Comparison({ content }: ComparisonProps) {
  return (
    <section className="py-24 px-8 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="section-eyebrow">{content.eyebrow}</span>
          <RichHeading
            as="h2"
            className="section-h2"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            text={content.title}
          />
        </div>

        <div className="overflow-x-auto mt-10">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left px-7 py-5 font-montserrat font-bold text-sm tracking-wide text-white bg-slate-500 rounded-tl-lg w-1/2">
                  {content.agencyHeading}
                </th>
                <th className="text-left px-7 py-5 font-montserrat font-bold text-sm tracking-wide text-white bg-navy rounded-tr-lg w-1/2">
                  {content.truvisHeading}
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map(({ agency, truvis }, i) => (
                <tr key={`${agency}-${i}`}>
                  <td
                    className={`px-7 py-5 text-[14px] text-slate-500 leading-relaxed border-b border-divider align-top ${
                      i % 2 === 0 ? 'bg-white' : 'bg-stripe'
                    }`}
                  >
                    {agency}
                  </td>
                  <td
                    className={`px-7 py-5 text-[14px] text-charcoal font-medium leading-relaxed border-b border-divider align-top ${
                      i % 2 === 0 ? 'bg-tech-tint' : 'bg-[#d8ecfd]'
                    }`}
                  >
                    {truvis}
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
