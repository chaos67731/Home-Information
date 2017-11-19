import React, { Component } from 'react';

class WindDirection extends Component{

  renderWindDirection(){
	if (this.props.theWindDirection> "022.5" && this.props.theWindDirection< "067.5") {
		return (
			<span>
				North East
			</span>
		);
	} else if (this.props.theWindDirection> "067.5" && this.props.theWindDirection< "112.5"){
		return (
			<span>
				East
			</span>
		);
	}else if (this.props.theWindDirection> "112.5" && this.props.theWindDirection< "157.5"){
		return (
			<span>
				South East
			</span>
		);
	}else if (this.props.theWindDirection> "157.5" && this.props.theWindDirection< "202.5"){
		return (
			<span>
				South
			</span>
		);
	}else if (this.props.theWindDirection> "202.5" && this.props.theWindDirection< "247.5"){
		return (
			<span>
				South West
			</span>
		);
	}else if (this.props.theWindDirection> "247.5" && this.props.theWindDirection< "292.5"){
		return (
			<span>
				West
			</span>
		);
	}else if (this.props.theWindDirection> "292.5" && this.props.theWindDirection< "337.5"){
		return (
			<span>
				North West
			</span>
		);
	} else {
		return (
			<span>
				North
			</span>
		);
	}
  }
  render(){
    return(
      <span> 
  		{ this.renderWindDirection() }
      </span>

    );
  }
}
export default WindDirection;