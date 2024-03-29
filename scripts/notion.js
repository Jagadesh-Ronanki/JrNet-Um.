// @ts-check

const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv');

dotenv.config();

const go = async () => {
  console.log(process.env.NEXT_NOTION_SECRET)

  if (process.env.NEXT_NOTION_SECRET) {
    try {
      await NotionParse.parseNotion(process.env.NEXT_NOTION_SECRET, './src/content', [
        /* {
          databaseId: process.env.NEXT_NOTION_PORTFOLIO_DATABASE_ID || '',
          contentType: 'Portfolio'
        }, */
        {
          databaseId: process.env.NEXT_NOTION_POST_DATABASE_ID || '',
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