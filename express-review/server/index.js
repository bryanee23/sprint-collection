const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../client/dist/')));

app.get('/restaurants', controllers.getAll);
app.get('/restaurants/:id', controllers.getOne);
app.post('/restaurants', controllers.postOne);
app.delete('/restaurants/:id', controllers.deleteOne);


app.listen(port, () => console.log(`el porte de ${port} esta correr!`))