const Sequelize = require('sequelize');

//var url = "postgres://rasec:Ac02544910@localhost/personalproj";

var seq = new Sequelize('personalproj', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


seq.authenticate().then((err) => { 
  if (err) console.error(err)
  else console.log('hacked the mainframe senpai')
})
//add foreign key corresponding to a given user;
var Submission = seq.define('posts', {
  content: {type: Sequelize.STRING}
});


Submission.sync({ force: true }).then(() => { 
  console.log('successfully synced smpai')
})

function record(entry) { 
  Submission.create({ content: entry });

}

//users
var User = seq.define('users', {
  user: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
});


User.sync({ force: true }).then(() => { 
  console.log('successfully synced users smpai')
})

User.create({
  user: 'rasec',
  password: 'password'
}).then(res => { 
  console.log(res);
})


function check(arg) {
  
  return User.findOne({ where: { user: arg } })

}
module.exports = {Submission, record, check};

