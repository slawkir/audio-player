// const
let audio = document.querySelector('.audio');
const btnPlayPause = document.querySelector('.play-pause');
const timeRange = document.getElementById('timerange');


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




// events
btnPlayPause.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', function () {
  timeRange.value = audio.currentTime / audio.duration;
  console.log(audio.currentTime);
  console.log(audio.duration);
});

// timeRange.addEventListener('click', () => { 
//   console.log(timeRange.value);
// });