const Query = require('../models/queryModel');

const saveQueryController = {};

saveQueryController.saveQuery = (req, res, next) => {
  if (req.body.user && req.body.query) {
    Query.create({ username: req.body.user, query: req.body.query })
      .then(() => next())
      .catch(() => next());
  } else {
    return next();
  }
};

saveQueryController.getQuery = (req, res, next) => {
  Query.find({ username: req.params.username }).then((response) => {
    res.locals.queries = [];
    res.locals.queryId = [];
    response.forEach((el) => {
      res.locals.queries.push(el.query);
      res.locals.queryId.push(el._id);
    });
    return next();
  });
};

saveQueryController.deleteQuery = (req, res, next) => {
  Query.deleteOne({ query: req.params.query }).then(() => next());
};

module.exports = saveQueryController;
