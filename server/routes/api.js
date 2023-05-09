const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

router.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.json({ loggedIn: res.locals.signedIn });
  }
);

router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.json({ loggedIn: res.locals.signedIn });
  }
);

router.get('/isLoggedIn', sessionController.isLoggedIn, (req, res) => {
  return res.json({ loggedIn: res.locals.signedIn });
});

router.get('/logout', (req, res) => {
  return res.clearCookie('cookieId').redirect('/');
});

module.exports = router;
