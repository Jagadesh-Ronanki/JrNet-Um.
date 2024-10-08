/* MDX files */
import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: false,
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}))

export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    avatar: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}))

export const StaticPages = defineDocumentType(() => ({
  name: "Static",
  filePathPattern: `static/**/*.mdx`,
  contentType: "mdx",
  fields: {
  },
  computedFields,
}))

export const AuditReport = defineDocumentType(() => ({
  name: "Audit",
  filePathPattern: `audits/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    logo: {
      type: "string",
      required: false,
    },
    HMs: {
      type: "number",
      required: false,
    },
    earnings: {
      type: "number",
      required: false,
    },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Author, StaticPages, AuditReport],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
})

/* Notion Integration */
/* 
import { makeSource, defineDatabase } from 'contentlayer-source-notion'
import * as notion from '@notionhq/client'
 
const client = new notion.Client({ auth: process.env.NEXT_NOTION_SECRET })
 
export const Post = defineDatabase(() => ({
  name: 'Post',
  databaseId: process.env.NEXT_NOTION_POST_DATABASE_ID,
  query: {
    filter: {
      property: 'status',
      status: { equals: 'Published' },
    },
  },
  properties: {
    date: { name: 'Created time' },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._id}` },
  },
}))
 
export default makeSource({ client, databaseTypes: [Post] })
 */