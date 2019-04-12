const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const comment = new Schema({
  _id: ObjectId,
  text: String,
  date: Date,
  movieId: ObjectId
});

module.exports = {
  comment: comment;
}
