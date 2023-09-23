// const
let audio = document.querySelector('.audio');

//менять audio при нажатии на переключения треков
//создать массив объектов. В объекте: адреса к фалам с музыкой, картинкой, название альбома
let arrSongs = [
  {
    audioFile: './assets/audio/Linkin_Park.mp3',
    container: '../img/linkin.jpg',
    player: '../img/linkin.jpg',
    singer: 'Linkin Park',
    album: 'Living Things',
    track: 'Castle Of Glass'
  },
  {
    audioFile: './assets/audio/Imany.mp3',
    container: '../img/imany.png',
    player: '../img/imany.png',
    singer: 'Imany',
    album: 'The Shape of a Broken Heart',
    track: 'You Will Never Know'
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


// functions
function togglePlayPause() { 
  if (audio.paused) {
    btnPlayPause.className = 'play-pause pause';
    audio.play();
  } else { 
    btnPlayPause.className = 'play-pause play';
    audio.pause();
  }
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


  // trackDuration.innerHTML = `${Math.floor(audio.duration / 60) + ":" + Math.round(audio.duration % 60)}`;
  
}

function showCurrentTimeTrack() { 
  let time = '';
  if (audio.currentTime % 60 <= 9) {
    time = `${Math.floor(audio.currentTime / 60) + ":" + "0" + Math.round(audio.currentTime % 60)}`;
  } else { 
    time = `${Math.floor(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60)}`;
  }

  trackCurrentTime.innerHTML = time;
  
  
//   trackCurrentTime.innerHTML = `${Math.floor(audio.currentTime / 60) + ":" + Math.round(audio.currentTime % 60)}`;
}

function prevTrack() {  
  if (i === 0) {
    i = arrSongs.length - 1;
  } else { 
    i--;
  }
  track = arrSongs[i];
  audio.src = track.audioFile;
  audio.play();
}

// events




btnPlayPause.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', function () {
  timeRange.value = audio.currentTime / audio.duration; //положение ползунка
  showCurrentTimeTrack();
  showDurationTrack();
  
});

timeRange.addEventListener('click', scrub);
prevBtn.addEventListener('click', prevTrack);

console.log(trackDuration.innerHTML);
console.log(audio.onloadedmetadata);


