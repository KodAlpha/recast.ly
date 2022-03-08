import VideoListEntry from './VideoListEntry.js';

// var VideoList = (props) => (
//   <div className="video-list">
//     <div>{props.Video[0]}</div>
//     <div><h5><em>videoListEntry</em> what view goes here?</h5></div>
//     <div><h5><em>videoListEntry</em> what view goes here?</h5></div>
//     <div><h5><em>videoListEntry</em> what view goes here?</h5></div>
//     <div><h5><em>videoListEntry</em> what view goes here?</h5></div>
//   </div>
// );

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video, index) =>
      <VideoListEntry onClick={(event) => props.handleClick(event)} key={video.id.videoId} video={video} />
    )}
  </div>
);

// function NumberList(props) {
// const numbers = props.numbers;
// return (
//   <ul>
//     {numbers.map((number) =>
//       <ListItem key={number.toString()}
//                 value={number} />
//     )}
//   </ul>
// );
// }


// {/* <Videos video={['someVideo', 'anotherVideo', 'videoThree', 'videoFour', 'videoFive']} /> */}

// class VideoEntries extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>{this.props.video}</div>
//     );
//   }
// }

// const Videos = (props) => (
//   <div>
//     {
//       props.video.map(video => <VideoEntries videos={video} />)
//     }
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
