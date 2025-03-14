import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'rounded-full bg-amber-900 py-2 px-4 text-sm font-semibold text-white hover:bg-amber-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/50 active:bg-amber-950',
  secondary:
    'rounded-full bg-amber-100 py-2 px-4 text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500/50 active:text-amber-900 dark:bg-amber-900 dark:text-amber-100 dark:hover:bg-amber-800',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(variantStyles[variant], className)

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
