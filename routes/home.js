const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getHome)

router.delete('/', homeController.deleteShow)

router.put('/increase', homeController.increaseCount)

router.put('/decrease', homeController.decreaseCount)

module.exports = router