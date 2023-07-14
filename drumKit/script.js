//----------------------------------Variables-----------------------------------------//

const buttons = document.querySelector('.buttons');
const volume = document.getElementById("innerVol");
console.log(volume)
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

console.log(sounds.l)

//----------------------------------Functions-----------------------------------------//


// ---- called to play sound
// if key just ensures no empty strings
const playDrum = (key) => {
  if (key in sounds) {
    sounds[key].play();
    showVolume(key)
  }
}

// ---- called to add clicked class to relevant button and remove after 0.4s
// if key just ensures no empty strings + only mapped buttons respond
const hightlightButton = (key) => {
  if (key in sounds) {
    let div = document.getElementById(key)
    div.classList.add('clicked');

    setTimeout(() => {
      div.classList.remove('clicked');
    }, 400)
  }
}

// --- I have discovered I hate setInterval


function showVolume(key) {
  const volUp = setInterval(raiseVolume, 5)
  let widthPercent = 0
  function raiseVolume() {
    // once the bar is showing
    if (widthPercent == "100") {
      // stop the count up
      clearInterval(volUp);
      // if the bar got to 100 see if the track is long
      if (sounds[key].duration > 0.8) {
        // if so do a reverse width - speed based on length of track THIS WON'T WORK, BUT GET OVER IT
        const volDown = setInterval(lowerVolume, 8*sounds[key].duration)
        function lowerVolume() {
          // once the bar gets back to 0 width
          if (widthPercent === "0") {
            // stop the count down
            clearInterval(volDown)
          } else {
            // else reduce width by 1 each time
            widthPercent -= 1;
            volume.style.width = widthPercent + "%"
          }
        }
      }
      // too nested - this is from if the bar gets to 100 and the track isn't longer than 1.5
      volume.style.width = "0%";
    } else {
      // else count up on the width by 5 
      widthPercent += 5;
      volume.style.width = widthPercent + "%"
    }
  }
}

//----------------------------------Event Listeners-----------------------------------------//

document.addEventListener('keydown', (event) => {
  playDrum(event.key.toLowerCase());
  hightlightButton(event.key.toLowerCase());
});

buttons.addEventListener('click', (event) => {
  playDrum(event.target.id)
  hightlightButton(event.target.id)
})