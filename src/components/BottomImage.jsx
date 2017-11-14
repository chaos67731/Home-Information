import React, { Component } from 'react';
import Clock from './parts/Clock';

class BottomImage extends Component{
	constructor(props) {
		super(props);
		this.state = { 
			deadline: 'November 23, 2017',
		};
	}
	render(){

    return(
		<div className="Turkey BottomCountDown" id="BottomImage">
			 <Clock deadline={ this.state.deadline }/>
		</div>
    );
  }
}

export default BottomImage;