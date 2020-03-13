import React, { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router';
import cookie from 'react-cookies';
export default class Compsignup extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            companyname : "",
            email:"",
            password:"",
            location:"",
           // authFlag:false
        }
        
    }
    // componentWillMount(){
    //     this.setState({
    //         authFlag : false
    //     })
    // }

    companynameChangeHandler = (e) => {
        this.setState({
            companyname : e.target.value
        })
    }
    locationChangeHandler = (e) => {
        this.setState({
            location : e.target.value
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
        e.preventDefault();
        const data = {
            companyname : this.state.companyname,
            email: this.state.email,
            password: this.state.password,
            location:this.state.location
        }
        console.log(data.companyname);
        console.log(data.location);
        console.log(data.email);
        console.log(data.password);

         if(data.companyname && data.email && data.password && data.location){

        // //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
         axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/companysignup',data)
            .then(response => {
                console.log("Status Code Create : ",response);
                if(response.status === 200){
                    alert("signed up succesfully");
                    //window.open('/profile', "_self");
                    window.open('/complanding', "_self");
                }

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
                    <label>Company name</label>
                    <input type="text" onChange = {this.companynameChangeHandler} className="form-control" placeholder="Company name" />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" onChange = {this.locationChangeHandler} className="form-control" placeholder="Location" />
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