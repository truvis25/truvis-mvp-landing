import type { ReactNode } from 'react'
import {
  Activity,
  BookOpen,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers,
  Zap,
} from 'lucide-react'

function IconWrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-azure inline-flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

const sharedProps = {
  color: 'currentColor',
  strokeWidth: 1.5,
}

const iconMap = {
  sourceCode: <Code2 {...sharedProps} />,
  apiSpec: <Zap {...sharedProps} />,
  architecture: <Layers {...sharedProps} />,
  database: <Database {...sharedProps} />,
  infrastructure: <Cloud {...sharedProps} />,
  pipeline: <GitBranch {...sharedProps} />,
  monitoring: <Activity {...sharedProps} />,
  runbook: <BookOpen {...sharedProps} />,
}

export type IconKey = keyof typeof iconMap

export function DeliverableIcon({ iconKey, className = '' }: { iconKey: string; className?: string }) {
  const key = iconKey as IconKey
  const content = iconMap[key] || iconMap.sourceCode
  return <IconWrap className={className}>{content}</IconWrap>
}

