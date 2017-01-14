const { connectdb } = require('./db.js');

const dbCtrl = {
  newUser: ({username, password}) => {
    return new Promise((resolve, error) => {
      connectdb.query(`INSERT INTO bloguser (user_id, username, password) VALUES (null, "${username}", "${password}")`,
        (err, rows, fields) => { 
          if (err) error(err);
          else resolve({ rows, fields });
        });
    });
  },
  newPost: ({userid, post}) => {
    return new Promise((resolve, error) => { 
      connectdb.query(`INSERT INTO posts (post_id, post, user_id) VALUES (null, "${post}", ${userid})`,
        (err, rows, fields) => { 
          if (err) error(err);
          else resolve({rows, fields});
        });
    });
  }
};

module.exports = dbCtrl;