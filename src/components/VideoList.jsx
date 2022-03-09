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

var VideoList = (props, onVideoClick) => (
  <div className="video-list">
    {props.videos.map((video) =>
      <VideoListEntry onVideoClick={props.onVideoClick} key={video.id.videoId} video={video} />
    )}
  </div>
);


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
