const fetchQuery = {};

fetchQuery.fetchQuery = (req, res, next) => {
  const tables = new Set();
  const columns = new Set();
  const ids = new Set();
  console.log(req.body);
  if (req.body.currentSelected.length === 0) return next();
  if (req.body.currentJoinTable === null) {
    req.body = req.body.currentSelected;
    console.log(req.body);

    for (let i = 0; i < req.body.length; i++) {
      const currObj = JSON.parse(req.body[i]);
      tables.add(currObj.tableName);
      columns.add(currObj.tableName + '.' + currObj.columnName);
      ids.add(currObj.id);
    }

    res.locals.query = 'SELECT';
    columns.forEach((column) => {
      res.locals.query += ` ${column},`;
    });
    if (res.locals.query.includes('*')) {
      res.locals.query = 'SELECT';
      tables.forEach((table) => {
        res.locals.query += ` ${table}.*,`;
      });
    }
    res.locals.query = res.locals.query.slice(0, res.locals.query.length - 1);

    res.locals.query += ' FROM';
    tables.forEach((table) => {
      res.locals.query += ` ${table},`;
    });
    res.locals.query = res.locals.query.slice(0, res.locals.query.length - 1);

    res.locals.query += ' WHERE _id in (';
    ids.forEach((id) => {
      res.locals.query += `${id}, `;
    });
    res.locals.query = res.locals.query.slice(0, res.locals.query.length - 2);
    res.locals.query += ')';
    if (ids.has('*')) res.locals.query = res.locals.query.slice(0, res.locals.query.indexOf(' WHERE'));

    return next();
  }
  else {
    return next();
  }
};

module.exports = fetchQuery;
