const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  console.log('!!!!!!!!!!', req.cookies);
  const response = await Session.findOne({ cookieId: req.cookies.cookieId });
  res.locals.signedIn = response ? true : false;
  return next();
};


sessionController.startSession = (req, res, next) => {
  res.cookie('cookieId', res.locals.ssid);
  Session.create({ cookieId: res.locals.ssid }, (err, res) => next());
};

module.exports = sessionController;
