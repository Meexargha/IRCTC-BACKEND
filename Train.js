const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  trainNumber: {
    type: String,
    unique: true,
    required: true,
  },
  trainName: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: String,
    required: true,
  },
   seats:{
    sleeper:{
        type: Number,
        required: true,
    },
    ac:{
        type: Number,
        required: true,
        
    }
   }
});

module.exports = mongoose.model('Train', trainSchema);