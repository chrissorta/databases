var models = require('../models');
exports.users = require('../models/users.js');


module.exports = {
  get: function (req, res) {
    // invoke models.messages with an err first callback
    musers.getAll((err, results) => {
      if (err) {
        res.end(err);
      } else {
        res.end(JSON.stringify(results));
      }
    }
    );
  },

  post: function (req, res) {
    users.create(req.json, (err, results) => {
      if (err) {
        res.end(err);
      } else {
        res.end();
      }
    });
  }
};
