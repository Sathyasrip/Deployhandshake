import React, { Component } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

function Cardjob(props){
    
    return (
        <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>{props.jobtitle}</Card.Title>
    <Card.Text>
      Location: {props.location}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="/profile">View Students who apllied</Card.Link>
  </Card.Body>
</Card>
      </div>

        )
}



export default Cardjob;