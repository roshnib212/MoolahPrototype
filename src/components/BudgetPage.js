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

class BudgetPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      diningBudget: 0,
      entertainmentBudget: 0,
      shoppingBudget: 0,
      income: null,
      residential_status: null,
      household_size: null,
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

        <div>
          <Row>
            <Col>
              <h5>Dining: </h5>
            </Col>
            <Col>
              <p>
                {this.state.diningBudget}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Entertainment: </h5>
            </Col>
            <Col>
              <p>
                {this.state.entertainmentBudget}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Shopping: </h5>
            </Col>
            <Col>
              <p>
                {this.state.shoppingBudget}
              </p>
            </Col>
          </Row>
          
          <br></br>
          <Button variant="primary" onClick={this.handleEdit}>Create a new Budget</Button>
          

        </div>

      </div>
    );
  }
}



export default BudgetPage;
