import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dialog from 'react-bootstrap-dialog'

class LoanRepaymentPage extends React.Component{
	state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
	constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.dialog.showAlert('Confirm submission.')
  }

  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7', height: '1800px', overflow: 'auto', paddingBottom: '75px'}} className="text-center">
        <MoolahNavBar />
	<br></br>
	<h2>Loan Repayment</h2>
	<br></br>
	<form>
	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Payment Amount $</div>
		<input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="0.0"></input>
	      </div>
	    </div>
	</form>
	    <br></br>

	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Payment Date</div>

		<input type="date" class="form-control" id="inlineFormInputGroupUsername"></input>
	      </div>
	    </div>
	    <br></br>

	<div class="input-group center_div col-sm-4 mb-3">
	  <div class="input-group-prepend">
	    <label class="input-group-text" for="inputGroupSelect01">Account Type</label>
	  </div>
	  <select class="custom-select" id="inputGroupSelect01">
	    <option selected>Choose...</option>
	    <option value="1">Checking</option>
	    <option value="2">Savings</option>
	  </select>
	</div>
	    <br></br>

	<form>
	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Routing Number</div>
		<input type="text" class="form-control" id="inlineFormInputGroupUsername" ></input>
	      </div>
	    </div>
	</form>

<br></br>

	<form>
	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Institution Name</div>
		<input type="text" class="form-control" id="inlineFormInputGroupUsername" ></input>
	      </div>
	    </div>
	</form>

<br></br>

	<form>
	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Account Number</div>
		<input type="text" class="form-control" id="inlineFormInputGroupUsername" ></input>
	      </div>
	    </div>
	</form>

<br></br>

	<form>
	    <div class="container center_div col-sm-4 my-1">
	      <div class="input-group">
		  <div class="input-group-text">Account Name</div>
		<input type="text" class="form-control" id="inlineFormInputGroupUsername" ></input>
	      </div>
	    </div>
	</form>
	    <br></br>

	    <div>
        <Button onClick={this.onClick}>Submit</Button>
        <Dialog ref={(component) => { this.dialog = component }} />
      </div>


      </div>
    );
  }
}

export default LoanRepaymentPage;

