const express = require('express')
const router = express.Router()
const home = require('./home')
const event = require('./event')

/* GET home page. */
router.get('/', home)
router.get('/event/:eventTitle', event)

module.exports = router
