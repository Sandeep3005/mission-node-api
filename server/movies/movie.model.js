const mongoose = require('mongoose');

// let commmonSchemaObject = {
//   name: String,
//   wikipediaLink: String
// }
// let directorSchema = new mongoose.Schema(commmonSchemaObject);

// let producerSchema = new mongoose.Schema(commmonSchemaObject);

// let screenplaySchema = new mongoose.Schema(commmonSchemaObject);

// let directorSchema = new mongoose.Schema({
//   name: String,
//   wikipediaLink: String
// });

let commonSubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  wikipediaLink: String
});

let movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  director: [commonSubSchema],
  producers: [commonSubSchema],
  seriesPosition: Number,
  relaseDate: {
    type: Date,
    required: true,
  },
  runTime: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  budget: Number,
  poster: String,
  inserted: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('movie', movieSchema);
