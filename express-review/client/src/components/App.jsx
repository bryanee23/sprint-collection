import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  getRestaurants() {
    axios
      .get('/restaurants')
      .then((response) => {

        this.setState({
          restaurants: response.data,
        })
      })
      .catch((err)=>{console.log(err)})
  }

  //how would I delete on postman?
  deleteRestaurant(index) {
    axios
    .delete(`/restaurants/:${index}`)
    //on success, invoke getRestaurants to render new state
    .then(()=>{this.getRestaurants()})
    .catch((err)=>{console.log(err)})
  }

  //equvalent to postman request
  addRestaurant({name, rating}) {
    axios
    .post('/restaurants',{name, rating})
    .then(() =>
    this.getRestaurants())
    .catch((err)=>{console.log(err)})
  }


  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ? (
          <RestaurantList restaurants={this.state.restaurants} />
        ) : (
          <div className="error">Fix your get request!</div>
        )}
        <AddRestaurantForm />
      </div>
    );
  }
}

export default App;
