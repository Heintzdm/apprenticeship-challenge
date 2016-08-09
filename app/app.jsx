import './main.css';
import React, {Component} from 'react';
import MainTemp from './components/maintemp';
import GroceryList from './components/grocerylist';
import ListShow from './components/listshow';
import {Router, Route, Link, hashHistory} from 'react-router';

// Resources
// [grocerylists] - A collection of the created lists
// [inventory] - A collection of items that can be added to a list

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

// Using wrapper to pass grocery list to both children components as props
const GroceryListWrapper = ()=> {
  return (
    <GroceryList lists = {groceryList} />
  )
}
// Using wrapper to pass grocery list to both children components as props
// The downside is I have to pass params through props or else they get lost
const ListShowWrapper = (props) => {

  return (
    <ListShow lists ={groceryList} params={props.params} />
  )
}

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={MainTemp}>
          <Route path="/lists" component={GroceryListWrapper}>
          </Route>
          <Route path="/lists/:listid" component={ListShowWrapper}>
          </Route>
        </Route>
      </Router>
    )
  }

}

export default App
