const mongoose = require('mongoose')

const musicModel = mongoose.Schema({
    name: String,
    links: {youtube: String, spotify: String}
})

module.exports = mongoose.model("Music", musicModel)