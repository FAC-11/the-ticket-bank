const express = require('express')
const router = express.Router()
const home = require('./home')

/* GET home page. */
router.get('/', home)

module.exports = router
