const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const querySchema = new Schema({
  username: { type: String, required: true },
  query: { type: String, required: true },
});

module.exports = mongoose.model('Query', querySchema);
