import React, { Component } from "react";
import axios from 'axios';
import Cardeventregister from './cardeventregister';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default class Studenteventssearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs:[],
            event:''
           
        }
        this.viewDetails=this.viewDetails.bind(this)
        
    }
    
    submitLogin = (e) => {
        
        e.preventDefault();
        const data={comp_id:1};
        axios.get('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/compevents',data)
                .then((response) => {
                //update the state with the response data
                this.setState({
                   jobs : this.state.jobs.concat(response.data) 
                });
                
            });
        
        
    }

    viewDetails(){
       
            this.setState({ event: "Python Development Conference" })
        

    }
    onclickhandle(){
        alert("Registered succesfully")
    }
    render() {
        let details = this.state.jobs.map(job => {
            return(
                <div className="contact"> 
                <Card style={{ width: '20rem' }} className="text-center">
              <Card.Body>
            <Card.Title>{job.eventname}</Card.Title>
                <Card.Text>
                
                  Description:{job.description}
                  Location: {job.location}
                  Eligibility :{job.eligibility}
                  Major :{job.major}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                {/* <Card.Link onClick={"Registered succesfully"} >Register</Card.Link> */}
                <Button onclick={this.onclickhandle}>Register</Button>
              </Card.Body>
            </Card>
                  </div>
                
                
                // <Cardeventregister jobtitle={job.eventname} location={job.location} description={job.description} major={job.major} eligibility={job.eligibility}/>   
            )
        })
        return (
           <div>
               <h1>Search for jobs and apply</h1>
               <form>
               <div className="form-group">
                    <label>Search here events</label>
                    <input type="search" className="form-control" placeholder="enter job title" />
                    <button type="submit" onClick={this.submitLogin} className="btn btn-primary btn-block">Search</button>
                </div>
                

               </form>
               <div>
                   {details}
               </div>
               <div>
                   <Button onClick={this.viewDetails}>View list of registered events</Button>
                   <h3>{this.state.event}</h3>
               </div>

           </div>
        );
    }
}