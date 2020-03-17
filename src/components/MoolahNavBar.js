import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';


class MoolahNavBar extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <Navbar bg="dark" variant="dark">
         <Navbar.Brand href="/profile">Moolah</Navbar.Brand>
         <Nav className="mr-auto">
           <Nav.Link href="/profile">Profile</Nav.Link>
           <Nav.Link href="/overview">Overview</Nav.Link>
           <Nav.Link href="/budget">Budget</Nav.Link>
           <Nav.Link href="/studentloans">Student Loans</Nav.Link>
           <Nav.Link href="/tutorials">Tutorials</Nav.Link>
         </Nav>
         <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
           <Button variant="outline-info">Search</Button>
         </Form>
        </Navbar>
      </div>
    );
  }
}

export default MoolahNavBar;
