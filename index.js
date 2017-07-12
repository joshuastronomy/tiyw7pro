const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
const myRouter = require('./routes/routes');
const session = require('express-session');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const app = express();

mongoose.connect('mongodb://localhost:27017/statrak', {useMongoClient: true});

app.set('view engine', 'pug');

app.use(session({
  secret: 'h8 dat bacon',
  resave: false,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/', myRouter);

app.listen(3000, (req, res) => {
  console.log("Trakin' some stats...")
})
