import type { ProofStat } from '@/lib/landing-page/types'

interface ProofBarProps {
  stats: ProofStat[]
}

export default function ProofBar({ stats }: ProofBarProps) {
  return (
    <div className="bg-white border-b border-divider py-6">
      <div className="section-container flex flex-wrap items-center justify-center divide-x divide-divider max-sm:block max-sm:divide-x-0">
        {stats.map(({ stat, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center px-7 py-2 max-sm:px-5 max-sm:py-3 max-sm:border-b max-sm:border-divider max-sm:last:border-b-0"
          >
            <span className="font-montserrat font-extrabold text-[15px] text-navy mb-0.5">
              {stat}
            </span>
            <span className="text-xs text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
