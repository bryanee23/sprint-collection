const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controllers');



const app = express();
const port = 3000;

//add some middleware
app.use(express.json(bodyParser))

app.get('/', controller.getAll)

//post data into db
app.post('/', controller.posterized)

app.listen(port, () => console.log(`Corre el puerto de ${port}!`))