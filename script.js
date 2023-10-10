// You can convert to base64 to bypass browser audio analyzation issues base64guru
// create a file input HTML element to bypass browser issue

const button1 = document.getElementById('button1');
// let audio1 = new Audio('data:audio/x-wav;base64,insertBase64Here');
let audio1 = new Audio();
audio1.src = 'Sightless2Flowers.wav';
// This is the old syntx, below should work just fine
// const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const audioCtx = new AudioContext();
console.log(audioCtx);


button1.addEventListener('click', function() {
    audio1.play();
    audio1.addEventListener('playing', function() {
        console.log('Audio 1 started playing!');
    });
    audio1.addEventListener('ended', function() {
        console.log('Audio 1 ended!');
    });
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', playSound);
function playSound() {
    const oscillator = audioCtx.createOscillator();
    oscillator.connect(audioCtx.destination);
    oscillator.type = 'sine'; //sine, square, sawtooth, triangle
    oscillator.start();
    setTimeout(function() {
        oscillator.stop();
    }, 1000);
}