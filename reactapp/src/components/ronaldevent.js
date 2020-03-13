import React, { Component } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

function RonaldEvent(props){
    
    return (
        <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>Ronald Weasley</Card.Title>
    <Card.Text>
      University of Hogwarts
    </Card.Text>
  </Card.Body>
  
</Card>
      </div>

        )
}



export default RonaldEvent;