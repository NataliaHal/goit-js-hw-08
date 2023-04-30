import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('#vimeo-player'));

player.on('timeupdate', throttle(() => {
  const currentTime = player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

