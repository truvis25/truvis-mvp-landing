import type {LandingPageData} from './types'

function sanitizeStrings(values: (string | undefined | null)[]): string[] {
  return values.filter((value): value is string => Boolean(value && value.trim()))
}

export function normalizeLandingPageData(input: LandingPageData): LandingPageData {
  return {
    ...input,
    navbar: {
      ...input.navbar,
      links: input.navbar.links.filter((link) => link.label && link.href),
    },
    hero: {
      ...input.hero,
      tags: sanitizeStrings(input.hero.tags),
    },
    proofStats: input.proofStats.filter((item) => item.stat && item.label),
    problem: {
      ...input.problem,
      patterns: input.problem.patterns.filter((item) => item.number && item.title && item.body),
    },
    process: {
      ...input.process,
      steps: input.process.steps
        .filter((step) => step.label && step.title)
        .map((step) => ({
          ...step,
          points: sanitizeStrings(step.points),
        })),
    },
    comparison: {
      ...input.comparison,
      rows: input.comparison.rows.filter((row) => row.agency && row.truvis),
    },
    useCases: {
      ...input.useCases,
      rightFor: sanitizeStrings(input.useCases.rightFor),
      notFor: sanitizeStrings(input.useCases.notFor),
    },
    deliverables: {
      ...input.deliverables,
      items: input.deliverables.items.filter((item) => item.title && item.body),
    },
    team: {
      ...input.team,
      members: input.team.members
        .filter((member) => member.name && member.role)
        .map((member) => ({
          ...member,
          points: sanitizeStrings(member.points),
        })),
    },
    pricing: {
      ...input.pricing,
      milestones: input.pricing.milestones.filter(
        (item) => item.pct && item.trigger && item.desc,
      ),
      packages: input.pricing.packages
        .filter((item) => item.title && item.amount)
        .map((item) => ({
          ...item,
          items: sanitizeStrings(item.items),
        })),
    },
    portfolio: {
      ...input.portfolio,
      items: input.portfolio.items.filter(
        (item) => item.name && item.category && item.scale && item.relevance,
      ),
    },
    portfolioDetails: input.portfolioDetails.filter(
      (item) => item.title && item.built && item.outcome && item.linkText,
    ),
    cta: {
      ...input.cta,
      bullets: sanitizeStrings(input.cta.bullets),
    },
  }
}
