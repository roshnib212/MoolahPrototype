import React from 'react';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from "react-player";


class TutorialsPage extends React.Component{
  render(){
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <h2 style={{paddingLeft: '600px', paddingBottom: '100px', backgroundColor: ""}}>Financial Tutorials</h2>
        <div style={{backgroundColor:'#DFF3F7', paddingRight:'200px', paddingLeft: '200px', display: 'grid', gridTemplateColumns: '500px 500px',
        gridGap: '20px', borderRadius: '5px', columnCount: 2}}>
         
         <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=5DXKOlr7SeI"
            />
            <h6 style={{paddingLeft: '160px', paddingTop: '10px', paddingBottom: '10px'}}>Budgeting Expenses</h6>
            </div>

          <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=flG4gFIiZzU"
            />
            <h6 style={{paddingLeft: '150px', paddingTop: '10px', paddingBottom: '10px'}}>Managing Student Loans</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=BeAou8wXagw"
            />
            <h6 style={{paddingLeft: '100px', paddingTop: '10px', paddingBottom: '10px'}}>Spending Less Throughout the Week</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=HQzoZfc3GwQ"
            />
            <h6 style={{paddingLeft: '170px', paddingTop: '10px', paddingBottom: '10px'}}>Managing Savings</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=Y77B8kaRS1g"
            />
            <h6 style={{paddingLeft: '170px', paddingTop: '10px', paddingBottom: '10px'}}>Creating a Budget</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=rqPIG3QcrDE"
            />
            <h6 style={{paddingLeft: '160px', paddingTop: '10px', paddingBottom: '10px'}}>Managing Your Budget</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=Nqs0CvY-PmI"
            />
            <h6 style={{paddingLeft: '130px', paddingTop: '10px', paddingBottom: '10px'}}>Student Loan Payment Options</h6>
            </div>

            <div><ReactPlayer
            height="300px"
            width="500px"
            url="https://www.youtube.com/watch?v=e-LpPTnme_M"
            />
            <h6 style={{paddingLeft: '160px', paddingTop: '10px', paddingBottom: '10px'}}>Student Loan Alleviation</h6>
            </div>

        </div>

      </div>
    );
  }
}

export default TutorialsPage;
