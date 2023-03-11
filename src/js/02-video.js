import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_KEY = "videoplayer-current-time";

function onPlay(e){
localStorage.setItem(TIME_KEY, e.seconds);
}

player.on('timeupdate', onPlay);

player.setCurrentTime(localStorage.getItem(TIME_KEY));
 
