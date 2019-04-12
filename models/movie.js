const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const movie = new Schema({
  _id: ObjectId,
  title: String,
  description: String,
  releaseDate: Date,
  upvotes: Number,
  downvotes: Number,
});


module.exports = {
  movie: movie;
}
