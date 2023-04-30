import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', _.throttle(() => {
  const currentTime = player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

