import React, { Component } from 'react';
import $ from 'jquery';

class CryptoItemsJS extends Component{

  render(){
  	// JS
	$(function() {
	    function UpdateCtyptoTicker() {
	        $.get("https://api.coinmarketcap.com/v1/ticker/", function(data, status) {

	            for (var i = 0; i < data.length - 1; i++) {
	                if (data[i].id === "bitcoin") {
	                    $("#BTCPrice").html(data[i].price_usd);
	                    $("#BTCPriceChange").html(data[i].percent_change_24h);
	                    $('#BTCPriceChangeID').attr("data-sort",(data[i].percent_change_24h));
	                }
	                if (data[i].id === "ethereum") {
	                    $("#ETHPrice").html(data[i].price_usd);
	                    $("#ETHPriceChange").html(data[i].percent_change_24h);
	                    $('#ETHPriceChangeID').attr("data-sort",(data[i].percent_change_24h));

	                }
	                if (data[i].id === "ripple") {
	                    $("#XRPPrice").html(data[i].price_usd);
	                    $("#XRPPriceChange").html(data[i].percent_change_24h);
	                    $('#XRPPriceChangeID').attr("data-sort",(data[i].percent_change_24h));

	                }
	                if (data[i].id === "iconomi") {
	                    $("#ICNPrice").html(data[i].price_usd);
	                    $("#ICNPriceChange").html(data[i].percent_change_24h);
	                    $('#ICNPriceChangeID').attr("data-sort",(data[i].percent_change_24h));

	                }
	                if (data[i].id === "litecoin") {
	                    $("#LTCPrice").html(data[i].price_usd);
	                    $("#LTCPriceChange").html(data[i].percent_change_24h);
	                    $('#LTCPriceChangeID').attr("data-sort",(data[i].percent_change_24h));

	                }
	                if (data[i].id === "bitcoin-cash") {
	                    $("#BCHPrice").html(data[i].price_usd);
	                    $("#BCHPriceChange").html(data[i].percent_change_24h);
	                    $('#BCHPriceChangeID').attr("data-sort",(data[i].percent_change_24h));
	                }
	            }
	        });
	    }
	    // Reload Crypto Every 30 Seconds
	    setInterval(UpdateCtyptoTicker, 30000);
	    UpdateCtyptoTicker();
	});
 
    return(
		<div id="Cryptodata">
			<ul className="CryptoItem" data-sort="BTCPriceChangeID" id="BTCPriceChangeID">
				<li>Bitcoin:</li>
				<li>$ <span id="BTCPrice"></span></li>
				<li className="PreCentChange"><span id="BTCPriceChange"></span><b>%</b></li>
			</ul>
			<ul className="CryptoItem" data-sort="ETHPriceChangeID" id="ETHPriceChangeID">
				<li>Ethereum:</li>
				<li>$ <span id="ETHPrice"></span></li>
				<li className="PreCentChange"><span id="ETHPriceChange"></span><b>%</b></li>
			</ul>
			<ul className="CryptoItem" data-sort="XRPPriceChangeID" id="XRPPriceChangeID">
				<li>Ripple:</li>
				<li>$ <span id="XRPPrice"></span></li>
				<li className="PreCentChange"><span id="XRPPriceChange"></span><b>%</b></li>
			</ul>
			<ul className="CryptoItem" data-sort="ICNPriceChangeID" id="ICNPriceChangeID">
				<li>Iconomi:</li>
				<li>$ <span id="ICNPrice"></span></li>
				<li className="PreCentChange"><span id="ICNPriceChange"></span><b>%</b></li>
			</ul>
			<ul className="CryptoItem" data-sort="LTCPriceChangeID" id="LTCPriceChangeID">
				<li>Litecoin:</li>
				<li>$ <span id="LTCPrice"></span></li>
				<li className="PreCentChange"><span id="LTCPriceChange"></span><b>%</b></li>
			</ul>
			<ul className="CryptoItem" data-sort="BCHPriceChangeID" id="BCHPriceChangeID">
				<li>Bitcoin Cash:</li>
				<li>$ <span id="BCHPrice"></span></li>
				<li className="PreCentChange"><span id="BCHPriceChange"></span><b>%</b></li>
			</ul>
		</div>
    );
  }
}

export default CryptoItemsJS; 