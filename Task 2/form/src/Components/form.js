import React, {Component} from 'react';

class Form extends Component{
	render(){
		if ((this.props.firstName + this.props.lastName)!=="" && this.props.age !=="")
		return(
        <div>
        	Your Name is {this.props.firstName + " " + this.props.lastName}<br/>
        	Your Age is {this.props.age}<br/>
        </div>
    	)
		else if ((this.props.firstName + this.props.lastName)!=="")
		return(
        <div>
        	Your Name is {this.props.firstName + " " + this.props.lastName}<br/>
        </div>
        )
		else if (this.props.age !=="")
		return(
        <div>	
			Your Age is {this.props.age}<br/>
        </div>
        )
		else
			return(
				<div>
					Enter Input Above 
				</div>
				)
    ;}
}

export default Form;
