const { Pool } = require('pg');

const fetchDB = {};

('mongodb+srv://kevinlifan:8-Ud_2k92zGQJTy@usercluster.7ygqnuk.mongodb.net/?retryWrites=true&w=majority');
('postgres://dugiykym:qJm5oZ_XWSnzaXF59SxFNBw6JBk1ihwB@drona.db.elephantsql.com/dugiykym');

// ADD FUNCTIONALITY
// table not found (add functionality see if table or URI incorrect)

fetchDB.fetchDB = (req, res, next) => {
  const pool = new Pool({
    // connectionString: req.body.URI,
    connectionString: 'postgres://tfukflgr:yCPaKQuG5NwStedUWf9Bw3wE9SIcLyE0@castor.db.elephantsql.com/tfukflgr',
  });

  pool
    .query(`SELECT * FROM ${req.body.tableName}`)
    // .query(`SELECT * FROM people`)
    .then((response) => {
      res.locals.data = response.rows;
    })
    .then(() => next())
    .catch(() => {
      return next();
    });
};

module.exports = fetchDB;
