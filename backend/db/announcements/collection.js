const mongoose = require("mongoose")
const AnnouncementSchema = require("./schema")

const Announcements = mongoose.model("announcements", AnnouncementSchema)

module.exports = Announcements
