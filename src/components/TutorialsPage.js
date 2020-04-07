import React from 'react';
import '../stylesheets/home.css';
import MoolahNavBar from './MoolahNavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/video-react/dist/video-react.css";
import ReactPlayer from "react-player";


class TutorialsPage extends React.Component{
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {

  }

  render(){

    //let videos = [{
    //  
    //}]
//
    //let filteredResults = this.props.videos.filter(
    //  (video) => {
    //    return video.name.indexOf(this.state.search) !== -1;
    //  }
    //);
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <h2 style={{paddingLeft: '600px', paddingBottom: '100px', backgroundColor: ""}}>Financial Tutorials</h2>
        <div style={{backgroundColor:'#DFF3F7', paddingRight:'200px', paddingLeft: '200px',
        borderRadius: '5px', columnCount: 1, alignItems: 'center'}}>

          <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=5DXKOlr7SeI"
            />
            <h5 style={{paddingLeft: '10px'}}>How To Budget And Save Money</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=flG4gFIiZzU"
            />
            <h5 style={{paddingLeft: '10px'}}>Managing Student Loans</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 2 Weeks Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=BeAou8wXagw"
            />
            <h5 style={{paddingLeft: '10px'}}>Spending Less Throughout the Week</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=HQzoZfc3GwQ"
            />
            <h5 href style={{paddingLeft: '10px'}}>Managing Savings</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=Y77B8kaRS1g"
            />
            <h5 style={{paddingLeft: '10px'}}>Creating a Budget</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=rqPIG3QcrDE"
            />
            <h5 style={{paddingLeft: '10px'}}>Managing Your Budget</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=Nqs0CvY-PmI"
            />
            <h5 style={{paddingLeft: '10px'}}>Student Loan Payment Options</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

          <ul style={{display: 'grid', gridTemplateColumns: '250px 500px', gridTemplateRows: '60px 20px 90px'}}>
            <ReactPlayer
            style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
            height="100%"
            width="100%"
            url="https://www.youtube.com/watch?v=Iat9AuCl_nU"
            />
            <h5 style={{paddingLeft: '10px'}}>Student Loan Alleviation</h5>
            <p style={{paddingLeft: '10px'}}>Posted: 1 Week Ago</p>
            <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>This is an example description! This video represents how to budget your blah blah blah in a more organized manner!</p>
          </ul>

        </div>
      </div>
    );
  }
}

export default TutorialsPage;
