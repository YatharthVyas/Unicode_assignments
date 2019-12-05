import React from 'react';
import TempApp from './TempApp';
import ResumeApp from './ResumeApp';
import FormApp from './FormApp';
import ZomatoApp from './ZomatoApp';
import 'bootstrap/dist/css/bootstrap.min.css';    //Linking BootStrap
import './App.css';
class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          page:"home"
        }
    }
    
    handleChange = (e) =>{
      this.setState({page:e.target.id})
      console.log(e.target.id)
    }

    printOp() {
        if(this.state.page==="home")
        return (
            <React.Fragment>
              <br/>
              <div className="jumbotron index-jumbo">
                <h1 align="center"> Index </h1>
                <p align="center">This contains all my react apps.</p>
              </div>
              <hr/>
              <div className="container">
               <div className="row">
                <div className="card col-md-6">
                  <b><div className="card-header" id="temp-app" onClick={this.handleChange}>
                    Temperature Conversion
                  </div></b>
                  <div className="card-body">
                    This App is designed to convert Temperature from Celsius to Fahrenhiet and Kelvin
                  </div>
                </div>
                <div className="card col-md-6">
                  <b><div className="card-header" id="resume-app" onClick={this.handleChange}>
                    Resume App
                  </div></b>
                  <div className="card-body">
                    Fill in your details and get your Resume in an instant!
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card col-md-6">
                  <b><div className="card-header" id="form-app" onClick={this.handleChange}>
                    Form App
                  </div></b>
                  <div className="card-body">
                    This App will dynamically display your details using conditional rendering
                  </div>
                </div>
                <div className="card col-md-6">
                  <b><div className="card-header" id="zomato-app" onClick={this.handleChange}>
                    Zomato App
                  </div></b>
                  <div className="card-body">
                    A clone of Zomato website displaying a list of dishes using API fetching
                  </div>
                </div>
              </div>
            </div> <br/>
            <div className="alert-info infobox">
              <strong>Click on the header of any of the card to visit the webpage.</strong>
            </div>
            </React.Fragment>
        )
      else if(this.state.page==="temp-app"){
        return(
          <React.Fragment>
            <div id="home" onClick={this.handleChange}> Click here to go back to Home Page</div>
            <TempApp />
          </React.Fragment>
          )
      }
      else if(this.state.page==="resume-app"){
        return(
          <React.Fragment>
            <div id="home" onClick={this.handleChange}> Click here to go back to Home Page</div>
            <ResumeApp />
          </React.Fragment>
          )
      }
      else if(this.state.page==="form-app"){
        return(
          <React.Fragment>
            <div id="home" onClick={this.handleChange}> Click here to go back to Home Page</div>
            <FormApp />
          </React.Fragment>
          )
      }
      else if(this.state.page==="zomato-app"){
        return(
          <React.Fragment>
            <div id="home" onClick={this.handleChange}> Click here to go back to Home Page</div>
            <ZomatoApp />
          </React.Fragment>
          )
      }
      else{
        return(
          <React.Fragment>
            <div id="home" onClick={this.handleChange}> Click here to go back to Home Page</div>
          <div className="alert-warning">
            <h3 className="alert-heading">Aww, Snap!</h3>
            <p>There was an error fetching your webpage.</p>
          </div>
        </React.Fragment>
          )
      }
    }

    render() {
      return(
        <React.Fragment>
        {this.printOp()}
        </React.Fragment>
        );
    }
}

export default App;
