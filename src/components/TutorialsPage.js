import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/video-react/dist/video-react.css";

import { Player } from 'video-react';

class TutorialsPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <h2 style={{paddingLeft: '600px', paddingBottom: '100px'}}>Financial Tutorials</h2>
        <div style={{backgroundColor:'#DFF3F7', paddingRight:'500px', paddingLeft: '200px', display: 'grid', gridTemplateColumns: '500px 500px',
        gridGap: '20px', borderRadius: '5px', columnCount: 2}}>
         
         <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Budgeting Expenses</h6>
            </div>

          <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Managing Student Loans</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>

            <div><Player
            playsIncline
            poster=""
            src=""
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Tutorial</h6>
            </div>
        </div>
      </div>
    );
  }
}

export default TutorialsPage;
