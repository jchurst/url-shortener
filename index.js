'use strict';

var validUrl = require('valid-url');
var Url = require('./app/url');

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://jimmyc:tulipOne@ds125906.mlab.com:25906/urls';
var mongoOptions = {db: {safe: true}};
var port = process.env.PORT || 5000;
var baseUrl = process.env.BASE_URL || ('http://www.flame-chord.glitch.me' + '/');

var mongoose = require('mongoose');
mongoose.connect(mongoUri, mongoOptions);
mongoose.connection.on('error', function(err) {
        console.error('MongoDB connection error: ' + err);
        process.exit(-1);
    }
);

var express = require('express');
var app = express();
app.set('port', port);

app.get('/new/*', function(req, res) {
    var original = req.url.replace('/new/', '');
    if (validUrl.isUri(original)) {
        Url.create({original_url: original}, function(err, created) {
        if (err) return res.status(500).send(err);
        res.json({
            original_url: created.original_url,
            short_url: baseUrl + created.short_id
        });
      });
    } else {
        return res.json({error: "URL invalid"});
    }
});

app.get('/*', function(req, res) {
    Url.findOne({short_id: req.url.slice(1)}).exec().then(function(found) {
        if (found) {
            res.redirect(found.original_url);
        } else {
            res.send({error: "No short url found for given input"});
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
