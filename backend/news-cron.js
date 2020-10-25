const cron = require("node-cron")
const _ = require("underscore")
const { GET, PATCH } = require("./lib/requests")
const Announcements = require("./db/announcements/collection")

let Parser = require('rss-parser');
const { translateText } = require("./translate");
let parser = new Parser({
    customFields: {
        feed: ['summary']
    }
});

const htmlparser2 = require("htmlparser2");



const rssURL = 'https://www.gov.uk/search/all.atom?content_purpose_supergroup%5B%5D=news_and_communications&level_one_taxon=5b7b9532-a775-4bd2-a3aa-6ce380184b6c'

const rp = require('request-promise');


const run = async () => {
    //cron.schedule("* 1 * * *", async () => {
    getAnnouncements()
    //scrape()
    //})

}

/* const scrape = async () => {
    const url = 'https://www.gov.uk/government/news/sewage-signals-early-warning-of-coronavirus-outbreaks'
    const html = await rp(url)

    let inScriptElement = false;
    const parser = new htmlparser2.Parser({
        onopentag(name, attribs) {
            if (name === "script" && attribs.type === "application/ld+json") {
                inScriptElement = true;
            }
        },
        ontext(text) {
            if (inScriptElement === true) console.log(text);
        },
        onclosetag(tagname) {
            if (tagname === "script") {
                console.log("That's it?!");
            }
        },
    });

    parser.write(html);
    parser.end();
} */

const getAnnouncements = async () => {
    try {

        const feed = await parser.parseURL(rssURL);

        const articleIds = _.pluck(feed?.items, 'id')
        const storedAnnouncements = await Announcements.find({}, '-_id id')
        const storedIds = _.pluck(storedAnnouncements, 'id')


        const newIds = _.difference(articleIds, storedIds)
        const newArticles = _.filter(feed?.items, (announcement) => {
            return _.contains(newIds, announcement?.id)
        })

        //let momohamedFunction = (x) => console.log(x)
        // const articlesWithText = mohamedFunction(newArticles)
        //const translatedFeed = _.map(feed,)
        console.log(newArticles)
        //await Announcements.insertMany(feed?.items)
        let dog = `"<div class=\\"govspeak\\"><p>These documents are directions under section 129(6) of the Apprenticeships, Skills, Children and Learning Act 2009 about calculating students' exam results during the coronavirus (COVID-19) outbreak.</p>\\n\\n<p>This direction follows a previous announcement about <a href=\\"https://www.gov.uk/government/news/further-details-on-exams-and-grades-announced\\" class=\\"govuk-link\\">cancelling exams</a>.</p>\\n\\n<p>Ofqual guidance on arrangements for <a href=\\"https://www.gov.uk/government/publications/gcses-as-and-a-level-awarding-summer-2020\\" class=\\"govuk-link\\">awarding qualification grades in summer 2020</a> is available.</p>\\n\\n</div>'`
        await translateText(dog /* _.pluck(newArticles, 'title') */)

    } catch (error) {
        console.log(error)
        console.log("Error on processing the contracts")
    }
}

module.exports = { run }