import React, { Component } from 'react';
import Clock from './parts/Clock';

class BottomImage extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			deadline: 'December 25, 2017',
		};
	}
	render(){

    return(
		<div className="X-Mas BottomCountDown" id="BottomImage">
			 <Clock deadline={ this.state.deadline }/>
		</div>
    );
  }
}

export default BottomImage;