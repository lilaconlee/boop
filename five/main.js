var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 10;
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var n = 7;
var r = w/(2 *n) - 20;
var base = '#ffffff';
var cur;

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
  window.onresize = resize;
  this.addEventListener('mousemove', mouse);
}

function mouse(e) {
  var x = w/n;
  cur = Math.floor((e.clientX * 2)/x);
  if (e.clientY > h/2 + r && e.clientY < h/2 - r) {
    cur = n + 1;
  }
  draw();
}

function draw() {
  background();
  for (var i = 0; i < n; i++) {
    ctx.beginPath();
    var y = h/2;
    if (i === cur) {
      var radius = w/(2 *n) - 20 * .5;
    } else {
      var radius = r;
    }
    var x = i * 2 * w/(2 *n) + w/(2 *n);
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.stroke();
  }
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
