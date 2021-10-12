require('dotenv').config();
const { Client } = require("@notionhq/client")

const notion = new Client({
    auth: process.env.NOTION_TOKEN
})

exports.getLatestDate = async function() {
    const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        sorts : [
            {
                property: "Date",
                direction: "descending",
            }
        ]
    })

    // return response
    const pages = response.results;
    const latestDate = pages[0].properties.Date.date?.start;
    return (latestDate) ? latestDate : new Date().toISOString()
}

 exports.createPagesAutomatically = async function(latestDate, numOfPagesToCreate) {
    console.log("about to create ", numOfPagesToCreate, " pages starting from ", latestDate);

    for (var page_n = 1; page_n <= numOfPagesToCreate; page_n++) {
        const date = new Date(latestDate)
        date.setDate(date.getDate() + page_n)
        console.log('about to create page with date: ', date.toISOString().substring(0, 10))

        const response = await notion.pages.create({
            parent: {
                database_id: process.env.DATABASE_ID,
            },

            properties: {
                Date: {
                    date: {
                        start: date.toISOString().substring(0, 10)
                    }
                }
            }
        })
        console.log("page created: ", response.url);
    }
}