'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
  name: String,
  active: Boolean,
  menuItems: Array
});

module.exports = mongoose.model('Menu', MenuSchema);