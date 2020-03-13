import React, { Component } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";

function Comp(props){
    
    return (
        <div className="contact"> 
    <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
<Card.Title>{props.first_name}</Card.Title>
    <Card.Text>
      Role: {props.role}
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link >Change Status to reviewed</Card.Link>
  </Card.Body>
</Card>
      </div>

        )
}



export default Comp;



















// export default class Cardcomponent extends Component {
//     render() {
//         return (
//             <>

{/* <Card style={{ width: '20rem' }} className="text-center">
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="/">Card Link</Card.Link>
  </Card.Body>
</Card> */}

// </>




            
//         );
//     }

// }