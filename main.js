require('dotenv').config();
const {getLatestDate, createPagesAutomatically} = require('./functions.js')

console.log(process.argv);
var numOfPagesToCreate = 10;

if (process.argv[2]?.match(/-[1-9][0-9]*/)) {
    numOfPagesToCreate = process.argv[2].substring(1);
    console.log("number of pages:", numOfPagesToCreate)
}

// const databaseID = process.env.DATABASE_ID
( async() => {
    var latestDate = "";
    latestDate = await getLatestDate()
    createPagesAutomatically(latestDate, numOfPagesToCreate)
    console.log("The end")


})()