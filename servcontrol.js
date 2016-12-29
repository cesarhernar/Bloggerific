const {newUser, newPost} = require('./dbcontroller');
//socket abstractions?
const serberCtrl = {
  home: (req, res) => {
    res.sendFile(__dirname + '/index.html');
  },
  signIn: (req, res) => {
    newUser(req.body)
      .then(({rows, fields}) => {
        res.status(200).json({ userid: rows.insertId });
      })
      .catch(err => {
        res.status(400).send(false);
      });
  },
  mkPost: (req, res) => {
    newPost(req.body)
      .then(result => {
        res.status(200).send(true);
      })
      .catch(err => {
        res.status(400).send(false);
      });
  },
  gtPost: (req, res) => {
    res.status(200).send('nothing here')
    return;
  }
}

module.exports = serberCtrl;