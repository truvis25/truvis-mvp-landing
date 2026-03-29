import RichHeading from '@/components/RichHeading'
import type { ComparisonSectionContent } from '@/lib/landing-page/types'

interface ComparisonProps {
  content: ComparisonSectionContent
}

export default function Comparison({ content }: ComparisonProps) {
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
        </div>

        <div className="comparison-desktop overflow-x-auto mt-10 reveal">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  className="text-left px-7 py-5 font-montserrat text-sm tracking-wide text-white rounded-tl-lg w-1/2"
                  style={{ background: '#6B7280', fontWeight: 400 }}
                >
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
                    style={{ color: '#6B7280', fontWeight: 400 }}
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

        <div className="comparison-mobile md:hidden mt-8 reveal">
          {content.rows.map(({ agency, truvis }, index) => (
            <details key={`${agency}-${index}`}>
              <summary>Comparison Point {index + 1}</summary>
              <div className="p-4 border-t border-divider">
                <p className="text-xs uppercase tracking-[2px] text-slate-500 font-montserrat mb-2">
                  {content.agencyHeading}
                </p>
                <p className="text-sm text-slate-500 font-normal leading-relaxed mb-4">{agency}</p>
                <p className="text-xs uppercase tracking-[2px] text-navy font-montserrat mb-2">
                  {content.truvisHeading}
                </p>
                <p className="text-sm text-charcoal font-medium leading-relaxed">{truvis}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
