const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

const connectionDB = (url) => {
    mongoose.connect(MONGODB_CONNECTION_URL)
    .then(() => {
        console.log('connection to MongoDB succesful')
    })
    .catch((err) => {
        console.log ('Connection to MongoDB failed', err.message)
    })
}


module.exports = connectionDB