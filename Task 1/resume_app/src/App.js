import React from 'react';							//To import Components and other Library Functions
import MakeResume from './Components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';		//Linking BootStrap
import './App.css';									//Linking CSS


function App(){
  return (
    <div className="App">
	    <div className="container">
			<div className="jumbotron">
				<h1>Resume App</h1> <br/>
				<p>This app will save your info in a Resume Format</p>
			</div>
			<hr className="Decor"/><br/><br/>
				<MakeResume />		
	    </div><br/><br/>
	    <footer>This React App was made by Yatharth Vyas</footer>
	</div>
  ); 
}

export default App;								//To export this to index.js