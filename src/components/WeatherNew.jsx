import React, { Component } from "react";
// import $ from 'jquery';

// import CryptoItemNew from './parts/CryptoItemNew';

class CryptoNew extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="WeatherNew">
        <h4>
          <center>New Weather</center>
        </h4>

        <a
          class="weatherwidget-io"
          href="https://forecast7.com/en/40d71n74d01/new-york/?unit=us"
          data-label_1="las vegas"
          data-label_2="WEATHER"
          data-font="Times New Roman"
          data-theme="dark"
        >
          las vegas WEATHER
        </a>
      </div>
    );
  }
}

export default CryptoNew;
