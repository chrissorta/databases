var db = require('../db');

// ERROR first callback functions
// query the database
// manipulate the databse
// receive messages from db
//
module.exports = {
  getAll: function (callback) {
    // create variable and initialize to select all messages
    // let gatheredMessages = 'select messages.id, messages.text, messages.roomname, users.username \
    // from messages left outer join users on (messages.userid = users.id) \
    // order by messages.id desc';
    let gatheredMessages = 'select * from messages';
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
    //console.log(messageObj);
    var queryStr = 'insert into messages(text, userid, roomname) \
    value (?, (select id from users where username = ? limit 1), ?)';
    // let insertMessage = `INSERT INTO messages ( message_text, username, roomname) VALUES ( ${messageObj[0]}, ${messageObj[1]}, ${messageObj[2]})`;
    db.query(queryStr, messageObj, (err, result) => {
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
