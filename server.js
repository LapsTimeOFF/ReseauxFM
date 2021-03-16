var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

app.get('/css', (req,res) => {
   res.sendFile(__dirname + '/style.css');
})

app.get('/index.js', (req,res) => {
   res.sendFile(__dirname + '/page.js');
})

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
   console.log('A user connected');

   //Whenever someone disconnects this piece of code executed
   socket.on('disconnect', function () {
      console.log('A user disconnected');
   });

   socket.on('test', () => {
       console.log("Test recive");
   })
});

http.listen(3000, function() {
   console.log('listening on *:3000');
});