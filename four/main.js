var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 1;
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var l = w/5;
var base = '#2a334f';
var colors;

function background() {
  ctx.fillStyle = base;
  ctx.fillRect(0,0,w,h);
}


function getColors() {
  var color = Please.make_color({
    format: 'hsv'
  });

  colors = Please.make_scheme(color, {
    scheme_type: 'analogous'
  });

  console.log(colors);
}

function draw() {
  background();

  for (var i = 0; i < 5; i++) {
    var rand = Math.random() * 1000;

    ctx.beginPath();
    ctx.moveTo(i * l, h);
    ctx.quadraticCurveTo(((i*2) + 1) * (l/2), rand,(i+1) * l, h);
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle = colors[i];
    ctx.fill();
    ctx.stroke();

    rand = Math.random() * 1000;
    ctx.beginPath();
    ctx.moveTo(i * l, 0);
    ctx.quadraticCurveTo(((i*2) + 1) * (l/2), rand,(i+1) * l, 0);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.strokeStyle = colors[i];
    ctx.stroke();
  }

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

getColors();
fillScreen();
background();
draw();
