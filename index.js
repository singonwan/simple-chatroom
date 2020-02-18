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
    //listen for chat message
    socket.on('chat', function(data) {
        // sending chat message back to all sockets - io.sockets
        io.sockets.emit('chat', data);
        //frontend can handle it and output it on screen
    });
});
