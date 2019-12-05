import React from 'react';
import TempConvert from './Components/temp';		//Component import
import 'bootstrap/dist/css/bootstrap.min.css';		//Linking BootStrap
import './TempApp.css';									//CSS import

function TempApp() {
  return (
    <div className="App">
    <hr/>
    	<div className="jumbotron temp-jumbo">
    		<h1> Temperature Conversion App </h1>
    		<p> This App will Convert the Temperature from °C to °F and Kelvin </p>
    	</div>
    	<hr/>
      <div className="container">
     	  <TempConvert />
      </div>
    </div>
  );
}

export default TempApp;
