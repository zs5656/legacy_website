// Set the date we're counting down to
var countDownDate = new Date("Oct 11, 2022 12:30:00").getTime();
var audio = new Audio('/beep.mp3');
audio.muted = true;

// Update the count down every 1 second 
var a = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  var distance3 = Math.floor((countDownDate - now) / 1000);

  // Time calculations for days, hours, minutes and seconds
  // as distance is output in milliseconds
  // 1 day = 86,400,000 milliseconds, 1000*60*60*24
  // 1 hour = 3,600,000 milliseconds, 1000*60*60
  // 1 minute = 60,000 milliseconds, 1000*60
  // 1 second = 1,000 milliseconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("c11").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  document.getElementById("c12").innerHTML = distance3;
  audio.play();

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(a);
    document.getElementById("c11").innerHTML = "The time this countdown is counting down to has come.";
  }
}, 1000);

function Unmute() {
  audio.muted = false;
}

function Mute() {
  audio.muted = true;
}