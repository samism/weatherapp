const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeatherDataSchema = new Schema({
  updatedAt: {
    type: Date,
    default: new Date()
  },
  data: { type: Object, required: true }
});

module.exports = mongoose.model(
  'WeatherData',
  WeatherDataSchema,
  'weatherdata'
);
