var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var radius = 50;
var base = '#000000';
var circles = [];
// var colors = ['#00ffff', '#ff00ff', '#ffff00'];
var colors = ['#00ffff', '#ff00ff', '#ffff00'];

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
  background();
}

function mouse(e) {
  var color = colors[Math.floor(Math.random() * 3)];
  circles.unshift([e.clientX * 2, e.clientY * 2, color]);
  draw();
}

function getColors() {
  var color = Please.make_color({
    format: 'hsv'
  });

  colors = Please.make_scheme(color, {
    scheme_type: 'complement'
  });

  console.log(colors);
}

function circle(x, y, r, c) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = base;
  ctx.fillStyle = ctx.strokeStyle = c;
  ctx.fill();
  ctx.stroke();
}

function draw() {
  if (circles.length > 20) {
    var cur = circles.pop();
    circle(cur[0], cur[1], radius + 2, base);
  }

  for (var i = circles.length - 1; i > 0; i--) {
    circle(circles[i][0], circles[i][1], radius, circles[i][2]);
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
