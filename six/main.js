var canvas = document.getElementById('canvas');
var toggle = document.getElementById('toggle');
var ctx = canvas.getContext('2d');
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var base = '#ffffff';
var cur = [];
var OFF = '';
var ON = '*';

function background() {
  ctx.fillStyle = base;
  ctx.fillRect(0,0,w,h);
}

function fillScreen() {
  canvas.width = w;
  canvas.height = h;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

function init() {
  toggle.innerHTML = ON;
  this.addEventListener('mousemove', mouse);
  this.addEventListener('click', function () {
    if (toggle.innerHTML === ON) {
      toggle.innerHTML = OFF;
    } else {
      toggle.innerHTML = ON;
    }
  });
}

function mouse(e) {
  if (toggle.innerHTML === ON) {
    cur = [e.clientX * 2, e.clientY * 2];
    draw();
  }
}

function draw() {
  ctx.beginPath();
  ctx.arc(cur[0], cur[1], 100, 0, Math.PI * 2);
  ctx.stroke();
}

function resize() {
  h = window.innerHeight * window.devicePixelRatio;
  w = window.innerWidth * window.devicePixelRatio;
  fillScreen();
  background();
}

fillScreen();
init();
draw();
