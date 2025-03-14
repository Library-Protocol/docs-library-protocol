import { type Node } from '@markdoc/markdoc'
import { Fragment } from 'react'

import { DocsHeader } from '@/components/DocsHeader'
import { PrevNextLinks } from '@/components/PrevNextLinks'
import { Prose } from '@/components/Prose'
import { TableOfContents } from '@/components/TableOfContents'
import { collectSections } from '@/lib/sections'

export function DocsLayout({
  children,
  frontmatter: { title },
  nodes,
}: {
  children: React.ReactNode
  frontmatter: { title?: string }
  nodes: Array<Node>
}) {
  let tableOfContents = collectSections(nodes)

  return (
    <Fragment>
      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16 scrollbar-invisible">
        <article className="overflow-visible">
          <DocsHeader title={title} />
          <Prose>{children}</Prose>
        </article>
        <PrevNextLinks />
      </div>
      
      <div className="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:py-16 xl:pr-6">
        <div className="px-8">
          <TableOfContents tableOfContents={tableOfContents} />
        </div>
      </div>
    </Fragment>
  )
}
