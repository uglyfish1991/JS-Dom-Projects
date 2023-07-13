//----------------------------------Variables-----------------------------------------//

const buttons = document.querySelector('.buttons');
const volume = document.getElementById("innerVol");

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
  
const myInterval = setInterval(raiseVolume, 10)
let widthPercent = 0
function raiseVolume(){
  if (widthPercent == "100"){
    clearInterval(myInterval);
    volume.style.width = "0%";
  } else {
    widthPercent+=5;
    console.log(widthPercent)
    volume.style.width = widthPercent + "%"
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