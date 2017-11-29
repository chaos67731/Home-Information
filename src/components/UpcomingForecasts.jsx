import React, { Component } 	from 'react';
import UpcomingForecastsItem 	from "./parts/UpcomingForecastsItem";

const urlForUsername = weatherforecasts => `https://query.yahooapis.com/v1/public/yql?q=select+*+from+weather.forecast+where+woeid=${weatherforecasts}&format=json`

class UpcomingForecasts extends Component{

	constructor(props){
		super(props)
		this.state = {
			requestFailed: false
		}
		this.fetchWeatherResult = this.fetchWeatherResult.bind(this);
	}

	fetchWeatherResult = () => {
		// Dealing with json call
		fetch(urlForUsername(this.props.weatherforecasts))
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
	}

	componentDidMount(){
		this.fetchWeatherResult()
		setInterval(this.fetchWeatherResult, 300000) 
	}

  render(){

	// if(this.state.requestFailed) return <p>Failed...</p>
	if(!this.state.weatherData) return <p>Loading...</p>
    return(
		<div id="UpcomingForecasts">
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[1]} forecastsday="1"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[2]} forecastsday="2"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[3]} forecastsday="3"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[4]} forecastsday="4"/>
			<UpcomingForecastsItem forecastsInfoz={this.state.weatherData.item.forecast[5]} forecastsday="5"/>
		</div>
    );
  }
}

export default UpcomingForecasts;