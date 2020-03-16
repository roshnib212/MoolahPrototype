import React from 'react';
import ReactDOM from 'react-dom';
import FormData from './FormData.js';
import '../stylesheets/home.css';

class RegistrationPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#C1E2DC'}}>
        <h2 className="text">Registration Page</h2>
        <FormData />
      </div>
    );
  }
}

export default RegistrationPage;
