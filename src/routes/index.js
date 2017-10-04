const express = require('express')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')
const login = require('./login')
const signin = require('./signin')
const validatecharity = require('../models/validateCharity')
const rejectcharity = require('../models/rejectCharity')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
router.get('/validate/:userinfo', validatecharity)
router.get('/reject/:userinfo', rejectcharity)
router.get('/login', login)
router.post('/signin', signin)

module.exports = router
