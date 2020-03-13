import React, { Component } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
//import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
export default class Application extends Component {
    constructor(props){
        super(props);
        this.state = {
            reviewed:'',
            company:''
           
        }
        this.handleclick=this.handleclick.bind(this)
        
    }
    handleclick(){
        this.setState({reviewed:"Software Engineer Intern    "})
        this.setState({company:"tesla"})
        
    }
    render() {
        return (

            <>
           <form>
               <h1>Search</h1>
               <div className="form-group">
                    <label>Search </label>
                    <input type="search" className="form-control" placeholder="enter job title" />
                    <button type="submit" onClick={this.handleclick} className="btn btn-primary btn-block">Search</button>
                </div>
                
               </form>
               <div>
{this.state.reviewed}
{this.state.company}
               </div>


</>
            
        );
    }

}