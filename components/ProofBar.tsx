import type { ProofStat } from '@/lib/landing-page/types'

interface ProofBarProps {
  stats: ProofStat[]
}

export default function ProofBar({ stats }: ProofBarProps) {
  return (
    <div className="bg-white border-b border-divider py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center divide-x divide-divider">
        {stats.map(({ stat, label }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center px-7 py-2 last:border-r-0 sm:border-r-0 md:border-r"
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
