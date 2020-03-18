import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import Form from 'react-bootstrap/Form';
import Betsy from '../images/index.gif';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';

class LoginPage extends React.Component {

  constructor(props) {
     super(props);
     this.state =
      {
        username: null,
        password: null,
        redirectLogin: false,
        redirectCreate: false
      }
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.username);
  }
  setRedirectLogin = () => {
    this.setState({
      redirectLogin: true
    });
  }
  setRedirectCreate = () => {
    this.setState({
      redirectCreate: true
    });
  }
  renderRedirect = () => {
    if(this.state.redirectLogin){
      return <Redirect to="/profile" />
    }
    else if(this.state.redirectCreate){
      return <Redirect to="/register" />
    }
  }

  handleUsernameChange(event){
    this.setState({
      username: event.target.value
    });
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  render(){
    return (
      <div style={{backgroundColor:'#40e4cc'}}>
        <div style={{backgroundColor:'#40e4cc', paddingRight:'300px', paddingLeft: '300px'}} className="text-center">
          <h1 className="hometitle">Welcome to Moolah!</h1>
          <img src={Betsy} alt="betsythecow" />
          <br></br>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formGridName">
              <Form.Label>Username</Form.Label>
              <Form.Control required onChange={this.handleUsernameChange} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formGridName">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" onChange={this.handlePasswordChange} placeholder="Enter password" />
            </Form.Group>
            {this.renderRedirect()}
            <Button type="submit" onClick={this.setRedirectLogin} variant="dark">Login</Button>
            &nbsp;&nbsp;&nbsp;
            OR
            &nbsp;&nbsp;&nbsp;
            <Button variant="light" onClick={this.setRedirectCreate}> Create Account </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
