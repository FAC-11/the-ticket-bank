const express = require('express')
const router = express.Router()
const home = require('./home')
const event = require('./event')
const error = require('./error')

/* GET home page. */
router.get('/', home)
router.get('/event/:eventTitle', event)
router.use(error.client);
router.use(error.server);

module.exports = router
