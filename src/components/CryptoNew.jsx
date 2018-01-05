import React, { Component } from 'react';
// import $ from 'jquery';
 
import CryptoItemNew from './parts/CryptoItemNew';

class CryptoNew extends Component{

	componentDidMount(){
 	
	}
  render(){
	
    return(
		<div id="CryptoItems">
				<h4>
				<center>
					{this.props.header}
				</center>	
			</h4>
			<div id="data">
				<CryptoItemNew cryptocoin="bitcoin" />
			</div>
		</div>
    );
  }
}

export default CryptoNew;