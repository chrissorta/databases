var models = require('../models');
var messages = require('../models/messages.js');

// where we call the model functions to be executed
// write query type database functions
// invoking

module.exports = {
  get: function (req, res) {
    // invoke models.messages with an err first callback
    messages.getAll((err, results) => {
      if (err) {
        res.end(err);
      } else {
        res.json(results);
      }
    });
  },

  post: function (req, res) {
    var data = [req.body.message, req.body.username, req.body.roomname];
    // console.log(data);
    messages.create(data, (err, results) => {
      if (err) {
        res.end(JSON.stringify(err));
      } else {
        res.sendStatus(201);
      }
    });
  }
};
