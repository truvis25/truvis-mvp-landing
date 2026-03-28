const stats = [
  { stat: 'Google-trained', label: 'Engineers' },
  { stat: '3.9B devices', label: 'Android OS deployment' },
  { stat: '9+ years', label: 'Scalable backend systems' },
  { stat: '130M+ records', label: 'Production platforms' },
  { stat: 'UAE · UK · US · Africa', label: 'Geographies served' },
]

export default function ProofBar() {
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
