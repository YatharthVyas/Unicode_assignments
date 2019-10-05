import React from 'react';
import TempConvert from './Components/temp';		//Component import
import 'bootstrap/dist/css/bootstrap.min.css';		//Linking BootStrap
import './App.css';									//CSS import

function App() {
  return (
    <div className="App">
    <hr/>
    	<div className="jumbotron">
    		<h1> Temperature Conversion App </h1>
    		<p> This App will Convert the Temperature from °C to °F and Kelvin </p>
    	</div>
    	<hr/>
     	<TempConvert />
    </div>
  );
}

export default App;
