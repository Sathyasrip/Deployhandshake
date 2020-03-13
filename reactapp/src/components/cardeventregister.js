import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function Cardeventregister(props){
    
//     this.register=this.register.bind(this);


//     register= (e) => {
        
//     e.preventDefault();
//     alert("Registered succesfully");
// }
    
    return (
        <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>{props.jobtitle}</Card.Title>
    <Card.Text>
    
      Description:{props.description}
      Location: {props.location}
      Eligibility :{props.eligibility}
      Major :{props.major}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    {/* <Card.Link onClick={"Registered succesfully"} >Register</Card.Link> */}
    <Button >Register</Button>
  </Card.Body>
</Card>
      </div>

        )
}
 export default Cardeventregister;