import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/home.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import ConfirmationModal from './ConfirmationModal.js';
import "react-datepicker/dist/react-datepicker.css";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CreditCardForm from './CreditCardForm.js';

const axios = require('axios');
const qs = require('qs');


class FormData extends React.Component {

  constructor(props) {
     super(props);
     this.state =
      {
        firstName: null,
        lastName: null,
        address1: null,
        address2: null,
        city: null,
        zipcode: null,
        zipcodeError: false,
        usState: null,
        email: null,
        affiliation: null,
        date: null,
        status: null,
        paymentMethod: null,
        showCreditCardForm: false,
        modalShow: false
      };
      this.handleChange_firstName = this.handleChange_firstName.bind(this);
      this.handleChange_lastName = this.handleChange_lastName.bind(this);
      this.handleChange_address1 = this.handleChange_address1.bind(this);
      this.handleChange_address2 = this.handleChange_address2.bind(this);
      this.handleChange_city = this.handleChange_city.bind(this);
      this.handleChange_zipcode= this.handleChange_zipcode.bind(this);
      this.handleChange_state = this.handleChange_state.bind(this);
      this.handleChange_email = this.handleChange_email.bind(this);
      this.handleChange_affiliation = this.handleChange_affiliation.bind(this);
      this.handleChange_date = this.handleChange_date.bind(this);
      this.handleChange_status = this.handleChange_status.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCreditCard = this.handleCreditCard.bind(this);
      this.handlePayPal = this.handlePayPal.bind(this);
      this.closeModal = this.closeModal.bind(this);
   }

  handleCreditCard(event){
    this.setState({showCreditCardForm: true, paymentMethod: 'CREDIT/DEBIT'});
  }
  handlePayPal(event){
    this.setState({paymentMethod: 'PAYPAL'});
    window.location.href = 'https://www.paypal.com/us/signin';
  }
  handleChange_firstName(event){
    this.setState({firstName: event.target.value});
  }
  handleChange_lastName(event){
    this.setState({lastName: event.target.value});
  }
  handleChange_address1(event){
    this.setState({address1: event.target.value});
  }
  handleChange_email(event){
    this.setState({email: event.target.value});
  }
  handleChange_affiliation(event){
    this.setState({affiliation: event.target.value});
  }
  handleChange_date = date => {
   this.setState({
     date: date
   });
 };
  handleChange_status(event){
    this.setState({status: event.target.value});
  }
  handleChange_address2(event){
    this.setState({address2: event.target.value});
  }
  handleChange_city(event){
    this.setState({city: event.target.value});
  }
  handleChange_state(event){
    this.setState({usState: event.target.value});
  }
  handleChange_zipcode(event){
    var isnum = /^\d+$/.test(event.target.value);
    if(!isnum){
      this.setState({zipcodeError: true})
    }
    else{
      this.setState({
        zipcode: event.target.value,
        zipcodeError: false
      });
    }
  }

  closeModal(){
    this.setState({modalShow:false});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({modalShow: true});
  }


