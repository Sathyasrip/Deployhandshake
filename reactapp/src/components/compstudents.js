import React, {Component} from 'react';
import Comp from './Cardcomponent';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Document, Page } from "react-pdf";
class Compstudents extends Component{
    constructor(){
        super();
        this.state = {  
            status:"Change status to reviewed"
        }
        this.changestatus=this.changestatus.bind(this)
    }  
viewresume(){
    window.open("/resume feb 22.pdf", "_self");
}
changestatus(){
    this.setState({status:"Reviewed"})
}

    render(){
       
        return(
            <div>
                <h1>List of students who applied</h1>
                <h2>List of students who applied</h2>
                <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>Ronald Weasley</Card.Title>
    <Card.Text>
      Role:Software Engineer Intern
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <Button onClick={this.viewresume}>View Resume</Button>
  
  </Card.Body>
  <Card.Body>
        <Button onClick={this.changestatus}>{this.state.status}</Button>
  </Card.Body>
</Card>
<Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>Ronald Weasley</Card.Title>
    <Card.Text>
      Role:Performance Engineer Intern
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <Button onClick={this.viewresume}>View Resume</Button>
  
  </Card.Body>
  <Card.Body>
        <Button >Change Status to reviewed</Button>
  </Card.Body>
</Card>
                
                
            </div>
        )
    }
}

export default Compstudents;