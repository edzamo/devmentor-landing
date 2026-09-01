export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
      <p className="text-gradient mb-2 text-sm font-semibold tracking-wide uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl">{title}</h2>
      {description ? (
        <p className={`mt-3 max-w-2xl text-[var(--color-text-muted)] ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
