const randomstring = require('randomstring')

module.exports = (req) => {
  req.body.randomstring = randomstring.generate(30)
}
