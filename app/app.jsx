import './main.css';
import React, {Component} from 'react';
import MainTemp from './components/maintemp';
import GroceryList from './components/grocerylist';
import {Router, Route, Link, hashHistory} from 'react-router';

// Resources
// [grocerylists] - A collection of the created lists
// [inventory] - A collection of items that can be added to a list

const testline = "This is a test line"

// Seed a few items in

const items = [
  {
    name: "Egg",
    price: 2.50,
    sku: 12345
  },
  {
    name: "Bread",
    price: 4.50,
    sku: 23456
  },
  {
    name: "Cookies",
    price: 4.50,
    sku: 23456
  }
]

// Seed a few lists in
const groceryList = [
  {
    name: "Dan's List",
    items: [
      items[0],
      items[1]
    ]
  },
  {
    name: "Craig's List",
    items: [
      items[0],
      items[1],
      items[2]
    ]
  },
]

//set up router here

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={MainTemp}>
        </Route>
      </Router>
    )
  }

}

export default App
