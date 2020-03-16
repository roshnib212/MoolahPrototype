import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import City from '../images/seattle_city_image.jpg';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router-dom';

class HomePage extends React.Component {
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/register' />
    }
  }
  render(){
    return (
      <div style={{backgroundColor:'#C1E2DC'}}>
        <div style={{backgroundColor:'#C1E2DC'}} className="text-center">
          <img src={City} alt="seattle_city_image" />
          <h5 className="text">Register for the annual Human Centered Requirements and Design Conference<br />
          It will be held this year in Seattle, Washington!
          </h5>
          {this.renderRedirect()}
          <Button onClick={this.setRedirect} variant="secondary" size="lg">Register</Button>
        </div>
      </div>
    );
  }
}

export default HomePage;
