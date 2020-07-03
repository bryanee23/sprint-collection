var restaurants = require('../restaurants.json');

const controllers = {
  getAll: (req, res) => {
    res
      .status(200)
      .send(restaurants)
      .end();
  },
  getOne: (req, res) => {
    let endpointId = req.params.id;
    let restaurantId = restaurants[endpointId];

    if (restaurantId) {
      res
        .status(200)
        .send(restaurant)
        .end();
      console.log('here');
    } else {
      res
        .status(400)
        .send(`restaurant id ${restaurant} was not found`)
        .end();
    }
  },
  postOne: (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    //add to array
    if (name !== undefined && rating !== undefined) {
      restaurants.push({
        restaurant_name: name,
        rating: rating });
      res
        .status(201)
        .send(`${name} added to listw/ rating of ${rating}`)
        .end();
    } else {
      res
        .status(400)
        .send(`Invalid format`)
        .end();
    //on failure
    };
  },
  deleteOne: (req, res) => {
    let endpointId = req.params.id;
    let restaurantObj = restaurants[endpointId];
    if(restaurantObj) {
      restaurants.splice(endpointId, 1);
      res.status(200).send(`deleted restaurant`).end();
    } else {
      res.status(400).send(`restaurant does not exist`).end();
    }
  }
};

module.exports = controllers;
