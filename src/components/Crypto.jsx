import React, { Component } from 'react';
// import $ from 'jquery';
import CryptoItemsJS from './parts/CryptoItemsJS';

class Crypto extends Component{
  render(){
    return(
		<div id="CryptoItems">
				<h4>
				<center>
					{this.props.header}
				</center>	
			</h4>
			<div id="data">
				<CryptoItemsJS />
			</div>
		</div>
    );
  }
}

export default Crypto;