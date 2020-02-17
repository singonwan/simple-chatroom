var express = require('express');

// setup express app
var app = express();
var server = app.listen(4000, function() {
    console.log('listening on port 4000');
});

//serve up html static file
app.use(express.static('public'));
