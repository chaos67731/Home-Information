import React, { Component } from "react";
import Clock from "./parts/Clock";

class BottomImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "July 04, 2018"
    };
  }
  render() {
    return (
      <div className="FourthOfJuly BottomCountDown" id="BottomImage">
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}

export default BottomImage;
