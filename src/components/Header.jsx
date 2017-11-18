import React, { Component } from 'react';
import Clock from 'react-live-clock';

class Header extends Component{

  render(){
    return(
		<div id="TimeDate">
			<div id="TheTime">
				<Clock format={'h:mm:ssa'} ticking={true} />
			</div>
			<div id="TheDate">
				<Clock format={'dddd, MMMM Do'} />
			</div>	
		</div>
    );
  }
}

export default Header;