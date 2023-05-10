const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');
const fetchDBController = require('../controllers/fetchDBController');
const fetchQueryController = require('../controllers/fetchQueryController')

// ADD FUNCTIONALITY
// see if username not found or password incorrect or username or password missing when signing up

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
  return res.json({ loggedIn: res.locals.signedIn, id: req.cookies.cookieId });
});

router.get('/logout', (req, res) => {
  return res.clearCookie('cookieId').redirect('/');
});

router.post('/db', fetchDBController.fetchDB, (req, res) => {
  return res.json(res.locals.data);
});

router.post('/fetchquery', fetchQueryController.fetchQuery, (req, res) => {
  return res.json({query: res.locals.query})
})

module.exports = router;
