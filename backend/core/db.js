const mongoose = require('mongoose')
const config = require('./config')

mongoose.connect(config.mongo.uri, config.mongo.options)
const db = mongoose.connection;

module.exports = db