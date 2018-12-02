const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// app.enable("trust proxy"); //when under a reverse-proxy

//basic throttling
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

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
