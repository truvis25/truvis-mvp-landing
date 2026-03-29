import {fallbackLandingPageData} from './fallback-content'
import {normalizeLandingPageData} from './normalize'
import {landingPageQuery} from './query'
import type {LandingPageData} from './types'
import {sanityClient} from '@/lib/sanity/client'
import {sanityServerClient} from '@/lib/sanity/server-client'

type RawLandingPage = {
  seo?: LandingPageData['seo']
  navbar?: LandingPageData['navbar']
  hero?: LandingPageData['hero']
  proofStats?: LandingPageData['proofStats']
  problem?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    patterns?: LandingPageData['problem']['patterns']
  }
  solution?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    pillars?: LandingPageData['solution']['pillars']
  }
  process?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    steps?: LandingPageData['process']['steps']
    ctaText?: string
    ctaHref?: string
  }
  comparison?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    agencyHeading?: string
    truvisHeading?: string
    rows?: LandingPageData['comparison']['rows']
  }
  useCases?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    rightTitle?: string
    notRightTitle?: string
    rightFor?: string[]
    notFor?: string[]
  }
  deliverables?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    items?: LandingPageData['deliverables']['items']
  }
  team?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    members?: LandingPageData['team']['members']
    ctaText?: string
    ctaHref?: string
  }
  pricing?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    milestones?: LandingPageData['pricing']['milestones']
    packages?: LandingPageData['pricing']['packages']
  }
  portfolio?: {
    intro?: {
      eyebrow?: string
      title?: string
      intro?: string
    }
    items?: LandingPageData['portfolio']['items']
  }
  cta?: LandingPageData['cta']
  footer?: LandingPageData['footer']
}

