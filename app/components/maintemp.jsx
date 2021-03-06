import React, { Component } from 'react';
import GroceryList from "./grocerylist";
import {Router, Route, Link} from 'react-router';
// import Note from './Note.jsx';

class MainTemp extends Component{

  constructor(props){
    super(props);

  }



  render() {
    return (
      <div>
        <header className="nav">
          <h3><Link to='/lists'>Grocery List Maker!</Link></h3>
          <h2>By: <a href="https://github.com/Heintzdm" target="blank">Dan Heintzelman</a></h2>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          this is a footer
        </footer>
      </div>



    );
  }
}




export default MainTemp
