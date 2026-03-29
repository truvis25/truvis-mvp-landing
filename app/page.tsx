import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import Problem from '@/components/Problem'
import Process from '@/components/Process'
import Comparison from '@/components/Comparison'
import UseCases from '@/components/UseCases'
import Deliverables from '@/components/Deliverables'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import BriefingModal from '@/components/BriefingModal'
import LandingEnhancements from '@/components/LandingEnhancements'
import { getLandingPageContent } from '@/lib/landing-page/get-content'
import { urlForImage } from '@/lib/sanity/image'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const content = await getLandingPageContent()
  const ogImage = content.seo.ogImage?.image ? urlForImage(content.seo.ogImage.image) : undefined

  return {
    title: content.seo.title,
    description: content.seo.description,
    openGraph: {
      title: content.seo.ogTitle,
      description: content.seo.ogDescription,
      type: 'website',
      images: ogImage
        ? [
            {
              url: ogImage,
              alt: content.seo.ogImage?.alt || content.seo.ogTitle,
            },
          ]
        : undefined,
    },
    alternates: content.seo.canonicalUrl
      ? {
          canonical: content.seo.canonicalUrl,
        }
      : undefined,
  }
}

export default async function Home() {
  const content = await getLandingPageContent()

  return (
    <>
      <Navbar content={content.navbar} />
      <main>
        <Hero content={content.hero} />
        <ProofBar stats={content.proofStats} />
        <Problem content={content.problem} />
        <section className="section-shell bg-white">
          <div className="section-container">
            <p className="bridge-sentence reveal">
              Every one of these failures is preventable.
              <br />
              Here is the process that prevents them.
            </p>
          </div>
        </section>
        <Process content={content.process} />
        <UseCases content={content.useCases} />
        <Comparison content={content.comparison} />
        <Deliverables content={content.deliverables} />
        <Team content={content.team} />
        <Pricing content={content.pricing} />
        <Portfolio content={content.portfolio} details={content.portfolioDetails} />
        <CTA content={content.cta} />
      </main>
      <div className="mobile-cta-bar">
        <button type="button" data-open-modal data-cta="final">
          Schedule a Briefing →
        </button>
      </div>
      <BriefingModal />
      <LandingEnhancements />
      <Footer content={content.footer} />
    </>
  )
}
