// const
let audio = document.querySelector('.audio');

let arrSongs = [
  {
    audioFile: './assets/audio/Linkin_Park.mp3',
    container: "url('./assets/img/linkin.jpg')",
    player: "url('./assets/img/linkin.jpg')",
    singer: 'Linkin Park',
    album: 'Living Things',
    composition: 'Castle Of Glass'
  },
  {
    audioFile: './assets/audio/Imany.mp3',
    container: "url('./assets/img/imany.png')",
    player: "url('./assets/img/imany.png')",
    singer: 'Imany',
    album: 'The Shape of a Broken Heart',
    composition: 'You Will Never Know'
  },
  {
    audioFile: './assets/audio/Robert.mp3',
    container: "url('./assets/img/robert.jpg')",
    player: "url('./assets/img/robert.jpg')",
    singer: 'Robert Cristian, Alis Shuka',
    album: 'The Day Before',
    composition: 'The Day Before'
  },
  {
    audioFile: './assets/audio/Tomas.mp3',
    container: "url('./assets/img/tomas.jpg')",
    player: "url('./assets/img/tomas.jpg')",
    singer: 'Tomas Nevergreen',
    album: 'Since You Been Gone',
    composition: 'Since You Been Gone'
  },
  {
    audioFile: './assets/audio/Limp.mp3',
    container: "url('./assets/img/limp.jpg')",
    player: "url('./assets/img/limp.jpg')",
    singer: 'Limp Bizkit',
    album: 'Greatest Hitz',
    composition: 'Behind Blue Eyes'
  },
  {
    audioFile: './assets/audio/Purple.mp3',
    container: "url('./assets/img/purple.jpg')",
    player: "url('./assets/img/purple.jpg')",
    singer: 'Purple Disco Machine',
    album: 'Substitution',
    composition: 'Substitution'
  },  
  {
    audioFile: './assets/audio/Reamonn.mp3',
    container: "url('./assets/img/reamonn.jpg')",
    player: "url('./assets/img/reamonn.jpg')",
    singer: 'Reamonn',
    album: 'Tonight',
    composition: 'Tonight'
  },  
  {
    audioFile: './assets/audio/Scorpions.mp3',
    container: "url('./assets/img/scorpions.jpg')",
    player: "url('./assets/img/scorpions.jpg')",
    singer: 'Scorpions',
    album: 'Unbreakable',
    composition: 'Maybe I Maybe You'
  },  
  {
    audioFile: './assets/audio/Lemar.mp3',
    container: "url('./assets/img/lemar.jpg')",
    player: "url('./assets/img/lemar.jpg')",
    singer: 'Lemar',
    album: 'Time To Grow',
    composition: "If There's Any Justice"
  }  
];

let i = 0;
let track = arrSongs[i];
audio.src = track.audioFile;

const btnPlayPause = document.querySelector('.play-pause');
const timeRange = document.getElementById('timerange');
let trackDuration = document.querySelector('.track-duration');
let trackCurrentTime = document.querySelector('.current-time');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const containerBackground = document.querySelector('.container-bg');
const playerBackground = document.querySelector('.player__bg');
const album = document.querySelector('.album');
const singer = document.querySelector('.singer');
const composition = document.querySelector('.composition');


// functions
function playTrack(obj) { 
  showBackground(obj);
  showDataTrack(obj);
}
function showBackground(obj) { 
  containerBackground.style.backgroundImage = `${obj.container}`;
  playerBackground.style.backgroundImage = `${obj.player}`;
}
function showDataTrack(obj) { 
  album.innerHTML = obj.album;
  showShortSinger(obj);
  showShortComposition(obj);
}
function showShortSinger(obj) { 
  let str = '';
  if (obj.singer.length > 20) {
    str = `${obj.singer.slice(0, 20).concat() + '...'}`;
    singer.innerHTML = str;
  } else {
    singer.innerHTML = obj.singer;
  }
}
function showShortComposition(obj) { 
  let str = '';
  if (obj.composition.length > 15) {
    str = `${obj.composition.slice(0, 14).concat() + '...'}`;
    composition.innerHTML = str;
  } else {
    composition.innerHTML = obj.composition;
  }
}

function togglePlayPause() { 
  if (audio.paused) {
    btnPlayPause.className = 'play-pause pause';
    audio.play();
  } else { 
    btnPlayPause.className = 'play-pause play';
    audio.pause();
  }
}
function showTimeRange() {
  timeRange.value = audio.currentTime / audio.duration;
}
  
function scrub(e) { 
  const scrubTime = (e.offsetX / timeRange.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
}
function showDurationTrack(obj) { 
  let time = '';
  let durTr = audio.duration;
  durTr = durTr || 0;
  if (durTr % 60 <= 9) {
    time = `${Math.floor(durTr / 60) + ":" + "0" + Math.round(durTr % 60)}`;
  } else { 
    time = `${Math.floor(durTr / 60) + ":" + Math.round(durTr % 60)}`;
  }
 
  trackDuration.innerHTML = time;
}

function showCurrentTimeTrack() { 
  let time = '';
  if (audio.currentTime % 60 <= 9) {
    time = `${Math.floor(audio.currentTime / 60) + ":" + "0" + Math.round(audio.currentTime % 60)}`;
  } else { 
    time = `${Math.floor(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60)}`;
  }

  trackCurrentTime.innerHTML = time;
}

function prevTrack() {  
  if (i === 0) {
    i = arrSongs.length - 1;
  } else { 
    i--;
  }
  track = arrSongs[i];
  audio.src = track.audioFile;
  togglePlayPause();
  audio.play();
  playTrack(track);
  
}
function nextTrack() { 
  if (i === arrSongs.length - 1) {
    i = 0;
  } else { 
    i++;
  }
  track = arrSongs[i];
  audio.src = track.audioFile;
  togglePlayPause();
  audio.play();
  playTrack(track);
}

// events
playTrack(track);
btnPlayPause.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', function () { // вынести в updateData
  showTimeRange();
  showCurrentTimeTrack();
  showDurationTrack();
  
});

prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);

timeRange.addEventListener('click', scrub);
let mousedown = false;
timeRange.addEventListener('mousemove', (e) => { 
  mousedown && scrub(e);
  });
timeRange.addEventListener('mousedown', () => mousedown = true);
timeRange.addEventListener('mouseup', () => mousedown = false);




