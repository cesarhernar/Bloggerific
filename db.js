let mysql = require('mysql');
const connectdb = mysql.createConnection({
  host: 'localhost',
  user: 'cesarh',
  password: 'db1234',
  database: 'bloggerific'
});
connectdb.connect();

let start = new Promise((res, err) => { 
  res(connectdb.query('DROP TABLE posts'));
});
start.then((result) => {
  return connectdb.query('DROP TABLE bloguser');
}).then((result) => {
  return connectdb.query(`CREATE TABLE bloguser 
    (user_id SMALLINT UNSIGNED AUTO_INCREMENT, 
    username VARCHAR(20),
    password VARCHAR(20),
    CONSTRAINT pk_user PRIMARY KEY (user_id)
    )`);
}).then((result) => {
  return connectdb.query(`CREATE TABLE posts
    (post_id SMALLINT UNSIGNED,
    post TEXT,
    user_id SMALLINT UNSIGNED,
    CONSTRAINT pk_posts PRIMARY KEY (post_id),
    CONSTRAINT fk_posts_user_id FOREIGN KEY (user_id)
      REFERENCES bloguser(user_id)
    )`);
  });

module.exports = {connectdb};