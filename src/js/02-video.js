import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem(CURRENT_TIME_KEY, time);
  });
}, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY) || 0);


