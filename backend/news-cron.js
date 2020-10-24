const cron = require("node-cron")
const _ = require("underscore")
const { GET, PATCH } = require("./lib/requests")
const Announcements = require("./db/announcements/collection")

let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        feed: ['summary']
    }
});

const rssURL = 'https://www.gov.uk/search/all.atom?content_purpose_supergroup%5B%5D=news_and_communications&level_one_taxon=5b7b9532-a775-4bd2-a3aa-6ce380184b6c'


const run = async () => {
    cron.schedule("* 1 * * *", async () => {
        getAnnouncements()
    })

}


const getAnnouncements = async () => {
    try {

        let feed = await parser.parseURL(rssURL);

        //let newAnnouncements = Announcements.find({})
        //To do only update if Id not exist 
        await Announcements.insertMany(feed)

    } catch (error) {
        console.log(error)
        console.log("Error on processing the contracts")
    }
}

module.exports = { run }