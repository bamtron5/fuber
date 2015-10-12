'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SdpSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Sdp', SdpSchema);