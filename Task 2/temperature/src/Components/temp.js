import React from 'react';							//To import Components and other Library Functions
import './temp.css';
class TempConvert extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			c : 0,										//Cesius Temp
		};
	}	
	handleChange = (event) => {
		if (event.target.value !==""){
			this.setState({c : parseFloat(event.target.value)});
			document.getElementById("ans").style.display="block";
			document.getElementById("blank").style.display="none";
		}
		else{
			document.getElementById("blank").style.display="block";
			document.getElementById("ans").style.display="none";
		}
	}
	render(){
		return (
			<div>
				<h1 id="blank"> Enter the Input below </h1>
				<h1 id="ans"> {"Kelvin = " + (this.state.c+273) + "K Fahrenheit = " + ((this.state.c*9/5)+32) + "°F"} </h1><br/><br/>
				<input type="number" onChange={this.handleChange}/> °C
			</div>
		)
	}
}
export default TempConvert