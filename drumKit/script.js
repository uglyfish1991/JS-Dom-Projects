//----------------------------------Variables-----------------------------------------//

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

//----------------------------------Functions-----------------------------------------//

const playDrum = (key)=>{
  if (key in sounds){
    sounds[key].play();
  }
}

const hightlightButton = (key)=>{
    if (key){
        let div = document.getElementById(key)
        div.classList.add('clicked')

        setTimeout(()=>{
            div.classList.remove('clicked')
        }, 400)
    }
}

//----------------------------------Event Listeners-----------------------------------------//

document.addEventListener('keydown', (event)=>{
  playDrum(event.key.toUpperCase());
  hightlightButton(event.key.toUpperCase());
});

buttons.addEventListener('click',(event)=>{
    playDrum(event.target.id)
    hightlightButton(event.target.id)
})