var db = require('../db');

module.exports = {
  getAll: function () {
    // create variable and initialize to select all messages
    let gatheredUsers = 'SELECT * FROM users';
    // invoke db.query on the gathered users, takes in variable, and an err first callback
    db.query(gatheredUsers, (err, result) => {
      // handle error
      if (err) {
        callback(err);
      } else {
        // on success, run callback on null, result
        callback(null, result);
      }
    });
  },

  create: function (user, callback) {
    // create variable createUser and initialize to insert new user into db
    let insertUser = `INSERT INTO users (id, username) VALUES (NULL, ${user})`;
    db.query(insertUser, (err, result) => {
      // handle error
      if (err) {
        callback(err);
      } else {
        // on success, run callback on null, result
        callback(null, result);
      }
    });
  }

};