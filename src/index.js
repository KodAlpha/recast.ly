// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoListEntry.js';

ReactDOM.render(<App />, document.getElementById('app'));