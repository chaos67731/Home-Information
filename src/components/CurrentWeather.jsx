import React, { Component } from 'react';
// import $ from 'jquery';

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
		setInterval(this.fetchWeatherResult, 30000) 
	}

	
  render(){
	if(this.state.requestFailed) return <p>Failed...</p>
	if(!this.state.weatherData) return <p>Loading...</p>

    return(
	<div id="CurrentWeather">

		<div id="TheCurrentWeather">
			<div className="CurrentlyItem" id="CurrentIcon">
				<div className="icon" id="WeatherIcon">
					{this.state.weatherData.item.forecast[0].code}
				</div>
				<div className="desc">
					{this.state.weatherData.item.condition.text}
				</div>
			</div>
			<div className="CurrentlyItem" id="CurrentTemp">
				Curent <span className="temp">
					{this.state.weatherData.item.condition.temp}°
				</span>
				<div id="TheWindChill">
					Windchill: {this.state.weatherData.wind.chill}°
				</div>	
			</div>
			<div className="CurrentlyItem" id="CurrentWeatherSide">
				<div className="highTemp"><b>High</b> <span className="high">{this.state.weatherData.item.forecast[0].high}°</span></div>
				<div className="lowTemp"><b>Low</b> <span className="low">{this.state.weatherData.item.forecast[0].low}°</span></div>
				<div className="Speed">
					<b>Wind</b> <span>{this.state.weatherData.wind.speed}</span> <small>mph</small>
					<small id="TheDirection">{this.state.weatherData.wind.direction}</small>
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