import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className = '', hover = true, style }: CardProps) {
  return (
    <div
      className={`
        p-6 rounded-2xl shadow-md
        bg-gray-50 dark:bg-dark-card
        border border-transparent dark:border-dark-border
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`text-xl font-semibold mb-3 text-slate-900 dark:text-white ${className}`}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-slate-600 dark:text-slate-300 ${className}`}>
      {children}
    </p>
  )
}
