const randomstring = require('randomstring')

module.exports = new Promise((resolve, reject) => {
  resolve(randomstring.generate(30))
})
