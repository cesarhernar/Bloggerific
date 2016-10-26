const Sequelize = require('sequelize');


var seq = new Sequelize('personalproj', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


seq.authenticate().then((err) => { 
  if (err) console.error(err)
  else console.log('hacked the mainframe senpai')
})
//add foreign key corresponding to a given user;
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
})

module.exports = User.findOne;