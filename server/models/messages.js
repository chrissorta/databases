var db = require('../db');

// ERROR first callback functions
// query the database
// manipulate the databse
// receive messages from db
//
module.exports = {
  getAll: function (callback) {
    // create variable and initialize to select all messages
    let gatheredMessages = 'SELECT * FROM messages';
    // invoke db.query on the gathered messages, takes in variable, and an err first callback
    db.query(gatheredMessages, (err, result) => {
      // handle error
      if (err) {
        callback(err);
      } else {
        // on success, run callback on null, result
        callback(null, result);
      }
    });
  },
  create: function (messageObj, callback) {
    // create variable createUser and initialize to insert new user into db
    let insertMessage = `INSERT INTO messages (id, message_text, username, roomname) VALUES (NULL, ${messageObj.message}, ${messageObj.username}, ${messageObj.roomname})`;
    db.query(insertMessage, (err, result) => {
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
