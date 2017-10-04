
exports.client = (req, res) => {
  console.log('hello')
  res.status(404).render('error', {
    statusCode: 404,
    errorMessage: 'Page not found',
  });
};

exports.server = (err, req, res, next) => {
  console.log('errowe')
  res.status(500).render('error', {
    statusCode: 500,
    errorMessage: 'Internal server error',
  });
};