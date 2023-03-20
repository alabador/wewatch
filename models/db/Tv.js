const mongoose = require("mongoose")

const tvSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('TV', tvSchema)