import React, { Component } from "react";
import axios from 'axios';
import './compjobpost.css';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import Cardjob from './cardjob';

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Compjobpost extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            jobtitle:"",
            postingdate:"",
            deadline:"",
            location:"",
            salary:"",
            jobdes:"",
            jobcat:"",
            jobs:[]
           
        }
        this.onChange=this.onChange.bind(this);
        this.submitJob=this.submitJob.bind(this);
        
    }
    componentDidMount(){
        const data={comp_id:1};
         axios.get('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/compjobs',data)
                 .then((response) => {
                 //update the state with the response data
                 this.setState({
                    jobs : this.state.jobs.concat(response.data) 
                 });
                 
             });
     }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    submitJob = (e) => {
        
        e.preventDefault();
        const data = {
            
            jobtitle: this.state.jobtitle,
            postingdate : this.state.postingdate,
            deadline : this.state.deadline,
            location : this.state.location,
            salary   : this.state.salary,
            jobdes   : this.state.jobdes,
            jobcat   : this.state.jobcat,
            comp_id  : 1

        }

   

         

        // //set the with credentials to true
        // axios.defaults.withCredentials = true;
        // //make a post request with the user data
         axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/compjobpost',data)
            .then(response => {
                //console.log("Status Code Create : ",response.data);
                console.log("response : ",response);
                if(response.status === 200){
                    console.log("job added succesfully");

                    
                }
                else if(response.status === 204){
                    alert("check all fields");
       }
            else if(response.status === 400){
        alert("Some Error Occured");
}

      });
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
        let details = this.state.jobs.map(job => {
            return(
                <Cardjob jobtitle={job.jobtitle} location={job.location}/>   
            )
        })
        console.log(this.state.jobs);
        //console.log(details);
        return (
            <SplitterLayout>
            <div>
            <form>
                
                <h2>Post a Job</h2>
                <h2>Post a Job</h2>

                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name = "jobtitle" placeholder="Enter Job title" />
                </div>

                <div className="form-group">
                    <label>Posting Date</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name ="postingdate" placeholder="Enter the date job is being posted" />
                </div>
                <div className="form-group">
                    <label>Deadline</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="deadline" placeholder="Enter the deadline to apply" />
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="location" placeholder="Enter location" />
                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="salary" placeholder="Enter salary" />
                </div>
                <div className="form-group">
                    <label>Job Description</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="jobdes" placeholder="Enter Job Description" />
                </div>
                <div className="form-group">
                    <label>Job Category</label>
                    <input type="text" onChange = {this.onChange} className="form-control" name="jobcat" placeholder="Enter Job Category" />
                </div>



                <button type="submit" onClick={this.submitJob} className="btn btn-primary btn-block">Post Job</button>
                
            </form>
            </div>
            <div>
                <h1>List of Jobs Posted</h1>
                <h2>List of Jobs Posted</h2>
                {details}</div>

            
            </SplitterLayout>
        );
    }
}