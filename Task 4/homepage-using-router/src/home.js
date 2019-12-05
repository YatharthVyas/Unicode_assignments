import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';		//Linking BootStrap
import {NavLink} from 'react-router-dom';

function Home() {
  return (
  	<React.Fragment>
        <div className="jumbotron index-jumbo">
          <h1 align="center"> Index </h1>
          <p align="center">This contains all my react apps.</p>
        </div>
        <hr/>
        <div className="container">
         <div className="row">
          <div className="card col-md-6">
         	<NavLink style={{ textDecoration: 'none' , color : 'black'}} to="/temp">
            <b><div className="card-header">
              Temperature Conversion
            </div></b>
            <div className="card-body">
              This App is designed to convert Temperature from Celsius to Fahrenhiet and Kelvin
            </div>
         	</NavLink>
          </div>
          <div className="card col-md-6">
          <NavLink style={{ textDecoration: 'none' , color : 'black'}} to="/resume">
            <b><div className="card-header">
              Resume App
            </div></b>
            <div className="card-body">
              Fill in your details and get your Resume in an instant!
            </div>
           </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="card col-md-6">
          <NavLink style={{ textDecoration: 'none' , color : 'black'}} to="/form">
            <b><div className="card-header">
              Form App
            </div></b>
            <div className="card-body">
              This App will dynamically display your details using conditional rendering
            </div>
          </NavLink>
          </div>
          <div className="card col-md-6">
          <NavLink style={{ textDecoration: 'none' , color : 'black'}} to="/zomato">
            <b><div className="card-header">
              Zomato App
            </div></b>
            <div className="card-body">
              A clone of Zomato website displaying a list of dishes using API fetching
            </div>
          </NavLink>
          </div>
        </div>
      </div> <br/>
      <div className="alert-info infobox">
        <strong>Click on any of the cards to visit the webpage.</strong>
      </div>
    </React.Fragment>
  );
}

export default Home;
