import clsx from 'clsx'

export function Prose<T extends React.ElementType = 'div'>({
  as,
  className,
  ...props
}: React.ComponentPropsWithoutRef<T> & {
  as?: T
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-slate max-w-none text-slate-900 dark:prose-invert dark:text-slate-200 bg-transparent',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal prose-headings:text-slate-900 dark:prose-headings:text-amber-500 lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-slate-700 dark:prose-lead:text-slate-300',
        // links
        'prose-a:font-semibold prose-a:text-amber-700 dark:prose-a:text-amber-500',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,transparent),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.amber.500))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:transparent] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.amber.900))] dark:hover:prose-a:[--tw-prose-underline-size:4px]',
        // pre
        'prose-pre:rounded-xl prose-pre:bg-transparent prose-pre:shadow-none prose-pre:whitespace-pre-wrap prose-pre:break-words dark:prose-pre:bg-slate-800/20 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10',
        // code
        'prose-code:whitespace-pre-wrap prose-code:break-words prose-code:text-wrap',
        // hr
        'dark:prose-hr:border-slate-800',
        // paragraphs and base text
        'prose-p:text-slate-900 dark:prose-p:text-slate-200',
        // list items
        'prose-li:text-slate-900 dark:prose-li:text-slate-200',
        // increase font size slightly
        'text-base sm:text-lg',
      )}
      {...props}
    />
  )
}
