require('dotenv').config()

module.exports = {
  mongo: {
    uri: process.env.DATABASE_URI,
    options: {
      useNewUrlParser: true,
      poolSize: 10, // Maintain up to 10 socket connections
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  }
}
