import React, { Component } from 'react';
import GroceryListItem from './grocerylistitem';

class GroceryList extends Component {
  constructor(props){
    super(props)

    // this.state = {
    //   lists: this.props.lists
    // }


  }


  componentDidMount() {
    console.log(this.props.lists)


  }

  render() {
    var counter = 0;
    const Collection = this.props.lists.map((list) => {

      return (
            <GroceryListItem
              key={++counter}
              name={list.name}
              items={list.items.length}
            />
      )

    })

    return (
      <ul>
        {Collection}
      </ul>
    )
  }
}


export default GroceryList
