const express = require('express')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
module.exports = router
