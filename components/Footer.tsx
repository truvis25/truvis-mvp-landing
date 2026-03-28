export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/50 py-8 px-8 text-center text-[13px]">
      <strong className="text-white/80">TruVis Tech</strong>
      {' '}is part of TruVis International Services
      &nbsp;·&nbsp;
      Where Trust Creates True Vision
      &nbsp;·&nbsp;
      © {new Date().getFullYear()} TruVis International Services. All rights reserved.
    </footer>
  )
}
