const validate = (req) => {
  return new Promise((resolve, reject) => {
    if (req.body.charityName.length < 2) reject(new Error('Name is too short'))
    else if (req.body.charityName.length === 0) reject(new Error('Name can\'t be empty'))
    else if (req.body.charityNumber.match(/[A-Z]/ig)) reject(new Error('Charity number cannot contain letters'))
    else if (req.body.charityNumber.length === 0) reject(new Error('Number can\'t be empty'))
    else if (req.body.charityNumber.length < 6 || req.body.charityNumber.length > 10) reject(new Error('Charity number is invalid'))
    else if (req.body.contactName.match(/[0-9]/i)) reject(new Error('Name cannot contain numbers'))
    else if (req.body.contactName.length === 0) reject(new Error('Contact Name can\'t be empty'))
    else if (req.body.contactName.length < 2) reject(new Error('Contact name is too short'))
    else if (req.body.contactSurname.match(/[0-9]/i)) reject(new Error('Contact Surname cannot contain numbers'))
    else if (req.body.contactSurname.length === 0) reject(new Error('Contact Surname can\'t be empty'))
    else if (req.body.contactSurname.length < 2) reject(new Error('Contact Surname is too short'))
    else if (req.body.contactNumber.match(/[A-Z]/ig)) reject(new Error('Contact number cannot contain letters'))
    else if (req.body.contactNumber.length === 0) reject(new Error('Contact Number can\'t be empty'))
    else if (req.body.contactEmail.length === 0) reject(new Error('Email can\'t be empty'))
    else if (!req.body.contactEmail.match(/[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,})/i)) reject(new Error('Please enter a valid email.'))
    else if (req.body.password.length === 0) reject(new Error('Password can\'t be empty'))
    else if (req.body.password.length < 8) reject(new Error('Password is too short'))
    else if (req.body.password !== req.body.confirmPassword) reject(new Error('Passwords don\'t match'))
    else {
      resolve(req.body.password)
    }
  })
}

module.exports = validate
