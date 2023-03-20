const mongoose = require("mongoose")

const animeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    episodes: {
        total: {
            type: Number,
        },
        watched: {
            type: Number,
            default: 0,
        } 
    }
})

module.exports = mongoose.model('Anime', animeSchema)