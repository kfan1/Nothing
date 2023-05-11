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
    return next();
  } catch {
    res.locals.signedIn = false;
    return next();
  }
};

userController.verifyUser = (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (!user) {
      res.locals.signedIn = false;
      return next();
    } else {
      user.comparePassword(req.body.password, function (err, isMatch) {
        res.locals.signedIn = isMatch;
        res.locals.id = user._id;
        return next();
      });
    }
  });
};

module.exports = userController;
