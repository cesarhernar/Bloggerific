const express = require('express');
const app = express();
const path = require('path');
const bodypare = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {home, signIn, mkPost, gtPost} = require('./servcontrol.js');

app.use(bodypare.json());
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', home);
app.post('/signin', signIn);
app.post('/message', mkPost);
app.get('/message', gtPost);


io.on('connection', function (socket) {
  socket.on('signin', () => {
    console.log('signed in')
  })
  console.log('connected');

})



http.listen(3000, () => {
  console.log('Listening on port 3000', __dirname);
});
