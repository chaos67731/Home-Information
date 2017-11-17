import React, { Component } from 'react';
import $ from 'jquery';

class CurrentWeather extends Component{
	
  render(){
  	// JS
	function HideShowWeather() {
		if($('#CurrentTemp .temp').html() === $('#CurrentTemp .windchill').html()){
			$("#TheWindChill").hide();
		}else if($('#CurrentTemp .temp').html() < $('#CurrentTemp .windchill').html()){
			$("#TheWindChill").hide();
		}else{
			$("#TheWindChill").show();
		}

		if($('#forecast1 .WindSpeed').html() < "5"){
			$("#forecast1 .Speed").hide();
		}else{
			$("#forecast1 .Speed").show();
		}		
	}
	$(function() {
		HideShowWeather();
	});
	setInterval(function() { HideShowWeather(); }, 1000);


  	
    return(
	<div id="CurrentWeather">
		<div id="currently">
			<div className="CurrentlyItem" id="CurrentIcon">
				<div className="icon"></div>
				<div className="desc"></div>
			</div>
			<div className="CurrentlyItem" id="CurrentTemp">
				Curent <span className="temp"></span>
				<div id="TheWindChill">
					Windchill: <span className="windchill"></span>
				</div>	
			</div>
			<div className="forecast CurrentlyItem" id="forecast1">
				<div className="highTemp"><b>High</b> <span className="high"></span></div>
				<div className="lowTemp"><b>Low</b> <span className="low"></span></div>
				<div className="Speed"><b>Wind</b> <span className="WindSpeed"></span> <small>mph</small><small id="Direction"></small></div>
			</div>	
		</div>
		<div id="RiseSet">
			<div className="RiseSetItem Sunrise">Sunrise <span id="Sunrise"></span></div>
			<div className="RiseSetItem Sunset">Sunset  <span id="Sunset"></span></div>
		</div>		
	</div>
    );
  }
}

export default CurrentWeather;