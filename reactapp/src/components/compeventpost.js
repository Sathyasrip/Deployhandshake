import React, { Component } from "react";
import axios from 'axios';
import './compjobpost.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import Cardjob from './cardjob';
import Button from "react-bootstrap/Button";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Compeventpost extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            eventname:"",
            description:"",
            time:"",
            date:"",
            location:"",
            eligibility:"",
            major:"",
            events:[],
            student:"",
            eve:""
           
        }
        this.onChange=this.onChange.bind(this);
        this.submitJob=this.submitJob.bind(this);
        this.buttonhandle=this.buttonhandle.bind(this);
        
    }
    componentDidMount(){
        //const data={comp_id:1};
         axios.get('http://localhost:5000/compevents')
                 .then((response) => {
                 //update the state with the response data
                 this.setState({
                    events : this.state.events.concat(response.data) 
                 });
                 
             });
     }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    submitJob = (e) => {
        
        e.preventDefault();
        const data = {
            eventname:this.state.eventname,
            description:this.state.description,
            time:this.state.time,
            date:this.state.date,
            location:this.state.location,
            eligibility:this.state.eligibility,
            major:this.state.major,
            comp_id  : 1

        }

   

         

        // //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
         axios.post('http://localhost:5000/compeventpost',data)
            .then(response => {
                //console.log("Status Code Create : ",response.data);
                console.log("response : ",response);
                if(response.status === 200){
                    console.log("event added succesfully");
                    alert("Event posted succesfully");
                    
                }
                else if(response.status === 204){
                    alert("check all fields");
       }
            else if(response.status === 400){
        alert("Some Error Occured");
}

      });
    }
    buttonhandle(){
        this.setState({student:"Ronald Weasley   "})
        this.setState({eve:"Python Development Conference"})
    }
        
    render() {
        // let details = this.state.jobs.map(job => {
        //     return(
        //         <tr>
        //             <td>{job.jobtitle}</td>
        //             <td>{job.location}</td>
        //             <td>{job.salary}</td>
        //         </tr>
        //     )
        // })
        let details = this.state.events.map(job => {
            return(
                <Cardjob jobtitle={job.eventname} location={job.location}/>   
            )
        })
        console.log(this.state.jobs);
        //console.log(details);
        return (
            <SplitterLayout>
            <div>
            <form>
                
                <h2>Post a Job</h2>
                <h2>Post an Event</h2>

                <div className="form-group">
                    <label>Event Name</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name = "eventname" placeholder="Enter Event title" />
                </div>

                <div className="form-group">
                    <label>Event Description</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name ="description" placeholder="Enter the event description" />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="date" placeholder="Enter the date" />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="time" placeholder="Enter the time" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="location" placeholder="Enter location" />
                </div>
                <div className="form-group">
                    <label>Eligibility</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="eligibility" placeholder="Enter eligibility details" />
                </div>
                <div className="form-group">
                    <label>Major</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="major" placeholder="Enter the major " />
                </div>
               
                <button type="submit" onClick={this.submitJob} className="btn btn-primary btn-block">Post Event</button>
                
            </form>
            </div>
            <div>
                <h1>List of Jobs Posted</h1>
                <h2>List of Events Posted</h2>
                {details}
                {/* <Button onClick={this.buttonhandle}>View List of Students Registered</Button>
               <h10>{this.state.student}</h10> 
                <h10>{this.state.eve}</h10> */}
                </div>

            
            </SplitterLayout>
        );
    }
}