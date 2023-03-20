const mongoose = require("mongoose")

const showSchema = new mongoose.Schema({
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
            required: true,
        },
        watched: {
            type: Number,
            default: 0,
        } 
    }
})

module.exports = mongoose.model('Show', showSchema)