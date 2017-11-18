import React, { Component } from 'react';

class CryptoItemBit extends Component{
  render(){
    return(
      <li> 
        {this.props.listNameFromParent.name} :
      </li>

    );
  }
}

export default CryptoItemBit;