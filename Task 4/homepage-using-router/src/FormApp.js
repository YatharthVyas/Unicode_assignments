import React from 'react';
import Form from './Components/form';
import 'bootstrap/dist/css/bootstrap.min.css';    //Linking BootStrap
import './FormApp.css';

class FormApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName : '',
      lastName: '',
      age: ''
    }
  }
  handleChange = (event) => {                     //For Anything changed in any input field
      this.setState({[event.target.name]: event.target.value}); //Assigns the value of input to its corresponding variable
    }
  render(){
  return (
    <div className="App">
      <div className="jumbotron form-jumbo">
        <h1>Form Display App</h1>
        <p>This App will display your info using the form input</p>
      </div><br/><br/>
      <div className="container .form-cont">
        <form>
         <div className="row">
          <div className="col-md-6">First Name:</div>
          <div className="col-md-6"><input className="form-ip" type="text" name="firstName" placeholder="Enter First Name" onChange={this.handleChange}/></div>
        </div>
        <div className="row">
          <div className="col-md-6">Last Name:</div> 
          <div className="col-md-6"><input className="form-ip" type="text" name="lastName" placeholder="Enter Last Name" onChange={this.handleChange}/></div>
        </div>
        <div className="row">
          <div className="col-md-6">Age: </div>
          <div className="col-md-6"><input className="form-ip" type="number" step="1" name="age" placeholder="Enter Age" onChange={this.handleChange}/></div>
        </div>
        </form>
      </div><br/>
      <Form firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}/>
    </div>
  );}
}

export default FormApp;
