var models = require('../models');
exports.messages = require('../models/messages.js');

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
        res.end(JSON.stringify(results));
      }

    });
  },

  post: function (req, res) {
    messages.create(req.json, (err, results) => {
      if (err) {
        res.end(err);
      } else {
        res.end();
      }
    });
  }
};
