const buttons = document.querySelector('.buttons');

const sounds = {
  A: new Audio('boom.wav'),
  S: new Audio('clap.wav'),
  D: new Audio('hihat.wav'),
  F: new Audio('kick.wav'),
  G: new Audio('openhat.wav'),
  H: new Audio('ride.wav'),
  J: new Audio('snare.wav'),
  K: new Audio('tink.wav'),
  L: new Audio('tom.wav'),
}

const playDrum = (key)=>{
  if (key in sounds){
    sounds[key].play();
  }
}

document.addEventListener('keydown', (e)=>{
  playDrum(e.key.toUpperCase());
});

buttons.addEventListener('click',(event)=>{
    playDrum(event.target.id)
})