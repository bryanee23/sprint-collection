//this file handles API requests
const {addToDB, getFrmDB} = require('./db/models.js')
// const db = require('./controllers');

const controller = {
  //get all
  getAll: (req, res) => {
    getFrmDB(req.body, (err)=>{
      if (err) {
        res.status(400).send('cannot retrieve').end()
      } else {
        res.status(200).send('getAll works').end();
      }
    })
  },
  
  //get one /:id

  //grab items from client aka postman into mysql
  posterized: (req, res) => {
    const item = req.body.item;
    const amount = req.body.amount;
    //invoke addToDB to w/ params(req.body)
    // res.status(200).send('getAll works').end();
    addToDB(req.body, (err) => {
      if (err) {
        res.status(400).send('cannont be added').end();
      } else {
        res.status(200).send(`added ${amount} x ${item} to the database`).end();
      }
    })
    //insert into mysql
  },
};

module.exports = controller;