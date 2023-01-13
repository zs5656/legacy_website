// logs at the beginning of the website loading
console.log("This website was loaded on " + Date())

function redir() {
  document.location = "/index.html"
}

//scw image toggle from dark to light
function Light() {
  document.getElementById("myImage").src = "https://scwco.cf/images/scw_wbg.jpg";
  document.getElementById("b1").onclick = Dark;
}

//scw image toggle from light to dark
function Dark() {
  document.getElementById("myImage").src = "https://scwco.cf/images/scw_bbg.jpg";
  document.getElementById("b1").onclick = Light;
}

function Input() {
  var a1 = prompt("Please enter a name\nDO NOT LEAVE THIS BLANK");
  var a2 = prompt("Please enter a date\nDO NOT LEAVE THIS BLANK");
  var a3 = prompt("Please enter a career\nDO NOT LEAVE THIS BLANK");
}

function Article() {
  var title = prompt("Please enter a title for your article");
  var p1 = prompt("Please type the 1st paragraph");
  var img1 = prompt("Please enter a URL for an image (if any)\nThis image will go between the 1st and 2nd paragraphs. If there is NO PICTURE click Cancel.");
  var p2 = prompt("Please type the 2nd paragraph");
  var img2 = prompt("Please enter a URL for an image (if any)\nThis image will go between the 2nd and 3rd paragraphs. If there is NO PICTURE click Cancel.");
  var p3 = prompt("Please type the 3rd paragraph");
  var author = prompt("Who should be listed as the author?");


  document.getElementById("title").innerHTML = (title);
  document.getElementById("para1").innerHTML = (p1);
  document.getElementById("img1").src = (img1);
  document.getElementById("para2").innerHTML = (p2);
  document.getElementById("img2").src = (img2);
  document.getElementById("para3").innerHTML = (p3);
  document.getElementById("author").innerHTML = (author);
  document.getElementById("time").innerHTML = "Published on " + Date();
}

//calculations, need i really explain?
function Add(){
  var x = parseInt(prompt("Please enter a value for x")); 
  var y = parseInt(prompt("Please enter a value for y"));
  var z = x + y;
  document.getElementById("demo").innerHTML = (z);
}

function Subtract(){
  var x = parseInt(prompt("Please enter a value for x"));
  var y = parseInt(prompt("Please enter a value for y"));
  var z = x - y
  document.getElementById("demo").innerHTML = (z)
}

function Multiply(){
  var x = parseInt(prompt("Please enter a value for x"));
  var y = parseInt(prompt("Please enter a value for y"));
  var z = x * y
  document.getElementById("demo").innerHTML = (z)
}

function Divide(){
  var x = parseInt(prompt("Please enter a value for x"));
  var y = parseInt(prompt("Please enter a value for y"));
  var z = x / y
  document.getElementById("demo").innerHTML = (z)
}

function Modulus(){
  var x = parseInt(prompt("Please enter a value for x"));
  var y = parseInt(prompt("Please enter a value for y"));
  var z = x % y
  document.getElementById("demo").innerHTML = (z)
}
//calculations end

//bufflord picture hiding 
function Hide() {
  document.getElementById('demo5').style.display = 'none';
  document.getElementById("b4a").onclick = Show;
}

//bufflord picture showing
function Show() {
  document.getElementById('demo5').style.display = 'block';
  document.getElementById("b4a").onclick = Hide;
}


//redirect code that would come in handy later
var r = new URL(document.location).searchParams.get("r")
if (r === "jaxbot") {
  document.location = "https://youtu.be/dQw4w9WgXcQ"
}

function startTime() {
  var today = new Date();
  var n = today.getTimezoneOffset();
  var n = (n / -60);
  var x = (n % 1);
  if (x != 0) {
  	var c = (n < 0) ? "1": "2";
    if (c = 1) {
    	var n = (n + 0.2);
    } else {
    	var n = (n - 0.2); 
    }
  }
  var n = n.toFixed(2);
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var da = today.getDate(); 
  var y = today.getFullYear();
  var mo = today.getMonth();
  mo = mo + 1;
  m = checkTime(m);
  s = checkTime(s);
  var dy;
  switch (today.getDay()) {
    case 0:
      dy = "SUN";
      break;
    case 1:
      dy = "MON";
      break;
    case 2:
      dy = "TUE";
      break;
    case 3:
      dy = "WED";
      break;
    case 4:
      dy = "THU";
      break;
    case 5:
      dy = "FRI";
      break;
    case 6:
      dy = "SAT";
      break;
    default: 
      dy = "NA";
      break;
  }

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  document.getElementById("timezone").innerHTML = "GMT " + n;
  document.getElementById("date").innerHTML = dy + "," + da + "/" + mo + "/" + y;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function checkTz(a) {
  if (a > 0) {
    a = "+" + a
  } else if ((a % 1) != 0) { 
    a = a + 1;
  }
  return a;
}

var b = 1;  
var v = 0;
var c = 0;
//initialises xy at the start.
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  v = Math.floor(Math.random() * (max - min) + min);
}

function Input(){
  for (let i = 0; i < 26; i++) {
    getRandomInt(1, 75);
    if (i > 24) { 
      i = 0; 
      b = 1;
      break;
    } else {
      document.getElementById("b" + b).innerHTML = v;
      b++; 
    }
  }
}
