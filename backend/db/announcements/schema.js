const mongoose = require("mongoose")

const AnnouncementsSchema = new mongoose.Schema({
    title: String,
    link: String,
    pubDate: String,
    id: String,
    isoDate: String,
    updated_at: String,
    document_type: String,
    details: mongoose.Schema.Types.Mixed,
    image: String,
    story: mongoose.Schema.Types.Mixed,
    somaliStory: mongoose.Schema.Types.Mixed,
}, { timestamps: true })

module.exports = AnnouncementsSchema
