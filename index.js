var express = require('express');
var socket = require('socket.io');

// setup express app
var app = express();
var server = app.listen(4000, function() {
    console.log('listening on port 4000');
});

//serve up html static file to browser
app.use(express.static('public'));

//setup backend socket
var io = socket(server);

//listen to connection
io.on('connection', function(socket) {
    // the frontend socket that connected to our server
    console.log('socket connection success');
});
