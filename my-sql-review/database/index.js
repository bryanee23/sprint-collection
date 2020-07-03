const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat',
// })

const db = mysql.createConnection({
  host: "kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  username: "twj30tsyfdfy20i0",
  password: "vaihf54pk53x3ctd",
  port: "3306",
  database: "xxqhh61j2xww0kly"
};

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to server')
  };
}
module.exports = db;
//CREATE DATABASE ball;
//show database