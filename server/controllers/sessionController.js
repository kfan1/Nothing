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
    Session.findOneAndUpdate({ cookieId: res.locals.ssid }, { cookieId: res.locals.ssid }, { upsert: true }).then(
      () => {
        res.cookie('cookieId', res.locals.ssid, { httpOnly: true, maxAge: 90*1000, secure: true });
        return next();
      }
    );
  } else return next();
};

module.exports = sessionController;


// ADD FUNCTIONALITY
// change expires
// @TODO