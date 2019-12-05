import React from 'react';							//To import Components and other Library Functions
import MakeResume from './Components/Resume'
import 'bootstrap/dist/css/bootstrap.min.css';		//Linking BootStrap
import './ResumeApp.css';									//Linking CSS


function ResumeApp(){
  return (
    <div className="App res">
	    <div className="container">
			<div className="jumbotron res-jumbo">
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

export default ResumeApp;								//To export this to index.js