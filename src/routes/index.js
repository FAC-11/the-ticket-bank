const express = require('express')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')
const approvecharitysignup = require('./approveCharitySignup')
const rejectcharitysignup = require('./rejectCharitySignup')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
router.get('/approvecharitysignup/:userinfo', approvecharitysignup)
router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup)

module.exports = router
