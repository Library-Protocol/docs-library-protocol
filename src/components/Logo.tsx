function LogomarkPaths() {
  return (
    <g fill="none" stroke="#8B4513" strokeLinejoin="round" strokeWidth={3}>
      {/* Book shape */}
      <path d="M6 6h24v24H6z" />
      {/* Book spine */}
      <path d="M12 6v24" />
      {/* Book pages */}
      <path d="M18 10h8M18 16h8M18 22h8" />
    </g>
  )
}

export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="flex items-center text-amber-800 dark:text-amber-500">
      <Logomark className="h-8 w-8" />
      <span className="ml-2 font-semibold">Library Protocol</span>
    </div>
  )
}
