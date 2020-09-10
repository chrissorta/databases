var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// exports.const

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

db.connect();

// db.connect(function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected!');
//   db.query('select * from messages', function (err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log('Database created');
//   });
// });

module.exports = db;