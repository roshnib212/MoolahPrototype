import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import history from './history.js';


import 'bootstrap/dist/css/bootstrap.min.css';

class ProfilePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      marital_status: null,
      education_level: null,
      credit_score: null,
      income: null,
      residential_status: null,
      household_size: null,
      modalShow: false,
      username: (history.location.state != null) ? history.location.state.username : 'User'
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  closeModal(){
    this.setState({modalShow:false});
  }
  handleEdit(event){
    this.setState({modalShow: true});
  }
  handleSubmitForm(marital_status, education_level, credit_score, income, residential_status, household_size) {
    this.setState(
      {
        marital_status: marital_status,
        education_level: education_level,
        credit_score: credit_score,
        income: income,
        residential_status: residential_status,
        household_size: household_size
      }
    );
    this.closeModal();
  }
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}} className="text-center">
        <MoolahNavBar />
        <br></br>
        <h2>Hello {this.state.username} !</h2>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-left">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col> Marital Status: </Col>
                <Col> {this.state.marital_status} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Education Level: </Col>
                <Col> {this.state.education_level} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Credit Score: </Col>
                <Col> {this.state.credit_score} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Income: </Col>
                <Col> {this.state.income} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Residential Status: </Col>
                <Col> {this.state.residential_status} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Household Size: </Col>
                <Col> {this.state.household_size} </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <br></br>
        <Button variant="info" onClick={this.handleEdit}>Edit</Button>
        <EditModal
          show={this.state.modalShow}
          onHide={this.closeModal}
          onSubmit={this.handleSubmitForm}
        />
        </div>
      </div>
    );
  }
}

class EditModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      marital_status: null,
      education_level: null,
      credit_score: null,
      income: null,
      residential_status: null,
      household_size: null
    }
    this.handleMaritalChange = this.handleMaritalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleCreditChange = this.handleCreditChange.bind(this);
    this.handleIncomeChange = this.handleIncomeChange.bind(this);
    this.handleResidentialChange = this.handleResidentialChange.bind(this);
    this.handleHouseSizeChange = this.handleHouseSizeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.marital_status, this.state.education_level,
       this.state.credit_score, this.state.income, this.state.residential_status, this.state.household_size);
  }
  handleMaritalChange(event){
    this.setState({
      marital_status: event.target.value
    });
  }
  handleResidentialChange(event){
    this.setState({
      residential_status: event.target.value
    });
  }
  handleCreditChange(event){
    this.setState({
      credit_score: event.target.value
    });
  }
  handleIncomeChange(event){
    this.setState({
      income: event.target.value
    });
  }
  handleEducationChange(event){
    this.setState({
      education_level: event.target.value
    });
  }
  handleHouseSizeChange(event){
    this.setState({
      household_size: event.target.value
    });
  }
  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Profile
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Label>Marital Status</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control as="select" onChange={this.handleMaritalChange}>
                    <option>Choose...</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Education Level</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control as="select" onChange={this.handleEducationChange}>
                    <option>Choose...</option>
                    <option value="High School">High School</option>
                    <option value="Associate">Associates Degree</option>
                    <option value="Bachelors Degree">Bachelors Degree</option>
                    <option value="Masters Degree">Masters Degree</option>
                    <option value="PhD">PhD</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Form.Label>Credit Score</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select" onChange={this.handleCreditChange}>
                  <option>Choose...</option>
                  <option value="100-400">100-400</option>
                  <option value="400-500">400-500</option>
                  <option value="500-600">500-600</option>
                  <option value="600-700">600-700</option>
                  <option value="700-800">700-800</option>
                </Form.Control>
              </Col>
            </Row>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col>
                  <Form.Label>Income</Form.Label>
              </Col>
              <Col>
                  <Form.Control as="select" onChange={this.handleIncomeChange}>
                    <option>Choose...</option>
                    <option value="<10,000">Less than 10,000</option>
                    <option value="20,000-40,000">20,000-40,000</option>
                    <option value="50,000-60,000">50,000-60,000</option>
                    <option value="60,000-70,000">60,000-70,000</option>
                    <option value="70,000-80,000">70,000-80,000</option>
                    <option value="80,000-90,000">80,000-90,000</option>
                    <option value="90,000-100,000">90,000-100,000</option>
                    <option value=">100,000">Greater than 100,000</option>
                  </Form.Control>
              </Col>
            </Row>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col>
                  <Form.Label>Residential Status</Form.Label>
              </Col>
              <Col>
                  <Form.Control as="select" onChange={this.handleResidentialChange}>
                    <option>Choose...</option>
                    <option value="Permanent Resident">Permanent Resident</option>
                    <option value="Non-Resident">Non-Resident</option>
                  </Form.Control>
              </Col>
            </Row>
            &nbsp;&nbsp;&nbsp;
            <Row>
              <Col>
                  <Form.Label>Household Size</Form.Label>
              </Col>
              <Col>
                  <Form.Control placeholder="Enter Household Size" onChange={this.handleHouseSizeChange}></Form.Control>
              </Col>
            </Row>
            <Button variant="success" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
  );
  }
}


export default ProfilePage;
