const { Client } = require('@notionhq/client');

/* Source: https://developers.notion.com/reference/post-search */

const notion = new Client({ auth: process.env.NOTION_SECRET});

(async () => {
  const response = await notion.search({
    filter: {
      value: 'database',
      property: 'object'
    },
    sort: {
      direction: 'ascending',
      timestamp: 'last_edited_time'
    },
  });
  console.log(response);
})();