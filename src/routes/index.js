const express = require('express')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')
const validatecharity = require('./validateCharity')
const rejectcharity = require('./rejectCharity')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
router.get('/validate/:userinfo', validatecharity)
router.get('/reject/:userinfo', rejectcharity)

module.exports = router
