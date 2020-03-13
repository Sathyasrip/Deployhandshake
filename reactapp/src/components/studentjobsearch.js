import React, { Component } from "react";
import axios from 'axios';
import Cardjobapply from './cardjobapply';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'react-bootstrap/Image';
export default class Studentjobsearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobs:[],
            file:null
            
           
        }
        this.handleChange = this.handleChange.bind(this)
        
    }
    
    submitLogin = (e) => {
        
        e.preventDefault();
        const data={comp_id:1};
        axios.get('http://localhost:5000/compjobs',data)
                .then((response) => {
                //update the state with the response data
                this.setState({
                   jobs : this.state.jobs.concat(response.data) 
                });
                
            });
        
        
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }
      onclickhandle(){
          alert("Applied Successfully")
      }
    render() {
        let details = this.state.jobs.map(job => {
            return(
                // <Cardjobapply jobtitle={job.jobtitle} location={job.location}/>   
                <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>{job.jobtitle}</Card.Title>
    <Card.Text>
      Location: {job.location}
      Deadline to Apply:{job.deadline}
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <div>
          
        <input type="file" onChange={this.handleChange}/>
        <Image src={this.state.file} height="150" width="150" crop="fill"/>
        <Button onClick={this.onclickhandle}>Apply</Button>
      </div>
  </Card.Body>
</Card>
      </div>

            )
        })
        return (
           <div>
               <h1>Search for jobs and apply</h1>
               <form>
               <div className="form-group">
                    <label>Search here for jobs</label>
                    <input type="search" className="form-control" placeholder="enter job title" />
                    <button type="submit" onClick={this.submitLogin} className="btn btn-primary btn-block">Search</button>
                </div>
                

               </form>
               <div>
                   {details}
               </div>
           </div>
        );
    }
}