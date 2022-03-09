import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback, errorCB) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: query,
    contentType: 'application/json',
    success: callback || function (data) {
      console.log('sup!');
    },
    error: errorCB || function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
};


export default searchYouTube;


/*---------------------------------------------------*/

// $.get('https://app-hrsei-api.herokuapp.com/api/recastly/videos', {
//   youtubeApiKey: YOUTUBE_API_KEY,
//   q: query,
//   part: 'snippet',
//   type: 'video'
// })
//   .done((items) => {
//     console.log('hello');
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail(({responseJSON}) => {
//     responseJSON.error.errors.forEach((err) =>
//       console.error(err)
//     );
//   });