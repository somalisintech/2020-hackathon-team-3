const mongoose = require("mongoose")
const express = require("express")
const Announcements = require("../db/announcements/collection")


const announcementsRouter = express.Router()

announcementsRouter.get("/", async (req, res, next) => {
    try {

        let items = await Announcements.find({}, 'updated_at document_type story somaliStory image')

        return res.json(items)
    } catch (error) {
        console.log(error)
    }
})


module.exports = announcementsRouter
