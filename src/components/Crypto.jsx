import React, { Component } from 'react';
import $ from 'jquery';
import CryptoItem from './parts/CryptoItem';

class Crypto extends Component{
  render(){

	// Sort and Change color of crypto list
	function ganttEach() {
		var divList = $(".CryptoItem");
		divList.sort(function(b, a){ return $(a).data("sort")-$(b).data("sort")});
		
		//   Start Add Class
		$(".CryptoItem").filter(function() {
			return $(this).data("sort") < 0;
		}).children(".PreCentChange").addClass("CryptoNeg");
		//   End Add Class

		// Start Remove Class
		$(".CryptoItem").filter(function() {
			return $(this).data("sort") > 0;
		}).children(".PreCentChange").removeClass("CryptoNeg");
		// End Remove Class
		$("#data").html(divList);
	}

	$(function() {
		ganttEach();
	});
	setInterval(function() { ganttEach(); }, 15000);

    return(
		<div id="CryptoItems">
				<h4>
				<center>
					{this.props.header}
				</center>	
			</h4>
			<div id="data">
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