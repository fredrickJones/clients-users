'use strict';
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, index: true},
	value: {type: Number, required: true, min: 1.5},
	contractLength: {type: Number, required: true, min: 5}
});


module.exports = Mongoose.model('Client', schema);
