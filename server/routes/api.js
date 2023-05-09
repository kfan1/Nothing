const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

router.post('/signup', userController.createUser, (req, res) => {
  return res.json({ loggedIn: res.locals.signedIn });
});

router.get('/isLoggedIn', sessionController.isLoggedIn, (req, res) => {
  res.json({ loggedIn: res.locals.signedIn });
});

module.exports = router;
