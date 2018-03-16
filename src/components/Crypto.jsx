import React, { Component } from 'react';
import $ from 'jquery';
// import CryptoItemsJS from './parts/CryptoItemsJS';
import CryptoItem from './parts/CryptoItem';

class Crypto extends Component{

	componentDidMount(){
		$(() => {
			this.ganttEach();
		});
		setInterval(() => { this.ganttEach(); }, 15000);		
	}

	ganttEach (){
		setTimeout(() => {

			var divList = $(".CryptoItem");
			divList.sort(function(b, a){ return $(a).data("sort")-$(b).data("sort")});
			$("#data").html(divList);
			return;
		}, 5000)
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
				{/* <CryptoItemsJS /> */}
				<CryptoItem cryptocoin="bitcoin" />
				<CryptoItem cryptocoin="ethereum" />
				<CryptoItem cryptocoin="ripple" />
				<CryptoItem cryptocoin="iconomi" />
				<CryptoItem cryptocoin="litecoin" />
				<CryptoItem cryptocoin="bitcoin-cash" />
			</div>
		</div>
    );
  }
}

export default Crypto;