import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Process from '@/components/Process'
import Comparison from '@/components/Comparison'
import UseCases from '@/components/UseCases'
import Deliverables from '@/components/Deliverables'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Problem />
        <Solution />
        <Process />
        <Comparison />
        <UseCases />
        <Deliverables />
        <Team />
        <Pricing />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
