import React, { Component } from "react";
import $ from "jquery";

class Quotes extends Component {
  // Start Content
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  componentWillMount() {
    this.setState({});
  }
  // End Content
  render() {
    // JS
    $(document).ready(function() {});

    return (
      <ul className="Quotes" id="js-Quotes">
        <li>Hey, big guy. Sun's getting real low</li>
      </ul>
    );
  }
}

export default Quotes;
