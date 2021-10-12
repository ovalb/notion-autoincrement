require('dotenv').config();
const {getLatestDate, createPagesAutomatically} = require('./functions.js')

var numOfPagesToCreate = 1;

if (process.argv[2]?.match(/-[1-9][0-9]*/)) {
    numOfPagesToCreate = process.argv[2].substring(1);
    console.log("number of pages:", numOfPagesToCreate)
} else {
    console.warn("Run as `node main.js -[num]` to specify the number of pages.");
    console.warn("Using default number of pages: ", numOfPagesToCreate);
}

( async() => {
    try {
        const latestDate = await getLatestDate();
        createPagesAutomatically(latestDate, numOfPagesToCreate);
    } catch(err) {
        console.error(err);
    }

})();