const path = require('path');
const express = require('express');
const serverRouter = require('./routes/serverRouter');
const app = express();

const cookieParser = require('cookie-parser');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '../dist')));
}

app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

app.use('/server', serverRouter);

app.use('*', (req, res) => res.redirect('/'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


// TODO: add error handling for all promises

// TODO add functionality add OAUTH