const buttons = document.querySelector('.buttons');

const sounds = {
  A: new Audio('sounds/boom.wav'),
  S: new Audio('sounds/clap.wav'),
  D: new Audio('sounds/hihat.wav'),
  F: new Audio('sounds/kick.wav'),
  G: new Audio('sounds/openhat.wav'),
  H: new Audio('sounds/ride.wav'),
  J: new Audio('sounds/snare.wav'),
  K: new Audio('sounds/tink.wav'),
  L: new Audio('sounds/tom.wav'),
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