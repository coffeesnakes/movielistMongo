const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies');

let db = mongoose.connection;

db.on('error', () => {
  console.error.bind(console, 'failed to connect database');
});

db.on('open', () => {
  console.log('success connecting to MongoDB database');
});

// the data model, how the structure will be organized

let movieSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: String,
  length: String,
  rating: Number
});

let movie = mongoose.model('Movie', movieSchema);

let Soul = new movie

module.exports = movie;