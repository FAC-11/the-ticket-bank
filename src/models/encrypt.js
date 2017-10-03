const bcrypt = require('bcrypt')


const hashPassword = (plaintextPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plaintextPassword, 10, (err, hash) => {
      if (err) reject('error hashing password')
      else if (hash) resolve(hash)
    })
  })
}

const checkPassword = (plaintextPassword, hashedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plaintextPassword, hashedPassword, (err, hash) => {
      if (err) reject('error hashing password')
      else if (hash) resolve(hash)
    })
  })
}

module.exports = {
  hashPassword,
  checkPassword
}
