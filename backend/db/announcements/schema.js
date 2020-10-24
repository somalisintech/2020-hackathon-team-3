const mongoose = require("mongoose")

const AnnouncementsSchema = new mongoose.Schema({
    title: String,
    link: String,
    pubDate: String,
    id: String,
    isoDate: String,
    summary: String,
    article: { type: mongoose.Schema.Types.ObjectId, }
}, { timestamps: true })

module.exports = AnnouncementsSchema
