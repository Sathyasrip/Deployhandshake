import React, {Component} from 'react';
//import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import Comp from './Cardcomponent.js';

class Students extends Component {
    constructor(){
        super();
        this.state = {  
            books : []
        }
    }  
    //get the books data from backend  
    componentDidMount(){
       const data={name:'s'};
        axios.get('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/students')
                .then((response) => {
                //update the state with the response data
                this.setState({
                    books : this.state.books.concat(response.data) 
                });
            });
    }

    render(){
        //iterate over books to create a table row
        console.log(this.state.books);
        let details = this.state.books.map(book => {
            return(
                <Comp first_name={book.first_name} univ_name={book.univ_name}/>   
            )
        })
        let deets = this.state.books.map(book => {
            return(
                <tr>
                    <td>{book.first_name}</td>
                    <td>{book.last_name}</td>
                    <td>{book.univ_name}</td>
                </tr>
            )
        })
        //const deets=this.state.books.map(book => <Comp first_name={book.first_name} univ_name={book.univ_name}/>)
        //if not logged in go to login page
        // let redirectVar = null;
        // if(!cookie.load('cookie')){
        //     redirectVar = <Redirect to= "/login"/>
        // }
        return(
            <div>
               
                <div class="container">
                    <h2>List of All Students</h2>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>University Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*Display the Tbale row based on data recieved*/}
                                {details}
                            </tbody>
                        </table>
                </div> 
                
            </div> 
        )
    }
}

export default Students;