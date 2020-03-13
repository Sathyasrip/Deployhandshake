import React, { Component } from "react";
import axios from 'axios';
export default class Compsignin extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            email:"",
            password:"",
           
        }
        
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
            
            email: this.state.email,
            password: this.state.password
        }
        
        console.log(data.email);
        console.log(data.password);

         if(data.email && data.password){

        // //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
         axios.post('http://localhost:5000/compsignin',data)
            .then(response => {
                //console.log("Status Code Create : ",response.data);
                console.log("response : ",response);
                if(response.status === 200){
                    const comp= response.data;
                    const comp_id=comp[0].id;
                    console.log("comapny",comp);
                    console.log("company name",comp[0].company_name);
                    console.log("company id",comp[0].company_id);
                    localStorage.setItem('company_id',comp_id);
                    alert("logged in succesfully");
                    //window.open('/', "_self");
                    window.open('/complanding', "_self");
                    
                }
                else if(response.status === 204){
                    alert("Check email id and password");
       }
            else if(response.status === 400){
        alert("Some Error Occured");
}

      });
        }
            else{
                alert('One of the inputs is missing');
                console.log('Something missing');
            }
    }
    render() {
        return (
            <form>
                <h3>Company Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange = {this.emailChangeHandler} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange = {this.passwordChangeHandler} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={this.submitLogin} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}