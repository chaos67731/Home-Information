import React, { Component } from 'react';

class CryptoMarketCap extends Component{
  render(){
    return(
      <span> 
        {this.state.cryptoData.market_cap_usd}
      </span>

    );
  }
}

export default CryptoMarketCap;