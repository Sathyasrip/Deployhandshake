import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./login.component";
// import SignUp from ".signup.component";
 import Profileprac from "./profilepractise";
 import Application from "./studentapplications";
 import Students from "./students";
 import Studentjobsearch from "./studentjobsearch";
 import Studenteventsearch from "./studenteventsearch";
function Studentlanding() {
  return (<Router>
    <div className="Landingpage">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/studentjobsearch"}>JobSearch</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profileprac"}>Profile</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/studenteventsearch"}>Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/applications"}>Applications</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/students"}>Students</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      
          <Switch>
            {/* <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} /> */}
            <Route path="/profileprac" component={Profileprac} />
            <Route path="/applications" component={Application} />
            <Route path="/students" component={Students} />
            <Route path="/studentjobsearch" component={Studentjobsearch} />
            <Route path="/studenteventsearch" component={Studenteventsearch} />


            
          </Switch>
        
    </div>
    </Router>
  );
}

export default Studentlanding;