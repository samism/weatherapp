const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api', require('./routes/weather'));

app.use((err, req, res, next) => {
  console.log(err.message);
  next();
});

const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_CONNECTION_STRING,
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.log(err);
  }
};

connect().catch(error => console.log(`Failed to connect to MongoDB`, error));

console.log('Connected to MongoDB.');

module.exports = app;
