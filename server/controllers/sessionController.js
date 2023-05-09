const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.cookieId }).then((response) => {
    res.locals.signedIn = response ? true : false;
    return next();
  });
};

sessionController.startSession = (req, res, next) => {
  if (res.locals.signedIn) {
    Session.create({ cookieId: res.locals.ssid }).then(() => {
      res.cookie('cookieId', res.locals.ssid, { httpOnly: true });
      return next();
    });
  } else return next();
};

module.exports = sessionController;
