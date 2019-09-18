import React, { Component } from "react";

import Header from "./components/Header";
import WeatherNew from "./components/WeatherNew";
// import CurrentWeather     	from "./components/CurrentWeather";
// import UpcomingForecasts  	from "./components/UpcomingForecasts";
import BottomTwo from "./components/BottomTwo";
import BottomImage from "./components/BottomImage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherNew />
        {/* <CurrentWeather weathernow="12795450"/>
      <UpcomingForecasts weatherforecasts="12795450"/> */}
        <BottomTwo />
        <BottomImage />
      </div>
    );
  }
}

export default App;