function withFallback(cms?: RawLandingPage | null): LandingPageData {
  if (!cms) {
    return fallbackLandingPageData
  }

  return {
    seo: {...fallbackLandingPageData.seo, ...(cms.seo || {})},
    navbar: {...fallbackLandingPageData.navbar, ...(cms.navbar || {})},
    hero: {...fallbackLandingPageData.hero, ...(cms.hero || {})},
    proofStats: cms.proofStats?.length ? cms.proofStats : fallbackLandingPageData.proofStats,
    problem: {
      eyebrow: cms.problem?.intro?.eyebrow || fallbackLandingPageData.problem.eyebrow,
      title: cms.problem?.intro?.title || fallbackLandingPageData.problem.title,
      intro: cms.problem?.intro?.intro || fallbackLandingPageData.problem.intro,
      patterns:
        cms.problem?.patterns?.length
          ? cms.problem.patterns
          : fallbackLandingPageData.problem.patterns,
    },
    solution: {
      eyebrow: cms.solution?.intro?.eyebrow || fallbackLandingPageData.solution.eyebrow,
      title: cms.solution?.intro?.title || fallbackLandingPageData.solution.title,
      intro: cms.solution?.intro?.intro || fallbackLandingPageData.solution.intro,
      pillars:
        cms.solution?.pillars?.length
          ? cms.solution.pillars
          : fallbackLandingPageData.solution.pillars,
    },
    process: {
      eyebrow: cms.process?.intro?.eyebrow || fallbackLandingPageData.process.eyebrow,
      title: cms.process?.intro?.title || fallbackLandingPageData.process.title,
      intro: cms.process?.intro?.intro || fallbackLandingPageData.process.intro,
      steps:
        cms.process?.steps?.length ? cms.process.steps : fallbackLandingPageData.process.steps,
      ctaText: cms.process?.ctaText || fallbackLandingPageData.process.ctaText,
      ctaHref: cms.process?.ctaHref || fallbackLandingPageData.process.ctaHref,
    },
    comparison: {
      eyebrow: cms.comparison?.intro?.eyebrow || fallbackLandingPageData.comparison.eyebrow,
      title: cms.comparison?.intro?.title || fallbackLandingPageData.comparison.title,
      intro: cms.comparison?.intro?.intro || fallbackLandingPageData.comparison.intro,
      agencyHeading:
        cms.comparison?.agencyHeading || fallbackLandingPageData.comparison.agencyHeading,
      truvisHeading:
        cms.comparison?.truvisHeading || fallbackLandingPageData.comparison.truvisHeading,
      rows:
        cms.comparison?.rows?.length
          ? cms.comparison.rows
          : fallbackLandingPageData.comparison.rows,
    },
    useCases: {
      eyebrow: cms.useCases?.intro?.eyebrow || fallbackLandingPageData.useCases.eyebrow,
      title: cms.useCases?.intro?.title || fallbackLandingPageData.useCases.title,
      intro: cms.useCases?.intro?.intro || fallbackLandingPageData.useCases.intro,
      rightTitle: cms.useCases?.rightTitle || fallbackLandingPageData.useCases.rightTitle,
      notRightTitle: cms.useCases?.notRightTitle || fallbackLandingPageData.useCases.notRightTitle,
      rightFor:
        cms.useCases?.rightFor?.length ? cms.useCases.rightFor : fallbackLandingPageData.useCases.rightFor,
      notFor: cms.useCases?.notFor?.length ? cms.useCases.notFor : fallbackLandingPageData.useCases.notFor,
    },
    deliverables: {
      eyebrow:
        cms.deliverables?.intro?.eyebrow || fallbackLandingPageData.deliverables.eyebrow,
      title: cms.deliverables?.intro?.title || fallbackLandingPageData.deliverables.title,
      intro: cms.deliverables?.intro?.intro || fallbackLandingPageData.deliverables.intro,
      items:
        cms.deliverables?.items?.length
          ? cms.deliverables.items
          : fallbackLandingPageData.deliverables.items,
    },
    team: {
      eyebrow: cms.team?.intro?.eyebrow || fallbackLandingPageData.team.eyebrow,
      title: cms.team?.intro?.title || fallbackLandingPageData.team.title,
      intro: cms.team?.intro?.intro || fallbackLandingPageData.team.intro,
      members: cms.team?.members?.length ? cms.team.members : fallbackLandingPageData.team.members,
      ctaText: cms.team?.ctaText || fallbackLandingPageData.team.ctaText,
      ctaHref: cms.team?.ctaHref || fallbackLandingPageData.team.ctaHref,
    },
    pricing: {
      eyebrow: cms.pricing?.intro?.eyebrow || fallbackLandingPageData.pricing.eyebrow,
      title: cms.pricing?.intro?.title || fallbackLandingPageData.pricing.title,
      intro: cms.pricing?.intro?.intro || fallbackLandingPageData.pricing.intro,
      milestones:
        cms.pricing?.milestones?.length
          ? cms.pricing.milestones
          : fallbackLandingPageData.pricing.milestones,
      packages:
        cms.pricing?.packages?.length ? cms.pricing.packages : fallbackLandingPageData.pricing.packages,
    },
    portfolio: {
      eyebrow: cms.portfolio?.intro?.eyebrow || fallbackLandingPageData.portfolio.eyebrow,
      title: cms.portfolio?.intro?.title || fallbackLandingPageData.portfolio.title,
      intro: cms.portfolio?.intro?.intro || fallbackLandingPageData.portfolio.intro,
      items:
        cms.portfolio?.items?.length ? cms.portfolio.items : fallbackLandingPageData.portfolio.items,
    },
    cta: {...fallbackLandingPageData.cta, ...(cms.cta || {})},
    footer: {...fallbackLandingPageData.footer, ...(cms.footer || {})},
  }
}

export async function getLandingPageContent(): Promise<LandingPageData> {
  const client = sanityServerClient || sanityClient

  if (!client) {
    return normalizeLandingPageData(fallbackLandingPageData)
  }

  try {
    const cmsData = await client.fetch<RawLandingPage | null>(landingPageQuery)
    return normalizeLandingPageData(withFallback(cmsData))
  } catch {
    return normalizeLandingPageData(fallbackLandingPageData)
  }
}
