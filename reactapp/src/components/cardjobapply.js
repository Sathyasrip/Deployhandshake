import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Document } from 'react-pdf'

function Cardjobapply(props){
    
    return (
        <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>{props.jobtitle}</Card.Title>
    <Card.Text>
      Location: {props.location}
      Deadline to Apply:{props.deadline}
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <Document file="somefile.pdf"> Upload pdf</Document>
    
    
    
   
  </Card.Body>
</Card>
      </div>

        )
}



export default Cardjobapply;