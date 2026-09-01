import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary'

const BASE_CLASS_NAME =
  'inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-60'

const VARIANT_CLASS_NAME: Record<ButtonVariant, string> = {
  primary: 'btn-glow text-white',
  secondary: 'btn-outline-glass text-[var(--color-heading)]',
}

interface ButtonOwnProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

type LinkButtonProps = ButtonOwnProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>
type NativeButtonProps = ButtonOwnProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = LinkButtonProps | NativeButtonProps

function joinClassNames(...values: Array<string | undefined>): string {
  return values.filter(Boolean).join(' ')
}

/** Botón presentacional puro: renderiza `<a>` cuando recibe `href`, o `<button>` en caso contrario. */
export function Button(props: ButtonProps) {
  const { variant = 'primary', className, children, ...rest } = props
  const classes = joinClassNames(BASE_CLASS_NAME, VARIANT_CLASS_NAME[variant], className)

  if (rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
