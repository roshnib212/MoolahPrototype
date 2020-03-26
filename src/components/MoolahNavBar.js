import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';




class MoolahNavBar extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <Navbar collapseOnSelect expand="lg" className="navbar-custom">
         <Navbar.Brand className="navbar-brand" variant="dark" bg="dark" href="/profile">Moolah</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="/profile">Profile</Nav.Link>
           <Nav.Link href="/overview">Overview</Nav.Link>
           <Nav.Link href="/budget">Budget</Nav.Link>
           <NavDropdown title="Student Loans" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/loanservicers">Loan Servicers/Providers</NavDropdown.Item>
              <NavDropdown.Item href="/loansummary">Loan Summary</NavDropdown.Item>
              <NavDropdown.Item href="/loanstatus">Loan Status</NavDropdown.Item>
              <NavDropdown.Item href="/loanrepayment">Loan Repayment</NavDropdown.Item>
              <NavDropdown.Item href="/loanforgiveness">Loan Forgiveness</NavDropdown.Item>
           </NavDropdown>
           <Nav.Link href="/tutorials">Tutorials</Nav.Link>
         </Nav>
         <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="dark">Search</Button>
         </Form>
        </Navbar>
      </div>
    );
  }
}

export default MoolahNavBar;
