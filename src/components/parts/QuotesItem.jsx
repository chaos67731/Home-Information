import React, { Component } from 'react';

var divStyle = {
  display: "none",
};

class QuoteItem extends Component{
  render(){
    return(
		<li className="quote" style={divStyle}>
			{this.props.project.title}
		</li>
     );
  }
}

export default QuoteItem;