const mongoose = require("mongoose")
const AnnouncementSchema = require("./schema")

const Announcements = mongoose.model("entity-membership", AnnouncementSchema)

module.exports = Announcements
