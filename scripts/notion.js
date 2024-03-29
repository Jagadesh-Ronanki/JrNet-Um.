// @ts-check

const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv');

dotenv.config();

const go = async () => {
  console.log(process.env.NEXT_NOTION_SECRET)

  if ("secret_lgHbRVOE2NcoisLwLLNnZFAjtpNQHoKWFdQgljUgbkU" /* process.env.NEXT_NOTION_SECRET */) {
    try {
      await NotionParse.parseNotion("secret_lgHbRVOE2NcoisLwLLNnZFAjtpNQHoKWFdQgljUgbkU"/* process.env.NEXT_NOTION_SECRET */, './src/content', [
        /* {
          databaseId: process.env.NEXT_NOTION_PORTFOLIO_DATABASE_ID || '',
          contentType: 'Portfolio'
        }, */
        {
          /* https://www.notion.so/Website-c268a2ec58404a1f9e3062a5c96f1379?pvs=4 */
          databaseId: "39e3c5a36c874c0b8c2bbd3a0a3d3409" /* process.env.NEXT_NOTION_POST_DATABASE_ID */ || '',
          contentType: 'Post',
          // languageField: 'lang',
          filterFields: [ 'Category', 'image' ]
        },
      ]) 
    } catch (error) {
      console.log(error)
    }
  }
};

go().then(() => {
  console.log('Done');
});