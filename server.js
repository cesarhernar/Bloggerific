const express = require('express');
const app = express();
const path = require('path');
const bodypare = require('body-parser');
const {Submission, record, check} = require('./postgre-orm');
//const finder = require('./postgre-orm-users')
app.use(bodypare.json());
app.use(express.static(path.join(__dirname, './node_modules/')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
// add logic to process user foreign id in order to post
app.post('/submitentry', (req, res) => { 
  console.log(req.body)
  record(req.body.submission);
  Submission.findAll().then(function (subs) { 
   // console.log(subs);
  })
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

app.listen(3000, () => {
  console.log('Listening on port 3000', __dirname);
});