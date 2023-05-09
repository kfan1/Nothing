const { Pool } = require('pg');

const fetchDB = {};

fetchDBController.fetchDB = (req, res, next) => {
  const pool = new Pool({
    connectionString: req.body.URI,
  });

  pool
    .query('SELECT * FROM people')
    .then((response) => {
      console.log(response.rows);
      res.locals.data = response.rows;
    })
    .then(() => next());
};

module.exports = fetchDB;

// fetchDB('postgres://tfukflgr:yCPaKQuG5NwStedUWf9Bw3wE9SIcLyE0@castor.db.elephantsql.com/tfukflgr');
