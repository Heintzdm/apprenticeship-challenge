import React, { Component } from 'react';
import GroceryListItem from './grocerylistitem';
import {Router, Route, Link, hashHistory} from 'react-router';


  const GroceryList = (props) => {
    var counter = 0;
    const Collection = props.lists.map((list) => {
      return (
          <Link to={`/lists/${counter}`} >
            <GroceryListItem
              key={counter++}
              name={list.name}
              items={list.items.length}
            />
          </Link>
        
      );
    });

    return (
      <ul>
        {Collection}
      </ul>
    )
  }


export default GroceryList
