'use strict';
var Express = require('express'),
	BodyParser = require('body-parser'),
	Mongoose = require('mongoose'),
	User = require('./lib/models/usersModel'), //must use the . in require it just mean current directory
	Client = require('./lib/models/clientModel');

var App = Express();
var port = 9099; //this port is for the server
var mongoUri = 'mongodb://localhost:27017/clients-user'; //you dont have to specify the port in the uri default is 27017

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function() {
	console.log('connected to db at ' + mongoUri);
});

App.use(BodyParser.json());

App.post('/api/user', function(req, res) {
	User.create(req.body).then(function(resp) {
		res.status(200).json(resp);
	}, function(err) {
		res.status(418).json(err);
	})
});

App.post('/api/client', function(req, res) {
	Client.create(req.body).then(function(resp) {
		res.status(200).json(resp);
	}, function(err) {
		res.status(500).json(err);
	})
});

App.get('/api/users', function(req, res) {
	User.find({}, function(err, docs) {
		if(!err) {
			if(docs.length === 0) {
				res.status(404).send('No Documents Found');
			} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	});
});



App.listen(port, function() {
	console.log('listening on ' + port);
});