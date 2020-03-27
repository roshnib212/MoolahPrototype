import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoanDetailsPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      Account: "F835203388",
      PrincipalBalance: "15,000",
      PastDueAmount: "0.00",
      CurrentAmountDue: "110.00",
      PaymentAmount: "0.00",
      DueDate: "12/25/2022",

      redirectPayments: false,
      redirectLoanDetails: false
    }
  }

  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7', height: '100%', overflow: 'auto', paddingBottom: '75px'}} className="text-center">
        <MoolahNavBar />
        <br></br>
        <h3>Loan Details</h3>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '100px', paddingRight: '100px'}} className="text-left">
        <Card>
          <Card.Header style={{backgroundColor: '#D6DBDF'}}>EdFinancial</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col> Account: </Col>
                <Col> Current Balance: </Col>
                <Col> Past Due Amount: </Col>
                <Col> Current Amount Due: </Col>
                <Col> Payment Amount: </Col>
                <Col> Due Date: </Col>
              </Row>
              <Row>
                <Col> {this.state.Account} </Col>
                <Col> ${this.state.PrincipalBalance} </Col>
                <Col> ${this.state.PastDueAmount} </Col>
                <Col> ${this.state.CurrentAmountDue} </Col>
                <Col> ${this.state.PaymentAmount} </Col>
                <Col> {this.state.DueDate} </Col>
              </Row>
              &nbsp;
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Show Groups and Loan Details
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        &nbsp;&nbsp;&nbsp;
        <Card>
          <Card.Header style={{backgroundColor: '#D6DBDF'}}>Discover</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col> Account: </Col>
                <Col> Current Balance: </Col>
                <Col> Past Due Amount: </Col>
                <Col> Current Amount Due: </Col>
                <Col> Payment Amount: </Col>
                <Col> Due Date: </Col>
              </Row>
              <Row>
                <Col> D942305500 </Col>
                <Col> $5,000 </Col>
                <Col> $0.00 </Col>
                <Col> $20.00 </Col>
                <Col> $0.00 </Col>
                <Col> 12/25/2020 </Col>
              </Row>
              &nbsp;
              <Accordion>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Show Groups and Loan Details
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
      </div>
    );
  }
}

export default LoanDetailsPage;
