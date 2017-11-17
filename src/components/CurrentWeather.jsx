 import React, { Component } from 'react';
import $ from 'jquery';

const urlForUsername = weathernow => `https://query.yahooapis.com/v1/public/yql?q=select+*+from+weather.forecast+where+woeid=${weathernow}&format=json`

class CurrentWeather extends Component {

	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
	}

	fetchWeatherResult = () => {
		// Dealing with json call
		fetch(urlForUsername(this.props.weathernow))
			.then(response =>{
				if(!response.ok){
					throw Error("Network request failed")
				}
				return response
			})
			.then(d => d.json())
			.then(d => {
				this.setState({
					weatherData: d['query'].results.channel
				})
			},() => {
				this.setState({
					requestFailed: true
				})
			})
		// Dealing With Weather Icon
	}

	componentDidMount(){
		this.fetchWeatherResult()
		setInterval(this.fetchWeatherResult, 5000) 
	}

	
  render(){
  	// jQuery
  	function HideShowWeather() {
  		// Hide Wind Chilld if current temp is the same or above 
		if($('#CurrentTemp .temp').html() === $('#CurrentTemp #TheWindChill span').html()){
			$("#TheWindChill").hide();
		}else if($('#CurrentTemp .temp').html() < $('#CurrentTemp #TheWindChill span').html()){
			$("#TheWindChill").hide();
		}else{
			$("#TheWindChill").show();
		}
		// Hide wind info if below 5mph
		if($('#CurrentWeatherSide .TheWindSpeed').html() < "05"){
			$("#CurrentWeatherSide .Speed").hide();
		}else{
			$("#CurrentWeatherSide .Speed").show();
		}		
	}

	$(function() {
		HideShowWeather();
	});
	setInterval(function() { HideShowWeather(); }, 5000);

	// The Direction
	function ChangeTheDirection() {
		// var WeatherMainDirectionNum = 72;
		var WeatherMainDirectionNum = $("#TheDirection").data('direction');

		if (WeatherMainDirectionNum>"022.5" && WeatherMainDirectionNum<"067.5"){
			$('#TheDirection').html("North East");
		}else if (WeatherMainDirectionNum>"067.5" && WeatherMainDirectionNum<"112.5"){
			$('#TheDirection').html("East");
		}else if (WeatherMainDirectionNum>"112.5" && WeatherMainDirectionNum<"157.5"){
			$('#TheDirection').html("South East");
		}else if (WeatherMainDirectionNum>"157.5" && WeatherMainDirectionNum<"202.5"){
			$('#TheDirection').html("South");
		}else if (WeatherMainDirectionNum>"202.5" && WeatherMainDirectionNum<"247.5"){
			$('#TheDirection').html("South West");
		}else if (WeatherMainDirectionNum>"247.5" && WeatherMainDirectionNum<"292.5"){
			$('#TheDirection').html("West");
		}else if (WeatherMainDirectionNum>"292.5" && WeatherMainDirectionNum<"337.5"){
			$('#TheDirection').html("North West");
		}else{
			$('#TheDirection').html("North"); 
		}
	}
	$(function() {
		ChangeTheDirection();
	});
	setInterval(function() { ChangeTheDirection(); }, 10000);





	// The Icons
 	function ChangeTheWeatherIcon() {
		// var TheWeatherIcon = 3;
		var TheWeatherIcon = $("#WeatherIcon").data('currenticon');

		if (TheWeatherIcon === 0) {
			$('#WeatherIcon').html("<i class='wi wi-tornado'></i>");
		}else if (TheWeatherIcon === 1) {
			$('#WeatherIcon').html("<i class='wi wi-rain-wind'></i>");
		} else if (TheWeatherIcon === 2) {
			$('#WeatherIcon').html("<i class='wi wi-tornado'></i>");
		} else if (TheWeatherIcon === 3) {
			$('#WeatherIcon').html("<i class='wi wi-thunderstorm'></i>");
		} else if (TheWeatherIcon === 4) {
			$('#WeatherIcon').html("<i class='wi wi-thunderstorm'></i>");
		} else if (TheWeatherIcon === 5) {
			$('#WeatherIcon').html("<i class='wi wi-rain-mix'></i>");
		} else if (TheWeatherIcon === 6) {
			$('#WeatherIcon').html("<i class='wi wi-rain-mix'></i>");
		} else if (TheWeatherIcon === 7) {
			$('#WeatherIcon').html("<i class='wi wi-rain-mix'></i>");
		} else if (TheWeatherIcon === 8) {
			$('#WeatherIcon').html("<i class='wi wi-rain-mix'></i>");
		} else if (TheWeatherIcon === 9) {
			$('#WeatherIcon').html("<i class='wi wi-cloudy'></i>");
		} else if (TheWeatherIcon === 10) {
			$('#WeatherIcon').html("<i class='wi wi-rain'></i>");
		} else if (TheWeatherIcon === 11) {
			$('#WeatherIcon').html("<i class='wi wi-rain'></i>");
		} else if (TheWeatherIcon === 12) {
			$('#WeatherIcon').html("<i class='wi wi-rain'></i>");
		} else if (TheWeatherIcon === 13) {
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		} else if (TheWeatherIcon === 14) {
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		} else if (TheWeatherIcon === 15) {
			$('#WeatherIcon').html("<i class='wi wi-showers'></i>");
		} else if (TheWeatherIcon === 16) {
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		} else if (TheWeatherIcon === 17) {
			$('#WeatherIcon').html("<i class='wi wi-hail'></i>");
		} else if (TheWeatherIcon === 18) {
			$('#WeatherIcon').html("<i class='wi wi-rain-mix'></i>");
		} else if (TheWeatherIcon === 19) {
			$('#WeatherIcon').html("<i class='wi wi-dust'></i>");
		} else if (TheWeatherIcon === 20) {
			$('#WeatherIcon').html("<i class='wi wi-fog'></i>");
		} else if (TheWeatherIcon === 21) {
			$('#WeatherIcon').html("<i class='wi wi-day-haze'></i>");
		} else if (TheWeatherIcon === 22) {
			$('#WeatherIcon').html("<i class='wi wi-smoke'></i>");
		} else if (TheWeatherIcon === 23) {
			$('#WeatherIcon').html("<i class='wi wi-strong-wind'></i>");
		} else if (TheWeatherIcon === 24) {
			$('#WeatherIcon').html("<i class='wi wi-strong-wind'></i>");
		} else if (TheWeatherIcon === 25) {
			$('#WeatherIcon').html("<i class='wi wi-snowflake-cold'></i>");
		} else if (TheWeatherIcon === 26) {
			$('#WeatherIcon').html("<i class='wi wi-cloudy'></i>");
		} else if (TheWeatherIcon === 27) {
			$('#WeatherIcon').html("<i class='wi wi-night-cloudy'></i>");
		} else if (TheWeatherIcon === 28) {
			$('#WeatherIcon').html("<i class='wi wi-day-cloudy'></i>");
		} else if (TheWeatherIcon === 29) {
			$('#WeatherIcon').html("<i class='wi wi-night-cloudy'></i>");
		} else if (TheWeatherIcon === 30) {
			$('#WeatherIcon').html("<i class='wi wi-day-cloudy'></i>");
		} else if (TheWeatherIcon === 31) {
			$('#WeatherIcon').html("<i class='wi wi-night-clear'></i>");
		} else if (TheWeatherIcon === 32) {
			$('#WeatherIcon').html("<i class='wi wi-day-sunny'></i>");
		} else if (TheWeatherIcon === 33) {
			$('#WeatherIcon').html("<i class='wi wi-night-clear'></i>");
		} else if (TheWeatherIcon === 34) {
			$('#WeatherIcon').html("<i class='wi wi-day-sunny'></i>");
		} else if (TheWeatherIcon === 35) {
			$('#WeatherIcon').html("<i class='wi wi-hail'></i>");
		} else if (TheWeatherIcon === 36) {
			$('#WeatherIcon').html("<i class='wi wi-hot'></i>");
		} else if (TheWeatherIcon === 37) {
			$('#WeatherIcon').html("<i class='wi wi-storm-showers'></i>");
		} else if (TheWeatherIcon === 38) {
			$('#WeatherIcon').html("<i class='wi wi-storm-showers'></i>");
		} else if (TheWeatherIcon === 39) {
			$('#WeatherIcon').html("<i class='wi wi-storm-showers'></i>");
		} else if (TheWeatherIcon === 40) {
			$('#WeatherIcon').html("<i class='wi wi-showers'></i>");
		} else if (TheWeatherIcon === 41) {
			$('#WeatherIcon').html("<i class='wi wi-sleet'></i>");
		} else if (TheWeatherIcon === 42) {
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		} else if (TheWeatherIcon === 43) {
			$('#WeatherIcon').html("<i class='wi wi-sleet'></i>");
		} else if (TheWeatherIcon === 44) {
			$('#WeatherIcon').html("<i class='wi wi-cloudy'></i>");
		} else if (TheWeatherIcon === 45) {
			$('#WeatherIcon').html("<i class='wi wi-storm-showers'></i>");
		} else if (TheWeatherIcon === 46) {
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		} else if (TheWeatherIcon === 47) {
			$('#WeatherIcon').html("<i class='wi wi-storm-showers'></i>");
		} else{
			$('#WeatherIcon').html("<i class='wi wi-snow'></i>");
		}
	}
	$(function() {
		ChangeTheWeatherIcon();
	});
	setInterval(function() { ChangeTheWeatherIcon(); }, 20000);

	// End jQuery
	
	if(this.state.requestFailed) return <p>Failed...</p>
	if(!this.state.weatherData) return <p>Loading...</p>

    return(
	<div id="CurrentWeather">

		<div id="TheCurrentWeather">
			<div className="CurrentlyItem" id="CurrentIcon">
				<div className="icon" id="WeatherIcon" data-currenticon={this.state.weatherData.item.forecast[0].code}></div>
				<div className="desc">
					{this.state.weatherData.item.condition.text}
				</div>
			</div>
			<div className="CurrentlyItem" id="CurrentTemp">
				Curent <span className="temp">
					{this.state.weatherData.item.condition.temp}°
				</span>
				<div id="TheWindChill">
					Windchill: <span>{this.state.weatherData.wind.chill}</span>°
				</div>	
			</div>
			<div className="CurrentlyItem" id="CurrentWeatherSide">
				<div className="highTemp"><b>High</b> <span className="high">{this.state.weatherData.item.forecast[0].high}°</span></div>
				<div className="lowTemp"><b>Low</b> <span className="low">{this.state.weatherData.item.forecast[0].low}°</span></div>
				<div className="Speed">
					<b>Wind</b> <span className="TheWindSpeed">{this.state.weatherData.wind.speed}</span> <small>mph</small>
					<small id="TheDirection" data-direction={this.state.weatherData.wind.direction}></small>
				</div>
			</div>	
		</div>
		<div id="TheRiseSet">
			<div className="RiseSetItem TheSunrise">Sunrise {this.state.weatherData.astronomy.sunrise}</div>
			<div className="RiseSetItem TheSunset">Sunset {this.state.weatherData.astronomy.sunset}</div>
		</div>
	</div>
    );
  }
}

export default CurrentWeather;