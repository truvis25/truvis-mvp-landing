import type { Image } from 'sanity'

export interface LinkItem {
  label: string
  href: string
}

export interface CmsImageField {
  image?: Image
  alt?: string
}

export interface SeoContent {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  canonicalUrl?: string
  ogImage?: CmsImageField
}

export interface NavbarContent {
  brandName: string
  links: LinkItem[]
  ctaText: string
  ctaHref: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  highlightedText: string
  description: string
  subDescription: string
  tags: string[]
  ctaText: string
  ctaHref: string
  disclaimer: string
  formEyebrow: string
  formTitle: string
  formDescription: string
}

export interface ProofStat {
  stat: string
  label: string
}

export interface IntroSectionContent {
  eyebrow: string
  title: string
  intro: string
}

export interface ProblemPattern {
  number: string
  title: string
  body: string
}

export interface ProcessStep {
  label: string
  title: string
  points: string[]
  dark: boolean
}

export interface ComparisonRow {
  agency: string
  truvis: string
}

export interface DeliverableCard {
  icon: string
  title: string
  body: string
}

export interface TeamMember {
  initials?: string
  name: string
  role: string
  badge: string
  oneLiner?: string
  points: string[]
  featured: boolean
  photo?: CmsImageField
}

export interface PricingMilestone {
  pct: string
  trigger: string
  desc: string
}

export interface PricingPackage {
  title: string
  amount: string
  items: string[]
  accent: 'navy' | 'azure' | string
}

export interface PortfolioItem {
  name: string
  category: string
  scale: string
  relevance: string
  logo?: CmsImageField
}

export interface ProblemSectionContent extends IntroSectionContent {
  patterns: ProblemPattern[]
}

export interface ProcessSectionContent extends IntroSectionContent {
  steps: ProcessStep[]
  ctaText: string
  ctaHref: string
}

export interface ComparisonSectionContent extends IntroSectionContent {
  agencyHeading: string
  truvisHeading: string
  rows: ComparisonRow[]
}

export interface UseCasesSectionContent extends IntroSectionContent {
  rightTitle: string
  notRightTitle: string
  rightFor: string[]
  notFor: string[]
}

export interface DeliverablesSectionContent extends IntroSectionContent {
  items: DeliverableCard[]
}

export interface TeamSectionContent extends IntroSectionContent {
  members: TeamMember[]
  ctaText: string
  ctaHref: string
}

export interface PricingSectionContent extends IntroSectionContent {
  milestones: PricingMilestone[]
  packages: PricingPackage[]
}

export interface PortfolioSectionContent extends IntroSectionContent {
  items: PortfolioItem[]
}

export interface PortfolioDetailCard {
  title: string
  built: string
  outcome: string
  linkText: string
  linkHref: string
}

export interface CtaSectionContent {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  officeLine: string
  formEyebrow: string
  formTitle: string
  formDescription: string
}

export interface FooterContent {
  companyName: string
  tagline: string
  motto: string
  copyrightPrefix: string
}

export interface LandingPageData {
  seo: SeoContent
  navbar: NavbarContent
  hero: HeroContent
  proofStats: ProofStat[]
  problem: ProblemSectionContent
  process: ProcessSectionContent
  comparison: ComparisonSectionContent
  useCases: UseCasesSectionContent
  deliverables: DeliverablesSectionContent
  team: TeamSectionContent
  pricing: PricingSectionContent
  portfolio: PortfolioSectionContent
  portfolioDetails: PortfolioDetailCard[]
  cta: CtaSectionContent
  footer: FooterContent
}
