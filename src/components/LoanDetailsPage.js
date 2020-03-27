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
import Table from 'react-bootstrap/Table';
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

      Loan01_DueDate: "12/26/2022",
      Loan01_LoanStatus: "IN SCHOOL",
      Loan01_LoanType: "DIRECT SUB",
      Loan01_OriginalAmount: "$5,000",
      Loan01_InterestRate: "%4.450",
      Loan01_AccruedInterestRate: "$0.00",
      Loan01_CapitalizedInterest: "$0.00",
      Loan01_LenderName: "DIRECT LOANS",
      Loan01_OutstandingBalance: "$5,000.00",
      Loan01_PrincipalBalance: "$5,000.00",
      Loan01_Disbursements: ["$2,000.00 on 08/18/2017", "$3,000.00 on 01/09/2018"],

      Loan02_Disbursements: ["$5,000.00 on 08/18/2017", "$5,000.00 on 01/09/2018"]
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
                      Show Loan Details
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row style={{backgroundColor: '#87ceeb'}}><Col>Loan 1</Col></Row>
                      <Row>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Due Date:</th>
                                <td>{this.state.Loan01_DueDate}</td>
                              </tr>
                              <tr>
                                <th>Loan Status:</th>
                                <td>{this.state.Loan01_LoanStatus}</td>
                              </tr>
                              <tr>
                                <th>Loan Type:</th>
                                <td>{this.state.Loan01_LoanType}</td>
                              </tr>
                              <tr>
                                <th>Original Loan Amount:</th>
                                <td>{this.state.Loan01_OriginalAmount}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Interest Rate:</th>
                                <td>{this.state.Loan01_InterestRate}</td>
                              </tr>
                              <tr>
                                <th>Accrued Interest:</th>
                                <td>{this.state.Loan01_AccruedInterestRate}</td>
                              </tr>
                              <tr>
                                <th>Capitalized Interest:</th>
                                <td>{this.state.Loan01_CapitalizedInterest}</td>
                              </tr>
                              <tr>
                                <th>Lender Name:</th>
                                <td>{this.state.Loan01_LenderName}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Outstanding Balance:</th>
                                <td>{this.state.Loan01_OutstandingBalance}</td>
                              </tr>
                              <tr>
                                <th>Principal Balance:</th>
                                <td>{this.state.Loan01_PrincipalBalance}</td>
                              </tr>
                              <tr>
                                <th>Disbursements:</th>
                                <td>
                                  {this.state.Loan01_Disbursements.map(disbursement => (
                                    <p>{disbursement}</p>
                                  ))}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>

                      <Row style={{backgroundColor: '#87ceeb'}}><Col>Loan 2</Col></Row>
                      <Row>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Due Date:</th>
                                <td>{this.state.Loan01_DueDate}</td>
                              </tr>
                              <tr>
                                <th>Loan Status:</th>
                                <td>{this.state.Loan01_LoanStatus}</td>
                              </tr>
                              <tr>
                                <th>Loan Type:</th>
                                <td>{this.state.Loan01_LoanType}</td>
                              </tr>
                              <tr>
                                <th>Original Loan Amount:</th>
                                <td>$10,000</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Interest Rate:</th>
                                <td>{this.state.Loan01_InterestRate}</td>
                              </tr>
                              <tr>
                                <th>Accrued Interest:</th>
                                <td>{this.state.Loan01_AccruedInterestRate}</td>
                              </tr>
                              <tr>
                                <th>Capitalized Interest:</th>
                                <td>{this.state.Loan01_CapitalizedInterest}</td>
                              </tr>
                              <tr>
                                <th>Lender Name:</th>
                                <td>{this.state.Loan01_LenderName}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Outstanding Balance:</th>
                                <td>$10,000</td>
                              </tr>
                              <tr>
                                <th>Principal Balance:</th>
                                <td>$10,000</td>
                              </tr>
                              <tr>
                                <th>Disbursements:</th>
                                <td>
                                  {this.state.Loan02_Disbursements.map(disbursement => (
                                    <p>{disbursement}</p>
                                  ))}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Card.Body>
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
                      Show Loan Details
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row style={{backgroundColor: '#87ceeb'}}><Col>Loan 1</Col></Row>
                      <Row>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Due Date:</th>
                                <td>{this.state.Loan01_DueDate}</td>
                              </tr>
                              <tr>
                                <th>Loan Status:</th>
                                <td>{this.state.Loan01_LoanStatus}</td>
                              </tr>
                              <tr>
                                <th>Loan Type:</th>
                                <td>{this.state.Loan01_LoanType}</td>
                              </tr>
                              <tr>
                                <th>Original Loan Amount:</th>
                                <td>{this.state.Loan01_OriginalAmount}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Interest Rate:</th>
                                <td>{this.state.Loan01_InterestRate}</td>
                              </tr>
                              <tr>
                                <th>Accrued Interest:</th>
                                <td>{this.state.Loan01_AccruedInterestRate}</td>
                              </tr>
                              <tr>
                                <th>Capitalized Interest:</th>
                                <td>{this.state.Loan01_CapitalizedInterest}</td>
                              </tr>
                              <tr>
                                <th>Lender Name:</th>
                                <td>{this.state.Loan01_LenderName}</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                        <Col>
                          <Table>
                            <tbody>
                              <tr>
                                <th>Outstanding Balance:</th>
                                <td>{this.state.Loan01_OutstandingBalance}</td>
                              </tr>
                              <tr>
                                <th>Principal Balance:</th>
                                <td>{this.state.Loan01_PrincipalBalance}</td>
                              </tr>
                              <tr>
                                <th>Disbursements:</th>
                                <td>
                                  {this.state.Loan01_Disbursements.map(disbursement => (
                                    <p>{disbursement}</p>
                                  ))}
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Card.Body>
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
