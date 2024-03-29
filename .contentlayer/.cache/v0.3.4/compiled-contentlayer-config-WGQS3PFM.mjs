// contentlayer.config.js
import { makeSource, defineDatabase } from "contentlayer-source-notion";
import * as notion from "@notionhq/client";
var client = new notion.Client({ auth: process.env.NEXT_NOTION_SECRET });
var Post = defineDatabase(() => ({
  name: "Post",
  databaseId: process.env.NEXT_NOTION_POST_DATABASE_ID,
  query: {
    filter: {
      property: "status",
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
var contentlayer_config_default = makeSource({ client, databaseTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WGQS3PFM.mjs.map
