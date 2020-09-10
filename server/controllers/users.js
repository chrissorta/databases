var models = require('../models');
var users = require('../models/users.js');


module.exports = {
  get: function (req, res) {
    // invoke models.messages with an err first callback
    users.getAll((err, results) => {
      if (err) {
        res.end(err);
      } else {
        res.end(JSON.stringify(results));
      }
    }
    );
  },

  post: function (req, res) {
    users.create(req.body, (err, results) => {
      if (err) {
        res.end(JSON.stringify(err));
      } else {
        res.end();
      }
    });
  }
};
