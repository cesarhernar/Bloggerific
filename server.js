const express = require('express');
const app = express();
const path = require('path');
const bodypare = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {Submission, record} = require('./postgre-orm');

app.use(bodypare.json());
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
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

app.post('/message', (req, res) => {
if(req.body) {
  record(req.body);
  io.emit('newmessage', {user: req.body.user});
  res.status(200).send('');
}
else res.status(400).send('error');
})

app.get('/message', (req, res) => {
  Submission.finAll({where: {user: req.query.user}})
    .then(result => {
      console.log(result)
      res.status(200).send('');
    })

})


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
