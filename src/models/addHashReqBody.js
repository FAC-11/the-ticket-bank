module.exports = (hashedpwd, req) => {
  req.body.password = hashedpwd
  return Promise.resolve(req)
}
