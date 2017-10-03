const validate = (req) => {

  return new Promise((resolve, reject) => {

    if (req.body.charityName.length < 2) reject('Name is too short')
    else if (req.body.charityNumber.match(/[A-Z]/ig)) reject('Charity number cannot contain letters')
    else if (req.body.contactName.match(/[0-9]/i)) reject('Name cannot contain numbers')
    else if (req.body.contactSurname.match(/[0-9]/i)) reject('Surname cannot contain numbers')
    else if (req.body.contactName.length < 2) reject('Contact name is too short')
    else if (req.body.contactSurname.length < 2) reject('Surname is too short')

    else if (req.body.contactNumber.match(/[A-Z]/ig)) reject('Contact number cannot contain letters')

    else if (req.body.charityNumber.length < 6 || req.body.charityNumber.length > 10) reject('Charity number is invalid')
    else if (!req.body.contactEmail.match(/[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,})/i)) reject('Please enter a valid email.')
    else if (req.body.password.length < 8) reject('Password is too short')
    else if (req.body.password !== req.body.confirmPassword) reject('Passwords don\'t match')

    else {
      resolve(req.body.password)
    }
  })
}

module.exports = validate;
