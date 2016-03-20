var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 5000;
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var l = w/5;
var base = '#2a334f';
var colors;
var cur = [];
var next = [];

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

    if (cur[i] < next[i]) {
      cur[i] = cur[i] + 1;
    } else if (cur[i] > next[i]) {
      cur[i] = cur[i] - 1;
    } else if (cur[i] === next[i]) {
      next[i] = Math.floor(Math.random() * 1000);
    }

    ctx.beginPath();
    ctx.moveTo(i * l, h);
    ctx.quadraticCurveTo(((i*2) + 1) * (l/2), cur[i],(i+1) * l, h);
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle = colors[i];
    ctx.fill();
    ctx.stroke();

    if (cur[i+5] < next[i+5]) {
      cur[i+5] = cur[i+5] + 1;
    } else if (cur[i+5] > next[i+5]) {
      cur[i+5] = cur[i+5] - 1;
    } else if (cur[i+5] === next[i+5]) {
      next[i+5] = Math.floor(Math.random() * (1000 - 200) + 200);
    }

    ctx.beginPath();
    ctx.moveTo(i * l, 0);
    ctx.quadraticCurveTo(((i*2) + 1) * (l/2), cur[i+5],(i+1) * l, 0);
    ctx.closePath();
    ctx.fillStyle = ctx.strokeStyle = colors[i];
    ctx.fill();
    ctx.stroke();
  }

  setTimeout(function() {
    requestAnimationFrame(draw);
  }, 1000/fps);
}

function init() {
  for (var i = 0; i < 5; i++) {
    cur.push(Math.floor(Math.random() * 1000));
    next.push(Math.floor(Math.random() * 1000));
  }

  for (var i = 0; i < 5; i++) {
    cur.push(Math.floor(Math.random() * (1000 - 200) + 200));
    next.push(Math.floor(Math.random() * (1000 - 200) + 200));
  }
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
init();
draw();
