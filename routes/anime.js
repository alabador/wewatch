const express = require('express')
const router = express.Router()
const animeController = require('../controllers/anime')

router.get('/search', animeController.getAnimeResults)

router.get('/search/:name', animeController.getAnimeSearchResults)

module.exports = router

