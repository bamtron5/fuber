'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuItemSchema = new Schema({
	itemId: String,
	menuId: String,
	name: String,
	description: String,
	active: Boolean,
	primaryImage: String,
	imagery:[],
	price: Number,
	ingredients: [],
	category: String
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);