const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
  updatedAt: {
    type: Date,
    default: new Date()
  },
  email: { type: String, required: true }
});

module.exports = mongoose.model('Email', EmailSchema, 'emails');
