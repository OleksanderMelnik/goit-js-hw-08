import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

// console.log(iframe);

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};






