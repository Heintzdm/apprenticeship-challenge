import React, {Component} from 'react';

class ListShow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    // const listid = this.props.params.listid
    const list = this.props.list
    return (
      <div className="listShow">
        <h2>{list.name}</h2>
        <ul>
          {list.items.map((item)=> {
              return (
                <div>
                  <li>{item.name}</li>
                  <li>{item.price}</li>
                  <li>{item.sku}</li>
                </div>
              );
            })
          }
        </ul>
      </div>
    )
  }
}




export default ListShow
