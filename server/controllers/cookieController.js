const User = require('../models/userModel');

const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.signedIn) {
    User.findOne({ username: req.body.username }).then((response) => {
      res.locals.ssid = response._id;
      return next();
    });
  } else return next();
};

module.exports = cookieController;
