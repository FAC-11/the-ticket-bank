const express = require('express')
const router = express.Router()
const home = require('./home')
const loginPage = require('./loginPage')
const loginPost = require('./loginPost')
const event = require('./event')
const error = require('./error')
const newcharitysignup = require('./newCharitySignup')
const newcharitysubmit = require('./newCharitySubmit')
const approvecharitysignup = require('./approveCharitySignup')
const rejectcharitysignup = require('./rejectCharitySignup')
const addevent = require('./addevent')
const createevent = require('./createevent')
const verifycharityemail = require('./verifyCharityEmail')
const applyForTickets = require('./applyForTickets')
const applyTicketsSubmit = require('./applyTicketsSubmit')
const checkCookie = require('./checkCookie')
const logout = require('./logout')

router.get('/', home)
router.get('/login', loginPage)
router.post('/login', loginPost)
router.get('/event/:eventTitle', event)
router.get('/sign-up', newcharitysignup)
router.post('/newuser', newcharitysubmit)
router.get('/approvecharitysignup/:userinfo', approvecharitysignup)
router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup) // should userinfo be named randomstring?

router.get('/rejectcharitysignup/:userinfo', rejectcharitysignup)
router.get('/verifycharityemail/:userinfo', verifycharityemail)
router.get('/logout', logout)

// authenticated routes
router.get('/addevent', checkCookie, addevent)
router.post('/addevent', checkCookie, createevent)
router.post('/event/:eventTitle/applyfortickets', checkCookie, applyForTickets)
router.post('/event/:eventTitle/tickets', checkCookie, applyTicketsSubmit)

router.use(error.client)
router.use(error.server)

module.exports = router
