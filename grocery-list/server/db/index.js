//create mySQL and connect
// var mysql = require('mysql');

// var db = mysql.createConnection({
//   user: "student",
//   password: "student",
//   database: "groceries",
// });

// db.connect(
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("connected");
//     }
//   }
// );
// module.exports = db;

const {Sequelize} =  require ('sequelize');

const db = new Sequelize('groceries', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
module.exports = db;