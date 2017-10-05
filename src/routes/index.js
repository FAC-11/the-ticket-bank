const express = require('express')
const router = express.Router()
const home = require('./home')
const newcharitysignup = require('./newCharitySignup')
const newcharitysubmit = require('./newCharitySubmit')
const approvecharitysignup = require('./approveCharitySignup')
const rejectcharitysignup = require('./rejectCharitySignup')
const verifycharityemail = require('./verifyCharityEmail')

/* GET home page. */
router.get('/', home)
router.get('/signup', newcharitysignup)
router.post('/newuser', newcharitysubmit)
router.get('/approvecharitysignup/:userinfo', approvecharitysignup)
router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup)
router.get('/verifycharityemail/:userinfo', verifycharityemail)

module.exports = router
