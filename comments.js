// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create a server
var server = app.listen(8080, function() {
    console.log('Server is running on port 8080');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));