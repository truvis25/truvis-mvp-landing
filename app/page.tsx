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
        <Solution content={content.solution} />
        <Process content={content.process} />
        <Comparison content={content.comparison} />
        <UseCases content={content.useCases} />
        <Deliverables content={content.deliverables} />
        <Team content={content.team} />
        <Pricing content={content.pricing} />
        <Portfolio content={content.portfolio} />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  )
}
