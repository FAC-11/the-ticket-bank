const express = require('express')
const router = express.Router()
const home = require('./home')
const event = require('./event')
const error = require('./error')
const newcharitysignup = require('./newCharitySignup')
const newcharitysubmit = require('./newCharitySubmit')
const approvecharitysignup = require('./approveCharitySignup')
const rejectcharitysignup = require('./rejectCharitySignup')
const verifycharityemail = require('./verifyCharityEmail')

router.get('/', home)
router.get('/event/:eventTitle', event)
router.get('/signup', newcharitysignup)
router.post('/newuser', newcharitysubmit)
router.get('/approvecharitysignup/:userinfo', approvecharitysignup)
<<<<<<< HEAD
router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup)
router.get('/verifycharityemail/:userinfo', verifycharityemail)
=======
router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup) //should userinfo be named randomstring?
router.use(error.client)
router.use(error.server)
>>>>>>> master

module.exports = router
