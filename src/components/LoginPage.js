import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import Form from 'react-bootstrap/Form';
import Betsy from '../images/index.gif';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import history from './history.js';


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
      return history.push('/profile', { username: this.state.username });
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
          <div style={{backgroundColor:'#40e4cc', paddingLeft: '100px'}}>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Label>Username</Form.Label>
                </Col>
                <Col>
                  <Form.Control required onChange={this.handleUsernameChange} placeholder="Enter username" />
                </Col>
                <Col>
                  <div style={{display: 'none'}}></div>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>
                </Col>
                <Col>
                  <Form.Control required type="password" onChange={this.handlePasswordChange} placeholder="Enter password" />
                </Col>
                <Col>
                  <div style={{display: 'none'}}></div>
                </Col>
              </Row>
              <br></br>
              {this.renderRedirect()}
              <div style={{backgroundColor:'#40e4cc', paddingLeft: '150px'}}>
                <Row>
                  <Button type="submit" onClick={this.setRedirectLogin} variant="dark">Login</Button>
                  &nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;
                  <Button variant="light" onClick={this.setRedirectCreate}> Create Account </Button>
                </Row>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
