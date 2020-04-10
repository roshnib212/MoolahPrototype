import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import {Modal, Row, Container, Form, FormControl, Col, FormGroup, ControlLabel, HelpBlock, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const initialState = {
	amount: "",
	date: new Date(),
	accountType: "",
	routingNum: "",
	institutionName: "",
	accountNum: "",
	accountName: "",

	addModalShow: false,
}

class ConfirmationModal extends React.Component{
	constructor(props) {
   		super(props);
     		this.state = {
			show: false
      		};
	this.showModal = this.showModal.bind(this);
	this.hideModal = this.hideModal.bind(this);
	}
	showModal() {
		this.setState({
			show:true
		});
	}
	hideModal() {
		this.setState({
			show:false,
			redirect:true
		})
	}

	setRedirect = () => {
		this.setState({redirect:true})
	}
	renderRedirect = () => {
		if(this.state.redirect) {
			window.location.reload();
		}
	}



	render(){
		return (
			<div className="App">
				<Container>
					<Row>
						<Col md={12}>
							<Button bsStyle="success" className='btn-block' onClick={this.showModal}>Make Payment</Button>
		 <Modal show={this.state.show} onHide={this.hideModal} aria-labelledby='ModalHeader'>
			<div> {this.renderRedirect()} </div>
			 <Modal.Header closeButton>
			   <Modal.Title id='ModalHeader'>Plase Confirm Payment Information</Modal.Title>
			 </Modal.Header>
			 <Modal.Body>
				<div>
				<p>
					Payment Amount: {this.props.formData.amount}
					<br/>
					Payment Date: {moment(this.props.formData.date).format("YYYY-MM-DD")}
					<br/>
					Account Type: {this.props.formData.accountType}
					<br/>
					Routing Number: {this.props.formData.routingNum}
					<br/>
					Institution Name: {this.props.formData.institutionName}
					<br/>
					Account Number: {this.props.formData.accountNum}
					<br/>
					Account Name: {this.props.formData.accountName}
				</p>
				</div>
			 </Modal.Body>
			 <Modal.Footer>
			   <button className='btn btn-primary' onClick={this.hideModal}>Confirm</button>
			 </Modal.Footer>
                 </Modal>
             </Col>
           </Row>
        </Container>
        </div>
    );
  }
}

class LoanRepaymentPage extends React.Component{
	constructor(props) {
		super(props);
		this.state = initialState;

		this.handleAmountChange = this.handleAmountChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
		this.handleRoutingNumChange = this.handleRoutingNumChange.bind(this);
		this.handleInstitutionNameChange = this.handleInstitutionNameChange.bind(this);
		this.handleAccountNumChange = this.handleAccountNumChange.bind(this);
		this.handleAccountNameChange = this.handleAccountNameChange.bind(this);
	}

	handleAmountChange(event) {
		this.setState({amount: event.target.value});
	}
	handleDateChange(event) {
		this.setState({date: event.target.value});
	}
	handleAccountTypeChange(event) {
		this.setState({accountType: event.target.value});
	}
	handleRoutingNumChange(event) {
		this.setState({routingNum: event.target.value});
	}
	handleInstitutionNameChange(event) {
		this.setState({institutionName: event.target.value});
	}
	handleAccountNumChange(event) {
		this.setState({accountNum: event.target.value});
	}
	handleAccountNameChange(event) {
		this.setState({accountName: event.target.value});
	}

	validate =() => {
		let result = true;
		return result;
	};

	handleSubmit = event => {
		let isValid = this.validate();
		if(isValid) {
			console.log(this.state);
			this.setState({addModalShow: true});
		}
	};

	confirmationModalClose = () => {
		this.setState({addModalShow: false});
	};
	
	render() {
		return(
			<div style={{backgroundColor:'#DFF3F7', height: '1800px', overflow: 'auto', paddingBottom: '75px'}} className="text-center">
			<MoolahNavBar />
			<h2>Loan Repayment</h2>
			<Col>
			<Form>

				<Form.Group controlID="amount">
					<Form.Label>Payment Amount</Form.Label>
					<Form.Control
						required
						type="text" placeholder = "0.0"
						onChange={this.handleAmountChange} />
				</Form.Group>

				<Form.Group countrolID="date">
					<Form.Label>Payment Date</Form.Label>
					<DatePicker
						id="date-picker"
						selected={this.state.date}
						onChange={this.handleDateChange} />
				</Form.Group>

				<Form.Group countrolID="accountType">
					<Form.Label>Account Type</Form.Label>
					<Form.Control 
						as="select" 
						selected={this.state.accountType} 
						onChange={this.handleAccountTypeChange}>
						<option>Choose...</option>
						<option>Checking</option>
						<option>Savings</option>
					</Form.Control>
				</Form.Group>

				<Form.Group controlID="routingNum">
					<Form.Label>Routing Number</Form.Label>
					<Form.Control
						required
						type="text" placeholder = "xxxxxxxxx"
						onChange={this.handleRoutingNumChange} />
				</Form.Group>

				<Form.Group controlID="institutionName">
					<Form.Label>Institution Name</Form.Label>
					<Form.Control
						required
						type="text" placeholder = "Bank of Zoomers"
						onChange={this.handleInstitutionNameChange} />
				</Form.Group>

				<Form.Group controlID="accountNum">
					<Form.Label>Account Number</Form.Label>
					<Form.Control
						required
						type="text" placeholder = "xxxxxxxx"
						onChange={this.handleAccountNumChange} />
				</Form.Group>

				<Form.Group controlID="accountName">
					<Form.Label>Account Name</Form.Label>
					<Form.Control
						required
						type="text" placeholder = "Bob Zoof"
						onChange={this.handleAccountNameChange} />
				</Form.Group>

			</Form>
			</Col>
			<ConfirmationModal
				formData={this.state}
				show={this.state.addModalShow}
				onHide={this.confirmationModalClose}
				
			/>
			</div>
		);
  }
}

export default LoanRepaymentPage;

