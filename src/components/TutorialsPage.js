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
          description: 'In this video, Stefan provides you with some money management tips for how to budget and save money. Saving is very important. You have to make sure that you are putting money aside every month.'
        },
        {
          url: "https://www.youtube.com/watch?v=flG4gFIiZzU",
          title: 'Managing Student Loans',
          posted: 2,
          description: 'Check out this video to learn more about changing repayment plans, postponing or reducing your payments, or combining your federal student loans.'
        },
        {
          url: "https://www.youtube.com/watch?v=BeAou8wXagw",
          title: 'Spending Less Throughout the Week',
          posted: 1,
          description: 'Do you have a problem with impulse spending and shopping? Do you buy things that you dont need? In this video, we will share 15 easy and practical tips to stop spending money aimlessly.'
        },
        {
          url: "https://www.youtube.com/watch?v=HQzoZfc3GwQ",
          title: 'Managing Savings',
          posted: 1,
          description: 'In this video we present a high level overview on how to manage your money using the 50/30/20 Rule. Money management is 90% discipline and 10% knowledge. The 50/30/20 rule will help you to create and manage a budget.'
        },
        {
          url: "https://www.youtube.com/watch?v=Y77B8kaRS1g",
          title: 'Creating a Budget',
          posted: 1,
          description: 'These basic tips will teach you how to make a budget and save money.'
        },
        {
          url: "https://www.youtube.com/watch?v=rqPIG3QcrDE",
          title: 'Managing Your Budget',
          posted: 2,
          description: 'Learn the basics of planning between paychecks in order to help you save up some money!'
        },
        {
          url: "https://www.youtube.com/watch?v=Nqs0CvY-PmI",
          title: 'Student Loan Payment Options',
          posted: 1,
          description: 'Understanding how to repay your federal student loans can save you a lot of time and money. There are several repayment plans available, providing the flexibility you need.'
        },
        {
          url: "https://www.youtube.com/watch?v=Iat9AuCl_nU",
          title: 'Student Loan Alleviation',
          posted: 3,
          description: 'In this video we will discuss the basics of student loans so you can graduate in the best financial position possible.'
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
          <input style={{display: 'flex', position: 'relative', left: '27px'}} size="50" type="text" value={this.state.search} placeholder="Search for Videos!" onChange={this.updateSearch.bind(this)} />
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
        <p style={{paddingLeft: '10px'}}>Posted: {this.props.video.posted} Week(s) Ago</p>
        <p style={{paddingLeft: '10px', paddingTop: '15px', color: 'gray'}}>{this.props.video.description}</p>
      </div>
    );
  }
}

export default TutorialsPage;
