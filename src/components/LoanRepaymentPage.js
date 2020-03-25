import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoanRepaymentPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        LoanRepayment
      </div>
    );
  }
}

export default LoanRepaymentPage;
