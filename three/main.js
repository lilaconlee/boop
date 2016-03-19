var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 10;
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var base = '#b35656';

function background() {
  ctx.fillStyle = base;
  ctx.fillRect(0,0,w,h);
}

function draw() {
  var rand = Math.random() * 500;
  console.log(rand);

  background();
  ctx.beginPath();
  ctx.moveTo(0, 500);
  ctx.quadraticCurveTo(300, rand, w/3, 500);
  ctx.stroke();

  rand = Math.random() * 500
  ctx.beginPath();
  ctx.moveTo(w/3, 500);
  ctx.quadraticCurveTo(300, rand, 2 * w/3, 500);
  ctx.stroke();

  rand = Math.random() * 500
  ctx.beginPath();
  ctx.moveTo(2 * w/3, 500);
  ctx.quadraticCurveTo(300, rand, w, 500);
  ctx.stroke();

  setTimeout(function() {
    requestAnimationFrame(draw);
  }, 1000/fps);
}

function fillScreen() {
  canvas.width = w;
  canvas.height = h;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

fillScreen();
background();
draw();
