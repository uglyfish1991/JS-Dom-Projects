

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

const hightlightButton = (key)=>{
    if (key){
        document.getElementById(key).style.backgroundColor="red"
    }
}

document.addEventListener('keydown', (event)=>{
  playDrum(event.key.toUpperCase());
  hightlightButton(event.key.toUpperCase());
});

buttons.addEventListener('click',(event)=>{
    playDrum(event.target.id)
    hightlightButton(event.target.id)
    // event.target.classList.add("clicked")
    // setTimeout(()=>{
    //     event.target.classList.remove("clicked")}, 800
    // )
})