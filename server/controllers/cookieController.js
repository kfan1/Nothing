const cookieController = {};
const User = require('../models/userModel');


cookieController.setSSIDCookie = async (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then(async (response) => {
      res.locals.ssid = response._id;
      res.cookie('ssid', res.locals.ssid, { httpOnly: true });
    })
    .catch(() => next('error'));
};


module.exports = cookieController;
