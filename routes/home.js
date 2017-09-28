const { getTitle } = require('../handlers/home');

module.exports = (req, res) => {
    res.render('home', { title: getTitle() });
};