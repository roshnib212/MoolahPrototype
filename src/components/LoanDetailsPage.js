import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoanDetailsPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        LoanDetailsPage!
      </div>
    );
  }
}

export default LoanDetailsPage;
