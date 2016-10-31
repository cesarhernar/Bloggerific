const Sequelize = require('sequelize');

var seq = new Sequelize('postgres', 'cesar', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


seq.authenticate().then((err) => {
  if (err) console.error(err)
  else console.log('hacked the mainframe senpai')
})
//add foreign key corresponding to a given user;
var Submission = seq.define('posts', {
  user: {type: Sequelize.STRING},
  identify: {type: Sequelize.STRING},
  post: {type: Sequelize.TEXT}
});


Submission.sync({ force: true }).then(() => {
  console.log('successfully synced smpai')
})

function record(entry) {
  Submission.create({user: entry.user, identify: entry.id, post: entry.post}).then(result => {
    console.log('post was a success');
  });

}

//users
// var User = seq.define('users', {
//   user: { type: Sequelize.STRING },
//   password: { type: Sequelize.STRING }
// });


// User.sync({ force: true }).then(() => {
//   console.log('successfully synced users smpai')
// })

// User.create({
//   user: 'rasec',
//   password: 'password'
// }).then(res => {
//   console.log(res);
// })


// function check(arg) {

//   return User.findOne({ where: { user: arg } })

// }
module.exports = {Submission, record};
