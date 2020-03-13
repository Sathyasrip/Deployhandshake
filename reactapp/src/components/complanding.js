import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./login.component";
// import SignUp from ".signup.component";
 import Profile from "./profile";
 import Application from "./studentapplications";
 import Students from "./students";
 import Compjobpost from "./compjobpost";
 import Compeventpost from "./compeventpost";
 import Compstudents from "./compstudents";
function Complanding() {
  return (

      <Router>
    <div className="Landingpage">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/compjobpost"}>Job Postings</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profile"}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/compeventpost"}>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/compstudents"}>Students</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      
          <Switch>
          
            <Route path="/profile" component={Profile} />
            <Route path="/applications" component={Application} />
            <Route path="/compstudents" component={Compstudents}/>
            <Route path="/compjobpost" component={Compjobpost} />
            <Route path="/compeventpost" component={Compeventpost} />
            
          </Switch>
        
    </div>
    
    </Router>
    
    
  );
}

export default Complanding;