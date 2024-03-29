// contentlayer.config.js
import { makeSource, defineDatabase } from "contentlayer-source-notion";
import * as notion from "@notionhq/client";
import { defineDocumentType } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var client = new notion.Client({ auth: process.env.NEXT_NOTION_SECRET });
var Post = defineDatabase(() => ({
  name: "Post",
  databaseId: process.env.NEXT_NOTION_DATABASE_ID,
  query: {
    filter: {
      property: "Status",
      status: { equals: "Published" }
    }
  },
  properties: {
    date: { name: "Created time" }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `/posts/${post._id}` }
  }
}));
var Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    avatar: {
      type: "string",
      required: true
    },
    twitter: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({ client, databaseTypes: [Post] });
export {
  Author,
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-RR467Q5P.mjs.map
