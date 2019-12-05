import React from 'react';
import axios from 'axios';
class APIDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	isLoaded: false ,
        	dishes: []
        };
    }

    componentDidMount() {
	require('dotenv').config();		//This will fetch our .env file
  		axios({
	     	url: "https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624",
	     	headers: {
		        "user-key": process.env.REACT_APP_API_KEY
	      	}
   		 })
  		.then(response => {
  				this.setState({dishes: response.data.daily_menus[2].daily_menu.dishes});
				this.setState({isLoaded: true});
  			})
  	}

    render() {
        return (
           <React.Fragment>
	      		{!this.state.isLoaded ? 
	      			<div className="alert alert-info">
  						<strong>Loading!</strong> The API is being processed.
					</div> 
				: 
	      			<table className="table table-dark table-hover table-bordered container" align="center">
		      			<thead>
		      				<tr>
		      					<th>Dish Name</th>
		      					<th>Price</th>
		      				</tr>
		      			</thead>
		      			<tbody>
			      			{this.state.dishes.map((value)=>{
			      				return (
				      				<tr  key={value.dish.dish_id}>
				      					<td> {value.dish.name} </td>
				      					<td>{value.dish.price}</td>
				      				</tr>
			      				)
			      			})}
		      			</tbody>
	      			</table>}
	          		{console.log(this.state.dishes)}
           </React.Fragment>
        );
    }
}

export default APIDemo;
