const User = require('../models/userModel');

const userController = {};
userController.createUser = async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.locals.signedIn = false;
    return next();
  }

  try {
    await User.create({ username: req.body.username, password: req.body.password });
    res.locals.signedIn = true;
    return next()
  }
  catch {
    res.locals.signedIn = false;
    return next()
  }  
};

module.exports = userController;
