// import React, { Component } from "react";

// export default class SignUp extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>React SignUp Component</h3>
//             </div>
//         );
//     }
// }

import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router';
import cookie from 'react-cookies';
export default class SignUp extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            lastname : "",
            univname : "",
            email:"",
            password:"",
            authFlag:false
        }
        // this.firstnameChangeHandler = this.firstnameChangeHandler.bind(this);
        // this.lastnameChangeHandler = this.lastnameChangeHandler.bind(this);
        // this.univnameChangeHandler = this.univnameChangeHandler.bind(this);
        // this.emailnameChangeHandler = this.emailnameChangeHandler.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        // this.submitLogin = this.submitLogin.bind(this);
    }
    componentWillMount(){
        this.setState({
            authFlag : false
        })
    }

    firstnameChangeHandler = (e) => {
        this.setState({
            firstname : e.target.value
        })
    }

    lastnameChangeHandler = (e) => {
        this.setState({
            lastname : e.target.value
        })
    }

    univnameChangeHandler = (e) => {
        this.setState({
            univname : e.target.value
        })
    }
    emailChangeHandler = (e) => {
        this.setState({
            email : e.target.value
        })
    }
    passwordChangeHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }
    submitLogin = (e) => {
        // var headers = new Headers();
        //prevent page from refresh
        // console.log(this.state);
        e.preventDefault();
        const data = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            univname : this.state.univname,
            email: this.state.email,
            password: this.state.password
        }
        console.log(data.firstname);
        console.log(data.lastname);
        console.log(data.univname);
        console.log(data.email);
        console.log(data.password);

         if(data.firstname && data.lastname && data.univname && data.email && data.password){

        // //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
         axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/register',data)
            .then(response => {
                console.log("Status Code Create : ",response.data);
                if(response.data.code === 200){
                    this.setState({
                        authFlag : true
                    })
                    //alert("signed up succesfully");
                    window.open('/studentlanding', "_self");
                    
                }
        //         // if(response.data === 'Successful_Insertion'){
        //         //      window.open('/home', "_self");
       // }

      });
        }
            else{
                alert('One of the inputs is missing');
                console.log('Something missing');
            }
    }


    render() {
        // let redirectVar = null;
        // if(cookie.load('cookie')){
        //     redirectVar = <Redirect to= "/profile"/>
        // }
        return (
            
            
            <form>
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange = {this.firstnameChangeHandler} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange = {this.lastnameChangeHandler} className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>University Name</label>
                    <input type="text" onChange = {this.univnameChangeHandler} className="form-control" placeholder="University" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange = {this.emailChangeHandler} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange = {this.passwordChangeHandler} className="form-control" placeholder="Enter password" />
                </div>
                

                <button type="submit" onClick={this.submitLogin} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
           
           
        );
    }
}