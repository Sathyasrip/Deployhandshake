import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Profile from "./components/profile";
import Studentlanding from './components/studentlanding';
import Complanding from './components/complanding';
import Compsignup from './components/compsignup';
import Compsignin from './components/compsignin';
import Studentjobsearch from './components/studentjobsearch';
import Studenteventsearch from './components/studenteventsearch';
import Compeventpost from './components/compeventpost';
import Profileprac from './components/profilepractise';
// import Upload from './components/upload';
import Compjobpost from './components/compjobpost';
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {/* <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Student SignIn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Student SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/compsignup"}>Company SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/compsignin"}>Company SignIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/studentlanding" component={Studentlanding} />
            <Route path="/compsignup" component={Compsignup} />
            <Route path="/compsignin" component={Compsignin} />
           
             <Route path="/complanding" component={Complanding} />
             <Route path="/compeventpost" component={Compeventpost} />
             <Route path="/studentjobsearch" component={Studentjobsearch}/>
             <Route path="/studenteventsearch" component={Studenteventsearch}/>
             <Route path="/profileprac" component={Profileprac}/>
             {/* <Route path="/upload" component={Upload}/> */}
             <Route path="/compjobpost" component={Compjobpost}/>
          </Switch>
        {/* </div>
      </div> */}
      <div>
      
      </div>
      
    </div></Router>
  );
}

export default App;