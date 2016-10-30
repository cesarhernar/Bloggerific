const express = require('express');
const app = express();
const path = require('path');
const bodypare = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {Submission, record} = require('./postgre-orm');
//const finder = require('./postgre-orm-users')
app.use(bodypare.json());
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  console.log('inside / **************************************')
  res.sendFile(__dirname + '/index.html');
})
// add logic to process user foreign id in order to post
app.post('/submitentry', (req, res) => { 
  console.log(req.body)
  record(req.body.submission);
  //Submission.findAll().then(function (subs) { 
   // console.log(subs);
 // })
})

app.post('/signin', (req, res) => {
  var usr = req.body['user'];
  var pswrd = req.body['password'];
  console.log('suuuu')
  console.log(usr, pswrd)
  // check(usr).then(res => {
  //   console.log(res)
  // });
  res.send(true);
});

io.on('connection', function (socket) {
  socket.on('signin', () => { 
    console.log('signed in')
  })
  // socket.on('ready', () => { 

  // io.on('message', (data) => { 
  //   console.log('herro')
  // })
  // io.emit('retreival', { id: socket.id });
  // })
  console.log('connected');

})



http.listen(3000, () => {
  console.log('Listening on port 3000', __dirname);
});