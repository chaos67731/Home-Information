import React, { Component } from 'react';

class CryptoItemBit extends Component{
  render(){
    return(
      <li> 
        {this.props.CryptoItemInfoBit.name} :
      </li>
    );
  }
}

export default CryptoItemBit;