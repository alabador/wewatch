const express = require('express')
const router = express.Router()
const animeController = require('../controllers/anime')

router.get('/search', animeController.getAnimeResults)

router.get('/search/:name', animeController.getAnimeSearchResults)

router.post('/add', animeController.addToList)

module.exports = router

