// make connection
// frontend socket
var socket = io.connect('http://localhost:4000');

//Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit Events

//sending name of message called 'chat' and JSON {msg, handle}
btn.addEventListener('click', function() {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = ''; //clear message after sending
});
// listen for keypress event
message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

//Listen for events

socket.on('chat', function(data) {
    feedback.innerHTML = ''; //so that feedback will be empty and stop broadcasting
    output.innerHTML +=
        '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(handle) {
    feedback.innerHTML =
        '<p><em>' + handle + ' is typing a message...</em></p>';
});
