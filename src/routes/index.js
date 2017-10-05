const express = require('express')
const passport = require('passport')
const router = express.Router()
const home = require('./home')
const signup = require('./signup')
const newuser = require('./newUser')
const login = require('./login')
const signin = require('./signin')
const validatecharity = require('../models/validateCharity')
const rejectcharity = require('../models/rejectCharity')
const db = require('../database/dbConnection')

/* GET home page. */
router.get('/', home)
router.get('/signup', signup)
router.post('/newuser', newuser)
router.get('/validate/:userinfo', validatecharity)
router.get('/reject/:userinfo', rejectcharity)
router.get('/login', login)
router.post('/signin', signin)

// Configure Passport authenticated session persistence.
passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (id, done) {
  db.users.findById(id, function (err, user) {
    if (err) { return done(err) }
    done(null, user)
  })
})

module.exports = router
