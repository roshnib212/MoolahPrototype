import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoanSummaryPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      AccruedInterest: "55.00",
      PrincipalBalance: "20,000",
      EstimatedMonthlyPayment_Amount: "140.00",
      EstimatedMonthlyPayment_Start: "12/26/2020",
      LastDisbursement_Amount: "3,250.00",
      lastDisbursement_Date: "01/14/2020",
      StudentStatus: "In School",
      GraduationDate: "05/05/2022",

      redirectPayments: false,
      redirectLoanDetails: false
    }
  }
  setRedirectPayments = () => {
    this.setState({redirectPayments: true})
  }
  renderRedirectPayments = () => {
    if(this.state.redirectPayments){
      return <Redirect to='/loanrepayment' />
    }
  }
  setRedirectLoanDetails = () => {
    this.setState({redirectLoanDetails: true})
  }
  renderRedirectLoanDetails = () => {
    if(this.state.redirectLoanDetails){
      return <Redirect to='/loandetails' />
    }
  }
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7', height: '100%', overflow: 'auto', paddingBottom: '75px'}} className="text-center">
        <MoolahNavBar />
        <br></br>
        <h3>Student Loan Summary</h3>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingLeft: '200px', paddingRight: '200px'}} className="text-left">
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col> Accrued Interest: </Col>
                <Col> ${this.state.AccruedInterest} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Principal Balance: </Col>
                <Col> ${this.state.PrincipalBalance} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Estimated Monthly Payment: </Col>
                <Col> ${this.state.EstimatedMonthlyPayment_Amount} on {this.state.EstimatedMonthlyPayment_Start} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Last Disbursement: </Col>
                <Col> ${this.state.LastDisbursement_Amount} on {this.state.lastDisbursement_Date} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col> Student Status: </Col>
                <Col> {this.state.StudentStatus} </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </div>
        <br></br>
        {this.renderRedirectPayments()}
        {this.renderRedirectLoanDetails()}
        <div class="d-flex justify-content-center">
          <Row>
            <Button style = {{margin: 0, alignSelf: 'center'}} variant="success" onClick={this.setRedirectPayments}>MAKE A PAYMENT</Button>
            &nbsp;&nbsp;&nbsp;
            <Button style = {{margin: 0, alignSelf: 'center'}} variant="info" onClick={this.setRedirectLoanDetails}>VIEW LOAN DETAILS</Button>
          </Row>
        </div>

      </div>
    );
  }
}

export default LoanSummaryPage;
