//----------------------------------Variables-----------------------------------------//

const buttons = document.querySelector('.buttons');
const volume = document.getElementById("volume")
const sounds = {
  a: new Audio('sounds/boom.wav'),
  s: new Audio('sounds/clap.wav'),
  d: new Audio('sounds/hihat.wav'),
  f: new Audio('sounds/kick.wav'),
  g: new Audio('sounds/openhat.wav'),
  h: new Audio('sounds/ride.wav'),
  j: new Audio('sounds/snare.wav'),
  k: new Audio('sounds/tink.wav'),
  l: new Audio('sounds/tom.wav'),
}

//----------------------------------Functions-----------------------------------------//

const playDrum = (key)=>{
  if (key in sounds){
    sounds[key].play();
    move()
  }
}

const hightlightButton = (key)=>{
    if (key in sounds){
        let div = document.getElementById(key)
        div.classList.add('clicked');

        setTimeout(()=>{
            div.classList.remove('clicked');
        }, 400)
    }
  }

function move(){
const myInterval = setInterval(raiseVolume, 15)
let value = 0
function raiseVolume(){
  console.log(volume.value);
  if (value == "14"){
    clearInterval(myInterval);
    volume.value = "0";
  } else {
    value++;
    volume.value = value;
  }
}}

//----------------------------------Event Listeners-----------------------------------------//

document.addEventListener('keydown', (event)=>{
  playDrum(event.key.toLowerCase());
  hightlightButton(event.key.toLowerCase());
});

buttons.addEventListener('click',(event)=>{
    playDrum(event.target.id)
    hightlightButton(event.target.id)
})