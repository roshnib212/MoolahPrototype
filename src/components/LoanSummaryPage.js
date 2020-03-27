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

const accruedInterest = "53.08"
const principalBalance = "15,194.59"
const estimatedMonthlyPayment_Amount = "137.10"
const estimatedMonthlyPayment_Start = "12/26/2020"
const lastDisbursement_Amount = "3,239.93"
const lastDisbursement_Date = "01/14/2020"
const studentStatus = "In School"
const graduationDate = "05/05/2022"

class LoanSummaryPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      AccruedInterest: null,
      PrincipalBalance: null,
      EstimatedMonthlyPayment_Amount: null,
      EstimatedMonthlyPayment_Start: null,
      LastDisbursement: null,
      StudentStatus: null,

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
                <Col style={{paddingLeft: 10}}> Accrued Interest: </Col>
                <Col> ${accruedInterest} </Col>
              </Row>
            </ListGroup.Item>
              <Row>
                <Col style={{paddingLeft: 30}}> Principal Balance: </Col>
                <Col style={{paddingLeft: 0}}> ${principalBalance} </Col>
              </Row>
            <ListGroup.Item>
              <Row>
                <Col style={{paddingLeft: 10}}> Estimated Monthly Payment: </Col>
                <Col> ${estimatedMonthlyPayment_Amount} on {estimatedMonthlyPayment_Start} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col style={{paddingLeft: 10}}> Last Disbursement: </Col>
                <Col> ${lastDisbursement_Amount} on {lastDisbursement_Date} </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col style={{paddingLeft: 10}}> Student Status: </Col>
                <Col> {studentStatus} </Col>
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
