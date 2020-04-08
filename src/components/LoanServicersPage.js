import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Card from 'react-bootstrap/Card';

const loanA = "Loan A: $3,500"
const loanB = 'Loan B: $4,000'

class LoanServicersPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      servicerToBeRemoved: null,
      removeServicer: false,

      lenderToBeRemoved: null,
      removeLender: false,

      listServicers: [],
      listLenders: [],

      newServicerModalShow: false,
      newLenderModalShow: false,
      removeServicerModalShow: false,
      removeLenderModalShow: false,

      ServicerName: null,
      ServicerUsername: null,
      ServicerPassword: null,

      LenderName: null,
      LenderUsernamer: null,
      LenderPassword: null,
    }
    this.closeNewServicerModal = this.closeNewServicerModal.bind(this);
    this.handleAddNewServicer = this.handleAddNewServicer.bind(this);
    this.handleSubmitNewServicerForm = this.handleSubmitNewServicerForm.bind(this);

    this.handleRemoveServicer = this.handleRemoveServicer.bind(this);
    this.closeRemoveServicerModal = this.closeRemoveServicerModal.bind(this);
    this.removeServicer = this.removeServicer.bind(this);

    this.handleRemoveLender = this.handleRemoveLender.bind(this);
    this.closeRemoveLenderModal = this.closeRemoveLenderModal.bind(this);
    this.removeLender = this.removeLender.bind(this);

    this.closeNewLenderModal = this.closeNewLenderModal.bind(this);
    this.handleAddNewLender = this.handleAddNewLender.bind(this);
    this.handleSubmitNewLenderForm = this.handleSubmitNewLenderForm.bind(this);
  }
  closeNewServicerModal(){
    this.setState({newServicerModalShow: false});
  }
  handleAddNewServicer(event){
    this.setState({newServicerModalShow: true});
  }
  handleSubmitNewServicerForm(ServicerName, ServicerUsername, ServicerPassword){
    const newListServicers = this.state.listServicers.concat(ServicerName);
    this.setState(
      {
        ServicerName: ServicerName,
        ServicerUsername: ServicerUsername,
        ServicerPassword: ServicerPassword,
        listServicers: newListServicers
      }
    );
    this.closeNewServicerModal();
  }

  closeRemoveServicerModal(){
    this.setState({removeServicerModalShow: false});
  }
  handleRemoveServicer(ServicerName){
    this.setState({servicerToBeRemoved: ServicerName});
    this.setState({removeServicerModalShow: true});
  }
  removeServicer(){
    let arrayLength = this.state.listServicers.length;
    var newListServicers = []
    for(let i = 0; i < arrayLength; i++){
      let currServicerName = this.state.listServicers[i];
      if(currServicerName != this.state.servicerToBeRemoved){
        newListServicers.push(currServicerName);
      }
    }
    this.setState({listServicers: newListServicers});
    this.setState({removeServicerModalShow: false});
  }

  closeNewLenderModal(){
    this.setState({newLenderModalShow: false});
  }
  handleAddNewLender(event){
    this.setState({newLenderModalShow: true});
  }
  handleSubmitNewLenderForm(LenderName, LenderUsername, LenderPassword){
    const newListLenders = this.state.listLenders.concat(LenderName);
    this.setState(
      {
        LenderName: LenderName,
        LenderUsername: LenderUsername,
        LenderPassword: LenderPassword,
        listLenders: newListLenders
      }
    );
    this.closeNewLenderModal();
  }

  closeRemoveLenderModal(){
    this.setState({removeLenderModalShow: false});
  }
  handleRemoveLender(LenderName){
    this.setState({lenderToBeRemoved: LenderName});
    this.setState({removeLenderModalShow: true});
  }
  removeLender(){
    let arrayLength = this.state.listLenders.length;
    var newListLenders = []
    for(let i = 0; i < arrayLength; i++){
      let currLenderName = this.state.listLenders[i];
      if(currLenderName != this.state.lenderToBeRemoved){
        newListLenders.push(currLenderName);
      }
    }
    this.setState({listLenders: newListLenders});
    this.setState({removeLenderModalShow: false});
  }

  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7', height: '100%', overflow: 'auto', paddingBottom: '75px'}} className="text-center">
        <MoolahNavBar />
        <br></br>
        <h3>Federal Student Aid Servicers</h3>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-left">
          {this.state.listServicers.map(servicer => (
            <Card>
              <Card.Header style={{backgroundColor: '#D6DBDF'}}>
                <Row>
                  <Col>{servicer}</Col>
                  <Col xsOffset={20}>
                    <div className="d-flex justify-content-end">
                      <Button onClick={() => this.handleRemoveServicer(servicer)} style = {{margin: 0, alignSelf: 'center'}} variant="danger">Remove</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p style={{margin: 0}}>{loanA}</p>
                  <p style={{margin: 0}}>{loanB}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <br></br>
        <div class="d-flex justify-content-center">
          <Row>
            <Button style = {{margin: 0, alignSelf: 'center'}} variant="primary" onClick={this.handleAddNewServicer}>Add Loan Servicer</Button>
          </Row>
        </div>
        <RemoveServicerModal
          servicerName = {this.state.servicerToBeRemoved}
          show={this.state.removeServicerModalShow}
          onHide={this.closeRemoveServicerModal}
          onSubmit={this.removeServicer}
        />
        <NewServicerModal
          show={this.state.newServicerModalShow}
          onHide={this.closeNewServicerModal}
          onSubmit={this.handleSubmitNewServicerForm}
        />

        <br></br>
        <h3>Private Student Loan Lenders</h3>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-left">
          {this.state.listLenders.map(lender => (
            <Card>
              <Card.Header style={{backgroundColor: '#D6DBDF'}}>
                <Row>
                  <Col>{lender}</Col>
                  <Col xsOffset={20}>
                    <div className="d-flex justify-content-end">
                      <Button onClick={() => this.handleRemoveLender(lender)} style = {{margin: 0, alignSelf: 'center'}} variant="danger" >Remove</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <p style={{margin: 0}}>{loanA}</p>
                  <p style={{margin: 0}}>{loanB}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <br></br>
        <div class="d-flex justify-content-center">
          <Row>
            <Button style = {{margin: 0, alignSelf: 'center'}} variant="primary" onClick={this.handleAddNewLender}>Add Loan Lender</Button>
          </Row>
        </div>
        <RemoveLenderModal
          lenderName = {this.state.lenderToBeRemoved}
          show={this.state.removeLenderModalShow}
          onHide={this.closeRemoveLenderModal}
          onSubmit={this.removeLender}
        />
        <NewLenderModal
          show={this.state.newLenderModalShow}
          onHide={this.closeNewLenderModal}
          onSubmit={this.handleSubmitNewLenderForm}
        />
      </div>
    );
  }
}

class RemoveServicerModal extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-model-title-vcenter">
            Are you sure you want to remove {this.props.servicerName}?
          </Modal.Title>
          <button onClick={() => this.props.onHide()} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.props.onHide()} variant="danger" type="button">Cancel</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.props.onSubmit()} variant="success" type="submit">Submit</Button>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    );
  }

}

