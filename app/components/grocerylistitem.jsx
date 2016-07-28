import React from 'react';



const GroceryListItem = ({name, items}) => {
  return (
    <li>
    
      <div className="box">
        <h3>List: {name}</h3>
        <h3>Number of Items: {items}</h3>
      </div>
    </li>
  );
}

export default GroceryListItem
