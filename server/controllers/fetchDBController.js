const { Pool } = require('pg');

const fetchDB = {};

// ADD FUNCTIONALITY
// table not found (add functionality see if table or URI incorrect)

fetchDB.fetchDB = (req, res, next) => {
  const pool = new Pool({
    // connectionString: req.body.URI
    connectionString: 'postgres://tfukflgr:yCPaKQuG5NwStedUWf9Bw3wE9SIcLyE0@castor.db.elephantsql.com/tfukflgr',
  });

  pool
    // .query(`SELECT * FROM ${req.body.tableName}`)
    .query(`SELECT * FROM people`)
    .then((response) => {
      res.locals.data = response.rows;
    })
    .then(() => next())
    .catch(() => {
      return next();
    });
};

module.exports = fetchDB;

('postgres://tfukflgr:yCPaKQuG5NwStedUWf9Bw3wE9SIcLyE0@castor.db.elephantsql.com/tfukflgr');
