const { Schema, model } = require('../connection');

const mySchema = new Schema({
  name: String,
  email: String,
  rating: String,
  message: String
});

module.exports = model('feedback', mySchema);