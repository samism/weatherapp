import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WeatherDataSchema = new Schema({
  updatedAt: {
    type: Date,
    default: new Date()
  },
  data: { type: Object, required: true }
});

export default mongoose.model('WeatherData', WeatherDataSchema, 'weatherdata');
