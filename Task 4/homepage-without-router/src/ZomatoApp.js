import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';    //Linking BootStrap
import './ZomatoApp.css';
import APIDemo from './Components/APIDemo'

function ZomatoApp() {
  return (
    <div className="App zom">
   		<div className = "jumbotron zom-jumbo">
   			<div className = "overlay">
	         	<img className="top" src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg" alt="Find the best restaurants, cafés, and bars in New York City"/>
				<br/><br/>
				<h2 className="title"> Find the best restaurants, cafés, and bars in Mumbai   </h2>       
	         </div>
	        </div>
     	<APIDemo/>
     	<div className="footer table-dark"> All trademarks are properties of their respective owners. © 2008-2019 - Zomato™ Media Pvt Ltd. All rights reserved. </div>
    </div>
  );
}

export default ZomatoApp;
