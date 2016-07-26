import React, { Component } from 'react';
// import Note from './Note.jsx';

class App extends Component{

  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>{this.props.list[0].name}</div>
    )
  }
}




export default App
