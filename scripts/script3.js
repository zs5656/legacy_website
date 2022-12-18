//Heavily inspired and based on code by Jamie Uttariello
  var startTime;
  var updatedTime;
  var difference;
  var tInterval;
  var savedTime;
  var paused = 0;
  var running = 0;

  function start() {
    if(!running) {  //if(!0) = if(1) = if true
      startTime = new Date().getTime();
      tInterval = setInterval(getShowTime, 1);

      paused = 0;
      running = 1;
    } 
  }

  function pause() {
    if (!difference) {
    } else if (!paused) {
      clearInterval(tInterval);
      savedTime = difference;
      paused = 1;
      running = 0;
    } else {
      start();
    }
  }

  function reset() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    running = 0;
    paused = 0;
  }

  function getShowTime() {
    updatedTime = new Date().getTime();
    if (savedTime) {
      difference = (updatedTime - startTime) + savedTime;
    } else {
      difference = updatedTime - startTime;
    }

    var hours = Math.floor((difference % (86400000)) / (3600000));
    var minutes = Math.floor((difference % (3600000)) / (60000));
    var seconds = Math.floor((difference % (60000)) / 1000);
    var milliseconds = Math.floor((difference % (60000)) / 100);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;

    stopw.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  }
}