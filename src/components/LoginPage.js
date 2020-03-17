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
        redirect: false
      }

  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({username: event.target.value, password: event.target.value});
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }
  }
  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  }
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  render(){
    return (
      <div style={{backgroundColor:'#40e4cc'}}>
        <div style={{backgroundColor:'#40e4cc', paddingRight:'300px', paddingLeft: '300px'}} className="text-center">
          <h1 className="hometitle">Welcome to Moolah!</h1>
          <img src={Betsy} alt="betsythecow" />
          <br></br>
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group controlId="formGridName">
              <Form.Label>Username</Form.Label>
              <Form.Control required onChange={(e) => this.handleUsernameChange(e)} placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formGridName">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" onChange={(e) => this.handlePasswordChange(e)} placeholder="Enter password" />
            </Form.Group>
          </Form>
          {this.renderRedirect()}
          <Button type="submit" onClick={this.setRedirect} variant="dark">Login</Button>
          &nbsp;&nbsp;&nbsp;
          OR
          &nbsp;&nbsp;&nbsp;
          <Button variant="light"> Create Account </Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
