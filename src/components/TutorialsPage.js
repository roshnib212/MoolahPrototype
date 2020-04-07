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
      search: '',
      videos: [
        {
          url: "https://www.youtube.com/watch?v=5DXKOlr7SeI",
          title: 'How To Budget And Save Money',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=flG4gFIiZzU",
          title: 'Managing Student Loans',
          posted: 2,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=BeAou8wXagw",
          title: 'Spending Less Throughout the Week',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=HQzoZfc3GwQ",
          title: 'Managing Savings',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=Y77B8kaRS1g",
          title: 'Creating a Budget',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=rqPIG3QcrDE",
          title: 'Managing Your Budget',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=Nqs0CvY-PmI",
          title: 'Student Loan Payment Options',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
        {
          url: "https://www.youtube.com/watch?v=Iat9AuCl_nU",
          title: 'Student Loan Alleviation',
          posted: 1,
          description: 'This is an example description! This video represents how to budget your blah blah blah in a more organized manner!'
        },
      ]
    }
  }
  updateSearch(event){
    this.setState({search: event.target.value});
  }

  render(){
    let filteredVideos = this.state.videos.filter(
      (video) => {
        return video.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div style={{backgroundColor:'#DFF3F7'}}>
        <MoolahNavBar />
        <br></br>
        <h2 className="text-center">Financial Tutorials</h2>
        <br></br>
        <div style={{backgroundColor:'#DFF3F7', paddingRight:'200px', paddingLeft: '200px',
        borderRadius: '5px', columnCount: 1, alignItems: 'center'}}>
          <input size="50" type="text" value={this.state.search} placeholder="Search for Videos!" onChange={this.updateSearch.bind(this)} />
          <br></br>
          <br></br>
          <ul>
            {filteredVideos.map((video) => {
              return <Tutorial video={video} />
            })}
          </ul>
        </div>
      </div>
    );
  }
}

class Tutorial extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{display: 'grid', gridTemplateColumns: '250px 600px', gridTemplateRows: '60px 20px 90px', paddingBottom: '50px'}}>
        <ReactPlayer
          style={{gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 4}}
          height="100%"
          width="100%"
          url={this.props.video.url}
        />
        <h5 style={{paddingLeft: '10px'}}>{this.props.video.title}</h5>
        <p style={{paddingLeft: '10px'}}>Posted: {this.props.video.posted} Weeks Ago</p>
        <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>{this.props.video.description}</p>
      </div>
    );
  }
}

export default TutorialsPage;
