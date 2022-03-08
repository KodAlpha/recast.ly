import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// console.log(exampleVideoData);

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em><VideoPlayer video={exampleVideoData[0]}/></em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={exampleVideoData} /></div>
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      // currentVideoPlayer: {this.props},
      // videosInList: {this.props....}
    };
    // this.onVideoClick = this.onVideoClick.bind(this)
  }



  onVideoClick(event) {
    // event.preventDefault
    console.log(event);
    this.setState({
      clicked: !this.state.clicked,
      // currentVideoPlayer:'',
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={exampleVideoData[0]}/></div>
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.onVideoClick} videos={exampleVideoData} />
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
