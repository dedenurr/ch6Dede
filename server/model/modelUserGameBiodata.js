const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  status: String,
});

const UserGameBiodata = mongoose.model('user_game_biodata', schema);

module.exports = UserGameBiodata;