  render(){
    const buttonStyle =
      {
        backgroundColor:'#FBBD24',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft:'40px',
        paddingRight: '40px',
        fontSize: '28px',
        color: '#027FCA',
        borderRadius: '8px'

      }
    return(
      <div style={{backgroundColor:'#C1E2DC', paddingRight:'100px', paddingLeft: '100px'}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required onChange={this.handleChange_firstName} placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required onChange={this.handleChange_lastName} placeholder="Enter Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control required onChange={this.handleChange_address1} placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control onChange={this.handleChange_address2} placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control required onChange={this.handleChange_city}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control required onChange={this.handleChange_state} as="select">
                <option>Choose...</option>
                <option value="AL">Alabama</option>
              	<option value="AK">Alaska</option>
              	<option value="AZ">Arizona</option>
              	<option value="AR">Arkansas</option>
              	<option value="CA">California</option>
              	<option value="CO">Colorado</option>
              	<option value="CT">Connecticut</option>
              	<option value="DE">Delaware</option>
              	<option value="DC">District Of Columbia</option>
              	<option value="FL">Florida</option>
              	<option value="GA">Georgia</option>
              	<option value="HI">Hawaii</option>
              	<option value="ID">Idaho</option>
              	<option value="IL">Illinois</option>
              	<option value="IN">Indiana</option>
              	<option value="IA">Iowa</option>
              	<option value="KS">Kansas</option>
              	<option value="KY">Kentucky</option>
              	<option value="LA">Louisiana</option>
              	<option value="ME">Maine</option>
              	<option value="MD">Maryland</option>
              	<option value="MA">Massachusetts</option>
              	<option value="MI">Michigan</option>
              	<option value="MN">Minnesota</option>
              	<option value="MS">Mississippi</option>
              	<option value="MO">Missouri</option>
              	<option value="MT">Montana</option>
              	<option value="NE">Nebraska</option>
              	<option value="NV">Nevada</option>
              	<option value="NH">New Hampshire</option>
              	<option value="NJ">New Jersey</option>
              	<option value="NM">New Mexico</option>
              	<option value="NY">New York</option>
              	<option value="NC">North Carolina</option>
              	<option value="ND">North Dakota</option>
              	<option value="OH">Ohio</option>
              	<option value="OK">Oklahoma</option>
              	<option value="OR">Oregon</option>
              	<option value="PA">Pennsylvania</option>
              	<option value="RI">Rhode Island</option>
              	<option value="SC">South Carolina</option>
              	<option value="SD">South Dakota</option>
              	<option value="TN">Tennessee</option>
              	<option value="TX">Texas</option>
              	<option value="UT">Utah</option>
              	<option value="VT">Vermont</option>
              	<option value="VA">Virginia</option>
              	<option value="WA">Washington</option>
              	<option value="WV">West Virginia</option>
              	<option value="WI">Wisconsin</option>
              	<option value="WY">Wyoming</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zipcode</Form.Label>
              <Form.Control required onChange={this.handleChange_zipcode} />
              {this.state.zipcodeError ? (
                <Form.Text style={{color: 'red'}}>
                  Please enter a valid zipcode
                </Form.Text>
              ): null
              }
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required onChange={this.handleChange_email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>School or Company Affiliation</Form.Label>
              <Form.Control required onChange={this.handleChange_affiliation} placeholder="Enter School or Company Name" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Date</Form.Label>
              &nbsp;&nbsp;&nbsp;
              <DatePicker selected={this.state.date} onSelect={this.handleChange_date} onChange={this.handleChange_date} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Status</Form.Label>
              <Form.Control required onChange={this.handleChange_status} as="select">
                <option>Choose Status</option>
                <option value="undergraduate student">Undergrad Student</option>
                <option value="graduate student">Grad Student</option>
                <option value="professor">Professor</option>
                <option value="industry employee">Industry Employee</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Payment Method - $15</Form.Label>
             &nbsp;&nbsp;&nbsp;
             <ButtonToolbar>
               <Button onClick={this.handleCreditCard} variant="secondary">Credit/Debit Card</Button>
                &nbsp;&nbsp;&nbsp;
               <Button style={buttonStyle} onClick={this.handlePayPal}>PayPal</Button>
             </ButtonToolbar>
          </Form.Group>
          <CreditCardForm show={this.state.showCreditCardForm} />
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <ConfirmationModal
            show={this.state.modalShow}
            onHide={this.closeModal}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            address1={this.state.address1}
            address2={this.state.address2}
            city={this.state.city}
            zipcode={this.state.zipcode}
            usState={this.state.usState}
            email={this.state.email}
            affiliation={this.state.affiliation}
            date={this.state.date}
            status={this.state.status}
            paymentMethod={this.state.paymentMethod}
          />
        </Form>
      </div>
    );
  }

}
export default FormData;
