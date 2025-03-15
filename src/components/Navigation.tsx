import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { navigation } from '@/lib/navigation'

export function Navigation({
  className,
  onLinkClick,
}: {
  className?: string
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>
}) {
  let pathname = usePathname()

  return (
    <nav className={clsx('text-base lg:text-sm bg-transparent', className)}>
      <ul role="list" className="space-y-9 bg-transparent">
        {navigation.map((section) => (
          <li key={section.title} className="bg-transparent">
            <h2 className="font-display font-medium text-amber-900 dark:text-amber-400 text-base bg-transparent">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-200 lg:mt-4 lg:space-y-4 dark:border-slate-700 bg-transparent"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative bg-transparent">
                  <Link
                    href={link.href}
                    onClick={onLinkClick}
                    className={clsx(
                      'block w-full pl-3.5 text-base before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full bg-transparent',
                      link.href === pathname
                        ? 'font-semibold text-amber-800 before:bg-amber-800 dark:text-amber-500 dark:before:bg-amber-500'
                        : 'text-amber-800 before:hidden before:bg-amber-500 hover:text-amber-900 hover:before:block dark:text-white dark:before:bg-amber-500 dark:hover:text-amber-300'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