class RemoveLenderModal extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-model-title-vcenter">
            Are you sure you want to remove {this.props.lenderName}?
          </Modal.Title>
          <button onClick={() => this.props.onHide()} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.props.onHide()} variant="danger" type="button">Cancel</Button>
            &nbsp;&nbsp;&nbsp;
            <Button onClick={() => this.props.onSubmit()} variant="success" type="submit">Submit</Button>
          </Row>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    );
  }

}

class NewServicerModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      ServicerName: null,
      ServicerUsername: null,
      ServicerPassword: null
    }
    this.handleServicerNameChange = this.handleServicerNameChange.bind(this);
    this.handleServicerUsernameChange = this.handleServicerUsernameChange.bind(this);
    this.handleServicerPasswordChange = this.handleServicerPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.ServicerName, this.state.ServicerUsername, this.state.ServicerPassword);
  }
  handleServicerNameChange(event){
    this.setState({
      ServicerName: event.target.value
    });
  }
  handleServicerUsernameChange(event){
    this.setState({
      ServicerUsername: event.target.value
    });
  }
  handleServicerPasswordChange(event){
    this.setState({
      ServicerPassword: event.target.value
    });
  }

  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-model-title-vcenter">
            New Federal Student Loan Servicers
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Label>Loan Servicer</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control as="select" onChange={this.handleServicerNameChange}>
                    <option>Choose...</option>
                    <option value="CornerStone">CornerStone</option>
                    <option value="FedLoan Servicing (PHEAA)">FedLoan Servicing (PHEAA)</option>
                    <option value="Granite State - GSMR">Granite State - GSMR</option>
                    <option value="Great Lakes Educational Loan Services">Great Lakes Educational Loan Services</option>
                    <option value="HESC/EdFinancial">HESC/EdFinancial</option>
                    <option value="MOHELA">MOHELA</option>
                    <option value="Navient">Navient</option>
                    <option value="Nelnet">Nelnet</option>
                    <option value="OSLA Servicing">OSLA Servicing</option>
                    <option value="ECSI">ECSI</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              &nbsp;&nbsp;&nbsp;
              <h5>Enter Login for Loan Servicer</h5>
            </Row>
            <Row>
              <Col>
                <Form.Label>Username</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control placeholder="Enter Username" onChange={this.handleServicerUsernameChange}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="Enter Password" onChange={this.handleServicerPasswordChange}></Form.Control>
              </Col>
            </Row>
            <Row>
              &nbsp;&nbsp;&nbsp;
              <Button onClick={this.props.onHide} variant="danger" type="button">Cancel</Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="success" type="submit">Submit</Button>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    );
  }

}

class NewLenderModal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      LenderName: null,
      LenderUsername: null,
      LenderPassword: null
    }
    this.handleLenderNameChange = this.handleLenderNameChange.bind(this);
    this.handleLenderUsernameChange = this.handleLenderUsernameChange.bind(this);
    this.handleLenderPasswordChange = this.handleLenderPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.LenderName, this.state.LenderUsername, this.state.LenderPassword);
  }
  handleLenderNameChange(event){
    this.setState({
      LenderName: event.target.value
    });
  }
  handleLenderUsernameChange(event){
    this.setState({
      LenderUsername: event.target.value
    });
  }
  handleLenderPasswordChange(event){
    this.setState({
      LenderPassword: event.target.value
    });
  }

  render(){
    return(
      <Modal show={this.props.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header>
          <Modal.Title id="contained-model-title-vcenter">
            New Private Loan Lender
          </Modal.Title>
          <button onClick={this.props.onHide} type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Label>Loan Lender</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control onChange={this.handleLenderNameChange}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              &nbsp;&nbsp;&nbsp;
              <h5>Enter Login for Loan Lender</h5>
            </Row>
            <Row>
              <Col>
                <Form.Label>Username</Form.Label>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control placeholder="Enter Username" onChange={this.handleLenderUsernameChange}></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                  <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <Form.Control placeholder="Enter Password" onChange={this.handleLenderPasswordChange}></Form.Control>
              </Col>
            </Row>
            <Row>
              &nbsp;&nbsp;&nbsp;
              <Button onClick={this.props.onHide} variant="danger" type="button">Cancel</Button>
              &nbsp;&nbsp;&nbsp;
              <Button variant="success" type="submit">Submit</Button>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    );
  }

}

export default LoanServicersPage;
