'use strict';
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true}, //index searches quicker but takes up more memory
	email: {type: String, required: true, unique: true, lowercase: true}, //lowercase makes the string lowercase
	address: [{
		street: {type: String, required: true},
		city: {type: String, required: true},
		state: {type: String, required: true, uppercase: true, enum: []}, //enum will enumerate all possible options(values)
		zip: {type: Number, required: true},
		kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'}
	}],
	age: {type: Number, required: true, min: 13}
});



module.exports = Mongoose.model('User', schema);