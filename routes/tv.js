const express = require('express')
const router = express.Router()
const tvController = require('../controllers/tv')

router.get('/search', tvController.getTvResults)

module.exports = router