const db = require('./index')

module.exports = {

  getFrmDB: ({ item, amount }, callback) => {
    var sqlMsg = `SELECT * FROM itemlist;`
    db.query(sqlMsg, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    }
    )
  },

  addToDB: ({ item, amount }, callback) => {
    var sqlMsg = `INSERT INTO itemlist(item, amount) VALUES("${item}","${amount}");`
    db.query(sqlMsg, (err, result) => {
      if (err) {
        callback(err)
      } else {
        callback(null, result)
      }
    }
    )
  },

}