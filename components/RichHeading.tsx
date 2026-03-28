import type {ElementType} from 'react'
import type {CSSProperties} from 'react'

interface RichHeadingProps {
  text: string
  className?: string
  highlightText?: string
  highlightClassName?: string
  as?: ElementType
  style?: CSSProperties
}

function normalizeNewlines(value: string): string[] {
  return value.split('\n').map((part) => part.trim()).filter(Boolean)
}

function renderWithHighlight(text: string, highlightText?: string, highlightClassName?: string) {
  if (!highlightText || !text.includes(highlightText)) {
    return text
  }

  const [before, after] = text.split(highlightText)
  return (
    <>
      {before}
      <span className={highlightClassName}>{highlightText}</span>
      {after}
    </>
  )
}

export default function RichHeading({
  text,
  className,
  highlightText,
  highlightClassName = 'text-azure',
  as: Component = 'h2',
  style,
}: RichHeadingProps) {
  const lines = normalizeNewlines(text)

  return (
    <Component className={className} style={style}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`}>
          {renderWithHighlight(line, highlightText, highlightClassName)}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </Component>
  )
}
