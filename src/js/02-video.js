import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle'; 
const iframe = document.querySelector("iframe")
const framePlay = new Player(iframe);


const timePlay = function (data) {
    let time = data.seconds
    localStorage.setItem("videoplayer-current-time", time);
}

const storedTime = localStorage.getItem("videoplayer-current-time");

function errorFn() {
    alert("Error!");
}

if (storedTime) {
    framePlay.setCurrentTime(storedTime).catch(errorFn);
}
framePlay.on('timeupdate', throttle(timePlay, 1000));