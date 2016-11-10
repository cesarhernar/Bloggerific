const express = require('express');
const app = express();
const path = require('path');
const bodypare = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const {Submission, User} = require('./postgre-orm');

app.use(bodypare.json());
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/signin', (req, res) => {
  var usr = req.body['user'];
  var pswrd = req.body['password'];
  User.create({user: usr, password: pswrd});
  console.log(usr, pswrd)
  res.send(true);
});

app.post('/message', (req, res) => {
if(req.body) {
  io.emit('newmessage', {user: req.body.user});
  User.findOne({where: {user: req.body.user}}).then(result => {
    Submission.create({post: req.body.post, fk_user: result.id});
    res.status(200).send('');
  })

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
  console.log('connected');

})



http.listen(3000, () => {
  console.log('Listening on port 3000', __dirname);
});
