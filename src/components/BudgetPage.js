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
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';


class BudgetPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      budgets: [],
      showCreateModal: false,
      budgetName: null,
      amount: null
    }
    this.openCreateModal = this.openCreateModal.bind(this);
    this.closeCreateModal = this.closeCreateModal.bind(this);
    this.handleCreateBudget = this.handleCreateBudget.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  openCreateModal(){
    this.setState({showCreateModal: true});
  }
  closeCreateModal(){
    this.setState({showCreateModal: false});
  }
  handleCreateBudget(budgetName, amount){
    const newBudgetsList = this.state.budgets.concat({name: budgetName, amount: amount});
    this.setState(
      {
        budgetName: budgetName,
        amount: amount,
        budgets: newBudgetsList
      }
    );
    this.closeCreateModal();
  }
  handleDelete(budget){
    let arrayLength = this.state.budgets.length;
    var newBudgetsList = []
    for(let i = 0 ; i < arrayLength; i++) {
      let currBudget= this.state.budgets[i];
      if (currBudget.name != budget.name){
        newBudgetsList.concat(currBudget);
      }
    }
    this.setState({budgets: newBudgetsList});
  }
  render(){
    const defaultMoneySpent = 10;
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <h2 className="text-center">Your Current Budgets</h2>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-left">
          {this.state.budgets.map(budget => (
            <Card>
              <Card.Header style={{color: 'white', backgroundColor: '#34495E'}}>
                {budget.name}
                <ButtonToolbar className="float-right">
                  <Button variant='light'>Edit</Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button onClick={() => this.handleDelete(budget)} variant='danger'>Delete</Button>
                </ButtonToolbar>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs={10}>
                    <ProgressBar style={{height: '30px'}} variant="info" now={(defaultMoneySpent/budget.amount)*100} label={`${Math.round((defaultMoneySpent/budget.amount)*100)}%`}/>
                  </Col>
                  <Col>
                    <p>${defaultMoneySpent} of {budget.amount}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
        <br></br>
        <div class="d-flex justify-content-center">
          <Row>
            <Button style = {{margin: 0, alignSelf: 'center'}} variant="info" onClick={this.openCreateModal}>Create New Budget</Button>
          </Row>
        </div>
        <CreateBudgetModal
          show={this.state.showCreateModal}
          onHide={this.closeCreateModal}
          onSubmit={this.handleCreateBudget}
        />
      </div>
  );
  }
}

class CreateBudgetModal extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      budgetName: null,
      amount: null,
      amountError: false
    }
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBudgetChange(event){
    this.setState({budgetName: event.target.value});
  }

  handleAmountChange(event){
    var isnum = /^\d+$/.test(event.target.value);
    if(!isnum){
      this.setState({amountError: true})
    }
    else{
      this.setState({
        amount: event.target.value,
        amountError: false
      });
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.budgetName, this.state.amount);
  }
  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-model-title-vcenter">
            Create a Budget
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <div style={{paddingLeft: '100px', paddingRight: '200px'}}>
              <Row>
                <Col>
                  <Form.Label className="create-budget-modal-labels">Budget Category:</Form.Label>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control required as="select" onChange={this.handleBudgetChange}>
                      <option>Choose a Category...</option>
                      <option value="Auto & Transport">Auto & Transport</option>
                      <option value="Bills & Utilities">Bills & Utilities</option>
                      <option value="Business Services">Business Services</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Food & Dining">Food & Dining</option>
                      <option value="Gifts & Donations">Gifts & Donations</option>
                      <option value="Health & Fitness">Health & Fitness</option>
                      <option value="Home">Home</option>
                      <option value="Investments">Investments</option>
                      <option value="Misc Expenses">Misc Expenses</option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Pets">Pets</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Taxes">Taxes</option>
                      <option value="Travel">Travel</option>
                      <option value="Uncategorized">Uncategorized</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Label className="create-budget-modal-labels">How Often Will This Happen?</Form.Label>
              </Row>
              <Row>
                <Col>
                  <Form.Check type="radio" label="Every Month" />
                </Col>
                <Col>
                  <Form.Check type="radio" label="Every Week" />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col>
                  <Form.Label className="create-budget-modal-labels">Amount Allocated: </Form.Label>
                </Col>
                <Col>
                  <Form.Control placeholder="$" onChange={this.handleAmountChange}></Form.Control>
                  {this.state.amountError ? (
                    <Form.Text style={{color: 'red'}}>
                      Please enter a valid amount
                    </Form.Text>
                  ): null
                  }
                </Col>
              </Row>
            </div>
            <br></br>
            <Button className="float-right" variant="success" type="submit">Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    );
  }
}

export default BudgetPage;
