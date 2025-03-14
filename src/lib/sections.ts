import { type Node } from '@markdoc/markdoc'
import { slugifyWithCounter } from '@sindresorhus/slugify'

interface HeadingNode extends Node {
  type: 'heading'
  attributes: {
    level: 1 | 2 | 3 | 4 | 5 | 6
    id?: string
    [key: string]: unknown
  }
}

type H1Node = HeadingNode & {
  attributes: {
    level: 1
  }
}

type H2Node = HeadingNode & {
  attributes: {
    level: 2
  }
}

type H3Node = HeadingNode & {
  attributes: {
    level: 3
  }
}

function isHeadingNode(node: Node): node is HeadingNode {
  return (
    node.type === 'heading' &&
    [1, 2, 3, 4, 5, 6].includes(node.attributes.level) &&
    (typeof node.attributes.id === 'string' ||
      typeof node.attributes.id === 'undefined')
  )
}

function isH1Node(node: Node): node is H1Node {
  return isHeadingNode(node) && node.attributes.level === 1
}

function isH2Node(node: Node): node is H2Node {
  return isHeadingNode(node) && node.attributes.level === 2
}

function isH3Node(node: Node): node is H3Node {
  return isHeadingNode(node) && node.attributes.level === 3
}

function getNodeText(node: Node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (child.type === 'text') {
      text += child.attributes.content
    }
    text += getNodeText(child)
  }
  return text
}

export type Subsection = (H3Node['attributes'] | H2Node['attributes']) & {
  id: string
  title: string
  children?: undefined
}

export type Section = (H1Node['attributes'] | H2Node['attributes']) & {
  id: string
  title: string
  children: Array<Subsection>
}

export function collectSections(
  nodes: Array<Node>,
  slugify = slugifyWithCounter(),
) {
  let sections: Array<Section> = []

  for (let node of nodes) {
    if (isH1Node(node) || isH2Node(node) || isH3Node(node)) {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        if (isH3Node(node)) {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h1` or `h2`',
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            id,
            title,
          })
        } else {
          // Handle both H1 and H2 as main sections
          sections.push({ ...node.attributes, id, title, children: [] })
        }
      }
    }

    sections.push(...collectSections(node.children ?? [], slugify))
  }

  return sections
}
