import React, { Component } from 'react';
import GroceryListItem from './grocerylistitem';

// class GroceryList extends Component {
//   constructor(props){
//     super(props)
//
//
//
//   }
  //
  //
  // componentDidMount() {
  //   console.log(this.props.lists)
  //
  //
  // }

  const GroceryList = (props) => {
    var counter = 0;
    const Collection = props.lists.map((list) => {
      return (
            <GroceryListItem
              key={++counter}
              name={list.name}
              items={list.items.length}
            />
      );
    });

    return (
      <ul>
        {Collection}
      </ul>
    )
  }


export default GroceryList
