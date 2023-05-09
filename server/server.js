const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');
const app = express();

const cookieParser = require('cookie-parser');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '../dist')));
}

app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

app.use('/server', apiRouter);

app.use('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
