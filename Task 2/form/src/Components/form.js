import React, {Component} from 'react';

class Form extends Component{
	render(){
		return(
        <div>
        	Your Name is {this.props.firstName + " " + this.props.lastName}<br/>
        	Your Age is {this.props.age}<br/>
        </div>
    );}
}

export default Form;
