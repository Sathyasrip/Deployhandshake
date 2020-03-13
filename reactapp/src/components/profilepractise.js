import React, { Component } from "react";
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { InputTextarea } from 'primereact/inputtextarea';
import Image from 'react-bootstrap/Image';
//import Transformation from 'react-bootstrap/Transformation';
import { InputText } from "primereact/inputtext";
import CardDeck from "react-bootstrap/CardDeck";
//import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
export default class Profileprac extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //EmailId: JSON.parse(localStorage.getItem("loggedInUser")).EmailId,
            data: null,
            
            educationeditable: false,
            experienceeditable:false,
            skilleditable:false,
            file:null,
            flag: 1,
            
            education: '',
            experience:'',
           
            skillset: '',
            

        };
        //this.getData.bind(this);
        this.onEdit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }
    onEdit = (e) => {
        console.log({ target: e.target.name })
        console.log({ target: e })
        this.setState({
            [e.target.name]: true
        })
    }
    handleEdit = (e) => {
        e.preventDefault();
        this.setState({
           // journeyeditable: true,
            [e.target.name]: e.target.value
        })
    }
    saveeduData = (e) => {
        // this.handleJourneyEdit();
        const data = {
            
            education: this.state.education,
            

        }
        axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/updatedetails', data)
            .then((response) => {
                console.log(response.data);

            });

        this.setState({
            [e.target.name]: false
        });

        console.log({ target: e.target.name });
        console.log({ target: e });
        debugger
        // console.log(this.state.journey);
    }
    saveexData = (e) => {
        // this.handleJourneyEdit();
        const data = {
            
            experience: this.state.experience,
            

        }
        axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/updatedetails', data)
            .then((response) => {
                console.log(response.data);

            });

        this.setState({
            [e.target.name]: false
        });

        console.log({ target: e.target.name });
        console.log({ target: e });
        // debugger
        // // console.log(this.state.journey);
    }
    saveskData = (e) => {
        // this.handleJourneyEdit();
        const data = {
            
            skillset: this.state.skillset,
            

        }
        axios.post('http://ec2-54-183-214-24.us-west-1.compute.amazonaws.com:5000/updatedetails', data)
            .then((response) => {
                console.log(response.data);

            });

        this.setState({
            [e.target.name]: false
        });

        console.log({ target: e.target.name });
        console.log({ target: e });
        
    }
    handleChange(event) {
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
        })
      }

    render() {
        return (
            <>
<Card title="" style={{ display: 'inline-block', marginTop: '60px', marginLeft: '210px', width: '304px', height: '280px' }}>
                        <div>
                        <h3>Ronald Weasley</h3>
                        {/* <Image src={'/logo192.png'} roundedCircle='true' /> */}
                        <div>
          
        <input type="file" onChange={this.handleChange}/>
        <Image src={this.state.file} height="150" width="150" crop="fill"/>
        <Button >Upload Profile Pic</Button>
      </div>
                        </div>
</Card>




<Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
                        <div className="row">
                            <div className="col-9">
                                <h5><strong>Education</strong></h5>
                            </div>
                            <div className="col-3">
                                <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
                                    <i className="material-icons blue">edit</i>
                                    <input type="button" id="profile-input" className="d-none" name="educationeditable" onClick={this.onEdit}></input>
                                </label>
                            </div>

                        </div>
                        <div className='mx-3 mb-3 row'>
                            <InputTextarea name="education" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.educationeditable) ? "" : "disabled"} value={this.state.education} autoResize={true}></InputTextarea>
                        </div>
                        {this.state.educationeditable ?
                            <div className="row">
                                <div className="col-3"></div>
                                <Button variant="primary" name="educationeditable" onClick={this.saveeduData} className="col-3 m-1" size="sm">Save</Button>
                                
                                <div className="col-3"></div>
                            </div> : null
                        }
                    </Card>



<Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
                        <div className="row">
                            <div className="col-9">
                                <h5><strong>Experience</strong></h5>
                            </div>
                            <div className="col-3">
                                <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
                                    <i className="material-icons blue">edit</i>
                                    <input type="button" id="profile-input" className="d-none" name="experienceeditable" onClick={this.onEdit}></input>
                                </label>
                            </div>

                        </div>
                        <div className='mx-3 mb-3 row'>
                            <InputTextarea name="experience" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.experienceeditable) ? "" : "disabled"} value={this.state.experience} autoResize={true}></InputTextarea>
                        </div>
                        {this.state.experienceeditable ?
                            <div className="row">
                                <div className="col-3"></div>
                                <Button variant="primary" name="experienceeditable" onClick={this.saveexData} className="col-3 m-1" size="sm">Save</Button>
                                
                                <div className="col-3"></div>
                            </div> : null
                        }
                    </Card>
                    
                    
                    




<Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
                        <div className="row">
                            <div className="col-9">
                                <h5><strong>Skillset</strong></h5>
                            </div>
                            <div className="col-3">
                                <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
                                    <i className="material-icons blue">edit</i>
                                    <input type="button" id="profile-input" className="d-none" name="skilleditable" onClick={this.onEdit}></input>
                                </label>
                            </div>

                        </div>
                        <div className='mx-3 mb-3 row'>
                            <InputTextarea name="skillset" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.skilleditable) ? "" : "disabled"} value={this.state.skillset} autoResize={true}></InputTextarea>
                        </div>
                        {this.state.skilleditable ?
                            <div className="row">
                                <div className="col-3"></div>
                                <Button variant="primary" name="skilleditable" onClick={this.saveskData} className="col-3 m-1" size="sm">Save</Button>
                                
                                <div className="col-3"></div>
                            </div> : null
                        }
                    </Card>



                    


</>

            
        );
    }

}