import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEOPLAYER_KEY = 'videoplayer - current - time';

const player = new Player('vimeo-player', {
  id: 'vimeo - player',
  width: 640,
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(VIDEOPLAYER_KEY, JSON.stringify(data));
  }, 1000)
);

if (!localStorage.getItem(VIDEOPLAYER_KEY)) {
  return;
} else {
  player
    .setCurrentTime(JSON.parse(localStorage.getItem(VIDEOPLAYER_KEY)).seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
