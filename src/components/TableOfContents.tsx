'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import { type Section, type Subsection } from '@/lib/sections'

export function TableOfContents({
  tableOfContents,
}: {
  tableOfContents: Array<Section>
}) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id)

  let getHeadings = useCallback((tableOfContents: Array<Section>) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        let el = document.getElementById(id)
        if (!el) return null

        let style = window.getComputedStyle(el)
        let scrollMt = parseFloat(style.scrollMarginTop)

        let top = window.scrollY + el.getBoundingClientRect().top - scrollMt
        return { id, top }
      })
      .filter((x): x is { id: string; top: number } => x !== null)
  }, [])

  useEffect(() => {
    if (tableOfContents.length === 0) return
    let headings = getHeadings(tableOfContents)
    function onScroll() {
      let top = window.scrollY
      let current = headings[0].id
      for (let heading of headings) {
        if (top >= heading.top - 10) {
          current = heading.id
        } else {
          break
        }
      }
      setCurrentSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [getHeadings, tableOfContents])

  function isActive(section: Section | Subsection) {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <nav aria-labelledby="on-this-page-title" className="w-56 bg-transparent dark:bg-transparent">
      {tableOfContents.length > 0 && (
        <>
          <h2
            id="on-this-page-title"
            className="font-display text-sm font-medium text-amber-800 dark:text-amber-500 bg-transparent"
          >
            On this page
          </h2>
          <ol role="list" className="mt-4 space-y-3 text-sm bg-transparent dark:bg-transparent">
            {tableOfContents.map((section) => (
              <li key={section.id} className="bg-transparent dark:bg-transparent">
                <h3 className="bg-transparent dark:bg-transparent">
                  <Link
                    href={`#${section.id}`}
                    className={clsx(
                      'transition-colors duration-200 ease-in-out bg-transparent dark:bg-transparent',
                      isActive(section)
                        ? 'text-amber-900 font-medium dark:text-amber-500'
                        : 'font-normal text-amber-800 hover:text-amber-900 dark:text-white dark:hover:text-amber-300',
                    )}
                  >
                    {section.title}
                  </Link>
                </h3>
                {section.children.length > 0 && (
                  <ol
                    role="list"
                    className="mt-2 space-y-2 pl-4 text-amber-700 dark:text-white border-l border-slate-200 dark:border-slate-700 bg-transparent dark:bg-transparent"
                  >
                    {section.children.map((subSection) => (
                      <li key={subSection.id} className="ml-1 bg-transparent dark:bg-transparent">
                        <Link
                          href={`#${subSection.id}`}
                          className={clsx(
                            'transition-colors duration-200 ease-in-out block bg-transparent dark:bg-transparent',
                            isActive(subSection)
                              ? 'text-amber-900 font-medium dark:text-amber-300'
                              : 'text-amber-700 hover:text-amber-900 dark:text-white dark:hover:text-amber-300',
                          )}
                        >
                          {subSection.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                )}
              </li>
            ))}
          </ol>
        </>
      )}
    </nav>
  )
}
