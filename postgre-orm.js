const Sequelize = require('sequelize');

var seq = new Sequelize('postgres', 'cesar', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});


seq.authenticate().then((err) => {
  if (err) console.error(err)
})
//add foreign key corresponding to a given user;
var Submission = seq.define('posts', {
  post: {type: Sequelize.TEXT}
});

//users
var User = seq.define('users', {
  user: { type: Sequelize.STRING },
  password: { type: Sequelize.STRING }
});

Submission.belongsTo(User, {foreignKey: 'fk_user'});



User.sync({ force: true }).then(() => {
  console.log('successfully synced users')
  Submission.sync({ force: true }).then(() => {
    console.log('successfully synched submissions')
  })
})



module.exports = {Submission, User};
