// import React, { Component } from "react";
// import axios from 'axios';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// //import { InputTextarea } from 'primereact/inputtextarea';
// import Image from 'react-bootstrap/Image';
// import { InputText } from "primereact/inputtext";
// import CardDeck from "react-bootstrap/CardDeck";
// //import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// export default class Profile extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             //EmailId: JSON.parse(localStorage.getItem("loggedInUser")).EmailId,
//             data: null,
//             journeyeditable: false,
//             educationeditable: false,
//             workExpeditable: false,
//             orgAchieveeditable: false,
//             journeyeditable: false,
//             flag: 1,
//             journey: '',
//             education: '',
//             workExp: '',
//             orgAchieve: '',
//             skills: '',
//             mobile_number: 99211,
//             file: null

//         };
//         //this.getData.bind(this);
//         this.onEdit.bind(this);
//     }
//     onEdit = (e) => {
//         console.log({ target: e.target.name })
//         console.log({ target: e })
//         this.setState({
//             [e.target.name]: true
//         })
//     }
//     render() {
//         return (
//             <>
// <Card title="" style={{ display: 'inline-block', marginTop: '60px', marginLeft: '210px', width: '304px', height: '280px' }}>
//                         <div>
//                         <Image src={'/logo192.png'} roundedCircle='true' />
//                             <form onSubmit={this.onProfilePicSave}>
//                                 <input type="file"  name="myImage" onChange={this.onProfilePicChange} />
//                                 <button type="submit">Upload</button>
//                             </form>
//                         </div>
// </Card>

// {/* <Card title="" style={{ display: 'inline-block', marginTop: '60px', marginLeft: '210px', width: '304px', height: '280px' }} >
//   <Card.Body>
//     <Card.Title>Basic Details</Card.Title>
//     <Card.Text>
//      Draco Malfoy 
//      Stanford University
//     </Card.Text>
//     </Card.Body>
//   <Card.Body>
//     <Card.Link href="/">View Profile</Card.Link>
//   </Card.Body>
// </Card> */}
// <Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
//                         <div className="row">
//                             <div className="col-9">
//                                 <h5><strong>Career Objective</strong></h5>
//                             </div>
//                             <div className="col-3">
//                                 <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
//                                     <i className="material-icons blue">edit</i>
//                                     <input type="button" id="profile-input" className="d-none" name="journeyeditable" onClick={this.onEdit}></input>
//                                 </label>
//                             </div>

//                         </div>
                        
//                     </Card>

                    



// <Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
//                         <div className="row">
//                             <div className="col-9">
//                                 <h5><strong>Career Objective</strong></h5>
//                             </div>
//                             <div className="col-3">
//                                 <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
//                                     <i className="material-icons blue">edit</i>
//                                     <input type="button" id="profile-input" className="d-none" name="journeyeditable" onClick={this.onEdit}></input>
//                                 </label>
//                             </div>

//                         </div>
//                         <div className='mx-3 mb-3 row'>
//                             <InputTextarea name="journey" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.journeyeditable) ? "" : "disabled"} value={this.state.journey} autoResize={true}></InputTextarea>
//                         </div>
//                         {this.state.journeyeditable ?
//                             <div className="row">
//                                 <div className="col-3"></div>
//                                 <Button variant="primary" name="journeyeditable" onClick={this.saveData} className="col-3 m-1" size="sm">Save</Button>
//                                 <Button variant="danger" onClick={this.cancelButton} className="col-3 m-1" size="sm">Cancel</Button>
//                                 <div className="col-3"></div>
//                             </div> : null
//                         }
//                     </Card>



//                     <Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
//                         <div className="row">
//                             <div className="col-9">
//                                 <h5><strong>Education</strong></h5>
//                             </div>
//                             <div className="col-3">
//                                 <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
//                                     <i className="material-icons blue">edit</i>
//                                     <input type="button" id="profile-input" className="d-none" name="journeyeditable" onClick={this.onEdit}></input>
//                                 </label>
//                             </div>

//                         </div>
//                         <div className='mx-3 mb-3 row'>
//                             <InputTextarea name="journey" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.journeyeditable) ? "" : "disabled"} value={this.state.journey} autoResize={true}></InputTextarea>
//                         </div>
//                         {this.state.journeyeditable ?
//                             <div className="row">
//                                 <div className="col-3"></div>
//                                 <Button variant="primary" name="journeyeditable" onClick={this.saveData} className="col-3 m-1" size="sm">Save</Button>
//                                 <Button variant="danger" onClick={this.cancelButton} className="col-3 m-1" size="sm">Cancel</Button>
//                                 <div className="col-3"></div>
//                             </div> : null
//                         }
//                     </Card>


//                     <Card title="" style={{ display: 'inline-block', verticalAlign: 'top', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
//                         <div className="row">
//                             <div className="col-9">
//                                 <h5><strong>Experience</strong></h5>
//                             </div>
//                             <div className="col-3">
//                                 <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
//                                     <i className="material-icons blue">edit</i>
//                                     <input type="button" id="profile-input" className="d-none" name="journeyeditable" onClick={this.onEdit}></input>
//                                 </label>
//                             </div>

//                         </div>
//                         <div className='mx-3 mb-3 row'>
//                             <InputTextarea name="journey" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.journeyeditable) ? "" : "disabled"} value={this.state.journey} autoResize={true}></InputTextarea>
//                         </div>
//                         {this.state.journeyeditable ?
//                             <div className="row">
//                                 <div className="col-3"></div>
//                                 <Button variant="primary" name="journeyeditable" onClick={this.saveData} className="col-3 m-1" size="sm">Save</Button>
//                                 <Button variant="danger" onClick={this.cancelButton} className="col-3 m-1" size="sm">Cancel</Button>
//                                 <div className="col-3"></div>
//                             </div> : null
//                         }
//                     </Card>




//                     <Card title="" style={{ display: 'inline-block', verticalAlign: 'bottom', marginTop: '60px', marginLeft: '10px', width: '300px', height: '300px' }}>
//                         <div className="row">
//                             <div className="col-9">
//                                 <h5><strong>Skill Set</strong></h5>
//                             </div>
//                             <div className="col-3">
//                                 <label id="edit-photo" className="btn btn-default btn-icon-circle" title="" type="button" placeholder="">
//                                     <i className="material-icons blue">edit</i>
//                                     <input type="button" id="profile-input" className="d-none" name="journeyeditable" onClick={this.onEdit}></input>
//                                 </label>
//                             </div>

//                         </div>
//                         <div className='mx-3 mb-3 row'>
//                             <InputTextarea name="journey" rows={10} cols={20} onChange={this.handleEdit} disabled={(this.state.journeyeditable) ? "" : "disabled"} value={this.state.journey} autoResize={true}></InputTextarea>
//                         </div>
//                         {this.state.journeyeditable ?
//                             <div className="row">
//                                 <div className="col-3"></div>
//                                 <Button variant="primary" name="journeyeditable" onClick={this.saveData} className="col-3 m-1" size="sm">Save</Button>
//                                 <Button variant="danger" onClick={this.cancelButton} className="col-3 m-1" size="sm">Cancel</Button>
//                                 <div className="col-3"></div>
//                             </div> : null
//                         }
//                     </Card>



// </>

            
//         );
//     }

// }