import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import countryList from 'react-select-country-list';
import { Redirect } from 'react-router-dom';


class RegisterAccountPage extends React.Component{
  constructor(props) {
     super(props);
     this.state =
      {
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
        username: null,
        password: null,
        confirmpass: null,
        showNextPage: false,
        confirmPassError: false
      }
      this.handleChange_firstName = this.handleChange_firstName.bind(this);
      this.handleChange_lastName = this.handleChange_lastName.bind(this);
      this.handleChange_email = this.handleChange_email.bind(this);
      this.handleChange_phone = this.handleChange_phone.bind(this);
      this.handleChange_username = this.handleChange_username.bind(this);
      this.handleChange_password = this.handleChange_password.bind(this);
      this.handleChange_confirmpass = this.handleChange_confirmpass.bind(this);
      this.handleNextPage = this.handleNextPage.bind(this);
  }
  handleChange_firstName(event){
    this.setState({firstName: event.target.value});
  }
  handleChange_lastName(event){
    this.setState({lastName: event.target.value});
  }
  handleChange_email(event){
    this.setState({email: event.target.value});
  }
  handleChange_phone(event){
    this.setState({phone: event.target.value});
  }
  handleChange_username(event){
    this.setState({username: event.target.value});
  }
  handleChange_password(event){
    this.setState({password: event.target.value});
  }
  handleChange_confirmpass(event){
    var passwordsSame = this.state.password == event.target.value;
    if(passwordsSame){
      this.setState({confirmpass: event.target.value, confirmPassError: false});
    }
    else{
      this.setState({confirmPassError: true});
    }
  }
  handleNextPage(){
    this.setState({showNextPage: true});
  }
  render(){
    if(this.state.showNextPage === true){
      return <SecondRegisterPage />
    }
    return(
      <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}}>
        <h1 className="registertitle">Register</h1>
        <ProgressBar striped variant="info" now={33} />
        <br></br>
        <Form onSubmit={this.handleNextPage}>
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
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required onChange={this.handleChange_email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control required onChange={this.handleChange_phone} placeholder="Enter Phone Number" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Username</Form.Label>
              <Form.Control required onChange={this.handleChange_username} placeholder="Enter username" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" onChange={this.handleChange_password} placeholder="Enter Password" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control required type="password" onChange={this.handleChange_confirmpass} placeholder="Re-type password" />
              {this.state.confirmPassError ? (
                <Form.Text style={{color: 'red'}}>
                  Passwords must match
                </Form.Text>
              ): null
              }
            </Form.Group>
          </Form.Row>
          <Button type="submit" variant="info">Next Page</Button>
        </Form>
      </div>
    )
  }
}

class SecondRegisterPage extends React.Component{
  constructor(props){
    super(props);
    this.options = countryList().getData();
    this.state = {
      country: null,
      zipcode: null,
      zipcodeError: false,
      showNextPage: false,
      options: this.options,
      value: null,
      countryError: false
    }
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleChange_zipcode = this.handleChange_zipcode.bind(this);
  }
  changeHandler = value => {
    this.setState({ value })
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
  handleNextPage(){
    if(this.state.value == null){
      this.setState({countryError: true});

    }
    else{
      this.setState({showNextPage: true, countryError: false});
    }
  }
  render(){
    if(this.state.showNextPage === true){
      return <ThirdRegisterPage />
    }
    return(
      <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}}>
        <h1 className="registertitle">Register</h1>
        <ProgressBar striped variant="info" now={66} />
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-center">
          <Form onSubmit={this.handleNextPage}>
            <Row>
              <Col>
                <br></br>
                <h5>Country</h5>
              </Col>
              <Col>
                <br></br>
                <Select
                  options={this.state.options}
                  value={this.state.value}
                  defaultValue={this.state.options[235]}
                  onChange={this.changeHandler}
                />
                {this.state.countryError ? (
                  <Form.Text style={{color: 'red'}}>
                    This field is required
                  </Form.Text>
                ): null
                }
              </Col>
            </Row>
            <Row>
              <Col>
                <br></br>
                <h5>Zipcode</h5>
              </Col>
              <Col>
                <br></br>
                <Form.Control required onChange={this.handleChange_zipcode} placeholder="Enter Zipcode" />
                {this.state.zipcodeError ? (
                  <Form.Text style={{color: 'red'}}>
                    Please enter a valid zipcode
                  </Form.Text>
                ): null
                }
              </Col>
            </Row>
            <br></br>
            <Button type="submit" variant="info">Next Page</Button>
          </Form>
        </div>
      </div>
    );
  }
}

class ThirdRegisterPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: null,
      success: false,
      redirect: false,
      enableSignIn: false
    }
  }
  setSuccess = () => {
    this.setState({
      success: true
    });
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  }
  renderRedirect = () => {
    if(this.state.redirect){
      return <Redirect to='/' />
    }
  }
  renderConfirmation = () => {
    if(this.state.success){
      return (
        <Alert variant='success'>
          Account Created Successfully!
          <br></br>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect} variant='outline-success'>Login</Button>
        </Alert>
      )
    }
  }
  changeHandler = value => {
    this.setState({ value });
    this.setState({enableSignIn: true});
  }
  render(){
    const options = [
     { value: 'boa', label: 'Bank of America' },
     { value: 'chase', label: 'Chase' },
     { value: 'td', label: 'T.D. Bank' },
     { value: 'wells', label: 'Wells Fargo' },
     { value: 'us', label: 'U.S. Bank' },
     { value: 'discover', label: 'Discover' },
     { value: 'usaa', label: 'USAA' },
     { value: 'citi', label: 'Citi Bank' },
     { value: 'amex', label: 'American Express' }
    ]
    return(
      <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}}>
        <h1 className="registertitle">Register</h1>
        <ProgressBar striped variant="info" now={99} />
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-center">
          <Row>
            <Col>
              <br></br>
              <h5>Bank</h5>
            </Col>
            <Col>
              <br></br>
              <Select
                options={options}
                value={this.state.value}
                onChange={this.changeHandler}
              />
            </Col>
          </Row>
          <br></br>
          {this.renderConfirmation()}
          <Button disabled={!this.state.enableSignIn} variant="dark">Sign-in to Bank</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.setSuccess} variant="info">Complete Registration!</Button>
        </div>
      </div>
    )
  }
}

export default RegisterAccountPage;
