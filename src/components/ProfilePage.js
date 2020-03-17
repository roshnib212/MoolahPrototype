import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProfilePage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}} className="text-center">
        <MoolahNavBar />
        <br></br>
        <h2>Hello User!</h2>
        <div style={{backgroundColor:'#DFF3F7', paddingRight:'500px', paddingLeft: '500px'}}>
          <Form>
            <Form.Group>
              <Form.Label>Marital Status</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Education Level</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option value="hs">High School</option>
                <option value="associate">Associates Degree</option>
                <option value="bs">Bachelors Degree</option>
                <option value="ms">Masters Degree</option>
                <option value="phd">PhD</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Credit Score</Form.Label>
              <Form.Control placeholder="Enter Credit Score"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Income</Form.Label>
              <Form.Control placeholder="Enter Income"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Residential Status</Form.Label>
              <Form.Control placeholder="Enter Residential Status"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Household Size</Form.Label>
              <Form.Control placeholder="Enter Household Size"></Form.Control>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
