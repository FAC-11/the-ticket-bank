const validate = (req) => {
  return new Promise((resolve, reject) => {
    const validatedatetime = new RegExp('^(0?[1-9]|[12][0-9]|3[01])/(0?[1-9]|1[0-2])/20[1-2][0-9] (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$', 'g')
    if (req.body.title.length < 2) reject(new Error('Title is too short'))
    else if (req.body.title.length === 0) reject(new Error('Title can\'t be empty'))
    else if (req.body.shortdesc.length === 0) reject(new Error('The short description can\'t be empty'))
    else if (req.body.shortdesc.length > 140) reject(new Error('The short description can\'t be longer than 140 characters'))
    else if (req.body.longdesc.length === 0) reject(new Error('The long description can\'t be empty'))
    // else if (req.body.venue.length === 0) reject(new Error('The venue can\'t be empty'))
    else if (req.body.location.length === 0) reject(new Error('The location can\'t be empty'))
    else if (req.body.startdatetime.length === 0) reject(new Error('The location can\'t be empty'))
    else if (req.body.startdatetime.match(validatedatetime)) reject(new Error('Start date and time are in the wrong format'))
    else if (req.body.enddatetime.length === 0) reject(new Error('The location can\'t be empty'))
    else if (req.body.enddatetime.match(validatedatetime)) reject(new Error('End date and time are in the wrong format'))
    else if (req.body.minage.length === 0) reject(new Error('The minimum age can\'t be empty'))
    else if (req.body.minage.match(/[A-Z]/ig)) reject(new Error('Minimum age can only contain numbers'))
    else if (req.body.ticketsavailable.match(/[A-Z]/ig)) reject(new Error('Tickets available can only contain numbers'))
    else if (req.body.ticketname.length === 0) reject(new Error('The ticket name can\'t be empty'))
    else if (req.body.additionalinfo.length === 0) reject(new Error('The additional info can\'t be empty'))
    else if (req.body.maxallocation.match(/[A-Z]/ig)) reject(new Error('Maxium allocation can only contain numbers'))
    else {
      resolve(req.body.password)
    }
  })
}

module.exports = validate
