function Hide() {
  document.getElementById('c12').style.display = 'none';
  document.getElementById("buttona").onclick = Show;
}

function Show() {
  document.getElementById('c12').style.display = 'block';
  document.getElementById("buttona").onclick = Hide;
}

function Hide1() {
  document.getElementById('c13').style.display = 'none';
  document.getElementById("buttonb").onclick = Show1;
}

function Show1() {
  document.getElementById('c13').style.display = 'block';
  document.getElementById("buttonb").onclick = Hide1;
}

// core code from w3schools
// Set the date we're counting down to
var countDownDate = new Date("Nov 1, 2021 14:00:00").getTime();

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
  var days = Math.floor(distance / (86400000));
  var hours = Math.floor((distance % (86400000)) / (3600000));
  var minutes = Math.floor((distance % (3600000)) / (60000));
  var seconds = Math.floor((distance % (60000)) / 1000);
  var ms = distance % 1000;

  // Output the result in an element with id="demo"
  document.getElementById("c11").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " + ms + "ms ";
  document.getElementById("c12").innerHTML = distance;
  document.getElementById("c13").innerHTML = distance3;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(a);
    document.getElementById("c11").innerHTML = "The time this countdown is counting down to has come.";
  }
}, 1);