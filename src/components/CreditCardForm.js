import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreditCardForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nameOnCard: null,
      cardNum: null,
      expDate: null,
      cvv: null,
      cardNumError: false,
      cvvError: false
    };
    this.handleChange_nameOnCard = this.handleChange_nameOnCard.bind(this);
    this.handleChange_cardNum = this.handleChange_cardNum.bind(this);
    this.handleChange_expDate = this.handleChange_expDate.bind(this);
    this.handleChange_cvv = this.handleChange_cvv.bind(this);
  }
  handleChange_nameOnCard(event){
    this.setState({nameOnCard: event.target.value});
  }
  handleChange_cardNum(event){
    var isnum = /^\d+$/.test(event.target.value);
    if(!isnum || event.target.value.length!=16){
      this.setState({cardNumError: true})
    }
    else{
      this.setState({
        cardNum: event.target.value,
        cardNumError: false
      });
    }
  }
  handleChange_expDate = date => {
   this.setState({
     expDate: date
   });
  };
  handleChange_cvv(event){
    var isnum = /^\d+$/.test(event.target.value);
    if(!isnum || event.target.value.length!=3){
      this.setState({cvvError: true})
    }
    else{
      this.setState({
        cvv: event.target.value,
        cvvError: false
      });
    }
  }
  render(){
    const style = this.props.show ? {backgroundColor:'#C1E2DC'} : {backgroundColor:'#C1E2DC', display:'none'};
    return(
      <div style={style}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name on Card</Form.Label>
            <Form.Control required onChange={this.handleChange_nameOnCard} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Card Number</Form.Label>
            <Form.Control required onChange={this.handleChange_cardNum} />
            {this.state.cardNumError ? (
              <Form.Text style={{color: 'red'}}>
                Please enter a valid card number
              </Form.Text>
            ): null
            }
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Expiration Date</Form.Label>
            &nbsp;&nbsp;&nbsp;
            <DatePicker
            selected={this.state.expDate}
            onSelect={this.handleChange_expDate}
            onChange={this.handleChange_expDate}
            dateFormat="MM/yyyy" showMonthYearPicker
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>CVV</Form.Label>
            <Form.Control required onChange={this.handleChange_cvv} />
            {this.state.cvvError ? (
              <Form.Text style={{color: 'red'}}>
                Please enter a valid CVV
              </Form.Text>
            ): null
            }
          </Form.Group>
        </Form.Row>
      </div>
    );
  }
}
export default CreditCardForm;
