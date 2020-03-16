import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import moment from 'moment';
const axios = require('axios');
const qs = require('qs');


class ConfirmationModal extends React.Component{

  constructor(props){
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm(event){
    console.log("registering person for conference...");
    var url = 'http://localhost:5000/registration';
    var streetAddress = null;
    if(this.props.address2 != null){
       streetAddress = this.props.address1 + ' ' + this.props.address2 + ', ' + this.props.city + ', ' + this.props.usState + ' ' + this.props.zipcode;
    }
    else{
      streetAddress = this.props.address1 + ', ' + this.props.city + ', ' + this.props.usState + ' ' + this.props.zipcode;
    }
    var body = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      streetAddress: streetAddress,
      email: this.props.email,
      affiliation: this.props.affiliation,
      date: this.props.date,
      status: this.props.status,
      paymentMethod: this.props.paymentMethod
    };
    axios({
      method: 'post',
      url: url,
      data: qs.stringify(body),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    });
    window.location.href = 'http://localhost:3000/register';
  }

  render(){
    const date = moment(this.props.date).format('MM/DD/YYYY');
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm Information
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <h5>Name</h5>
          <p>
            {this.props.firstName} {this.props.lastName}
          </p>
          <h5>Address</h5>
          <p>
            {this.props.address1} {this.props.address2}, {this.props.city}, {this.props.usState} {this.props.zipcode}
          </p>
          <h5>Email</h5>
          <p>
            {this.props.email}
          </p>
          <h5>Affiliation</h5>
          <p>
            {this.props.affiliation}
          </p>
          <h5>Date</h5>
          <p>
            {date}
          </p>
          <h5>Status</h5>
          <p>
            {this.props.status}
          </p>
          <h5>Payment Method</h5>
          <p>
            {this.props.paymentMethod}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button variant="danger" onClick={this.props.onHide}>Edit</Button>
             &nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={this.handleConfirm}>Confirm</Button>
          </ButtonToolbar>
        </Modal.Footer>
    </Modal>
    );
  }
}
export default ConfirmationModal;
