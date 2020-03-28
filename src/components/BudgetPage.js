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
import { MDBContainer, MDBInput } from "mdbreact";

class BudgetPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      diningBudget: 0,
      entertainmentBudget: 0,
      shoppingBudget: 0,
      percentage: 0,
      modalShow: false
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
  handleSubmitForm(diningBudget, entertainmentBudget, shoppingBudget) {
    this.setState(
      {
        diningBudget: diningBudget,
        entertainmentBudget: entertainmentBudget,
        shoppingBudget: shoppingBudget
      }
    );
    this.closeModal();
  }
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <br></br>
        <h2 style={{paddingLeft: "550px", paddingTop: "40px"}}>Your Current Budgets</h2>
        <br></br>

        <div style={{paddingLeft: "430px", paddingTop: "50px"}}>
          <Row>
            <Col>
              <h5>Dining: </h5>
            </Col>
            <Col>
              <p>
                {"$" + this.state.diningBudget}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Entertainment: </h5>
            </Col>
            <Col>
              <p>
                {"$" + this.state.entertainmentBudget}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Shopping: </h5>
            </Col>
            <Col>
              <p>
                {"$" + this.state.shoppingBudget}
              </p>
            </Col>
          </Row>
          
          <br></br>
          <Button variant="primary" onClick={this.handleEdit}>Create a new Budget</Button>
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
      diningBudget: 0,
      entertainmentBudget: 0,
      shoppingBudget: 0,
      radio: 1
    }
    this.handleDiningChange = this.handleDiningChange.bind(this);
    this.handleEntertainmentChange = this.handleEntertainmentChange.bind(this);
    this.handleShoppingChange = this.handleShoppingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.diningBudget, this.state.entertainmentBudget,
       this.state.shoppingBudget);
  }
  handleDiningChange(event){
    this.setState({
      diningBudget: event.target.value
    });
  }
  handleEntertainmentChange(event){
    this.setState({
      entertainmentBudget: event.target.value
    });
  }
  handleShoppingChange(event){
    this.setState({
      shoppingBudget: event.target.value
    });
  }
  onRadioCheck = nr => () => {
    this.setState({
      radio: nr
    });
  }
  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a new Budget
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Label>Dining Budget</Form.Label>
              </Col>

              <Form.Label style={{paddingTop: "5px"}}>$</Form.Label>

              <Col>
                <Form.Group>
                  <Form.Control value={this.state.diningBudget} onChange={this.handleDiningChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Entertainment Budget</Form.Label>
              </Col>
              
                <Form.Label style={{paddingTop: "5px"}}>$</Form.Label>
              
              <Col>
                <Form.Group>
                  <Form.Control value={this.state.entertainmentBudget} onChange={this.handleEntertainmentChange}/>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Form.Label>Shopping Budget</Form.Label>
              </Col>

              <Form.Label style={{paddingTop: "5px"}}>$</Form.Label>

              <Col>
                <Form.Control value={this.state.shoppingBudget} onChange={this.handleShoppingChange}/>

                <br></br>
                
                <Row>
                  How Often?:
                </Row>

                <br></br>
                <div>
                  <input onClick={this.onRadioCheck(1)} checked={this.state.radio===1 ? true : false} type="radio"/>
                  <label style={{paddingLeft: "5px"}}>Weekly</label>
                </div>
                <div>
                  <input onClick={this.onRadioCheck(2)} checked={this.state.radio===2 ? true : false} type="radio"/>
                  <label style={{paddingLeft: "5px"}}>Monthly</label>
                </div>
              </Col>

              
            </Row>
            &nbsp;&nbsp;&nbsp;
            
            <Button variant="success" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
  );
  }
}

export default BudgetPage;
