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

const rssURL = 'https://www.gov.uk/search/all.atom?content_purpose_supergroup%5B%5D=news_and_communications&level_one_taxon=5b7b9532-a775-4bd2-a3aa-6ce380184b6c'

const run = async () => {
    cron.schedule("* 1 * * *", async () => {
        await updateAnnouncements()
    })

}

const getArticles = async (newArticles) => {

    for await (let article of newArticles) {
        let url = article?.link
        let endOfUrl = url.replace('https://www.gov.uk/', '')
        let articleBody = await GET({ url: `https://www.gov.uk/api/content/${endOfUrl}` }, (err, response) => {
            if (err) throw err
            return response
        })
        _.extend(article, {
            title: articleBody?.title,
            updated_at: articleBody?.updated_at,
            document_type: articleBody?.document_type,
            details: articleBody?.details,
            image: articleBody?.details?.image?.url,
            story: {
                title: articleBody?.title,
                description: articleBody?.description,
                body: articleBody?.details?.body,
            }
        })
    }

    return newArticles
}

const updateAnnouncements = async () => {
    try {

        const feed = await parser.parseURL(rssURL);

        const articleIds = _.pluck(feed?.items, 'id')
        const storedAnnouncements = await Announcements.find({}, '-_id id')
        const storedIds = _.pluck(storedAnnouncements, 'id')


        const newIds = _.difference(articleIds, storedIds)
        const newArticleSummaries = _.filter(feed?.items, (announcement) => {
            return _.contains(newIds, announcement?.id)
        })

        let newArticles = await getArticles(newArticleSummaries)

        for await (let article of newArticles) {

            _.extend(article, {
                somaliStory: {
                    title: await translateText(article?.story?.title),
                    description: await translateText(article?.story?.description),
                    body: await translateText(article?.story?.body)
                }
            })
        }

        await Announcements.insertMany(newArticles)

    } catch (error) {
        console.log(error)
        console.log("Error on processing the contracts")
    }
}

module.exports = { run }