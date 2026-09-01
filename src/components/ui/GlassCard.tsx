import type { HTMLAttributes, ReactNode } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

function joinClassNames(...values: Array<string | undefined>): string {
  return values.filter(Boolean).join(' ')
}

/** Contenedor glassmorphism reutilizable (blur + borde translúcido + hover glow). */
export function GlassCard({ children, className, ...rest }: GlassCardProps) {
  return (
    <div className={joinClassNames('glass-card rounded-xl p-5', className)} {...rest}>
      {children}
    </div>
  )
}
