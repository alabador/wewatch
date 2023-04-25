const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const { ensureAuth } = require('../middleware/auth')


router.get('/', ensureAuth, homeController.getHome)

router.delete('/', ensureAuth, homeController.deleteShow)

router.put('/increase', homeController.increaseCount)

router.put('/decrease', homeController.decreaseCount)

module.exports = router