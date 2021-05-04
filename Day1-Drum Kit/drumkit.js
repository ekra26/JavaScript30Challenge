//Arrays with button letters and audio files)//
var buttonLetters = ['A','S','D','F','G','H','J','K','L'];
var audioFiles = ["sounds/clap.wav","sounds/hihat.wav","sounds/kick.wav","sounds/openhat.wav","sounds/boom.wav","sounds/ride.wav","sounds/snare.wav","sounds/tom.wav","sounds/tink.wav"]

//event listener for when user presses keydown//
document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    var audio = new Audio (audioFiles[buttonLetters.indexOf(keyName.toUpperCase())]);
    audio.currentTime = 0; //rewinds to the start of audio if key is pressed over and over
    audio.play();
    document.getElementById(keyName.toUpperCase()).classList.add('playing');
});

//remove playing class after key is up//
document.addEventListener('keyup', (event) => {
    var keyName = event.key;
    document.getElementById(keyName.toUpperCase()).classList.remove('playing');
});
