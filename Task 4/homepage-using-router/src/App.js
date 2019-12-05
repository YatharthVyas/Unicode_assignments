import React from 'react';
import TempApp from './TempApp';
import ResumeApp from './ResumeApp';
import FormApp from './FormApp';
import Home from "./home.js"
import ZomatoApp from './ZomatoApp';
import ErrorPage from './Error';
import NavHome from './NavHome';
import 'bootstrap/dist/css/bootstrap.min.css';    //Linking BootStrap
import './App.css';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
function App (){
  return (
    <React.Fragment>
      {/* Creating Routes */}
      <BrowserRouter>
        <NavHome/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/temp" component={TempApp}/>
          <Route path="/resume" component={ResumeApp}/>
          <Route path="/form" component={FormApp}/>
          <Route path="/zomato" component={ZomatoApp}/>
          <Route component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;
